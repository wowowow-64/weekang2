import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { DayComponent } from '../day/day.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planner',
  imports: [DayComponent, CommonModule],
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerComponent {
  private currentDate = signal(new Date());

  public weekDays = computed(() => {
    const startOfWeek = this.getStartOfWeek(this.currentDate());
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  });

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  public weekRange = computed(() => {
    const start = this.weekDays()[0];
    const end = this.weekDays()[6];
    return `${this.formatDate(start)} - ${this.formatDate(end)}`;
  });

  private getStartOfWeek(date: Date) {
    const newDate = new Date(date);
    const day = newDate.getDay();
    // Adjust to make Monday the first day of the week
    const diff = newDate.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(newDate.setDate(diff));
  }

  public previousWeek() {
    this.currentDate.update(d => {
      const newDate = new Date(d);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  }

  public nextWeek() {
    this.currentDate.update(d => {
      const newDate = new Date(d);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  }
}
