import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FIREBASE_CONFIG } from './app/firebase.config';

fetch('/secrets.json')
  .then((response) => response.json())
  .then((secrets) => {
    // Merge the secrets into the appConfig
    const mergedConfig = {
      ...appConfig,
      providers: [
        ...appConfig.providers,
        { provide: FIREBASE_CONFIG, useValue: secrets.firebase },
      ],
    };

    bootstrapApplication(AppComponent, mergedConfig).catch((err) =>
      console.error(err)
    );
  });
