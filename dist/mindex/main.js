(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-title\">Mindex Coding Challenge</h1>\n<app-employee-list></app-employee-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n<div class=\"update-box\">\n<div *ngIf=\"data.updateDelete === 'delete'\">\n<h2 mat-dialog-title>Delete Direct Report</h2>\n<mat-dialog-content>Permanently delete direct report {{data.reporter.firstName}} {{data.reporter.lastName}}?</mat-dialog-content>\n<mat-dialog-content>This action cannot be undone.</mat-dialog-content>\n<mat-dialog-actions>\n   <button mat-button (click)=\"deleteEmp(0)\">Delete</button>\n   <button mat-button mat-dialog-close>Cancel</button>\n</mat-dialog-actions>\n</div>\n</div>\n\n<div class=\"update-box\">\n<div *ngIf=\"data.updateDelete === 'update'\">\n  <h2 mat-dialog-title>Update Compensation</h2>\n   <form (submit) = \"updateEmp(compensation.value, 1)\" \n   >\n     <mat-form-field>\n       <input\n         matInput\n         placeholder=\"First Name\"\n         [value]=\"data.reporter.firstName\"\n         disabled\n       />\n     </mat-form-field>\n \n     <mat-form-field>\n       <input\n         matInput\n         placeholder=\"Last Name\"\n         [value]=\"data.reporter.lastName\"\n         disabled\n       />\n     </mat-form-field>\n     <mat-form-field>\n       <input matInput placeholder=\"Title\" [value]=\"data.reporter.position\" disabled />\n     </mat-form-field>\n     <mat-form-field>\n       <input\n         matInput\n         placeholder=\"Compensation\"\n         required\n         type=\"number\"\n         [value]=\"data.reporter.compensation || null\"\n         #compensation\n       />\n     </mat-form-field>\n     <mat-dialog-actions>\n       <button\n         mat-raised-button\n         [disabled]=\"\n           compensation.value > 0 && !(compensation.value == data.compensation)\n             ? false\n             : true\n         \"\n       >\n         Save\n       </button>\n       <button mat-button mat-dialog-close>Cancel</button>\n     </mat-dialog-actions>\n   </form>\n </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list class=\"employee-list\" cols=\"1\">\r\n  <mat-grid-tile *ngFor=\"let emp of employees\">\r\n    <app-employee \r\n    [employee]=\"emp\" \r\n    (updateCompensation)=\"updateReport($event)\"\r\n    (deleteReport)=\"updateReport($event)\"></app-employee>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"employee-card\">\r\n<mat-card class=\"employee\">\r\n  <mat-card-header>\r\n    <mat-card-title>{{employee.lastName}} {{employee.firstName}}, {{employee.position}}</mat-card-title>\r\n    <mat-card-subtitle>Employee ID : {{employee.id}} Direct Reports : {{totalEmployeeReports}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n</mat-card>\r\n<table class=\"=table-reports\">\r\n  <thead>\r\n    <tr>\r\n      <th>Direct Reports(<span>{{totalEmployeeReports}}</span>)</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngIf=\"totalEmployeeReports == 0\">\r\n      <td>This employee has no reports</td>\r\n    </tr>\r\n    <tr *ngFor=\"let reportEmp of reportName\">\r\n      <td>{{reportEmp.id}}</td>\r\n      <td>{{reportEmp.firstName}}</td>\r\n      <td>{{reportEmp.lastName}}</td>,\r\n      <td>{{reportEmp.position}}</td>\r\n      <td>{{reportEmp.compensation}}</td>\r\n      <td>\r\n        <button mat-raised-button class=\"btn btn-info\" (click)=\"openDialog(reportEmp, 'update')\"><i class=\"fa fa-edit\"></i></button>\r\n        <button mat-raised-button class=\"btn btn-danger\" (click)=\"openDialog(reportEmp, 'delete')\"><i class=\"fa fa-minus\"></i></button>\r\n      </td>\r\n    </tr>\r\n\r\n  </tbody>\r\n</table>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title {\r\n  text-align: center;\r\n  width: 100%;\r\n  color: rgb(45, 78, 139);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogcmdiKDQ1LCA3OCwgMTM5KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var angular_in_memory_web_api_1 = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var backendless_mock_service_1 = __webpack_require__(/*! ./backendless-mock.service */ "./src/app/backendless-mock.service.ts");
var employee_component_1 = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
var employee_list_component_1 = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
var employee_service_1 = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
var card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
var grid_list_1 = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
var input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var menu_1 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
var button_1 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
var dialog_component_1 = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                employee_component_1.EmployeeComponent,
                employee_list_component_1.EmployeeListComponent,
                dialog_component_1.DialogComponent
            ],
            entryComponents: [dialog_component_1.DialogComponent],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(backendless_mock_service_1.BackendlessMockService, {
                    apiBase: 'api/',
                    delay: 250,
                    passThruUnknownUrl: true,
                    post204: false,
                    put204: false
                }),
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                dialog_1.MatDialogModule,
            ],
            providers: [employee_service_1.EmployeeService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/backendless-mock.service.ts":
/*!*********************************************!*\
  !*** ./src/app/backendless-mock.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BackendlessMockService = /** @class */ (function () {
    function BackendlessMockService() {
    }
    BackendlessMockService.prototype.createDb = function () {
        var employees = [
            {
                id: 1,
                firstName: 'Brian',
                lastName: 'McGee',
                position: 'CEO',
                directReports: [2, 3]
            },
            {
                id: 2,
                firstName: 'Homer',
                lastName: 'Thompson',
                position: 'Dev Manager',
                directReports: [4]
            },
            {
                id: 3,
                firstName: 'Rock',
                lastName: 'Strongo',
                position: 'Lead Tester'
            },
            {
                id: 4,
                firstName: 'Max',
                lastName: 'Power',
                position: 'Junior Software Engineer'
            }
        ];
        return { employees: employees };
    };
    return BackendlessMockService;
}());
exports.BackendlessMockService = BackendlessMockService;


/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\r\n  color: rgb(45, 78, 139) !important;\r\n}\r\n\r\nmat-form-field {\r\n  display: block;\r\n  border-top: 1px;\r\n}\r\n\r\nbutton {\r\n  margin-left: 12%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgY29sb3I6IHJnYig0NSwgNzgsIDEzOSkgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci10b3A6IDFweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tbGVmdDogMTIlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.deleteEmp = function (functionalty) {
        this.dialogRef.close({ functionalty: functionalty });
    };
    DialogComponent.prototype.updateEmp = function (compensation, functionalty) {
        this.dialogRef.close({ compensation: compensation, functionalty: functionalty });
    };
    DialogComponent.ctorParameters = function () { return [
        { type: dialog_1.MatDialogRef },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
    ]; };
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")).default]
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;


/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-grid-list {\r\n  display: initial !important;\r\n  padding: 0 !important;\r\n}\r\n\r\n::ng-deep .mat-grid-tile {\r\n  display: inline !important;\r\n  position: static !important;\r\n}\r\n\r\n::ng-deep .mat-figure {\r\n  display: inline !important;\r\n  position: initial !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWdyaWQtbGlzdCB7XHJcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZ3JpZC10aWxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxuICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZpZ3VyZSB7XHJcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGluaXRpYWwgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
        this.employees = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getAll()
            .pipe(operators_1.reduce(function (emps, e) { return emps.concat(e); }, []), operators_1.map(function (emps) { return _this.employees = emps; }), operators_1.catchError(this.handleError.bind(this))).subscribe();
    };
    EmployeeListComponent.prototype.updateReport = function (employee) {
        this.employeeService.save(employee)
            .subscribe(function () { }, operators_1.catchError(this.handleError.bind(this)));
        this.employeeService.getAll();
    };
    // deleteReport(employee: Employee){
    //   this.employeeService.save(employee)
    //   .subscribe(()=> {},
    //   catchError(this.handleError.bind(this))
    //   )
    //   this.employeeService.getAll()
    // }
    // private removeReport(employee: Employee){
    //   this.employeeService.remove(employee)
    //   .subscribe(
    //     () => this.removeReportFromList(employee),
    //     catchError(this.handleError.bind(this))
    //   )
    // }
    // private removeReportFromList(employee: Employee){
    //   let index = this.employees.indexOf(employee, 0);
    //   if(index > -1){
    //     this.employees.splice(index, 1)
    //   }
    // }
    // private updateReportCompensation(val: number){
    //     console.log("Event Fired - Update");
    //   }
    //   private deleteReport(val: number){
    //     console.log("Event Fired - Delete");
    //   }
    EmployeeListComponent.prototype.handleError = function (e) {
        console.error(e);
        return this.errorMessage = e.message || 'Unable to retrieve employees';
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService }
    ]; };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;


/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = '/api/employees';
    }
    EmployeeService.prototype.getAll = function () {
        return this.http.get(this.url)
            .pipe(operators_1.flatMap(function (emps) { return rxjs_1.from(emps); }), operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.get = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.save = function (emp) {
        var response = (!!emp.id) ? this.put(emp) : this.post(emp);
        return response.pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.remove = function (emp) {
        return this.http
            .delete(this.url + "/" + emp.id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.post = function (emp) {
        return this.http.post(this.url, emp);
    };
    EmployeeService.prototype.put = function (emp) {
        return this.http.put(this.url + "/" + emp.id, emp);
    };
    EmployeeService.prototype.handleError = function (res) {
        return rxjs_1.throwError(res.error || 'Server error');
    };
    EmployeeService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ "./src/app/employee.ts":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;


/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".employee {\r\n  display: block !important;\r\n}\r\n\r\nmat-card-title {\r\n  color: rgb(45, 78, 139);\r\n}\r\n\r\n.employee-card {\r\n  display: block;\r\n  width: 97%;\r\n  padding-left: 1%;\r\n  margin-top: 2%;\r\n}\r\n\r\nthead {\r\n  font-family: \"Roboto\", sans-serif;\r\n  background-color: bisque;\r\n  padding-right: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.table-reports {\r\n  margin-top: 1%;\r\n  margin-left: 2%;\r\n}\r\n\r\n.table-reports thead tr {\r\n  background-color: #009879;\r\n  color: white;\r\n  text-align: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbXBsb3llZSB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUge1xyXG4gIGNvbG9yOiByZ2IoNDUsIDc4LCAxMzkpO1xyXG59XHJcblxyXG4uZW1wbG95ZWUtY2FyZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDk3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZS1yZXBvcnRzIHtcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi50YWJsZS1yZXBvcnRzIHRoZWFkIHRyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5ODc5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var employee_1 = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var dialog_component_1 = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, dialog) {
        this.employeeService = employeeService;
        this.dialog = dialog;
        this.updateCompensation = new core_1.EventEmitter();
        this.deleteReport = new core_1.EventEmitter();
        this.totalEmployeeReports = 0; //initialize direct reports
        this.reportName = [];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.setTotalReports(this.employee); //always run on start to display directReports on cards
        this.getReports(this.employee); //always keep direct reporting employees to supervisor
    };
    //set total number of reports for each employee
    EmployeeComponent.prototype.setTotalReports = function (employee) {
        var _this = this;
        if (employee.directReports) {
            this.totalEmployeeReports += employee.directReports.length;
            rxjs_1.from(employee.directReports).pipe(operators_1.flatMap(function (id) { return _this.employeeService.get(id); })).subscribe(function (nextEmployee) { return _this.setTotalReports(nextEmployee); });
        }
    };
    //get employee data for the reports directly reporting to each employee
    EmployeeComponent.prototype.getReports = function (employee) {
        var _this = this;
        this.reportName = [];
        if (employee.directReports) {
            employee.directReports.forEach(function (id) {
                return _this.employeeService.get(id)
                    .subscribe(function (emp) { return _this.reportName.push(emp); } //push the employee to array of employees reporting to the supervising employee
                );
            });
        }
    };
    EmployeeComponent.prototype.deleteEmpReport = function (reporter, employee) {
        if (employee.directReports.includes(reporter.id)) {
            var index = employee.directReports.indexOf(reporter.id, 0);
            employee.directReports.splice(index, 1);
            this.deleteReport.emit(employee);
        }
    };
    //open dialog on click and send the required
    EmployeeComponent.prototype.openDialog = function (reporter, btnType) {
        var _this = this;
        this.reportEmp = reporter;
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            data: { reporter: reporter, updateDelete: btnType
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.functionalty == 0) {
                _this.deleteEmpReport(_this.reportEmp, _this.employee);
                _this.getReports(_this.employee);
                _this.totalEmployeeReports = 0;
                _this.setTotalReports(_this.employee);
            }
            else if (result.functionalty == 1) {
                _this.reportEmp.compensation = result.compensation;
                _this.updateCompensation.emit(_this.reportEmp);
            }
        });
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService },
        { type: dialog_1.MatDialog }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", employee_1.Employee)
    ], EmployeeComponent.prototype, "employee", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EmployeeComponent.prototype, "updateCompensation", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EmployeeComponent.prototype, "deleteReport", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-employee',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            dialog_1.MatDialog])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\VS_Code\Interview\Mindex\mindex-js-code-challenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map