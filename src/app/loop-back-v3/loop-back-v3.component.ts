import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loop-back-v3',
  templateUrl: './loop-back-v3.component.html',
  styleUrls: ['./loop-back-v3.component.css']
})
export class LoopBackV3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value : string = '';
  onEnter(value:string){
    this.value = value;
  }

}
