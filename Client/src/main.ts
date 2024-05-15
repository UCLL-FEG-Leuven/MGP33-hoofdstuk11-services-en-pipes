import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import localeJaJp from '@angular/common/locales/ja';

registerLocaleData(localeNlBe, 'nl-BE');
registerLocaleData(localeJaJp, 'ja-JP');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
