import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WiiuComponent } from './wiiu/wiiu.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'collections', component: WiiuComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class CollectionsRoutingModule { }
