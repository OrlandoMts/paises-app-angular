import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  // Hace el llamado al api mediante el servicio
  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    // Para que un Observable se ejecute debo de estar suscrito
    this.paisService.buscarCapital(this.termino)
        .subscribe({
          next: (paises) =>{ 
            this.paises = paises;
            console.warn(paises)},
          error: (e) => {
            this.hayError = true;
            this.paises = [];
          }
        });
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

}
