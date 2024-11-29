import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  //providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient(withFetch()), importProvidersFrom(BrowserModule), importProvidersFrom(BrowserAnimationsModule)]
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), importProvidersFrom(BrowserModule), importProvidersFrom(BrowserAnimationsModule)]    
};
