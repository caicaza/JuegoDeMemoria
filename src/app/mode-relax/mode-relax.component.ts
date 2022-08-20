import { Component, OnInit } from '@angular/core';
import {Cartas} from "../Models/cartasModel";
import * as bootstrap from 'bootstrap';
declare var window: any;


@Component({
  selector: 'app-mode-relax',
  templateUrl: './mode-relax.component.html',
  styleUrls: ['./mode-relax.component.css']
})
export class ModeRelaxComponent implements OnInit {
  nivel:number=1;

  masoCartas2: Cartas[]=[
    {id: 1, imagen: 'assets/img/carta_as.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 1, imagen: 'assets/img/carta_as.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 2, imagen: 'assets/img/carta_2.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 2, imagen: 'assets/img/carta_2.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 3, imagen: 'assets/img/carta_3.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 3, imagen: 'assets/img/carta_3.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 4, imagen: 'assets/img/carta_4.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 4, imagen: 'assets/img/carta_4.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 5, imagen: 'assets/img/carta_5.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 5, imagen: 'assets/img/carta_5.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 6, imagen: 'assets/img/carta_6.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 6, imagen: 'assets/img/carta_6.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 7, imagen: 'assets/img/carta_7.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 7, imagen: 'assets/img/carta_7.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 8, imagen: 'assets/img/carta_8.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
    {id: 8, imagen: 'assets/img/carta_8.png',
      imagenReverso: 'assets/img/carta_reverso.png',
      isVisible: true,isSelect: false},
  ];
  cartas: Cartas[]=[];
  cartasJuego: Cartas[]=[];
  puntos=0;
  numCartas=2;


  paresSeleccionados:any=[];
  paresSeleccionadosIndex:any=[];


  //timecartas

  timecartas=1;

  formModalLevel: any;
  //modal2
  formModal2: any;

  //resultados
  intentos=1;
  tiempoTotal=0;
  tiempoText='';

  constructor() { }

  ngOnInit(): void {
    this.escogerNivel(1);
  }

  escogerNivel(level:number){
    this.puntos=0;
    //***CARTAS****
    switch (level){
      default:{
        this.nivel=1;
        //this.escogerCartas(2);
        this.escogerCartas2(4);
        this.numCartas=2
        break;
      }
      case 1: {
        this.nivel=1;
        //this.escogerCartas(2);
        this.escogerCartas2(4);
        this.numCartas=2
        break;
      }
      case 2: {
        this.nivel=2;
        //this.escogerCartas(4);
        this.escogerCartas2(8);
        this.numCartas=4;
        break;
      }
      case 3: {
        this.nivel=3;
        //this.escogerCartas(8);
        this.escogerCartas2(16);
        this.numCartas=8;
        break;
      }
    }
    //this.barajarCartas();
    this.barajarCartas2();

      //**modal**


    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('myModal2')
    );

    this.formModalLevel = new window.bootstrap.Modal(
      document.getElementById('myModalLevels')
    );

  }


  secondsToString(seconds:number) {
    let minute: string | number = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    let second: string | number = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return minute + ':' + second;
  }


  escogerCartas2(cantidad:number){
    let cartasAux: Cartas[]=[];
    for (let i = 0; i < cantidad; i++) {
      cartasAux.push(this.masoCartas2[i]);
    }
    this.cartas=cartasAux;

  }

  barajarCartas2(){
    let cartasAux = this.cartas;
    cartasAux.sort(()=>Math.random() -0.5);//funcion para ordenar y barajar
    console.log(cartasAux);
    this.cartasJuego=cartasAux;
  }

  clickCarta(numeroCarta:number, index:number){
    //guardamos los pares seleccionados
    this.paresSeleccionadosIndex.push(index);
    console.log(this.paresSeleccionadosIndex);
    //nos aseguremos que no pase nada cuando se haga clic en la misma carta
    if (this.paresSeleccionadosIndex.length==2){
      if(this.paresSeleccionadosIndex[0]==this.paresSeleccionadosIndex[1]){
        this.paresSeleccionadosIndex.pop();
      }
      else{
        this.paresSeleccionados.push(numeroCarta);
      }
    }else{
      //voltear carta
      this.cartasJuego[index].isSelect=true;
      //añadimos la carta a lista de pares
      this.paresSeleccionados.push(numeroCarta);
    }

    let parAux = this.paresSeleccionados;
    //cuando se selecciono correctamente 2 pares
    if (parAux.length==2){
      //voltear carta
      this.cartasJuego[index].isSelect=true;
      //cuando son pares iguales
      if (parAux[0]==parAux[1]){
        this.puntos+=1;
        //this.cartasJuego[index].isVisible=false;
        //quitamos las cartas de la pantalla
        let intervalQuitarCarta = setInterval(() => {
          if(this.timecartas > 0) {
            this.timecartas--;
          }
          else{
            this.quitarCarta(parAux[0]);
            this.timecartas=1;
            clearInterval(intervalQuitarCarta);
          }
        },400)

      }
      else{
        this.cartasTimer();
      }
      this.paresSeleccionados=[];
      this.paresSeleccionadosIndex=[];
    }
    if (this.puntos==this.cartasJuego.length/2){
      this.openFormModal2();
    }
  }

  quitarCarta(index:number){
    for (let i = 0; i < this.cartasJuego.length; i++) {
      if (index==this.cartasJuego[i].id){
        this.cartasJuego[i].isVisible=false;
      }

    }
  }

  cartasTimer() {
    let parI=this.paresSeleccionadosIndex;
    let intervalCartas = setInterval(() => {

      if(this.timecartas > 0) {
        this.timecartas--;
      }
      else{
        this.cartasJuego[parI[0]].isSelect=false;
        this.cartasJuego[parI[1]].isSelect=false;
        this.timecartas=1;
        clearInterval(intervalCartas);
      }
    },400)
  }

  //funciones modal perdiste


  //funciones modal ganaste
  openFormModal2() {
    this.tiempoText= this.secondsToString(this.tiempoTotal);
    this.formModal2.show();
  }

  reiniciar2(){
    this.formModal2.hide();
    this.revelarCartas();
    this.escogerNivel(1);
    this.intentos++;


  }

  nextLevel(){
    this.formModal2.hide();
    if (this.nivel<3){
      console.log(this.nivel++);
      this.revelarCartas();
      this.escogerNivel(this.nivel++);
    }


  }

  //cambiarNivel Modal
  openFormModalLevel() {

    this.formModalLevel.show();
  }
  closeFormModalLevel(level:number){
    this.formModalLevel.hide();
    this.revelarCartas();
    this.escogerNivel(level);
  }

  closeFormModalLevel2(){
    this.formModalLevel.hide();

  }



  revelarCartas(){
    for (let i = 0; i < this.cartasJuego.length; i++) {
      this.cartasJuego[i].isVisible=true;
      this.cartasJuego[i].isSelect=false;
    }
  }





}
