import {ContentServiceInterface} from './content.service.interface';
import {EventEmitter} from '@angular/core';
import {Paragraph} from '../paragraph.interface';

export class ContentServiceStab implements ContentServiceInterface {
  paragraphLoaded: EventEmitter<void> = new EventEmitter<void>();
  downloadedParagraphCount: number;

  getData(offset: number, limit: number): Promise<Paragraph[]> {
    return new Promise<Paragraph[]>(resolve => resolve());
  }
}
