# Project Blueprint

## Overview

This project is a weekly event calendar application. The goal is to build a modern, standalone component-based application leveraging the latest Angular features. It allows users to sign in with their Google account and manage their weekly events, with data persisted locally in the browser.

## Project Documentation

### Styling and Design

*   **UI Framework:** Angular Material
*   **Theming:** Uses the pre-built `deeppurple-amber.css` theme.
*   **Global Styles:** Basic reset for `html` and `body` with the `Roboto` font.
*   **Layout:** A responsive main view with a header for authentication and a main content area displaying a 7-day calendar week.
*   **Components:**
    *   `app-root`: The main application component.
    *   `app-login`: Handles the Google Sign-In process.
    *   `app-main`: The main view after login, containing the calendar.
    *   `app-day`: Represents a single day in the calendar, allowing users to add and view events.
    *   `app-planner`: Manages the display of the week and navigation.

### Features

*   **Authentication:** Firebase Authentication with Google Sign-In.
*   **Calendar View:** A 7-day calendar view displaying the days of the week.
*   **Local Event Storage:** Events are saved to the browser's `localStorage`, so they persist between sessions. Users can add events to each day.
*   **Week Navigation:** Users can browse between weeks using "Previous" and "Next" buttons.
*   **Date Formatting:** Dates are displayed in the `DD/MM/YYYY` format for user readability.
*   **Event Deletion:** Users can delete individual events from their calendar.

## Current Task: Implement Event Deletion

### Plan & Steps

**Goal:** Allow users to delete individual events from their calendar.

1.  **Update `DayComponent` Template:**
    *   Modified `src/app/day/day.component.html` to include a "Delete" button next to each event in the list.

2.  **Update `DayComponent`:**
    *   Updated `src/app/day/day.component.ts` to include a `deleteEvent(index)` method. This method removes the selected event from the `events` signal and immediately saves the updated list to `localStorage`.

**Outcome:** The application now allows users to delete events from their calendar. A "Delete" button appears next to each event, and clicking it removes the event from the UI and from local storage, ensuring the change persists.
