import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitlePipe } from '../../pipe/title.pipe';

@Component({
  selector: 'app-header',
  imports: [TitlePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title = 'tp01_ANGULAR_ePsi';
}
