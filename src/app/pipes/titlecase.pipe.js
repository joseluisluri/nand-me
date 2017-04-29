"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TitleCasePipe = (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (input) {
        var ignore = ['of', 'the', 'and', 'a', 'an'];
        var upper = ['3d', 'hd', 'cd'];
        var arr = [];
        input.split(' ').forEach(function (word, i) {
            word = word.toLowerCase();
            if (ignore.includes(word) && i !== 0) {
                arr.push(word);
            }
            else if (upper.includes(word)) {
                arr.push(word.toUpperCase());
            }
            else {
                arr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
            }
        });
        return arr.join(' ');
    };
    return TitleCasePipe;
}());
TitleCasePipe = __decorate([
    core_1.Pipe({ name: 'titlecase' })
], TitleCasePipe);
exports.TitleCasePipe = TitleCasePipe;
//# sourceMappingURL=titlecase.pipe.js.map