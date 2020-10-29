import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dam1',
  templateUrl: './dam1.page.html',
  styleUrls: ['./dam1.page.scss'],
})
export class DAM1Page implements OnInit {

  checkPRO = true;
  checkBase = false;
  checkLeng = true;
  checkEntor = false;
  checkFol = false;
  checkIng = false;

  constructor(public toastcTRL: ToastController) { }

  async openAlerta() {
    const toast = await this.toastcTRL.create({
      message: 'Se ha guardado su asignatura',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }
  ngOnInit() {
  }

}
