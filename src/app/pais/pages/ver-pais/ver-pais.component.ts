import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    // La respuesta es un arreglo que trae la llave que especifiqué en el archivo de routes
      // this.activateRoute.params.subscribe(({id}) => 
      //     this.paisService.getCountryById(id).subscribe({
      //         next: (pais) => console.log(pais)
      //     })
      // );
    

      // switchMap --> Recibe un Observable y retorna otro Observable. Primero se ejecuta el subscribe
      // Recibe el valor del observable anterior, que en este caso es el de activatedRoute.params, es aqui
      // donde hace el cambio 'el switch' y devuelve el otro Observable del servicio
      this.activateRoute.params
          .pipe(
            switchMap(({id})=> this.paisService.getCountryById(id)),
            tap(console.log) // El tap recibe el producto del observable de arriba
          )
          .subscribe({
            next: (pais) => this.pais = pais[0]
          })
  }

}
