import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './components/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { PlayedComponent } from './components/played/played.component';
import { StatusComponent } from './components/status/status.component';
import { RepoModule } from './components/repo/repo.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PipesModule } from './pipes/pipe.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataTableModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';
import { RatingModule } from 'primeng/primeng';

const appRoutes: Routes = [
    { path: '', redirectTo: 'repo', pathMatch: 'full' },
    { path: 'played', component: PlayedComponent },
    { path: 'status', component: StatusComponent },
    { path: 'repo', component: RepoModule },
    { path: '**', component: StatusComponent } /* PageNotFoundComponent */
];

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        RepoModule,
        SharedModule,
        DataTableModule,
        ChartModule,
        RatingModule,
        RouterModule.forRoot(appRoutes),
        PipesModule,
        BrowserAnimationsModule,
  //      SpinnerModule
    ],
    declarations: [ AppComponent, StatusComponent, PlayedComponent ],
    bootstrap: [ AppComponent, NavbarComponent ]
})
export class AppModule { }
