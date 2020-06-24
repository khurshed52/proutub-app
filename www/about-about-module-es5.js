function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" defaultHref=\"/tab/tab2\">\n      <ion-back-button> </ion-back-button>\n    </ion-buttons>\n    <ion-title>about</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item text-center>\n  <h2> Grow up your business with us</h2>\n</ion-item>\n<ion-item text-center>\n  <p> Welcome to Protube we are an online digital marketing service that helps content creators and businesses to expand their audience we usually believe online presence and marketing is a good way to grow yourself.\n\n    We deal in Google AdWords and create campaigns for YouTube promotions helping our clients reach their expectations.\n    \n    However when it comes to ads there are two types of ads that we mostly imply those are skip ads and discovery ads.\n    \n    Skip ads are like preroll ads that appears with a skipable duration before any videos in YouTube that has most likely same type of contents while in Discovery ads the retention is more as it displays the video in the recommendations. 😃</p>\n</ion-item>\n\n<!--slider likes-->\n<div class=\"slider\">\n  <ion-slides [options]=\"slideOptsOne\">\n  <ion-slide>\n    <div class=\"about-desc mega\">\n      <img src=\"assets/images/instagram.svg\" alt=\"instagram\" />\n      <h3>YOUTUBE COMMENTS</h3>\n  </div>\n  </ion-slide>\n  <ion-slide>\n    <div class=\"about-desc advance\">\n      <img src=\"assets/images/views.svg\" alt=\"views\" />\n      <h3> YOUTUBE VIEWS</h3>\n  </div>\n  </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc novice\">\n        <img src=\"assets/images/order.svg\" alt=\"LIKES\" />\n        <h3>   YOUTUBE LIKES, DISLIKES </h3>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc starter\">\n        <img src=\"assets/images/brand.svg\" alt=\"brand\" />\n        <h3>  YOUTUBE SUBSCRIBERS</h3>\n    </div>\n    </ion-slide>\n</ion-slides>\n</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/about/about-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/about/about-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AboutPageRoutingModule */

  /***/
  function srcAppAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/about/about.page.ts");

    var routes = [{
      path: '',
      component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }];

    var AboutPageRoutingModule = function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    };

    AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/about/about.module.ts":
  /*!***************************************!*\
    !*** ./src/app/about/about.module.ts ***!
    \***************************************/

  /*! exports provided: AboutPageModule */

  /***/
  function srcAppAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
      return AboutPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/about/about-routing.module.ts");
    /* harmony import */


    var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/about/about.page.ts");

    var AboutPageModule = function AboutPageModule() {
      _classCallCheck(this, AboutPageModule);
    };

    AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]],
      declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })], AboutPageModule);
    /***/
  },

  /***/
  "./src/app/about/about.page.scss":
  /*!***************************************!*\
    !*** ./src/app/about/about.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".slider {\n  margin: 1em;\n}\n\n.about-desc {\n  display: block;\n  padding: 10px;\n  color: #fff;\n  min-height: 150px;\n  text-align: center;\n  width: 100%;\n  border-radius: 50%/11%;\n}\n\n.about-desc img {\n  width: 30% !important;\n  margin: 0px auto;\n}\n\n.about-desc h3 {\n  margin-top: 10px;\n  font-size: 18px;\n}\n\n.starter {\n  background: #78CFBF;\n}\n\n.novice {\n  background: #3EC6E0;\n}\n\n.advance {\n  background: #E3536C;\n}\n\n.mega {\n  background: #079992;\n}\n\n.corporate1 {\n  background: #E91E63;\n}\n\n.corporate2 {\n  background: #6D435A;\n}\n\n.corporate3 {\n  background: #004385;\n}\n\n.corporate4 {\n  background: #124559;\n}\n\np {\n  line-height: 1.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxtb2JpbGUgYXBwXFxwcm91dHViL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtBQ0FKOztBREdFO0VBQ0csbUJBQUE7QUNBTDs7QURHRTtFQUNFLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7QUNBSjs7QURHRTtFQUNFLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtBQ0FKOztBREdFO0VBQ0csa0JBQUE7QUNBTCIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbi5hYm91dC1kZXNjIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAvIDExJTtcclxufVxyXG5cclxuLmFib3V0LWRlc2MgaW1nIHtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbn1cclxuXHJcbi5hYm91dC1kZXNjIGgzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcblxyXG4uc3RhcnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzhDRkJGO1xyXG4gIH1cclxuICBcclxuICAubm92aWNlIHtcclxuICAgIGJhY2tncm91bmQ6IzNFQzZFMFxyXG4gIH1cclxuICBcclxuICAuYWR2YW5jZSB7XHJcbiAgICAgYmFja2dyb3VuZDojRTM1MzZDXHJcbiAgfVxyXG4gIFxyXG4gIC5tZWdhIHtcclxuICAgIGJhY2tncm91bmQ6IzA3OTk5MlxyXG4gIH1cclxuICBcclxuICAuY29ycG9yYXRlMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiNFOTFFNjNcclxuICB9XHJcbiAgXHJcbiAgLmNvcnBvcmF0ZTIge1xyXG4gICAgYmFja2dyb3VuZDojNkQ0MzVBXHJcbiAgfVxyXG4gIFxyXG4gIC5jb3Jwb3JhdGUzIHtcclxuICAgIGJhY2tncm91bmQ6IzAwNDM4NVxyXG4gIH1cclxuICBcclxuICAuY29ycG9yYXRlNCB7XHJcbiAgICBiYWNrZ3JvdW5kOiMxMjQ1NTlcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xyXG4gIH0iLCIuc2xpZGVyIHtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5hYm91dC1kZXNjIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlLzExJTtcbn1cblxuLmFib3V0LWRlc2MgaW1nIHtcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uYWJvdXQtZGVzYyBoMyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnN0YXJ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzhDRkJGO1xufVxuXG4ubm92aWNlIHtcbiAgYmFja2dyb3VuZDogIzNFQzZFMDtcbn1cblxuLmFkdmFuY2Uge1xuICBiYWNrZ3JvdW5kOiAjRTM1MzZDO1xufVxuXG4ubWVnYSB7XG4gIGJhY2tncm91bmQ6ICMwNzk5OTI7XG59XG5cbi5jb3Jwb3JhdGUxIHtcbiAgYmFja2dyb3VuZDogI0U5MUU2Mztcbn1cblxuLmNvcnBvcmF0ZTIge1xuICBiYWNrZ3JvdW5kOiAjNkQ0MzVBO1xufVxuXG4uY29ycG9yYXRlMyB7XG4gIGJhY2tncm91bmQ6ICMwMDQzODU7XG59XG5cbi5jb3Jwb3JhdGU0IHtcbiAgYmFja2dyb3VuZDogIzEyNDU1OTtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/about/about.page.ts":
  /*!*************************************!*\
    !*** ./src/app/about/about.page.ts ***!
    \*************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutPage = /*#__PURE__*/function () {
      function AboutPage() {
        _classCallCheck(this, AboutPage);

        this.slideOptsOne = {
          initialSlide: 0,
          slidesPerView: 1,
          autoplay: true,
          pagination: true
        };
      }

      _createClass(AboutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutPage;
    }();

    AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./about.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./about.page.scss */
      "./src/app/about/about.page.scss"))["default"]]
    })], AboutPage);
    /***/
  }
}]);
//# sourceMappingURL=about-about-module-es5.js.map