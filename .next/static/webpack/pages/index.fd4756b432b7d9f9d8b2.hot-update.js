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
    target: "_blank",
    rel: "noreferrer noopener",
    justify: "center",
    style: {
      textDecoration: "none"
    },
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
      lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImZvb3RlciIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIndpZHRoIiwicG9zaXRpb24iLCJvdmVyZmxvdyIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJsaW5rIiwiZm9udFNpemUiLCJjb2xvciIsImluZm8iLCJjb3B5bGlnaHQiLCJGb290ZXIiLCJjbGFzc2VzIiwicGF0aCIsInJvdXRlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm1hcCIsIm5hbWUiLCJmb250V2VpZ2h0IiwicGF0aG5hbWUiLCJib3JkZXJCb3R0b20iLCJtYXJnaW4iLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFVBQU0sRUFBRTtBQUNOQyxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkMsSUFEakM7QUFFTkMsV0FBSyxRQUZDO0FBR05DLGNBQVEsRUFBRSxVQUhKO0FBSU5DLGNBQVEsRUFBRSxRQUpKO0FBS05DLGVBQVMsRUFBRSxLQUxMO0FBTU5DLGFBQU8sRUFBRTtBQU5ILEtBRCtCO0FBU3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLFFBRE47QUFFSkMsV0FBSyxFQUFFLE1BRkg7QUFHSixpQkFBVztBQUNUQSxhQUFLLEVBQUViLEtBQUssQ0FBQ0csT0FBTixDQUFjVyxJQUFkLENBQW1CVDtBQURqQjtBQUhQLEtBVGlDO0FBZ0J2Q1UsYUFBUyxFQUFFO0FBQ1RGLFdBQUssRUFBRSxNQURFO0FBRVRELGNBQVEsRUFBRSxLQUZEO0FBR1QsaUJBQVc7QUFDVEMsYUFBSyxFQUFFYixLQUFLLENBQUNHLE9BQU4sQ0FBY1csSUFBZCxDQUFtQlQ7QUFEakI7QUFIRjtBQWhCNEIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBeUJBLElBQU1XLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsT0FBTyxHQUFHbkIsU0FBUyxFQUF6QjtBQUNBLE1BQU1vQixJQUFJLEdBQUdDLGtEQUFiO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFNBQ0U7QUFBUSxhQUFTLEVBQUVKLE9BQU8sQ0FBQ2hCLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUE0QixXQUFPLEVBQUMsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHaUIsSUFBSSxDQUFDSSxHQUFMLENBQVM7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTWixJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUNSLE1BQUMsc0RBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxTQUFHLEVBQUVBLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFEO0FBQ0UsZUFBUyxFQUFFTSxPQUFPLENBQUNOLElBRHJCO0FBRUUsV0FBSyxFQUFFO0FBQ0xhLGtCQUFVLEVBQUVKLE1BQU0sQ0FBQ0ssUUFBUCxLQUFvQmQsSUFBcEIsSUFBNEIsTUFEbkM7QUFFTGUsb0JBQVksRUFDVk4sTUFBTSxDQUFDSyxRQUFQLEtBQW9CZCxJQUFwQixJQUE0QjtBQUh6QixPQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRR1ksSUFSSCxDQURGLENBREYsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQURGLEVBbUJFLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQW1DLFNBQUssRUFBRTtBQUFFSSxZQUFNLEVBQUU7QUFBVixLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FuQkYsRUFzQkUsTUFBQyxzREFBRDtBQUNFLFFBQUksTUFETjtBQUVFLGFBQVMsTUFGWDtBQUdFLGFBQVMsRUFBRSxHQUhiO0FBSUUsVUFBTSxFQUFDLFFBSlQ7QUFLRSxPQUFHLEVBQUMscUJBTE47QUFNRSxXQUFPLEVBQUMsUUFOVjtBQU9FLFNBQUssRUFBRTtBQUNMQyxvQkFBYyxFQUFFO0FBRFgsS0FQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQyw0REFBRDtBQUFZLGFBQVMsRUFBRVgsT0FBTyxDQUFDRixTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtEQVhGLENBdEJGLENBREYsQ0FERjtBQTBDRCxDQTlDRDs7R0FBTUMsTTtVQUNZbEIsUyxFQUVEdUIscUQ7OztLQUhYTCxNO0FBZ0RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZDQ3NTZiNDMyYjdkOWY5ZDhiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcImNvbXBvbmVudHMvTGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCJkYXRhL3JvdXRlc1wiO1xyXG5pbXBvcnQgU29jaWFsIGZyb20gXCJjb21wb25lbnRzL1NvY2lhbFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgd2lkdGg6IGAxMDAlYCxcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIG1hcmdpblRvcDogXCI2ZW1cIixcclxuICAgIHBhZGRpbmc6IFwiMmVtIDAgXCIsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBmb250U2l6ZTogXCIxLjI1ZW1cIixcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmluZm8ubWFpbixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb3B5bGlnaHQ6IHtcclxuICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgIGZvbnRTaXplOiBcIjFlbVwiLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuaW5mby5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHBhdGggPSByb3V0ZXM7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBqdXN0aWZ5PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICB7cGF0aC5tYXAoKHsgbmFtZSwgbGluayB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtsaW5rfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHJvdXRlci5wYXRobmFtZSA9PT0gbGluayAmJiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IGxpbmsgJiYgXCIxcHggc29saWQgIzc1N2NlOFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjEuMmVtIDBcIiB9fT5cclxuICAgICAgICAgIDxTb2NpYWwgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGl0ZW1cclxuICAgICAgICAgIGNvbnRhaW5lclxyXG4gICAgICAgICAgY29tcG9uZW50PXtcImFcIn1cclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuY29weWxpZ2h0fT5cclxuICAgICAgICAgICAgU2ViYXN0aWFuIENhYmFsbGVybyAtIERhbGlsYSBDYXN0ZWxub3ZvIC0gQWxiYSBFc3F1aXZlbFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9