import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { AppSettings } from '../../../appsettings';

@Component({
    moduleId: module.id,
    selector: 'ng-preservation-system',
    templateUrl: './system.component.html',
    styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit {
    @Input() tag: string;
    endpoint = AppSettings.API_ENDPOINT + '/v1/preservation/system/';
    system: any[];

    constructor(public api: ApiService) {}

    public ngOnInit() {
        this.bind();
    }

    public bind() {
        this.api
            .endpoint(this.endpoint + this.tag)
            .subscribe((response: any) => {
                this.system = response;
            });
    }
}
