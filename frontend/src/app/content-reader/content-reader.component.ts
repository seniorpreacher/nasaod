import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ContentService} from '../content.service';
import {ParagraphDataSource} from '../paragraph.data-source';

@Component({
  selector: 'app-content-reader',
  templateUrl: './content-reader.component.html',
  styleUrls: ['./content-reader.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentReaderComponent implements OnInit {
  dataSource: ParagraphDataSource;

  constructor(private contentService: ContentService) {
  }

  ngOnInit() {
    this.dataSource = new ParagraphDataSource(this.contentService);
  }

  /*

    onLoadMore() {
      this.currentOffset += this.paragraphsPerPage;
      this.paragraphs.push(...this.contentService.getData(this.currentOffset, this.paragraphsPerPage));
    }*/
  onScrolledIndexChange(event) {
    console.log(event);
  }
}
