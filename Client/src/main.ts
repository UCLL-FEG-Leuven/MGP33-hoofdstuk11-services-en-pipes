import { bootstrapApplication } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import localeJaJp from '@angular/common/locales/ja';

import { App } from './app/app';import { appConfig } from './app/app.config';

registerLocaleData(localeNlBe, 'nl-BE');
registerLocaleData(localeJaJp, 'ja-JP');

bootstrapApplication(App, appConfig)
.catch((err) => console.error(err));