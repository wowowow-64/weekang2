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
*   **Calendar View:** A basic calendar view with days of the week.
*   **Event Management:** Users can add events to each day.

## Current Task: Remove Example Events

### Plan & Steps

**Goal:** Remove the hardcoded example events from the `day` component.

1.  **Modify `day.component.ts`:**
    *   Located the `events` signal in `src/app/day/day.component.ts`.
    *   Changed the initial value of the `events` signal from `['Christmas party', 'Secret Santa']` to an empty array `[]`.

**Outcome:** The application no longer displays any pre-populated events, providing a clean slate for users to add their own.
