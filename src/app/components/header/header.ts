import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  imports: [ MatIconModule, MatBadgeModule ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
