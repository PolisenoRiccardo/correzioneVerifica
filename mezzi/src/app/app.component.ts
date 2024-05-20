import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Mezzo } from './driving.model';
import { Observable } from 'rxjs';
import { rentModel } from './rent.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mezzoSelezionato !: Mezzo;
  listaMezzi : Mezzo[] = [];
  obserMezzi !: Observable<Mezzo[]>;
  selezionato: boolean = false;
  mezziNoleggiati : rentModel[] = [];

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.richiesta()
  }

  richiesta(): void {
    this.obserMezzi = this.http.get<Mezzo[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi')
    this.obserMezzi.subscribe(this.getData)
  }

  getData = (d:Mezzo[]) => {
    this.listaMezzi = d;
    for (let mezzo of this.listaMezzi) {
      this.mezziNoleggiati.push(new rentModel(mezzo))
      console.log(this.mezziNoleggiati)
  }
  }

  noleggia(mezzo:Mezzo): boolean {
    this.mezzoSelezionato = mezzo;
    this.selezionato = true;
    console.log(this.mezzoSelezionato.tipo)
    console.log(this.mezzoSelezionato.descrizione)
    console.log(this.mezzoSelezionato.tariffa)
    console.log(this.mezzoSelezionato.valutazionemedia)
    let mezzoNoleggiato = new rentModel(this.mezzoSelezionato)
    for (let mezzo of this.mezziNoleggiati) {
      if (mezzo.veicolo.tipo == mezzoNoleggiato.veicolo.tipo) {
        mezzo.noleggiato()
      }
    }
    return false
  }
}