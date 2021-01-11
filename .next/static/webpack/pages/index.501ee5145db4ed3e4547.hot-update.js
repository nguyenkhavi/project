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







function Main(_ref) {
  _s();

  var _this = this;

  var isMobile = _ref.isMobile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      displayData = _useState2[0],
      setDisplayData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState4[0],
      setActive = _useState4[1];

  var filter = function filter(country, filters) {
    return country.country.split('').indexOf(filters.country) || country.continent.split('').indexOf(filters.continent);
  };

  var handleChangeCountry = function handleChangeCountry(event) {
    var key = event.target.value;
    var newFilters = {
      country: key,
      continent: ''
    };
    if (key != '') setDisplayData(data.filter(function (country) {
      return filter(country, newFilters);
    }));else setDisplayData(data);
  };

  var handleChangeContinent = function handleChangeContinent(event) {
    var key = event.target.value;
    var newFilters = {
      country: '',
      continent: key
    };
    if (key != '') setDisplayData(data.filter(function (country) {
      return filter(country, newFilters);
    }));else setDisplayData(data);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var requestUrl = 'https://corona.lmao.ninja/v2/countries';
    fetch(requestUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      setData(data);
      setIsLoading(false);
      setActive(data[214]);
      setDisplayData(data);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ActiveCountry__WEBPACK_IMPORTED_MODULE_2__["default"], {
          activeCountry: active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 44
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "table-header",
          children: "LIST OF COUNTRIES OF THE WORLD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["COUNTRY", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
              onChange: handleChangeCountry,
              placeholder: "Enter country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["COMTINENTS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
              onChange: handleChangeContinent,
              placeholder: "Enter continent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "INFO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: displayData.map(function (country, idx) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.country
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.continent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "btn",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                  onClick: function onClick() {
                    return setActive(country);
                  },
                  children: "Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 66
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 45
              }, _this)]
            }, "".concat(country.countryInfo.iso3, "-").concat(idx), true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 41
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 31
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 24
    }, this)]
  }, void 0, true);
}

_s(Main, "bPcB3bh1REwCbdGHesCNgexvqTM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheURhdGEiLCJzZXREaXNwbGF5RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZpbHRlciIsImNvdW50cnkiLCJmaWx0ZXJzIiwic3BsaXQiLCJpbmRleE9mIiwiY29udGluZW50IiwiaGFuZGxlQ2hhbmdlQ291bnRyeSIsImV2ZW50Iiwia2V5IiwidGFyZ2V0IiwidmFsdWUiLCJuZXdGaWx0ZXJzIiwiaGFuZGxlQ2hhbmdlQ29udGluZW50IiwidXNlRWZmZWN0IiwicmVxdWVzdFVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm1hcCIsImlkeCIsImNvdW50cnlJbmZvIiwiaXNvMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsUUFBVSxRQUFWQSxRQUFVOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxtQkFFRUYsc0RBQVEsQ0FBQyxFQUFELENBRlY7QUFBQSxNQUU3QkcsV0FGNkI7QUFBQSxNQUVoQkMsY0FGZ0I7O0FBQUEsbUJBR0ZKLHNEQUFRLENBQUMsSUFBRCxDQUhOO0FBQUEsTUFHN0JLLFNBSDZCO0FBQUEsTUFHbEJDLFlBSGtCOztBQUFBLG1CQUlSTixzREFBUSxDQUFDLEtBQUQsQ0FKQTtBQUFBLE1BSTdCTyxNQUo2QjtBQUFBLE1BSXJCQyxTQUpxQjs7QUFNcEMsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsT0FBRCxF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REosZUFJSTtBQUFBLGtEQUNJLHFFQUFDLHNEQUFEO0FBQU8sc0JBQVEsRUFBRU0scUJBQWpCO0FBQXdDLHlCQUFXLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFZRTtBQUFBLG9CQUNLbEIsV0FBVyxDQUFDeUIsR0FBWixDQUFnQixVQUFDbEIsT0FBRCxFQUFVbUIsR0FBVjtBQUFBLGdDQUNiO0FBQUksdUJBQVMsRUFBQyxLQUFkO0FBQUEsc0NBQ0k7QUFBQSwwQkFBTW5CLE9BQU8sQ0FBQ0E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSwwQkFBTUEsT0FBTyxDQUFDSTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSTtBQUFLLHlCQUFTLEVBQUMsS0FBZjtBQUFBLHVDQUFxQixxRUFBQyx1REFBRDtBQUFRLHlCQUFPLEVBQUU7QUFBQSwyQkFBTU4sU0FBUyxDQUFDRSxPQUFELENBQWY7QUFBQSxtQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISjtBQUFBLHlCQUE0QkEsT0FBTyxDQUFDb0IsV0FBUixDQUFvQkMsSUFBaEQsY0FBd0RGLEdBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFoQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSmY7QUFBQSxrQkFESjtBQXlDSDs7R0F0RnVCL0IsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MDFlZTUxNDVkYjRlZDNlNDU0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjdGl2ZUNvdW50cnkgZnJvbSAnLi4vQWN0aXZlQ291bnRyeSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXInXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7aXNNb2JpbGV9KXtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2Rpc3BsYXlEYXRhLCBzZXREaXNwbGF5RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGZpbHRlciA9IChjb3VudHJ5LCBmaWx0ZXJzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50cnkuY291bnRyeS5zcGxpdCgnJykuaW5kZXhPZihmaWx0ZXJzLmNvdW50cnkpIHx8IGNvdW50cnkuY29udGluZW50LnNwbGl0KCcnKS5pbmRleE9mKGZpbHRlcnMuY29udGluZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvdW50cnkgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICBjb3VudHJ5OiBrZXksXHJcbiAgICAgICAgICAgIGNvbnRpbmVudDogJydcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoa2V5ICE9JycpXHJcbiAgICAgICAgICAgIHNldERpc3BsYXlEYXRhKGRhdGEuZmlsdGVyKGNvdW50cnkgPT4gZmlsdGVyKGNvdW50cnksIG5ld0ZpbHRlcnMpKSlcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldERpc3BsYXlEYXRhKGRhdGEpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VDb250aW5lbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICBjb3VudHJ5OiAnJyxcclxuICAgICAgICAgICAgY29udGluZW50OiBrZXlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoa2V5ICE9JycpXHJcbiAgICAgICAgICAgIHNldERpc3BsYXlEYXRhKGRhdGEuZmlsdGVyKGNvdW50cnkgPT4gZmlsdGVyKGNvdW50cnksIG5ld0ZpbHRlcnMpKSlcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldERpc3BsYXlEYXRhKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0VXJsID0gJ2h0dHBzOi8vY29yb25hLmxtYW8ubmluamEvdjIvY291bnRyaWVzJ1xyXG4gICAgICAgIGZldGNoKHJlcXVlc3RVcmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAocmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7ICBcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhKVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpIFxyXG4gICAgICAgICAgICBzZXRBY3RpdmUoZGF0YVsyMTRdKVxyXG4gICAgICAgICAgICBzZXREaXNwbGF5RGF0YShkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZy8+fVxyXG5cclxuICAgICAgICB7IWlzTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlICYmIDxBY3RpdmVDb3VudHJ5IGFjdGl2ZUNvdW50cnk9e2FjdGl2ZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KDxkaXYgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYmxlLWhlYWRlcic+TElTVCBPRiBDT1VOVFJJRVMgT0YgVEhFIFdPUkxEPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPkNPVU5UUllcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ291bnRyeX0gcGxhY2Vob2xkZXI9XCJFbnRlciBjb3VudHJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPkNPTVRJTkVOVFNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ29udGluZW50fSBwbGFjZWhvbGRlcj1cIkVudGVyIGNvbnRpbmVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5JTkZPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3BsYXlEYXRhLm1hcCgoY291bnRyeSwgaWR4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3Jvdycga2V5PXtgJHtjb3VudHJ5LmNvdW50cnlJbmZvLmlzbzN9LSR7aWR4fWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvdW50cnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57Y291bnRyeS5jb250aW5lbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bic+PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoY291bnRyeSl9PkRldGFpbHM8L0J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=