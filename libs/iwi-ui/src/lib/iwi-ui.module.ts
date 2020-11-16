import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class IwiUiModule {}
