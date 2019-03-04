import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {ContentService} from './content.service';
import {ParagraphImpl} from './paragraph.impl.class';
import {Paragraph} from './paragraph.interface';

export class ParagraphDataSource extends DataSource<Paragraph | undefined> {
  private emptyParagraph = new ParagraphImpl('X', 0);
  private dataStream = new BehaviorSubject<(Paragraph | undefined)[]>([this.emptyParagraph]);
  private subscription = new Subscription();
  private paragraphsPerPage = 100;

  constructor(private contentService: ContentService) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<(Paragraph | undefined)[] | ReadonlyArray<Paragraph | undefined>> {
    this.subscription.add(collectionViewer.viewChange.subscribe((range) => {
      console.log(range.start, range.end);
      let paragraphCount = range.end - range.start;
      if (paragraphCount < 5) {
        paragraphCount = 50;
      }
      this.contentService
        .getData(range.start, paragraphCount)
        .subscribe((data) => {
          console.log(data);
          this.updateData(data);
          // this.formatDta(JSON.parse(data._body).results);
        });
    }));
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  updateData(paragraphs: Paragraph[]): void {
    this.dataStream.next(paragraphs);
  }
}
