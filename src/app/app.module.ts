import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './components/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { StatusComponent } from './components/status/status.component';
import { CollectionsModule } from './components/collections/collections.module';
import { PreservationModule } from './components/preservation/preservation.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PipesModule } from './pipes/pipe.module';

const appRoutes: Routes = [
    { path: '', redirectTo: 'status', pathMatch: 'full' },
    { path: 'status', component: StatusComponent },
    { path: 'preservation', component: PreservationModule },
    { path: 'collections/:platform', component: CollectionsModule },
    { path: '**', component: StatusComponent } /* PageNotFoundComponent */
];

@NgModule({
    imports: [ BrowserModule,
        AppRoutingModule,
        CollectionsModule,
        PreservationModule,
        SharedModule,
        RouterModule.forRoot(appRoutes),
        PipesModule,
    ],
    declarations: [ AppComponent, StatusComponent ],
    bootstrap: [ AppComponent, NavbarComponent ]
})
export class AppModule { }
