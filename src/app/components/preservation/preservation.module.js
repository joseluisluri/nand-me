"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var core_1 = require("@angular/core");
var preservation_routing_module_1 = require("./preservation-routing.module");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
// Components
var index_component_1 = require("./index/index.component");
var system_component_1 = require("./system/system.component");
// Services
var api_service_1 = require("../shared/services/api.service");
var pipe_module_1 = require("../../pipes/pipe.module");
var PreservationModule = (function () {
    function PreservationModule() {
    }
    return PreservationModule;
}());
PreservationModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, preservation_routing_module_1.CollectionsRoutingModule, pipe_module_1.PipesModule],
        declarations: [index_component_1.IndexComponent, system_component_1.SystemComponent],
        exports: [index_component_1.IndexComponent, system_component_1.SystemComponent],
        providers: [api_service_1.ApiService]
    })
], PreservationModule);
exports.PreservationModule = PreservationModule;
//# sourceMappingURL=preservation.module.js.map