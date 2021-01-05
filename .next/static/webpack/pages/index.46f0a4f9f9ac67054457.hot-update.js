webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header/index.tsx":
/*!*************************************!*\
  !*** ./components/header/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_useWindowDimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/useWindowDimensions */ "./helpers/useWindowDimensions/index.tsx");



var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\header\\index.tsx",
    _s = $RefreshSig$();


function Header() {
  _s();

  var width = Object(_helpers_useWindowDimensions__WEBPACK_IMPORTED_MODULE_1__["default"])().width;
  var isMobile = width && width < 800;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header",
      children: "COVID-19 CORONAVIRUS PANDEMIC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(Header, "j6eSlLlhgkIR90YKioaf69ok2+Q=", false, function () {
  return [_helpers_useWindowDimensions__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

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

/***/ "./helpers/useWindowDimensions/index.tsx":
/*!***********************************************!*\
  !*** ./helpers/useWindowDimensions/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWindowDimensions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


function useWindowDimensions() {
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
  return dimensions;
}

_s(useWindowDimensions, "1mHbY19A03kNN0tGErKhueTB/Oc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9oZWxwZXJzL3VzZVdpbmRvd0RpbWVuc2lvbnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsIndpZHRoIiwidXNlV2luZG93RGltZW5zaW9ucyIsImlzTW9iaWxlIiwidXNlU3RhdGUiLCJoZWlnaHQiLCJkaW1lbnNpb25zIiwic2V0RGVtZW5zaW9ucyIsImNoYW5nZVdpbmRvd1NpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHZSxTQUFTQSxNQUFULEdBQWlCO0FBQUE7O0FBQzVCLE1BQU1DLEtBQUssR0FBR0MsNEVBQW1CLEdBQUdELEtBQXBDO0FBQ0EsTUFBTUUsUUFBUSxHQUFHRixLQUFLLElBQUlBLEtBQUssR0FBRyxHQUFsQztBQUNBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBS0g7O0dBUnVCRCxNO1VBQ05FLG9FOzs7S0FETUYsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QjtBQUVlLFNBQVNFLG1CQUFULEdBQThCO0FBQUE7O0FBQUEsa0JBQ05FLHNEQUFRLENBQUM7QUFDeENILFNBQUssRUFBRSxDQURpQztBQUV4Q0ksVUFBTSxFQUFFO0FBRmdDLEdBQUQsQ0FERjtBQUFBLE1BQ2xDQyxVQURrQztBQUFBLE1BQ3ZCQyxhQUR1Qjs7QUFNekMsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLFFBQU1QLEtBQUssR0FBR1EsTUFBTSxDQUFDQyxVQUFyQjtBQUNBLFFBQU1MLE1BQU0sR0FBR0ksTUFBTSxDQUFDRSxXQUF0QjtBQUNBSixpQkFBYSxDQUFDO0FBQUNOLFdBQUssRUFBTEEsS0FBRDtBQUFRSSxZQUFNLEVBQU5BO0FBQVIsS0FBRCxDQUFiO0FBQ0gsR0FKRDs7QUFNQU8seURBQVMsQ0FBQyxZQUFNO0FBQ1pILFVBQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NMLGdCQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNUQyxZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDSCxLQUZEO0FBR0gsR0FMUSxFQUtQLENBQUNGLFVBQUQsQ0FMTyxDQUFUO0FBT0EsU0FBT0EsVUFBUDtBQUNIOztHQXBCdUJKLG1CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2ZjBhNGY5ZjlhYzY3MDU0NDU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tICcuLi8uLi9oZWxwZXJzL3VzZVdpbmRvd0RpbWVuc2lvbnMnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCl7XHJcbiAgICBjb25zdCB3aWR0aCA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKS53aWR0aFxyXG4gICAgY29uc3QgaXNNb2JpbGUgPSB3aWR0aCAmJiB3aWR0aCA8IDgwMFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPkNPVklELTE5IENPUk9OQVZJUlVTIFBBTkRFTUlDPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpe1xyXG4gICAgY29uc3QgW2RpbWVuc2lvbnMsc2V0RGVtZW5zaW9uc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgd2lkdGg6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiAwXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVdpbmRvd1NpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICAgIHNldERlbWVuc2lvbnMoe3dpZHRoLCBoZWlnaHR9KVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZVdpbmRvd1NpemUpXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZVdpbmRvd1NpemUpXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9LFtkaW1lbnNpb25zXSlcclxuXHJcbiAgICByZXR1cm4gZGltZW5zaW9uc1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==