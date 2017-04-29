// Modules
import { NgModule } from '@angular/core';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// Components
import { WiiuComponent } from './wiiu/wiiu.component';

// Services
import { ApiService } from '../shared/services/api.service';
import { PipesModule } from '../../pipes/pipe.module';

@NgModule({
    imports: [  CommonModule, HttpModule, CollectionsRoutingModule, PipesModule ],
    declarations: [ WiiuComponent ],
    exports: [ WiiuComponent ],
    providers: [ ApiService ]
})
export class CollectionsModule { }
