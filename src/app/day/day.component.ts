import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
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
  public day = input.required<string>();
  private storageService = inject(StorageService);

  public events = signal<string[]>([]);
  public newEvent = signal('');

  constructor() {
    effect(() => {
      const day = this.day();
      const savedEvents = this.storageService.getEvents(day);
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
}
