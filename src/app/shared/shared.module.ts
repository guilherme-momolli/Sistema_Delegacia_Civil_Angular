import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseButton } from './components/ui/buttons/base-button/base-button'; 
import { SharedComponentsModule } from './components/shared.components.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    SharedComponentsModule
  ],
  exports: [
    SharedComponentsModule
  ]
})
export class SharedModule {}
