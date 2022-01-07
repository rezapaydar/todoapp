import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { ListAllNotesComponent } from './list-all-notes/list-all-notes.component';


@NgModule({
  declarations: [
    ListAllNotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
