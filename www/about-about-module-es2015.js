(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" defaultHref=\"/tab/tab2\">\n      <ion-back-button> </ion-back-button>\n    </ion-buttons>\n    <ion-title>about</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item text-center>\n  <h2> Grow up your business with us</h2>\n</ion-item>\n<ion-item text-center>\n  <p> We are a professional digital marketer with creative image designing abilities, have experience in Social Media Marketing, SEO, Social Media Advertising, Content Marketing, Video Marketing, Email Marketing, SEM, Marketing Strategy, Web Analytics, Influencer Marketing, Domain Research, E-Commerce Marketing, Mobile Marketing & Advertising, Music Promotion My purpose is to assist my customers to define and attain their dreams. We provide an awesome provider and always try to maintain long time relationships. Just rent us! we ’ll happy to help you! 😃</p>\n</ion-item>\n\n<!--slider likes-->\n<div class=\"slider\">\n  <ion-slides [options]=\"slideOptsOne\">\n  <ion-slide>\n    <div class=\"about-desc mega\">\n      <img src=\"assets/images/instagram.svg\" alt=\"instagram\" />\n      <h3>Get More Likes and views on Your Instagram </h3>\n  </div>\n  </ion-slide>\n  <ion-slide>\n    <div class=\"about-desc advance\">\n      <img src=\"assets/images/views.svg\" alt=\"views\" />\n      <h3> Gain Genuine views </h3>\n  </div>\n  </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc novice\">\n        <img src=\"assets/images/followers.svg\" alt=\"followers\" />\n        <h3> Gain Genuine followers</h3>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc starter\">\n        <img src=\"assets/images/order.svg\" alt=\"likes\" />\n        <h3> Increase your likes </h3>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc corporate1\">\n        <img src=\"assets/images/brand.svg\" alt=\"brand\" />\n        <h3> Branding </h3>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc corporate4\">\n        <img src=\"assets/images/seo.svg\" alt=\"seo\" />\n        <h3> Improve your Site's Ranking (SEO)</h3>\n    </div>\n    </ion-slide>\n</ion-slides>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".slider {\n  margin: 1em;\n}\n\n.about-desc {\n  display: block;\n  padding: 10px;\n  color: #fff;\n  min-height: 150px;\n  text-align: center;\n  width: 100%;\n}\n\n.about-desc img {\n  width: 30% !important;\n  margin: 0px auto;\n}\n\n.about-desc h3 {\n  margin-top: 10px;\n  font-size: 18px;\n}\n\n.starter {\n  background: #78CFBF;\n}\n\n.novice {\n  background: #3EC6E0;\n}\n\n.advance {\n  background: #E3536C;\n}\n\n.mega {\n  background: #079992;\n}\n\n.corporate1 {\n  background: #E91E63;\n}\n\n.corporate2 {\n  background: #6D435A;\n}\n\n.corporate3 {\n  background: #004385;\n}\n\n.corporate4 {\n  background: #124559;\n}\n\np {\n  line-height: 1.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxtb2JpbGUgYXBwXFxwcm91dHViL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHRTtFQUNHLG1CQUFBO0FDQUw7O0FER0U7RUFDRSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHRTtFQUNFLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHRTtFQUNHLGtCQUFBO0FDQUwiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG4uYWJvdXQtZGVzYyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hYm91dC1kZXNjIGltZyB7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4uYWJvdXQtZGVzYyBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5cclxuLnN0YXJ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzc4Q0ZCRjtcclxuICB9XHJcbiAgXHJcbiAgLm5vdmljZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiMzRUM2RTBcclxuICB9XHJcbiAgXHJcbiAgLmFkdmFuY2Uge1xyXG4gICAgIGJhY2tncm91bmQ6I0UzNTM2Q1xyXG4gIH1cclxuICBcclxuICAubWVnYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiMwNzk5OTJcclxuICB9XHJcbiAgXHJcbiAgLmNvcnBvcmF0ZTEge1xyXG4gICAgYmFja2dyb3VuZDojRTkxRTYzXHJcbiAgfVxyXG4gIFxyXG4gIC5jb3Jwb3JhdGUyIHtcclxuICAgIGJhY2tncm91bmQ6IzZENDM1QVxyXG4gIH1cclxuICBcclxuICAuY29ycG9yYXRlMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMDQzODVcclxuICB9XHJcbiAgXHJcbiAgLmNvcnBvcmF0ZTQge1xyXG4gICAgYmFja2dyb3VuZDojMTI0NTU5XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICB9IiwiLnNsaWRlciB7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4uYWJvdXQtZGVzYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hYm91dC1kZXNjIGltZyB7XG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLmFib3V0LWRlc2MgaDMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zdGFydGVyIHtcbiAgYmFja2dyb3VuZDogIzc4Q0ZCRjtcbn1cblxuLm5vdmljZSB7XG4gIGJhY2tncm91bmQ6ICMzRUM2RTA7XG59XG5cbi5hZHZhbmNlIHtcbiAgYmFja2dyb3VuZDogI0UzNTM2Qztcbn1cblxuLm1lZ2Ege1xuICBiYWNrZ3JvdW5kOiAjMDc5OTkyO1xufVxuXG4uY29ycG9yYXRlMSB7XG4gIGJhY2tncm91bmQ6ICNFOTFFNjM7XG59XG5cbi5jb3Jwb3JhdGUyIHtcbiAgYmFja2dyb3VuZDogIzZENDM1QTtcbn1cblxuLmNvcnBvcmF0ZTMge1xuICBiYWNrZ3JvdW5kOiAjMDA0Mzg1O1xufVxuXG4uY29ycG9yYXRlNCB7XG4gIGJhY2tncm91bmQ6ICMxMjQ1NTk7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMS42ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AboutPage = class AboutPage {
    constructor() {
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
            pagination: true
        };
    }
    ngOnInit() {
    }
};
AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")).default]
    })
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map