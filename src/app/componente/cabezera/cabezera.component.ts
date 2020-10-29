import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styleUrls: ['./cabezera.component.scss'],
})
export class CabezeraComponent implements OnInit {


  @Input() titulo: string;
  constructor() { }

  ngOnInit() {}

}
