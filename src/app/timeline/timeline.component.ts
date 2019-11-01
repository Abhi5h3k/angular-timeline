import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  itemlist:TimeLineItems[]=[];
  tags:string[]=['Live','love','laugh'];
  
  constructor() { }

  ngOnInit() {
    console.log(typeof this.itemlist);
    this.itemlist.push(new TimeLineItems(1,new Date().toLocaleTimeString(),"Title","Some quick example text to build on the card title and make up the bulk of the card's content.",this.tags));

  }

  onClick(){
    console.log(this.itemlist.length);
    this.itemlist.push(new TimeLineItems(this.itemlist.length+1,new Date().toLocaleTimeString(),"Title","Some quick example text to build on the card title and make up the bulk of the card's content.",this.tags));
    console.log("added one more"+this.itemlist.length);
  }
}

class TimeLineItems{
  id:number;
  time:string;
  title:string;
  content:string;
  tags:string[]=[];
  colors:string[]=['badge-primary','badge-secondary','badge-success','badge-danger','badge-warning','badge-info','badge-dark'];
  rand:number;
  constructor(id:number,time:string,title:string,content:string,tags:string[]) {
      this.id=id;
      this.time=time;
      this.title=title;
      this.content=content;
      this.tags=tags;
      this.rand=Math.floor(Math.random() * 6);
      
   }

   getRandColor(){
     return this.colors[Math.floor(Math.random() * 6)];
   }

}