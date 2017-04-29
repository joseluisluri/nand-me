
import { NgModule } from '@angular/core';

// Pipes
import { RoundPipe } from './round.pipe';
import { HumanFileSizePipe } from './humanfilesize.pipe';
import { TitleCasePipe } from './titlecase.pipe';

@NgModule({
    declarations: [ RoundPipe, HumanFileSizePipe, TitleCasePipe ],
    exports: [ RoundPipe, HumanFileSizePipe, TitleCasePipe ]
})
export class PipesModule { }
