import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MainService } from './main.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { GamesComponent } from './games/games.component';
import { JslibsComponent } from './jslibs/jslibs.component';
import { RoboticsComponent } from './robotics/robotics.component';
import { PrintingComponent } from './printing/printing.component';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GamesComponent,
    JslibsComponent,
    RoboticsComponent,
    PrintingComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        'path': '',
        'component': IndexComponent
      },
      {
        'path': 'games',
        'component': GamesComponent
      },
      {
        'path': 'jslibs',
        'component': JslibsComponent
      },
      {
        'path': 'robotics',
        'component': RoboticsComponent
      },
      {
        'path': 'printing',
        'component': PrintingComponent
      },
      {
        'path': 'end',
        'component': EndComponent
      }
    ])
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
