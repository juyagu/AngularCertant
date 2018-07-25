import { Component } from '@angular/core';

@Component({
  selector: 'loop-back-v2',
  templateUrl: './loop-back-v2.component.html',
  styleUrls: ['./loop-back-v2.component.css']
})
export class LoopBackV2Component {
  values : string = "";
  onKey(value :string){
    this.values += value + ' | ';
  }

}
