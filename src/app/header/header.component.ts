import { Component } from '@angular/core';

import { RouterModule } from '@angular/router'; 
import { MaterialModule } from '../module/Matérial.module';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports : [
    RouterModule , MaterialModule
    ]
})
export class HeaderComponent {
  badgevisible = false;
  badgevisibility() { 
    this.badgevisible = true;
  }
  
}
