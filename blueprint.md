# Project Blueprint

## Overview

This project is a new Angular application. The goal is to build a modern, standalone component-based application leveraging the latest Angular features, including Firebase for backend services.

## Project Documentation

### Styling and Design

*   **UI Framework:** Angular Material
*   **Theming:** Uses the pre-built `deeppurple-amber.css` theme.
*   **Global Styles:** Basic reset for `html` and `body` with the `Roboto` font.

### Features

*   **Initial Setup:** A fresh Angular CLI project.
*   **Core Dependencies:** Angular, Angular Material.
*   **Authentication:** Firebase Authentication with Google Sign-In.

## Current Task: Add Firebase Authentication

### Plan & Steps

**Goal:** Integrate Firebase Authentication to allow users to log in with their Google account.

1.  **Install Dependencies:** Added `@angular/fire` and `firebase` to the project.
2.  **Configure Firebase:**
    *   Updated `src/app/app.config.ts` to include `provideFirebaseApp` and `provideAuth`.
    *   Added a placeholder for the Firebase project configuration. **The user needs to replace this with their actual Firebase config.**
3.  **Create AuthService:**
    *   Generated a new service `src/app/auth.service.ts`.
    *   Implemented `login` and `logout` methods using GoogleAuthProvider and `signInWithPopup`.
    *   Added a `getUser` method to access the current user state.
4.  **Create Login Component:**
    *   Generated a new standalone component `src/app/login`.
    *   The component displays a "Login" button or the user's profile information based on the authentication state from `AuthService`.
    *   Uses the `async` pipe to subscribe to the user state observable.
5.  **Integrate Login Component:**
    *   Added the `<app-login>` component to the main `app.component.html`.
    *   Imported the `Login` component into `app.component.ts`.

**Outcome:** The application now has a basic authentication flow. Users can log in with their Google account, and their display name and profile picture are shown after a successful login. They also have the ability to log out.
