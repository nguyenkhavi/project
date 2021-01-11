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
    return country.country.indexOf(filters.country) || country.continent.indexOf(filters.continent);
  };

  var debounce = function debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this,
          args = arguments;
      console.log(context, args);
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
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
      lineNumber: 69,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 23
    }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ActiveCountry__WEBPACK_IMPORTED_MODULE_2__["default"], {
          activeCountry: active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 44
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "table-header",
          children: "LIST OF COUNTRIES OF THE WORLD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["COUNTRY", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
              onChange: handleChangeCountry,
              placeholder: "Enter country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["COMTINENTS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
              onChange: handleChangeContinent,
              placeholder: "Enter continent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "INFO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: displayData.map(function (country, idx) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.country
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.continent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
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
                  lineNumber: 95,
                  columnNumber: 66
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 45
              }, _this)]
            }, "".concat(country.countryInfo.iso3, "-").concat(idx), true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 41
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 31
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheURhdGEiLCJzZXREaXNwbGF5RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZpbHRlciIsImNvdW50cnkiLCJmaWx0ZXJzIiwiaW5kZXhPZiIsImNvbnRpbmVudCIsImRlYm91bmNlIiwiZm4iLCJkZWxheSIsInRpbWVyIiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiaGFuZGxlQ2hhbmdlQ291bnRyeSIsImV2ZW50Iiwia2V5IiwidGFyZ2V0IiwidmFsdWUiLCJuZXdGaWx0ZXJzIiwiaGFuZGxlQ2hhbmdlQ29udGluZW50IiwidXNlRWZmZWN0IiwicmVxdWVzdFVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm1hcCIsImlkeCIsImNvdW50cnlJbmZvIiwiaXNvMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsUUFBVSxRQUFWQSxRQUFVOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxtQkFFRUYsc0RBQVEsQ0FBQyxFQUFELENBRlY7QUFBQSxNQUU3QkcsV0FGNkI7QUFBQSxNQUVoQkMsY0FGZ0I7O0FBQUEsbUJBR0ZKLHNEQUFRLENBQUMsSUFBRCxDQUhOO0FBQUEsTUFHN0JLLFNBSDZCO0FBQUEsTUFHbEJDLFlBSGtCOztBQUFBLG1CQUlS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QUFRLHlCQUFPLEVBQUU7QUFBQSwyQkFBTUwsU0FBUyxDQUFDRSxPQUFELENBQWY7QUFBQSxtQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISjtBQUFBLHlCQUE0QkEsT0FBTyxDQUFDK0IsV0FBUixDQUFvQkMsSUFBaEQsY0FBd0RGLEdBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFoQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSmY7QUFBQSxrQkFESjtBQXlDSDs7R0FuR3VCMUMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZDQ2ZGM4ZGE0ZjI5Mjg3NTYwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjdGl2ZUNvdW50cnkgZnJvbSAnLi4vQWN0aXZlQ291bnRyeSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9oZWFkZXInXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7aXNNb2JpbGV9KXtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2Rpc3BsYXlEYXRhLCBzZXREaXNwbGF5RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGZpbHRlciA9IChjb3VudHJ5LCBmaWx0ZXJzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50cnkuY291bnRyeS5pbmRleE9mKGZpbHRlcnMuY291bnRyeSkgfHwgY291bnRyeS5jb250aW5lbnQuaW5kZXhPZihmaWx0ZXJzLmNvbnRpbmVudClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWJvdW5jZSA9IChmbiwgZGVsYXkpID0+IHtcclxuICAgICAgICBsZXQgdGltZXIgPSBudWxsXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRleHQsYXJncylcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncylcclxuICAgICAgICAgICAgfSwgZGVsYXkpXHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ291bnRyeSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6IGtleSxcclxuICAgICAgICAgICAgY29udGluZW50OiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihrZXkgIT0nJylcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YS5maWx0ZXIoY291bnRyeSA9PiBmaWx0ZXIoY291bnRyeSwgbmV3RmlsdGVycykpKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvbnRpbmVudCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6ICcnLFxyXG4gICAgICAgICAgICBjb250aW5lbnQ6IGtleVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihrZXkgIT0nJylcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YS5maWx0ZXIoY291bnRyeSA9PiBmaWx0ZXIoY291bnRyeSwgbmV3RmlsdGVycykpKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9jb3JvbmEubG1hby5uaW5qYS92Mi9jb3VudHJpZXMnXHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdFVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHsgIFxyXG4gICAgICAgICAgICBzZXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSkgXHJcbiAgICAgICAgICAgIHNldEFjdGl2ZShkYXRhWzIxNF0pXHJcbiAgICAgICAgICAgIHNldERpc3BsYXlEYXRhKGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nLz59XHJcblxyXG4gICAgICAgIHshaXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmUgJiYgPEFjdGl2ZUNvdW50cnkgYWN0aXZlQ291bnRyeT17YWN0aXZlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoPGRpdiBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGUtaGVhZGVyJz5MSVNUIE9GIENPVU5UUklFUyBPRiBUSEUgV09STEQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+Q09VTlRSWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb3VudHJ5fSBwbGFjZWhvbGRlcj1cIkVudGVyIGNvdW50cnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+Q09NVElORU5UU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb250aW5lbnR9IHBsYWNlaG9sZGVyPVwiRW50ZXIgY29udGluZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPklORk9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlzcGxheURhdGEubWFwKChjb3VudHJ5LCBpZHgpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncm93JyBrZXk9e2Ake2NvdW50cnkuY291bnRyeUluZm8uaXNvM30tJHtpZHh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2NvdW50cnkuY291bnRyeX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvbnRpbmVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuJz48QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShjb3VudHJ5KX0+RGV0YWlsczwvQnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==