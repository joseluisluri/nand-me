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
var system_component_1 = require("../system/system.component");
var IndexComponent = (function () {
    function IndexComponent(api) {
        this.api = api;
        this.endpoint = appsettings_1.AppSettings.API_ENDPOINT + '/v1/preservation/systems';
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api
            .endpoint(this.endpoint)
            .subscribe(function (response) {
            _this.systems = response;
        });
    };
    IndexComponent.prototype.loadSystem = function (system) {
        this.systemComponent.tag = system.tag;
        this.systemComponent.bind();
        return false;
    };
    return IndexComponent;
}());
__decorate([
    core_1.ViewChild(system_component_1.SystemComponent),
    __metadata("design:type", system_component_1.SystemComponent)
], IndexComponent.prototype, "systemComponent", void 0);
IndexComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng-app',
        templateUrl: './index.component.html',
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map