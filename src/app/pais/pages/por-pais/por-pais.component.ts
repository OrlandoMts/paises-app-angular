import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  termino: string = '';

  buscar(): void {
    // Para que un Observable se ejecute debo de estar suscrito
    this.paisService.buscarPais(this.termino).subscribe( resp => console.log(resp));
  }

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

}
