(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/me/me.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/me/me.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron h1\">{{user.firstName}} {{user.lastName}}</div>\n\n<div>\n  FirstName: {{user.firstName}}<br>\n  LastName: {{user.lastName}}<br>\n  E-mail: {{user.email}}<br>\n  Birthday: {{user.birthday}}<br>\n  Phone: {{user.phone}}<br>\n  Cars: {{user.cars}}<br>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/user-add/user-add.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/user-add/user-add.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron h1\">Add user</div>\n\n<div class=\"form-group\">\n  <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control mb-3\" placeholder=\"First Name\">\n  <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control mb-3\" placeholder=\"Last Name\">\n  <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control mb-3\" placeholder=\"E-mail\">\n  <input [(ngModel)]=\"user.birthday\" type=\"date\" class=\"form-control mb-3\" placeholder=\"Birthday\">\n  <input [(ngModel)]=\"user.login\" type=\"text\" class=\"form-control mb-3\" placeholder=\"Login\">\n  <input [(ngModel)]=\"user.password\" type=\"text\" class=\"form-control mb-3\" placeholder=\"Password\">\n  <input [(ngModel)]=\"user.phone\" type=\"text\" class=\"form-control mb-3\" placeholder=\"Phone\">\n</div>\n\n<button (click)=\"onSubmit()\" class=\"btn btn-success mb-4\">Insert User</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/user-edit/user-edit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/user-edit/user-edit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron h1\">Edit user</div>\n\n<div class=\"form-group\">\n  <input [(ngModel)]=\"user.firstName\" type=\"text\" class=\"form-control mb-3\" placeholder=\"First Name\">\n  <input [(ngModel)]=\"user.lastName\" type=\"text\" class=\"form-control mb-3\" placeholder=\"Last Name\">\n  <input [(ngModel)]=\"user.email\" type=\"email\" class=\"form-control mb-3\" placeholder=\"E-mail\">\n  <input [(ngModel)]=\"user.birthday\" type=\"date\" class=\"form-control mb-3\" placeholder=\"Birthday\">\n  <input [(ngModel)]=\"user.login\" type=\"text\" class=\"form-control mb-3\" placeholder=\"Login\">\n  <input [(ngModel)]=\"user.password\" type=\"text\" class=\"form-control mb-3\" placeholder=\"Password\">\n  <input [(ngModel)]=\"user.phone\" type=\"text\" class=\"form-control mb-3\" placeholder=\"Phone\">\n</div>\n\n<button (click)=\"onSubmit()\" class=\"btn btn-success mb-4\">Update User</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/user-list/user-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/user-list/user-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron h1\">Users</div>\n<div class=\"text-center mb-3\"><span style=\"cursor: pointer;\" class=\"btn btn-link\" routerLink=\"user-add\">Add user</span>\n  <!-- <span style=\"cursor: pointer;\" class=\"btn btn-link\" routerLink=\"/auth\">Login</span> -->\n</div>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Firstname</th>\n      <th>Lastname</th>\n      <th>Email</th>\n      <th>Login</th>\n      <th></th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.email}}</td>\n      <td>{{user.login}}</td>\n      <td>\n        <div [routerLink]=\"['user-edit', user.id]\" style=\"cursor: pointer; color: green;\">Edit</div>\n      </td>\n      <td>\n        <div (click)=\"delete(user.id)\" style=\"cursor: pointer; color: red;\">Delete</div>\n      </td>\n    </tr>\n\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./src/app/user/pages/me/me.component.css":
/*!************************************************!*\
  !*** ./src/app/user/pages/me/me.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvbWUvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user/pages/me/me.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/pages/me/me.component.ts ***!
  \***********************************************/
/*! exports provided: MeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeComponent", function() { return MeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/user/services/user.service.ts");



let MeComponent = class MeComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.me();
    }
    me() {
        return this.userService.me().subscribe(user => {
            this.user = user;
        });
    }
};
MeComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
MeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-me',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/me/me.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./me.component.css */ "./src/app/user/pages/me/me.component.css")).default]
    })
], MeComponent);



/***/ }),

/***/ "./src/app/user/pages/user-add/user-add.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/pages/user-add/user-add.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvdXNlci1hZGQvdXNlci1hZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user/pages/user-add/user-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/pages/user-add/user-add.component.ts ***!
  \***********************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/user/services/user.service.ts");




let UserAddComponent = class UserAddComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {
            birthday: null,
            email: null,
            firstName: null,
            lastName: null,
            login: null,
            password: null,
            phone: null,
            cars: null
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        this.insert().subscribe(user => {
            alert('Success!!!');
            this.router.navigate(['']);
        }, error => {
            alert(error.error.message);
        });
    }
    insert() {
        return this.userService.insert(this.user);
    }
};
UserAddComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/user-add/user-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-add.component.css */ "./src/app/user/pages/user-add/user-add.component.css")).default]
    })
], UserAddComponent);



/***/ }),

/***/ "./src/app/user/pages/user-edit/user-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/pages/user-edit/user-edit.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/pages/user-edit/user-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/pages/user-edit/user-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/user/services/user.service.ts");




let UserEditComponent = class UserEditComponent {
    constructor(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.populate(id);
    }
    populate(id) {
        this.userService.findById(id).subscribe(user => {
            this.user = user;
        });
    }
    onSubmit() {
        this.userService.edit(this.user).subscribe(x => {
            alert('Success!');
            this.router.navigate(['']);
        }, error => {
            alert(error.error.message);
        });
    }
};
UserEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/user-edit/user-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-edit.component.css */ "./src/app/user/pages/user-edit/user-edit.component.css")).default]
    })
], UserEditComponent);



/***/ }),

/***/ "./src/app/user/pages/user-list/user-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/pages/user-list/user-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcGFnZXMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/pages/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/pages/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/user/services/user.service.ts");



let UserListComponent = class UserListComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.populateUsers();
    }
    delete(id) {
        this.userService.delete(id).subscribe(() => {
            alert('User deleted');
            this.populateUsers();
        }, error => {
            alert(error.error.message);
        });
    }
    populateUsers() {
        this.userService.findAll().subscribe(x => {
            this.users = x;
        });
    }
};
UserListComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/pages/user-list/user-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-list.component.css */ "./src/app/user/pages/user-list/user-list.component.css")).default]
    })
], UserListComponent);



/***/ }),

/***/ "./src/app/user/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_util_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/util/endpoints */ "./src/app/util/endpoints.ts");




let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    findAll() {
        return this.http.get(src_app_util_endpoints__WEBPACK_IMPORTED_MODULE_3__["Endpoints"].USER_FIND_ALL);
    }
    delete(id) {
        return this.http.delete(src_app_util_endpoints__WEBPACK_IMPORTED_MODULE_3__["Endpoints"].USER_DELETE + id);
    }
    insert(user) {
        return this.http.post(src_app_util_endpoints__WEBPACK_IMPORTED_MODULE_3__["Endpoints"].USER_INSERT, user);
    }
    edit(user) {
        return this.http.put(src_app_util_endpoints__WEBPACK_IMPORTED_MODULE_3__["Endpoints"].USER_EDIT + user.id, user);
    }
    findById(id) {
        return this.http.get(src_app_util_endpoints__WEBPACK_IMPORTED_MODULE_3__["Endpoints"].USER_FIND_BY_ID + id);
    }
    me() {
        return this.http.get(src_app_util_endpoints__WEBPACK_IMPORTED_MODULE_3__["Endpoints"].ME);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_me_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/me/me.component */ "./src/app/user/pages/me/me.component.ts");
/* harmony import */ var _pages_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user-add/user-add.component */ "./src/app/user/pages/user-add/user-add.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user-edit/user-edit.component */ "./src/app/user/pages/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-list/user-list.component */ "./src/app/user/pages/user-list/user-list.component.ts");







const routes = [
    {
        path: '',
        component: _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"]
    },
    {
        path: 'user-add',
        component: _pages_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_4__["UserAddComponent"]
    },
    {
        path: 'user-edit/:id',
        component: _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__["UserEditComponent"]
    },
    {
        path: 'me',
        component: _pages_me_me_component__WEBPACK_IMPORTED_MODULE_3__["MeComponent"]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user-list/user-list.component */ "./src/app/user/pages/user-list/user-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user-add/user-add.component */ "./src/app/user/pages/user-add/user-add.component.ts");
/* harmony import */ var _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user-edit/user-edit.component */ "./src/app/user/pages/user-edit/user-edit.component.ts");
/* harmony import */ var _pages_me_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/me/me.component */ "./src/app/user/pages/me/me.component.ts");









let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], _pages_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_6__["UserAddComponent"], _pages_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _pages_me_me_component__WEBPACK_IMPORTED_MODULE_8__["MeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map