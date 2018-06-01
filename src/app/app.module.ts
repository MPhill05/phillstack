import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {GrantComponent} from './grant/grant.component';
import {NavComponent} from './nav/nav.component';
import {IndexComponent} from './index/index.component';
import {MarkComponent} from './mark/mark.component';
import {ProjectsComponent} from './projects/projects.component';
import {AppRoutingModule} from './app-routing.module';
import {DropdownDirective} from './shared/dropdown.directive';
import {FormsModule} from '@angular/forms';
import {ScrollToModule} from 'ng2-scroll-to';

import {EmailService} from './services/email/email.service';
import {AppConstants} from './app.constants';
import 'hammerjs';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GrantComponent,
    NavComponent,
    IndexComponent,
    MarkComponent,
    ProjectsComponent,
    DropdownDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
//    MdButtonModule,
//    MdMenuModule,
//    MdCardModule,
//    MdToolbarModule,
//    MdIconModule,
    ScrollToModule.forRoot()
  ],
  providers: [EmailService, AppConstants],
  bootstrap: [AppComponent]
})
export class AppModule {}
