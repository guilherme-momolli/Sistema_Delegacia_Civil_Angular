import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  imports: [CommonModule],
  templateUrl: './base-button.html',
  styleUrl: './base-button.scss'
})
export class BaseButton {
  @Input() label: string = 'Botão';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
}
