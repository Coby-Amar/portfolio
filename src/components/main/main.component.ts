import { Component, contentChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-main',
  imports: [MatCardModule, MatListModule, MatDividerModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  projects = [
    {
      title: 'Bluevine banking app',
      img: 'bluevine-preview.png',
      description: 'Created with Nativescipt and vue then re written in Flutter',
      link: 'https://apps.apple.com/us/app/bluevine/id1486393311',
    },
    {
      title: 'ST Nadlan VIP',
      img: 'nadlanvip-preview.png',
      description: 'Landing page created using React and Bootstrap',
      link: 'https://nadlanvip.com',
    },
    {
      title: 'Weather App',
      img: 'react-node-weather.png',
      description: 'Created using React, NodeJs, ExpressJS and Bootstrap',
      link: 'https://wrn.cobyamar.org',
    },
    {
      title: 'Casino Jackpot',
      img: 'nextjs-casino-slot.png',
      description: 'Created using React, Nextsjs and Tailwindcss',
      link: 'https://ncs.cobyamar.org',
    },
  ]
  experiences = [
    {
      company: 'Technology Consulting',
      location: 'Los Angeles & Tel Aviv',
      position: 'Software Developer',
      startDate: 'Jun 2022',
      endDate: 'Present',
      content: [
        "Designed and developed an internal management site and a landing page using React and Python (Django), improving team workflow by 30% through efficient user interface design and optimized data handling.",
        "Developed new internal CI/CD tools to enhance deployment efficiency and streamline the development workflow.",
        "Updated the website to React’s latest version, reducing development time by 40% and increasing site load speed by 30%.",
        "Spearheaded the implementation of Flutter, increasing mobile app user satisfaction by 20%.",
      ]
    },
    {
      company: 'Bluevine',
      location: 'Tel Aviv',
      position: 'Mobile Developer',
      startDate: 'Apr 2021',
      endDate: 'Jun 2022',
      content: [
        'Developed a secure, high-performance banking application using NativeScript and Vue.js, focusing on delivering a similar experience to major banks such as Chase.',
        'Enhanced app security by integrating third-party native plugins for secure check deposits, contributing to a 15% increase in app downloads.',
        'Led the successful transition of the app from NativeScript to Flutter, reducing app load times by 25% and improving app performance.'
      ],
    },
    {
      company: 'Herolo',
      location: 'Tel Aviv',
      position: 'Software Developer',
      startDate: 'Apr 2018',
      endDate: 'Apr 2021',
      content: [
        "Developed a mobile application using React Native and JavaScript to create a web crawler for managing and deleting posts and comments on social media platforms.",
        "Implemented a custom social media management tool that handled 1,000+ requests per day, improving user experience and increasing platform efficiency by 30%.",
        "Designed a server management interface that streamlined operations, cutting administrative time by 35%.",
        "Developed a React Native plugin using Objective-C and Java to implement a custom fetch function, integrating advanced security features to handle sensitive data.",
      ]
    },
  ]

}
