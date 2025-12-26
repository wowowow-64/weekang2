import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getEvents(day: string): string[] {
    const eventsJson = localStorage.getItem(day);
    if (eventsJson) {
      return JSON.parse(eventsJson);
    }
    return [];
  }

  saveEvents(day: string, events: string[]) {
    localStorage.setItem(day, JSON.stringify(events));
  }
}
