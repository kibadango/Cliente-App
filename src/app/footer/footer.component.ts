import { Component } from '@angular/core';


@Component({
  selector: 'app-footer', // entiqueta que se debe implementar en la pagina Index.html
  templateUrl: './footer.component.html',
  styleUrls : ['./footer.component.css']
})

export class FooterComponent {
  public  autor :any ={nombre:'Kevin',apellido:'Ibadango'};
}
