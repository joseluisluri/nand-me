import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { AppSettings } from '../../appsettings';

@Component({
    moduleId: module.id,
    selector: 'ng-app',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
    endpoint = AppSettings.API_ENDPOINT + '/v1/status/all';
    system: any[];
    memory: any[];

    constructor(public api: ApiService) {}

    public ngOnInit() {
        this.api
            .endpoint(this.endpoint)
            .subscribe((response: any) => {
                this.system = response.system;
                this.memory = response.memory;
            });
    }
}
