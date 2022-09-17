import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ocultarBoton = true
  constructor() { }

  ngOnInit(): void {
  }

  btnEliminar(){
    this.ocultarBoton = false
  }
  ocultarbtn(){
    this.ocultarBoton = true
  }
}
