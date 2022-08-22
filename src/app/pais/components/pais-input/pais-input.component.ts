import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  termino: string = '';

  buscar(): void {
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
