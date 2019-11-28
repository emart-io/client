import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoryPage } from '../category/category.page';
import { Commodity } from '../../../../sdk/commodity_pb';
import { apiService, utilsService } from '../../../providers/utils.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage {
  commodity: Commodity;

  constructor(
    private router: Router,
    private modalController: ModalController) {
    this.commodity = <Commodity>this.router.getCurrentNavigation().extras.state;
  }

  async presentModal(ev: any) {
    const modal = await this.modalController.create({
      component: CategoryPage
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.commodity.category = data.category;
  }

  submit() {
    if (!utilsService.check(this.commodity.title)) {
      return utilsService.alert('标题含有不合规内容，请检查');
    }
    apiService.commodityClient.update(this.commodity, apiService.metaData, (err: any, response: Commodity) => {
      if (err) {
        utilsService.alert(JSON.stringify(err));
      }
    });
  }
}
