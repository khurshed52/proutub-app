function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n     Contact\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"contact\"> \n    <img [src]='contactImage' alt=\"contact\"/>\n  </div>\n\n<!--social media-->\n<div id=\"circ\">\n  <ul>\n    <li>\n      <a href=\"https://www.youtube.com/watch?v=XZEBnYSMUH8&feature=youtu.be\" target=\"_blank\">\n        <i class=\"fa fa-youtube\"></i>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://www.instagram.com/_proutub/?igshid=1mjw5wc68zzhz\" target=\"_blank\">\n        <i class=\"fa fa-instagram\"></i>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://wa.me/919554600388\" target=\"_blank\">\n        <i class=\"fa fa-whatsapp\"></i>\n      </a>\n    </li>\n    <li>\n      <a href=\"mailto:Service@proutub.com\">\n        <i class=\"fa fa-envelope\"></i>\n      </a>\n    </li>\n    <li>\n      <a href=\"tel:+919554600388\">\n        <i class=\"fa fa-mobile\"></i>\n      </a>\n    </li>\n  </ul>\n</div>\n\n  <div class=\"cont\">\n    <ul>\n      <li>\n          <h3>\n            <ion-icon name=\"mail-outline\"></ion-icon> Email: <a href=\"mailto:Service@proutub.com\"> Service@proutub.com </a> </h3>\n      </li>\n      <li>\n          <h3>\n            <ion-icon name=\"call-outline\"></ion-icon> Phone: +91 9554600388 </h3>\n      </li>\n      <li>\n          <h3>\n            <ion-icon name=\"logo-instagram\"></ion-icon>Instagram:\n              <a href=\"https://www.instagram.com/_proutub/?igshid=1mjw5wc68zzhz\" target=\"_blank\"> proutub953 </a>\n          </h3>\n      </li>\n      <li>\n          <h3>\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>Whatsapp: +91 9554600388 </h3>\n      </li>\n  </ul>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab3/tab3-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab3/tab3-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
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


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.module.ts ***!
    \*************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/tab3/tab3.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/tab3/tab3-routing.module.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
      }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab3/tab3.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact {\n  text-align: center;\n}\n\n.contact img {\n  width: 60%;\n}\n\n.cont ul {\n  background: #fff;\n  margin: 1em;\n  box-shadow: 0 0px 20px #d0cece;\n}\n\n.cont ul li {\n  list-style: none;\n  border-bottom: 1px solid #c7c4c4;\n  padding: 5px;\n  margin: 5px 0 5px 0;\n}\n\n.cont ul li h3 {\n  font-size: 1.1em;\n  color: #434334;\n}\n\n.cont ul li h3 a {\n  color: #443344;\n}\n\nion-icon {\n  vertical-align: text-bottom;\n  margin-right: 5px;\n}\n\n#circ {\n  max-width: 100%;\n  width: 1280px;\n  text-align: center;\n  margin: 0 auto;\n  float: none;\n}\n\n#circ ul {\n  list-style: none;\n  padding: 0;\n  width: 100%;\n}\n\n#circ ul li {\n  display: inline-block;\n  border-radius: 50%;\n  overflow: hidden;\n  width: 120px;\n  height: 120px;\n  margin: 0 20px 20px 20px;\n  text-align: center;\n  background: #fff;\n  border: solid 4px #00897b;\n  position: relative;\n  transition: all 0.4s;\n  line-height: 42px;\n}\n\n#circ ul li:hover {\n  border: solid 4px #004d40;\n  transition: all 0.4s;\n  cursor: pointer;\n}\n\n#circ ul li a {\n  font-size: 1.5em;\n  margin-top: 1.5em;\n  color: #004d40;\n}\n\n@media only screen and (max-width: 1200px) {\n  h1 {\n    font-size: 4em;\n  }\n\n  .icon {\n    position: relative;\n    margin-top: 20%;\n    color: #004d40;\n    font-size: 1.5em;\n    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  #circ ul li {\n    width: 50px;\n    height: 50px;\n    margin: 0 5px 5px 5px;\n  }\n\n  #circ ul li:hover .icon {\n    font-size: 2.5em;\n  }\n}\n\n.img-loaded + ion-spinner {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXG1vYmlsZSBhcHBcXHByb3V0dWIvc3JjXFxhcHBcXHRhYjNcXHRhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBR0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFFO0VBQ0UseUJBQUE7RUFHQSxvQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBRTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDR047O0FEQUE7RUFDSTtJQUNFLGNBQUE7RUNHSjs7RURBRTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUdBLHlEQUFBO0VDR0o7O0VEQUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VDR0o7O0VEREU7SUFDRSxnQkFBQTtFQ0lKO0FBQ0Y7O0FEREU7RUFDRSxhQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFjdCBpbWcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmNvbnQgdWwge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwcHggMjBweCAjZDBjZWNlO1xyXG59XHJcblxyXG4uY29udCB1bCBsaSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjN2M0YzQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xyXG59XHJcblxyXG4uY29udCB1bCBsaSBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgY29sb3I6ICM0MzQzMzQ7XHJcbn1cclxuXHJcbi5jb250IHVsIGxpIGgzIGEge1xyXG4gICAgY29sb3I6ICM0NDMzNDQ7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5cclxuI2NpcmMge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEyODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gICNjaXJjIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICNjaXJjIHVsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogc29saWQgNHB4ICMwMDg5N2I7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgfVxyXG4gICNjaXJjIHVsIGxpOmhvdmVyIHtcclxuICAgIGJvcmRlcjogc29saWQgNHB4ICMwMDRkNDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgI2NpcmMgdWwgbGkgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgICBjb2xvcjogIzAwNGQ0MDtcclxuICB9XHJcbiAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmljb24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgICAgY29sb3I6ICMwMDRkNDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2NpcmMgdWwgbGkge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtYXJnaW46IDAgNXB4IDVweCA1cHg7XHJcbiAgICB9XHJcbiAgICAjY2lyYyB1bCBsaTpob3ZlciAuaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1nLWxvYWRlZCArIGlvbi1zcGlubmVyIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9IiwiLmNvbnRhY3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWN0IGltZyB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5jb250IHVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAxZW07XG4gIGJveC1zaGFkb3c6IDAgMHB4IDIwcHggI2QwY2VjZTtcbn1cblxuLmNvbnQgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M3YzRjNDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweCAwIDVweCAwO1xufVxuXG4uY29udCB1bCBsaSBoMyB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiAjNDM0MzM0O1xufVxuXG4uY29udCB1bCBsaSBoMyBhIHtcbiAgY29sb3I6ICM0NDMzNDQ7XG59XG5cbmlvbi1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuI2NpcmMge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMjgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZsb2F0OiBub25lO1xufVxuXG4jY2lyYyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jY2lyYyB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IHNvbGlkIDRweCAjMDA4OTdiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBsaW5lLWhlaWdodDogNDJweDtcbn1cblxuI2NpcmMgdWwgbGk6aG92ZXIge1xuICBib3JkZXI6IHNvbGlkIDRweCAjMDA0ZDQwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY2lyYyB1bCBsaSBhIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG4gIGNvbG9yOiAjMDA0ZDQwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gIH1cblxuICAuaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBjb2xvcjogIzAwNGQ0MDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgfVxuXG4gICNjaXJjIHVsIGxpIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDVweCA1cHggNXB4O1xuICB9XG5cbiAgI2NpcmMgdWwgbGk6aG92ZXIgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gIH1cbn1cbi5pbWctbG9hZGVkICsgaW9uLXNwaW5uZXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tab3/tab3.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab3/tab3.page.ts ***!
    \***********************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Tab3Page = function Tab3Page() {
      _classCallCheck(this, Tab3Page);

      this.spinner = 'https://gas.gov.ae/assets/images/animated_spinner.gif';
      this.contactImage = '../../assets/images/contact.svg';
    };

    Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/tab3/tab3.page.scss"))["default"]]
    })], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map