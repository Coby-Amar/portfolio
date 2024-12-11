import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { MainComponent } from '../components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    MainComponent,
  ],
  template: `
    <app-header/>
    <app-main/>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Coby A. Portfolio';
}
