webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Footer.js":
/*!*************************************!*\
  !*** ./components/layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Link */ "./components/Link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var data_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data/routes */ "./data/routes.js");
/* harmony import */ var components_Social__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Social */ "./components/Social.js");
var _this = undefined,
    _jsxFileName = "D:\\Users\\Reni\\Documents\\GitHub\\Pycheche-IHM-21-22\\components\\layout\\Footer.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    footer: {
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      height: "100px",
      position: "relative",
      overflow: "hidden",
      marginTop: "6em",
      padding: "2em 0 "
    },
    link: {
      fontSize: "1.25em",
      color: "#fff",
      "&:hover": {
        color: theme.palette.info.main
      }
    },
    copylight: {
      color: "#fff",
      fontSize: "1em"
    }
  };
});

var Footer = function Footer() {
  _s();

  var classes = useStyles();
  var path = data_routes__WEBPACK_IMPORTED_MODULE_5__["routes"];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("footer", {
    className: classes.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    maxWidth: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    component: "a",
    rel: "noreferrer noopener",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    className: classes.copylight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Sebastian Caballero - Dalila Castelnovo - Alba Esquivel"))));
};

_s(Footer, "y+nxznVgQ96pr4dCg1EC6WdujUg=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJvdmVyZmxvdyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJsaW5rIiwiZm9udFNpemUiLCJjb2xvciIsImluZm8iLCJjb3B5bGlnaHQiLCJGb290ZXIiLCJjbGFzc2VzIiwicGF0aCIsInJvdXRlcyIsInJvdXRlciIsInVzZVJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFEakM7QUFFTkMsV0FBSyxRQUZDO0FBR05DLFlBQU0sRUFBRSxPQUhGO0FBSU5DLGNBQVEsRUFBRSxVQUpKO0FBS05DLGNBQVEsRUFBRSxRQUxKO0FBTU5DLGVBQVMsRUFBRSxLQU5MO0FBT05DLGFBQU8sRUFBRTtBQVBILEtBRCtCO0FBVXZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLFFBRE47QUFFSkMsV0FBSyxFQUFFLE1BRkg7QUFHSixpQkFBVztBQUNUQSxhQUFLLEVBQUVkLEtBQUssQ0FBQ0csT0FBTixDQUFjWSxJQUFkLENBQW1CVjtBQURqQjtBQUhQLEtBVmlDO0FBaUJ2Q1csYUFBUyxFQUFFO0FBQ1RGLFdBQUssRUFBRSxNQURFO0FBRVRELGNBQVEsRUFBRTtBQUZEO0FBakI0QixHQUFaO0FBQUEsQ0FBRCxDQUE1Qjs7QUF1QkEsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxPQUFPLEdBQUdwQixTQUFTLEVBQXpCO0FBQ0EsTUFBTXFCLElBQUksR0FBR0Msa0RBQWI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsU0FDRTtBQUFRLGFBQVMsRUFBRUosT0FBTyxDQUFDakIsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLE1BRE47QUFFRSxhQUFTLE1BRlg7QUFHRSxhQUFTLEVBQUUsR0FIYjtBQUlFLE9BQUcsRUFBQyxxQkFKTjtBQUtFLFdBQU8sRUFBQyxRQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLDREQUFEO0FBQVksYUFBUyxFQUFFaUIsT0FBTyxDQUFDRixTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtEQVBGLENBRkYsQ0FERixDQURGO0FBa0JELENBdEJEOztHQUFNQyxNO1VBQ1luQixTLEVBRUR3QixxRDs7O0tBSFhMLE07QUF3QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNkNWZlMmU5NDkwM2Q4NTc1YWNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwiY29tcG9uZW50cy9MaW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcImRhdGEvcm91dGVzXCI7XHJcbmltcG9ydCBTb2NpYWwgZnJvbSBcImNvbXBvbmVudHMvU29jaWFsXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb290ZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB3aWR0aDogYDEwMCVgLFxyXG4gICAgaGVpZ2h0OiBcIjEwMHB4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiNmVtXCIsXHJcbiAgICBwYWRkaW5nOiBcIjJlbSAwIFwiLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgZm9udFNpemU6IFwiMS4yNWVtXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5pbmZvLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29weWxpZ2h0OiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHBhdGggPSByb3V0ZXM7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBjb21wb25lbnQ9e1wiYVwifVxyXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuY29weWxpZ2h0fT5cclxuICAgICAgICAgICAgU2ViYXN0aWFuIENhYmFsbGVybyAtIERhbGlsYSBDYXN0ZWxub3ZvIC0gQWxiYSBFc3F1aXZlbFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9