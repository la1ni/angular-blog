import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit {

  rotaAtual: string = ""
  exibirVoltar: string = ""

  // contrutor do router, que permitirá pegar a rota atual
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    this.rotaAtual = this.router.url;

  }

}
