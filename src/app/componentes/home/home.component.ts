import { JsonPipe } from '@angular/common';
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
    { tarea: 'Tarea de prueba 1', estado: false, hover: true, ocultar: false },
    { tarea: 'Tarea de prueba 2', estado: true, hover: true, ocultar: false },
    { tarea: 'Tarea de prueba 3', estado: true, hover: true, ocultar: false },
  ];
  ocultarBoton = true;
  itemsLeft!: number;

  estado1 = true
  estado2 = false
  icono = "../../../assets/images/icon-moon.svg"
  itemTarea!:any
  localStorageValues!:any

  constructor() {}

  inputTareas = new FormControl();
  checkbox = new FormControl();

  ngOnInit(): void {
    this.localStorageValues = localStorage.getItem("tareas")
    this.tareas = JSON.parse(this.localStorageValues || [])
    this.itemsLeftFunction();
  }


  inputEnter(data: any) {
    this.itemTarea = {
      tarea: data,
      estado: false,
      hover: true,
      ocultar: false
    }
    this.tareas.push(this.itemTarea)
    console.log(data);
    //Vacia el input, mediante un reset() del FormContro()
    this.inputTareas.reset();
    //LocalStorage
    localStorage.setItem("tareas", JSON.stringify(this.tareas))
    this.itemsLeftFunction();
    
  }
  estado(tarea: any, evento: any) {
    this.tareas[this.tareas.indexOf(tarea)].estado = evento.target.checked;
    localStorage.setItem("tareas", JSON.stringify(this.tareas))
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
    localStorage.setItem("tareas", JSON.stringify(this.tareas))
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
    localStorage.setItem("tareas", JSON.stringify(this.tareas))
    this.itemsLeftFunction();
  }
  modoNoche(){
    if(this.estado1 === true){
      this.estado1 = false
      this.estado2 = true
      this.icono = "../../../assets/images/icon-sun.svg"

    } else{
      this.estado1 = true
      this.estado2 = false
      this.icono = "../../../assets/images/icon-moon.svg"
    }
  }

}
