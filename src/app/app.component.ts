import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // entiqueta que se debe implementar en la pagina Index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//controlador de spring
export class AppComponent {
  // Son atributos
  title = 'Clientes-App-Drake';
  //Pudes definir con el tipo de dato. Try to add ; to every line.
  Nombre: string = 'Kevin';
  Apellido : string = 'Ibadango';

 }
