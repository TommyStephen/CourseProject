import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  courses = [
    {id:201, name:'Javascript', duration:'4 weeks', type:'Free', price:0.00, 
    rating:3.5, image:'/assets/JavaScript1.jpg',
    description: 'This course is purely for beginners....'},

    {id:202, name:'Python', duration:'36 weeks', type:'Premium', price:125, 
    rating:4, image:'/assets/Python.jpg',
    description: 'This is an intermediate to advanced course....'},

    {id:203, name:'Angular', duration:'4 weeks', type:'Free', price:0.00, 
    rating:4, image:'/assets/Angular.png',
    description: 'This is a basic course for beginners....'},

    {id:204, name:'Angular', duration:'24 weeks', type:'Premium', price:150, 
    rating:4, image:'/assets/Angular1.jpg',
    description: 'Mastering Angular.  This course is for experienced....'},

    {id:205, name:'HTML', duration:'4 weeks', type:'Free', price:0.00, 
    rating:3.5, image:'/assets/HTML.png',
    description: 'HTML Beginners course'},

    {id:206, name:'Java', duration:'4 weeks', type:'Free', price:0.00, 
    rating:4, image:'/assets/Java1.jpg',
    description: 'Java Basic course for beginners'},

    {id:207, name:'Java', duration:'48 weeks', type:'Premium', price:150, 
    rating:5, image:'/assets/Java2.jpg',
    description: 'Advanced Java for experienced'},

    {id:208, name:'Javascript', duration:'36 weeks', type:'Premium', price:150, 
    rating:3, image:'/assets/JavaScript2.jpg',
    description: 'Advanced from intermediate to masters'},

    {id:209, name:'React', duration:'8 weeks', type:'Free', price:0.00, 
    rating:3.5, image:'/assets/React1.png',
    description: 'In this course you will learn the fundamentals of React'},

    {id:210, name:'SpringBoot', duration:'48 weeks', type:'Premium', price:200, 
    rating:5, image:'/assets/SpringBoot.png',
    description: 'Master spring boot from scratch.  This course is for those who have completed the advanced java course'},

    {id:211, name:'React', duration:'38 weeks', type:'Premium', price:150, 
    rating:5, image:'/assets/React2.png',
    description: 'Advanced React for experienced'},

    {id:212, name:'HTML,CSS,JS', duration:'60 weeks', type:'Premium', price:150, 
    rating:4, image:'/assets/HTML_CSS_JS.jpg',
    description: 'Complete course for HTML,CSS,JS from scratch to advanced'}

  ]

}
