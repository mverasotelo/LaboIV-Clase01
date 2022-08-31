import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  edadUno : number | null = null;
  edadDos : number | null = null;
  resultadoPromedio : number | null = null;
  resultadoSuma : number | null = null;

  public calcular():void{
    if(this.edadUno && this.edadDos){
      this.resultadoSuma = this.edadUno+this.edadDos;
      this.resultadoPromedio = (this.resultadoSuma)/2;
    }
  }

  
  public limpiarCampos():void{
    this.edadUno = null;
    this.edadDos = null;
    this.resultadoPromedio = null;
    this.resultadoSuma = null;
  }

}
