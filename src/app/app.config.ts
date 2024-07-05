import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { postReducer } from './store/post.reducer';
import { PostEffects } from './store/post.effects';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {  provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideStore({ posts: postReducer }),
    provideEffects([PostEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideAnimations()
  ],

};
