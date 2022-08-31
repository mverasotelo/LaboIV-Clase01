import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario;
  nombre = "";
  clave = "";

  constructor() {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }

}
