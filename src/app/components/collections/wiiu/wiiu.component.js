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
var WiiuComponent = (function () {
    function WiiuComponent(api) {
        this.api = api;
        this.endpoint = appsettings_1.AppSettings.API_ENDPOINT + '/v1/collections/system';
    }
    WiiuComponent.prototype.ngOnInit = function () {
        this.retrieveData();
    };
    WiiuComponent.prototype.retrieveData = function () {
        var _this = this;
        this.api
            .endpoint(this.endpoint)
            .subscribe(function (response) {
            var games = response.games;
            var eshop = response.eshop;
            var lost = response.lost;
            games.forEach(function (game) { return game['type'] = 'Retail'; });
            eshop.forEach(function (game) { return game['type'] = 'eShop'; });
            lost.forEach(function (game) { game['type'] = 'Unknown'; game['name'] = game.game_name; });
            _this.timestamp = response.timestamp;
            _this.collection = games.concat(eshop).concat(lost).sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
        });
    };
    return WiiuComponent;
}());
WiiuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ng-app',
        templateUrl: './wiiu.component.html',
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], WiiuComponent);
exports.WiiuComponent = WiiuComponent;
//# sourceMappingURL=wiiu.component.js.map