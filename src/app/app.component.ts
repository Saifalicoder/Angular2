import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  images = [944, 1012, 984].map((n) => `https://picsum.photos/id/${n}/1600/500`);

}
