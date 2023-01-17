/**
 *  Modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbModule } from 'primeng/breadcrumb';

/**
 *  Firebase
 */
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

/**
 * Pipes
 */
import { PhoneFormatPipe } from './phone-format.pipe';
import { DashLowerCasePipe } from './dash-lower-case.pipe';

/**
 *  Components
 */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateShowComponent } from './shows/create-show/create-show.component';
import { ListShowsComponent } from './shows/list-shows/list-shows.component';
import { ShowCardComponent } from './shows/show-card/show-card.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { SellShowComponent } from './shows/sell-show/sell-show.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ShowsComponent } from './shows/shows.component';
import { ConfirmShowComponent } from './shows/confirm-show/confirm-show.component';
import { ClientsComponent } from './clients/clients.component';
import { ReservationsComponent } from './reservations/reservations/reservations.component';
import { ListReservationsComponent } from './reservations/list-reservations/list-reservations.component';
import { ModifyClientComponent } from './clients/modify-client/modify-client.component';
import { ModifyShowComponent } from './shows/modify-show/modify-show.component';
import { TransactionBrokerService } from './brokers/transaction-broker.service';
import { ClientBrokerService } from './brokers/client-broker.service';
import { ShowBrokerService } from './brokers/show-broker.service';
import { BrokerService } from './brokers/broker.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateShowComponent,
    ListShowsComponent,
    ShowCardComponent,
    CreateClientComponent,
    ListClientsComponent,
    SellShowComponent,
    BreadcrumbComponent,
    ClientsComponent,
    PhoneFormatPipe,
    ShowsComponent,
    ConfirmShowComponent,
    DashLowerCasePipe,
    ReservationsComponent,
    ListReservationsComponent,
    ModifyClientComponent,
    ModifyShowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FontAwesomeModule,
    BreadcrumbModule
  ],
  providers: [
    BrokerService,
    TransactionBrokerService,
    ClientBrokerService,
    ShowBrokerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


