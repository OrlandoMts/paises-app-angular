import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  activarRegion(region: string) {
    //Evita que se vuelva a cargar cuando se le da clic sobre el mismo boton dos veces seguidas
    if (this.regionActiva === region) { return }
    
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region)
        .subscribe({
          next: paises => this.paises = paises,
          error: console.warn
        })

  }

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
