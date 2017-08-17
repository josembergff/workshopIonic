import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  latitude: Number;
  longitude: Number;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private alertCtrl: AlertController) {
    this.atualizarLocalizacao();
  }

  atualizarLocalizacao(refresh?: any) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
      if (refresh) {
        refresh.complete();
      }
    }).catch((error) => {
      console.log('Error getting location', error);
      let alert = this.alertCtrl.create({
        title: 'Falha na localização',
        subTitle: 'Falha ao obter a sua localização atual.',
        buttons: ['Entendido']
      });
      alert.present();
      if (refresh) {
        refresh.complete();
      }
    });
  }

}
