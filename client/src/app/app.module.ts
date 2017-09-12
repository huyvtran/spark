import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from "ion2-calendar";

// Pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SearchPage } from '../pages/search/search';
import { ReportsPage } from '../pages/reports/reports';
import { ConfirmPage } from '../pages/confirm/confirm';
import { IndentPage } from '../pages/indent/indent';
import { CenterPage } from '../pages/center/center';

// Providers
import { Students } from '../providers/students/students';
import { Auth } from '../providers/auth/auth';
import { Center } from '../providers/center/center';
import { Indentation } from '../providers/indentation/indentation';
import { Networks } from '../providers/network/network';

// Camera
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SearchPage,
    ReportsPage,
    ConfirmPage,
    IndentPage,
    CenterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    CalendarModule,
    IonicStorageModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SearchPage,
    ReportsPage,
    ConfirmPage,
    IndentPage,
    CenterPage
  ],
  providers: [
    IonicStorageModule,
    Students,
    Auth,
    Center,
    Networks,
    Indentation,
    File,
    Transfer,
    Camera,
    FilePath
  ]
})
export class AppModule {}