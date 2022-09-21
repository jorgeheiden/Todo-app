import { ElementSchemaRegistry } from '@angular/compiler';
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

  estado1 = true
  estado2 = false

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
  mostrarTodasLasTareas(){
    this.tareas.map( elemento => elemento.ocultar = false)
  }
  tareasActivas() {
      this.tareas.map( elemento =>{
      if(elemento.estado === true){
        elemento.ocultar = true
      }
      else if(elemento.estado === false){
        elemento.ocultar = false
      }
    })
  }
  tareasCompletadas(){
    this.tareas.map( elemento =>{
      if( elemento.estado === true){
        elemento.ocultar = false
      }
      else if( elemento.estado === false){
        elemento.ocultar = true
      }
    })
  }
  limpiarTareasCompletadas(){
    this.tareas = this.tareas.filter( elementos =>{
      return elementos.estado === false
    })
  }
  modoNoche(){
    if(this.estado1 === true){
      this.estado1 = false
      this.estado2 = true
    } else{
      this.estado1 = true
      this.estado2 = false
    }
  }

}
