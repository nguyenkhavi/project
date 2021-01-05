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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Boolean),
      isMobile = _useState[0],
      setIsMobile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: 0,
    height: 0
  }),
      dimensions = _useState2[0],
      setDemensions = _useState2[1];

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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsMobile(dimensions.width && dimensions.width < 786);
  }, [isMobile]);
  return isMobile;
}

_s(isMobile, "N+g7RnlmBUxD5jXLFlitQkKCIP8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pc01vYmlsZS9pbmRleC50c3giXSwibmFtZXMiOlsiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsIkJvb2xlYW4iLCJzZXRJc01vYmlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGltZW5zaW9ucyIsInNldERlbWVuc2lvbnMiLCJjaGFuZ2VXaW5kb3dTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQ0MsT0FBRCxDQURWO0FBQUEsTUFDdkJGLFFBRHVCO0FBQUEsTUFDYkcsV0FEYTs7QUFBQSxtQkFFS0Ysc0RBQVEsQ0FBQztBQUN4Q0csU0FBSyxFQUFFLENBRGlDO0FBRXhDQyxVQUFNLEVBQUU7QUFGZ0MsR0FBRCxDQUZiO0FBQUEsTUFFdkJDLFVBRnVCO0FBQUEsTUFFWkMsYUFGWTs7QUFPOUIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQU1KLEtBQUssR0FBR0ssTUFBTSxDQUFDQyxVQUFyQjtBQUNBLFFBQU1MLE1BQU0sR0FBR0ksTUFBTSxDQUFDRSxXQUF0QjtBQUNBSixpQkFBYSxDQUFDO0FBQUNILFdBQUssRUFBTEEsS0FBRDtBQUFRQyxZQUFNLEVBQU5BO0FBQVIsS0FBRCxDQUFiO0FBQ0gsR0FKRDs7QUFNQU8seURBQVMsQ0FBQyxZQUFNO0FBQ1pILFVBQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NMLGdCQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNUQyxZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDSCxLQUZEO0FBR0gsR0FMUSxFQUtQLENBQUNGLFVBQUQsQ0FMTyxDQUFUO0FBT0FNLHlEQUFTLENBQUMsWUFBTTtBQUNaVCxlQUFXLENBQUNHLFVBQVUsQ0FBQ0YsS0FBWCxJQUFvQkUsVUFBVSxDQUFDRixLQUFYLEdBQW1CLEdBQXhDLENBQVg7QUFDSCxHQUZRLEVBRVAsQ0FBQ0osUUFBRCxDQUZPLENBQVQ7QUFJQSxTQUFPQSxRQUFQO0FBQ0g7O0dBekJ1QkEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MWI1NzQyM2ZkM2Q3NTQ1MGM4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2JpbGUoKXtcclxuICAgIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoQm9vbGVhbilcclxuICAgIGNvbnN0IFtkaW1lbnNpb25zLHNldERlbWVuc2lvbnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGhlaWdodDogMFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VXaW5kb3dTaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICBzZXREZW1lbnNpb25zKHt3aWR0aCwgaGVpZ2h0fSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VXaW5kb3dTaXplKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VXaW5kb3dTaXplKVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfSxbZGltZW5zaW9uc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc01vYmlsZShkaW1lbnNpb25zLndpZHRoICYmIGRpbWVuc2lvbnMud2lkdGggPCA3ODYpXHJcbiAgICB9LFtpc01vYmlsZV0pXHJcblxyXG4gICAgcmV0dXJuIGlzTW9iaWxlXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9