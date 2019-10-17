import { ModalController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { apiService } from '../../providers/api.service'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { AddressPageModule } from '../address/address.module';

declare let AMap;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // @ViewChild('map_container', null) map_container: ElementRef;
  // map: any; // 地图对象
  address = apiService.currentAddress;

  slideOpts = {
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
    },
  };

  constructor(
    private router: Router,
    private statusBar: StatusBar,
    private geolocation: Geolocation,
    private modalController: ModalController) { }

  changeStatusBar() {
    //this.statusBar.overlaysWebView(false);
    this.statusBar.styleDefault();
  }

  ionViewWillEnter() {
    // this.map = new AMap.Map(this.map_container.nativeElement, {
    //   //resizeEnable: true,
    //   //rotateEnable: true,
    //   //pitchEnable: true,
    //   //zoom: 10,
    //   //pitch: 80,
    //   //rotation: -15,
    //   viewMode: '2D',//开启3D视图,默认为关闭
    //   buildingAnimation: true,//楼块出现是否带动画
    //   showBuildingBlock: true,
    //   expandZoomRange: true,
    //   //zooms: [3, 20],
    //   //center: [116.333926, 39.997245]
    //   mapStyle: 'amap://styles/light',
    // });
    // AMap.plugin('AMap.ToolBar', () => {
    //   var toolbar = new AMap.ToolBar();
    //   this.map.addControl(toolbar);
    // });
    this.getLocation();
  }

  async openAddress() {
    // const modal = await this.modalController.create({
    //   component: AddressPageModule,
    // });
    // return await modal.present();
    this.router.navigateByUrl('/address');
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      AMap.service('AMap.Geocoder', () => {
        AMap.convertFrom(resp.coords.longitude + "," + resp.coords.latitude, "gps",
          (status, result) => {
            if (status == "complete") {
              const positionInfo = [result.locations[0].P + '', result.locations[0].O + ''];
              //this.map.setCenter(positionInfo);

              const geocoder = new AMap.Geocoder({});
              geocoder.getAddress(positionInfo, (status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                  // const marker = new AMap.Marker({
                  //   map: this.map,
                  //   position: positionInfo
                  // });
                  // marker.setLabel({
                  //   offset: new AMap.Pixel(20, 20), // 修改label相对于marker的位置
                  //   content: result.regeocode.formattedAddress
                  // });
                  apiService.currentAddress = result.regeocode.formattedAddress;
                  this.address = result.regeocode.addressComponent.province
                    + result.regeocode.addressComponent.city
                    + result.regeocode.addressComponent.district;
                } else {
                  console.log('获取地址失败');
                }
              });
            } else {
              alert("坐标转换失败," + status + "/" + result);
            }
          });
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}