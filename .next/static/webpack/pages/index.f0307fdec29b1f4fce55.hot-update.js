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
      marginTop: "6em"
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
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    maxWidth: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    direction: "column",
    style: {
      margin: "1.2em 0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(components_Social__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    className: classes.copylight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJvdmVyZmxvdyIsIm1hcmdpblRvcCIsImxpbmsiLCJmb250U2l6ZSIsImNvbG9yIiwiaW5mbyIsImNvcHlsaWdodCIsIkZvb3RlciIsImNsYXNzZXMiLCJwYXRoIiwicm91dGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsVUFBTSxFQUFFO0FBQ05DLHFCQUFlLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQURqQztBQUVOQyxXQUFLLFFBRkM7QUFHTkMsWUFBTSxFQUFFLE9BSEY7QUFJTkMsY0FBUSxFQUFFLFVBSko7QUFLTkMsY0FBUSxFQUFFLFFBTEo7QUFNTkMsZUFBUyxFQUFFO0FBTkwsS0FEK0I7QUFTdkNDLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsUUFETjtBQUVKQyxXQUFLLEVBQUUsTUFGSDtBQUdKLGlCQUFXO0FBQ1RBLGFBQUssRUFBRWIsS0FBSyxDQUFDRyxPQUFOLENBQWNXLElBQWQsQ0FBbUJUO0FBRGpCO0FBSFAsS0FUaUM7QUFnQnZDVSxhQUFTLEVBQUU7QUFDVEYsV0FBSyxFQUFFLE1BREU7QUFFVEQsY0FBUSxFQUFFO0FBRkQ7QUFoQjRCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQXNCQSxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7QUFDQSxNQUFNb0IsSUFBSSxHQUFHQyxrREFBYjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxTQUNFO0FBQVEsYUFBUyxFQUFFSixPQUFPLENBQUNoQixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBbUMsU0FBSyxFQUFFO0FBQUVxQixZQUFNLEVBQUU7QUFBVixLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRSxNQUFDLDREQUFEO0FBQVksYUFBUyxFQUFFTCxPQUFPLENBQUNGLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0RBSEYsQ0FERixDQURGLENBREY7QUFhRCxDQWpCRDs7R0FBTUMsTTtVQUNZbEIsUyxFQUVEdUIscUQ7OztLQUhYTCxNO0FBbUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMDMwN2ZkZWMyOWIxZjRmY2U1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcImNvbXBvbmVudHMvTGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCJkYXRhL3JvdXRlc1wiO1xyXG5pbXBvcnQgU29jaWFsIGZyb20gXCJjb21wb25lbnRzL1NvY2lhbFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgd2lkdGg6IGAxMDAlYCxcclxuICAgIGhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjZlbVwiLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgZm9udFNpemU6IFwiMS4yNWVtXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5pbmZvLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29weWxpZ2h0OiB7XHJcbiAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICBmb250U2l6ZTogXCIxZW1cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHBhdGggPSByb3V0ZXM7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBzdHlsZT17eyBtYXJnaW46IFwiMS4yZW0gMFwiIH19PlxyXG4gICAgICAgICAgPFNvY2lhbCAvPlxyXG5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb3B5bGlnaHR9PlxyXG4gICAgICAgICAgICBTZWJhc3RpYW4gQ2FiYWxsZXJvIC0gRGFsaWxhIENhc3RlbG5vdm8gLSBBbGJhIEVzcXVpdmVsXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=