function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testimonial-testimonial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonial/testimonial.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonial/testimonial.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTestimonialTestimonialPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" defaultHref=\"/tab/tab2\">\n      <ion-back-button> </ion-back-button>\n    </ion-buttons>\n    <ion-title>Testimonial</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"slider\">\n    <ion-slides [options]=\"slideOptsOne\" pager=\"true\">\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/1.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/2.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/3.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/4.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/5.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/6.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/7.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/8.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/9.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"about-desc\">\n        <img src=\"assets/images/testimonial/10.jpeg\" alt=\"testimonial\"/>\n    </div>\n    </ion-slide>\n  </ion-slides>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/testimonial/testimonial-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/testimonial/testimonial-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: TestimonialPageRoutingModule */

  /***/
  function srcAppTestimonialTestimonialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialPageRoutingModule", function () {
      return TestimonialPageRoutingModule;
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


    var _testimonial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./testimonial.page */
    "./src/app/testimonial/testimonial.page.ts");

    var routes = [{
      path: '',
      component: _testimonial_page__WEBPACK_IMPORTED_MODULE_3__["TestimonialPage"]
    }];

    var TestimonialPageRoutingModule = function TestimonialPageRoutingModule() {
      _classCallCheck(this, TestimonialPageRoutingModule);
    };

    TestimonialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TestimonialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/testimonial/testimonial.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/testimonial/testimonial.module.ts ***!
    \***************************************************/

  /*! exports provided: TestimonialPageModule */

  /***/
  function srcAppTestimonialTestimonialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialPageModule", function () {
      return TestimonialPageModule;
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


    var _testimonial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./testimonial-routing.module */
    "./src/app/testimonial/testimonial-routing.module.ts");
    /* harmony import */


    var _testimonial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./testimonial.page */
    "./src/app/testimonial/testimonial.page.ts");

    var TestimonialPageModule = function TestimonialPageModule() {
      _classCallCheck(this, TestimonialPageModule);
    };

    TestimonialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _testimonial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestimonialPageRoutingModule"]],
      declarations: [_testimonial_page__WEBPACK_IMPORTED_MODULE_6__["TestimonialPage"]]
    })], TestimonialPageModule);
    /***/
  },

  /***/
  "./src/app/testimonial/testimonial.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/testimonial/testimonial.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTestimonialTestimonialPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".about-desc {\n  background: #fff;\n  width: 100%;\n  display: block;\n  padding: 1.5px;\n  box-shadow: 0 0px 20px #d0cece;\n  background-color: #fff;\n  margin: 10px;\n}\n\n.about-desc img {\n  width: 90% !important;\n}\n\n.swiper-pagination {\n  bottom: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25pYWwvQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxtb2JpbGUgYXBwXFxwcm91dHViL3NyY1xcYXBwXFx0ZXN0aW1vbmlhbFxcdGVzdGltb25pYWwucGFnZS5zY3NzIiwic3JjL2FwcC90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREdDO0VBQ0csc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1kZXNjIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMS41cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDBweCAyMHB4ICNkMGNlY2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uYWJvdXQtZGVzYyBpbWcge1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuXHJcbiAuc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgYm90dG9tOiAzcHggIWltcG9ydGFudDsgICAgXHJcbn1cclxuIiwiLmFib3V0LWRlc2Mge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEuNXB4O1xuICBib3gtc2hhZG93OiAwIDBweCAyMHB4ICNkMGNlY2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmFib3V0LWRlc2MgaW1nIHtcbiAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBib3R0b206IDNweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/testimonial/testimonial.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/testimonial/testimonial.page.ts ***!
    \*************************************************/

  /*! exports provided: TestimonialPage */

  /***/
  function srcAppTestimonialTestimonialPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialPage", function () {
      return TestimonialPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TestimonialPage = /*#__PURE__*/function () {
      function TestimonialPage() {
        _classCallCheck(this, TestimonialPage);

        this.slideOptsOne = {
          initialSlide: 0,
          slidesPerView: 1,
          autoplay: true,
          pagination: true
        };
      }

      _createClass(TestimonialPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestimonialPage;
    }();

    TestimonialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-testimonial',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./testimonial.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonial/testimonial.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./testimonial.page.scss */
      "./src/app/testimonial/testimonial.page.scss"))["default"]]
    })], TestimonialPage);
    /***/
  }
}]);
//# sourceMappingURL=testimonial-testimonial-module-es5.js.map