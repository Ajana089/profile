import { Component, OnInit, Optional } from '@angular/core';
import { animate, style, transition, trigger,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
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
export class SkillsComponent implements OnInit {

   items=['ANGULAR','HTML','JAVASCRIPT','MONGODB','SQL SERVER','JAVA','C++','JSP'];
  //items=[assets/images/blueba.jpg,'assets/images/new.jpg','assets/images/photo.jpg'];
  title:String="Skills"

  constructor() { }

  ngOnInit(): void {
  }

}
