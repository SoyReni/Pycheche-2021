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
      fontSize: "1.5rem"
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
      lineNumber: 96,
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
        lineNumber: 98,
        columnNumber: 11
      }
    }, __jsx(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
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
        lineNumber: 100,
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
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.toolbarMargin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["List"], {
    disablePadding: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
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
          lineNumber: 131,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
        disableTypography: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 15
        }
      }, __jsx(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: link,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
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
          lineNumber: 141,
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
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.drawerIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  })));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(ElevationScroll, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], {
    className: classes.appBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, "Pycheche")), matches ? drawer : tabs))), __jsx("div", {
    className: classes.toolbarMargin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkVsZXZhdGlvblNjcm9sbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJlbGV2YXRpb24iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0b29sYmFyTWFyZ2luIiwibWl4aW5zIiwidG9vbGJhciIsIm1hcmdpbkJvdHRvbSIsImJyZWFrcG9pbnRzIiwiZG93biIsImxvZ28iLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwid2lkdGgiLCJmb250U2l6ZSIsImRyYXdlckljb25Db250YWluZXIiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImRyYXdlckljb24iLCJoZWlnaHQiLCJkcmF3ZXIiLCJsaW5rIiwiaW5mbyIsIkhlYWRlciIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsImlPUyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaGVzIiwidXNlTWVkaWFRdWVyeSIsInVzZVN0YXRlIiwib3BlbkRyYXdlciIsInNldE9wZW5EcmF3ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRoIiwicm91dGVzIiwidGFicyIsIm1hcCIsIm5hbWUiLCJmb250V2VpZ2h0IiwicGF0aG5hbWUiLCJib3JkZXJCb3R0b20iLCJwYXBlciIsImV4Y2x1ZGUiLCJhcHBCYXIiLCJtYXhXaWR0aCIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVdBO0FBRUE7QUFFQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFB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RU0sdUUsRUFJREsscUQ7OztNQVJYYixNO0FBK0dTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMzJmZmNmZGIzYWY3NDVkZWI1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcImNvbXBvbmVudHMvTGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIjtcclxuaW1wb3J0IHtcclxuICBHcmlkLFxyXG4gIEFwcEJhcixcclxuICBUb29sYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbVRleHQsXHJcbiAgU3dpcGVhYmxlRHJhd2VyLFxyXG4gIEljb25CdXR0b24sXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCI7XHJcblxyXG5pbXBvcnQgTWVudUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCI7XHJcblxyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiZGF0YS9yb3V0ZXNcIjtcclxuXHJcbmZ1bmN0aW9uIEVsZXZhdGlvblNjcm9sbChwcm9wcykge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XHJcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xyXG4gICAgZWxldmF0aW9uOiB0cmlnZ2VyID8gNCA6IDAsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHRvb2xiYXJNYXJnaW46IHtcclxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gICAgbWFyZ2luQm90dG9tOiBgMWVtYCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCI0ZW1cIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICB3aWR0aDogXCJtYXgtY29udGVudFwiLFxyXG4gICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgfSxcclxuICBkcmF3ZXJJY29uQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkcmF3ZXJJY29uOiB7XHJcbiAgICBoZWlnaHQ6IGA1MHB4YCxcclxuICAgIHdpZHRoOiBgNTBweGAsXHJcbiAgICBjb2xvcjogYCNmZmZgLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgaGVpZ2h0OiBgNDBweGAsXHJcbiAgICAgIHdpZHRoOiBgNDBweGAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBwYWRkaW5nOiBcIjAgNmVtXCIsXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBmb250U2l6ZTogXCIxLjI1ZW1cIixcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuaW5mby5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBpT1MgPSBwcm9jZXNzLmJyb3dzZXIgJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhsXCIpKTtcclxuXHJcbiAgY29uc3QgW29wZW5EcmF3ZXIsIHNldE9wZW5EcmF3ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgcGF0aCA9IHJvdXRlcztcclxuXHJcbiAgY29uc3QgdGFicyA9IChcclxuICAgIDw+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cclxuICAgICAgICB7cGF0aC5tYXAoKHsgbmFtZSwgbGluayB9KSA9PiAoXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIGtleT17bGlua30+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IHJvdXRlci5wYXRobmFtZSA9PT0gbGluayAmJiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tOiByb3V0ZXIucGF0aG5hbWUgPT09IGxpbmsgJiYgXCIxcHggc29saWQgIzc1N2NlOFwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxuICBjb25zdCBkcmF3ZXIgPSAoXHJcbiAgICA8PlxyXG4gICAgICA8U3dpcGVhYmxlRHJhd2VyXHJcbiAgICAgICAgZGlzYWJsZUJhY2tkcm9wVHJhbnNpdGlvbj17IWlPU31cclxuICAgICAgICBkaXNhYmxlRGlzY292ZXJ5PXtpT1N9XHJcbiAgICAgICAgb3Blbj17b3BlbkRyYXdlcn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRPcGVuRHJhd2VyKGZhbHNlKX1cclxuICAgICAgICBvbk9wZW49eygpID0+IHNldE9wZW5EcmF3ZXIodHJ1ZSl9XHJcbiAgICAgICAgY2xhc3Nlcz17eyBwYXBlcjogY2xhc3Nlcy5kcmF3ZXIgfX1cclxuICAgICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJNYXJnaW59IC8+XHJcbiAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICB7cGF0aC5tYXAoKHsgbmFtZSwgbGluaywgZXhjbHVkZSB9KSA9PiB7IFxyXG4gICAgICAgICAgICBpZighZXhjbHVkZSl7IFxyXG4gICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExpc3RJdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtsaW5rfVxyXG4gICAgICAgICAgICAgIGRpdmlkZXJcclxuICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRPcGVuRHJhd2VyKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBkaXNhYmxlVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2IoMTA3IDEwNyAxMDcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiByb3V0ZXIucGF0aG5hbWUgPT09IGxpbmsgJiYgXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICApfX0pfVxyXG4gICAgICAgIDwvTGlzdD5cclxuICAgICAgPC9Td2lwZWFibGVEcmF3ZXI+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbkRyYXdlcighb3BlbkRyYXdlcil9XHJcbiAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJJY29uQ29udGFpbmVyfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJJY29ufSAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8Lz5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RWxldmF0aW9uU2Nyb2xsPlxyXG4gICAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBkaXNhYmxlR3V0dGVyc1xyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEyODBweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogbWF0Y2hlcyA/IFwiMCAxNnB4XCIgOiBcIjI0cHhcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+UHljaGVjaGU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAge21hdGNoZXMgPyBkcmF3ZXIgOiB0YWJzfVxyXG5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9FbGV2YXRpb25TY3JvbGw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyTWFyZ2lufSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9