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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pc01vYmlsZS9pbmRleC50c3giXSwibmFtZXMiOlsiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGltZW5zaW9ucyIsInNldERlbWVuc2lvbnMiLCJjaGFuZ2VXaW5kb3dTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQztBQUN4Q0MsU0FBSyxFQUFFLENBRGlDO0FBRXhDQyxVQUFNLEVBQUU7QUFGZ0MsR0FBRCxDQURiO0FBQUEsTUFDdkJDLFVBRHVCO0FBQUEsTUFDWkMsYUFEWTs7QUFNOUIsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQU1KLEtBQUssR0FBR0ssTUFBTSxDQUFDQyxVQUFyQjtBQUNBLFFBQU1MLE1BQU0sR0FBR0ksTUFBTSxDQUFDRSxXQUF0QjtBQUNBSixpQkFBYSxDQUFDO0FBQUNILFdBQUssRUFBTEEsS0FBRDtBQUFRQyxZQUFNLEVBQU5BO0FBQVIsS0FBRCxDQUFiO0FBQ0gsR0FKRDs7QUFNQU8seURBQVMsQ0FBQyxZQUFNO0FBQ1pILFVBQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NMLGdCQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNUQyxZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDSCxLQUZEO0FBR0gsR0FMUSxFQUtQLENBQUNGLFVBQUQsQ0FMTyxDQUFUO0FBT0EsU0FBT0EsVUFBVSxDQUFDRixLQUFYLElBQW9CRSxVQUFVLENBQUNGLEtBQVgsR0FBbUIsR0FBOUM7QUFDSDs7R0FwQnVCRixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0NTBmOTAwZWM4MzQyZTczNDA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01vYmlsZSgpe1xyXG4gICAgY29uc3QgW2RpbWVuc2lvbnMsc2V0RGVtZW5zaW9uc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVdpbmRvd1NpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgIHNldERlbWVuc2lvbnMoe3dpZHRoLCBoZWlnaHR9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZVdpbmRvd1NpemUpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZVdpbmRvd1NpemUpXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9LFtkaW1lbnNpb25zXSlcclxuXHJcbiAgICByZXR1cm4gZGltZW5zaW9ucy53aWR0aCAmJiBkaW1lbnNpb25zLndpZHRoIDwgNzg2XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9