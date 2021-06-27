import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CampgroundComponent } from './campground/campground.component';
import { CommentComponent } from './comment/comment.component';
import { ReviewComponent } from './review/review.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CampgroundComponent,
    CommentComponent,
    ReviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
