import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {
  
  @Output() newInputEvent: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar(): void {
    this.newInputEvent.emit(this.termino);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
