webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Link */ "./components/Link.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var data_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! data/routes */ "./data/routes.js");


var _s = $RefreshSig$(),
    _this = undefined,
    _jsxFileName = "D:\\Users\\Reni\\Documents\\GitHub\\Pycheche-IHM-21-22\\Pycheche-2021\\components\\layout\\Header.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function ElevationScroll(props) {
  _s();

  var children = props.children;
  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_7__["default"])({
    disableHysteresis: true,
    threshold: 0
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

_s(ElevationScroll, "EC2GbbZl9x3XKoXLVx1H89cOBi0=", false, function () {
  return [_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c = ElevationScroll;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var _objectSpread2;

  return {
    toolbarMargin: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, (_objectSpread2 = {
      marginBottom: "1em"
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.down("md"), {
      marginBottom: "4em"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.down("xs"), {
      marginBottom: "2em"
    }), _objectSpread2)),
    logo: {
      color: theme.palette.secondary.main,
      width: "max-content",
      fontSize: "1.5rem",
      fontfamily: "Baloo 2",
      fontweight: 700
    },
    drawerIconContainer: {
      marginLeft: "auto",
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    drawerIcon: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: "50px",
      width: "50px",
      color: "#fff"
    }, theme.breakpoints.down("xs"), {
      height: "40px",
      width: "40px"
    }),
    drawer: {
      backgroundColor: theme.palette.secondary.main,
      padding: "0 6em"
    },
    link: {
      fontSize: "1.25em",
      color: theme.palette.secondary.main,
      "&:hover": {
        color: theme.palette.info.main
      }
    }
  };
});

var Header = function Header() {
  _s2();

  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var iOS =  true && /iPad|iPhone|iPod/.test(navigator.userAgent);
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(theme.breakpoints.down("xl"));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      openDrawer = _useState[0],
      setOpenDrawer = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var path = data_routes__WEBPACK_IMPORTED_MODULE_9__["routes"];

  var tabs = __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, path.map(function (_ref) {
    var name = _ref.name,
        link = _ref.link;
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      key: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }, __jsx(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      className: classes.link,
      style: {
        fontWeight: router.pathname === link && "bold",
        borderBottom: router.pathname === link && "1px solid #757ce8"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, name)));
  })));

  var drawer = __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["SwipeableDrawer"], {
    disableBackdropTransition: !iOS,
    disableDiscovery: iOS,
    open: openDrawer,
    onClose: function onClose() {
      return setOpenDrawer(false);
    },
    onOpen: function onOpen() {
      return setOpenDrawer(true);
    },
    classes: {
      paper: classes.drawer
    },
    anchor: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.toolbarMargin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    disablePadding: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, path.map(function (_ref2) {
    var name = _ref2.name,
        link = _ref2.link,
        exclude = _ref2.exclude;

    if (!exclude) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
        key: link,
        divider: true,
        button: true,
        onClick: function onClick() {
          setOpenDrawer(false);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        disableTypography: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 15
        }
      }, __jsx(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: link,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        style: {
          color: router.pathname === link ? "primary" : "rgb(107 107 107)",
          fontWeight: router.pathname === link && "bold"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 19
        }
      }, name))));
    }
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    onClick: function onClick() {
      return setOpenDrawer(!openDrawer);
    },
    disableRipple: true,
    className: classes.drawerIconContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.drawerIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  })));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(ElevationScroll, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], {
    className: classes.appBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], {
    disableGutters: true,
    style: {
      maxWidth: "1280px",
      margin: "0 auto",
      width: "100%",
      padding: matches ? "0 16px" : "24px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, __jsx(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }, "Pycheche")), matches ? drawer : tabs))), __jsx("div", {
    className: classes.toolbarMargin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }
  }));
};

_s2(Header, "eLFk+T+jjG2e7J5b2IJrssiGqbw=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c2 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2;

$RefreshReg$(_c, "ElevationScroll");
$RefreshReg$(_c2, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkVsZXZhdGlvblNjcm9sbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJlbGV2YXRpb24iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0b29sYmFyTWFyZ2luIiwibWl4aW5zIiwidG9vbGJhciIsIm1hcmdpbkJvdHRvbSIsImJyZWFrcG9pbnRzIiwiZG93biIsImxvZ28iLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwid2lkdGgiLCJmb250U2l6ZSIsImZvbnRmYW1pbHkiLCJmb250d2VpZ2h0IiwiZHJhd2VySWNvbkNvbnRhaW5lciIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VySWNvbiIsImhlaWdodCIsImRyYXdlciIsImxpbmsiLCJpbmZvIiwiSGVhZGVyIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaU9TIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoZXMiLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlU3RhdGUiLCJvcGVuRHJhd2VyIiwic2V0T3BlbkRyYXdlciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGgiLCJyb3V0ZXMiLCJ0YWJzIiwibWFwIiwibmFtZSIsImZvbnRXZWlnaHQiLCJwYXRobmFtZSIsImJvcmRlckJvdHRvbSIsInBhcGVyIiwiZXhjbHVkZSIsImFwcEJhciIsIm1heFdpZHRoIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBV0E7QUFFQTtBQUVBOztBQUVBLFNBQVNBLGVB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QUFBQTtBQUFBO0FBQUEsSUFyQkYsQ0FERjtBQXlCRCxDQTlHRDs7SUFBTXdCLE07VUFDWTNCLFMsRUFDRjZCLGlFLEVBRUVNLHVFLEVBSURLLHFEOzs7TUFSWGIsTTtBQStHU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWY2ZmY4OGM5MmFjNWYxMzI2MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJjb21wb25lbnRzL0xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBBcHBCYXIsXHJcbiAgVG9vbGJhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIFN3aXBlYWJsZURyYXdlcixcclxuICBJY29uQnV0dG9uLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xyXG5cclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcImRhdGEvcm91dGVzXCI7XHJcblxyXG5mdW5jdGlvbiBFbGV2YXRpb25TY3JvbGwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoe1xyXG4gICAgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgIGVsZXZhdGlvbjogdHJpZ2dlciA/IDQgOiAwLFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0b29sYmFyTWFyZ2luOiB7XHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgIG1hcmdpbkJvdHRvbTogYDFlbWAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiNGVtXCIsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgd2lkdGg6IFwibWF4LWNvbnRlbnRcIixcclxuICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgZm9udGZhbWlseTogXCJCYWxvbyAyXCIsXHJcbiAgICBmb250d2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkcmF3ZXJJY29uQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkcmF3ZXJJY29uOiB7XHJcbiAgICBoZWlnaHQ6IGA1MHB4YCxcclxuICAgIHdpZHRoOiBgNTBweGAsXHJcbiAgICBjb2xvcjogYCNmZmZgLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgaGVpZ2h0OiBgNDBweGAsXHJcbiAgICAgIHdpZHRoOiBgNDBweGAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBwYWRkaW5nOiBcIjAgNmVtXCIsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBmb250U2l6ZTogXCIxLjI1ZW1cIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuaW5mby5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpT1MgPSBwcm9jZXNzLmJyb3dzZXIgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhsXCIpKTtcclxuXHJcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IHJvdXRlcztcclxuXHJcbiAgY29uc3QgdGFicyA9IChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICB7cGF0aC5tYXAoKHsgbmFtZSwgbGluayB9KSA9PiAoXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGtleT17bGlua30+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHJvdXRlci5wYXRobmFtZSA9PT0gbGluayAmJiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiByb3V0ZXIucGF0aG5hbWUgPT09IGxpbmsgJiYgXCIxcHggc29saWQgIzc1N2NlOFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxuICBjb25zdCBkcmF3ZXIgPSAoXHJcbiAgICA8PlxyXG4gICAgICA8U3dpcGVhYmxlRHJhd2VyXHJcbiAgICAgICAgZGlzYWJsZUJhY2tkcm9wVHJhbnNpdGlvbj17IWlPU31cclxuICAgICAgICBkaXNhYmxlRGlzY292ZXJ5PXtpT1N9XHJcbiAgICAgICAgb3Blbj17b3BlbkRyYXdlcn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuRHJhd2VyKGZhbHNlKX1cclxuICAgICAgICBvbk9wZW49eygpID0+IHNldE9wZW5EcmF3ZXIodHJ1ZSl9XHJcbiAgICAgICAgY2xhc3Nlcz17eyBwYXBlcjogY2xhc3Nlcy5kcmF3ZXIgfX1cclxuICAgICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJNYXJnaW59IC8+XHJcbiAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICB7cGF0aC5tYXAoKHsgbmFtZSwgbGluaywgZXhjbHVkZSB9KSA9PiB7IFxyXG4gICAgICAgICAgICBpZighZXhjbHVkZSl7IFxyXG4gICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtsaW5rfVxyXG4gICAgICAgICAgICAgIGRpdmlkZXJcclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRPcGVuRHJhd2VyKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBkaXNhYmxlVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2IoMTA3IDEwNyAxMDcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiByb3V0ZXIucGF0aG5hbWUgPT09IGxpbmsgJiYgXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApfX0pfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9Td2lwZWFibGVEcmF3ZXI+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcil9XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJJY29uQ29udGFpbmVyfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJJY29ufSAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWxldmF0aW9uU2Nyb2xsPlxyXG4gICAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBkaXNhYmxlR3V0dGVyc1xyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEyODBweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogbWF0Y2hlcyA/IFwiMCAxNnB4XCIgOiBcIjI0cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+UHljaGVjaGU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAge21hdGNoZXMgPyBkcmF3ZXIgOiB0YWJzfVxyXG5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9FbGV2YXRpb25TY3JvbGw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyTWFyZ2lufSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9