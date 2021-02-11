import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, ReactiveFormsModule, MatTabsModule, MatButtonModule],
  exports: [NavComponent],
})
export class CoreModule {}
