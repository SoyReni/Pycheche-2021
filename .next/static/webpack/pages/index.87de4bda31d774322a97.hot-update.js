webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _this = undefined,
    _jsxFileName = "D:\\Users\\Reni\\Documents\\GitHub\\Pycheche-IHM-21-22\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    btn: {
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      "&:hover": {
        color: theme.palette.primary.main
      }
    },
    img: {
      width: "100%",
      height: "auto",
      boxShadow: "0px 2px 20px rgba(0,0,0,0.4)"
    }
  };
});

var About = function About() {
  _s();

  var classes = useStyles();
  return __jsx(components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"] // type your page title and page description.
  , {
    title: "Pycheche",
    description: "Demo para la materia Interaccion Humano Computadora 2021/22",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h1",
    align: "center",
    gutterBottom: true,
    style: {
      marginBottom: "1em"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Pycheche"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    direction: "column",
    alignItems: "center",
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    component: "a",
    target: "_blank",
    href: "/explorar",
    className: classes.btn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Explorar")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    component: "a",
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://github.com/SatoruAkiyama/nextjs-and-material-ui-template-with-header-and-footer/",
    className: classes.btn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Crear Clase")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    component: "a",
    target: "_blank",
    rel: "noreferrer noopener",
    href: "https://github.com/SatoruAkiyama/nextjs-and-material-ui-template-with-header-and-footer/",
    className: classes.btn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Crear Coreo")))));
};

_s(About, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYnRuIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwic2Vjb25kYXJ5IiwiYm9yZGVyIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJib3hTaGFkb3ciLCJBYm91dCIsImNsYXNzZXMiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLE9BQUcsRUFBRTtBQUNIQyxnQkFBVSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFEL0I7QUFFSEMsV0FBSyxFQUFFTixLQUFLLENBQUNHLE9BQU4sQ0FBY0ksU0FBZCxDQUF3QkYsSUFGNUI7QUFHSEcsWUFBTSxzQkFBZVIsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLElBQXJDLENBSEg7QUFJSCxpQkFBVztBQUNUQyxhQUFLLEVBQUVOLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQURwQjtBQUpSLEtBRGtDO0FBU3ZDSSxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFLE1BREo7QUFFSEMsWUFBTSxFQUFFLE1BRkw7QUFHSEMsZUFBUyxFQUFFO0FBSFI7QUFUa0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBZ0JBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUNBLFNBQ0UsTUFBQyxnRUFBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUMsVUFGUjtBQUdFLGVBQVcsRUFBQyw2REFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBQyxJQURWO0FBRUUsU0FBSyxFQUFDLFFBRlI7QUFHRSxnQkFBWSxNQUhkO0FBSUUsU0FBSyxFQUFFO0FBQUVpQixrQkFBWSxFQUFFO0FBQWhCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQVNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQW1DLGNBQVUsRUFBQyxRQUE5QztBQUF1RCxXQUFPLEVBQUUsQ0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxhQUFTLEVBQUUsR0FEYjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsUUFBSSxFQUFDLFdBSFA7QUFJRSxhQUFTLEVBQUVELE9BQU8sQ0FBQ2IsR0FKckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLEVBV0UsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLGFBQVMsRUFBRSxHQURiO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxPQUFHLEVBQUMscUJBSE47QUFJRSxRQUFJLEVBQUMsMEZBSlA7QUFLRSxhQUFTLEVBQUVhLE9BQU8sQ0FBQ2IsR0FMckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQVhGLEVBc0JFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxhQUFTLEVBQUUsR0FEYjtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsT0FBRyxFQUFDLHFCQUhOO0FBSUUsUUFBSSxFQUFDLDBGQUpQO0FBS0UsYUFBUyxFQUFFYSxPQUFPLENBQUNiLEdBTHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0F0QkYsQ0FURixDQUxGLENBREY7QUFvREQsQ0F0REQ7O0dBQU1ZLEs7VUFDWWYsUzs7O0tBRFplLEs7QUF3RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg3ZGU0YmRhMzFkNzc0MzIyYTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSwgQXZhdGFyLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGJ0bjoge1xyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufWAsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgYm94U2hhZG93OiBcIjBweCAycHggMjBweCByZ2JhKDAsMCwwLDAuNClcIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXRcclxuICAgICAgLy8gdHlwZSB5b3VyIHBhZ2UgdGl0bGUgYW5kIHBhZ2UgZGVzY3JpcHRpb24uXHJcbiAgICAgIHRpdGxlPVwiUHljaGVjaGVcIlxyXG4gICAgICBkZXNjcmlwdGlvbj1cIkRlbW8gcGFyYSBsYSBtYXRlcmlhIEludGVyYWNjaW9uIEh1bWFubyBDb21wdXRhZG9yYSAyMDIxLzIyXCJcclxuICAgID5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIHZhcmlhbnQ9XCJoMVwiXHJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxZW1cIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFB5Y2hlY2hlXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17NH0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtcImFcIn1cclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvZXhwbG9yYXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFeHBsb3JhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1wiYVwifVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TYXRvcnVBa2l5YW1hL25leHRqcy1hbmQtbWF0ZXJpYWwtdWktdGVtcGxhdGUtd2l0aC1oZWFkZXItYW5kLWZvb3Rlci9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhciBDbGFzZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1wiYVwifVxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TYXRvcnVBa2l5YW1hL25leHRqcy1hbmQtbWF0ZXJpYWwtdWktdGVtcGxhdGUtd2l0aC1oZWFkZXItYW5kLWZvb3Rlci9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhciBDb3Jlb1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9