import {Component} from '@angular/core';
import {ContentService} from '../content.service';
import {Paragraph} from '../paragraph.interface';
import {ChangeEvent} from 'ngx-virtual-scroller';

@Component({
  selector: 'app-content-reader',
  templateUrl: './content-reader.component.html',
  styleUrls: ['./content-reader.component.styl']
})
export class ContentReaderComponent {
  constructor(private contentService: ContentService) {
  }

  protected buffer: Paragraph[] = [];
  protected loading: boolean;
  scrollItems = [];

  protected fetchMore(event: ChangeEvent) {
    if (event.end !== this.buffer.length - 1 || this.loading) {
      return;
    }
    this.loading = true;
    this.fetchNextChunk(this.buffer.length, 10)
      .then((chunk) => {
        this.buffer = this.buffer.concat(chunk);
        this.loading = false;
      }, () => this.loading = false);
  }

  protected fetchNextChunk(offset: number, limit: number): Promise<Paragraph[]> {
    return this.contentService.getData(offset, limit);
  }

}
