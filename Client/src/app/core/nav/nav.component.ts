import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  background: ThemePalette = 'primary';

  links = ['Matches', 'Lists', 'Message'];

  activeLink = this.links[0];

  emailFormControl = new FormControl('', Validators.required);

  passwordFormControl = new FormControl('', Validators.required);
}
