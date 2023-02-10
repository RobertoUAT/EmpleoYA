import { Component } from '@angular/core';

@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
  styleUrls: ['./practicas.component.css']
})
export class PracticasComponent {

  //*delaracion de variables*/
texto!: string
nombre!: string
apeido!: string
nombrecompleto!: string
numero1!: number
numero2!: number
resultado!: number
resultado2!: number
valor1!: number
valor2!: number
resultado3!: number

 //*este es un metodo*/
 calcular(){
this.resultado3 = this.valor1 + this.valor2
 }

  //*este es un metodo*/
  ngOnInit(){
      //*asignacion de valores*/
    this.texto = "Hola Mundo!"
    this.nombre = "Roberto "
    this.apeido = "Pacheco"
    this.nombrecompleto = this.nombre + this.apeido

    //*ACTIVIDAD 3*/
    this.numero1 = 10
    this.numero2 = 5
    this.resultado = this.numero1 + this.numero2

     //*ACTIVIDAD 4*/
    this.resultado2 =this.numero1 * this.numero2    

      //*ACTIVIDAD 1*/
      //*costrar en consola*/
    console.log(this.texto)

    //*ACTIVIDAD 2*/
      //*mostrar en alerta*/
    alert(this.texto)
  }

}
