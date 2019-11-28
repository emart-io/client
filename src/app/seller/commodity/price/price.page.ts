import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Commodity, Price } from '../../../../sdk/commodity_pb';
import { utilsService } from '../../../providers/utils.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.page.html',
  styleUrls: ['./price.page.scss'],
})
export class PricePage {
  @Input() commodity: Commodity;

  constructor(private modalController: ModalController) { }

  ionViewWillEnter() {
    if (this.commodity.pricesList.length == 0) {
      let price = new Price();
      price.name = '单买价';
      this.commodity.pricesList.push(price);
      let price2 = new Price();
      price2.name = '拼单价';
      this.commodity.pricesList.push(price2);
    }
  }

  addPrice() {
    let price = new Price();
    price.name = '规格描述';
    this.commodity.pricesList.push(price);
  }

  removePrice(i: number) {
    this.commodity.pricesList.splice(i, 1);
  }

  close() {
    for (let item of this.commodity.pricesList) {
      var reg = /^(-?\d+)(\.\d{1,2})?$/;
      if (!reg.test(item.value)) {
        return utilsService.alert('请输入正确价格');
      }
    };
    this.modalController.dismiss({ commodity: this.commodity });
  }

}
