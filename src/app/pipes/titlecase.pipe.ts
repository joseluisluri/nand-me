import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'titlecase'})
export class TitleCasePipe implements PipeTransform {
    transform (input: string) {
        var ignore: string[] = [ 'of', 'the', 'and', 'a', 'an' ] ;
        var upper: string[] = [ '3d', 'hd', 'cd' ];
        var arr: string[] = [];

        input.split(' ').forEach(function(word, i) {
            word = word.toLowerCase();

            if (ignore.includes(word) && i !== 0) {
                arr.push(word);
            } else if (upper.includes(word)) {
                arr.push(word.toUpperCase());
            } else {
                arr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
            }
        });
        return arr.join(' ');
    }
}