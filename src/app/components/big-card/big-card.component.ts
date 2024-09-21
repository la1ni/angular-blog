import { Component, Input } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent {

  @Input()
  idContent: string = "0"

  @Input()
  pictureCover:string = ""

  @Input()
  title:string = ""

  @Input()
  description:string = ""

  text: string = ""

  decorate(){
    this.text = "text-decorator-class"
  }

  decorateOff(){
    this.text = ""
  }

}



