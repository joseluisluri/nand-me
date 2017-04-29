import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { AppSettings } from '../../../appsettings';

@Component({
    moduleId: module.id,
    selector: 'ng-app',
    templateUrl: './wiiu.component.html',
})

export class WiiuComponent implements OnInit {
    endpoint = AppSettings.API_ENDPOINT + '/v1/collections/system'
    timestamp: number;
    collection: any[];

    constructor(public api: ApiService) {}

    public ngOnInit() {
        this.retrieveData();
    }

    public retrieveData() {
        this.api
            .endpoint(this.endpoint)
            .subscribe((response: any) => {
                var games: any[] = response.games;
                var eshop: any[] = response.eshop;
                var lost: any[] = response.lost;
                games.forEach(game => game['type'] = 'Retail');
                eshop.forEach(game => game['type'] = 'eShop');
                lost.forEach(game => { game['type'] = 'Unknown'; game['name'] = game.game_name; })
                this.timestamp = response.timestamp;
                this.collection = games.concat(eshop).concat(lost).sort(function(a, b) {
                    return a.name.localeCompare(b.name);
                });
            });
    }
}
