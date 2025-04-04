import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Signal, WritableSignal, 
         computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Klok } from '../klok';
import { ThemeService } from '../theme.service';

@Component({
    selector: 'app-klok',
    imports: [DatePipe],
    templateUrl: './klok.component.html',
    styleUrl: './klok.component.css'
})
export class KlokComponent implements OnInit, OnDestroy {
  @Input()
  klok: Klok | undefined;

  @Output()
  removed: EventEmitter<Klok> = new EventEmitter<Klok>(); 

  tijd: Date = new Date();
  
  intervalId: number | undefined;
  
  isNight: WritableSignal<boolean> = signal(false);
  dayOrNightCssClass: Signal<string>;

  constructor(public themeService: ThemeService) { 
    this.dayOrNightCssClass = computed(() => {
      if (this.isNight()) return `night-${themeService.theme()}`;
      else return `day-${themeService.theme()}`
    }); 
  }

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.tijd = new Date(); 

      const hourIn24FormatInTimeZone = parseInt(
        this.tijd.toLocaleTimeString(
            'nl-BE', 
            { hour: '2-digit', hour12: false, timeZone: this.klok?.timeZone})
        );
      this.isNight.set(hourIn24FormatInTimeZone >= 18 || hourIn24FormatInTimeZone <= 6);
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