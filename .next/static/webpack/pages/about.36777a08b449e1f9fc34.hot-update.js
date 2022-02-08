webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Social.js":
/*!******************************!*\
  !*** ./components/Social.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Instagram */ "./node_modules/@material-ui/icons/Instagram.js");
/* harmony import */ var _material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Instagram__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var data_socialMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! data/socialMedia */ "./data/socialMedia.js");


var _this = undefined,
    _jsxFileName = "D:\\Users\\Reni\\Documents\\GitHub\\Pycheche-IHM-21-22\\components\\Social.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // if you wanto to add twitter
// import TwitterIcon from '@material-ui/icons/Twitter';


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
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
    }), _snsIcon)
  };
});

var Social = function Social(_ref) {
  _s();

  var color = _ref.color;
  var classes = useStyles();
  var github = data_socialMedia__WEBPACK_IMPORTED_MODULE_8__["socialMedia"].github,
      homepage = data_socialMedia__WEBPACK_IMPORTED_MODULE_8__["socialMedia"].homepage;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    container: true,
    spacing: 2,
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    component: "a",
    target: "_blank",
    rel: "noreferrer noopener",
    href: homepage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.snsIcon,
    color: color ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    component: "a",
    target: "_blank",
    rel: "noreferrer noopener",
    href: github,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.snsIcon,
    color: color ? "primary" : "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })));
};

_s(Social, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = Social;
/* harmony default export */ __webpack_exports__["default"] = (Social);

var _c;

$RefreshReg$(_c, "Social");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWwuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwic25zSWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiY29sb3IiLCJwYWxldHRlIiwiaW5mbyIsIm1haW4iLCJTb2NpYWwiLCJjbGFzc2VzIiwiZ2l0aHViIiwic29jaWFsTWVkaWEiLCJob21lcGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFNBQVk7QUFDdkNDLFdBQU87QUFDTEMsV0FBSyxFQUFFLE1BREY7QUFFTEMsWUFBTSxFQUFFO0FBRkgsMkdBSUpILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FKSSxFQUkyQjtBQUM5QkgsV0FBSyxFQUFFLE1BRHVCO0FBRTlCQyxZQUFNLEVBQUU7QUFGc0IsS0FKM0IsdUdBUUwsU0FSSyxFQVFNO0FBQ1RHLFdBQUssRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLElBQWQsQ0FBbUJDO0FBRGpCLEtBUk47QUFEZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBZUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZTtBQUFBOztBQUFBLE1BQVpKLEtBQVksUUFBWkEsS0FBWTtBQUM1QixNQUFNSyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFENEIsTUFFckJjLE1BRnFCLEdBRUFDLDREQUZBLENBRXJCRCxNQUZxQjtBQUFBLE1BRWJFLFFBRmEsR0FFQUQsNERBRkEsQ0FFYkMsUUFGYTtBQUk1QixTQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxhQUFTLE1BQXBCO0FBQXFCLFdBQU8sRUFBRSxDQUE5QjtBQUFpQyxXQUFPLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLE1BRE47QUFFRSxhQUFTLEVBQUUsR0FGYjtBQUdFLFVBQU0sRUFBQyxRQUhUO0FBSUUsT0FBRyxFQUFDLHFCQUpOO0FBS0UsUUFBSSxFQUFFQSxRQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLDhEQUFEO0FBQ0UsYUFBUyxFQUFFSCxPQUFPLENBQUNWLE9BRHJCO0FBRUUsU0FBSyxFQUFFSyxLQUFLLEdBQUcsU0FBSCxHQUFlLFdBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGLEVBYUUsTUFBQyxzREFBRDtBQUNFLFFBQUksTUFETjtBQUVFLGFBQVMsRUFBRSxHQUZiO0FBR0UsVUFBTSxFQUFDLFFBSFQ7QUFJRSxPQUFHLEVBQUMscUJBSk47QUFLRSxRQUFJLEVBQUVNLE1BTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsZ0VBQUQ7QUFDRSxhQUFTLEVBQUVELE9BQU8sQ0FBQ1YsT0FEckI7QUFFRSxTQUFLLEVBQUVLLEtBQUssR0FBRyxTQUFILEdBQWUsV0FGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBYkYsQ0FERjtBQTRCRCxDQWhDRDs7R0FBTUksTTtVQUNZWixTOzs7S0FEWlksTTtBQWtDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMzY3NzdhMDhiNDQ5ZTFmOWZjMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCBJbnN0YWdyYW1JY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5zdGFncmFtXCI7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiO1xyXG5pbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1YlwiO1xyXG5pbXBvcnQgSG9tZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Ib21lXCI7XHJcbi8vIGlmIHlvdSB3YW50byB0byBhZGQgdHdpdHRlclxyXG4vLyBpbXBvcnQgVHdpdHRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXInO1xyXG5cclxuaW1wb3J0IHsgc29jaWFsTWVkaWEgfSBmcm9tIFwiZGF0YS9zb2NpYWxNZWRpYVwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgc25zSWNvbjoge1xyXG4gICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIyNXB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIyNXB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuaW5mby5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBTb2NpYWwgPSAoeyBjb2xvciB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHtnaXRodWIsIGhvbWVwYWdlIH0gPSBzb2NpYWxNZWRpYTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGl0ZW0gY29udGFpbmVyIHNwYWNpbmc9ezJ9IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgPEdyaWRcclxuICAgICAgICBpdGVtXHJcbiAgICAgICAgY29tcG9uZW50PXtcImFcIn1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxyXG4gICAgICAgIGhyZWY9e2hvbWVwYWdlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhvbWVJY29uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc25zSWNvbn1cclxuICAgICAgICAgIGNvbG9yPXtjb2xvciA/IFwicHJpbWFyeVwiIDogXCJzZWNvbmRhcnlcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICAgIDxHcmlkXHJcbiAgICAgICAgaXRlbVxyXG4gICAgICAgIGNvbXBvbmVudD17XCJhXCJ9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcclxuICAgICAgICBocmVmPXtnaXRodWJ9XHJcbiAgICAgID5cclxuICAgICAgICA8R2l0SHViSWNvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNuc0ljb259XHJcbiAgICAgICAgICBjb2xvcj17Y29sb3IgPyBcInByaW1hcnlcIiA6IFwic2Vjb25kYXJ5XCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2NpYWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=