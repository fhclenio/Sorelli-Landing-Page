import { ApplicationConfig, provideZoneChangeDetection, APP_INITIALIZER, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { DatasComemorativasService } from '../Services/datas-comemorativas.service';

function initializeAppFactory(datasService: DatasComemorativasService): () => Promise<void> {
  return () => datasService.buscarEArmazenarPascoa();
}

const AppInitializerProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initializeAppFactory,
  deps: [DatasComemorativasService], 
  multi: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    AppInitializerProvider
  ]
};
