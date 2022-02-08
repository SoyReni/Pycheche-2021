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
    title: "Template - Next.js and Material-UI with Header and Footer",
    description: "This is a Template using Next.js and Material-UI with Header and Footer.",
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
    rel: "noreferrer noopener",
    href: "https://github.com/SatoruAkiyama/nextjs-and-material-ui-template-with-header-and-footer/",
    className: classes.btn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, "Get Started")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    maxWidth: "sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h2",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "This is a Template using Next.js and Material-UI with Header and Footer."))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "https://i.imgur.com/1H2TK2B.png",
    alt: "img",
    className: classes.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiYnRuIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImNvbG9yIiwic2Vjb25kYXJ5IiwiYm9yZGVyIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJib3hTaGFkb3ciLCJBYm91dCIsImNsYXNzZXMiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLE9BQUcsRUFBRTtBQUNIQyxnQkFBVSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFEL0I7QUFFSEMsV0FBSyxFQUFFTixLQUFLLENBQUNHLE9BQU4sQ0FBY0ksU0FBZCxDQUF3QkYsSUFGNUI7QUFHSEcsWUFBTSxzQkFBZVIsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLElBQXJDLENBSEg7QUFJSCxpQkFBVztBQUNUQyxhQUFLLEVBQUVOLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQURwQjtBQUpSLEtBRGtDO0FBU3ZDSSxPQUFHLEVBQUU7QUFDSEMsV0FBSyxFQUFFLE1BREo7QUFFSEMsWUFBTSxFQUFFLE1BRkw7QUFHSEMsZUFBUyxFQUFFO0FBSFI7QUFUa0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBZ0JBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsT0FBTyxHQUFHaEIsU0FBUyxFQUF6QjtBQUNBLFNBQ0UsTUFBQyxnRUFBRCxDQUNFO0FBREY7QUFFRSxTQUFLLEVBQUMsMkRBRlI7QUFHRSxlQUFXLEVBQUMsMEVBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMsMkRBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxXQUFPLEVBQUMsSUFEVjtBQUVFLFNBQUssRUFBQyxRQUZSO0FBR0UsZ0JBQVksTUFIZDtBQUlFLFNBQUssRUFBRTtBQUFFaUIsa0JBQVksRUFBRTtBQUFoQixLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFTRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxjQUFVLEVBQUMsUUFBOUM7QUFBdUQsV0FBTyxFQUFFLENBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFFLEdBRGI7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUlFLFFBQUksRUFBQywwRkFKUDtBQUtFLGFBQVMsRUFBRUQsT0FBTyxDQUFDYixHQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLENBREYsRUFZRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLFNBQUssRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdGQURGLENBREYsQ0FaRixFQW9CRSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxpQ0FETjtBQUVFLE9BQUcsRUFBQyxLQUZOO0FBR0UsYUFBUyxFQUFFYSxPQUFPLENBQUNMLEdBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXBCRixDQVRGLENBTEYsQ0FERjtBQThDRCxDQWhERDs7R0FBTUksSztVQUNZZixTOzs7S0FEWmUsSztBQWtEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTI3NjdmODIxMzRiNzM4MGRjNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5LCBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYnRuOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59YCxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMHB4IDJweCAyMHB4IHJnYmEoMCwwLDAsMC40KVwiLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICAvLyB0eXBlIHlvdXIgcGFnZSB0aXRsZSBhbmQgcGFnZSBkZXNjcmlwdGlvbi5cclxuICAgICAgdGl0bGU9XCJUZW1wbGF0ZSAtIE5leHQuanMgYW5kIE1hdGVyaWFsLVVJIHdpdGggSGVhZGVyIGFuZCBGb290ZXJcIlxyXG4gICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgYSBUZW1wbGF0ZSB1c2luZyBOZXh0LmpzIGFuZCBNYXRlcmlhbC1VSSB3aXRoIEhlYWRlciBhbmQgRm9vdGVyLlwiXHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICB2YXJpYW50PVwiaDFcIlxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgZ3V0dGVyQm90dG9tXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMWVtXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQeWNoZWNoZVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17XCJhXCJ9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NhdG9ydUFraXlhbWEvbmV4dGpzLWFuZC1tYXRlcmlhbC11aS10ZW1wbGF0ZS13aXRoLWhlYWRlci1hbmQtZm9vdGVyL1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCI+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFRoaXMgaXMgYSBUZW1wbGF0ZSB1c2luZyBOZXh0LmpzIGFuZCBNYXRlcmlhbC1VSSB3aXRoIEhlYWRlciBhbmRcclxuICAgICAgICAgICAgICAgIEZvb3Rlci5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vMUgyVEsyQi5wbmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImltZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9