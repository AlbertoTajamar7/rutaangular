import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrl: './numerodoble.component.css'
})
export class NumerodobleComponent implements OnInit {
  public numero !: number;
  public doble !: number;
  constructor(private _activeRoute: ActivatedRoute){}
  ngOnInit(): void{
    this._activeRoute.params.subscribe((parametros: Params )=>{
      if(parametros['numero']!=null){
        this.numero = parseInt(parametros["numero"]);
        this.doble = this.numero *2
      }
    })
  }

}
