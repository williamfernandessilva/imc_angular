import { Component } from '@angular/core';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  peso : number;
  altura :number;
  imc : number;

constructor(): number{
  let imc =0;
  let alt =this.altura;
  let pes =this.peso;

  this.imc =pes/ (alt **2);
  alert(this.imc);

 this.imc;
}


}



