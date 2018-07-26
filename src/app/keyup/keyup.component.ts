import { Component} from '@angular/core';

@Component({
  selector: 'keyup',
  templateUrl: './keyup.component.html',
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent {
  values = "";

  /*onKey(event : any){
    console.log(event);
    this.values += event.target.value + ' | ';
  } */

  /* https://developer.mozilla.org/en-US/docs/Web/API/E */
  onKey(event: KeyboardEvent){
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  /*El $eventes ahora un específico KeyboardEvent. No todos los elementos tienen una valuepropiedad, por lo que se convierte targeten un elemento de entrada */
  

}
