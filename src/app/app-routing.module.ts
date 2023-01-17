import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { PageTitleStrategy } from './page-title-strategy';

/**
 * Routes
 */
import { ClientsComponent } from './clients/clients.component';
import { ShowsComponent } from './shows/shows.component';
import { ReservationsComponent } from './reservations/reservations/reservations.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { ListShowsComponent } from './shows/list-shows/list-shows.component';
import { ListReservationsComponent } from './reservations/list-reservations/list-reservations.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { CreateShowComponent } from './shows/create-show/create-show.component';
import { SellShowComponent } from './shows/sell-show/sell-show.component';
import { ConfirmShowComponent } from './shows/confirm-show/confirm-show.component';
import { ModifyClientComponent } from './clients/modify-client/modify-client.component';
import { ModifyShowComponent } from './shows/modify-show/modify-show.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'spectacles/liste',
    pathMatch: 'full'
  },
  {
    path: 'spectacles',
    title: 'Gestion des spectacles',
    data: {
      breadcrumb: 'Gestion des spectacles'
    },
    component: ShowsComponent,
    children: [
      {
        path: 'liste',
        title: 'Liste des spectacles',
        data: {
          breadcrumb: 'Liste des spectacles'
        },
        component: ListShowsComponent,
      },
      {
        path: 'creation',
        title: 'Créer un spectacle',
        data: {
          breadcrumb: 'Créer un spectacle'
        },
        component: CreateShowComponent,
      },
      {
        path: ':id',
        title: 'Acheter des billets',
        data: {
          breadcrumb: 'Acheter des billets'
        },
        component: SellShowComponent,
      },
      {
        path: 'confirmation/:id',
        title: 'Confirmation de la transaction',
        data: {
          breadcrumb: 'Confirmation'
        },
        component: ConfirmShowComponent,
      },
      {
        path: 'modifier/:id',
        title: 'Modifier un spectacle',
        data: {
          breadcrumb: 'Modifier un spectacle'
        },
        component: ModifyShowComponent,
      },
    ]
  },
  {
    path: 'clients',
    title: 'Clients',
    data: {
      breadcrumb: 'Gestion des clients'
    },
    component: ClientsComponent,
    children: [
      {
        path: 'liste',
        title: 'Liste des clients',
        data: {
          breadcrumb: 'Liste des clients'
        },
        component: ListClientsComponent,
      },
      {
        path: 'creation',
        title: 'Créer un client',
        data: {
          breadcrumb: 'Créer un client'
        },
        component: CreateClientComponent,
      },
      {
        path: 'modifier/:id',
        title: 'Modifier un client',
        data: {
          breadcrumb: 'Modifier un client'
        },
        component: ModifyClientComponent,
      },
    ]
  },
  {
    path: 'reservations',
    title: 'Réservations',
    data: {
      breadcrumb: 'Gestion des réservations'
    },
    component: ReservationsComponent,
    children: [
      {
        path: 'liste',
        title: 'Liste des réservations',
        data: {
          breadcrumb: 'Liste des réservations'
        },
        component: ListReservationsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: PageTitleStrategy},
  ]
})
export class AppRoutingModule { }

