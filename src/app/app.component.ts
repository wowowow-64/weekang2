import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PlannerComponent } from './planner/planner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ToolbarComponent, PlannerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
