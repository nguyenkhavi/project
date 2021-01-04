webpackHotUpdate_N_E("pages/index",{

/***/ "./components/main/index.tsx":
/*!***********************************!*\
  !*** ./components/main/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActiveCountry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActiveCountry */ "./components/ActiveCountry/index.tsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header */ "./components/header/index.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loading */ "./components/Loading/index.tsx");



var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\main\\index.tsx",
    _s = $RefreshSig$();






function Main() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var requestUrl = 'https://corona.lmao.ninja/v2/countries';
    fetch(requestUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      setData(data);
      console.log('isLoading before setIsLoading:', isLoading);
      setIsLoading(false);
      console.log('isLoading after setIsLoading:', isLoading);
    });
  }, []);
  var vn = data[214];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState3[0],
      setActive = _useState3[1];

  console.log('isLoading:', isLoading);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ActiveCountry__WEBPACK_IMPORTED_MODULE_2__["default"], {
          activeCountry: active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 32
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "table-header",
          children: ["LIST OF COUNTRIES OF THE WORLD ", console.log('isLoading in header:', isLoading)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "COUNTRY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "COMTINENTS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "INFO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: data.map(function (country) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.country
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.continent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "btn",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                  onClick: function onClick() {
                    return setActive(country);
                  },
                  children: "Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 50
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 29
              }, _this)]
            }, country.countryInfo.iso3, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 25
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 24
    }, this)]
  }, void 0, true);
}

_s(Main, "Dl5CbefZwbbdnI5dHNMbOcNk01o=");

_c = Main;

var _c;

$RefreshReg$(_c, "Main");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZUVmZmVjdCIsInJlcXVlc3RVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidm4iLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJtYXAiLCJjb3VudHJ5IiwiY29udGluZW50IiwiY291bnRyeUluZm8iLCJpc28zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHZSxTQUFTQSxJQUFULEdBQWU7QUFBQTs7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxFQUFELENBRE47QUFBQSxNQUNuQkMsSUFEbUI7QUFBQSxNQUNiQyxPQURhOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLElBQUQsQ0FIaEI7QUFBQSxNQUduQkcsU0FIbUI7QUFBQSxNQUdSQyxZQUhROztBQUsxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsVUFBVSxHQUFHLHdDQUFuQjtBQUNBQyxTQUFLLENBQUNELFVBQUQsQ0FBTCxDQUFrQkUsSUFBbEIsQ0FBdUIsVUFBQ0MsUUFBRCxFQUFjO0FBQ3JDLGFBQVFBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFSO0FBQ0MsS0FGRCxFQUVHRixJQUZILENBRVEsVUFBQ1AsSUFBRCxFQUFVO0FBQ2RDLGFBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0FVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdDQUFaLEVBQThDVCxTQUE5QztBQUNBQyxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWixFQUE2Q1QsU0FBN0M7QUFFSCxLQVJEO0FBU0gsR0FYUSxFQVdQLEVBWE8sQ0FBVDtBQWNBLE1BQU1VLEVBQUUsR0FBR1osSUFBSSxDQUFDLEdBQUQsQ0FBZjs7QUFuQjBCLG1CQW9CRUQsc0RBQVEsQ0FBQyxLQUFELENBcEJWO0FBQUEsTUFvQm5CYyxNQXBCbUI7QUFBQSxNQW9CWEMsU0FwQlc7O0FBcUIxQkosU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlQsU0FBMUI7QUFDQSxzQkFDSTtBQUFBLDRCQUNBLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxFQUVDQSxTQUFTLGlCQUFJLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGZCxFQUdDLENBQUNBLFNBQUQsaUJBQWM7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNQO0FBQUEsa0JBQ0tXLE1BQU0saUJBQUkscUVBQUMsc0RBQUQ7QUFBZSx1QkFBYSxFQUFFQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURPLGVBSVA7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLHdEQUE4REgsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NULFNBQXBDLENBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQU9JO0FBQUEsb0JBQ0tGLElBQUksQ0FBQ2UsR0FBTCxDQUFTLFVBQUFDLE9BQU87QUFBQSxnQ0FDakI7QUFBSSx1QkFBUyxFQUFDLEtBQWQ7QUFBQSxzQ0FDSTtBQUFBLDBCQUFNQSxPQUFPLENBQUNBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUEsMEJBQU1BLE9BQU8sQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBQSx1Q0FBcUIscUVBQUMsdURBQUQ7QUFBUSx5QkFBTyxFQUFFO0FBQUEsMkJBQU1ILFNBQVMsQ0FBQ0UsT0FBRCxDQUFmO0FBQUEsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQSxlQUF5QkEsT0FBTyxDQUFDRSxXQUFSLENBQW9CQyxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURpQjtBQUFBLFdBQWhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIZjtBQUFBLGtCQURKO0FBNEJIOztHQWxEdUJyQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFmZTQyMDZkMzY4ODNhNDlkNTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWN0aXZlQ291bnRyeSBmcm9tICcuLi9BY3RpdmVDb3VudHJ5J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlcidcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpe1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0VXJsID0gJ2h0dHBzOi8vY29yb25hLmxtYW8ubmluamEvdjIvY291bnRyaWVzJ1xyXG4gICAgICAgIGZldGNoKHJlcXVlc3RVcmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHsgIFxyXG4gICAgICAgICAgICBzZXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc0xvYWRpbmcgYmVmb3JlIHNldElzTG9hZGluZzonLCBpc0xvYWRpbmcgKVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc0xvYWRpbmcgYWZ0ZXIgc2V0SXNMb2FkaW5nOicsIGlzTG9hZGluZyApXHJcbiAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuXHJcblxyXG4gICAgY29uc3Qgdm4gPSBkYXRhWzIxNF1cclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnNvbGUubG9nKCdpc0xvYWRpbmc6JywgaXNMb2FkaW5nIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nLz59XHJcbiAgICAgICAgeyFpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9J21haW4nPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSAmJiA8QWN0aXZlQ291bnRyeSBhY3RpdmVDb3VudHJ5PXthY3RpdmV9Lz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYmxlLWhlYWRlcic+TElTVCBPRiBDT1VOVFJJRVMgT0YgVEhFIFdPUkxEIHtjb25zb2xlLmxvZygnaXNMb2FkaW5nIGluIGhlYWRlcjonLCBpc0xvYWRpbmcgKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+Q09VTlRSWTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5DT01USU5FTlRTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPklORk88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChjb3VudHJ5ID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdyb3cnIGtleT17Y291bnRyeS5jb3VudHJ5SW5mby5pc28zfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvdW50cnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvbnRpbmVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPjxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGNvdW50cnkpfT5EZXRhaWxzPC9CdXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9