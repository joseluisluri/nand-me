import { Component, OnInit, } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { AppSettings } from '../../../appsettings';

@Component({
    moduleId: module.id,
    selector: 'ng-repo-systemsbox',
    templateUrl: './systemsbox.component.html',
})

export class SystemsBoxComponent implements OnInit {
    endpoint = AppSettings.API_ENDPOINT + '/repo/systems';
    systems: any[];

    constructor(public api: ApiService) {}

    public ngOnInit() {
        this.api
            .endpoint(this.endpoint)
            .subscribe((response: any) => {
                this.systems = response;
            });
    }
}
