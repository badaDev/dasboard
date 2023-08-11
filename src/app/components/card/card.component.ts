import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() iconUrl: string | undefined;
  @Input() figure: string | undefined;
  @Input() month: string | undefined;
  @Input() increase: boolean | undefined;
  @Input() decrease: boolean | undefined;
  @Input() percentage: string | undefined;
  @Input() dataName: string | undefined;
  @Input() graphIconUrl: string | undefined
}
