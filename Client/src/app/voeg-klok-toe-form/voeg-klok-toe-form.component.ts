import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Klok } from '../klok';

@Component({
  selector: 'app-voeg-klok-toe-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './voeg-klok-toe-form.component.html',
  styleUrl: './voeg-klok-toe-form.component.css'
})
export class VoegKlokToeFormComponent {
  @Output()
  klokGekozen: EventEmitter<Klok> = new EventEmitter<Klok>(); 

  timeZones: string[] = Intl.supportedValuesOf('timeZone');
  model: Klok = new Klok('thuis', 'Europe/Brussels', 'nl-BE');  

  onSubmit() {
    // Copy van de klok want deze wordt 'by reference' doorgegeven (zo worden side effects vermeden).
    let modelCopy = new Klok(this.model.name, this.model.timeZone, this.model.locale);
    this.klokGekozen.emit(modelCopy);
  }
}