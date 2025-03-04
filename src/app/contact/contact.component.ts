import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[trigger('listanimation',[
    transition('*=>*',[
      query(':enter',style({opacity:0}),{optional:true}),query(':enter',stagger(3000,[animate('1s ease-in',keyframes([
        style({opacity:0,transform:'translateY(-75px)',offset:0}),
        style({opacity:.5,transform:'translateY(35px)',offset:0.3}),
        style({opacity:1,transform:'translateY(0)',offset:1}),
      ]))
    ])),
  ])
])
  ]
})
export class ContactComponent implements OnInit {
  item:String='Thank You'

  constructor() { }

  ngOnInit(): void {
  }

}
