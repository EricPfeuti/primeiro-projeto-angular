import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  lado1 = '';
  lado2 = '';
  lado3 = '';
  triangulo = '';
  tipoTriangulo = '';

  verificarTriangulo(){
    if((parseFloat(this.lado1) + parseFloat(this.lado2)) > parseFloat(this.lado3)){
      if(parseFloat(this.lado1) == parseFloat(this.lado2) && parseFloat(this.lado2) == parseFloat(this.lado3) && parseFloat(this.lado1) == parseFloat(this.lado3)){
        this.triangulo = "Triângulo Equilátero!!"
      } else if(parseFloat(this.lado1) == parseFloat(this.lado2) || parseFloat(this.lado1) == parseFloat(this.lado3)){
        this.triangulo = "Triângulo Isósceles!!"
      } else if(parseFloat(this.lado1) != parseFloat(this.lado2) && parseFloat(this.lado2) != parseFloat(this.lado3) && parseFloat(this.lado1) != parseFloat(this.lado3)){
        this.triangulo = "Triângulo Escaleno!!"
      }
    } else {
      this.triangulo = "Não é um triângulo!!";
    }
  }
}
