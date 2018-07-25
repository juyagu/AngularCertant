import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loop-back-v4',
  templateUrl: './loop-back-v4.component.html',
  styleUrls: ['./loop-back-v4.component.css']
})
export class LoopBackV4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  value = '';
  update(value : string){
    this.value = value;
  }
}
