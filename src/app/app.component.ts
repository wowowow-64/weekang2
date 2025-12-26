import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PlannerComponent } from './planner/planner.component';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ToolbarComponent, PlannerComponent, Login],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
