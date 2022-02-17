webpackHotUpdate_N_E("pages/explorar",{

/***/ "./data/routes.js":
/*!************************!*\
  !*** ./data/routes.js ***!
  \************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
// add pages which you want to the array.
// and make the file in the page folder.
var routes = [{
  name: "Home",
  link: "/",
  exclude: false
}, {
  name: "Perfil",
  link: "/perfil",
  exclude: false
}, {
  name: "Crear Clase",
  link: "/crearClase",
  exclude: false
}, {
  name: "Crear Coreo",
  link: "/crearCoreo",
  exclude: false
}, {
  name: "Explorar",
  link: "/explorar",
  exclude: false
}, {
  name: "Mis Clases",
  link: "/misClases",
  exclude: false
}, {
  name: "Editar Paso",
  link: "/editorDePasos",
  exclude: true
}, {
  name: "Favoritos",
  link: "/favoritos",
  exclude: false
}, {
  name: "Clases",
  link: "/clases",
  exclude: true
}, {
  name: "clase",
  link: "/clase",
  exclude: true
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVzIiwibmFtZSIsImxpbmsiLCJleGNsdWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsQ0FDcEI7QUFBRUMsTUFBSSxFQUFFLE1BQVI7QUFBZ0JDLE1BQUksRUFBRSxHQUF0QjtBQUEyQkMsU0FBTyxFQUFFO0FBQXBDLENBRG9CLEVBRXBCO0FBQUVGLE1BQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUUsU0FBeEI7QUFBbUNDLFNBQU8sRUFBRTtBQUE1QyxDQUZvQixFQUdwQjtBQUFFRixNQUFJLEVBQUUsYUFBUjtBQUF1QkMsTUFBSSxFQUFFLGFBQTdCO0FBQTRDQyxTQUFPLEVBQUU7QUFBckQsQ0FIb0IsRUFJcEI7QUFBRUYsTUFBSSxFQUFFLGFBQVI7QUFBdUJDLE1BQUksRUFBRSxhQUE3QjtBQUE0Q0MsU0FBTyxFQUFFO0FBQXJELENBSm9CLEVBS3BCO0FBQUVGLE1BQUksRUFBRSxVQUFSO0FBQW9CQyxNQUFJLEVBQUUsV0FBMUI7QUFBdUNDLFNBQU8sRUFBRTtBQUFoRCxDQUxvQixFQU1wQjtBQUFFRixNQUFJLEVBQUUsWUFBUjtBQUFzQkMsTUFBSSxFQUFFLFlBQTVCO0FBQTBDQyxTQUFPLEVBQUU7QUFBbkQsQ0FOb0IsRUFPcEI7QUFBRUYsTUFBSSxFQUFFLGFBQVI7QUFBdUJDLE1BQUksRUFBRSxnQkFBN0I7QUFBK0NDLFNBQU8sRUFBRTtBQUF4RCxDQVBvQixFQVFwQjtBQUFFRixNQUFJLEVBQUUsV0FBUjtBQUFxQkMsTUFBSSxFQUFFLFlBQTNCO0FBQXlDQyxTQUFPLEVBQUU7QUFBbEQsQ0FSb0IsRUFTcEI7QUFBRUYsTUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUksRUFBRSxTQUF4QjtBQUFtQ0MsU0FBTyxFQUFFO0FBQTVDLENBVG9CLEVBVXBCO0FBQUVGLE1BQUksRUFBRSxPQUFSO0FBQWlCQyxNQUFJLEVBQUUsUUFBdkI7QUFBaUNDLFNBQU8sRUFBRTtBQUExQyxDQVZvQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGxvcmFyLmVlNWNhZjJjZWEzMTkyMmI0YjI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGQgcGFnZXMgd2hpY2ggeW91IHdhbnQgdG8gdGhlIGFycmF5LlxyXG4vLyBhbmQgbWFrZSB0aGUgZmlsZSBpbiB0aGUgcGFnZSBmb2xkZXIuXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gIHsgbmFtZTogXCJIb21lXCIsIGxpbms6IFwiL1wiLCBleGNsdWRlOiBmYWxzZSB9LFxyXG4gIHsgbmFtZTogXCJQZXJmaWxcIiwgbGluazogXCIvcGVyZmlsXCIsIGV4Y2x1ZGU6IGZhbHNlfSxcclxuICB7IG5hbWU6IFwiQ3JlYXIgQ2xhc2VcIiwgbGluazogXCIvY3JlYXJDbGFzZVwiLCBleGNsdWRlOiBmYWxzZX0sXHJcbiAgeyBuYW1lOiBcIkNyZWFyIENvcmVvXCIsIGxpbms6IFwiL2NyZWFyQ29yZW9cIiwgZXhjbHVkZTogZmFsc2V9LFxyXG4gIHsgbmFtZTogXCJFeHBsb3JhclwiLCBsaW5rOiBcIi9leHBsb3JhclwiLCBleGNsdWRlOiBmYWxzZX0sXHJcbiAgeyBuYW1lOiBcIk1pcyBDbGFzZXNcIiwgbGluazogXCIvbWlzQ2xhc2VzXCIsIGV4Y2x1ZGU6IGZhbHNlfSxcclxuICB7IG5hbWU6IFwiRWRpdGFyIFBhc29cIiwgbGluazogXCIvZWRpdG9yRGVQYXNvc1wiLCBleGNsdWRlOiB0cnVlfSxcclxuICB7IG5hbWU6IFwiRmF2b3JpdG9zXCIsIGxpbms6IFwiL2Zhdm9yaXRvc1wiLCBleGNsdWRlOiBmYWxzZX0sXHJcbiAgeyBuYW1lOiBcIkNsYXNlc1wiLCBsaW5rOiBcIi9jbGFzZXNcIiwgZXhjbHVkZTogdHJ1ZX0sXHJcbiAgeyBuYW1lOiBcImNsYXNlXCIsIGxpbms6IFwiL2NsYXNlXCIsIGV4Y2x1ZGU6IHRydWV9LFxyXG5dO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9