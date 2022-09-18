import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tareas = [
    { tarea: 'tarea 1', estado: false, hover: true },
    { tarea: 'tarea 2', estado: true, hover: true },
  ];
  ocultarBoton = true;
  
  constructor() {}

  inputTareas = new FormControl();
  checkbox = new FormControl()

  ngOnInit(): void {
  }
  inputEnter(tarea: any) {
    this.tareas.push({ tarea: tarea, estado: false, hover: true });
    console.log(tarea);
    //Vacia el input, mediante un reset() del FormContro()
    this.inputTareas.reset();
  }
  estado(tarea:any, evento:any){

      this.tareas[this.tareas.indexOf(tarea)].estado = evento.target.checked

  }

  btnEliminar(tarea: any) {
    console.log(tarea);
    tarea.hover = false;
  }
  ocultarbtn() {
    this.ocultarBoton = true;
  }

  
}
