import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { loginReducer } from './states/signin/signin.reducer';
import { provideHttpClient } from '@angular/common/http';
import { graphqlProvider } from './graphql.provider';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), 
    provideStore(),
    provideState({name: 'signin', reducer: loginReducer }), provideHttpClient(), graphqlProvider
  ]
};
