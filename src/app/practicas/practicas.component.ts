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


  //*este es un metodo*/
  ngOnInit(){
      //*asignacion de valores*/
    this.texto = "Hola Mundo!"
    this.nombre = "Roberto "
    this.apeido = "Pacheco"
    this.nombrecompleto = this.nombre + this.apeido

      //*ACTIVIDAD 1*/
      //*costrar en consola*/
    console.log(this.texto)

      //*mostrar en alerta*/
    alert(this.texto)
  }

}
