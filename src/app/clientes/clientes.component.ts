import { Component, OnInit }  from '@angular/core';
import { Clase_Cliente }      from './cliente';
import { ClienteService }     from './cliente.service';

//Nombre de la clase en el archivo cliente.ts
@Component({
  selector    : 'app-clientes',
  templateUrl : './clientes.component.html'
})

export class ClientesComponent implements OnInit {
  //objecto cliente
  htmlclientes : Clase_Cliente [];

/*
//inyecion de depedicas
private clienteService : ClienteService;

constructor(clienteService : ClienteService) {
  this.clienteService = clienteService;
}*/
  private clienteService : ClienteService;

  constructor( clienteService : ClienteService) {
      this.clienteService = clienteService;
   }

  ngOnInit() {
  //  this.htmlclientes=this.clienteService.getClientes();
  this.clienteService.getClientes().subscribe(
      (clientes) => {this.htmlclientes = clientes}


  );
  }

}
