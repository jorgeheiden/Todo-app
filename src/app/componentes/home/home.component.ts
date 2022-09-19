import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tareas = [
    { tarea: 'tarea 1', estado: false, hover: true, ocultar: false },
    { tarea: 'tarea 2', estado: true, hover: true, ocultar: false },
    { tarea: 'tarea 3', estado: true, hover: true, ocultar: false },
  ];
  ocultarBoton = true;
  itemsLeft!: number;
  constructor() {}

  inputTareas = new FormControl();
  checkbox = new FormControl();

  ngOnInit(): void {
    this.itemsLeftFunction();
  }
  inputEnter(tarea: any) {
    this.tareas.push({
      tarea: tarea,
      estado: false,
      hover: true,
      ocultar: false,
    });
    console.log(tarea);
    //Vacia el input, mediante un reset() del FormContro()
    this.inputTareas.reset();
    this.itemsLeftFunction();
  }
  estado(tarea: any, evento: any) {
    this.tareas[this.tareas.indexOf(tarea)].estado = evento.target.checked;
  }

  btnEliminarMostrar(tarea: any) {
    tarea.hover = false;
  }
  btnEliminarOcultar(tarea: any) {
    tarea.hover = true;
  }
  eliminarTarea(tarea: any) {
    const indice = this.tareas.indexOf(tarea);
    this.tareas.splice(indice, 1);
    this.itemsLeftFunction();
  }
  itemsLeftFunction() {
    this.itemsLeft = this.tareas.length;
  }
  active() {
    this.tareas
      .filter((elemento) => elemento.estado)
      .map((elemento) => (elemento.ocultar = true));
  }
}
