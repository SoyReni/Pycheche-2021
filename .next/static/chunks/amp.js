<<<<<<< Updated upstream
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{
=======
_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js?c973":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
>>>>>>> Stashed changes

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js?4ea4":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
<<<<<<< Updated upstream
/***/ (function(module) {
=======
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js?a34a":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js?96cf");
>>>>>>> Stashed changes

eval("function _interopRequireDefault(obj) {\r\n  return obj && obj.__esModule ? obj : {\r\n    \"default\": obj\r\n  };\r\n}\r\n\r\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzP2VlOGMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgXCJkZWZhdWx0XCI6IG9ialxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
<<<<<<< Updated upstream
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/***/ (function(module) {
=======
/*!**************************************************************************!*\
  !*** ../Pycheche-2021/node_modules/next/dist/build/polyfills/unfetch.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map
>>>>>>> Stashed changes

eval("module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||\"get\",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\\S\\n]*([\\s\\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+\",\"+t:t}),t(a())},s.onerror=r,s.withCredentials=\"include\"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};\r\n//# sourceMappingURL=unfetch.js.map\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLDZCQUE2QixjQUFjLDJCQUEyQix1Q0FBdUMsY0FBYyxPQUFPLGlHQUFpRyx1Q0FBdUMsaUJBQWlCLG1EQUFtRCxpQkFBaUIsK0NBQStDLGtCQUFrQixnQkFBZ0IsU0FBUyxvQkFBb0IsU0FBUyxpQkFBaUIsMEJBQTBCLGlCQUFpQiwrQkFBK0IsOERBQThELGlGQUFpRiwrREFBK0QsU0FBUyxxR0FBcUcscUJBQXFCO0FBQ2w0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoLmpzP2I5MzUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj1ufHx7fSxuZXcgUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBzPW5ldyBYTUxIdHRwUmVxdWVzdCxvPVtdLHU9W10saT17fSxhPWZ1bmN0aW9uKCl7cmV0dXJue29rOjI9PShzLnN0YXR1cy8xMDB8MCksc3RhdHVzVGV4dDpzLnN0YXR1c1RleHQsc3RhdHVzOnMuc3RhdHVzLHVybDpzLnJlc3BvbnNlVVJMLHRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMucmVzcG9uc2VUZXh0KX0sanNvbjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoSlNPTi5wYXJzZShzLnJlc3BvbnNlVGV4dCkpfSxibG9iOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcy5yZXNwb25zZV0pKX0sY2xvbmU6YSxoZWFkZXJzOntrZXlzOmZ1bmN0aW9uKCl7cmV0dXJuIG99LGVudHJpZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBpW2UudG9Mb3dlckNhc2UoKV19LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpaW4gaX19fX07Zm9yKHZhciBsIGluIHMub3BlbihuLm1ldGhvZHx8XCJnZXRcIixlLCEwKSxzLm9ubG9hZD1mdW5jdGlvbigpe3MuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLGZ1bmN0aW9uKGUsbix0KXtvLnB1c2gobj1uLnRvTG93ZXJDYXNlKCkpLHUucHVzaChbbix0XSksaVtuXT1pW25dP2lbbl0rXCIsXCIrdDp0fSksdChhKCkpfSxzLm9uZXJyb3I9cixzLndpdGhDcmVkZW50aWFscz1cImluY2x1ZGVcIj09bi5jcmVkZW50aWFscyxuLmhlYWRlcnMpcy5zZXRSZXF1ZXN0SGVhZGVyKGwsbi5oZWFkZXJzW2xdKTtzLnNlbmQobi5ib2R5fHxudWxsKX0pfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5qcy5tYXBcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/polyfills/unfetch.js\n");

/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar _cUsersUsuarioDesktop7MoPycheche2021NodeModulesNextDistCompiledRegeneratorRuntimeRuntimeJs = _interopRequireDefault(__webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\"));\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nvar _interopRequireDefault1 = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nvar _unfetch = _interopRequireDefault1(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ \"./node_modules/next/dist/build/polyfills/unfetch.js\"));\nvar _eventSourcePolyfill = _interopRequireDefault1(__webpack_require__(/*! ./event-source-polyfill */ \"./node_modules/next/dist/client/dev/event-source-polyfill.js\"));\nvar _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ \"./node_modules/next/dist/client/dev/error-overlay/eventsource.js\");\nvar _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ \"./node_modules/next/dist/client/dev/on-demand-entries-utils.js\");\nvar _fouc = __webpack_require__(/*! ./fouc */ \"./node_modules/next/dist/client/dev/fouc.js\"); /* globals __webpack_hash__ */ \nif (!window.EventSource) {\n    window.EventSource = _eventSourcePolyfill.default;\n}\nvar data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);\nvar assetPrefix = data.assetPrefix, page = data.page;\nassetPrefix = assetPrefix || '';\nvar mostRecentHash = null; /* eslint-disable-next-line */ \nvar curHash = __webpack_require__.h();\nvar hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?\nfunction isUpdateAvailable() {\n    // It's a global variable injected by Webpack.\n    /* eslint-disable-next-line */ return mostRecentHash !== __webpack_require__.h();\n} // Webpack disallows updates in other states.\nfunction canApplyUpdates() {\n    return module.hot.status() === 'idle';\n} // This function reads code updates on the fly and hard\nfunction tryApplyUpdates() {\n    return _tryApplyUpdates.apply(this, arguments);\n}\nfunction _tryApplyUpdates() {\n    _tryApplyUpdates = // reloads the page when it has changed.\n    _asyncToGenerator(_cUsersUsuarioDesktop7MoPycheche2021NodeModulesNextDistCompiledRegeneratorRuntimeRuntimeJs.default.mark(function _callee() {\n        var res, jsonData, curPage, pageUpdated;\n        return _cUsersUsuarioDesktop7MoPycheche2021NodeModulesNextDistCompiledRegeneratorRuntimeRuntimeJs.default.wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!(!isUpdateAvailable() || !canApplyUpdates())) {\n                        _ctx.next = 2;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\");\n                case 2:\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return (0, _unfetch.default)(\"\".concat(hotUpdatePath).concat(curHash, \".hot-update.json\"));\n                case 5:\n                    res = _ctx.sent;\n                    _ctx.next = 8;\n                    return res.json();\n                case 8:\n                    jsonData = _ctx.sent;\n                    curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead\n                    pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function(mod) {\n                        return mod.indexOf(\"pages\".concat(curPage.substr(0, 1) === '/' ? curPage : \"/\".concat(curPage))) !== -1 || mod.indexOf(\"pages\".concat(curPage.substr(0, 1) === '/' ? curPage : \"/\".concat(curPage)).replace(/\\//g, '\\\\')) !== -1;\n                    });\n                    if (pageUpdated) {\n                        document.location.reload(true);\n                    } else {\n                        curHash = mostRecentHash;\n                    }\n                    _ctx.next = 18;\n                    break;\n                case 14:\n                    _ctx.prev = 14;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    console.error('Error occurred checking for update', _ctx.t0);\n                    document.location.reload(true);\n                case 18:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                14\n            ]\n        ]);\n    }));\n    return _tryApplyUpdates.apply(this, arguments);\n}\n(0, _eventsource.getEventSourceWrapper)({\n    path: \"\".concat(assetPrefix, \"/_next/webpack-hmr\")\n}).addMessageListener(function(event) {\n    if (event.data === '\\ud83d\\udc93') {\n        return;\n    }\n    try {\n        var message = JSON.parse(event.data);\n        if (message.action === 'sync' || message.action === 'built') {\n            if (!message.hash) {\n                return;\n            }\n            mostRecentHash = message.hash;\n            tryApplyUpdates();\n        } else if (message.action === 'reloadPage') {\n            document.location.reload(true);\n        }\n    } catch (ex) {\n        console.warn('Invalid HMR message: ' + event.data + '\\n' + ex);\n    }\n});\n(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function() {\n    return page;\n});\n(0, _fouc.displayContent)(); //# sourceMappingURL=amp-dev.js.map\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvYW1wLWRldi5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFDLEdBQUcsQ0FBQ0EsdUJBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQThDO0FBQUUsR0FBRyxDQUFDQyxRQUFRLEdBQUNGLHVCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhGQUFtQztBQUFHLEdBQUcsQ0FBQ0Usb0JBQW9CLEdBQUNILHVCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDZGQUF5QjtBQUFHLEdBQUcsQ0FBQ0csWUFBWSxHQUFDSCxtQkFBTyxDQUFDLHFHQUE2QjtBQUFFLEdBQUcsQ0FBQ0kscUJBQXFCLEdBQUNKLG1CQUFPLENBQUMsaUdBQTJCO0FBQUUsR0FBRyxDQUFDSyxLQUFLLEdBQUNMLG1CQUFPLENBQUMsMkRBQVEsRUFBRSxDQUE4QjtBQUFBLEVBQUUsR0FBRU0sTUFBTSxDQUFDQyxXQUFXLEVBQUMsQ0FBQ0Q7SUFBQUEsTUFBTSxDQUFDQyxXQUFXLEdBQUNMLG9CQUFvQixDQUFDTSxPQUFPO0FBQUMsQ0FBQztBQUFBLEdBQUssQ0FBQ0MsSUFBSSxHQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsQ0FBZSxnQkFBRUMsV0FBVztBQUFFLEdBQTJCQyxDQUF2QkEsV0FBVyxHQUFPTixJQUFJLENBQXRCTSxXQUFXLEVBQUNDLElBQUksR0FBRVAsSUFBSSxDQUFWTyxJQUFJO0FBQU9ELFdBQVcsR0FBQ0EsV0FBVyxJQUFFLENBQUU7QUFBQyxHQUFHLENBQUNFLGNBQWMsR0FBQyxJQUFJLENBQUMsQ0FBOEI7QUFBQSxHQUFHLENBQUNDLE9BQU8sR0FBQ0MsdUJBQWdCO0FBQUMsR0FBSyxDQUFDQyxhQUFhLEdBQUNMLFdBQVcsSUFBRUEsV0FBVyxDQUFDTSxRQUFRLENBQUMsQ0FBRyxNQUFFLENBQUUsSUFBQyxDQUFHLE1BQUUs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T0FBTyxDQUFDRSxJQUFJO1lBQUMxQixlQUFlO1FBQUcsQ0FBQyxNQUFLLEVBQUUsRUFBQ3dCLE9BQU8sQ0FBQ0MsTUFBTSxLQUFHLENBQVksYUFBQyxDQUFDeEM7WUFBQUEsUUFBUSxDQUFDK0IsUUFBUSxDQUFDQyxNQUFNLENBQUMsSUFBSTtRQUFFLENBQUM7SUFBQSxDQUFDLE1BQUssRUFBQ1UsRUFBRSxFQUFDLENBQUNUO1FBQUFBLE9BQU8sQ0FBQ1UsSUFBSSxDQUFDLENBQXVCLHlCQUFDTCxLQUFLLENBQUN6QyxJQUFJLEdBQUMsQ0FBSSxNQUFDNkMsRUFBRTtJQUFFLENBQUM7QUFBQSxDQUFDO0NBQUcsQ0FBQyxFQUFDbEQscUJBQXFCLENBQUNvRCxTQUFTLEVBQUV6QyxXQUFXLEVBQUMsUUFBUTtJQUFKQyxNQUFNLENBQU5BLElBQUk7O0NBQUcsQ0FBQyxFQUFDWCxLQUFLLENBQUNvRCxjQUFjLElBQ2wrQixDQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvYW1wLWRldi5qcz81Y2NmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX3VuZmV0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoXCIpKTt2YXIgX2V2ZW50U291cmNlUG9seWZpbGw9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ldmVudC1zb3VyY2UtcG9seWZpbGxcIikpO3ZhciBfZXZlbnRzb3VyY2U9cmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTt2YXIgX29uRGVtYW5kRW50cmllc1V0aWxzPXJlcXVpcmUoXCIuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzXCIpO3ZhciBfZm91Yz1yZXF1aXJlKFwiLi9mb3VjXCIpOy8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL2lmKCF3aW5kb3cuRXZlbnRTb3VyY2Upe3dpbmRvdy5FdmVudFNvdXJjZT1fZXZlbnRTb3VyY2VQb2x5ZmlsbC5kZWZhdWx0O31jb25zdCBkYXRhPUpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudCk7bGV0e2Fzc2V0UHJlZml4LHBhZ2V9PWRhdGE7YXNzZXRQcmVmaXg9YXNzZXRQcmVmaXh8fCcnO2xldCBtb3N0UmVjZW50SGFzaD1udWxsOy8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL2xldCBjdXJIYXNoPV9fd2VicGFja19oYXNoX187Y29uc3QgaG90VXBkYXRlUGF0aD1hc3NldFByZWZpeCsoYXNzZXRQcmVmaXguZW5kc1dpdGgoJy8nKT8nJzonLycpKydfbmV4dC9zdGF0aWMvd2VicGFjay8nOy8vIElzIHRoZXJlIGEgbmV3ZXIgdmVyc2lvbiBvZiB0aGlzIGNvZGUgYXZhaWxhYmxlP1xyXG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpey8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXHJcbi8vIEl0J3MgYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgYnkgV2VicGFjay5cclxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovcmV0dXJuIG1vc3RSZWNlbnRIYXNoIT09X193ZWJwYWNrX2hhc2hfXzt9Ly8gV2VicGFjayBkaXNhbGxvd3MgdXBkYXRlcyBpbiBvdGhlciBzdGF0ZXMuXHJcbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpe3JldHVybiBtb2R1bGUuaG90LnN0YXR1cygpPT09J2lkbGUnO30vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXHJcbi8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cclxuYXN5bmMgZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKCl7aWYoIWlzVXBkYXRlQXZhaWxhYmxlKCl8fCFjYW5BcHBseVVwZGF0ZXMoKSl7cmV0dXJuO310cnl7Y29uc3QgcmVzPWF3YWl0KDAsX3VuZmV0Y2guZGVmYXVsdCkoYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApO2NvbnN0IGpzb25EYXRhPWF3YWl0IHJlcy5qc29uKCk7Y29uc3QgY3VyUGFnZT1wYWdlPT09Jy8nPydpbmRleCc6cGFnZTsvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXHJcbmNvbnN0IHBhZ2VVcGRhdGVkPShBcnJheS5pc0FycmF5KGpzb25EYXRhLmMpP2pzb25EYXRhLmM6T2JqZWN0LmtleXMoanNvbkRhdGEuYykpLnNvbWUobW9kPT57cmV0dXJuIG1vZC5pbmRleE9mKGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwxKT09PScvJz9jdXJQYWdlOmAvJHtjdXJQYWdlfWB9YCkhPT0tMXx8bW9kLmluZGV4T2YoYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLDEpPT09Jy8nP2N1clBhZ2U6YC8ke2N1clBhZ2V9YH1gLnJlcGxhY2UoL1xcLy9nLCdcXFxcJykpIT09LTE7fSk7aWYocGFnZVVwZGF0ZWQpe2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTt9ZWxzZXtjdXJIYXNoPW1vc3RSZWNlbnRIYXNoO319Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJyxlcnIpO2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTt9fSgwLF9ldmVudHNvdXJjZS5nZXRFdmVudFNvdXJjZVdyYXBwZXIpKHtwYXRoOmAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcmB9KS5hZGRNZXNzYWdlTGlzdGVuZXIoZXZlbnQ9PntpZihldmVudC5kYXRhPT09J1xcdUQ4M0RcXHVEQzkzJyl7cmV0dXJuO310cnl7Y29uc3QgbWVzc2FnZT1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO2lmKG1lc3NhZ2UuYWN0aW9uPT09J3N5bmMnfHxtZXNzYWdlLmFjdGlvbj09PSdidWlsdCcpe2lmKCFtZXNzYWdlLmhhc2gpe3JldHVybjt9bW9zdFJlY2VudEhhc2g9bWVzc2FnZS5oYXNoO3RyeUFwcGx5VXBkYXRlcygpO31lbHNlIGlmKG1lc3NhZ2UuYWN0aW9uPT09J3JlbG9hZFBhZ2UnKXtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fX1jYXRjaChleCl7Y29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnK2V2ZW50LmRhdGErJ1xcbicrZXgpO319KTsoMCxfb25EZW1hbmRFbnRyaWVzVXRpbHMuc2V0dXBQaW5nKShhc3NldFByZWZpeCwoKT0+cGFnZSk7KDAsX2ZvdWMuZGlzcGxheUNvbnRlbnQpKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1kZXYuanMubWFwIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3VuZmV0Y2giLCJfZXZlbnRTb3VyY2VQb2x5ZmlsbCIsIl9ldmVudHNvdXJjZSIsIl9vbkRlbWFuZEVudHJpZXNVdGlscyIsIl9mb3VjIiwid2luZG93IiwiRXZlbnRTb3VyY2UiLCJkZWZhdWx0IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImFzc2V0UHJlZml4IiwicGFnZSIsIm1vc3RSZWNlbnRIYXNoIiwiY3VySGFzaCIsIl9fd2VicGFja19oYXNoX18iLCJob3RVcGRhdGVQYXRoIiwiZW5kc1dpdGgiLCJpc1VwZGF0ZUF2YWlsYWJsZSIsImNhbkFwcGx5VXBkYXRlcyIsIm1vZHVsZSIsImhvdCIsInN0YXR1cyIsInRyeUFwcGx5VXBkYXRlcyIsInJlcyIsImpzb25EYXRhIiwiY3VyUGFnZSIsInBhZ2VVcGRhdGVkIiwianNvbiIsIkFycmF5IiwiaXNBcnJheSIsImMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIm1vZCIsImluZGV4T2YiLCJzdWJzdHIiLCJyZXBsYWNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRFdmVudFNvdXJjZVdyYXBwZXIiLCJwYXRoIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZXZlbnQiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFzaCIsImV4Iiwid2FybiIsInNldHVwUGluZyIsImRpc3BsYXlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/client/dev/amp-dev.js\n");
=======
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js?a34a");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js?c973");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js?4ea4");

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return (0, _unfetch["default"])("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.getEventSourceWrapper)({
  path: "".concat(assetPrefix, "/_next/webpack-hmr")
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js?62e4")(module)))
>>>>>>> Stashed changes

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nexports.__esModule = true;\nexports.getEventSourceWrapper = getEventSourceWrapper;\nvar eventCallbacks = [];\nfunction EventSourceWrapper(options) {\n    var init = function init() {\n        source = new window.EventSource(options.path);\n        source.onopen = handleOnline;\n        source.onerror = handleDisconnect;\n        source.onmessage = handleMessage;\n    };\n    var handleOnline = function handleOnline() {\n        if (options.log) console.log('[HMR] connected');\n        lastActivity = new Date();\n    };\n    var handleMessage = function handleMessage(event) {\n        lastActivity = new Date();\n        for(var i = 0; i < listeners.length; i++){\n            listeners[i](event);\n        }\n        eventCallbacks.forEach(function(cb) {\n            if (!cb.unfiltered && event.data.indexOf('action') === -1) return;\n            cb(event);\n        });\n    };\n    var handleDisconnect = function handleDisconnect() {\n        clearInterval(timer);\n        source.close();\n        setTimeout(init, options.timeout);\n    };\n    var source;\n    var lastActivity = new Date();\n    var listeners = [];\n    if (!options.timeout) {\n        options.timeout = 20 * 1000;\n    }\n    init();\n    var timer = setInterval(function() {\n        if (new Date() - lastActivity > options.timeout) {\n            handleDisconnect();\n        }\n    }, options.timeout / 2);\n    return {\n        close: function() {\n            clearInterval(timer);\n            source.close();\n        },\n        addMessageListener: function addMessageListener(fn) {\n            listeners.push(fn);\n        }\n    };\n}\n_c = EventSourceWrapper;\nfunction getEventSourceWrapper(options) {\n    if (!options.ondemand) {\n        return {\n            addMessageListener: function(cb) {\n                eventCallbacks.push(cb);\n            }\n        };\n    }\n    return EventSourceWrapper(options);\n} //# sourceMappingURL=eventsource.js.map\nvar _c;\n$RefreshReg$(_c, \"EventSourceWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQVk7QUFBQ0Esa0JBQWtCLEdBQUMsSUFBSTtBQUFDQSw2QkFBNkIsR0FBQ0UscUJBQXFCO0FBQUMsR0FBSyxDQUFDQyxjQUFjLEdBQUMsQ0FBQyxDQUFDO1NBQVVDLGtCQUFrQixDQUFDQyxPQUFPLEVBQUMsQ0FBQztRQUE0T0MsSUFBSSxHQUFiLFFBQVEsQ0FBQ0EsSUFBSSxHQUFFLENBQUNDO1FBQUFBLE1BQU0sR0FBQyxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDSixPQUFPLENBQUNLLElBQUk7UUFBRUgsTUFBTSxDQUFDSSxNQUFNLEdBQUNDLFlBQVk7UUFBQ0wsTUFBTSxDQUFDTSxPQUFPLEdBQUNDLGdCQUFnQjtRQUFDUCxNQUFNLENBQUNRLFNBQVMsR0FBQ0MsYUFBYTtJQUFDLENBQUM7UUFBU0osWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksR0FBRSxDQUFDO1FBQUEsRUFBRSxFQUFDUCxPQUFPLENBQUNZLEdBQUcsRUFBQ0MsT0FBTyxDQUFDRCxHQUFHLENBQUMsQ0FBaUI7UUFBRUUsWUFBWSxHQUFDLEdBQUcsQ0FBQ0MsSUFBSTtJQUFHLENBQUM7UUFBU0osYUFBYSxHQUF0QixRQUFRLENBQUNBLGFBQWEsQ0FBQ0ssS0FBSyxFQUFDLENBQUNGO1FBQUFBLFlBQVksR0FBQyxHQUFHLENBQUNDLElBQUk7UUFBRyxHQUFHLENBQUMsR0FBRyxDQUFDRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFDRixDQUFDLEdBQUcsQ0FBQ0M7WUFBQUEsU0FBUyxDQUFDRCxDQUFDLEVBQUVELEtBQUs7UUFBRSxDQUFDbEI7UUFBQUEsY0FBYyxDQUFDc0IsT0FBTyxDQUFDQyxRQUFRLENBQVJBLEVBQUUsRUFBRSxDQUFDO1lBQUEsRUFBRSxHQUFFQSxFQUFFLENBQUNDLFVBQVUsSUFBRU4sS0FBSyxDQUFDTyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFRLGNBQUssQ0FBQyxFQUFDLE1BQU07WUFBQ0gsRUFBRSxDQUFDTCxLQUFLO1FBQUUsQ0FBQztJQUFFLENBQUM7UUFBU1AsZ0JBQWdCLEdBQXpCLFFBQVEsQ0FBQ0EsZ0JBQWdCLEdBQUUsQ0FBQ2dCO1FBQUFBLGFBQWEsQ0FBQ0MsS0FBSztRQUFFeEIsTUFBTSxDQUFDeUIsS0FBSztRQUFHQyxVQUFVLENBQUMzQixJQUFJLEVBQUNELE9BQU8sQ0FBQzZCLE9BQU87SUFBRSxDQUFDO0lBQWh4QixHQUFHLENBQUMzQixNQUFNO0lBQUMsR0FBRyxDQUFDWSxZQUFZLEdBQUMsR0FBRyxDQUFDQyxJQUFJO0lBQUcsR0FBRyxDQUFDRyxTQUFTLEdBQUMsQ0FBQyxDQUFDO0lBQUMsRUFBRSxHQUFFbEIsT0FBTyxDQUFDNkIsT0FBTyxFQUFDLENBQUM3QjtRQUFBQSxPQUFPLENBQUM2QixPQUFPLEdBQUMsRUFBRSxHQUFDLElBQUk7SUFBQyxDQUFDNUI7SUFBQUEsSUFBSTtJQUFHLEdBQUcsQ0FBQ3lCLEtBQUssR0FBQ0ksV0FBVyxDQUFDLFFBQVEsR0FBRSxDQUFDO1FBQUEsRUFBRSxFQUFDLEdBQUcsQ0FBQ2YsSUFBSSxLQUFHRCxZQUFZLEdBQUNkLE9BQU8sQ0FBQzZCLE9BQU8sRUFBQyxDQUFDcEI7WUFBQUEsZ0JBQWdCO1FBQUcsQ0FBQztJQUFBLENBQUMsRUFBQ1QsT0FBTyxDQUFDNkIsT0FBTyxHQUFDLENBQUM7SUFBK2lCLE1BQU0sRUFBQ0Y7UUFBQUEsS0FBSyxFQUFDLFFBQVEsR0FBSixDQUFDRjtZQUFBQSxhQUFhLENBQUNDLEtBQUs7WUFBRXhCLE1BQU0sQ0FBQ3lCLEtBQUs7UUFBRyxDQUFDO1FBQUNJLGtCQUFrQixFQUFDLFFBQVEsQ0FBM0JBLGtCQUFrQixDQUFVQyxFQUFFLEVBQUMsQ0FBQ2Q7WUFBQUEsU0FBUyxDQUFDZSxJQUFJLENBQUNELEVBQUU7UUFBRSxDQUFDO0lBQUEsQ0FBQztBQUFDLENBQUM7S0FBMzVCakMsa0JBQWtCO1NBQWs1QkYscUJBQXFCLENBQUNHLE9BQU8sRUFBQyxDQUFDO0lBQUEsRUFBRSxHQUFFQSxPQUFPLENBQUNrQyxRQUFRLEVBQUMsQ0FBQztRQUFBLE1BQU0sRUFBQ0g7WUFBQUEsa0JBQWtCLEVBQUNWLFFBQVEsQ0FBUkEsRUFBRSxFQUFFLENBQUN2QjtnQkFBQUEsY0FBYyxDQUFDbUMsSUFBSSxDQUFDWixFQUFFO1lBQUUsQ0FBQztRQUFBLENBQUM7SUFBQyxDQUFDO0lBQUEsTUFBTSxDQUFDdEIsa0JBQWtCLENBQUNDLE9BQU87QUFBRSxDQUFDLENBQzNvQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcz9lMWVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyPWdldEV2ZW50U291cmNlV3JhcHBlcjtjb25zdCBldmVudENhbGxiYWNrcz1bXTtmdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucyl7dmFyIHNvdXJjZTt2YXIgbGFzdEFjdGl2aXR5PW5ldyBEYXRlKCk7dmFyIGxpc3RlbmVycz1bXTtpZighb3B0aW9ucy50aW1lb3V0KXtvcHRpb25zLnRpbWVvdXQ9MjAqMTAwMDt9aW5pdCgpO3ZhciB0aW1lcj1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2lmKG5ldyBEYXRlKCktbGFzdEFjdGl2aXR5Pm9wdGlvbnMudGltZW91dCl7aGFuZGxlRGlzY29ubmVjdCgpO319LG9wdGlvbnMudGltZW91dC8yKTtmdW5jdGlvbiBpbml0KCl7c291cmNlPW5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtzb3VyY2Uub25vcGVuPWhhbmRsZU9ubGluZTtzb3VyY2Uub25lcnJvcj1oYW5kbGVEaXNjb25uZWN0O3NvdXJjZS5vbm1lc3NhZ2U9aGFuZGxlTWVzc2FnZTt9ZnVuY3Rpb24gaGFuZGxlT25saW5lKCl7aWYob3B0aW9ucy5sb2cpY29uc29sZS5sb2coJ1tITVJdIGNvbm5lY3RlZCcpO2xhc3RBY3Rpdml0eT1uZXcgRGF0ZSgpO31mdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KXtsYXN0QWN0aXZpdHk9bmV3IERhdGUoKTtmb3IodmFyIGk9MDtpPGxpc3RlbmVycy5sZW5ndGg7aSsrKXtsaXN0ZW5lcnNbaV0oZXZlbnQpO31ldmVudENhbGxiYWNrcy5mb3JFYWNoKGNiPT57aWYoIWNiLnVuZmlsdGVyZWQmJmV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJyk9PT0tMSlyZXR1cm47Y2IoZXZlbnQpO30pO31mdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCl7Y2xlYXJJbnRlcnZhbCh0aW1lcik7c291cmNlLmNsb3NlKCk7c2V0VGltZW91dChpbml0LG9wdGlvbnMudGltZW91dCk7fXJldHVybntjbG9zZTooKT0+e2NsZWFySW50ZXJ2YWwodGltZXIpO3NvdXJjZS5jbG9zZSgpO30sYWRkTWVzc2FnZUxpc3RlbmVyOmZ1bmN0aW9uKGZuKXtsaXN0ZW5lcnMucHVzaChmbik7fX07fWZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXtpZighb3B0aW9ucy5vbmRlbWFuZCl7cmV0dXJue2FkZE1lc3NhZ2VMaXN0ZW5lcjpjYj0+e2V2ZW50Q2FsbGJhY2tzLnB1c2goY2IpO319O31yZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpO31cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnRzb3VyY2UuanMubWFwIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwiZXZlbnRDYWxsYmFja3MiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJvcHRpb25zIiwiaW5pdCIsInNvdXJjZSIsIndpbmRvdyIsIkV2ZW50U291cmNlIiwicGF0aCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJoYW5kbGVEaXNjb25uZWN0Iiwib25tZXNzYWdlIiwiaGFuZGxlTWVzc2FnZSIsImxvZyIsImNvbnNvbGUiLCJsYXN0QWN0aXZpdHkiLCJEYXRlIiwiZXZlbnQiLCJpIiwibGlzdGVuZXJzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImNiIiwidW5maWx0ZXJlZCIsImRhdGEiLCJpbmRleE9mIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwidGltZW91dCIsInNldEludGVydmFsIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZm4iLCJwdXNoIiwib25kZW1hbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/client/dev/error-overlay/eventsource.js\n");
=======
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js?62e4")(module)))
>>>>>>> Stashed changes

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nexports.__esModule = true;\nexports[\"default\"] = void 0;\nvar _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ \"./node_modules/next/dist/build/polyfills/unfetch.js\")); /* eslint-disable */  // Improved version of https://github.com/Yaffle/EventSource/\n// Available under MIT License (MIT)\n// Only tries to support IE11 and nothing below\nvar document = window.document;\nvar Response = window.Response;\nvar TextDecoder = window.TextDecoder;\nvar TextEncoder = window.TextEncoder;\nvar AbortController = window.AbortController;\nif (AbortController == undefined) {\n    AbortController = function AbortController() {\n        this.signal = null;\n        this.abort = function() {};\n    };\n}\nfunction TextDecoderPolyfill() {\n    this.bitsNeeded = 0;\n    this.codePoint = 0;\n}\n_c = TextDecoderPolyfill;\nTextDecoderPolyfill.prototype.decode = function(octets) {\n    var valid = function valid(codePoint, shift, octetsCount) {\n        if (octetsCount === 1) {\n            return codePoint >= 128 >> shift && codePoint << shift <= 2047;\n        }\n        if (octetsCount === 2) {\n            return codePoint >= 2048 >> shift && codePoint << shift <= 55295 || codePoint >= 57344 >> shift && codePoint << shift <= 65535;\n        }\n        if (octetsCount === 3) {\n            return codePoint >= 65536 >> shift && codePoint << shift <= 1114111;\n        }\n        throw new Error();\n    };\n    var octetsCount1 = function octetsCount1(bitsNeeded, codePoint) {\n        if (bitsNeeded === 6 * 1) {\n            return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;\n        }\n        if (bitsNeeded === 6 * 2) {\n            return codePoint > 15 ? 3 : 2;\n        }\n        if (bitsNeeded === 6 * 3) {\n            return 3;\n        }\n        throw new Error();\n    };\n    var REPLACER = 65533;\n    var string = '';\n    var bitsNeeded1 = this.bitsNeeded;\n    var codePoint1 = this.codePoint;\n    for(var i = 0; i < octets.length; i += 1){\n        var octet = octets[i];\n        if (bitsNeeded1 !== 0) {\n            if (octet < 128 || octet > 191 || !valid(codePoint1 << 6 | octet & 63, bitsNeeded1 - 6, octetsCount1(bitsNeeded1, codePoint1))) {\n                bitsNeeded1 = 0;\n                codePoint1 = REPLACER;\n                string += String.fromCharCode(codePoint1);\n            }\n        }\n        if (bitsNeeded1 === 0) {\n            if (octet >= 0 && octet <= 127) {\n                bitsNeeded1 = 0;\n                codePoint1 = octet;\n            } else if (octet >= 192 && octet <= 223) {\n                bitsNeeded1 = 6 * 1;\n                codePoint1 = octet & 31;\n            } else if (octet >= 224 && octet <= 239) {\n                bitsNeeded1 = 6 * 2;\n                codePoint1 = octet & 15;\n            } else if (octet >= 240 && octet <= 247) {\n                bitsNeeded1 = 6 * 3;\n                codePoint1 = octet & 7;\n            } else {\n                bitsNeeded1 = 0;\n                codePoint1 = REPLACER;\n            }\n            if (bitsNeeded1 !== 0 && !valid(codePoint1, bitsNeeded1, octetsCount1(bitsNeeded1, codePoint1))) {\n                bitsNeeded1 = 0;\n                codePoint1 = REPLACER;\n            }\n        } else {\n            bitsNeeded1 -= 6;\n            codePoint1 = codePoint1 << 6 | octet & 63;\n        }\n        if (bitsNeeded1 === 0) {\n            if (codePoint1 <= 65535) {\n                string += String.fromCharCode(codePoint1);\n            } else {\n                string += String.fromCharCode(55296 + (codePoint1 - 65535 - 1 >> 10));\n                string += String.fromCharCode(56320 + (codePoint1 - 65535 - 1 & 1023));\n            }\n        }\n    }\n    this.bitsNeeded = bitsNeeded1;\n    this.codePoint = codePoint1;\n    return string;\n}; // Firefox < 38 throws an error with stream option\nvar supportsStreamOption = function supportsStreamOption() {\n    try {\n        return new TextDecoder().decode(new TextEncoder().encode('test'), {\n            stream: true\n        }) === 'test';\n    } catch (error) {\n        console.log(error);\n    }\n    return false;\n}; // IE, Edge\nif (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {\n    TextDecoder = TextDecoderPolyfill;\n}\nvar k = function k() {};\nfunction XHRWrapper(xhr) {\n    this.withCredentials = false;\n    this.responseType = '';\n    this.readyState = 0;\n    this.status = 0;\n    this.statusText = '';\n    this.responseText = '';\n    this.onprogress = k;\n    this.onreadystatechange = k;\n    this._contentType = '';\n    this._xhr = xhr;\n    this._sendTimeout = 0;\n    this._abort = k;\n}\n_c1 = XHRWrapper;\nXHRWrapper.prototype.open = function(method, url) {\n    this._abort(true);\n    var that = this;\n    var xhr = this._xhr;\n    var state = 1;\n    var timeout = 0;\n    this._abort = function(silent) {\n        if (that._sendTimeout !== 0) {\n            clearTimeout(that._sendTimeout);\n            that._sendTimeout = 0;\n        }\n        if (state === 1 || state === 2 || state === 3) {\n            state = 4;\n            xhr.onload = k;\n            xhr.onerror = k;\n            xhr.onabort = k;\n            xhr.onprogress = k;\n            xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event\n            // Opera < 10: XMLHttpRequest#abort() does not fire any event\n            xhr.abort();\n            if (timeout !== 0) {\n                clearTimeout(timeout);\n                timeout = 0;\n            }\n            if (!silent) {\n                that.readyState = 4;\n                that.onreadystatechange();\n            }\n        }\n        state = 0;\n    };\n    var onStart = function onStart() {\n        if (state === 1) {\n            var status = 0;\n            var statusText = '';\n            var contentType = undefined;\n            if (!('contentType' in xhr)) {\n                try {\n                    status = xhr.status;\n                    statusText = xhr.statusText;\n                    contentType = xhr.getResponseHeader('Content-Type');\n                } catch (error) {\n                    // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2\n                    // https://bugs.webkit.org/show_bug.cgi?id=29121\n                    status = 0;\n                    statusText = '';\n                    contentType = undefined; // Firefox < 14, Chrome ?, Safari ?\n                // https://bugs.webkit.org/show_bug.cgi?id=29658\n                // https://bugs.webkit.org/show_bug.cgi?id=77854\n                }\n            } else {\n                status = 200;\n                statusText = 'OK';\n                contentType = xhr.contentType;\n            }\n            if (status !== 0) {\n                state = 2;\n                that.readyState = 2;\n                that.status = status;\n                that.statusText = statusText;\n                that._contentType = contentType;\n                that.onreadystatechange();\n            }\n        }\n    };\n    var onProgress = function onProgress() {\n        onStart();\n        if (state === 2 || state === 3) {\n            state = 3;\n            var responseText = '';\n            try {\n                responseText = xhr.responseText;\n            } catch (error) {}\n            that.readyState = 3;\n            that.responseText = responseText;\n            that.onprogress();\n        }\n    };\n    var onFinish = function onFinish() {\n        // IE 8 fires \"onload\" without \"onprogress\"\n        onProgress();\n        if (state === 1 || state === 2 || state === 3) {\n            state = 4;\n            if (timeout !== 0) {\n                clearTimeout(timeout);\n                timeout = 0;\n            }\n            that.readyState = 4;\n            that.onreadystatechange();\n        }\n    };\n    var onReadyStateChange = function onReadyStateChange() {\n        if (xhr != undefined) {\n            if (xhr.readyState === 4) {\n                onFinish();\n            } else if (xhr.readyState === 3) {\n                onProgress();\n            } else if (xhr.readyState === 2) {\n                onStart();\n            }\n        }\n    };\n    var onTimeout1 = function onTimeout() {\n        timeout = setTimeout(function() {\n            onTimeout();\n        }, 500);\n        if (xhr.readyState === 3) {\n            onProgress();\n        }\n    }; // XDomainRequest#abort removes onprogress, onerror, onload\n    xhr.onload = onFinish;\n    xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort\n    // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596\n    // https://bugzilla.mozilla.org/show_bug.cgi?id=880200\n    // https://code.google.com/p/chromium/issues/detail?id=153570\n    // IE 8 fires \"onload\" without \"onprogress\n    xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723\n    if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {\n        xhr.onprogress = onProgress;\n    } // IE 8 - 9 (XMLHTTPRequest)\n    // Opera < 12\n    // Firefox < 3.5\n    // Firefox 3.5 - 3.6 - ? < 9.0\n    // onprogress is not fired sometimes or delayed\n    // see also #64\n    xhr.onreadystatechange = onReadyStateChange;\n    if ('contentType' in xhr) {\n        url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';\n    }\n    xhr.open(method, url, true);\n    if ('readyState' in xhr) {\n        // #91\n        timeout = setTimeout(function() {\n            onTimeout1();\n        }, 0);\n    }\n};\nXHRWrapper.prototype.abort = function() {\n    this._abort(false);\n};\nXHRWrapper.prototype.getResponseHeader = function(name) {\n    return this._contentType;\n};\nXHRWrapper.prototype.setRequestHeader = function(name, value) {\n    var xhr = this._xhr;\n    if ('setRequestHeader' in xhr) {\n        xhr.setRequestHeader(name, value);\n    }\n};\nXHRWrapper.prototype.getAllResponseHeaders = function() {\n    return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';\n};\nXHRWrapper.prototype.send = function() {\n    if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {\n        var that = this;\n        that._sendTimeout = setTimeout(function() {\n            that._sendTimeout = 0;\n            that.send();\n        }, 4);\n        return;\n    }\n    var xhr = this._xhr; // withCredentials should be set after \"open\" for Safari and Chrome (< 19 ?)\n    xhr.withCredentials = this.withCredentials;\n    xhr.responseType = this.responseType;\n    try {\n        xhr.send(undefined);\n    } catch (error1) {\n        throw error1;\n    }\n};\nfunction toLowerCase(name) {\n    return name.replace(/[A-Z]/g, function(c) {\n        return String.fromCharCode(c.charCodeAt(0) + 32);\n    });\n}\nfunction HeadersPolyfill(all) {\n    var map = Object.create(null);\n    var array = all.split('\\r\\n');\n    for(var i = 0; i < array.length; i += 1){\n        var line = array[i];\n        var parts = line.split(': ');\n        var name = parts.shift();\n        var value = parts.join(': ');\n        map[toLowerCase(name)] = value;\n    }\n    this._map = map;\n}\n_c2 = HeadersPolyfill;\nHeadersPolyfill.prototype.get = function(name) {\n    return this._map[toLowerCase(name)];\n};\nfunction XHRTransport() {}\n_c3 = XHRTransport;\nXHRTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers1) {\n    xhr.open('GET', url);\n    var offset = 0;\n    xhr.onprogress = function() {\n        var responseText = xhr.responseText;\n        var chunk = responseText.slice(offset);\n        offset += chunk.length;\n        onProgressCallback(chunk);\n    };\n    xhr.onreadystatechange = function() {\n        if (xhr.readyState === 2) {\n            var status = xhr.status;\n            var statusText = xhr.statusText;\n            var contentType = xhr.getResponseHeader('Content-Type');\n            var headers = xhr.getAllResponseHeaders();\n            onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function() {\n                xhr.abort();\n            });\n        } else if (xhr.readyState === 4) {\n            onFinishCallback();\n        }\n    };\n    xhr.withCredentials = withCredentials;\n    xhr.responseType = 'text';\n    for(var name in headers1){\n        if (Object.prototype.hasOwnProperty.call(headers1, name)) {\n            xhr.setRequestHeader(name, headers1[name]);\n        }\n    }\n    xhr.send();\n};\nfunction HeadersWrapper(headers) {\n    this._headers = headers;\n}\n_c4 = HeadersWrapper;\nHeadersWrapper.prototype.get = function(name) {\n    return this._headers.get(name);\n};\nfunction FetchTransport() {}\n_c5 = FetchTransport;\nFetchTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {\n    var controller = new AbortController();\n    var signal = controller.signal; // see #120\n    var textDecoder = new TextDecoder();\n    (0, _unfetch.default)(url, {\n        headers: headers,\n        credentials: withCredentials ? 'include' : 'same-origin',\n        signal: signal,\n        cache: 'no-store'\n    }).then(function(response) {\n        var reader = response.body.getReader();\n        onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function() {\n            controller.abort();\n            reader.cancel();\n        });\n        return new Promise(function(resolve, reject) {\n            var readNextChunk1 = function readNextChunk() {\n                reader.read().then(function(result) {\n                    if (result.done) {\n                        resolve(undefined);\n                    } else {\n                        var chunk = textDecoder.decode(result.value, {\n                            stream: true\n                        });\n                        onProgressCallback(chunk);\n                        readNextChunk();\n                    }\n                })['catch'](function(error) {\n                    reject(error);\n                });\n            };\n            readNextChunk1();\n        });\n    }).then(function(result) {\n        onFinishCallback();\n        return result;\n    }, function(error) {\n        onFinishCallback();\n        return Promise.reject(error);\n    });\n};\nfunction EventTarget() {\n    this._listeners = Object.create(null);\n}\n_c6 = EventTarget;\nfunction throwError(e) {\n    setTimeout(function() {\n        throw e;\n    }, 0);\n}\nEventTarget.prototype.dispatchEvent = function(event) {\n    event.target = this;\n    var typeListeners = this._listeners[event.type];\n    if (typeListeners != undefined) {\n        var length = typeListeners.length;\n        for(var i = 0; i < length; i += 1){\n            var listener = typeListeners[i];\n            try {\n                if (typeof listener.handleEvent === 'function') {\n                    listener.handleEvent(event);\n                } else {\n                    listener.call(this, event);\n                }\n            } catch (e) {\n                throwError(e);\n            }\n        }\n    }\n};\nEventTarget.prototype.addEventListener = function(type, listener) {\n    type = String(type);\n    var listeners = this._listeners;\n    var typeListeners = listeners[type];\n    if (typeListeners == undefined) {\n        typeListeners = [];\n        listeners[type] = typeListeners;\n    }\n    var found = false;\n    for(var i = 0; i < typeListeners.length; i += 1){\n        if (typeListeners[i] === listener) {\n            found = true;\n        }\n    }\n    if (!found) {\n        typeListeners.push(listener);\n    }\n};\nEventTarget.prototype.removeEventListener = function(type, listener) {\n    type = String(type);\n    var listeners = this._listeners;\n    var typeListeners = listeners[type];\n    if (typeListeners != undefined) {\n        var filtered = [];\n        for(var i = 0; i < typeListeners.length; i += 1){\n            if (typeListeners[i] !== listener) {\n                filtered.push(typeListeners[i]);\n            }\n        }\n        if (filtered.length === 0) {\n            delete listeners[type];\n        } else {\n            listeners[type] = filtered;\n        }\n    }\n};\nfunction Event(type) {\n    this.type = type;\n    this.target = undefined;\n}\n_c7 = Event;\nfunction MessageEvent(type, options) {\n    Event.call(this, type);\n    this.data = options.data;\n    this.lastEventId = options.lastEventId;\n}\n_c8 = MessageEvent;\nMessageEvent.prototype = Object.create(Event.prototype);\nfunction ConnectionEvent(type, options) {\n    Event.call(this, type);\n    this.status = options.status;\n    this.statusText = options.statusText;\n    this.headers = options.headers;\n}\n_c9 = ConnectionEvent;\nConnectionEvent.prototype = Object.create(Event.prototype);\nvar WAITING = -1;\nvar CONNECTING = 0;\nvar OPEN = 1;\nvar CLOSED = 2;\nvar AFTER_CR = -1;\nvar FIELD_START = 0;\nvar FIELD = 1;\nvar VALUE_START = 2;\nvar VALUE = 3;\nvar contentTypeRegExp = /^text\\/event\\-stream;?(\\s*charset\\=utf\\-8)?$/i;\nvar MINIMUM_DURATION = 1000;\nvar MAXIMUM_DURATION = 18000000;\nvar parseDuration = function parseDuration(value, def) {\n    var n = parseInt(value, 10);\n    if (n !== n) {\n        n = def;\n    }\n    return clampDuration(n);\n};\nvar clampDuration = function clampDuration(n) {\n    return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);\n};\nvar fire = function fire(that, f, event) {\n    try {\n        if (typeof f === 'function') {\n            f.call(that, event);\n        }\n    } catch (e) {\n        throwError(e);\n    }\n};\nfunction EventSourcePolyfill(url, options) {\n    EventTarget.call(this);\n    this.onopen = undefined;\n    this.onmessage = undefined;\n    this.onerror = undefined;\n    this.url = undefined;\n    this.readyState = undefined;\n    this.withCredentials = undefined;\n    this._close = undefined;\n    start(this, url, options);\n}\n_c10 = EventSourcePolyfill;\nvar isFetchSupported = _unfetch.default != undefined && Response != undefined && 'body' in Response.prototype;\nfunction start(es, url, options) {\n    url = String(url);\n    var withCredentials = options != undefined && Boolean(options.withCredentials);\n    var initialRetry = clampDuration(1000);\n    var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);\n    var lastEventId = '';\n    var retry = initialRetry;\n    var wasActivity = false;\n    var headers2 = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;\n    var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;\n    var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());\n    var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();\n    var cancelFunction = undefined;\n    var timeout = 0;\n    var currentState = WAITING;\n    var dataBuffer = '';\n    var lastEventIdBuffer = '';\n    var eventTypeBuffer = '';\n    var textBuffer = '';\n    var state = FIELD_START;\n    var fieldStart = 0;\n    var valueStart = 0;\n    var onStart = function onStart(status, statusText, contentType, headers, cancel) {\n        if (currentState === CONNECTING) {\n            cancelFunction = cancel;\n            if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {\n                currentState = OPEN;\n                wasActivity = true;\n                retry = initialRetry;\n                es.readyState = OPEN;\n                var event = new ConnectionEvent('open', {\n                    status: status,\n                    statusText: statusText,\n                    headers: headers\n                });\n                es.dispatchEvent(event);\n                fire(es, es.onopen, event);\n            } else {\n                var message = '';\n                if (status !== 200) {\n                    if (statusText) {\n                        statusText = statusText.replace(/\\s+/g, ' ');\n                    }\n                    message = \"EventSource's response has a status \" + status + ' ' + statusText + ' that is not 200. Aborting the connection.';\n                } else {\n                    message = \"EventSource's response has a Content-Type specifying an unsupported type: \" + (contentType == undefined ? '-' : contentType.replace(/\\s+/g, ' ')) + '. Aborting the connection.';\n                }\n                throwError(new Error(message));\n                close();\n                var event = new ConnectionEvent('error', {\n                    status: status,\n                    statusText: statusText,\n                    headers: headers\n                });\n                es.dispatchEvent(event);\n                fire(es, es.onerror, event);\n            }\n        }\n    };\n    var onProgress = function onProgress(textChunk) {\n        if (currentState === OPEN) {\n            var n = -1;\n            for(var i = 0; i < textChunk.length; i += 1){\n                var c = textChunk.charCodeAt(i);\n                if (c === '\\n'.charCodeAt(0) || c === '\\r'.charCodeAt(0)) {\n                    n = i;\n                }\n            }\n            var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);\n            textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);\n            if (chunk !== '') {\n                wasActivity = true;\n            }\n            for(var position = 0; position < chunk.length; position += 1){\n                var c = chunk.charCodeAt(position);\n                if (state === AFTER_CR && c === '\\n'.charCodeAt(0)) {\n                    state = FIELD_START;\n                } else {\n                    if (state === AFTER_CR) {\n                        state = FIELD_START;\n                    }\n                    if (c === '\\r'.charCodeAt(0) || c === '\\n'.charCodeAt(0)) {\n                        if (state !== FIELD_START) {\n                            if (state === FIELD) {\n                                valueStart = position + 1;\n                            }\n                            var field = chunk.slice(fieldStart, valueStart - 1);\n                            var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);\n                            if (field === 'data') {\n                                dataBuffer += '\\n';\n                                dataBuffer += value;\n                            } else if (field === 'id') {\n                                lastEventIdBuffer = value;\n                            } else if (field === 'event') {\n                                eventTypeBuffer = value;\n                            } else if (field === 'retry') {\n                                initialRetry = parseDuration(value, initialRetry);\n                                retry = initialRetry;\n                            } else if (field === 'heartbeatTimeout') {\n                                heartbeatTimeout = parseDuration(value, heartbeatTimeout);\n                                if (timeout !== 0) {\n                                    clearTimeout(timeout);\n                                    timeout = setTimeout(function() {\n                                        onTimeout2();\n                                    }, heartbeatTimeout);\n                                }\n                            }\n                        }\n                        if (state === FIELD_START) {\n                            if (dataBuffer !== '') {\n                                lastEventId = lastEventIdBuffer;\n                                if (eventTypeBuffer === '') {\n                                    eventTypeBuffer = 'message';\n                                }\n                                var event = new MessageEvent(eventTypeBuffer, {\n                                    data: dataBuffer.slice(1),\n                                    lastEventId: lastEventIdBuffer\n                                });\n                                es.dispatchEvent(event);\n                                if (eventTypeBuffer === 'message') {\n                                    fire(es, es.onmessage, event);\n                                }\n                                if (currentState === CLOSED) {\n                                    return;\n                                }\n                            }\n                            dataBuffer = '';\n                            eventTypeBuffer = '';\n                        }\n                        state = c === '\\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;\n                    } else {\n                        if (state === FIELD_START) {\n                            fieldStart = position;\n                            state = FIELD;\n                        }\n                        if (state === FIELD) {\n                            if (c === ':'.charCodeAt(0)) {\n                                valueStart = position + 1;\n                                state = VALUE_START;\n                            }\n                        } else if (state === VALUE_START) {\n                            state = VALUE;\n                        }\n                    }\n                }\n            }\n        }\n    };\n    var onFinish = function onFinish() {\n        if (currentState === OPEN || currentState === CONNECTING) {\n            currentState = WAITING;\n            if (timeout !== 0) {\n                clearTimeout(timeout);\n                timeout = 0;\n            }\n            timeout = setTimeout(function() {\n                onTimeout2();\n            }, retry);\n            retry = clampDuration(Math.min(initialRetry * 16, retry * 2));\n            es.readyState = CONNECTING;\n            var event = new Event('error');\n            es.dispatchEvent(event);\n            fire(es, es.onerror, event);\n        }\n    };\n    var close = function close() {\n        currentState = CLOSED;\n        if (cancelFunction != undefined) {\n            cancelFunction();\n            cancelFunction = undefined;\n        }\n        if (timeout !== 0) {\n            clearTimeout(timeout);\n            timeout = 0;\n        }\n        es.readyState = CLOSED;\n    };\n    var onTimeout2 = function onTimeout() {\n        timeout = 0;\n        if (currentState !== WAITING) {\n            if (!wasActivity && cancelFunction != undefined) {\n                throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));\n                cancelFunction();\n                cancelFunction = undefined;\n            } else {\n                wasActivity = false;\n                timeout = setTimeout(function() {\n                    onTimeout();\n                }, heartbeatTimeout);\n            }\n            return;\n        }\n        wasActivity = false;\n        timeout = setTimeout(function() {\n            onTimeout();\n        }, heartbeatTimeout);\n        currentState = CONNECTING;\n        dataBuffer = '';\n        eventTypeBuffer = '';\n        lastEventIdBuffer = lastEventId;\n        textBuffer = '';\n        fieldStart = 0;\n        valueStart = 0;\n        state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916\n        // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.\n        var requestURL = url;\n        if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {\n            if (lastEventId !== '') {\n                requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);\n            }\n        }\n        var requestHeaders = {};\n        requestHeaders['Accept'] = 'text/event-stream';\n        if (headers2 != undefined) {\n            for(var name in headers2){\n                if (Object.prototype.hasOwnProperty.call(headers2, name)) {\n                    requestHeaders[name] = headers2[name];\n                }\n            }\n        }\n        try {\n            transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);\n        } catch (error) {\n            close();\n            throw error;\n        }\n    };\n    es.url = url;\n    es.readyState = CONNECTING;\n    es.withCredentials = withCredentials;\n    es._close = close;\n    onTimeout2();\n}\nEventSourcePolyfill.prototype = Object.create(EventTarget.prototype);\nEventSourcePolyfill.prototype.CONNECTING = CONNECTING;\nEventSourcePolyfill.prototype.OPEN = OPEN;\nEventSourcePolyfill.prototype.CLOSED = CLOSED;\nEventSourcePolyfill.prototype.close = function() {\n    this._close();\n};\nEventSourcePolyfill.CONNECTING = CONNECTING;\nEventSourcePolyfill.OPEN = OPEN;\nEventSourcePolyfill.CLOSED = CLOSED;\nEventSourcePolyfill.prototype.withCredentials = undefined;\nvar _default = EventSourcePolyfill;\nexports[\"default\"] = _default; //# sourceMappingURL=event-source-polyfill.js.map\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n$RefreshReg$(_c, \"TextDecoderPolyfill\");\n$RefreshReg$(_c1, \"XHRWrapper\");\n$RefreshReg$(_c2, \"HeadersPolyfill\");\n$RefreshReg$(_c3, \"XHRTransport\");\n$RefreshReg$(_c4, \"HeadersWrapper\");\n$RefreshReg$(_c5, \"FetchTransport\");\n$RefreshReg$(_c6, \"EventTarget\");\n$RefreshReg$(_c7, \"Event\");\n$RefreshReg$(_c8, \"MessageEvent\");\n$RefreshReg$(_c9, \"ConnectionEvent\");\n$RefreshReg$(_c10, \"EventSourcePolyfill\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBWTtBQUFDLEdBQUcsQ0FBQ0Esc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQThDO0FBQUVDLGtCQUFrQixHQUFDLElBQUk7QUFBQ0Esa0JBQWUsR0FBQyxJQUFJLENBQUMsQ0FBQztBQUFDLEdBQUcsQ0FBQ0csUUFBUSxHQUFDTCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4RkFBbUMsR0FBRyxDQUFvQixxQkFBQyxDQUE2RDtBQUNuVCxFQUFvQztBQUNwQyxFQUErQztBQUMvQyxHQUFHLENBQUNLLFFBQVEsR0FBQ0MsTUFBTSxDQUFDRCxRQUFRO0FBQUMsR0FBRyxDQUFDRSxRQUFRLEdBQUNELE1BQU0sQ0FBQ0MsUUFBUTtBQUFDLEdBQUcsQ0FBQ0MsV0FBVyxHQUFDRixNQUFNLENBQUNFLFdBQVc7QUFBQyxHQUFHLENBQUNDLFdBQVcsR0FBQ0gsTUFBTSxDQUFDRyxXQUFXO0FBQUMsR0FBRyxDQUFDQyxlQUFlLEdBQUNKLE1BQU0sQ0FBQ0ksZUFBZTtBQUFDLEVBQUUsRUFBQ0EsZUFBZSxJQUFFQyxTQUFTLEVBQUMsQ0FBQ0Q7SUFBQUEsZUFBZSxHQUFDLFFBQVEsQ0FBeEJBLGVBQWUsR0FBVyxDQUFDO1FBQUEsSUFBSSxDQUFDRSxNQUFNLEdBQUMsSUFBSTtRQUFDLElBQUksQ0FBQ0MsS0FBSyxHQUFDLFFBQVEsR0FBRSxDQUFDLENBQUM7SUFBQyxDQUFDO0FBQUMsQ0FBQztTQUFTQyxtQkFBbUIsR0FBRSxDQUFDO0lBQUEsSUFBSSxDQUFDQyxVQUFVLEdBQUMsQ0FBQztJQUFDLElBQUksQ0FBQ0MsU0FBUyxHQUFDLENBQUM7QUFBQyxDQUFDRjtLQUExREEsbUJBQW1CO0FBQXVDQSxtQkFBbUIsQ0FBQ0csU0FBUyxDQUFDQyxNQUFNLEdBQUMsUUFBUSxDQUFDQyxNQUFNLEVBQUMsQ0FBQztRQUFTQyxLQUFLLEdBQWQsUUFBUSxDQUFDQSxLQUFLLENBQUNKLFNBQVMsRUFBQ0ssS0FBSyxFQUFDQyxXQUFXLEVBQUMsQ0FBQztRQUFBLEVBQUUsRUFBQ0EsV0FBVyxLQUFHLENBQUMsRUFBQyxDQUFDO1lBQUEsTUFBTSxDQUFDTixTQUFTLElBQUUsR0FBTSxJQUFFSyxLQUFLLElBQUVMLFNBQVMsSUFBRUssS0FBSyxJQUFFLElBQU07UUFBQyxDQUFDO1FBQUEsRUFBRSxFQUFDQyxXQUFXLEtBQUcsQ0FBQyxFQUFDLENBQUM7WUFBQSxNQUFNLENBQUNOLFNBQVMsSUFBRSxJQUFNLElBQUVLLEtBQUssSUFBRUwsU0FBUyxJQUFFSyxLQUFLLElBQUUsS0FBTSxJQUFFTCxTQUFTLElBQUUsS0FBTSxJQUFFSyxLQUFLLElBQUVMLFNBQVMsSUFBRUssS0FBSyxJQUFFLEtBQU07UUFBQyxDQUFDO1FBQUEsRUFBRSxFQUFDQyxXQUFXLEtBQUcsQ0FBQyxFQUFDLENBQUM7WUFBQSxNQUFNLENBQUNOLFNBQVMsSUFBRSxLQUFRLElBQUVLLEtBQUssSUFBRUwsU0FBUyxJQUFFSyxLQUFLLElBQUUsT0FBUTtRQUFDLENBQUM7UUFBQSxLQUFLLENBQUMsR0FBRyxDQUFDRSxLQUFLO0lBQUcsQ0FBQztRQUFTRCxZQUFXLEdBQXBCLFFBQVEsQ0FBQ0EsWUFBVyxDQUFDUCxVQUFVLEVBQUNDLFNBQVMsRUFBQyxDQUFDO1FBQUEsRUFBRSxFQUFDRCxVQUFVLEtBQUcsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsTUFBTSxDQUFDQyxTQUFTLElBQUUsQ0FBQyxHQUFDLEVBQUUsR0FBQyxDQUFDLEdBQUNBLFNBQVMsR0FBQyxFQUFFLEdBQUMsQ0FBQyxHQUFDLENBQUM7UUFBQyxDQUFDO1FBQUEsRUFBRSxFQUFDRCxVQUFVLEtBQUcsQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDO1lBQUEsTUFBTSxDQUFDQyxTQUFTLEdBQUMsRUFBRSxHQUFDLENBQUMsR0FBQyxDQUFDO1FBQUMsQ0FBQztRQUFBLEVBQUUsRUFBQ0QsVUFBVSxLQUFHLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQztZQUFBLE1BQU0sQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUFBLEtBQUssQ0FBQyxHQUFHLENBQUNRLEtBQUs7SUFBRyxDQUFDO0lBQUEsR0FBRyxDQUFDQyxRQUFRLEdBQUMsS0FBTTtJQUFDLEdBQUcsQ0FBQ0MsTUFBTSxHQUFDLENBQUU7SUFBQyxHQUFHLENBQUNWLFdBQVUsR0FBQyxJQUFJLENBQUNBLFVBQVU7SUFBQyxHQUFHLENBQUNDLFVBQVMsR0FBQyxJQUFJLENBQUNBLFNBQVM7SUFBQyxHQUFHLENBQUMsR0FBRyxDQUFDVSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNQLE1BQU0sQ0FBQ1EsTUFBTSxFQUFDRCxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUM7UUFBQSxHQUFHLENBQUNFLEtBQUssR0FBQ1QsTUFBTSxDQUFDTyxDQUFDO1FBQUUsRUFBRSxFQUFDWCxXQUFVLEtBQUcsQ0FBQyxFQUFDLENBQUM7WUFBQSxFQUFFLEVBQUNhLEtBQUssR0FBQyxHQUFHLElBQUVBLEtBQUssR0FBQyxHQUFHLEtBQUdSLEtBQUssQ0FBQ0osVUFBUyxJQUFFLENBQUMsR0FBQ1ksS0FBSyxHQUFDLEVBQUUsRUFBQ2IsV0FBVSxHQUFDLENBQUMsRUFBQ08sWUFBVyxDQUFDUCxXQUFVLEVBQUNDLFVBQVMsSUFBRyxDQUFDRDtnQkFBQUEsV0FBVSxHQUFDLENBQUM7Z0JBQUNDLFVBQVMsR0FBQ1EsUUFBUTtnQkFBQ0MsTUFBTSxJQUFFSSxNQUFNLENBQUNDLFlBQVksQ0FBQ2QsVUFBUztZQUFFLENBQUM7UUFBQSxDQUFDO1FBQUEsRUFBRSxFQUFDRCxXQUFVLEtBQUcsQ0FBQyxFQUFDLENBQUM7WUFBQSxFQUFFLEVBQUNhLEtBQUssSUFBRSxDQUFDLElBQUVBLEtBQUssSUFBRSxHQUFHLEVBQUMsQ0FBQ2I7Z0JBQUFBLFdBQVUsR0FBQyxDQUFDO2dCQUFDQyxVQUFTLEdBQUNZLEtBQUs7WUFBQyxDQUFDLE1BQUssRUFBRSxFQUFDQSxLQUFLLElBQUUsR0FBRyxJQUFFQSxLQUFLLElBQUUsR0FBRyxFQUFDLENBQUNiO2dCQUFBQSxXQUFVLEdBQUMsQ0FBQyxHQUFDLENBQUM7Z0JBQUNDLFVBQVMsR0FBQ1ksS0FBSyxHQUFDLEVBQUU7WUFBQyxDQUFDLE1BQUssRUFBRSxFQUFDQSxLQUFLLElBQUUsR0FBRyxJQUFFQSxLQUFLLElBQUUsR0FBRyxFQUFDLENBQUNiO2dCQUFBQSxXQUFVLEdBQUMsQ0FBQyxHQUFDLENBQUM7Z0JBQUNDLFVBQVMsR0FBQ1ksS0FBSyxHQUFDLEVBQUU7WUFBQyxDQUFDLE1BQUssRUFBRSxFQUFDQSxLQUFLLElBQUUsR0FBRyxJQUFFQSxLQUFLLElBQUUsR0FBRyxFQUFDLENBQUNiO2dCQUFBQSxXQUFVLEdBQUMsQ0FBQyxHQUFDLENBQUM7Z0JBQUNDLFVBQVMsR0FBQ1ksS0FBSyxHQUFDLENBQUM7WUFBQyxDQUFDLE1BQUksQ0FBQ2I7Z0JBQUFBLFdBQVUsR0FBQyxDQUFDO2dCQUFDQyxVQUFTLEdBQUNRLFFBQVE7WUFBQyxDQUFDO1lBQUEsRUFBRSxFQUFDVCxXQUFVLEtBQUcsQ0FBQyxLQUFHSyxLQUFLLENBQUNKLFVBQVMsRUFBQ0QsV0FBVSxFQUFDTyxZQUFXLENBQUNQLFdBQVUsRUFBQ0MsVUFBUyxJQUFHLENBQUNEO2dCQUFBQSxXQUFVLEdBQUMsQ0FBQztnQkFBQ0MsVUFBUyxHQUFDUSxRQUFRO1lBQUMsQ0FBQztRQUFBLENBQUMsTUFBSSxDQUFDVDtZQUFBQSxXQUFVLElBQUUsQ0FBQztZQUFDQyxVQUFTLEdBQUNBLFVBQVMsSUFBRSxDQUFDLEdBQUNZLEtBQUssR0FBQyxFQUFFO1FBQUMsQ0FBQztRQUFBLEVBQUUsRUFBQ2IsV0FBVSxLQUFHLENBQUMsRUFBQyxDQUFDO1lBQUEsRUFBRSxFQUFDQyxVQUFTLElBQUUsS0FBTSxFQUFDLENBQUNTO2dCQUFBQSxNQUFNLElBQUVJLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDZCxVQUFTO1lBQUUsQ0FBQyxNQUFJLENBQUNTO2dCQUFBQSxNQUFNLElBQUVJLE1BQU0sQ0FBQ0MsWUFBWSxD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N0IsU0FBUztBQUFDLEdBQUcsQ0FBQ2tNLFFBQVEsR0FBQ25DLG1CQUFtQjtBQUFDekssa0JBQWUsR0FBQzRNLFFBQVEsQ0FDeGxDLENBQWlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanM/NDE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3VuZmV0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoXCIpKTsvKiBlc2xpbnQtZGlzYWJsZSAqLyAvLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXHJcbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxyXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xyXG52YXIgZG9jdW1lbnQ9d2luZG93LmRvY3VtZW50O3ZhciBSZXNwb25zZT13aW5kb3cuUmVzcG9uc2U7dmFyIFRleHREZWNvZGVyPXdpbmRvdy5UZXh0RGVjb2Rlcjt2YXIgVGV4dEVuY29kZXI9d2luZG93LlRleHRFbmNvZGVyO3ZhciBBYm9ydENvbnRyb2xsZXI9d2luZG93LkFib3J0Q29udHJvbGxlcjtpZihBYm9ydENvbnRyb2xsZXI9PXVuZGVmaW5lZCl7QWJvcnRDb250cm9sbGVyPWZ1bmN0aW9uKCl7dGhpcy5zaWduYWw9bnVsbDt0aGlzLmFib3J0PWZ1bmN0aW9uKCl7fTt9O31mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCl7dGhpcy5iaXRzTmVlZGVkPTA7dGhpcy5jb2RlUG9pbnQ9MDt9VGV4dERlY29kZXJQb2x5ZmlsbC5wcm90b3R5cGUuZGVjb2RlPWZ1bmN0aW9uKG9jdGV0cyl7ZnVuY3Rpb24gdmFsaWQoY29kZVBvaW50LHNoaWZ0LG9jdGV0c0NvdW50KXtpZihvY3RldHNDb3VudD09PTEpe3JldHVybiBjb2RlUG9pbnQ+PTB4MDA4MD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4MDdmZjt9aWYob2N0ZXRzQ291bnQ9PT0yKXtyZXR1cm4gY29kZVBvaW50Pj0weDA4MDA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weGQ3ZmZ8fGNvZGVQb2ludD49MHhlMDAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHhmZmZmO31pZihvY3RldHNDb3VudD09PTMpe3JldHVybiBjb2RlUG9pbnQ+PTB4MDEwMDAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHgxMGZmZmY7fXRocm93IG5ldyBFcnJvcigpO31mdW5jdGlvbiBvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCl7aWYoYml0c05lZWRlZD09PTYqMSl7cmV0dXJuIGNvZGVQb2ludD4+Nj4xNT8zOmNvZGVQb2ludD4zMT8yOjE7fWlmKGJpdHNOZWVkZWQ9PT02KjIpe3JldHVybiBjb2RlUG9pbnQ+MTU/MzoyO31pZihiaXRzTmVlZGVkPT09NiozKXtyZXR1cm4gMzt9dGhyb3cgbmV3IEVycm9yKCk7fXZhciBSRVBMQUNFUj0weGZmZmQ7dmFyIHN0cmluZz0nJzt2YXIgYml0c05lZWRlZD10aGlzLmJpdHNOZWVkZWQ7dmFyIGNvZGVQb2ludD10aGlzLmNvZGVQb2ludDtmb3IodmFyIGk9MDtpPG9jdGV0cy5sZW5ndGg7aSs9MSl7dmFyIG9jdGV0PW9jdGV0c1tpXTtpZihiaXRzTmVlZGVkIT09MCl7aWYob2N0ZXQ8MTI4fHxvY3RldD4xOTF8fCF2YWxpZChjb2RlUG9pbnQ8PDZ8b2N0ZXQmNjMsYml0c05lZWRlZC02LG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsY29kZVBvaW50KSkpe2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9UkVQTEFDRVI7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7fX1pZihiaXRzTmVlZGVkPT09MCl7aWYob2N0ZXQ+PTAmJm9jdGV0PD0xMjcpe2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9b2N0ZXQ7fWVsc2UgaWYob2N0ZXQ+PTE5MiYmb2N0ZXQ8PTIyMyl7Yml0c05lZWRlZD02KjE7Y29kZVBvaW50PW9jdGV0JjMxO31lbHNlIGlmKG9jdGV0Pj0yMjQmJm9jdGV0PD0yMzkpe2JpdHNOZWVkZWQ9NioyO2NvZGVQb2ludD1vY3RldCYxNTt9ZWxzZSBpZihvY3RldD49MjQwJiZvY3RldDw9MjQ3KXtiaXRzTmVlZGVkPTYqMztjb2RlUG9pbnQ9b2N0ZXQmNzt9ZWxzZXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO31pZihiaXRzTmVlZGVkIT09MCYmIXZhbGlkKGNvZGVQb2ludCxiaXRzTmVlZGVkLG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsY29kZVBvaW50KSkpe2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9UkVQTEFDRVI7fX1lbHNle2JpdHNOZWVkZWQtPTY7Y29kZVBvaW50PWNvZGVQb2ludDw8NnxvY3RldCY2Mzt9aWYoYml0c05lZWRlZD09PTApe2lmKGNvZGVQb2ludDw9MHhmZmZmKXtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTt9ZWxzZXtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwKyhjb2RlUG9pbnQtMHhmZmZmLTE+PjEwKSk7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZGMwMCsoY29kZVBvaW50LTB4ZmZmZi0xJjB4M2ZmKSk7fX19dGhpcy5iaXRzTmVlZGVkPWJpdHNOZWVkZWQ7dGhpcy5jb2RlUG9pbnQ9Y29kZVBvaW50O3JldHVybiBzdHJpbmc7fTsvLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxyXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb249ZnVuY3Rpb24gc3VwcG9ydHNTdHJlYW1PcHRpb24oKXt0cnl7cmV0dXJuIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoJ3Rlc3QnKSx7c3RyZWFtOnRydWV9KT09PSd0ZXN0Jzt9Y2F0Y2goZXJyb3Ipe2NvbnNvbGUubG9nKGVycm9yKTt9cmV0dXJuIGZhbHNlO307Ly8gSUUsIEVkZ2VcclxuaWYoVGV4dERlY29kZXI9PXVuZGVmaW5lZHx8VGV4dEVuY29kZXI9PXVuZGVmaW5lZHx8IXN1cHBvcnRzU3RyZWFtT3B0aW9uKCkpe1RleHREZWNvZGVyPVRleHREZWNvZGVyUG9seWZpbGw7fXZhciBrPWZ1bmN0aW9uIGsoKXt9O2Z1bmN0aW9uIFhIUldyYXBwZXIoeGhyKXt0aGlzLndpdGhDcmVkZW50aWFscz1mYWxzZTt0aGlzLnJlc3BvbnNlVHlwZT0nJzt0aGlzLnJlYWR5U3RhdGU9MDt0aGlzLnN0YXR1cz0wO3RoaXMuc3RhdHVzVGV4dD0nJzt0aGlzLnJlc3BvbnNlVGV4dD0nJzt0aGlzLm9ucHJvZ3Jlc3M9azt0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZT1rO3RoaXMuX2NvbnRlbnRUeXBlPScnO3RoaXMuX3hocj14aHI7dGhpcy5fc2VuZFRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1rO31YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKG1ldGhvZCx1cmwpe3RoaXMuX2Fib3J0KHRydWUpO3ZhciB0aGF0PXRoaXM7dmFyIHhocj10aGlzLl94aHI7dmFyIHN0YXRlPTE7dmFyIHRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1mdW5jdGlvbihzaWxlbnQpe2lmKHRoYXQuX3NlbmRUaW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTt0aGF0Ll9zZW5kVGltZW91dD0wO31pZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O3hoci5vbmxvYWQ9azt4aHIub25lcnJvcj1rO3hoci5vbmFib3J0PWs7eGhyLm9ucHJvZ3Jlc3M9azt4aHIub25yZWFkeXN0YXRlY2hhbmdlPWs7Ly8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcclxuLy8gT3BlcmEgPCAxMDogWE1MSHR0cFJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxyXG54aHIuYWJvcnQoKTtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9aWYoIXNpbGVudCl7dGhhdC5yZWFkeVN0YXRlPTQ7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fXN0YXRlPTA7fTt2YXIgb25TdGFydD1mdW5jdGlvbiBvblN0YXJ0KCl7aWYoc3RhdGU9PT0xKXsvLyBzdGF0ZSA9IDI7XHJcbnZhciBzdGF0dXM9MDt2YXIgc3RhdHVzVGV4dD0nJzt2YXIgY29udGVudFR5cGU9dW5kZWZpbmVkO2lmKCEoJ2NvbnRlbnRUeXBlJ2luIHhocikpe3RyeXtzdGF0dXM9eGhyLnN0YXR1cztzdGF0dXNUZXh0PXhoci5zdGF0dXNUZXh0O2NvbnRlbnRUeXBlPXhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7fWNhdGNoKGVycm9yKXsvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXHJcbi8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcclxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXHJcbnN0YXR1cz0wO3N0YXR1c1RleHQ9Jyc7Y29udGVudFR5cGU9dW5kZWZpbmVkOy8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XHJcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTY1OFxyXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcclxufX1lbHNle3N0YXR1cz0yMDA7c3RhdHVzVGV4dD0nT0snO2NvbnRlbnRUeXBlPXhoci5jb250ZW50VHlwZTt9aWYoc3RhdHVzIT09MCl7c3RhdGU9Mjt0aGF0LnJlYWR5U3RhdGU9Mjt0aGF0LnN0YXR1cz1zdGF0dXM7dGhhdC5zdGF0dXNUZXh0PXN0YXR1c1RleHQ7dGhhdC5fY29udGVudFR5cGU9Y29udGVudFR5cGU7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fX07dmFyIG9uUHJvZ3Jlc3M9ZnVuY3Rpb24gb25Qcm9ncmVzcygpe29uU3RhcnQoKTtpZihzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9Mzt2YXIgcmVzcG9uc2VUZXh0PScnO3RyeXtyZXNwb25zZVRleHQ9eGhyLnJlc3BvbnNlVGV4dDt9Y2F0Y2goZXJyb3Ipey8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcclxufXRoYXQucmVhZHlTdGF0ZT0zO3RoYXQucmVzcG9uc2VUZXh0PXJlc3BvbnNlVGV4dDt0aGF0Lm9ucHJvZ3Jlc3MoKTt9fTt2YXIgb25GaW5pc2g9ZnVuY3Rpb24gb25GaW5pc2goKXsvLyBGaXJlZm94IDUyIGZpcmVzIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgd2l0aG91dCBmaW5hbCBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpXHJcbi8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXHJcbm9uUHJvZ3Jlc3MoKTtpZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO310aGF0LnJlYWR5U3RhdGU9NDt0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO319O3ZhciBvblJlYWR5U3RhdGVDaGFuZ2U9ZnVuY3Rpb24gb25SZWFkeVN0YXRlQ2hhbmdlKCl7aWYoeGhyIT11bmRlZmluZWQpey8vIE9wZXJhIDEyXHJcbmlmKHhoci5yZWFkeVN0YXRlPT09NCl7b25GaW5pc2goKTt9ZWxzZSBpZih4aHIucmVhZHlTdGF0ZT09PTMpe29uUHJvZ3Jlc3MoKTt9ZWxzZSBpZih4aHIucmVhZHlTdGF0ZT09PTIpe29uU3RhcnQoKTt9fX07dmFyIG9uVGltZW91dD1mdW5jdGlvbiBvblRpbWVvdXQoKXt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LDUwMCk7aWYoeGhyLnJlYWR5U3RhdGU9PT0zKXtvblByb2dyZXNzKCk7fX07Ly8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcclxueGhyLm9ubG9hZD1vbkZpbmlzaDt4aHIub25lcnJvcj1vbkZpbmlzaDsvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XHJcbi8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03Njg1OTZcclxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXHJcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcclxuLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXHJcbnhoci5vbmFib3J0PW9uRmluaXNoOy8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xyXG5pZighKCdzZW5kQXNCaW5hcnknaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSYmISgnbW96QW5vbidpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKXt4aHIub25wcm9ncmVzcz1vblByb2dyZXNzO30vLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXHJcbi8vIE9wZXJhIDwgMTJcclxuLy8gRmlyZWZveCA8IDMuNVxyXG4vLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcclxuLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcclxuLy8gc2VlIGFsc28gIzY0XHJcbnhoci5vbnJlYWR5c3RhdGVjaGFuZ2U9b25SZWFkeVN0YXRlQ2hhbmdlO2lmKCdjb250ZW50VHlwZSdpbiB4aHIpe3VybCs9KHVybC5pbmRleE9mKCc/Jyk9PT0tMT8nPyc6JyYnKSsncGFkZGluZz10cnVlJzt9eGhyLm9wZW4obWV0aG9kLHVybCx0cnVlKTtpZigncmVhZHlTdGF0ZSdpbiB4aHIpey8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xyXG4vLyAjOTFcclxudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSwwKTt9fTtYSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydD1mdW5jdGlvbigpe3RoaXMuX2Fib3J0KGZhbHNlKTt9O1hIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyPWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9jb250ZW50VHlwZTt9O1hIUldyYXBwZXIucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXI9ZnVuY3Rpb24obmFtZSx2YWx1ZSl7dmFyIHhocj10aGlzLl94aHI7aWYoJ3NldFJlcXVlc3RIZWFkZXInaW4geGhyKXt4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLHZhbHVlKTt9fTtYSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRBbGxSZXNwb25zZUhlYWRlcnM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyE9dW5kZWZpbmVkP3RoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTonJzt9O1hIUldyYXBwZXIucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oKXsvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcclxuaWYoISgnb250aW1lb3V0J2luIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkmJmRvY3VtZW50IT11bmRlZmluZWQmJmRvY3VtZW50LnJlYWR5U3RhdGUhPXVuZGVmaW5lZCYmZG9jdW1lbnQucmVhZHlTdGF0ZSE9PSdjb21wbGV0ZScpe3ZhciB0aGF0PXRoaXM7dGhhdC5fc2VuZFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuX3NlbmRUaW1lb3V0PTA7dGhhdC5zZW5kKCk7fSw0KTtyZXR1cm47fXZhciB4aHI9dGhpcy5feGhyOy8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxyXG54aHIud2l0aENyZWRlbnRpYWxzPXRoaXMud2l0aENyZWRlbnRpYWxzO3hoci5yZXNwb25zZVR5cGU9dGhpcy5yZXNwb25zZVR5cGU7dHJ5ey8vIHhoci5zZW5kKCk7IHRocm93cyBcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIgaW4gRmlyZWZveCAzLjBcclxueGhyLnNlbmQodW5kZWZpbmVkKTt9Y2F0Y2goZXJyb3IxKXsvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXHJcbnRocm93IGVycm9yMTt9fTtmdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKXtyZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLGZ1bmN0aW9uKGMpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSsweDIwKTt9KTt9ZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCl7Ly8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcclxudmFyIG1hcD1PYmplY3QuY3JlYXRlKG51bGwpO3ZhciBhcnJheT1hbGwuc3BsaXQoJ1xcclxcbicpO2Zvcih2YXIgaT0wO2k8YXJyYXkubGVuZ3RoO2krPTEpe3ZhciBsaW5lPWFycmF5W2ldO3ZhciBwYXJ0cz1saW5lLnNwbGl0KCc6ICcpO3ZhciBuYW1lPXBhcnRzLnNoaWZ0KCk7dmFyIHZhbHVlPXBhcnRzLmpvaW4oJzogJyk7bWFwW3RvTG93ZXJDYXNlKG5hbWUpXT12YWx1ZTt9dGhpcy5fbWFwPW1hcDt9SGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV07fTtmdW5jdGlvbiBYSFJUcmFuc3BvcnQoKXt9WEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKHhocixvblN0YXJ0Q2FsbGJhY2ssb25Qcm9ncmVzc0NhbGxiYWNrLG9uRmluaXNoQ2FsbGJhY2ssdXJsLHdpdGhDcmVkZW50aWFscyxoZWFkZXJzKXt4aHIub3BlbignR0VUJyx1cmwpO3ZhciBvZmZzZXQ9MDt4aHIub25wcm9ncmVzcz1mdW5jdGlvbigpe3ZhciByZXNwb25zZVRleHQ9eGhyLnJlc3BvbnNlVGV4dDt2YXIgY2h1bms9cmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldCk7b2Zmc2V0Kz1jaHVuay5sZW5ndGg7b25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKTt9O3hoci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZih4aHIucmVhZHlTdGF0ZT09PTIpe3ZhciBzdGF0dXM9eGhyLnN0YXR1czt2YXIgc3RhdHVzVGV4dD14aHIuc3RhdHVzVGV4dDt2YXIgY29udGVudFR5cGU9eGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTt2YXIgaGVhZGVycz14aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7b25TdGFydENhbGxiYWNrKHN0YXR1cyxzdGF0dXNUZXh0LGNvbnRlbnRUeXBlLG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVycyksZnVuY3Rpb24oKXt4aHIuYWJvcnQoKTt9KTt9ZWxzZSBpZih4aHIucmVhZHlTdGF0ZT09PTQpe29uRmluaXNoQ2FsbGJhY2soKTt9fTt4aHIud2l0aENyZWRlbnRpYWxzPXdpdGhDcmVkZW50aWFsczt4aHIucmVzcG9uc2VUeXBlPSd0ZXh0Jztmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsbmFtZSkpe3hoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsaGVhZGVyc1tuYW1lXSk7fX14aHIuc2VuZCgpO307ZnVuY3Rpb24gSGVhZGVyc1dyYXBwZXIoaGVhZGVycyl7dGhpcy5faGVhZGVycz1oZWFkZXJzO31IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKTt9O2Z1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCl7fUZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKHhocixvblN0YXJ0Q2FsbGJhY2ssb25Qcm9ncmVzc0NhbGxiYWNrLG9uRmluaXNoQ2FsbGJhY2ssdXJsLHdpdGhDcmVkZW50aWFscyxoZWFkZXJzKXt2YXIgY29udHJvbGxlcj1uZXcgQWJvcnRDb250cm9sbGVyKCk7dmFyIHNpZ25hbD1jb250cm9sbGVyLnNpZ25hbDsvLyBzZWUgIzEyMFxyXG52YXIgdGV4dERlY29kZXI9bmV3IFRleHREZWNvZGVyKCk7KDAsX3VuZmV0Y2guZGVmYXVsdCkodXJsLHtoZWFkZXJzOmhlYWRlcnMsY3JlZGVudGlhbHM6d2l0aENyZWRlbnRpYWxzPydpbmNsdWRlJzonc2FtZS1vcmlnaW4nLHNpZ25hbDpzaWduYWwsY2FjaGU6J25vLXN0b3JlJ30pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe3ZhciByZWFkZXI9cmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtvblN0YXJ0Q2FsbGJhY2socmVzcG9uc2Uuc3RhdHVzLHJlc3BvbnNlLnN0YXR1c1RleHQscmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSxmdW5jdGlvbigpe2NvbnRyb2xsZXIuYWJvcnQoKTtyZWFkZXIuY2FuY2VsKCk7fSk7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXt2YXIgcmVhZE5leHRDaHVuaz1mdW5jdGlvbiByZWFkTmV4dENodW5rKCl7cmVhZGVyLnJlYWQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7aWYocmVzdWx0LmRvbmUpey8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXHJcbnJlc29sdmUodW5kZWZpbmVkKTt9ZWxzZXt2YXIgY2h1bms9dGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSx7c3RyZWFtOnRydWV9KTtvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO3JlYWROZXh0Q2h1bmsoKTt9fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyb3Ipe3JlamVjdChlcnJvcik7fSk7fTtyZWFkTmV4dENodW5rKCk7fSk7fSkudGhlbihmdW5jdGlvbihyZXN1bHQpe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gcmVzdWx0O30sZnVuY3Rpb24oZXJyb3Ipe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO30pO307ZnVuY3Rpb24gRXZlbnRUYXJnZXQoKXt0aGlzLl9saXN0ZW5lcnM9T2JqZWN0LmNyZWF0ZShudWxsKTt9ZnVuY3Rpb24gdGhyb3dFcnJvcihlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9LDApO31FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihldmVudCl7ZXZlbnQudGFyZ2V0PXRoaXM7dmFyIHR5cGVMaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO2lmKHR5cGVMaXN0ZW5lcnMhPXVuZGVmaW5lZCl7dmFyIGxlbmd0aD10eXBlTGlzdGVuZXJzLmxlbmd0aDtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKz0xKXt2YXIgbGlzdGVuZXI9dHlwZUxpc3RlbmVyc1tpXTt0cnl7aWYodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50PT09J2Z1bmN0aW9uJyl7bGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO31lbHNle2xpc3RlbmVyLmNhbGwodGhpcyxldmVudCk7fX1jYXRjaChlKXt0aHJvd0Vycm9yKGUpO319fX07RXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxsaXN0ZW5lcil7dHlwZT1TdHJpbmcodHlwZSk7dmFyIGxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnM7dmFyIHR5cGVMaXN0ZW5lcnM9bGlzdGVuZXJzW3R5cGVdO2lmKHR5cGVMaXN0ZW5lcnM9PXVuZGVmaW5lZCl7dHlwZUxpc3RlbmVycz1bXTtsaXN0ZW5lcnNbdHlwZV09dHlwZUxpc3RlbmVyczt9dmFyIGZvdW5kPWZhbHNlO2Zvcih2YXIgaT0wO2k8dHlwZUxpc3RlbmVycy5sZW5ndGg7aSs9MSl7aWYodHlwZUxpc3RlbmVyc1tpXT09PWxpc3RlbmVyKXtmb3VuZD10cnVlO319aWYoIWZvdW5kKXt0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO319O0V2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe3R5cGU9U3RyaW5nKHR5cGUpO3ZhciBsaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzO3ZhciB0eXBlTGlzdGVuZXJzPWxpc3RlbmVyc1t0eXBlXTtpZih0eXBlTGlzdGVuZXJzIT11bmRlZmluZWQpe3ZhciBmaWx0ZXJlZD1bXTtmb3IodmFyIGk9MDtpPHR5cGVMaXN0ZW5lcnMubGVuZ3RoO2krPTEpe2lmKHR5cGVMaXN0ZW5lcnNbaV0hPT1saXN0ZW5lcil7ZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKTt9fWlmKGZpbHRlcmVkLmxlbmd0aD09PTApe2RlbGV0ZSBsaXN0ZW5lcnNbdHlwZV07fWVsc2V7bGlzdGVuZXJzW3R5cGVdPWZpbHRlcmVkO319fTtmdW5jdGlvbiBFdmVudCh0eXBlKXt0aGlzLnR5cGU9dHlwZTt0aGlzLnRhcmdldD11bmRlZmluZWQ7fWZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLG9wdGlvbnMpe0V2ZW50LmNhbGwodGhpcyx0eXBlKTt0aGlzLmRhdGE9b3B0aW9ucy5kYXRhO3RoaXMubGFzdEV2ZW50SWQ9b3B0aW9ucy5sYXN0RXZlbnRJZDt9TWVzc2FnZUV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7ZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsb3B0aW9ucyl7RXZlbnQuY2FsbCh0aGlzLHR5cGUpO3RoaXMuc3RhdHVzPW9wdGlvbnMuc3RhdHVzO3RoaXMuc3RhdHVzVGV4dD1vcHRpb25zLnN0YXR1c1RleHQ7dGhpcy5oZWFkZXJzPW9wdGlvbnMuaGVhZGVyczt9Q29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7dmFyIFdBSVRJTkc9LTE7dmFyIENPTk5FQ1RJTkc9MDt2YXIgT1BFTj0xO3ZhciBDTE9TRUQ9Mjt2YXIgQUZURVJfQ1I9LTE7dmFyIEZJRUxEX1NUQVJUPTA7dmFyIEZJRUxEPTE7dmFyIFZBTFVFX1NUQVJUPTI7dmFyIFZBTFVFPTM7dmFyIGNvbnRlbnRUeXBlUmVnRXhwPS9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7dmFyIE1JTklNVU1fRFVSQVRJT049MTAwMDt2YXIgTUFYSU1VTV9EVVJBVElPTj0xODAwMDAwMDt2YXIgcGFyc2VEdXJhdGlvbj1mdW5jdGlvbiBwYXJzZUR1cmF0aW9uKHZhbHVlLGRlZil7dmFyIG49cGFyc2VJbnQodmFsdWUsMTApO2lmKG4hPT1uKXtuPWRlZjt9cmV0dXJuIGNsYW1wRHVyYXRpb24obik7fTt2YXIgY2xhbXBEdXJhdGlvbj1mdW5jdGlvbiBjbGFtcER1cmF0aW9uKG4pe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChuLE1JTklNVU1fRFVSQVRJT04pLE1BWElNVU1fRFVSQVRJT04pO307dmFyIGZpcmU9ZnVuY3Rpb24gZmlyZSh0aGF0LGYsZXZlbnQpe3RyeXtpZih0eXBlb2YgZj09PSdmdW5jdGlvbicpe2YuY2FsbCh0aGF0LGV2ZW50KTt9fWNhdGNoKGUpe3Rocm93RXJyb3IoZSk7fX07ZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsb3B0aW9ucyl7RXZlbnRUYXJnZXQuY2FsbCh0aGlzKTt0aGlzLm9ub3Blbj11bmRlZmluZWQ7dGhpcy5vbm1lc3NhZ2U9dW5kZWZpbmVkO3RoaXMub25lcnJvcj11bmRlZmluZWQ7dGhpcy51cmw9dW5kZWZpbmVkO3RoaXMucmVhZHlTdGF0ZT11bmRlZmluZWQ7dGhpcy53aXRoQ3JlZGVudGlhbHM9dW5kZWZpbmVkO3RoaXMuX2Nsb3NlPXVuZGVmaW5lZDtzdGFydCh0aGlzLHVybCxvcHRpb25zKTt9dmFyIGlzRmV0Y2hTdXBwb3J0ZWQ9X3VuZmV0Y2guZGVmYXVsdCE9dW5kZWZpbmVkJiZSZXNwb25zZSE9dW5kZWZpbmVkJiYnYm9keSdpbiBSZXNwb25zZS5wcm90b3R5cGU7ZnVuY3Rpb24gc3RhcnQoZXMsdXJsLG9wdGlvbnMpe3VybD1TdHJpbmcodXJsKTt2YXIgd2l0aENyZWRlbnRpYWxzPW9wdGlvbnMhPXVuZGVmaW5lZCYmQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscyk7dmFyIGluaXRpYWxSZXRyeT1jbGFtcER1cmF0aW9uKDEwMDApO3ZhciBoZWFydGJlYXRUaW1lb3V0PW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0IT11bmRlZmluZWQ/cGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsNDUwMDApOmNsYW1wRHVyYXRpb24oNDUwMDApO3ZhciBsYXN0RXZlbnRJZD0nJzt2YXIgcmV0cnk9aW5pdGlhbFJldHJ5O3ZhciB3YXNBY3Rpdml0eT1mYWxzZTt2YXIgaGVhZGVycz1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuaGVhZGVycyE9dW5kZWZpbmVkP0pTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSk6dW5kZWZpbmVkO3ZhciBDdXJyZW50VHJhbnNwb3J0PW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5UcmFuc3BvcnQhPXVuZGVmaW5lZD9vcHRpb25zLlRyYW5zcG9ydDpYTUxIdHRwUmVxdWVzdDt2YXIgeGhyPWlzRmV0Y2hTdXBwb3J0ZWQmJiEob3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLlRyYW5zcG9ydCE9dW5kZWZpbmVkKT91bmRlZmluZWQ6bmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSk7dmFyIHRyYW5zcG9ydD14aHI9PXVuZGVmaW5lZD9uZXcgRmV0Y2hUcmFuc3BvcnQoKTpuZXcgWEhSVHJhbnNwb3J0KCk7dmFyIGNhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt2YXIgdGltZW91dD0wO3ZhciBjdXJyZW50U3RhdGU9V0FJVElORzt2YXIgZGF0YUJ1ZmZlcj0nJzt2YXIgbGFzdEV2ZW50SWRCdWZmZXI9Jyc7dmFyIGV2ZW50VHlwZUJ1ZmZlcj0nJzt2YXIgdGV4dEJ1ZmZlcj0nJzt2YXIgc3RhdGU9RklFTERfU1RBUlQ7dmFyIGZpZWxkU3RhcnQ9MDt2YXIgdmFsdWVTdGFydD0wO3ZhciBvblN0YXJ0PWZ1bmN0aW9uIG9uU3RhcnQoc3RhdHVzLHN0YXR1c1RleHQsY29udGVudFR5cGUsaGVhZGVycyxjYW5jZWwpe2lmKGN1cnJlbnRTdGF0ZT09PUNPTk5FQ1RJTkcpe2NhbmNlbEZ1bmN0aW9uPWNhbmNlbDtpZihzdGF0dXM9PT0yMDAmJmNvbnRlbnRUeXBlIT11bmRlZmluZWQmJmNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpKXtjdXJyZW50U3RhdGU9T1BFTjt3YXNBY3Rpdml0eT10cnVlO3JldHJ5PWluaXRpYWxSZXRyeTtlcy5yZWFkeVN0YXRlPU9QRU47dmFyIGV2ZW50PW5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLHtzdGF0dXM6c3RhdHVzLHN0YXR1c1RleHQ6c3RhdHVzVGV4dCxoZWFkZXJzOmhlYWRlcnN9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9ub3BlbixldmVudCk7fWVsc2V7dmFyIG1lc3NhZ2U9Jyc7aWYoc3RhdHVzIT09MjAwKXtpZihzdGF0dXNUZXh0KXtzdGF0dXNUZXh0PXN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCcgJyk7fW1lc3NhZ2U9XCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIitzdGF0dXMrJyAnK3N0YXR1c1RleHQrJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7fWVsc2V7bWVzc2FnZT1cIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIrKGNvbnRlbnRUeXBlPT11bmRlZmluZWQ/Jy0nOmNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywnICcpKSsnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO310aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7Y2xvc2UoKTt2YXIgZXZlbnQ9bmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLHtzdGF0dXM6c3RhdHVzLHN0YXR1c1RleHQ6c3RhdHVzVGV4dCxoZWFkZXJzOmhlYWRlcnN9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9uZXJyb3IsZXZlbnQpO319fTt2YXIgb25Qcm9ncmVzcz1mdW5jdGlvbiBvblByb2dyZXNzKHRleHRDaHVuayl7aWYoY3VycmVudFN0YXRlPT09T1BFTil7dmFyIG49LTE7Zm9yKHZhciBpPTA7aTx0ZXh0Q2h1bmsubGVuZ3RoO2krPTEpe3ZhciBjPXRleHRDaHVuay5jaGFyQ29kZUF0KGkpO2lmKGM9PT0nXFxuJy5jaGFyQ29kZUF0KDApfHxjPT09J1xccicuY2hhckNvZGVBdCgwKSl7bj1pO319dmFyIGNodW5rPShuIT09LTE/dGV4dEJ1ZmZlcjonJykrdGV4dENodW5rLnNsaWNlKDAsbisxKTt0ZXh0QnVmZmVyPShuPT09LTE/dGV4dEJ1ZmZlcjonJykrdGV4dENodW5rLnNsaWNlKG4rMSk7aWYoY2h1bmshPT0nJyl7d2FzQWN0aXZpdHk9dHJ1ZTt9Zm9yKHZhciBwb3NpdGlvbj0wO3Bvc2l0aW9uPGNodW5rLmxlbmd0aDtwb3NpdGlvbis9MSl7dmFyIGM9Y2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbik7aWYoc3RhdGU9PT1BRlRFUl9DUiYmYz09PSdcXG4nLmNoYXJDb2RlQXQoMCkpe3N0YXRlPUZJRUxEX1NUQVJUO31lbHNle2lmKHN0YXRlPT09QUZURVJfQ1Ipe3N0YXRlPUZJRUxEX1NUQVJUO31pZihjPT09J1xccicuY2hhckNvZGVBdCgwKXx8Yz09PSdcXG4nLmNoYXJDb2RlQXQoMCkpe2lmKHN0YXRlIT09RklFTERfU1RBUlQpe2lmKHN0YXRlPT09RklFTEQpe3ZhbHVlU3RhcnQ9cG9zaXRpb24rMTt9dmFyIGZpZWxkPWNodW5rLnNsaWNlKGZpZWxkU3RhcnQsdmFsdWVTdGFydC0xKTt2YXIgdmFsdWU9Y2h1bmsuc2xpY2UodmFsdWVTdGFydCsodmFsdWVTdGFydDxwb3NpdGlvbiYmY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KT09PScgJy5jaGFyQ29kZUF0KDApPzE6MCkscG9zaXRpb24pO2lmKGZpZWxkPT09J2RhdGEnKXtkYXRhQnVmZmVyKz0nXFxuJztkYXRhQnVmZmVyKz12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdpZCcpe2xhc3RFdmVudElkQnVmZmVyPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J2V2ZW50Jyl7ZXZlbnRUeXBlQnVmZmVyPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J3JldHJ5Jyl7aW5pdGlhbFJldHJ5PXBhcnNlRHVyYXRpb24odmFsdWUsaW5pdGlhbFJldHJ5KTtyZXRyeT1pbml0aWFsUmV0cnk7fWVsc2UgaWYoZmllbGQ9PT0naGVhcnRiZWF0VGltZW91dCcpe2hlYXJ0YmVhdFRpbWVvdXQ9cGFyc2VEdXJhdGlvbih2YWx1ZSxoZWFydGJlYXRUaW1lb3V0KTtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7fX19aWYoc3RhdGU9PT1GSUVMRF9TVEFSVCl7aWYoZGF0YUJ1ZmZlciE9PScnKXtsYXN0RXZlbnRJZD1sYXN0RXZlbnRJZEJ1ZmZlcjtpZihldmVudFR5cGVCdWZmZXI9PT0nJyl7ZXZlbnRUeXBlQnVmZmVyPSdtZXNzYWdlJzt9dmFyIGV2ZW50PW5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLHtkYXRhOmRhdGFCdWZmZXIuc2xpY2UoMSksbGFzdEV2ZW50SWQ6bGFzdEV2ZW50SWRCdWZmZXJ9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtpZihldmVudFR5cGVCdWZmZXI9PT0nbWVzc2FnZScpe2ZpcmUoZXMsZXMub25tZXNzYWdlLGV2ZW50KTt9aWYoY3VycmVudFN0YXRlPT09Q0xPU0VEKXtyZXR1cm47fX1kYXRhQnVmZmVyPScnO2V2ZW50VHlwZUJ1ZmZlcj0nJzt9c3RhdGU9Yz09PSdcXHInLmNoYXJDb2RlQXQoMCk/QUZURVJfQ1I6RklFTERfU1RBUlQ7fWVsc2V7aWYoc3RhdGU9PT1GSUVMRF9TVEFSVCl7ZmllbGRTdGFydD1wb3NpdGlvbjtzdGF0ZT1GSUVMRDt9aWYoc3RhdGU9PT1GSUVMRCl7aWYoYz09PSc6Jy5jaGFyQ29kZUF0KDApKXt2YWx1ZVN0YXJ0PXBvc2l0aW9uKzE7c3RhdGU9VkFMVUVfU1RBUlQ7fX1lbHNlIGlmKHN0YXRlPT09VkFMVUVfU1RBUlQpe3N0YXRlPVZBTFVFO319fX19fTt2YXIgb25GaW5pc2g9ZnVuY3Rpb24gb25GaW5pc2goKXtpZihjdXJyZW50U3RhdGU9PT1PUEVOfHxjdXJyZW50U3RhdGU9PT1DT05ORUNUSU5HKXtjdXJyZW50U3RhdGU9V0FJVElORztpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxyZXRyeSk7cmV0cnk9Y2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkqMTYscmV0cnkqMikpO2VzLnJlYWR5U3RhdGU9Q09OTkVDVElORzt2YXIgZXZlbnQ9bmV3IEV2ZW50KCdlcnJvcicpO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2ZpcmUoZXMsZXMub25lcnJvcixldmVudCk7fX07dmFyIGNsb3NlPWZ1bmN0aW9uIGNsb3NlKCl7Y3VycmVudFN0YXRlPUNMT1NFRDtpZihjYW5jZWxGdW5jdGlvbiE9dW5kZWZpbmVkKXtjYW5jZWxGdW5jdGlvbigpO2NhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt9aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fWVzLnJlYWR5U3RhdGU9Q0xPU0VEO307dmFyIG9uVGltZW91dD1mdW5jdGlvbiBvblRpbWVvdXQoKXt0aW1lb3V0PTA7aWYoY3VycmVudFN0YXRlIT09V0FJVElORyl7aWYoIXdhc0FjdGl2aXR5JiZjYW5jZWxGdW5jdGlvbiE9dW5kZWZpbmVkKXt0aHJvd0Vycm9yKG5ldyBFcnJvcignTm8gYWN0aXZpdHkgd2l0aGluICcraGVhcnRiZWF0VGltZW91dCsnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLicpKTtjYW5jZWxGdW5jdGlvbigpO2NhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt9ZWxzZXt3YXNBY3Rpdml0eT1mYWxzZTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO31yZXR1cm47fXdhc0FjdGl2aXR5PWZhbHNlO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7Y3VycmVudFN0YXRlPUNPTk5FQ1RJTkc7ZGF0YUJ1ZmZlcj0nJztldmVudFR5cGVCdWZmZXI9Jyc7bGFzdEV2ZW50SWRCdWZmZXI9bGFzdEV2ZW50SWQ7dGV4dEJ1ZmZlcj0nJztmaWVsZFN0YXJ0PTA7dmFsdWVTdGFydD0wO3N0YXRlPUZJRUxEX1NUQVJUOy8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxyXG4vLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXHJcbnZhciByZXF1ZXN0VVJMPXVybDtpZih1cmwuc2xpY2UoMCw1KSE9PSdkYXRhOicmJnVybC5zbGljZSgwLDUpIT09J2Jsb2I6Jyl7aWYobGFzdEV2ZW50SWQhPT0nJyl7cmVxdWVzdFVSTCs9KHVybC5pbmRleE9mKCc/Jyk9PT0tMT8nPyc6JyYnKSsnbGFzdEV2ZW50SWQ9JytlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpO319dmFyIHJlcXVlc3RIZWFkZXJzPXt9O3JlcXVlc3RIZWFkZXJzWydBY2NlcHQnXT0ndGV4dC9ldmVudC1zdHJlYW0nO2lmKGhlYWRlcnMhPXVuZGVmaW5lZCl7Zm9yKHZhciBuYW1lIGluIGhlYWRlcnMpe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLG5hbWUpKXtyZXF1ZXN0SGVhZGVyc1tuYW1lXT1oZWFkZXJzW25hbWVdO319fXRyeXt0cmFuc3BvcnQub3Blbih4aHIsb25TdGFydCxvblByb2dyZXNzLG9uRmluaXNoLHJlcXVlc3RVUkwsd2l0aENyZWRlbnRpYWxzLHJlcXVlc3RIZWFkZXJzKTt9Y2F0Y2goZXJyb3Ipe2Nsb3NlKCk7dGhyb3cgZXJyb3I7fX07ZXMudXJsPXVybDtlcy5yZWFkeVN0YXRlPUNPTk5FQ1RJTkc7ZXMud2l0aENyZWRlbnRpYWxzPXdpdGhDcmVkZW50aWFscztlcy5fY2xvc2U9Y2xvc2U7b25UaW1lb3V0KCk7fUV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKTtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DT05ORUNUSU5HPUNPTk5FQ1RJTkc7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTj1PUEVOO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNMT1NFRD1DTE9TRUQ7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbG9zZSgpO307RXZlbnRTb3VyY2VQb2x5ZmlsbC5DT05ORUNUSU5HPUNPTk5FQ1RJTkc7RXZlbnRTb3VyY2VQb2x5ZmlsbC5PUEVOPU9QRU47RXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQ9Q0xPU0VEO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLndpdGhDcmVkZW50aWFscz11bmRlZmluZWQ7dmFyIF9kZWZhdWx0PUV2ZW50U291cmNlUG9seWZpbGw7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudC1zb3VyY2UtcG9seWZpbGwuanMubWFwIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3VuZmV0Y2giLCJkb2N1bWVudCIsIndpbmRvdyIsIlJlc3BvbnNlIiwiVGV4dERlY29kZXIiLCJUZXh0RW5jb2RlciIsIkFib3J0Q29udHJvbGxlciIsInVuZGVmaW5lZCIsInNpZ25hbCIsImFib3J0IiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsImJpdHNOZWVkZWQiLCJjb2RlUG9pbnQiLCJwcm90b3R5cGUiLCJkZWNvZGUiLCJvY3RldHMiLCJ2YWxpZCIsInNoaWZ0Iiwib2N0ZXRzQ291bnQiLCJFcnJvciIsIlJFUExBQ0VSIiwic3RyaW5nIiwiaSIsImxlbmd0aCIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwidGltZW91dCIsInNpbGVudCIsImNsZWFyVGltZW91dCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib25TdGFydCIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJvblByb2dyZXNzIiwib25GaW5pc2giLCJvblJlYWR5U3RhdGVDaGFuZ2UiLCJvblRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJpbmRleE9mIiwibmFtZSIsInNldFJlcXVlc3RIZWFkZXIiLCJ2YWx1ZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNlbmQiLCJlcnJvcjEiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJjIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsIk9iamVjdCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJldmVudCIsInRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJ0eXBlIiwibGlzdGVuZXIiLCJoYW5kbGVFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJmb3VuZCIsInB1c2giLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsIm9wdGlvbnMiLCJkYXRhIiwibGFzdEV2ZW50SWQiLCJDb25uZWN0aW9uRXZlbnQiLCJXQUlUSU5HIiwiQ09OTkVDVElORyIsIk9QRU4iLCJDTE9TRUQiLCJBRlRFUl9DUiIsIkZJRUxEX1NUQVJUIiwiRklFTEQiLCJWQUxVRV9TVEFSVCIsIlZBTFVFIiwiY29udGVudFR5cGVSZWdFeHAiLCJNSU5JTVVNX0RVUkFUSU9OIiwiTUFYSU1VTV9EVVJBVElPTiIsInBhcnNlRHVyYXRpb24iLCJkZWYiLCJuIiwicGFyc2VJbnQiLCJjbGFtcER1cmF0aW9uIiwiTWF0aCIsIm1pbiIsIm1heCIsImZpcmUiLCJmIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsIm9ub3BlbiIsIm9ubWVzc2FnZSIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImVzIiwiQm9vbGVhbiIsImluaXRpYWxSZXRyeSIsImhlYXJ0YmVhdFRpbWVvdXQiLCJyZXRyeSIsIndhc0FjdGl2aXR5IiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiQ3VycmVudFRyYW5zcG9ydCIsIlRyYW5zcG9ydCIsInRyYW5zcG9ydCIsImNhbmNlbEZ1bmN0aW9uIiwiY3VycmVudFN0YXRlIiwiZGF0YUJ1ZmZlciIsImxhc3RFdmVudElkQnVmZmVyIiwiZXZlbnRUeXBlQnVmZmVyIiwidGV4dEJ1ZmZlciIsImZpZWxkU3RhcnQiLCJ2YWx1ZVN0YXJ0IiwidGVzdCIsIm1lc3NhZ2UiLCJjbG9zZSIsInRleHRDaHVuayIsInBvc2l0aW9uIiwiZmllbGQiLCJyZXF1ZXN0VVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdEhlYWRlcnMiLCJfZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/client/dev/event-source-polyfill.js\n");
=======
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js?4ea4");

exports.__esModule = true;
exports["default"] = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below


var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js?62e4")(module)))
>>>>>>> Stashed changes

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nexports.__esModule = true;\nexports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using\n// `style-loader` in development. It must be called before hydration, or else\n// rendering won't have the correct computed values in effects.\nfunction displayContent(callback) {\n    ;\n    (window.requestAnimationFrame || setTimeout)(function() {\n        for(var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;){\n            x[i].parentNode.removeChild(x[i]);\n        }\n        if (callback) {\n            callback();\n        }\n    });\n} //# sourceMappingURL=fouc.js.map\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZm91Yy5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQVk7QUFBQ0Esa0JBQWtCLEdBQUMsSUFBSTtBQUFDQSxzQkFBc0IsR0FBQ0UsY0FBYyxDQUFDLENBQStFO0FBQzFKLEVBQTZFO0FBQzdFLEVBQStEO1NBQ3REQSxjQUFjLENBQUNDLFFBQVEsRUFBQyxDQUFDOztLQUFFQyxNQUFNLENBQUNDLHFCQUFxQixJQUFFQyxVQUFVLEVBQUUsUUFBUSxHQUFFLENBQUM7UUFBQSxHQUFHLENBQUMsR0FBRyxDQUFDQyxDQUFDLEdBQUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBdUIseUJBQUVDLENBQUMsR0FBQ0gsQ0FBQyxDQUFDSSxNQUFNLEVBQUNELENBQUMsSUFBSSxDQUFDSDtZQUFBQSxDQUFDLENBQUNHLENBQUMsRUFBRUUsVUFBVSxDQUFDQyxXQUFXLENBQUNOLENBQUMsQ0FBQ0csQ0FBQztRQUFHLENBQUM7UUFBQSxFQUFFLEVBQUNQLFFBQVEsRUFBQyxDQUFDQTtZQUFBQSxRQUFRO1FBQUcsQ0FBQztJQUFBLENBQUM7QUFBRSxDQUFDLENBQ3ZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9mb3VjLmpzPzAwODciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kaXNwbGF5Q29udGVudD1kaXNwbGF5Q29udGVudDsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVtb3ZlIE5leHQuanMnIG5vLUZPVUMgc3R5bGVzIHdvcmthcm91bmQgZm9yIHVzaW5nXHJcbi8vIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LiBJdCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgaHlkcmF0aW9uLCBvciBlbHNlXHJcbi8vIHJlbmRlcmluZyB3b24ndCBoYXZlIHRoZSBjb3JyZWN0IGNvbXB1dGVkIHZhbHVlcyBpbiBlZmZlY3RzLlxyXG5mdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjayl7Oyh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxzZXRUaW1lb3V0KShmdW5jdGlvbigpe2Zvcih2YXIgeD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0LWhpZGUtZm91Y10nKSxpPXgubGVuZ3RoO2ktLTspe3hbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTt9aWYoY2FsbGJhY2spe2NhbGxiYWNrKCk7fX0pO31cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91Yy5qcy5tYXAiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkaXNwbGF5Q29udGVudCIsImNhbGxiYWNrIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsIngiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/client/dev/fouc.js\n");
=======
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js?62e4")(module)))
>>>>>>> Stashed changes

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< Updated upstream
eval("/* module decorator */ module = __webpack_require__.nmd(module);\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\nexports.__esModule = true;\nexports.closePing = closePing;\nexports.setupPing = setupPing;\nexports.currentPage = void 0;\nvar _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ \"./node_modules/next/dist/build/polyfills/unfetch.js\"));\nvar _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ \"./node_modules/next/dist/client/dev/error-overlay/eventsource.js\"); /* global location */ \nvar evtSource;\nvar currentPage;\nexports.currentPage = currentPage;\nfunction closePing() {\n    if (evtSource) evtSource.close();\n    evtSource = null;\n}\nfunction setupPing(assetPrefix, pathnameFn, retry) {\n    var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed\n    if (pathname === currentPage && !retry) return;\n    exports.currentPage = currentPage = pathname; // close current EventSource connection\n    closePing();\n    var url = \"\".concat(assetPrefix, \"/_next/webpack-hmr?page=\").concat(currentPage);\n    evtSource = (0, _eventsource.getEventSourceWrapper)({\n        path: url,\n        timeout: 5000,\n        ondemand: 1\n    });\n    evtSource.addMessageListener(function(event) {\n        if (event.data.indexOf('{') === -1) return;\n        try {\n            var payload = JSON.parse(event.data);\n            if (payload.invalid) {\n                // So, we need to make sure it exists before reloading.\n                (0, _unfetch.default)(location.href, {\n                    credentials: 'same-origin'\n                }).then(function(pageRes) {\n                    if (pageRes.status === 200) {\n                        location.reload();\n                    }\n                });\n            }\n        } catch (err) {\n            console.error('on-demand-entries failed to parse response', err);\n        }\n    });\n} //# sourceMappingURL=on-demand-entries-utils.js.map\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvb24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFZO0FBQUMsR0FBRyxDQUFDQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBOEM7QUFBRUMsa0JBQWtCLEdBQUMsSUFBSTtBQUFDQSxpQkFBaUIsR0FBQ0UsU0FBUztBQUFDRixpQkFBaUIsR0FBQ0csU0FBUztBQUFDSCxtQkFBbUIsR0FBQyxJQUFJLENBQUMsQ0FBQztBQUFDLEdBQUcsQ0FBQ0ssUUFBUSxHQUFDUCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw4RkFBbUM7QUFBRyxHQUFHLENBQUNPLFlBQVksR0FBQ1AsbUJBQU8sQ0FBQyxxR0FBNkIsRUFBRSxDQUFxQjtBQUFBLEdBQUcsQ0FBQ1EsU0FBUztBQUFDLEdBQUcsQ0FBQ0gsV0FBVztBQUFDSixtQkFBbUIsR0FBQ0ksV0FBVztTQUFVRixTQUFTLEdBQUUsQ0FBQztJQUFBLEVBQUUsRUFBQ0ssU0FBUyxFQUFDQSxTQUFTLENBQUNDLEtBQUs7SUFBR0QsU0FBUyxHQUFDLElBQUk7QUFBQyxDQUFDO1NBQVNKLFNBQVMsQ0FBQ00sV0FBVyxFQUFDQyxVQUFVLEVBQUNDLEtBQUssRUFBQyxDQUFDO0lBQUEsR0FBSyxDQUFDQyxRQUFRLEdBQUNGLFVBQVUsR0FBRyxDQUF1RTtJQUNob0IsRUFBRSxFQUFDRSxRQUFRLEtBQUdSLFdBQVcsS0FBR08sS0FBSyxFQUFDLE1BQU07SUFBQ1gsbUJBQW1CLEdBQUNJLFdBQVcsR0FBQ1EsUUFBUSxDQUFDLENBQXVDO0lBQ3pIVixTQUFTO0lBQUcsR0FBSyxDQUFDVyxHQUFHLEdBQUUsR0FBd0NULE1BQVcsQ0FBakRLLFdBQVcsRUFBQyxDQUF3QiwyQkFBYyxPQUFaTCxXQUFXO0lBQUdHLFNBQVMsSUFBRSxDQUFDLEVBQUNELFlBQVksQ0FBQ1EscUJBQXFCLEVBQUUsQ0FBQ0M7UUFBQUEsSUFBSSxFQUFDRixHQUFHO1FBQUNHLE9BQU8sRUFBQyxJQUFJO1FBQUNDLFFBQVEsRUFBQyxDQUFDO0lBQUEsQ0FBQztJQUFFVixTQUFTLENBQUNXLGtCQUFrQixDQUFDQyxRQUFRLENBQVJBLEtBQUssRUFBRSxDQUFDO1FBQUEsRUFBRSxFQUFDQSxLQUFLLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUcsU0FBSyxDQUFDLEVBQUMsTUFBTTtRQUFDLEdBQUcsRUFBQztZQUFBLEdBQUssQ0FBQ0MsT0FBTyxHQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsS0FBSyxDQUFDQyxJQUFJO1lBQUUsRUFBRSxFQUFDRSxPQUFPLENBQUNHLE9BQU8sRUFBQyxDQUFDO2dCQUMzUyxFQUF1RDtpQkFDdEQsQ0FBQyxFQUFDcEIsUUFBUSxDQUFDcUIsT0FBTyxFQUFFQyxRQUFRLENBQUNDLElBQUksRUFBQyxDQUFDQztvQkFBQUEsV0FBVyxFQUFDLENBQWE7Z0JBQUEsQ0FBQyxFQUFFQyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsT0FBTyxFQUFFLENBQUM7b0JBQUEsRUFBRSxFQUFDQSxPQUFPLENBQUNDLE1BQU0sS0FBRyxHQUFHLEVBQUMsQ0FBQ0w7d0JBQUFBLFFBQVEsQ0FBQ00sTUFBTTtvQkFBRyxDQUFDO2dCQUFBLENBQUM7WUFBRSxDQUFDO1FBQUEsQ0FBQyxNQUFLLEVBQUNDLEdBQUcsRUFBQyxDQUFDQztZQUFBQSxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUE0Qyw2Q0FBQ0YsR0FBRztRQUFFLENBQUM7SUFBQSxDQUFDO0FBQUUsQ0FBQyxDQUM3SiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvb24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanM/NjlmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jbG9zZVBpbmc9Y2xvc2VQaW5nO2V4cG9ydHMuc2V0dXBQaW5nPXNldHVwUGluZztleHBvcnRzLmN1cnJlbnRQYWdlPXZvaWQgMDt2YXIgX3VuZmV0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoXCIpKTt2YXIgX2V2ZW50c291cmNlPXJlcXVpcmUoXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIik7LyogZ2xvYmFsIGxvY2F0aW9uICovbGV0IGV2dFNvdXJjZTtsZXQgY3VycmVudFBhZ2U7ZXhwb3J0cy5jdXJyZW50UGFnZT1jdXJyZW50UGFnZTtmdW5jdGlvbiBjbG9zZVBpbmcoKXtpZihldnRTb3VyY2UpZXZ0U291cmNlLmNsb3NlKCk7ZXZ0U291cmNlPW51bGw7fWZ1bmN0aW9uIHNldHVwUGluZyhhc3NldFByZWZpeCxwYXRobmFtZUZuLHJldHJ5KXtjb25zdCBwYXRobmFtZT1wYXRobmFtZUZuKCk7Ly8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcclxuaWYocGF0aG5hbWU9PT1jdXJyZW50UGFnZSYmIXJldHJ5KXJldHVybjtleHBvcnRzLmN1cnJlbnRQYWdlPWN1cnJlbnRQYWdlPXBhdGhuYW1lOy8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxyXG5jbG9zZVBpbmcoKTtjb25zdCB1cmw9YCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtjdXJyZW50UGFnZX1gO2V2dFNvdXJjZT0oMCxfZXZlbnRzb3VyY2UuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKSh7cGF0aDp1cmwsdGltZW91dDo1MDAwLG9uZGVtYW5kOjF9KTtldnRTb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKGV2ZW50PT57aWYoZXZlbnQuZGF0YS5pbmRleE9mKCd7Jyk9PT0tMSlyZXR1cm47dHJ5e2NvbnN0IHBheWxvYWQ9SlNPTi5wYXJzZShldmVudC5kYXRhKTtpZihwYXlsb2FkLmludmFsaWQpey8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cclxuLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxyXG4oMCxfdW5mZXRjaC5kZWZhdWx0KShsb2NhdGlvbi5ocmVmLHtjcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihwYWdlUmVzPT57aWYocGFnZVJlcy5zdGF0dXM9PT0yMDApe2xvY2F0aW9uLnJlbG9hZCgpO319KTt9fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcignb24tZGVtYW5kLWVudHJpZXMgZmFpbGVkIHRvIHBhcnNlIHJlc3BvbnNlJyxlcnIpO319KTt9XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiY2xvc2VQaW5nIiwic2V0dXBQaW5nIiwiY3VycmVudFBhZ2UiLCJfdW5mZXRjaCIsIl9ldmVudHNvdXJjZSIsImV2dFNvdXJjZSIsImNsb3NlIiwiYXNzZXRQcmVmaXgiLCJwYXRobmFtZUZuIiwicmV0cnkiLCJwYXRobmFtZSIsInVybCIsImdldEV2ZW50U291cmNlV3JhcHBlciIsInBhdGgiLCJ0aW1lb3V0Iiwib25kZW1hbmQiLCJhZGRNZXNzYWdlTGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJpbmRleE9mIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImludmFsaWQiLCJkZWZhdWx0IiwibG9jYXRpb24iLCJocmVmIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicGFnZVJlcyIsInN0YXR1cyIsInJlbG9hZCIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/client/dev/on-demand-entries-utils.js\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/regenerator-runtime/runtime.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js ***!
  \************************************************************************/
/***/ (function(module) {
=======
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js?4ea4");

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  var url = "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage);
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js?62e4")(module)))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js?96cf":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js?62e4":
/*!************************************************!*\
  !*** ./node_modules/webpack/buildin/module.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};
>>>>>>> Stashed changes

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsTUFBTTtBQUNOLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0JBQWdCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanM/ZWNkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\n");

/***/ })

<<<<<<< Updated upstream
},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
=======
},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9QeWNoZWNoZS0yMDIxL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi8uLi9jbGllbnQvZGV2L2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2V2ZW50LXNvdXJjZS1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL2NsaWVudC9kZXYvb24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImRvY3VtZW50IiwiYXNzZXRQcmVmaXgiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJob3RVcGRhdGVQYXRoIiwibW9kdWxlIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJyZXMiLCJqc29uRGF0YSIsImN1clBhZ2UiLCJwYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsIk9iamVjdCIsIm1vZCIsImNvbnNvbGUiLCJwYXRoIiwiZXZlbnQiLCJtZXNzYWdlIiwidHJ5QXBwbHlVcGRhdGVzIiwiZXZlbnRDYWxsYmFja3MiLCJsYXN0QWN0aXZpdHkiLCJsaXN0ZW5lcnMiLCJvcHRpb25zIiwiaW5pdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVEaXNjb25uZWN0Iiwic291cmNlIiwiaSIsImNiIiwiY2xlYXJJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJjbG9zZSIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsIkV2ZW50U291cmNlV3JhcHBlciIsIlJlc3BvbnNlIiwiVGV4dERlY29kZXIiLCJUZXh0RW5jb2RlciIsIkFib3J0Q29udHJvbGxlciIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJvY3RldHNDb3VudCIsImNvZGVQb2ludCIsImJpdHNOZWVkZWQiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0cyIsIm9jdGV0IiwidmFsaWQiLCJTdHJpbmciLCJzdXBwb3J0c1N0cmVhbU9wdGlvbiIsInN0cmVhbSIsImsiLCJ0aGF0IiwieGhyIiwic3RhdGUiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25TdGFydCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJjb250ZW50VHlwZSIsIm9uUHJvZ3Jlc3MiLCJyZXNwb25zZVRleHQiLCJvbkZpbmlzaCIsIm9uUmVhZHlTdGF0ZUNoYW5nZSIsIm9uVGltZW91dCIsIlhNTEh0dHBSZXF1ZXN0IiwidXJsIiwiWEhSV3JhcHBlciIsIm5hbWUiLCJjIiwibWFwIiwiYXJyYXkiLCJhbGwiLCJsaW5lIiwicGFydHMiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwiSGVhZGVyc1BvbHlmaWxsIiwiWEhSVHJhbnNwb3J0Iiwib2Zmc2V0IiwiY2h1bmsiLCJvblByb2dyZXNzQ2FsbGJhY2siLCJoZWFkZXJzIiwib25TdGFydENhbGxiYWNrIiwib25GaW5pc2hDYWxsYmFjayIsIkhlYWRlcnNXcmFwcGVyIiwiY29udHJvbGxlciIsInNpZ25hbCIsInRleHREZWNvZGVyIiwiY3JlZGVudGlhbHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJjYWNoZSIsInJlYWRlciIsInJlc3BvbnNlIiwicmVhZE5leHRDaHVuayIsInJlc3VsdCIsInJlc29sdmUiLCJyZWplY3QiLCJQcm9taXNlIiwiRXZlbnRUYXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwibGVuZ3RoIiwibGlzdGVuZXIiLCJ0aHJvd0Vycm9yIiwidHlwZSIsImZvdW5kIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsIkNvbm5lY3Rpb25FdmVudCIsIldBSVRJTkciLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NFRCIsIkFGVEVSX0NSIiwiRklFTERfU1RBUlQiLCJGSUVMRCIsIlZBTFVFX1NUQVJUIiwiVkFMVUUiLCJjb250ZW50VHlwZVJlZ0V4cCIsIk1JTklNVU1fRFVSQVRJT04iLCJNQVhJTVVNX0RVUkFUSU9OIiwicGFyc2VEdXJhdGlvbiIsIm4iLCJwYXJzZUludCIsImNsYW1wRHVyYXRpb24iLCJNYXRoIiwiZmlyZSIsImYiLCJzdGFydCIsImlzRmV0Y2hTdXBwb3J0ZWQiLCJmZXRjaCIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwibGFzdEV2ZW50SWQiLCJyZXRyeSIsIndhc0FjdGl2aXR5IiwiQ3VycmVudFRyYW5zcG9ydCIsInRyYW5zcG9ydCIsImNhbmNlbEZ1bmN0aW9uIiwiY3VycmVudFN0YXRlIiwiZGF0YUJ1ZmZlciIsImxhc3RFdmVudElkQnVmZmVyIiwiZXZlbnRUeXBlQnVmZmVyIiwidGV4dEJ1ZmZlciIsImZpZWxkU3RhcnQiLCJ2YWx1ZVN0YXJ0IiwiZXMiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwieCIsImNhbGxiYWNrIiwiZXZ0U291cmNlIiwicGF0aG5hbWUiLCJwYXRobmFtZUZuIiwiY2xvc2VQaW5nIiwib25kZW1hbmQiLCJwYXlsb2FkIiwibG9jYXRpb24iLCJwYWdlUmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLG1CQUFPLENBQUMsK0VBQXFCOzs7Ozs7Ozs7Ozs7QUNBOUMsNkJBQTZCLGNBQWMsMkJBQTJCLHVDQUF1QyxjQUFjLE9BQU8saUdBQWlHLHVDQUF1QyxpQkFBaUIsbURBQW1ELGlCQUFpQiwrQ0FBK0Msa0JBQWtCLGdCQUFnQixTQUFTLG9CQUFvQixTQUFTLGlCQUFpQiwwQkFBMEIsaUJBQWlCLCtCQUErQiw4REFBOEQsaUZBQWlGLCtEQUErRCxTQUFTLHFHQUFxRyxxQkFBcUI7QUFDbDRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUxBOzs7QUFPQSxJQUFJLENBQUNBLE1BQU0sQ0FBWCxhQUF5QjtBQUN2QkEsUUFBTSxDQUFOQSxjQUFxQkMsb0JBQXJCRDtBQUdGOztBQUFBLElBQU1FLElBQUksR0FBR0MsSUFBSSxDQUFKQSxNQUFXQyxRQUFRLENBQVJBLGdDQUF4QixXQUFhRCxDQUFiO0lBQ0ksVyxHQUFKLEksQ0FBSSxXO0lBQUEsSSxHQUFKLEksQ0FBSSxJO0FBQ0pFLFdBQVcsR0FBR0EsV0FBVyxJQUF6QkE7QUFDQSxJQUFJQyxjQUFjLEdBQWxCO0FBQ0E7O0FBQ0EsSUFBSUMsT0FBTyxH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OztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2FtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xyXG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVqZWN0KGVycm9yKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChpbmZvLmRvbmUpIHtcclxuICAgIHJlc29sdmUodmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XHJcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XHJcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgIFwiZGVmYXVsdFwiOiBvYmpcclxuICB9O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcclxuIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj1ufHx7fSxuZXcgUHJvbWlzZShmdW5jdGlvbih0LHIpe3ZhciBzPW5ldyBYTUxIdHRwUmVxdWVzdCxvPVtdLHU9W10saT17fSxhPWZ1bmN0aW9uKCl7cmV0dXJue29rOjI9PShzLnN0YXR1cy8xMDB8MCksc3RhdHVzVGV4dDpzLnN0YXR1c1RleHQsc3RhdHVzOnMuc3RhdHVzLHVybDpzLnJlc3BvbnNlVVJMLHRleHQ6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHMucmVzcG9uc2VUZXh0KX0sanNvbjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoSlNPTi5wYXJzZShzLnJlc3BvbnNlVGV4dCkpfSxibG9iOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbcy5yZXNwb25zZV0pKX0sY2xvbmU6YSxoZWFkZXJzOntrZXlzOmZ1bmN0aW9uKCl7cmV0dXJuIG99LGVudHJpZXM6ZnVuY3Rpb24oKXtyZXR1cm4gdX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBpW2UudG9Mb3dlckNhc2UoKV19LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpaW4gaX19fX07Zm9yKHZhciBsIGluIHMub3BlbihuLm1ldGhvZHx8XCJnZXRcIixlLCEwKSxzLm9ubG9hZD1mdW5jdGlvbigpe3MuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXiguKj8pOlteXFxTXFxuXSooW1xcc1xcU10qPykkL2dtLGZ1bmN0aW9uKGUsbix0KXtvLnB1c2gobj1uLnRvTG93ZXJDYXNlKCkpLHUucHVzaChbbix0XSksaVtuXT1pW25dP2lbbl0rXCIsXCIrdDp0fSksdChhKCkpfSxzLm9uZXJyb3I9cixzLndpdGhDcmVkZW50aWFscz1cImluY2x1ZGVcIj09bi5jcmVkZW50aWFscyxuLmhlYWRlcnMpcy5zZXRSZXF1ZXN0SGVhZGVyKGwsbi5oZWFkZXJzW2xdKTtzLnNlbmQobi5ib2R5fHxudWxsKX0pfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5qcy5tYXBcclxuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuaW1wb3J0IEV2ZW50U291cmNlUG9seWZpbGwgZnJvbSAnLi9ldmVudC1zb3VyY2UtcG9seWZpbGwnXG5pbXBvcnQgeyBnZXRFdmVudFNvdXJjZVdyYXBwZXIgfSBmcm9tICcuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UnXG5pbXBvcnQgeyBzZXR1cFBpbmcgfSBmcm9tICcuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzJ1xuaW1wb3J0IHsgZGlzcGxheUNvbnRlbnQgfSBmcm9tICcuL2ZvdWMnXG5cbmlmICghd2luZG93LkV2ZW50U291cmNlKSB7XG4gIHdpbmRvdy5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlUG9seWZpbGxcbn1cblxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudClcbmxldCB7IGFzc2V0UHJlZml4LCBwYWdlIH0gPSBkYXRhXG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8ICcnXG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmxldCBjdXJIYXNoID0gX193ZWJwYWNrX2hhc2hfX1xuY29uc3QgaG90VXBkYXRlUGF0aCA9XG4gIGFzc2V0UHJlZml4ICsgKGFzc2V0UHJlZml4LmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJykgKyAnX25leHQvc3RhdGljL3dlYnBhY2svJ1xuXG4vLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cbmZ1bmN0aW9uIGlzVXBkYXRlQXZhaWxhYmxlKCkge1xuICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxuICAvLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4gIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICByZXR1cm4gbW9zdFJlY2VudEhhc2ggIT09IF9fd2VicGFja19oYXNoX19cbn1cblxuLy8gV2VicGFjayBkaXNhbGxvd3MgdXBkYXRlcyBpbiBvdGhlciBzdGF0ZXMuXG5mdW5jdGlvbiBjYW5BcHBseVVwZGF0ZXMoKSB7XG4gIHJldHVybiBtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZSdcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiByZWFkcyBjb2RlIHVwZGF0ZXMgb24gdGhlIGZseSBhbmQgaGFyZFxuLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxuYXN5bmMgZnVuY3Rpb24gdHJ5QXBwbHlVcGRhdGVzKCkge1xuICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYClcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2VcbiAgICAvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXG4gICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKVxuICAgICAgPyBqc29uRGF0YS5jXG4gICAgICA6IE9iamVjdC5rZXlzKGpzb25EYXRhLmMpXG4gICAgKS5zb21lKChtb2QpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWBcbiAgICAgICAgKSAhPT0gLTEgfHxcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtcbiAgICAgICAgICAgIGN1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YFxuICAgICAgICAgIH1gLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpXG4gICAgICAgICkgIT09IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGlmIChwYWdlVXBkYXRlZCkge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaFxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsIGVycilcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgfVxufVxuXG5nZXRFdmVudFNvdXJjZVdyYXBwZXIoe1xuICBwYXRoOiBgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXJgLFxufSkuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuXG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcbiAgICAgIGlmICghbWVzc2FnZS5oYXNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbW9zdFJlY2VudEhhc2ggPSBtZXNzYWdlLmhhc2hcbiAgICAgIHRyeUFwcGx5VXBkYXRlcygpXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnICsgZXZlbnQuZGF0YSArICdcXG4nICsgZXgpXG4gIH1cbn0pXG5cbnNldHVwUGluZyhhc3NldFByZWZpeCwgKCkgPT4gcGFnZSlcbmRpc3BsYXlDb250ZW50KClcbiIsImNvbnN0IGV2ZW50Q2FsbGJhY2tzID0gW11cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgdmFyIHNvdXJjZVxuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB2YXIgbGlzdGVuZXJzID0gW11cblxuICBpZiAoIW9wdGlvbnMudGltZW91dCkge1xuICAgIG9wdGlvbnMudGltZW91dCA9IDIwICogMTAwMFxuICB9XG5cbiAgaW5pdCgpXG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgaGFuZGxlRGlzY29ubmVjdCgpXG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpXG4gICAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZVxuICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdFxuICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJylcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpXG4gICAgfVxuXG4gICAgZXZlbnRDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGlmICghY2IudW5maWx0ZXJlZCAmJiBldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpID09PSAtMSkgcmV0dXJuXG4gICAgICBjYihldmVudClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgc291cmNlLmNsb3NlKClcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbilcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMub25kZW1hbmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyOiAoY2IpID0+IHtcbiAgICAgICAgZXZlbnRDYWxsYmFja3MucHVzaChjYilcbiAgICAgIH0sXG4gICAgfVxuICB9XG4gIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoJ1xuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnRcbnZhciBSZXNwb25zZSA9IHdpbmRvdy5SZXNwb25zZVxudmFyIFRleHREZWNvZGVyID0gd2luZG93LlRleHREZWNvZGVyXG52YXIgVGV4dEVuY29kZXIgPSB3aW5kb3cuVGV4dEVuY29kZXJcbnZhciBBYm9ydENvbnRyb2xsZXIgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyXG5cbmlmIChBYm9ydENvbnRyb2xsZXIgPT0gdW5kZWZpbmVkKSB7XG4gIEFib3J0Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNpZ25hbCA9IG51bGxcbiAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24gKCkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCkge1xuICB0aGlzLmJpdHNOZWVkZWQgPSAwXG4gIHRoaXMuY29kZVBvaW50ID0gMFxufVxuXG5UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAob2N0ZXRzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCwgc2hpZnQsIG9jdGV0c0NvdW50KSB7XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDA4MCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgwN2ZmXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweDA4MDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZDdmZikgfHxcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweGUwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZmZmZilcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDEwMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDEwZmZmZlxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PiA2ID4gMTUgPyAzIDogY29kZVBvaW50ID4gMzEgPyAyIDogMVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xuICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICB2YXIgUkVQTEFDRVIgPSAweGZmZmRcbiAgdmFyIHN0cmluZyA9ICcnXG4gIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkXG4gIHZhciBjb2RlUG9pbnQgPSB0aGlzLmNvZGVQb2ludFxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXVxuICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG9jdGV0IDwgMTI4IHx8XG4gICAgICAgIG9jdGV0ID4gMTkxIHx8XG4gICAgICAgICF2YWxpZChcbiAgICAgICAgICAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpLFxuICAgICAgICAgIGJpdHNOZWVkZWQgLSA2LFxuICAgICAgICAgIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldFxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMVxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxXG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAyXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTVcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDNcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBiaXRzTmVlZGVkICE9PSAwICYmXG4gICAgICAgICF2YWxpZChjb2RlUG9pbnQsIGJpdHNOZWVkZWQsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYml0c05lZWRlZCAtPSA2XG4gICAgICBjb2RlUG9pbnQgPSAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpID4+IDEwKSlcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgMHhkYzAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSAmIDB4M2ZmKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRoaXMuYml0c05lZWRlZCA9IGJpdHNOZWVkZWRcbiAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnRcbiAgcmV0dXJuIHN0cmluZ1xufVxuXG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd0ZXN0JyksIHtcbiAgICAgICAgc3RyZWFtOiB0cnVlLFxuICAgICAgfSkgPT09ICd0ZXN0J1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gSUUsIEVkZ2VcbmlmIChcbiAgVGV4dERlY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gIFRleHRFbmNvZGVyID09IHVuZGVmaW5lZCB8fFxuICAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKVxuKSB7XG4gIFRleHREZWNvZGVyID0gVGV4dERlY29kZXJQb2x5ZmlsbFxufVxuXG52YXIgayA9IGZ1bmN0aW9uICgpIHt9XG5cbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgdGhpcy5yZXNwb25zZVR5cGUgPSAnJ1xuICB0aGlzLnJlYWR5U3RhdGUgPSAwXG4gIHRoaXMuc3RhdHVzID0gMFxuICB0aGlzLnN0YXR1c1RleHQgPSAnJ1xuICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnXG4gIHRoaXMub25wcm9ncmVzcyA9IGtcbiAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gIHRoaXMuX2NvbnRlbnRUeXBlID0gJydcbiAgdGhpcy5feGhyID0geGhyXG4gIHRoaXMuX3NlbmRUaW1lb3V0ID0gMFxuICB0aGlzLl9hYm9ydCA9IGtcbn1cblxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuICB0aGlzLl9hYm9ydCh0cnVlKVxuXG4gIHZhciB0aGF0ID0gdGhpc1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIHZhciBzdGF0ZSA9IDFcbiAgdmFyIHRpbWVvdXQgPSAwXG5cbiAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbiAoc2lsZW50KSB7XG4gICAgaWYgKHRoYXQuX3NlbmRUaW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpXG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIHhoci5vbmxvYWQgPSBrXG4gICAgICB4aHIub25lcnJvciA9IGtcbiAgICAgIHhoci5vbmFib3J0ID0ga1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBrXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZSA9IDBcbiAgfVxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgLy8gc3RhdGUgPSAyO1xuICAgICAgdmFyIHN0YXR1cyA9IDBcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0gJydcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIElFIDwgMTAgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDIgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDNcbiAgICAgICAgICAvLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG4gICAgICAgICAgc3RhdHVzID0gMFxuICAgICAgICAgIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gMjAwXG4gICAgICAgIHN0YXR1c1RleHQgPSAnT0snXG4gICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmNvbnRlbnRUeXBlXG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XG4gICAgICAgIHN0YXRlID0gMlxuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyXG4gICAgICAgIHRoYXQuc3RhdHVzID0gc3RhdHVzXG4gICAgICAgIHRoYXQuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHRcbiAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZVxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIG9uU3RhcnQoKVxuICAgIGlmIChzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSAzXG4gICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gJydcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDNcbiAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0XG4gICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG4gICAgb25Qcm9ncmVzcygpXG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgIH1cbiAgfVxuICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBPcGVyYSAxMlxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIG9uRmluaXNoKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgb25Qcm9ncmVzcygpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgIG9uU3RhcnQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgNTAwKVxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgb25Qcm9ncmVzcygpXG4gICAgfVxuICB9XG5cbiAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcbiAgeGhyLm9ubG9hZCA9IG9uRmluaXNoXG4gIHhoci5vbmVycm9yID0gb25GaW5pc2hcbiAgLy8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3IsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxuICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4MDIwMFxuICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXG4gIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xuICB4aHIub25hYm9ydCA9IG9uRmluaXNoXG5cbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG4gIGlmIChcbiAgICAhKCdzZW5kQXNCaW5hcnknIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpXG4gICkge1xuICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzc1xuICB9XG5cbiAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuICAvLyBPcGVyYSA8IDEyXG4gIC8vIEZpcmVmb3ggPCAzLjVcbiAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4gIC8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4gIC8vIHNlZSBhbHNvICM2NFxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlXG5cbiAgaWYgKCdjb250ZW50VHlwZScgaW4geGhyKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncGFkZGluZz10cnVlJ1xuICB9XG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKVxuXG4gIGlmICgncmVhZHlTdGF0ZScgaW4geGhyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4gICAgLy8gIzkxXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCAwKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYWJvcnQoZmFsc2UpXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4geGhyKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgPyB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICA6ICcnXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICAvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcbiAgaWYgKFxuICAgICEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgIGRvY3VtZW50ICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJ1xuICApIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgICB0aGF0LnNlbmQoKVxuICAgIH0sIDQpXG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy53aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gIHRyeSB7XG4gICAgLy8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxuICAgIHhoci5zZW5kKHVuZGVmaW5lZClcbiAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgLy8gU2FmYXJpIDUuMS43LCBPcGVyYSAxMlxuICAgIHRocm93IGVycm9yMVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyAweDIwKVxuICB9KVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XG4gIC8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHZhciBhcnJheSA9IGFsbC5zcGxpdCgnXFxyXFxuJylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBsaW5lID0gYXJyYXlbaV1cbiAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpXG4gICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpXG4gICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOiAnKVxuICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZVxuICB9XG4gIHRoaXMuX21hcCA9IG1hcFxufVxuSGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fbWFwW3RvTG93ZXJDYXNlKG5hbWUpXVxufVxuXG5mdW5jdGlvbiBYSFJUcmFuc3BvcnQoKSB7fVxuXG5YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybClcbiAgdmFyIG9mZnNldCA9IDBcbiAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICB2YXIgY2h1bmsgPSByZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KVxuICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGhcbiAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gIH1cbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0XG4gICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXG4gICAgICB2YXIgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICBuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgeGhyLmFib3J0KClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCdcbiAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9XG4gIH1cbiAgeGhyLnNlbmQoKVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKSB7XG4gIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzXG59XG5IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpXG59XG5cbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge31cblxuRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsIC8vIHNlZSAjMTIwXG4gIHZhciB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG4gIGZldGNoKHVybCwge1xuICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgc2lnbmFsOiBzaWduYWwsXG4gICAgY2FjaGU6ICduby1zdG9yZScsXG4gIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSxcbiAgICAgICAgbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgICAgICAgcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlYWRlclxuICAgICAgICAgICAgLnJlYWQoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IHRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgWydjYXRjaCddKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XG4gIHRoaXMuX2xpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbClcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRocm93IGVcbiAgfSwgMClcbn1cblxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQudGFyZ2V0ID0gdGhpc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbGVuZ3RoID0gdHlwZUxpc3RlbmVycy5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSB0eXBlTGlzdGVuZXJzW2ldXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvd0Vycm9yKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgdHlwZUxpc3RlbmVycyA9IFtdXG4gICAgbGlzdGVuZXJzW3R5cGVdID0gdHlwZUxpc3RlbmVyc1xuICB9XG4gIHZhciBmb3VuZCA9IGZhbHNlXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgZm91bmQgPSB0cnVlXG4gICAgfVxuICB9XG4gIGlmICghZm91bmQpIHtcbiAgICB0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsdGVyZWQgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gIT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGxpc3RlbmVyc1t0eXBlXVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNbdHlwZV0gPSBmaWx0ZXJlZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudCh0eXBlKSB7XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGFcbiAgdGhpcy5sYXN0RXZlbnRJZCA9IG9wdGlvbnMubGFzdEV2ZW50SWRcbn1cblxuTWVzc2FnZUV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG5mdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXNcbiAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0XG4gIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVyc1xufVxuXG5Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbnZhciBXQUlUSU5HID0gLTFcbnZhciBDT05ORUNUSU5HID0gMFxudmFyIE9QRU4gPSAxXG52YXIgQ0xPU0VEID0gMlxuXG52YXIgQUZURVJfQ1IgPSAtMVxudmFyIEZJRUxEX1NUQVJUID0gMFxudmFyIEZJRUxEID0gMVxudmFyIFZBTFVFX1NUQVJUID0gMlxudmFyIFZBTFVFID0gM1xuXG52YXIgY29udGVudFR5cGVSZWdFeHAgPSAvXnRleHRcXC9ldmVudFxcLXN0cmVhbTs/KFxccypjaGFyc2V0XFw9dXRmXFwtOCk/JC9pXG5cbnZhciBNSU5JTVVNX0RVUkFUSU9OID0gMTAwMFxudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMFxuXG52YXIgcGFyc2VEdXJhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgZGVmKSB7XG4gIHZhciBuID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICBpZiAobiAhPT0gbikge1xuICAgIG4gPSBkZWZcbiAgfVxuICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKVxufVxudmFyIGNsYW1wRHVyYXRpb24gPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgTUlOSU1VTV9EVVJBVElPTiksIE1BWElNVU1fRFVSQVRJT04pXG59XG5cbnZhciBmaXJlID0gZnVuY3Rpb24gKHRoYXQsIGYsIGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmLmNhbGwodGhhdCwgZXZlbnQpXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3dFcnJvcihlKVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLCBvcHRpb25zKSB7XG4gIEV2ZW50VGFyZ2V0LmNhbGwodGhpcylcblxuICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZFxuICB0aGlzLm9ubWVzc2FnZSA9IHVuZGVmaW5lZFxuICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWRcblxuICB0aGlzLnVybCA9IHVuZGVmaW5lZFxuICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWRcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuICB0aGlzLl9jbG9zZSA9IHVuZGVmaW5lZFxuXG4gIHN0YXJ0KHRoaXMsIHVybCwgb3B0aW9ucylcbn1cblxudmFyIGlzRmV0Y2hTdXBwb3J0ZWQgPVxuICBmZXRjaCAhPSB1bmRlZmluZWQgJiYgUmVzcG9uc2UgIT0gdW5kZWZpbmVkICYmICdib2R5JyBpbiBSZXNwb25zZS5wcm90b3R5cGVcblxuZnVuY3Rpb24gc3RhcnQoZXMsIHVybCwgb3B0aW9ucykge1xuICB1cmwgPSBTdHJpbmcodXJsKVxuICB2YXIgd2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscylcblxuICB2YXIgaW5pdGlhbFJldHJ5ID0gY2xhbXBEdXJhdGlvbigxMDAwKVxuICB2YXIgaGVhcnRiZWF0VGltZW91dCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBwYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCwgNDUwMDApXG4gICAgICA6IGNsYW1wRHVyYXRpb24oNDUwMDApXG5cbiAgdmFyIGxhc3RFdmVudElkID0gJydcbiAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gIHZhciB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gIHZhciBoZWFkZXJzID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSlcbiAgICAgIDogdW5kZWZpbmVkXG4gIHZhciBDdXJyZW50VHJhbnNwb3J0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWRcbiAgICAgID8gb3B0aW9ucy5UcmFuc3BvcnRcbiAgICAgIDogWE1MSHR0cFJlcXVlc3RcbiAgdmFyIHhociA9XG4gICAgaXNGZXRjaFN1cHBvcnRlZCAmJlxuICAgICEob3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkKVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSlcbiAgdmFyIHRyYW5zcG9ydCA9IHhociA9PSB1bmRlZmluZWQgPyBuZXcgRmV0Y2hUcmFuc3BvcnQoKSA6IG5ldyBYSFJUcmFuc3BvcnQoKVxuICB2YXIgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgdmFyIHRpbWVvdXQgPSAwXG4gIHZhciBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gIHZhciBkYXRhQnVmZmVyID0gJydcbiAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gJydcbiAgdmFyIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG5cbiAgdmFyIHRleHRCdWZmZXIgPSAnJ1xuICB2YXIgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICB2YXIgZmllbGRTdGFydCA9IDBcbiAgdmFyIHZhbHVlU3RhcnQgPSAwXG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgaGVhZGVycywgY2FuY2VsKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY2FuY2VsRnVuY3Rpb24gPSBjYW5jZWxcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdHVzID09PSAyMDAgJiZcbiAgICAgICAgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpXG4gICAgICApIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gT1BFTlxuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgZXMucmVhZHlTdGF0ZSA9IE9QRU5cbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnb3BlbicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICcnXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XG4gICAgICAgICAgICBzdGF0dXNUZXh0ID0gc3RhdHVzVGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIFwiICtcbiAgICAgICAgICAgIHN0YXR1cyArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgc3RhdHVzVGV4dCArXG4gICAgICAgICAgICAnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiICtcbiAgICAgICAgICAgIChjb250ZW50VHlwZSA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyAnLSdcbiAgICAgICAgICAgICAgOiBjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csICcgJykpICtcbiAgICAgICAgICAgICcuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSlcbiAgICAgICAgY2xvc2UoKVxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKHRleHRDaHVuaykge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgIHZhciBuID0gLTFcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dENodW5rLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjID0gdGV4dENodW5rLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaWYgKGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIG4gPSBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpXG4gICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSlcbiAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgY2h1bmsubGVuZ3RoOyBwb3NpdGlvbiArPSAxKSB7XG4gICAgICAgIHZhciBjID0gY2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbilcbiAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUiAmJiBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcbiAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBmaWVsZCA9IGNodW5rLnNsaWNlKGZpZWxkU3RhcnQsIHZhbHVlU3RhcnQgLSAxKVxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaHVuay5zbGljZShcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ICtcbiAgICAgICAgICAgICAgICAgICh2YWx1ZVN0YXJ0IDwgcG9zaXRpb24gJiZcbiAgICAgICAgICAgICAgICAgIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IDApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9ICdcXG4nXG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3JldHJ5Jykge1xuICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSlcbiAgICAgICAgICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaGVhcnRiZWF0VGltZW91dCcpIHtcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoZGF0YUJ1ZmZlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUJ1ZmZlci5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkOiBsYXN0RXZlbnRJZEJ1ZmZlcixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm1lc3NhZ2UsIGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gJydcbiAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlID0gYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSA/IEFGVEVSX0NSIDogRklFTERfU1RBUlRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICBpZiAoYyA9PT0gJzonLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9TVEFSVFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBWQUxVRV9TVEFSVCkge1xuICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4gfHwgY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25UaW1lb3V0KClcbiAgICAgIH0sIHJldHJ5KVxuICAgICAgcmV0cnkgPSBjbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSAqIDE2LCByZXRyeSAqIDIpKVxuXG4gICAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdlcnJvcicpXG4gICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRFxuICAgIGlmIChjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIHRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGVzLnJlYWR5U3RhdGUgPSBDTE9TRURcbiAgfVxuXG4gIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dCA9IDBcblxuICAgIGlmIChjdXJyZW50U3RhdGUgIT09IFdBSVRJTkcpIHtcbiAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93RXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ05vIGFjdGl2aXR5IHdpdGhpbiAnICtcbiAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCArXG4gICAgICAgICAgICAgICcgbWlsbGlzZWNvbmRzLiBSZWNvbm5lY3RpbmcuJ1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgaGVhcnRiZWF0VGltZW91dClcblxuICAgIGN1cnJlbnRTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICBkYXRhQnVmZmVyID0gJydcbiAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgIGxhc3RFdmVudElkQnVmZmVyID0gbGFzdEV2ZW50SWRcbiAgICB0ZXh0QnVmZmVyID0gJydcbiAgICBmaWVsZFN0YXJ0ID0gMFxuICAgIHZhbHVlU3RhcnQgPSAwXG4gICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XG4gICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxuICAgIHZhciByZXF1ZXN0VVJMID0gdXJsXG4gICAgaWYgKHVybC5zbGljZSgwLCA1KSAhPT0gJ2RhdGE6JyAmJiB1cmwuc2xpY2UoMCwgNSkgIT09ICdibG9iOicpIHtcbiAgICAgIGlmIChsYXN0RXZlbnRJZCAhPT0gJycpIHtcbiAgICAgICAgcmVxdWVzdFVSTCArPVxuICAgICAgICAgICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgK1xuICAgICAgICAgICdsYXN0RXZlbnRJZD0nICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpXG4gICAgICB9XG4gICAgfVxuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IHt9XG4gICAgcmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddID0gJ3RleHQvZXZlbnQtc3RyZWFtJ1xuICAgIGlmIChoZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tuYW1lXSA9IGhlYWRlcnNbbmFtZV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgdHJhbnNwb3J0Lm9wZW4oXG4gICAgICAgIHhocixcbiAgICAgICAgb25TdGFydCxcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgb25GaW5pc2gsXG4gICAgICAgIHJlcXVlc3RVUkwsXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2xvc2UoKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cblxuICBlcy51cmwgPSB1cmxcbiAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgZXMud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIGVzLl9jbG9zZSA9IGNsb3NlXG5cbiAgb25UaW1lb3V0KClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSlcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fY2xvc2UoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U291cmNlUG9seWZpbGxcbiIsIi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW1vdmUgTmV4dC5qcycgbm8tRk9VQyBzdHlsZXMgd29ya2Fyb3VuZCBmb3IgdXNpbmdcbi8vIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LiBJdCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgaHlkcmF0aW9uLCBvciBlbHNlXG4vLyByZW5kZXJpbmcgd29uJ3QgaGF2ZSB0aGUgY29ycmVjdCBjb21wdXRlZCB2YWx1ZXMgaW4gZWZmZWN0cy5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjaykge1xuICA7KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24gKCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLCBpID0geC5sZW5ndGg7XG4gICAgICBpLS07XG5cbiAgICApIHtcbiAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKVxuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH0pXG59XG4iLCIvKiBnbG9iYWwgbG9jYXRpb24gKi9cblxuaW1wb3J0IGZldGNoIGZyb20gJ25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvdW5mZXRjaCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcblxubGV0IGV2dFNvdXJjZVxuZXhwb3J0IGxldCBjdXJyZW50UGFnZVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQaW5nKCkge1xuICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKVxuICBldnRTb3VyY2UgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgsIHBhdGhuYW1lRm4sIHJldHJ5KSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gcGF0aG5hbWVGbigpXG5cbiAgLy8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbiAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVyblxuICBjdXJyZW50UGFnZSA9IHBhdGhuYW1lXG4gIC8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxuICBjbG9zZVBpbmcoKVxuXG4gIGNvbnN0IHVybCA9IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcj9wYWdlPSR7Y3VycmVudFBhZ2V9YFxuICBldnRTb3VyY2UgPSBnZXRFdmVudFNvdXJjZVdyYXBwZXIoeyBwYXRoOiB1cmwsIHRpbWVvdXQ6IDUwMDAsIG9uZGVtYW5kOiAxIH0pXG5cbiAgZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcbiAgICAgIGlmIChwYXlsb2FkLmludmFsaWQpIHtcbiAgICAgICAgLy8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXG4gICAgICAgIGZldGNoKGxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbigocGFnZVJlcykgPT4ge1xuICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycilcbiAgICB9XG4gIH0pXG59XG4iLCIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXHJcbiAqXHJcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXHJcbiAqL1xyXG5cclxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcclxuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XHJcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXHJcbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcclxuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xyXG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XHJcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcclxuXHJcbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XHJcbiAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqW2tleV07XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxyXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XHJcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cclxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xyXG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcclxuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xyXG5cclxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcclxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cclxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xyXG4gIH1cclxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xyXG5cclxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cclxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcclxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcclxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXHJcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxyXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcclxuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxyXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxyXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcclxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXHJcbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XHJcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XHJcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcclxuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xyXG5cclxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXHJcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxyXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XHJcblxyXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxyXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxyXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXHJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cclxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxyXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cclxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XHJcblxyXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcclxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxyXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xyXG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcclxuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XHJcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXHJcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxyXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XHJcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxyXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxyXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcclxuICB9XHJcblxyXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XHJcbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XHJcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcclxuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xyXG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxyXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXHJcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcclxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxyXG4gICk7XHJcblxyXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXHJcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cclxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XHJcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcclxuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xyXG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xyXG4gICAgcmV0dXJuIGN0b3JcclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxyXG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cclxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXHJcbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XHJcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XHJcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcclxuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XHJcbiAgICByZXR1cm4gZ2VuRnVuO1xyXG4gIH07XHJcblxyXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xyXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XHJcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xyXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXHJcbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xyXG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XHJcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xyXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXHJcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cclxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcclxuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcclxuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cclxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xyXG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cclxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXHJcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXHJcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxyXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXHJcbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXHJcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cclxuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XHJcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcclxuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxyXG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXHJcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcclxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXHJcbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcclxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXHJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXHJcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xyXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXHJcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cclxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XHJcbiAgfVxyXG5cclxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xyXG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xyXG5cclxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXHJcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXHJcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXHJcbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xyXG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcclxuXHJcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxyXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcclxuICAgICAgUHJvbWlzZUltcGxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxyXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxyXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcclxuICAgICAgICB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcclxuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xyXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xyXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgdGhyb3cgYXJnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcclxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXHJcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xyXG5cclxuICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xyXG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xyXG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XHJcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcclxuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xyXG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXHJcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xyXG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xyXG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcclxuXHJcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xyXG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxyXG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxyXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcclxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxyXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XHJcblxyXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXHJcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xyXG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxyXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cclxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxyXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcclxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcclxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cclxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XHJcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xyXG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xyXG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxyXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuXHJcbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cclxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcclxuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcclxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cclxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcclxuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcclxuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cclxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXHJcbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XHJcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxyXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xyXG5cclxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xyXG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XHJcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XHJcblxyXG4gICAgaWYgKCEgaW5mbykge1xyXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcclxuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XHJcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5mby5kb25lKSB7XHJcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XHJcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXHJcbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xyXG5cclxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxyXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xyXG5cclxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXHJcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcclxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cclxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXHJcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXHJcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cclxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cclxuICAgICAgcmV0dXJuIGluZm87XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcclxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXHJcbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcclxuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcclxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXHJcbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcclxuXHJcbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XHJcblxyXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXHJcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcclxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxyXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxyXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfTtcclxuXHJcbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XHJcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xyXG5cclxuICAgIGlmICgxIGluIGxvY3MpIHtcclxuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgyIGluIGxvY3MpIHtcclxuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XHJcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XHJcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcclxuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcclxuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xyXG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcclxuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxyXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxyXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxyXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcclxuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcclxuICAgIHRoaXMucmVzZXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcclxuICAgIHZhciBrZXlzID0gW107XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgIGtleXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAga2V5cy5yZXZlcnNlKCk7XHJcblxyXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcclxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XHJcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcclxuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XHJcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXHJcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXHJcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxyXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xyXG4gICAgICByZXR1cm4gbmV4dDtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XHJcbiAgICBpZiAoaXRlcmFibGUpIHtcclxuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xyXG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcclxuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcclxuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xyXG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcclxuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxyXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xyXG4gIH1cclxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcclxuXHJcbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcclxuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcclxuICB9XHJcblxyXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xyXG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXHJcblxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcclxuICAgICAgdGhpcy5wcmV2ID0gMDtcclxuICAgICAgdGhpcy5uZXh0ID0gMDtcclxuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcclxuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cclxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xyXG5cclxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcclxuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcclxuXHJcbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xyXG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcclxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcclxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxyXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcclxuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XHJcblxyXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xyXG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xyXG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcclxuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5kb25lKSB7XHJcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xyXG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xyXG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XHJcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xyXG5cclxuICAgICAgICBpZiAoY2F1Z2h0KSB7XHJcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxyXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cclxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XHJcblxyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XHJcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxyXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXHJcbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxyXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XHJcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcclxuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcclxuXHJcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XHJcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcclxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxyXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcclxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcclxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXHJcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxyXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XHJcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxyXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cclxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcclxuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xyXG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xyXG5cclxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XHJcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XHJcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XHJcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcclxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcclxuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XHJcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcclxuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcclxuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xyXG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XHJcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcclxuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xyXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xyXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xyXG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XHJcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xyXG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcclxuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXHJcbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xyXG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xyXG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxyXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXHJcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xyXG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XHJcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxyXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXHJcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXHJcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXHJcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cclxuICByZXR1cm4gZXhwb3J0cztcclxuXHJcbn0oXHJcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcclxuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxyXG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcclxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxyXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XHJcbikpO1xyXG5cclxudHJ5IHtcclxuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xyXG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xyXG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXHJcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XHJcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXHJcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXHJcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXHJcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcclxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxyXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxyXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxyXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> Stashed changes
