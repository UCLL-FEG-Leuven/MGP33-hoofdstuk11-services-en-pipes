import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Klok } from '../klok/klok';
import { FormsModule } from '@angular/forms';
import { VoegKlokToeFormComponent } from '../voeg-klok-toe-form/voeg-klok-toe-form.component';
import { Klok as KlokModel } from '../klok';
import { KlokService } from '../klok.service';

@Component({
    selector: 'app-klokken',
    imports: [FormsModule, Klok, VoegKlokToeFormComponent],
    templateUrl: './klokken.html',
    styleUrl: './klokken.css'
})
export class Klokken implements OnInit {
  klokken: KlokModel[] = [];

  @ViewChild("nieuweKlokDialog")
  nieuweKlokDialog: ElementRef<HTMLDialogElement> | undefined;

  constructor(private klokService: KlokService) {    
  }

  async ngOnInit(): Promise<void> {
      this.klokken = await this.klokService.getKlokken();
  }

  toonNieuweKlokDialog() {
    this.nieuweKlokDialog?.nativeElement.showModal();
  }

  voegNieuweKlokToe(nieuweKlok: KlokModel) {
    this.klokken.push(nieuweKlok);
    this.nieuweKlokDialog?.nativeElement.close();
  }

  removeChild(klok: KlokModel) {
    this.klokken = this.klokken.filter(kl => klok.name != kl.timeZone);
  }
}