import { Component, OnInit } from '@angular/core';
import {Cartas} from "../Models/cartasModel";
import * as bootstrap from 'bootstrap';
declare var window: any;

@Component({
  selector: 'app-mode-quiero-jugar',
  templateUrl: './mode-quiero-jugar.component.html',
  styleUrls: ['./mode-quiero-jugar.component.css']
})
export class ModeQuieroJugarComponent implements OnInit {
  nivel:number=1;
  movimientosMax:number=3;//cantidad de movimientos permitidos
  timeLeft=30;//tiempo en segundos
  timeLeftAux=0;

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

  movimientosRestantes=0;
  paresSeleccionados:any=[];
  paresSeleccionadosIndex:any=[];

  imgCarta_reverso='ass'

  //Variables para el temporizador

  interval:any;
  minutos:number=0;
  segundos:number=0;
  temporizador: string='';

  //timecartas

  timecartas=1;

  //modal1
  formModal: any;
  losseMessage1: string='Te has quedado sin movimientos';
  losseMessageTime: string='Te has quedado sin tiempo';
  losseMessage:string='Te has quedado sin movimientos';

  //modal2
  formModal2: any;

  //modal3
  formModal3: any;

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
        this.movimientosMax=5;
        this.timeLeft=30;
        //this.escogerCartas(2);
        this.escogerCartas2(4);
        this.numCartas=2
        break;
      }
      case 1: {
        this.nivel=1;
        this.movimientosMax=5;
        this.timeLeft=30;
        //this.escogerCartas(2);
        this.escogerCartas2(4);
        this.numCartas=2
        break;
      }
      case 2: {
        this.nivel=2;
        this.movimientosMax=9;
        this.timeLeft=90;
        //this.escogerCartas(4);
        this.escogerCartas2(8);
        this.numCartas=4;
        break;
      }
      case 3: {
        this.nivel=3;
        this.movimientosMax=25;
        this.timeLeft=200;
        //this.escogerCartas(8);
        this.escogerCartas2(16);
        this.numCartas=8;
        break;
      }
    }
    this.timeLeftAux=this.timeLeft;
    this.movimientosRestantes=this.movimientosMax;
    //this.barajarCartas();
    this.barajarCartas2();

    //***TEMPORIZADOR***

    this.startTimer();

    //**modal**

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('myModal2')
    );
    this.formModal3 = new window.bootstrap.Modal(
      document.getElementById('myModal3')
    );
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.temporizador=this.secondsToString(this.timeLeft);
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      else{
        clearInterval(this.interval);
        this.losseMessage=this.losseMessageTime;
        this.openFormModal();
      }
    },1000)
  }

  secondsToString(seconds:number) {
    let minute: string | number = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    let second: string | number = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return minute + ':' + second;
  }

  /*escogerCartas(cantidad:number){
    let cartasAux: Cartas[]=[];
    for (let i = 0; i < cantidad; i++) {
      cartasAux.push(this.masoCartas[i]);
    }
    this.cartas=cartasAux;

  }*/
  escogerCartas2(cantidad:number){
    let cartasAux: Cartas[]=[];
    for (let i = 0; i < cantidad; i++) {
      cartasAux.push(this.masoCartas2[i]);
    }
    this.cartas=cartasAux;

  }

 /* barajarCartas(){
    let cartasAux = this.cartas.concat(this.cartas);
    cartasAux.sort(()=>Math.random() -0.5);//funcion para ordenar y barajar
    console.log(cartasAux);
    this.cartasJuego=cartasAux;
  }*/
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

      this.movimientosRestantes-=1;
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
    if(this.movimientosRestantes==0 && this.puntos!=(this.cartasJuego.length/2)){
      this.openFormModal();
    }

    if (this.puntos==this.cartasJuego.length/2){
      clearInterval(this.interval);
      if(this.nivel<3){
        this.openFormModal2();
      }else{
        this.openFormModal3();
      }

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

  openFormModal() {
    clearInterval(this.interval);
    this.tiempoTotal+=this.timeLeftAux;
    this.tiempoText= this.secondsToString(this.tiempoTotal);
    this.formModal.show();
  }

  reiniciar(){
    clearInterval(this.interval);
    this.formModal.hide();
    this.revelarCartas();
    this.escogerNivel(1);
    this.intentos++;


  }
  //funciones modal ganaste
  openFormModal2() {
    clearInterval(this.interval);
    this.tiempoTotal+=(this.timeLeftAux-this.timeLeft);
    this.tiempoText= this.secondsToString(this.tiempoTotal);
    this.formModal2.show();
  }

  reiniciar2(){
    clearInterval(this.interval);
    this.formModal2.hide();
    this.revelarCartas();
    this.escogerNivel(1);
    this.intentos++;


  }

  nextLevel(){
    clearInterval(this.interval);
    this.formModal2.hide();
    if (this.nivel<3){
      console.log(this.nivel++);
      this.revelarCartas();
      this.escogerNivel(this.nivel++);
    }


  }

  //ResultadosFinales

  openFormModal3() {

    clearInterval(this.interval);
    this.tiempoTotal+=(this.timeLeftAux-this.timeLeft);
    this.tiempoText= this.secondsToString(this.tiempoTotal);
    this.formModal3.show();

  }

  revelarCartas(){
    for (let i = 0; i < this.cartasJuego.length; i++) {
      this.cartasJuego[i].isVisible=true;
      this.cartasJuego[i].isSelect=false;
    }
  }

  closeFormModal3(){
    this.formModal3.hide();
  }



}
