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

  btnEliminarMostrar(tarea: any) {
    tarea.hover = false
  }
  btnEliminarOcultar(tarea:any){
    tarea.hover = true
  }
  eliminarTarea(tarea:any){
    const indice = this.tareas.indexOf(tarea)
    this.tareas.splice(indice, 1)
  }
}
