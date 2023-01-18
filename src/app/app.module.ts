/**
 *  Modules
 */
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ClientsComponent } from './clients/clients.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { ModifyClientComponent } from './clients/modify-client/modify-client.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashLowerCasePipe } from './pipes/dash-lower-case.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { ListReservationsComponent } from './reservations/list-reservations/list-reservations.component';
import { ReservationsComponent } from './reservations/reservations/reservations.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrokerService } from './services/brokers/broker.service';
import { ClientBrokerService } from './services/brokers/client-broker.service';
import { ShowBrokerService } from './services/brokers/show-broker.service';
import { TransactionBrokerService } from './services/brokers/transaction-broker.service';
import { ConfirmShowComponent } from './shows/confirm-show/confirm-show.component';
import { CreateShowComponent } from './shows/create-show/create-show.component';
import { ListShowsComponent } from './shows/list-shows/list-shows.component';
import { ModifyShowComponent } from './shows/modify-show/modify-show.component';
import { SellShowComponent } from './shows/sell-show/sell-show.component';
import { ShowCardComponent } from './shows/show-card/show-card.component';
import { ShowsComponent } from './shows/shows.component';

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


