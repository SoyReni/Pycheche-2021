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
    _jsxFileName = "D:\\Users\\Reni\\Documents\\GitHub\\Pycheche-IHM-21-22\\components\\layout\\Header.js",
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
      marginBottom: "5em"
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
  var matches = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__["default"])(theme.breakpoints.down("sm"));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      openDrawer = _useState[0],
      setOpenDrawer = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var path = data_routes__WEBPACK_IMPORTED_MODULE_9__["routes"];

  var tabs = __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    justify: "flex-end",
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
    anchor: "right",
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
        link = _ref2.link;
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
        lineNumber: 129,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
      disableTypography: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 15
      }
    }, __jsx(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
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
        lineNumber: 139,
        columnNumber: 19
      }
    }, name))));
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    onClick: function onClick() {
      return setOpenDrawer(!openDrawer);
    },
    disableRipple: true,
    className: classes.drawerIconContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.drawerIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  })));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(ElevationScroll, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], {
    className: classes.appBar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 169,
      columnNumber: 11
    }
  }, __jsx(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    className: classes.logo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, "Pycheche")), matches ? drawer : tabs))), __jsx("div", {
    className: classes.toolbarMargin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkVsZXZhdGlvblNjcm9sbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJlbGV2YXRpb24iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0b29sYmFyTWFyZ2luIiwibWl4aW5zIiwidG9vbGJhciIsIm1hcmdpbkJvdHRvbSIsImJyZWFrcG9pbnRzIiwiZG93biIsImxvZ28iLCJjb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwid2lkdGgiLCJmb250U2l6ZSIsImRyYXdlckljb25Db250YWluZXIiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImRyYXdlckljb24iLCJoZWlnaHQiLCJkcmF3ZXIiLCJsaW5rIiwiaW5mbyIsIkhlYWRlciIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsImlPUyIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaGVzIiwidXNlTWVkaWFRdWVyeSIsInVzZVN0YXRlIiwib3BlbkRyYXdlciIsInNldE9wZW5EcmF3ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRoIiwicm91dGVzIiwidGFicyIsIm1hcCIsIm5hbWUiLCJmb250V2VpZ2h0IiwicGF0aG5hbWUiLCJib3JkZXJCb3R0b20iLCJwYXBlciIsImFwcEJhciIsIm1heFdpZHRoIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBV0E7QUFFQTtBQUVBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUE7O0FBQUEsTUFD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L2luZGV4LjE5YzAyYWQ2YzA4YThiMGJiZDZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwiY29tcG9uZW50cy9MaW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgQXBwQmFyLFxyXG4gIFRvb2xiYXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBTd2lwZWFibGVEcmF3ZXIsXHJcbiAgSWNvbkJ1dHRvbixcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuXHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuXHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCJkYXRhL3JvdXRlc1wiO1xyXG5cclxuZnVuY3Rpb24gRWxldmF0aW9uU2Nyb2xsKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkOiAwLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XHJcbiAgICBlbGV2YXRpb246IHRyaWdnZXIgPyA0IDogMCxcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgdG9vbGJhck1hcmdpbjoge1xyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgICBtYXJnaW5Cb3R0b206IGA1ZW1gLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIjRlbVwiLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwieHNcIildOiB7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIyZW1cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIHdpZHRoOiBcIm1heC1jb250ZW50XCIsXHJcbiAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICB9LFxyXG4gIGRyYXdlckljb25Db250YWluZXI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRyYXdlckljb246IHtcclxuICAgIGhlaWdodDogYDUwcHhgLFxyXG4gICAgd2lkdGg6IGA1MHB4YCxcclxuICAgIGNvbG9yOiBgI2ZmZmAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xyXG4gICAgICBoZWlnaHQ6IGA0MHB4YCxcclxuICAgICAgd2lkdGg6IGA0MHB4YCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkcmF3ZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIHBhZGRpbmc6IFwiMCA2ZW1cIixcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGZvbnRTaXplOiBcIjEuMjVlbVwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5pbmZvLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IGlPUyA9IHByb2Nlc3MuYnJvd3NlciAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICBjb25zdCBtYXRjaGVzID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xyXG5cclxuICBjb25zdCBbb3BlbkRyYXdlciwgc2V0T3BlbkRyYXdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBwYXRoID0gcm91dGVzO1xyXG5cclxuICBjb25zdCB0YWJzID0gKFxyXG4gICAgPD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgIHtwYXRoLm1hcCgoeyBuYW1lLCBsaW5rIH0pID0+IChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtsaW5rfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua30+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSBsaW5rICYmIFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJCb3R0b206IHJvdXRlci5wYXRobmFtZSA9PT0gbGluayAmJiBcIjFweCBzb2xpZCAjNzU3Y2U4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG4gIGNvbnN0IGRyYXdlciA9IChcclxuICAgIDw+XHJcbiAgICAgIDxTd2lwZWFibGVEcmF3ZXJcclxuICAgICAgICBkaXNhYmxlQmFja2Ryb3BUcmFuc2l0aW9uPXshaU9TfVxyXG4gICAgICAgIGRpc2FibGVEaXNjb3Zlcnk9e2lPU31cclxuICAgICAgICBvcGVuPXtvcGVuRHJhd2VyfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW5EcmF3ZXIoZmFsc2UpfVxyXG4gICAgICAgIG9uT3Blbj17KCkgPT4gc2V0T3BlbkRyYXdlcih0cnVlKX1cclxuICAgICAgICBjbGFzc2VzPXt7IHBhcGVyOiBjbGFzc2VzLmRyYXdlciB9fVxyXG4gICAgICAgIGFuY2hvcj1cInJpZ2h0XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJNYXJnaW59IC8+XHJcbiAgICAgICAgPExpc3QgZGlzYWJsZVBhZGRpbmc+XHJcbiAgICAgICAgICB7cGF0aC5tYXAoKHsgbmFtZSwgbGluayB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgIGtleT17bGlua31cclxuICAgICAgICAgICAgICBkaXZpZGVyXHJcbiAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0T3BlbkRyYXdlcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgZGlzYWJsZVR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiKDEwNyAxMDcgMTA3KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogcm91dGVyLnBhdGhuYW1lID09PSBsaW5rICYmIFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9MaXN0PlxyXG4gICAgICA8L1N3aXBlYWJsZURyYXdlcj5cclxuICAgICAgPEljb25CdXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuRHJhd2VyKCFvcGVuRHJhd2VyKX1cclxuICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckljb25Db250YWluZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckljb259IC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxFbGV2YXRpb25TY3JvbGw+XHJcbiAgICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIGRpc2FibGVHdXR0ZXJzXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMTI4MHB4XCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBtYXRjaGVzID8gXCIwIDE2cHhcIiA6IFwiMjRweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5QeWNoZWNoZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7bWF0Y2hlcyA/IGRyYXdlciA6IHRhYnN9XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDwvRWxldmF0aW9uU2Nyb2xsPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhck1hcmdpbn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==