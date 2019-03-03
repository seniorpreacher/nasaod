import {Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';

@Component({
  selector: 'app-content-reader',
  templateUrl: './content-reader.component.html',
  styleUrls: ['./content-reader.component.styl']
})
export class ContentReaderComponent implements OnInit {
  paragraphs: Paragraph[] = [];

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.paragraphs = this.contentService.getMoreData(100);
  }

}
