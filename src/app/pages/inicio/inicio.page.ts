import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public toastcTRL: ToastController) { }

  async openAlerta() {
    const toast = await this.toastcTRL.create({
      message: 'Error en la carga del perfil',
      duration: 500,
      position: 'bottom'
    });
    toast.present();
  }
  ngOnInit() {
  }

}
