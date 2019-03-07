import {Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  downloadedParagraphCount = 0;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.contentService.paragraphLoaded.subscribe(() => {
      this.downloadedParagraphCount = this.contentService.downloadedParagraphCount;
    });
  }

}
