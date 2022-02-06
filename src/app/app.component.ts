import { Direction } from '@angular/cdk/bidi';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  isLoggedIn:boolean=false;
  title = 'taskmanagmentapp';
  dirvalue: Direction='ltr';
  defaultSetting={lang:'fa',nikname:'guest'}
  isLinear = false;
  panelOpenState = false;
  firstFormGroup:any;
  secondFormGroup:any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {    
    localStorage.setItem('isLoggedIn',`${JSON.stringify(this.isLoggedIn)}`)
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
