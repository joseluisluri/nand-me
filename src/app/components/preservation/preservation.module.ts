// Modules
import { NgModule } from '@angular/core';
import { CollectionsRoutingModule } from './preservation-routing.module';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// Components
import { IndexComponent } from './index/index.component';
import { SystemComponent } from './system/system.component';

// Services
import { ApiService } from '../shared/services/api.service';
import { PipesModule } from '../../pipes/pipe.module';

@NgModule({
    imports: [  CommonModule, HttpModule, CollectionsRoutingModule, PipesModule ],
    declarations: [ IndexComponent, SystemComponent ],
    exports: [ IndexComponent, SystemComponent ],
    providers: [ ApiService ]
})
export class PreservationModule { }
