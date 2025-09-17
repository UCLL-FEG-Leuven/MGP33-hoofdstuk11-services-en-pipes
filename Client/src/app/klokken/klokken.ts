import { Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';

import { Klok } from '../klok/klok';
import { VoegKlokToeFormComponent } from '../voeg-klok-toe-form/voeg-klok-toe-form.component';
import { Klok as KlokModel } from '../klok';
import { KlokApi } from '../klok-api';

@Component({
    selector: 'app-klokken',
    imports: [Klok, VoegKlokToeFormComponent],
    templateUrl: './klokken.html',
    styleUrl: './klokken.css'
})
export class Klokken implements OnInit {
  klokken = signal<KlokModel[]>([]);

  @ViewChild("nieuweKlokDialog")
  nieuweKlokDialog: ElementRef<HTMLDialogElement> | undefined;

  constructor(private klokApi: KlokApi) {    
  }

  async ngOnInit(): Promise<void> {
    this.klokken.set(await this.klokApi.getKlokken());
  }

  toonNieuweKlokDialog() {
    this.nieuweKlokDialog?.nativeElement.showModal();
  }

  voegNieuweKlokToe(nieuweKlok: KlokModel) {
    this.klokken.update(kl => [...kl, nieuweKlok]);
    this.nieuweKlokDialog?.nativeElement.close();
  }

  removeChild(klok: KlokModel) {
    this.klokken.update(kl => kl.filter(kl => klok.name != kl.name));
  }
}