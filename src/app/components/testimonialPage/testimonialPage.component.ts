import { Component } from '@angular/core';

@Component({
  selector: 'testimonial-page',
  templateUrl: './testimonialPage.component.html',
  styleUrls: ['./testimonialPage.component.css']
})
export class TestimonialPage {
    data = [{
      header: 'Best Course I took',
      name: 'Shubham',
      position: 'IIT Roorkee',
      description: 'This course really helped me grow to next level in data structures and algorithm, a must take for every IT aspirant.',
      url: 'https://i.ibb.co/pJhZdMH/pp1.jpg'
    },
    {
      header: 'Data Structures made easy',
      name: 'Abhishek',
      position: 'IIT Delhi',
      description: 'This course helped me get placed in a good MNC, thank you for the course.',
      url: 'https://i.ibb.co/DKZPVM9/pp2.jpg'
    },
    {
      header: 'Dont miss it!',
      name: 'Deepak',
      position: 'IIT Delhi',
      description: 'This course is one of the best courses available on Data Structures and Algorithms, dont miss the opportunity.',
      url: 'https://i.ibb.co/jTVQf1M/pp3.jpg'
    },
    {
      header: 'A True Blessing',
      name: 'Shivam',
      position: 'IIT Roorkee',
      description: 'This course really helped me grow to next level in data structures and algorithm, a must take for every IT aspirant.',
      url: 'https://i.ibb.co/cYq02jS/pp4.jpg'
    },
    {
      header: 'A must for every college student',
      name: 'Sudhanshu',
      position: 'IIT Delhi',
      description: 'This course is one of the best courses available on Data Structures and Algorithms, dont miss the opportunity.',
      url: 'https://i.ibb.co/DKZPVM9/pp2.jpg'
    }];
}
