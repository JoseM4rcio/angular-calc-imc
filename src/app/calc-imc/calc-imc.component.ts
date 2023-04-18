import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-imc',
  templateUrl: './calc-imc.component.html',
  styleUrls: ['./calc-imc.component.css']
})
export class CalcIMCComponent {

    altura: number = 0;
    imc: number | undefined;
    peso: number = 0;
    result: string | null = null;
    calculo() {
      if (this.altura !== null || this.peso !== null) {
        this.imc = this.peso / (this.altura * this.altura);
        if (this.imc < 18.5){
         this.result = 'você está abaixo do peso!';
        } else if (this.imc < 25) {
          this.result = 'você está no peso ideal';
        } else if (this.imc < 30) {
          this.result = 'você está em sobrepeso';
        } else if (this.imc < 40) {
          this.result = 'você está em obesidade';
        }
        else {
          this.result = 'você está em obesidade grave';
        }
      }
    }
}