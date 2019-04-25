import { Injectable } from '@angular/core';
import { clientes } from './clientes.json';
import { Clase_Cliente } from './cliente';
import {of ,Observable} from 'rxjs';

@Injectable()
export class ClienteService {

  constructor() { }

  getClientes() :   Observable<Clase_Cliente[]>{
    return of(clientes);
  }


}
