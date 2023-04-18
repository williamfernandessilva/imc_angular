import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


