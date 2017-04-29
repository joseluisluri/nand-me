import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'preservation', component: IndexComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class CollectionsRoutingModule { }
