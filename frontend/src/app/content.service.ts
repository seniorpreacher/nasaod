import {Paragraph} from './paragraph.interface';

export class ContentService {
  constructor() {
  }

  getData(offset: number, count: number): Promise<Paragraph[]> {
    const exampleText = () => ('Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars  ' +
      'ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable ' +
      'cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn ' +
      'with silver')
      .split(' ')
      .sort(() => Math.round((Math.random() * -2) + 1))
      .slice(0, Math.round(Math.random() * 62) + 10)
      .join(' ');

    return new Promise((resolve, reject) => {
      const paragraphs: Paragraph[] = [];

      for (let i = offset; i < (offset + count); i++) {
        paragraphs.push({id: i, content: exampleText()});
      }

      setTimeout(() => resolve(paragraphs), 1200);
    });
  }
}
