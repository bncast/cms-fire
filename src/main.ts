import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';




if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

