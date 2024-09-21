import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../components/data/datafake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  @Input()
  imageSrc: string = ""
  @Input()
  title: string = ""
  @Input()
  description: string = ""

  private id:string | null = "0"

  constructor(private route:ActivatedRoute){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = (value.get("idContent"))
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null){
    const result = dataFake.filter(article => article.id === id)[0]
    this.title = result.title
    this.imageSrc = result.picture
    this.description = result.description
  }

}
