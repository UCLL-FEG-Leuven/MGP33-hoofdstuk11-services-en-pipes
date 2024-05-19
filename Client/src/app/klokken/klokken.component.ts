import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { KlokComponent } from '../klok/klok.component';
import { FormsModule } from '@angular/forms';
import { VoegKlokToeFormComponent } from '../voeg-klok-toe-form/voeg-klok-toe-form.component';
import { Klok } from '../klok';

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

  async ngOnInit(): Promise<void> {
    let response = await fetch('http://localhost:3010/my-clocks');
    if (response.ok) {
      this.klokken = await response.json();
    }
  }

  toonNieuweKlokDialog() {
    this.nieuweKlokDialog?.nativeElement.showModal();
  }

  voegNieuweKlokToe(nieuweKlok: Klok) {
    this.klokken.push(nieuweKlok);
    this.nieuweKlokDialog?.nativeElement.close();
  }

  removeChild(klok: Klok) {
    this.klokken = this.klokken.filter(kl => klok.timeZone != kl.timeZone);
  }
}