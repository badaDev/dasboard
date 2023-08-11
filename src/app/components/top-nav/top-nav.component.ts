import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent {
  @Input() pageTitle: string | undefined;
  @Input() selectedLanguage: string | undefined;
  @Input() brightnessIconUrl: string | undefined;
  @Input() userAvatarUrl: string | undefined;

}
