import {EventEmitter} from '@angular/core';
import {Paragraph} from '../paragraph.interface';

export interface ContentServiceInterface {
  paragraphLoaded: EventEmitter<void>;

  getData(offset: number, limit: number): Promise<Paragraph[]>;
}
