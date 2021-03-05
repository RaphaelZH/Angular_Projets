import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';

import { Subject, Subscription, Observable } from 'rxjs';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { AdverseEventsComponent } from './adverse-events/adverse-events.component';

import { AdverseEventsService } from './drug_api_endpoints/adverse_events.service';

@NgModule({
  declarations: [
    AppComponent,
    AdverseEventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    AdverseEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
