import { Component } from '@angular/core';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  peso: number;
  altura: number;
  imc: number;
  resu: string;


  calc(){
    this.imc = this.peso/ (this.altura * this.altura);

    if (this.imc   <= 18.4)
     this.resu= 'magreza';

     if  (this.imc >= 18.5 )
     this.resu= 'peso ideal';

     if  (this.imc >= 24.9 )
     this.resu= 'acima do peso';

     if  (this.imc >= 29.9 )
     this.resu= 'obesidade grau I';

     if  (this.imc >= 34.9 )
     this.resu= 'obesidade grau II';

     if  (this.imc >= 39.9 )
     this.resu= 'obesidade grau III';
     


  }


}



