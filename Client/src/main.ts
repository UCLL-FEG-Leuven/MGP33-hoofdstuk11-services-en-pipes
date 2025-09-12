import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { registerLocaleData } from '@angular/common';

import localeNlBe from '@angular/common/locales/nl-BE';
import localeJaJp from '@angular/common/locales/ja';

import { routes } from './app/app.routes';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeNlBe, 'nl-BE');
registerLocaleData(localeJaJp, 'ja-JP');

bootstrapApplication(App, {providers: [
  provideZonelessChangeDetection(),
  provideRouter(routes),
  provideHttpClient()
]})
.catch((err) => console.error(err));