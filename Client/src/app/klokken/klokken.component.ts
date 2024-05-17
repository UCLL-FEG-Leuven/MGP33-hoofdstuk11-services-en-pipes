import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KlokComponent } from '../klok/klok.component';
import { FormsModule } from '@angular/forms';
import { VoegKlokToeFormComponent } from '../voeg-klok-toe-form/voeg-klok-toe-form.component';
import { Klok } from '../klok';
import { KlokService } from '../klok.service';

@Component({
  selector: 'app-klokken',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, KlokComponent, VoegKlokToeFormComponent],
  templateUrl: './klokken.component.html',
  styleUrl: './klokken.component.css'
})
export class KlokkenComponent implements OnInit {
  klokken: Klok[] = [];

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

  voegNieuweKlokToe(nieuweKlok: Klok) {
    this.klokken.push(nieuweKlok);
    this.nieuweKlokDialog?.nativeElement.close();
  }

  removeChild(klok: Klok) {
    this.klokken = this.klokken.filter(tz => klok.timeZone != klok.timeZone);
  }
}