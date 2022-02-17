webpackHotUpdate_N_E("pages/explorar",{

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
      marginBottom: "1em"
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, theme.breakpoints.down("xs"), {
      marginBottom: "1em"
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
      backgroundColor: "#FFB287",
      padding: "0 6em"
    },
    link: {
      fontSize: "1.25em",
      color: "#ffffff",
      "&:hover": {
        color: "#000000"
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
  }, __jsx("p", {
    className: "logo-texto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 52
    }
  }, "Pycheche"))), matches ? drawer : tabs))), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkVsZXZhdGlvblNjcm9sbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJlbGV2YXRpb24iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0b29sYmFyTWFyZ2luIiwibWl4aW5zIiwidG9vbGJhciIsIm1hcmdpbkJvdHRvbSIsImJyZWFrcG9pbnRzIiwiZG93biIsImxvZ28iLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwid2lkdGgiLCJmb250U2l6ZSIsImZvbnRmYW1pbHkiLCJmb250d2VpZ2h0IiwiZHJhd2VySWNvbkNvbnRhaW5lciIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VySWNvbiIsImhlaWdodCIsImRyYXdlciIsImxpbmsiLCJIZWFkZXIiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJpT1MiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2hlcyIsInVzZU1lZGlhUXVlcnkiLCJ1c2VTdGF0ZSIsIm9wZW5EcmF3ZXIiLCJzZXRPcGVuRHJhd2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aCIsInJvdXRlcyIsInRhYnMiLCJtYXAiLCJuYW1lIiwiZm9udFdlaWdodCIsInBhdGhuYW1lIiwiYm9yZGVyQm90dG9tIiwicGFwZXIiLCJleGNsdWRlIiwiYXBwQmFyIiwibWF4V2lkdGgiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFXQTtBQUVBO0FBRUE7O0FBRUEsU0FBU0EsZUFBVCxDQUF5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VUFDWTFCLFMsRUFDRjRCLGlFLEVBRUVNLHVFLEVBSURLLHFEOzs7TUFSWGIsTTtBQStHU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwbG9yYXIuYTFmM2M2NDhkMWY0MTAzNTgyMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJjb21wb25lbnRzL0xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCI7XHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBBcHBCYXIsXHJcbiAgVG9vbGJhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIFN3aXBlYWJsZURyYXdlcixcclxuICBJY29uQnV0dG9uLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xyXG5cclxuaW1wb3J0IE1lbnVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiO1xyXG5cclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcImRhdGEvcm91dGVzXCI7XHJcblxyXG5mdW5jdGlvbiBFbGV2YXRpb25TY3JvbGwocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoe1xyXG4gICAgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgIGVsZXZhdGlvbjogdHJpZ2dlciA/IDQgOiAwLFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0b29sYmFyTWFyZ2luOiB7XHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICAgIG1hcmdpbkJvdHRvbTogYDFlbWAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMWVtXCIsXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjFlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgd2lkdGg6IFwibWF4LWNvbnRlbnRcIixcclxuICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgZm9udGZhbWlseTogXCJCYWxvbyAyXCIsXHJcbiAgICBmb250d2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICBkcmF3ZXJJY29uQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkcmF3ZXJJY29uOiB7XHJcbiAgICBoZWlnaHQ6IGA1MHB4YCxcclxuICAgIHdpZHRoOiBgNTBweGAsXHJcbiAgICBjb2xvcjogYCNmZmZgLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgaGVpZ2h0OiBgNDBweGAsXHJcbiAgICAgIHdpZHRoOiBgNDBweGAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjI4N1wiLFxyXG4gICAgcGFkZGluZzogXCIwIDZlbVwiLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgZm9udFNpemU6IFwiMS4yNWVtXCIsXHJcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlPUyA9IHByb2Nlc3MuYnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwieGxcIikpO1xyXG5cclxuICBjb25zdCBbb3BlbkRyYXdlciwgc2V0T3BlbkRyYXdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBwYXRoID0gcm91dGVzO1xyXG5cclxuICBjb25zdCB0YWJzID0gKFxyXG4gICAgPD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgIHtwYXRoLm1hcCgoeyBuYW1lLCBsaW5rIH0pID0+IChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtsaW5rfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSBsaW5rICYmIFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IHJvdXRlci5wYXRobmFtZSA9PT0gbGluayAmJiBcIjFweCBzb2xpZCAjNzU3Y2U4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG4gIGNvbnN0IGRyYXdlciA9IChcclxuICAgIDw+XHJcbiAgICAgIDxTd2lwZWFibGVEcmF3ZXJcclxuICAgICAgICBkaXNhYmxlQmFja2Ryb3BUcmFuc2l0aW9uPXshaU9TfVxyXG4gICAgICAgIGRpc2FibGVEaXNjb3Zlcnk9e2lPU31cclxuICAgICAgICBvcGVuPXtvcGVuRHJhd2VyfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW5EcmF3ZXIoZmFsc2UpfVxyXG4gICAgICAgIG9uT3Blbj17KCkgPT4gc2V0T3BlbkRyYXdlcih0cnVlKX1cclxuICAgICAgICBjbGFzc2VzPXt7IHBhcGVyOiBjbGFzc2VzLmRyYXdlciB9fVxyXG4gICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhck1hcmdpbn0gLz5cclxuICAgICAgICA8TGlzdCBkaXNhYmxlUGFkZGluZz5cclxuICAgICAgICAgIHtwYXRoLm1hcCgoeyBuYW1lLCBsaW5rLCBleGNsdWRlIH0pID0+IHsgXHJcbiAgICAgICAgICAgIGlmKCFleGNsdWRlKXsgXHJcbiAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2xpbmt9XHJcbiAgICAgICAgICAgICAgZGl2aWRlclxyXG4gICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE9wZW5EcmF3ZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IGRpc2FibGVUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYigxMDcgMTA3IDEwNylcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHJvdXRlci5wYXRobmFtZSA9PT0gbGluayAmJiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICl9fSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L1N3aXBlYWJsZURyYXdlcj5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKX1cclxuICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckljb25Db250YWluZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckljb259IC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxFbGV2YXRpb25TY3JvbGw+XHJcbiAgICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIGRpc2FibGVHdXR0ZXJzXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTI4MHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBtYXRjaGVzID8gXCIwIDE2cHhcIiA6IFwiMjRweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT48cCBjbGFzc05hbWU9XCJsb2dvLXRleHRvXCI+UHljaGVjaGU8L3A+PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHttYXRjaGVzID8gZHJhd2VyIDogdGFic31cclxuXHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDwvRWxldmF0aW9uU2Nyb2xsPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhck1hcmdpbn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==