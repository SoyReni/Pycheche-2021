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
      fontSize: "1em",
      "&:hover": {
        color: theme.palette.info.main
      }
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
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    maxWidth: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 3,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, path.map(function (_ref) {
    var name = _ref.name,
        link = _ref.link;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      key: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      className: classes.link,
      style: {
        fontWeight: router.pathname === link && "bold",
        borderBottom: router.pathname === link && "1px solid #757ce8"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, name)));
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    direction: "column",
    style: {
      margin: "1.2em 0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(components_Social__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    container: true,
    component: "a",
    rel: "noreferrer noopener",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    className: classes.copylight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJsaW5rIiwiZm9udFNpemUiLCJjb2xvciIsImluZm8iLCJjb3B5bGlnaHQiLCJGb290ZXIiLCJjbGFzc2VzIiwicGF0aCIsInJvdXRlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm1hcCIsIm5hbWUiLCJmb250V2VpZ2h0IiwicGF0aG5hbWUiLCJib3JkZXJCb3R0b20iLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDLElBRGpDO0FBRU5DLFdBQUssUUFGQztBQUdOQyxjQUFRLEVBQUUsVUFISjtBQUlOQyxjQUFRLEVBQUUsUUFKSjtBQUtOQyxlQUFTLEVBQUUsS0FMTDtBQU1OQyxhQUFPLEVBQUU7QUFOSCxLQUQrQjtBQVN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxRQUROO0FBRUpDLFdBQUssRUFBRSxNQUZIO0FBR0osaUJBQVc7QUFDVEEsYUFBSyxFQUFFYixLQUFLLENBQUNHLE9BQU4sQ0FBY1csSUFBZCxDQUFtQlQ7QUFEakI7QUFIUCxLQVRpQztBQWdCdkNVLGFBQVMsRUFBRTtBQUNURixXQUFLLEVBQUUsTUFERTtBQUVURCxjQUFRLEVBQUUsS0FGRDtBQUdULGlCQUFXO0FBQ1RDLGFBQUssRUFBRWIsS0FBSyxDQUFDRyxPQUFOLENBQWNXLElBQWQsQ0FBbUJUO0FBRGpCO0FBSEY7QUFoQjRCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQXlCQSxJQUFNVyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE9BQU8sR0FBR25CLFNBQVMsRUFBekI7QUFDQSxNQUFNb0IsSUFBSSxHQUFHQyxrREFBYjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxTQUNFO0FBQVEsYUFBUyxFQUFFSixPQUFPLENBQUNoQixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsV0FBTyxFQUFDLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2lCLElBQUksQ0FBQ0ksR0FBTCxDQUFTO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBU1osSUFBVCxRQUFTQSxJQUFUO0FBQUEsV0FDUixNQUFDLHNEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsU0FBRyxFQUFFQSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFNLFVBQUksRUFBRUEsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw0REFBRDtBQUNFLGVBQVMsRUFBRU0sT0FBTyxDQUFDTixJQURyQjtBQUVFLFdBQUssRUFBRTtBQUNMYSxrQkFBVSxFQUFFSixNQUFNLENBQUNLLFFBQVAsS0FBb0JkLElBQXBCLElBQTRCLE1BRG5DO0FBRUxlLG9CQUFZLEVBQ1ZOLE1BQU0sQ0FBQ0ssUUFBUCxLQUFvQmQsSUFBcEIsSUFBNEI7QUFIekIsT0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUdZLElBUkgsQ0FERixDQURGLENBRFE7QUFBQSxHQUFULENBREgsQ0FERixFQW1CRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxTQUFLLEVBQUU7QUFBRUksWUFBTSxFQUFFO0FBQVYsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbkJGLEVBc0JFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLE1BRE47QUFFRSxhQUFTLE1BRlg7QUFHRSxhQUFTLEVBQUUsR0FIYjtBQUlFLE9BQUcsRUFBQyxxQkFKTjtBQUtFLFdBQU8sRUFBQyxRQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRRSxNQUFDLDREQUFEO0FBQVksYUFBUyxFQUFFVixPQUFPLENBQUNGLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0RBUkYsQ0F0QkYsQ0FERixDQURGO0FBdUNELENBM0NEOztHQUFNQyxNO1VBQ1lsQixTLEVBRUR1QixxRDs7O0tBSFhMLE07QUE2Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFjOTlhOWUwMTA3ODc3NWU3NDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwiY29tcG9uZW50cy9MaW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcImRhdGEvcm91dGVzXCI7XHJcbmltcG9ydCBTb2NpYWwgZnJvbSBcImNvbXBvbmVudHMvU29jaWFsXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb290ZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB3aWR0aDogYDEwMCVgLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIjZlbVwiLFxyXG4gICAgcGFkZGluZzogXCIyZW0gMCBcIixcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGZvbnRTaXplOiBcIjEuMjVlbVwiLFxyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuaW5mby5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvcHlsaWdodDoge1xyXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgZm9udFNpemU6IFwiMWVtXCIsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5pbmZvLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgcGF0aCA9IHJvdXRlcztcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIHtwYXRoLm1hcCgoeyBuYW1lLCBsaW5rIH0pID0+IChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSBrZXk9e2xpbmt9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSBsaW5rICYmIFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTpcclxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gbGluayAmJiBcIjFweCBzb2xpZCAjNzU3Y2U4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIiBzdHlsZT17eyBtYXJnaW46IFwiMS4yZW0gMFwiIH19PlxyXG4gICAgICAgICAgPFNvY2lhbCAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgaXRlbVxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBjb21wb25lbnQ9e1wiYVwifVxyXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlsaWdodH0+XHJcbiAgICAgICAgICAgIFNlYmFzdGlhbiBDYWJhbGxlcm8gLSBEYWxpbGEgQ2FzdGVsbm92byAtIEFsYmEgRXNxdWl2ZWxcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==