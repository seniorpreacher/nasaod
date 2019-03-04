import {Paragraph} from './paragraph.interface';

export class ParagraphImpl implements Paragraph {
  content: string;
  id: number;

  constructor(content: string, id: number) {
    this.content = content;
    this.id = id;
  }
}
