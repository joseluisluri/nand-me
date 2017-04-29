import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { AppSettings } from '../../../appsettings';
import { SystemComponent } from '../system/system.component';

@Component({
    moduleId: module.id,
    selector: 'ng-app',
    templateUrl: './index.component.html',
})

export class IndexComponent implements OnInit {
    endpoint = AppSettings.API_ENDPOINT + '/v1/preservation/systems';
    systems: any[];
    @ViewChild(SystemComponent)
    private systemComponent: SystemComponent;

    constructor(public api: ApiService) {}

    public ngOnInit() {
        this.api
            .endpoint(this.endpoint)
            .subscribe((response: any) => {
                this.systems = response;
            });
    }

    public loadSystem(system: any) {
        this.systemComponent.tag = system.tag;
        this.systemComponent.bind();
        return false;
    }
}
