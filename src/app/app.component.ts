import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      imgUrl: '../assets/loki.jpeg',
      title: 'Neat Tree',
      username: '@one',
      content: 'demo desc one',
    },
    {
      imgUrl: '../assets/scarlet.jpeg',
      title: 'Snowy Mountain',
      username: '@two',
      content: 'demo desc two',
    },
    {
      imgUrl: '../assets/spideywall.jpg',
      title: 'Mountain Biking',
      username: '@three',
      content: 'demo desc three',
    },
  ];
}
