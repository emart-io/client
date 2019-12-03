import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Order, ListQuery } from '../../../sdk/order_pb';
import { AlertController } from '@ionic/angular';
import { Commodity } from '../../../sdk/commodity_pb';
import { environment } from '../../../environments/environment';
import { apiService, utilsService } from '../../providers/utils.service';

@Component({
  selector: 'app-order',
  templateUrl: 'order.page.html',
  styleUrls: ['order.page.scss']
})
export class OrderPage {
  orders: Order[];
  status = '';
  statuses: string[] = ['全部', '待付款', '待发货', '待收货', '待评价'];
  host = environment.apiUrl;
  formatRBM = utilsService.formatRMB;
  slideOpts = {
    slidesPerView: 5,
  };

  constructor(
    private router: Router,
    private alertController: AlertController) { }

  listByStatus(status: string) {
    this.status = status;
    this.ionViewWillEnter();
  }

  ionViewWillEnter() {
    if (!utilsService.getUser()) {
      return
    }
    this.orders = []
    let listQuery = new ListQuery();
    listQuery.user = utilsService.getUser();
    listQuery.status = this.status == "全部" ? '' : this.status;
    let stream = apiService.orderClient.listForBuyer(listQuery, apiService.metaData);
    stream.on('data', response => {
      this.orders.push(response);
      console.log(response.toObject())
    });
    stream.on('error', err => {
      utilsService.alert(JSON.stringify(err));
    });
  }

  gotoOrderDetail(order: Order) {
    this.router.navigateByUrl('buyer_order_detail', { state: order });
  }

  async refund(order: Order) {
    const alert = await this.alertController.create({
      header: '退款理由',
      inputs: [
        {
          name: 'refund',
          type: 'text',
          value: order.comment,
          placeholder: '请输入退款理由'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel'
        }, {
          text: '确定',
          handler: (alertData) => {
            if (!alertData.refund) {
              utilsService.alert('请输入退款理由');
            } else {
              order.status = '退款中';
              order.comment = alertData.refund;
              apiService.orderClient.update(order, apiService.metaData, (err: any, response: Order) => {
                if (err) {
                  utilsService.alert(JSON.stringify(err));
                } else {
                  console.log(response);
                }
              });
            }
          }
        }
      ]
    });

    await alert.present();
  }

  buyAgain(commodity: Commodity) {
    apiService.commodityClient.get(commodity, apiService.metaData, (err: any, response: Commodity) => {
      if (err) {
        utilsService.alert(JSON.stringify(err));
      } else {
        this.router.navigateByUrl('/detail', { state: response });
      }
    });
  }

  confirmReceive(order: Order) {
    if (order.status == '待收货') {
      utilsService.confirm('确认收货后，卖家将收到付款.', () => {
        order.status = '待评价';
        apiService.orderClient.update(order, apiService.metaData, (err: any, response: Order) => {
          if (err) {
            utilsService.alert(JSON.stringify(err));
          }
        })
      });
    }
  }

  delete(order: Order) {
    utilsService.confirm('确认删除此订单？', () => {
      apiService.orderClient.delete(order, apiService.metaData, (err: any, response: any) => {
        if (err) {
          utilsService.alert(JSON.stringify(err));
        } else {
          this.ionViewWillEnter();
        }
      })
    });
  }
}