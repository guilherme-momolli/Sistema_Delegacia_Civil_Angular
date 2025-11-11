import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BaseButton } from "./ui/buttons/base-button/base-button";
import { Navbar } from "./layout/navbar/navbar";

@NgModule
({
  declarations: [
    
  ],
  imports: [
    Navbar,
    CommonModule,
    BaseButton
  ],
  exports: [
    Navbar
  ]
})
export class SharedComponentsModule {}