import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  listaRx = [
    {
      label: "Observables Fríos",
      value: "OF",
      fueLeido: false
    },
    {
      label: "Observables Calientes",
      value: "OC",
      fueLeido: false
    }
  ];

  // OBSERVABLE FRIO: el observable empieza a emitir datos mientras exista alguien suscrito. Son unicast.
  // OBSERVABLE CALIENTE: el observable empieza a emitir datos aunque no exista alguien suscrito. Son multicast.


  //OBSERVABLE FRIO
  frio$ = new Observable<number>((subscriber) => {
    const numRandom = Math.floor(Math.random() * 100) + 10;
    subscriber.next(numRandom);
    subscriber.complete();
  });


  constructor() {
    this.frio$.subscribe((data) => {
      console.log('Esta es la primera suscripcion!!!');
      console.log(data);
    });

    setTimeout(() => {
      this.frio$.subscribe((data) => {
        console.log('Esta es la segunda suscripcion!!!');
        console.log(data);
      });
    }, 2000);

    setTimeout(() => {
      this.frio$.subscribe((data) => {
        console.log('Esta es la tercera suscripcion!!!');
        console.log(data);
      });
    }, 4000);

    setTimeout(() => {
      this.frio$.subscribe((data) => {
        console.log('Esta es la cuarta suscripcion!!!');
        console.log(data);
      });
    }, 6000);
  }



  abrirTema(rx: any){
    rx.fueLeido = true;
  }

}
