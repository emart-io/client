import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { utilsService } from '../../providers/utils.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.page.html',
  styleUrls: ['./preference.page.scss'],
})
export class PreferencePage {
  isLogin = false;
  host = environment.apiUrl;

  constructor(private router: Router) { }

  ionViewWillEnter() {
    if (utilsService.getUser()) {
      this.isLogin = true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  logout() {
    utilsService.confirm('确定要退出登录？', () => {
      utilsService.setUser(null);
      utilsService.events('user:logout').emit('');
      this.router.navigateByUrl('/login');
    });
  }

  clear() {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => {
        for (let registration of registrations) {
          registration.unregister();
        }
      });
    caches.keys().then(names => {
      for (let name of names)
        caches.delete(name);
    });
    //window.localStorage.clear();
    utilsService.toast('缓存已清除');
  }
}
