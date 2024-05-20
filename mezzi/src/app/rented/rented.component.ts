import { Component, Input } from '@angular/core';
import { Mezzo } from '../driving.model';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.css']
})
export class RentedComponent {
@Input()mezzoSelezionato!: Mezzo;

}
