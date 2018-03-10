webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UlsterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UlsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UlsterPage = (function () {
    function UlsterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UlsterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UlsterPage');
    };
    UlsterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ulster',template:/*ion-inline-start:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\ulster\ulster.html"*/'<!--\n  Generated template for the UlsterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ulster</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Background Information</h1>\n\n  <p>High Intensity Interval Training (HIIT for short) is a form of cardio alternating \n    short periods of intensive anaerobic excercise with less intense recovery periods.\n    In short, HIIT is the concept of doing an excercise as fast and hard as possible with\n    short breaks inbetween sets, in turn, this allows a person to burn fat at a much higher\n    rate while also spending less time on said excercise. In this section we will be looking at\n    at a sprint version of HIIT aimmed to combat fat percentage and calorie intake. \n  </p>\n\n  <h1>How To: HIIT Sprints</h1>\n  <ul>\n    <li>1.) Prepare yourself a run route or use a threadmil.</li>\n    <li>2.) For the first interval of your run, sprint as hard and fast as possible for 3 minutes</li>\n    <li>3.) Once the 3 minute interval is over, rest for 30 seconds</li>\n    <li>4.) Once the 30 second rest interval is over, repeat steps 1-3</li>\n    <li>5.) Repeat these steps until your interval or distence goal is accomplised</li>\n\n    </ul>\n\n    <h1>Sample Routines:</h1>\n    \n\n    <h4>Beginner:</h4>\n\n    <ul>\n        <li>Sprint Interval = 3 minutes</li>\n        <li>Break Interval = 2 minutes</li>\n        <li>Total time = 30 minutes</li>\n         \n    </ul>\n\n    <h4>Intermediate:</h4>\n\n    <ul>\n        <li>Sprint Interval = 4 minutes</li>\n        <li>Break Interval = 1 minute</li>\n        <li>Total time = 40 minutes</li>\n         \n    </ul>\n\n    <h4>Expert:</h4>\n\n    <ul>\n        <li>Sprint Interval = 5 minutes</li>\n        <li>Break Interval = 30 seconds - 1 minute</li>\n        <li>Total time = 1 hour</li>\n         \n    </ul>\n\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\ulster\ulster.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UlsterPage);
    return UlsterPage;
}());

//# sourceMappingURL=ulster.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/connaught/connaught.module": [
		276,
		2
	],
	"../pages/leinster/leinster.module": [
		277,
		1
	],
	"../pages/munster/munster.module": [
		278,
		4
	],
	"../pages/skipping/skipping.module": [
		279,
		0
	],
	"../pages/ulster/ulster.module": [
		280,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnaughtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConnaughtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnaughtPage = (function () {
    function ConnaughtPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConnaughtPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnaughtPage');
    };
    ConnaughtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-connaught',template:/*ion-inline-start:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\Connaught\connaught.html"*/'<!--\n  Generated template for the UlsterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ulster</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Background Information</h1>\n\n  <p>High Intensity Interval Training (HIIT for short) is a form of cardio alternating \n    short periods of intensive anaerobic excercise with less intense recovery periods.\n    In short, HIIT is the concept of doing an excercise as fast and hard as possible with\n    short breaks inbetween sets, in turn, this allows a person to burn fat at a much higher\n    rate while also spending less time on said excercise. In this section we will be looking at\n    at a sprint version of HIIT aimmed to combat fat percentage and calorie intake. \n  </p>\n\n  <h1>How To: HIIT Sprints</h1>\n  <ul>\n    <li>1.) Prepare yourself a run route or use a threadmil.</li>\n    <li>2.) For the first interval of your run, sprint as hard and fast as possible for 3 minutes</li>\n    <li>3.) Once the 3 minute interval is over, rest for 30 seconds</li>\n    <li>4.) Once the 30 second rest interval is over, repeat steps 1-3</li>\n    <li>5.) Repeat these steps until your interval or distence goal is accomplised</li>\n\n    </ul>\n\n    <h1>Sample Routines:</h1>\n    \n\n    <h4>Beginner:</h4>\n\n    <ul>\n        <li>Sprint Interval = 3 minutes</li>\n        <li>Break Interval = 2 minutes</li>\n        <li>Total time = 30 minutes</li>\n         \n    </ul>\n\n    <h4>Intermediate:</h4>\n\n    <ul>\n        <li>Sprint Interval = 4 minutes</li>\n        <li>Break Interval = 1 minute</li>\n        <li>Total time = 40 minutes</li>\n         \n    </ul>\n\n    <h4>Expert:</h4>\n\n    <ul>\n        <li>Sprint Interval = 5 minutes</li>\n        <li>Break Interval = 30 seconds - 1 minute</li>\n        <li>Total time = 1 hour</li>\n         \n    </ul>\n\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\Connaught\connaught.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ConnaughtPage);
    return ConnaughtPage;
}());

//# sourceMappingURL=Connaught.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeinsterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LeinsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeinsterPage = (function () {
    function LeinsterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LeinsterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeinsterPage');
    };
    LeinsterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leinster',template:/*ion-inline-start:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\Leinster\leinster.html"*/'<!--\n  Generated template for the LeinsterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>leinster</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\Leinster\leinster.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LeinsterPage);
    return LeinsterPage;
}());

//# sourceMappingURL=Leinster.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkippingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SkippingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SkippingPage = (function () {
    function SkippingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SkippingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SkippingPage');
    };
    SkippingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-skipping',template:/*ion-inline-start:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\Skipping\skipping.html"*/'<!--\n  Generated template for the SkippingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>skipping</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\Skipping\skipping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SkippingPage);
    return SkippingPage;
}());

//# sourceMappingURL=Skipping.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_ulster_ulster__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_munster_munster__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Connaught_Connaught__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Leinster_Leinster__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Skipping_Skipping__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openUlster = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_ulster_ulster__["a" /* UlsterPage */]);
    };
    HomePage.prototype.openMunster = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_munster_munster__["a" /* MunsterPage */]);
    };
    HomePage.prototype.openConnaught = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_Connaught_Connaught__["a" /* ConnaughtPage */]);
    };
    HomePage.prototype.openLeinster = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_Leinster_Leinster__["a" /* LeinsterPage */]);
    };
    HomePage.prototype.openSkipping = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_Skipping_Skipping__["a" /* SkippingPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cardio\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  List Of Cardio Excercises\n<ol>\n    <li (click)="openUlster()"> HIIT Sprints</li>\n    <li (click)="openMunster()"> Rowing</li>\n    <li (click)="openConnaught()"> Excercise Bike</li>\n    <li (click)="openLeinster()"> Swimming</li>\n    <li (click)="openSkipping()"> Skipping</li>\n    </ol>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ulster_ulster__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_munster_munster__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Connaught_Connaught__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Leinster_Leinster__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Skipping_Skipping__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_ulster_ulster__["a" /* UlsterPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_munster_munster__["a" /* MunsterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Connaught_Connaught__["a" /* ConnaughtPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Leinster_Leinster__["a" /* LeinsterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_Skipping_Skipping__["a" /* SkippingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/connaught/connaught.module#ConnaughtPageModule', name: 'ConnaughtPage', segment: 'connaught', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leinster/leinster.module#LeinsterPageModule', name: 'LeinsterPage', segment: 'leinster', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/munster/munster.module#MunsterPageModule', name: 'MunsterPage', segment: 'munster', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/skipping/skipping.module#SkippingPageModule', name: 'SkippingPage', segment: 'skipping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ulster/ulster.module#UlsterPageModule', name: 'UlsterPage', segment: 'ulster', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_ulster_ulster__["a" /* UlsterPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_munster_munster__["a" /* MunsterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_Connaught_Connaught__["a" /* ConnaughtPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Leinster_Leinster__["a" /* LeinsterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_Skipping_Skipping__["a" /* SkippingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MunsterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MunsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MunsterPage = (function () {
    function MunsterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MunsterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MunsterPage');
    };
    MunsterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-munster',template:/*ion-inline-start:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\munster\munster.html"*/'!--\n  Generated template for the UlsterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Rowing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Background Information</h1>\n\n  <p>Indoor rowing primarily works the cardiovascular systems with typical workouts consisting of steady pieces of 20–40 minutes, \n    although the standard trial distance for record attempts is 2000 m, which can take from five and a half minutes (best elite rowers) to nine minutes or more. Like other forms of cardio\n     focused exercise, interval training is also commonly used in indoor rowing. While cardio-focused, rowing also stresses many muscle groups throughout the body anaerobically, thus rowing\n      is often referred to as a strength-endurance sport.\n    Unlike high impact exercises, which can damage knees and the connective tissues of the lower body, rowing\'s most common injury site is the lower back. Proper technique is a necessity for\n    staying injury free, with a focus on both mechanics and breathing, as correct rhythm, exhaling on the drive and inhaling on the recovery, is a stabilizing force for the upper body.\n  </p>\n\n  <h1>How To: Indoor Rowing</h1>\n  <ul>\n    <li>1.) The “catch” is the beginning of the stroke. Here, you are at full compression forward and taking the weight of the stroke. If you were in an actual rowing boat, \n      you could visualize the blade as entering the water and “catching” the weight of its resistance. </li>\n    <li>2.) The “drive” describes the basic sequence of the rowing stroke, which is legs first, then back, and finally arms. A few common mistakes to avoid are pulling with your arms first\n       or opening up with your shoulders before you’ve driven the legs down. Always liken the movement to a power clean and stress the importance of holding a strong body angle while \n       pushing the legs down and then accelerating through with the body and then arms. </li>\n    <li>3.) Quite literally, the “finish” of the stroke. After completing the stroke sequence, you should be sitting with your legs flat, shoulders behind your hips, and the handle drawn \n      horizontally to the body at the lower ribs.</li>\n    \n\n    </ul>\n\n    <h1>Sample Routines:</h1>\n    \n\n    <h4>Beginner:</h4>\n\n    <ul>\n        <li>Reps Per Minute = 3</li>\n        <li>Strokes Per Minute = 16-18</li>\n        <li>Time Per Rep = 5 minutes</li>\n         \n    </ul>\n\n    <h4>Intermediate:</h4>\n\n    <ul>\n        <li>Reps Per Minute = 5-6</li>\n        <li>Strokes Per Minute = 20-22</li>\n        <li>Time Per Rep = 10 minutes</li>\n         \n    </ul>\n\n    <h4>Expert:</h4>\n\n    <ul>\n        <li>Reps Per Minute = 7-8</li>\n        <li>Strokes Per Minute = 26-28</li>\n        <li>Time Per Rep = 20 minutes</li>\n         \n    </ul>\n\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Le Epic Meme Man\ionicStuff\ionicProject2018\fitnessApp\src\pages\munster\munster.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MunsterPage);
    return MunsterPage;
}());

//# sourceMappingURL=munster.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map