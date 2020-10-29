import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  Nombre = 'Alberto';
  apellidos = 'Gonzalez Bermejo';
  poblacion = 'Almagro';
  edad = '24';
  Numerotelefono = '678123412';
  codigoPostal = '13270';
  Estudios = 'DAM';
  email = 'agonzalezbermejo13@gmail.com';
  contrasena = 'Duende123';
  constructor() { }

  ngOnInit() {
  }

}
