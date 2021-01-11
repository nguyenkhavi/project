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

  var filter = function filter(_ref2, filters) {
    var country = _ref2.country,
        continent = _ref2.continent;
    if (country.indexOf(filters.country) != -1 && continent.indexOf(filters.continent) != -1) return true;
    return false;
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
    console.log("useEffect");
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
  console.log("function");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 23
    }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ActiveCountry__WEBPACK_IMPORTED_MODULE_2__["default"], {
          activeCountry: active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 36
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "table-header",
          children: "LIST OF COUNTRIES OF THE WORLD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["COUNTRY", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
              onChange: handleChangeCountry,
              placeholder: "Enter country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["COMTINENTS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
              onChange: handleChangeContinent,
              placeholder: "Enter continent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "INFO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: displayData.map(function (country, idx) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.country
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.continent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "btn",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                  onClick: function onClick() {
                    return setActive(country);
                  },
                  children: "Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 58
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 37
              }, _this)]
            }, "".concat(country.countryInfo.iso3, "-").concat(idx), true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 23
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheURhdGEiLCJzZXREaXNwbGF5RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZpbHRlciIsImZpbHRlcnMiLCJjb3VudHJ5IiwiY29udGluZW50IiwiaW5kZXhPZiIsImhhbmRsZUNoYW5nZUNvdW50cnkiLCJldmVudCIsImtleSIsInRhcmdldCIsInZhbHVlIiwibmV3RmlsdGVycyIsImhhbmRsZUNoYW5nZUNvbnRpbmVudCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0VXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibWFwIiwiaWR4IiwiY291bnRyeUluZm8iLCJpc28zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLElBQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDN0JDLElBRDZCO0FBQUEsTUFDdkJDLE9BRHVCOztBQUFBLG1CQUVFRixzREFBUSxDQUFDLEVBQUQsQ0FGVjtBQUFBLE1BRTdCRyxXQUY2QjtBQUFBLE1BRWhCQyxjQUZnQjs7QUFBQSxtQkFHRkosc0RBQVEsQ0FBQyxJQUFELENBSE47QUFBQSxNQUc3QkssU0FINkI7QUFBQSxNQUdsQkMsWUFIa0I7O0FBQUEsbUJBSVJOLHNEQUFRLENBQUMsS0FBRCxDQUpBO0FBQUEsTUFJN0JPLE1BSjZCO0FBQUEsTUFJckJDLFNBSnFCOztBQU1wQyxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxRQUF1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QURKO0FBeUNIOztHQTVGdUJoQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc4OGU2ZDhlYWJkMTIxNTg0NjM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWN0aXZlQ291bnRyeSBmcm9tICcuLi9BY3RpdmVDb3VudHJ5J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlcidcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHtpc01vYmlsZX0pe1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZGlzcGxheURhdGEsIHNldERpc3BsYXlEYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgZmlsdGVyID0gKHtjb3VudHJ5LCBjb250aW5lbnR9LCBmaWx0ZXJzKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGNvdW50cnkuaW5kZXhPZihmaWx0ZXJzLmNvdW50cnkpIT0gLSAxICYmIGNvbnRpbmVudC5pbmRleE9mKGZpbHRlcnMuY29udGluZW50KSE9IC0gMSApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ291bnRyeSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6IGtleSxcclxuICAgICAgICAgICAgY29udGluZW50OiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihrZXkgIT0nJylcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YS5maWx0ZXIoY291bnRyeSA9PiBmaWx0ZXIoY291bnRyeSwgbmV3RmlsdGVycykpKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvbnRpbmVudCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6ICcnLFxyXG4gICAgICAgICAgICBjb250aW5lbnQ6IGtleVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihrZXkgIT0nJylcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YS5maWx0ZXIoY291bnRyeSA9PiBmaWx0ZXIoY291bnRyeSwgbmV3RmlsdGVycykpKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlRWZmZWN0XCIpXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFVybCA9ICdodHRwczovL2Nvcm9uYS5sbWFvLm5pbmphL3YyL2NvdW50cmllcydcclxuICAgICAgICBmZXRjaChyZXF1ZXN0VXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4geyAgXHJcbiAgICAgICAgICAgIHNldERhdGEoZGF0YSlcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKSBcclxuICAgICAgICAgICAgc2V0QWN0aXZlKGRhdGFbMjE0XSlcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImZ1bmN0aW9uXCIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nLz59XHJcblxyXG4gICAgICAgIHshaXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSAmJiA8QWN0aXZlQ291bnRyeSBhY3RpdmVDb3VudHJ5PXthY3RpdmV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7KDxkaXYgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS1oZWFkZXInPkxJU1QgT0YgQ09VTlRSSUVTIE9GIFRIRSBXT1JMRDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPkNPVU5UUllcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNvdW50cnl9IHBsYWNlaG9sZGVyPVwiRW50ZXIgY291bnRyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPkNPTVRJTkVOVFNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNvbnRpbmVudH0gcGxhY2Vob2xkZXI9XCJFbnRlciBjb250aW5lbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5JTkZPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5RGF0YS5tYXAoKGNvdW50cnksIGlkeCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncm93JyBrZXk9e2Ake2NvdW50cnkuY291bnRyeUluZm8uaXNvM30tJHtpZHh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvdW50cnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2NvdW50cnkuY29udGluZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuJz48QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShjb3VudHJ5KX0+RGV0YWlsczwvQnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9