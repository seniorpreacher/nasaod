import {Paragraph} from './paragraph.interface';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

const BACKEND_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private http: HttpClient) {
  }

  private static getUrl(offset: number, limit: number): string {
    return `${BACKEND_URL}?offset=${offset}&limit=${limit}`;
  }

  getData(offset: number, count: number): Promise<Paragraph[]> {
    return this.http.get<Paragraph[]>(ContentService.getUrl(offset, count)).toPromise();
  }
}
