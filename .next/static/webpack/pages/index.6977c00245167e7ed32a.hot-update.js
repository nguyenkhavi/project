webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main */ "./components/Main/index.tsx");
/* harmony import */ var _components_Time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Time */ "./components/Time/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/useWindowDimensions */ "./helpers/useWindowDimensions/index.tsx");



var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\pages\\index.tsx",
    _s2 = $RefreshSig$();







function Home() {
  _s2();

  var _s = $RefreshSig$();

  var width = Object(_helpers_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__["default"])().width;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      Mobile = _useState[0],
      setMobile = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(_s(function () {
    _s();

    var _width = Object(_helpers_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__["default"])().width;
    setMobile(_width && _width < 700);
  }, "j6eSlLlhgkIR90YKioaf69ok2+Q=", false, function () {
    return [_helpers_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__["default"]];
  }), [Mobile]);
  console.log(Mobile);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Covid-19 Statistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/icon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isMobile: Mobile
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Time__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, this)
  }, void 0, false);
}

_s2(Home, "IbnBn96pFsjm4i648cV292u55I8=", false, function () {
  return [_helpers_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ3aWR0aCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ1c2VTdGF0ZSIsIk1vYmlsZSIsInNldE1vYmlsZSIsInVzZUVmZmVjdCIsIl93aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxLQUFLLEdBQUdDLDRFQUFtQixHQUFHRCxLQUFwQzs7QUFENkIsa0JBRURFLHNEQUFRLENBQUMsSUFBRCxDQUZQO0FBQUEsTUFFdEJDLE1BRnNCO0FBQUEsTUFFZEMsU0FGYzs7QUFJN0JDLHlEQUFTLElBQUMsWUFBTTtBQUFBOztBQUNkLFFBQU1DLE1BQU0sR0FBR0wsNEVBQW1CLEdBQUdELEtBQXJDO0FBQ0FJLGFBQVMsQ0FBQ0UsTUFBTSxJQUFJQSxNQUFNLEdBQUcsR0FBcEIsQ0FBVDtBQUNELEdBSFE7QUFBQSxZQUNRTCxvRUFEUjtBQUFBLE1BR1AsQ0FBQ0UsTUFBRCxDQUhPLENBQVQ7QUFJQUksU0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQVo7QUFFQSxzQkFDRTtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFFTSw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLGFBQUcsRUFBQyxNQUFWO0FBQWlCLGNBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0UscUVBQUMsd0RBQUQ7QUFBTSxnQkFBUSxFQUFFUDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREY7QUFZRDs7SUF0QnVCSixJO1VBQ1JFLG9FOzs7S0FEUUYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42OTc3YzAwMjQ1MTY3ZTdlZDMyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbidcclxuaW1wb3J0IFRpbWUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSAnLi4vaGVscGVycy91c2VXaW5kb3dEaW1lbnNpb25zJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3Qgd2lkdGggPSB1c2VXaW5kb3dEaW1lbnNpb25zKCkud2lkdGhcclxuICBjb25zdCBbTW9iaWxlLCBzZXRNb2JpbGVdID0gdXNlU3RhdGUodHJ1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IF93aWR0aCA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKS53aWR0aFxyXG4gICAgc2V0TW9iaWxlKF93aWR0aCAmJiBfd2lkdGggPCA3MDApXHJcbiAgfSxbTW9iaWxlXSlcclxuICBjb25zb2xlLmxvZyhNb2JpbGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q292aWQtMTkgU3RhdGlzdGljczwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNYWluIGlzTW9iaWxlPXtNb2JpbGV9Lz5cclxuICAgICAgPFRpbWUvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==