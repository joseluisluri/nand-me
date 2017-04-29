"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var shared_module_1 = require("./components/shared/shared.module");
var app_routing_module_1 = require("./app-routing.module");
var status_component_1 = require("./components/status/status.component");
var collections_module_1 = require("./components/collections/collections.module");
var preservation_module_1 = require("./components/preservation/preservation.module");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/shared/navbar/navbar.component");
var pipe_module_1 = require("./pipes/pipe.module");
var appRoutes = [
    { path: '', redirectTo: 'status', pathMatch: 'full' },
    { path: 'status', component: status_component_1.StatusComponent },
    { path: 'preservation', component: preservation_module_1.PreservationModule },
    { path: 'collections/:platform', component: collections_module_1.CollectionsModule },
    { path: '**', component: status_component_1.StatusComponent } /* PageNotFoundComponent */
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            collections_module_1.CollectionsModule,
            preservation_module_1.PreservationModule,
            shared_module_1.SharedModule,
            router_1.RouterModule.forRoot(appRoutes),
            pipe_module_1.PipesModule,
        ],
        declarations: [app_component_1.AppComponent, status_component_1.StatusComponent],
        bootstrap: [app_component_1.AppComponent, navbar_component_1.NavbarComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map