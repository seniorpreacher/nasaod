import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-reader',
  templateUrl: './content-reader.component.html',
  styleUrls: ['./content-reader.component.styl']
})
export class ContentReaderComponent implements OnInit {

  paragraphs: { id: number, content: string }[] = [];

  constructor() {
  }

  ngOnInit() {
    const exampleText = 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ' +
      'ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable ' +
      'cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn ' +
      'with silver.';

    for (let i = 0; i < 100; i++) {
      this.paragraphs.push({id: i, content: exampleText});
    }
  }

}
