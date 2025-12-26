import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
})
export class DayComponent {
  public day = input.required<string>(); // YYYY-MM-DD
  private storageService = inject(StorageService);

  public editingIndex = signal<number | null>(null);
  public editedEventText = signal('');

  private getLocalDate(): Date {
    const date = new Date(this.day());
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() + userTimezoneOffset);
  }

  public dayName = computed(() => {
    return this.getLocalDate().toLocaleDateString('en-US', { weekday: 'long' });
  });

  public formattedDate = computed(() => {
    const date = this.getLocalDate();
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  });

  public events = signal<string[]>([]);
  public newEvent = signal('');

  constructor() {
    effect(() => {
      const dayKey = this.day();
      const savedEvents = this.storageService.getEvents(dayKey);
      this.events.set(savedEvents);
    });
  }

  addEvent() {
    if (this.newEvent().trim()) {
      this.events.update(e => [...e, this.newEvent().trim()]);
      this.storageService.saveEvents(this.day(), this.events());
      this.newEvent.set('');
    }
  }

  deleteEvent(index: number) {
    this.events.update(events => events.filter((_, i) => i !== index));
    this.storageService.saveEvents(this.day(), this.events());
  }

  editEvent(index: number) {
    this.editingIndex.set(index);
    this.editedEventText.set(this.events()[index]);
  }

  saveEvent(index: number) {
    if (this.editedEventText().trim()) {
        this.events.update(events => {
            const updatedEvents = [...events];
            updatedEvents[index] = this.editedEventText().trim();
            return updatedEvents;
        });
        this.storageService.saveEvents(this.day(), this.events());
        this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editingIndex.set(null);
    this.editedEventText.set('');
  }
}
