import { Component, OnInit, } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { AppSettings } from '../../appsettings';

@Component({
    moduleId: module.id,
    selector: 'ng-app',
    templateUrl: './played.component.html',
})

export class PlayedComponent implements OnInit {
    endpoint = AppSettings.API_ENDPOINT + '/played/';
    games: any[];

    constructor(public api: ApiService) {}

    public ngOnInit() {
        this.api
            .endpoint(this.endpoint)
            .subscribe((response: any) => {
                this.games = response;
            });
    }
}
