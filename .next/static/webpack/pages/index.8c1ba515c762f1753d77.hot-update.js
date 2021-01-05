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
/* harmony import */ var _helpers_isMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/isMobile */ "./helpers/isMobile/index.tsx");
/* harmony import */ var _components_Mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Mobile */ "./components/Mobile/index.tsx");


var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\pages\\index.tsx";






function Home() {
  // useEffect(() => {
  //   console.log(width)
  //   setIsMobile( width < 700 )
  //   return () => {
  //   }
  // },[width])
  console.log(Object(_helpers_isMobile__WEBPACK_IMPORTED_MODULE_5__["default"])());
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_helpers_isMobile__WEBPACK_IMPORTED_MODULE_5__["default"])() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Mobile__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Covid-19 Statistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/icon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isMobile: _components_Mobile__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Time__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJjb25zb2xlIiwibG9nIiwiaXNNb2JpbGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJNb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBRzdCO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUVBQVEsRUFBcEI7QUFFQSxzQkFDRTtBQUFBLGNBQ0NBLGlFQUFRLGtCQUFLLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBTCxnQkFDUDtBQUFLLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw4QkFDQSxxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxhQUFHLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUtBLHFFQUFDLHdEQUFEO0FBQU0sZ0JBQVEsRUFBRUMsMERBQU1BO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQSxlQU1BLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixtQkFERjtBQWFEO0tBMUJ1Qk4sSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44YzFiYTUxNWM3NjJmMTc1M2Q3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbidcclxuaW1wb3J0IFRpbWUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGlzTW9iaWxlIGZyb20gJy4uL2hlbHBlcnMvaXNNb2JpbGUnXHJcbmltcG9ydCBNb2JpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2JpbGUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHdpZHRoKVxyXG4gIC8vICAgc2V0SXNNb2JpbGUoIHdpZHRoIDwgNzAwIClcclxuXHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG5cclxuICAvLyAgIH1cclxuICAvLyB9LFt3aWR0aF0pXHJcbiAgY29uc29sZS5sb2coaXNNb2JpbGUoKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7aXNNb2JpbGUoKSA/IDxNb2JpbGUvPlxyXG4gICAgOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db3ZpZC0xOSBTdGF0aXN0aWNzPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1haW4gaXNNb2JpbGU9e01vYmlsZX0vPlxyXG4gICAgICA8VGltZS8+XHJcbiAgICA8L2Rpdj59XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==