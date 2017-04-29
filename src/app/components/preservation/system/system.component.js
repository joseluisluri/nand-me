"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_service_1 = require("../../shared/services/api.service");
var appsettings_1 = require("../../../appsettings");
var SystemComponent = (function () {
    function SystemComponent(api) {
        this.api = api;
        this.endpoint = appsettings_1.AppSettings.API_ENDPOINT + '/v1/preservation/system/';
    }
    SystemComponent.prototype.ngOnInit = function () {
        this.bind();
    };
    SystemComponent.prototype.bind = function () {
        var _this = this;
        this.api
            .endpoint(this.endpoint + this.tag)
            .subscribe(function (response) {
            _this.system = response;
        });
    };
    return SystemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SystemComponent.prototype, "tag", void 0);
SystemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng-preservation-system',
        templateUrl: './system.component.html',
        styleUrls: ['./system.component.css']
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], SystemComponent);
exports.SystemComponent = SystemComponent;
//# sourceMappingURL=system.component.js.map