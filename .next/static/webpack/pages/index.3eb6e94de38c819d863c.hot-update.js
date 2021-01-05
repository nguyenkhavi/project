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
/* harmony import */ var _components_Mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Mobile */ "./components/Mobile/index.tsx");



var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\pages\\index.tsx",
    _s = $RefreshSig$();








function Home() {
  _s();

  var width = Object(_helpers_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__["default"])().width;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(Boolean),
      isMobile = _useState[0],
      setIsMobile = _useState[1];

  console.log(isMobile);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setIsMobile(width && width < 700);
  }, [width]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: isMobile ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Mobile__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Covid-19 Statistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/icon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isMobile: _components_Mobile__WEBPACK_IMPORTED_MODULE_7__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Time__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(Home, "S14ZKUnmnNaXbwSY10KJCwYa6Rg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJ3aWR0aCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ1c2VTdGF0ZSIsIkJvb2xlYW4iLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsInN0eWxlcyIsImNvbnRhaW5lciIsIk1vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLEtBQUssR0FBR0MsNEVBQW1CLEdBQUdELEtBQXBDOztBQUQ2QixrQkFFR0Usc0RBQVEsQ0FBQ0MsT0FBRCxDQUZYO0FBQUEsTUFFdEJDLFFBRnNCO0FBQUEsTUFFWkMsV0FGWTs7QUFJN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBRUFJLHlEQUFTLENBQUMsWUFBTTtBQUNkSCxlQUFXLENBQUNMLEtBQUssSUFBSUEsS0FBSyxHQUFHLEdBQWxCLENBQVg7QUFDRCxHQUZRLEVBRVAsQ0FBQ0EsS0FBRCxDQUZPLENBQVQ7QUFJQSxzQkFDRTtBQUFBLGNBQ0NJLFFBQVEsZ0JBQUcscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILGdCQUNQO0FBQUssZUFBUyxFQUFFSyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNBLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLGFBQUcsRUFBQyxNQUFWO0FBQWlCLGNBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBS0EscUVBQUMsd0RBQUQ7QUFBTSxnQkFBUSxFQUFFQywwREFBTUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBLGVBTUEscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLG1CQURGO0FBYUQ7O0dBdkJ1QlosSTtVQUNSRSxvRTs7O0tBRFFGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2ViNmU5NGRlMzhjODE5ZDg2M2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuLi9jb21wb25lbnRzL01haW4nXHJcbmltcG9ydCBUaW1lIGZyb20gJy4uL2NvbXBvbmVudHMvVGltZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gJy4uL2hlbHBlcnMvdXNlV2luZG93RGltZW5zaW9ucydcclxuaW1wb3J0IE1vYmlsZSBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHdpZHRoID0gdXNlV2luZG93RGltZW5zaW9ucygpLndpZHRoXHJcbiAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZShCb29sZWFuKVxyXG5cclxuICBjb25zb2xlLmxvZyhpc01vYmlsZSlcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNNb2JpbGUod2lkdGggJiYgd2lkdGggPCA3MDApXHJcbiAgfSxbd2lkdGhdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHtpc01vYmlsZSA/IDxNb2JpbGUvPlxyXG4gICAgOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db3ZpZC0xOSBTdGF0aXN0aWNzPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1haW4gaXNNb2JpbGU9e01vYmlsZX0vPlxyXG4gICAgICA8VGltZS8+XHJcbiAgICA8L2Rpdj59XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==