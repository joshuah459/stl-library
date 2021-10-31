import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { ProjectComponent } from './component/project/project.component';
import { ProjectEntryComponent } from './component/project-entry/project-entry.component';
import { ProjectUserComponent } from './component/project-user/project-user.component';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ProjectComponent,
    ProjectEntryComponent,
    ProjectUserComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDialogModule,
  ],
  entryComponents:[MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
