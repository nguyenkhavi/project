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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
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
  return isMobile;
}

_s(isMobile, "A1Lw0JVVmzyPPv6HkPzUZlrtZJU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9pc01vYmlsZS9pbmRleC50c3giXSwibmFtZXMiOlsiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsInNldElzTW9iaWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaW1lbnNpb25zIiwic2V0RGVtZW5zaW9ucyIsImNoYW5nZVdpbmRvd1NpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLElBQUQsQ0FEVjtBQUFBLE1BQ3ZCRCxRQUR1QjtBQUFBLE1BQ2JFLFdBRGE7O0FBQUEsbUJBRUtELHNEQUFRLENBQUM7QUFDeENFLFNBQUssRUFBRSxDQURpQztBQUV4Q0MsVUFBTSxFQUFFO0FBRmdDLEdBQUQsQ0FGYjtBQUFBLE1BRXZCQyxVQUZ1QjtBQUFBLE1BRVpDLGFBRlk7O0FBTzlCLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFNSixLQUFLLEdBQUdLLE1BQU0sQ0FBQ0MsVUFBckI7QUFDQSxRQUFNTCxNQUFNLEdBQUdJLE1BQU0sQ0FBQ0UsV0FBdEI7QUFDQUosaUJBQWEsQ0FBQztBQUFDSCxXQUFLLEVBQUxBLEtBQUQ7QUFBUUMsWUFBTSxFQUFOQTtBQUFSLEtBQUQsQ0FBYjtBQUNILEdBSkQ7O0FBTUFPLHlEQUFTLENBQUMsWUFBTTtBQUNaSCxVQUFNLENBQUNJLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDTCxnQkFBbEM7QUFDQSxXQUFPLFlBQU07QUFDVEMsWUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0gsS0FGRDtBQUdILEdBTFEsRUFLUCxDQUFDRixVQUFELENBTE8sQ0FBVDtBQU9BLFNBQU9MLFFBQVA7QUFDSDs7R0FyQnVCQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM0OTliMzI3MWE1OGY1YWRjMDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01vYmlsZSgpe1xyXG4gICAgY29uc3QgW2lzTW9iaWxlLCBzZXRJc01vYmlsZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2RpbWVuc2lvbnMsc2V0RGVtZW5zaW9uc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVdpbmRvd1NpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgIHNldERlbWVuc2lvbnMoe3dpZHRoLCBoZWlnaHR9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZVdpbmRvd1NpemUpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZVdpbmRvd1NpemUpXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9LFtkaW1lbnNpb25zXSlcclxuXHJcbiAgICByZXR1cm4gaXNNb2JpbGVcclxufSJdLCJzb3VyY2VSb290IjoiIn0=