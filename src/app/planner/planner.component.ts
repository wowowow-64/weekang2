import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DayComponent } from '../day/day.component';

@Component({
  selector: 'app-planner',
  imports: [DayComponent],
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlannerComponent {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
}
