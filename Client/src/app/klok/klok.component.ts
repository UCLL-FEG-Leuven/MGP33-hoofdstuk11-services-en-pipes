import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Klok } from '../klok';

@Component({
  selector: 'app-klok',
  standalone: true,
  imports: [],
  templateUrl: './klok.component.html',
  styleUrl: './klok.component.css'
})
export class KlokComponent implements OnInit, OnDestroy {
  @Input()
  klok: Klok | undefined;

  @Output()
  removed: EventEmitter<Klok> = new EventEmitter<Klok>(); 

  tijd: string | undefined;
  isNight: boolean = false;

  intervalId: number | undefined;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      const huidigTijdstip = new Date();
      this.tijd = huidigTijdstip.toLocaleString(this.klok?.locale, { timeZone: this.klok?.timeZone });

      const hourIn24FormatInTimeZone = parseInt(
          huidigTijdstip.toLocaleTimeString(
            'nl-BE', 
            { hour: '2-digit', hour12: false, timeZone: this.klok?.timeZone})
        );
      this.isNight = hourIn24FormatInTimeZone >= 18 || hourIn24FormatInTimeZone <= 6;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  changeLocale(locale:string) {
    if (this.klok) this.klok.locale = locale;
  }

  remove() {
    this.removed.emit(this.klok);
  }
}