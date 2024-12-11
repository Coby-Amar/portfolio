import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatChipsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  links = [
    {
      title: 'Mobile',
      href: 'tel:+18184568462',
    },
    {
      title: 'Email',
      href: 'mailto:cobyamar+portfolio@gmail.com',
    },
    {
      title: 'Github',
      href: 'http://github.com/Coby-Amar',
    },
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/coby-amar/',
    },
  ]

}
