import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem, UserProfile } from '../models/component-models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

  @Input() logoUrl: string;
  @Input() menus: MenuItem[];
  @Input() user: UserProfile;

  constructor() {
    this.logoUrl = '';
    this.menus = [];
    this.user = { imageUrl: '', name: '', position: '' };
  }

  
  toggleSubmenu(menu: MenuItem): void {
      menu.expanded = !menu.expanded;
  }
}
