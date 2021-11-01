import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//materials
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { ProjectComponent } from './component/project/project.component';
import { ProjectEntryComponent } from './component/project-entry/project-entry.component';
import { StlViewerComponent } from './component/stl-viewer/stl-viewer.component';
import { ProjectPreviewCardComponent } from './component/project-preview-card/project-preview-card.component';

//3rd party
import { StlModelViewerModule } from  'angular-stl-model-viewer';

//http
import { HttpClientModule } from '@angular/common/http';
import { ResultsContainerComponent } from './component/results-container/results-container.component';
import { SearchBarContainerComponent } from './component/search-bar-container/search-bar-container.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ProjectComponent,
    ProjectEntryComponent,
    StlViewerComponent,
    ProjectPreviewCardComponent,
    ResultsContainerComponent,
    SearchBarContainerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    StlModelViewerModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  entryComponents:[MatDialogModule,ProjectEntryComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
