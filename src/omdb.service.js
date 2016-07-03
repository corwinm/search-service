System.register(["@angular/core", '@angular/http', 'rxjs'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, rxjs_1;
    var OmdbService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }],
        execute: function() {
            OmdbService = (function () {
                function OmdbService(http) {
                    this.http = http;
                    this.apiUrl = "http://www.omdbapi.com/";
                }
                OmdbService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return new rxjs_1.Observable(error.message || error);
                };
                OmdbService.prototype.search = function (query) {
                    //http://www.omdbapi.com/?s=Star+wars&y=&plot=short&r=json
                    var args = new http_1.URLSearchParams();
                    args.append("s", query);
                    args.append("plot", "short");
                    args.append("r", "json");
                    return this.http.get(this.apiUrl, { search: args })
                        .map(function (response) {
                        return response.json().Search;
                    })
                        .catch(this.handleError);
                };
                OmdbService.prototype.find = function (id) {
                    return this.http.get(this.apiUrl + "?i=" + encodeURI(id) + "&y=&plot=short&r=json")
                        .map(function (response) {
                        return response.json();
                    })
                        .catch(this.handleError);
                };
                OmdbService.prototype.findSeason = function (id, season) {
                    return this.http.get(this.apiUrl + "?i=" + encodeURI(id) + "&season=" + encodeURI(season.toString()) + "&y=&plot=short&r=json")
                        .map(function (response) {
                        return response.json();
                    })
                        .catch(this.handleError);
                };
                OmdbService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], OmdbService);
                return OmdbService;
            }());
            exports_1("OmdbService", OmdbService);
        }
    }
});
//# sourceMappingURL=omdb.service.js.map