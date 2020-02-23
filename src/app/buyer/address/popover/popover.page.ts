import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Address, User } from '../../../../sdk/user_pb';
import { apiService, utilsService } from '../../../providers/utils.service'

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage {
  @Input() location: string;
  address = new Address()

  constructor(
    private router: Router,
    private popoverController: PopoverController) { }

  ionViewWillEnter() {
    if (!utilsService.storage.get('user', User)) {
      this.popoverController.dismiss();
      return this.router.navigateByUrl('/login');
    }
    this.address.location = this.location;
  }

  save() {
    if (!this.address.contact) {
      return utilsService.alert('收货人为空');
    }
    if (!this.address.telephone) {
      return utilsService.alert('手机号码为空');
    }
    if (!this.address.location) {
      return utilsService.alert('详细地址为空');
    }

    this.address.userId = utilsService.storage.get('user', User).id;
    apiService.addressClient.add(this.address, apiService.metaData, (err: any, response: Address) => {
      if (err) {
        utilsService.alert(JSON.stringify(err));
      } else {
        console.log(response);
        this.popoverController.dismiss();
      }
    });
  }

  cancel() {
    this.popoverController.dismiss();
  }
}
