import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})




export class LogicComponent implements OnInit {

  itemlist:TimeLineItems[];
  
  constructor() { }

  ngOnInit() {
  }
  
   
}
class TimeLineItems{
  time:string;
  title:string;
  content:string;

  constructor(time:string,title:string,content:string) {
      this.time=time;
      this.title=title;
      this.content=content;
   }


}