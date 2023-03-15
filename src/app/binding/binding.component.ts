import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit{

  titre : string="Demo databinding Interpolation"
  status : boolean= false;

  constructor(){}
  ngOnInit(): void {

  }
  changerTitre(){
    this.titre="va te faire"
  }

}
