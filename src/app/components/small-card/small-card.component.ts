import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  text: string = ""

  @Input()
  idContent:string = "0"

  @Input()
  title:string = ""

  @Input()
  author:string = ""

  @Input()
  authorImg:string = ""

  @Input()
  pictureSrc:string = ""

  decorate(event: MouseEvent): void{
    const elementoAlvo = event.target as HTMLElement;
    elementoAlvo.style.textDecoration = 'underline';
  }

  decorateOff(event: MouseEvent): void{
    const elementoAlvo = event.target as HTMLElement;
    elementoAlvo.style.textDecoration = 'none';

  }


}
