import { Mezzo } from "./driving.model";

export class rentModel {
    veicolo: Mezzo;
    noleggi: number = 0;

    constructor(veicolo:Mezzo) {
        this.veicolo = veicolo
    }

    noleggiato(): void{
        this.noleggi += 1
    }
}