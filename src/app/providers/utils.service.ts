import { ApiService } from './api.service'
import { AlertController } from '@ionic/angular';
import { Commodity } from '../../sdk/commodity_pb';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  injector: Injector;
  keyword = '';
  commodity: Commodity;
  selectedCategory = '';
  // https://lbs.amap.com/api/javascript-api/reference/lnglat-to-address#regeocode
  address = {
    formattedAddress: '湖北省荆门市',
    addressComponent: { province: '湖北省', city: "荆门市", district: '沙洋县' }
  };

  formatRMB(v: Number): string {
    var str = v.toString();
    var s1 = str.substring(0, str.length - 2);
    var s2 = str.substring(str.length - 2, str.length);
    return s1 + '.' + s2
  }

  async alert(content: string, title: string = '提示') {
    const alert = await this.injector.get(AlertController).create({
      //header: title,
      subHeader: content,
      //message: content,
      buttons: ['OK']
    });
    await alert.present();
  }

}

export const utilsService = new UtilsService();
export const apiService = new ApiService();