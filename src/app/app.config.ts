
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-5CC7VEYM8wX7jYvRfmf6JjmJNG5gU70",
    authDomain: "weekwise-ifutl.firebaseapp.com",
      projectId: "weekwise-ifutl",
        storageBucket: "weekwise-ifutl.firebasestorage.app",
          messagingSenderId: "914913837523",
            appId: "1:914913837523:web:e1afb97d85d9eec57def26",
              measurementId: "G-R7WPBX405R"
              };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
