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
    rel: "noreferrer noopener",
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
    rel: "noreferrer noopener",
    href: "/crearClase",
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
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    component: "a",
    rel: "noreferrer noopener",
    href: "/CrearCoreo",
    className: classes.btn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYnRuIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwic2Vjb25kYXJ5IiwiYm9yZGVyIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJib3hTaGFkb3ciLCJBYm91dCIsImNsYXNzZXMiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLE9BQUcsRUFBRTtBQUNIQyxnQkFBVSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFEL0I7QUFFSEMsV0FBSyxFQUFFTixLQUFLLENBQUNHLE9BQU4sQ0FBY0ksU0FBZCxDQUF3QkYsSUFGNUI7QUFHSEcsWUFBTSxzQkFBZVIsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLElBQXJDLENBSEg7QUFJSCxpQkFBVztBQUNUQyxhQUFLLEVBQUVOLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQURwQjtBQUpSLEtBRGtDO0FBU3ZDSSxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFLE1BREo7QUFFSEMsWUFBTSxFQUFFLE1BRkw7QUFHSEMsZUFBUyxFQUFFO0FBSFI7QUFUa0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBZ0JBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUNBLFNBQ0UsTUFBQyxnRUFBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUMsVUFGUjtBQUdFLGVBQVcsRUFBQyw2REFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUNFLFdBQU8sRUFBQyxJQURWO0FBRUUsU0FBSyxFQUFDLFFBRlI7QUFHRSxnQkFBWSxNQUhkO0FBSUUsU0FBSyxFQUFFO0FBQUVpQixrQkFBWSxFQUFFO0FBQWhCLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQVNFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQW1DLGNBQVUsRUFBQyxRQUE5QztBQUF1RCxXQUFPLEVBQUUsQ0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxhQUFTLEVBQUUsR0FEYjtBQUVFLE9BQUcsRUFBQyxxQkFGTjtBQUdFLFFBQUksRUFBQyxXQUhQO0FBSUUsYUFBUyxFQUFFRCxPQUFPLENBQUNiLEdBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixFQVdFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxhQUFTLEVBQUUsR0FEYjtBQUVFLE9BQUcsRUFBQyxxQkFGTjtBQUdFLFFBQUksRUFBQyxhQUhQO0FBSUUsYUFBUyxFQUFFYSxPQUFPLENBQUNiLEdBSnJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FYRixFQXFCRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFFLEdBRGI7QUFFRSxPQUFHLEVBQUMscUJBRk47QUFHRSxRQUFJLEVBQUMsYUFIUDtBQUlFLGFBQVMsRUFBRWEsT0FBTyxDQUFDYixHQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBckJGLENBVEYsQ0FMRixDQURGO0FBa0RELENBcEREOztHQUFNWSxLO1VBQ1lmLFM7OztLQURaZSxLO0FBc0RTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZTZiNzI3MDhkMDFmNTY4YTBkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIEF2YXRhciwgQnV0dG9uIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBidG46IHtcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn1gLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltZzoge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIGJveFNoYWRvdzogXCIwcHggMnB4IDIwcHggcmdiYSgwLDAsMCwwLjQpXCIsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQWJvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0XHJcbiAgICAgIC8vIHR5cGUgeW91ciBwYWdlIHRpdGxlIGFuZCBwYWdlIGRlc2NyaXB0aW9uLlxyXG4gICAgICB0aXRsZT1cIlB5Y2hlY2hlXCJcclxuICAgICAgZGVzY3JpcHRpb249XCJEZW1vIHBhcmEgbGEgbWF0ZXJpYSBJbnRlcmFjY2lvbiBIdW1hbm8gQ29tcHV0YWRvcmEgMjAyMS8yMlwiXHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PVwiaDFcIlxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMWVtXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQeWNoZWNoZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17XCJhXCJ9XHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9leHBsb3JhclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEV4cGxvcmFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17XCJhXCJ9XHJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9jcmVhckNsYXNlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ3JlYXIgQ2xhc2VcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtcImFcIn1cclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL0NyZWFyQ29yZW9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDcmVhciBDb3Jlb1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9