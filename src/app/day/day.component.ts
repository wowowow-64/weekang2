import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent {
  @Input() day: any;
}
