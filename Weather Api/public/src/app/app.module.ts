import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task/task.component';
import { RoutingComponent } from './routing/routing.component';
import { SeattleComponent } from './seattle/seattle.component';
import { AppRoutingModule } from './app-routing.module';
import { SanJoseComponent } from './san-jose/san-jose.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    RoutingComponent,
    SeattleComponent,
    SanJoseComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
