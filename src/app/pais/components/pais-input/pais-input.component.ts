import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {
  
  @Output() newInputEvent: EventEmitter<string> = new EventEmitter();
  // rxjs viene con un Observable especial llamado "el subject"
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = 'Buscar';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar(): void {
    this.newInputEvent.emit(this.termino);
  }

  teclaPresionada(){
    // Podria recibir el evento del input para obtener el target.event pero es lo mismo que this.termino
    this.debouncer.next(this.termino);
  }

  constructor() { }

  ngOnInit(): void {
    // pipe va a transformar la salida del subscribe
    this.debouncer
        .pipe(
          debounceTime(500) //Hace que el subscribe NO EMITA valores hasta que el Observable deje de emitir valores por el tiempo proximo especificado
        )
        .subscribe( valor => {
          //   Ejemplo: console.log('debouncer', valor);
          this.onDebounce.emit(valor); //De aqui lo va a emitir a su componente padre
        });
  }

}
