import { Component } from '@angular/core';
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
      img: 'bluevine preview.png',
      description: 'Created with Nativescipt and vue then re written in Flutter',
      link: 'https://apps.apple.com/us/app/bluevine/id1486393311',
    },
    {
      title: 'Weather App',
      img: 'react-node-weather.png',
      description: 'Created using React, NodeJs, ExpressJS and Bootstrap',
      link: 'http://react-node.cobyamar.click',
    },
  ]
  experiences = [
    {
      company: 'Freelance',
      location: 'Los Angeles',
      position: 'Software Developer',
      description: 'Self employed working with customers through word of mouth and sites like Fiverr. A few examples are described below',
      startDate: 'Jun 2022',
      endDate: 'Present',
      clients: [
        {
          name: 'Voge Inc',
          position: 'Web/Mobile Developer',
          description: [
            'Revamped the internal management mobile app to Flutter and updated the website to the latest React version.',
            'Developed new internal CI/CD tools to enhance deployment efficiency and streamline the development workflow.',
          ]
        },
        {
          name: 'Specialty Builders Inc',
          position: 'Full-Stack Developer',
          description: [
            'Developed an internal management site and application using React, Flutter, and NodeJS.',
            'Implemented features for managing clients, employees, external contractors, and payment processes.'
          ]
        },
      ]
    },
    {
      company: 'Bluevine',
      location: 'Tel Aviv',
      position: 'Mobile Developer',
      description: 'Bluevine is a fintech company that builds banking solutions and services for growing businesses.',
      startDate: 'Apr 2021',
      endDate: 'Jun 2022',
      content: [
        'Developed a banking application using NativeScript with Vue, similar in functionality to Chase\'s mobile app.',
        'Integrated a third-party native plugin for check deposits, utilizing Java and Objective-C.',
        'Advocated for and transitioned the app to Flutter, leading the architectural redesign and redevelopment efforts.'
      ],
    },
    {
      company: 'Herolo',
      location: 'Tel Aviv',
      position: 'Software Developer',
      description: 'Herolo employs a project-based model, enabling me to work on a diverse array of client projects and applications. A few examples are described below.',
      startDate: 'Apr 2018',
      endDate: 'Apr 2021',
      clients: [
        {
          name: 'Eraser',
          position: 'Mobile/Javascript Developer',
          description: ['Developed a mobile application using React Native: Integrated a Vanilla JavaScript crawler script into a WebView to automate login and manage content (e.g., deleting posts and comments) across various social media platforms such as Facebook and Instagram.'],
        },
        {
          name: 'Emersion',
          position: 'Web Developer',
          description: ['Built a web application with React, Styled Components, Redux, and Axios for managing custom servers, including power controls and configurations, providing a service akin to AWS and Azure.'],
        },
        {
          name: 'Check Point',
          position: 'Plugin Developer',
          description: ['Created a React Native plugin using Objective-C and Java to implement a custom fetch function with enhanced security layers tailored for specific use cases.'],
        },
      ]
    },
  ]

}
