import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  drawer
  constructor(private gb:GlobalService) { 
    
    this.drawer=this.gb.drawer;

  }

  ngOnInit(): void {
  }

  drawercontrol(){

    console.log(this.gb.drawer);
    this.gb.drawer.toggle();
  }

}
