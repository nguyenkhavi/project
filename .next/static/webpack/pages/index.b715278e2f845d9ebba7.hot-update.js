webpackHotUpdate_N_E("pages/index",{

/***/ "./helpers/isMobile/index.tsx":
/*!************************************!*\
  !*** ./helpers/isMobile/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


function isMobile() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: 0,
    height: 0
  }),
      dimensions = _useState[0],
      setDemensions = _useState[1];

  var changeWindowSize = function changeWindowSize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    setDemensions({
      width: width,
      height: height
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', changeWindowSize);
    return function () {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, [dimensions]);
  return dimensions.width && dimensions.width < 786;
}

_s(isMobile, "1mHbY19A03kNN0tGErKhueTB/Oc=");

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

/***/ }),

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_helpers_isMobile__WEBPACK_IMPORTED_MODULE_5__["default"])() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Mobile__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 19
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Covid-19 Statistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/icon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isMobile: _components_Mobile__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Time__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pc01vYmlsZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJpc01vYmlsZSIsInVzZVN0YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJkaW1lbnNpb25zIiwic2V0RGVtZW5zaW9ucyIsImNoYW5nZVdpbmRvd1NpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJNb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQztBQUN4Q0MsU0FBSyxFQUFFLENBRGlDO0FBRXhDQyxVQUFNLEVBQUU7QUFGZ0MsR0FBRCxDQURiO0FBQUEsTUFDdkJDLFVBRHVCO0FBQUEsTUFDWkMsYUFEWTs7QUFNOUIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQU1KLEtBQUssR0FBR0ssTUFBTSxDQUFDQyxVQUFyQjtBQUNBLFFBQU1MLE1BQU0sR0FBR0ksTUFBTSxDQUFDRSxXQUF0QjtBQUNBSixpQkFBYSxDQUFDO0FBQUNILFdBQUssRUFBTEEsS0FBRDtBQUFRQyxZQUFNLEVBQU5BO0FBQVIsS0FBRCxDQUFiO0FBQ0gsR0FKRDs7QUFNQU8seURBQVMsQ0FBQyxZQUFNO0FBQ1pILFVBQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NMLGdCQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNUQyxZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDSCxLQUZEO0FBR0gsR0FMUSxFQUtQLENBQUNGLFVBQUQsQ0FMTyxDQUFUO0FBT0EsU0FBT0EsVUFBVSxDQUFDRixLQUFYLElBQW9CRSxVQUFVLENBQUNGLEtBQVgsR0FBbUIsR0FBOUM7QUFDSDs7R0FwQnVCRixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeEI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR2UsU0FBU2EsSUFBVCxHQUFnQjtBQUc3QjtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQSxzQkFDRTtBQUFBLGNBQ0NiLGlFQUFRLGtCQUFLLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBTCxnQkFDUDtBQUFLLGVBQVMsRUFBRWMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw4QkFDQSxxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxhQUFHLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUtBLHFFQUFDLHdEQUFEO0FBQU0sZ0JBQVEsRUFBRUMsMERBQU1BO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQSxlQU1BLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixtQkFERjtBQWFEO0tBekJ1QkgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNzE1Mjc4ZTJmODQ1ZDllYmJhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2JpbGUoKXtcclxuICAgIGNvbnN0IFtkaW1lbnNpb25zLHNldERlbWVuc2lvbnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGhlaWdodDogMFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VXaW5kb3dTaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICBzZXREZW1lbnNpb25zKHt3aWR0aCwgaGVpZ2h0fSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VXaW5kb3dTaXplKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VXaW5kb3dTaXplKVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfSxbZGltZW5zaW9uc10pXHJcblxyXG4gICAgcmV0dXJuIGRpbWVuc2lvbnMud2lkdGggJiYgZGltZW5zaW9ucy53aWR0aCA8IDc4NlxyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbidcclxuaW1wb3J0IFRpbWUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGlzTW9iaWxlIGZyb20gJy4uL2hlbHBlcnMvaXNNb2JpbGUnXHJcbmltcG9ydCBNb2JpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2JpbGUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKHdpZHRoKVxyXG4gIC8vICAgc2V0SXNNb2JpbGUoIHdpZHRoIDwgNzAwIClcclxuXHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG5cclxuICAvLyAgIH1cclxuICAvLyB9LFt3aWR0aF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAge2lzTW9iaWxlKCkgPyA8TW9iaWxlLz5cclxuICAgIDogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q292aWQtMTkgU3RhdGlzdGljczwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxNYWluIGlzTW9iaWxlPXtNb2JpbGV9Lz5cclxuICAgICAgPFRpbWUvPlxyXG4gICAgPC9kaXY+fVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=