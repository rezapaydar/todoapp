import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.sass']
})
export class AsideComponent implements OnInit {
  panelOpenState = false;
  constructor(private gb:GlobalService) { }

  ngOnInit(): void {
  }

  loaded(drawer:any){
    this.gb.drawer=drawer;
    console.log(drawer);
    
  }

}
