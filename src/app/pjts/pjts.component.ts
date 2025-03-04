import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pjts',
  templateUrl: './pjts.component.html',
  styleUrls: ['./pjts.component.css'],
 
  
})
export class PjtsComponent implements OnInit {
  
  image:String="assets/images/blueba.jpg"
  image1:String="assets/images/new.jpg"
  image2:String="assets/images/bluebk.jpg"

  constructor() { }

  ngOnInit(): void {
   
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }
  


