"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Pipes
var round_pipe_1 = require("./round.pipe");
var humanfilesize_pipe_1 = require("./humanfilesize.pipe");
var titlecase_pipe_1 = require("./titlecase.pipe");
var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    core_1.NgModule({
        declarations: [round_pipe_1.RoundPipe, humanfilesize_pipe_1.HumanFileSizePipe, titlecase_pipe_1.TitleCasePipe],
        exports: [round_pipe_1.RoundPipe, humanfilesize_pipe_1.HumanFileSizePipe, titlecase_pipe_1.TitleCasePipe]
    })
], PipesModule);
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipe.module.js.map