export class ContentService {
  private paragraphs: Paragraph[] = [];

  constructor() {
  }

  getData() {
    return [...this.paragraphs];
  }

  getMoreData(paragraphCount: number) {
    const exampleText = 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ' +
      'ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable ' +
      'cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn ' +
      'with silver.';
    const paragraphs: Paragraph[] = [];

    for (let i = 0; i < paragraphCount; i++) {
      paragraphs.push({id: i, content: exampleText});
    }

    this.paragraphs.push(...paragraphs);
    return paragraphs;
  }
}
