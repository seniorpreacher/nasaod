import {Component} from '@angular/core';
import {ContentService} from './content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    ContentService
  ],
})
export class AppComponent {
}
