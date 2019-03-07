import {Paragraph} from './paragraph.interface';
import {HttpClient} from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';

const BACKEND_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private http: HttpClient) {
  }

  private _downloadedParagraphCount = 0;
  readonly paragraphLoaded: EventEmitter<void> = new EventEmitter<void>();

  get downloadedParagraphCount(): number {
    return this._downloadedParagraphCount;
  }

  private static getUrl(offset: number, limit: number): string {
    return `${BACKEND_URL}?offset=${offset}&limit=${limit}`;
  }

  getData(offset: number, count: number): Promise<Paragraph[]> {
    const request = this.http.get<Paragraph[]>(ContentService.getUrl(offset, count));
    request.subscribe(() => {
      this._downloadedParagraphCount += count;
      this.paragraphLoaded.emit();
    });

    return request.toPromise();
  }
}
