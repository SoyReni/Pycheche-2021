webpackHotUpdate_N_E("pages/clases",{

/***/ "./pages/clases.js":
/*!*************************!*\
  !*** ./pages/clases.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var data_clase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! data/clase */ "./data/clase.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _this = undefined,
    _jsxFileName = "D:\\Users\\Reni\\Documents\\GitHub\\Pycheche-IHM-21-22\\Pycheche-2021\\pages\\clases.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  var _snsIcon;

  return {
    snsIcon: (_snsIcon = {
      width: "30px",
      height: "30px"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_snsIcon, theme.breakpoints.down("xs"), {
      width: "25px",
      height: "25px"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_snsIcon, "&:hover", {
      color: theme.palette.info.main
    }), _snsIcon),
    avator: {
      width: "8em",
      height: "8em",
      boxShadow: "0px 0px 10px 1px #b2b2b28f"
    }
  };
});

var Clases = function Clases() {
  _s();

  var classes = useStyles();
  return __jsx(components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Clases",
    description: "Clases y Coreos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row margin-0 clases-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, data_clase__WEBPACK_IMPORTED_MODULE_3__["clases"].map(function (data, key) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      key: key,
      href: "/clases",
      className: "col-12 margin-0 padding-0 clases-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 18
      }
    }, __jsx("div", {
      className: "row categoria",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "col-7 titulo-clase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }, data.nombre), __jsx("div", {
      className: "col-5 datos-clase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, "fecha: ", data.fecha), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, "Autor: ", data.Autor)), __jsx("div", {
      className: "col-12 descripcion-clase",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 23
      }
    }, __jsx("p", {
      className: "col-11",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, data.Descripcion))))), __jsx("div", {
      className: "fav text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      className: " paddign-0 margin-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "35",
      height: "35",
      fill: "white",
      "class": "bi bi-star-fill",
      viewBox: "0 0 16 16",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, __jsx("path", {
      d: "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    })))));
  }))));
};

_s(Clases, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Clases;
/* harmony default export */ __webpack_exports__["default"] = (Clases);

var _c;

$RefreshReg$(_c, "Clases");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xhc2VzLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInNuc0ljb24iLCJ3aWR0aCIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsImNvbG9yIiwicGFsZXR0ZSIsImluZm8iLCJtYWluIiwiYXZhdG9yIiwiYm94U2hhZG93IiwiQ2xhc2VzIiwiY2xhc3NlcyIsImNsYXNlcyIsIm1hcCIsImRhdGEiLCJrZXkiLCJub21icmUiLCJmZWNoYSIsIkF1dG9yIiwiRGVzY3JpcGNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsU0FBWTtBQUN2Q0MsV0FBTztBQUNMQyxXQUFLLEVBQUUsTUFERjtBQUVMQyxZQUFNLEVBQUU7QUFGSCwyR0FJSkgsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUpJLEVBSTJCO0FBQzlCSCxXQUFLLEVBQUUsTUFEdUI7QUFFOUJDLFlBQU0sRUFBRTtBQUZzQixLQUozQix1R0FRTCxTQVJLLEVBUU07QUFDVEcsV0FBSyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFEakIsS0FSTixZQURnQztBQWF2Q0MsVUFBTSxFQUFFO0FBQ05SLFdBQUssRUFBRSxLQUREO0FBRU5DLFlBQU0sRUFBRSxLQUZGO0FBR05RLGVBQVMsRUFBRTtBQUhMO0FBYitCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQXFCQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE9BQU8sR0FBR2YsU0FBUyxFQUF6QjtBQUNBLFNBQ0UsTUFBQyxnRUFBRDtBQUNFLFNBQUssRUFBQyxRQURSO0FBRUUsZUFBVyxFQUFDLGlCQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dnQixpREFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFNQyxHQUFOLEVBQWM7QUFBRSxXQUMxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUssTUFBQyx3REFBRDtBQUFRLFNBQUcsRUFBRUEsR0FBYjtBQUFrQixVQUFJLEVBQUMsU0FBdkI7QUFBaUMsZUFBUyxFQUFDLHVDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0Q7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLRCxJQUFJLENBQUNFLE1BRFYsQ0FERixFQUlFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFXRixJQUFJLENBQUNHLEtBQWhCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFXSCxJQUFJLENBQUNJLEtBQWhCLENBRkYsQ0FKRixFQVFFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUJKLElBQUksQ0FBQ0ssV0FBNUIsQ0FERixDQURKLENBUkYsQ0FEQyxDQUFMLEVBZ0JBO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdEQUFEO0FBQVEsZUFBUyxFQUFDLHFCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxXQUFLLEVBQUMsNEJBQVg7QUFBd0MsV0FBSyxFQUFDLElBQTlDO0FBQW1ELFlBQU0sRUFBQyxJQUExRDtBQUNJLFVBQUksRUFBQyxPQURUO0FBQ2lCLGVBQU0saUJBRHZCO0FBQ3lDLGFBQU8sRUFBQyxXQURqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUk7QUFBTSxPQUFDLEVBQUMsNFBBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLENBREosQ0FESixDQWhCQSxDQUQwQjtBQTBCMUIsR0ExQkQsQ0FESCxDQURGLENBSkYsQ0FERjtBQXNDRCxDQXhDRDs7R0FBTVQsTTtVQUNZZCxTOzs7S0FEWmMsTTtBQTBDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2xhc2VzLjE2OGQ2NDNjMDc2MWNjYWQ5NDExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IHsgY2xhc2VzIH0gZnJvbSBcImRhdGEvY2xhc2VcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgc25zSWNvbjoge1xyXG4gICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIyNXB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIyNXB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuaW5mby5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGF2YXRvcjoge1xyXG4gICAgd2lkdGg6IFwiOGVtXCIsXHJcbiAgICBoZWlnaHQ6IFwiOGVtXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAxMHB4IDFweCAjYjJiMmIyOGZcIixcclxuICB9LFxyXG5cclxufSkpO1xyXG5cclxuY29uc3QgQ2xhc2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICB0aXRsZT1cIkNsYXNlc1wiXHJcbiAgICAgIGRlc2NyaXB0aW9uPVwiQ2xhc2VzIHkgQ29yZW9zXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYXJnaW4tMCBjbGFzZXMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7Y2xhc2VzLm1hcCgoZGF0YSxrZXkpID0+IHsgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj48QnV0dG9uIGtleT17a2V5fSBocmVmPVwiL2NsYXNlc1wiIGNsYXNzTmFtZT1cImNvbC0xMiBtYXJnaW4tMCBwYWRkaW5nLTAgY2xhc2VzLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNhdGVnb3JpYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IHRpdHVsby1jbGFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEubm9tYnJlfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNSBkYXRvcy1jbGFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPmZlY2hhOiB7ZGF0YS5mZWNoYX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QXV0b3I6IHtkYXRhLkF1dG9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGRlc2NyaXBjaW9uLWNsYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wtMTFcIj57ZGF0YS5EZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhdiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCIgcGFkZGlnbi0wIG1hcmdpbi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzNVwiIGhlaWdodD1cIjM1XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiIGNsYXNzPVwiYmkgYmktc3Rhci1maWxsXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMuNjEyIDE1LjQ0M2MtLjM4Ni4xOTgtLjgyNC0uMTQ5LS43NDYtLjU5MmwuODMtNC43M0wuMTczIDYuNzY1Yy0uMzI5LS4zMTQtLjE1OC0uODg4LjI4My0uOTVsNC44OTgtLjY5Nkw3LjUzOC43OTJjLjE5Ny0uMzkuNzMtLjM5LjkyNyAwbDIuMTg0IDQuMzI3IDQuODk4LjY5NmMuNDQxLjA2Mi42MTIuNjM2LjI4Mi45NWwtMy41MjIgMy4zNTYuODMgNC43M2MuMDc4LjQ0My0uMzYuNzktLjc0Ni41OTJMOCAxMy4xODdsLTQuMzg5IDIuMjU2elwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGFzZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==