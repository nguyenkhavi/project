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
    return country == filters.country;
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
          columnNumber: 36
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "table-header",
          children: "LIST OF COUNTRIES OF THE WORLD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["COUNTRY", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
              onChange: handleChangeCountry,
              placeholder: "Enter country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: ["COMTINENTS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
              onChange: handleChangeContinent,
              placeholder: "Enter continent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "INFO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: displayData.map(function (country, idx) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.country
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 37
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.continent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
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
                  lineNumber: 82,
                  columnNumber: 58
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 37
              }, _this)]
            }, "".concat(country.countryInfo.iso3, "-").concat(idx), true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 23
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheURhdGEiLCJzZXREaXNwbGF5RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImZpbHRlciIsImZpbHRlcnMiLCJjb3VudHJ5IiwiY29udGluZW50IiwiaGFuZGxlQ2hhbmdlQ291bnRyeSIsImV2ZW50Iiwia2V5IiwidGFyZ2V0IiwidmFsdWUiLCJuZXdGaWx0ZXJzIiwiaGFuZGxlQ2hhbmdlQ29udGluZW50IiwidXNlRWZmZWN0IiwicmVxdWVzdFVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm1hcCIsImlkeCIsImNvdW50cnlJbmZvIiwiaXNvMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsUUFBVSxRQUFWQSxRQUFVOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxtQkFFRUYsc0RBQVEsQ0FBQyxFQUFELENBRlY7QUFBQSxNQUU3QkcsV0FGNkI7QUFBQSxNQUVoQkMsY0FGZ0I7O0FBQUEsbUJBR0ZKLHNEQUFRLENBQUMsSUFBRCxDQUhOO0FBQUEsTUFHN0JLLFNBSDZCO0FBQUEsTUFHbEJDLFlBSGtCOztBQUFBLG1CQUlSTixzREFBUSxDQUFDLEtBQUQsQ0FKQTtBQUFBLE1BSTdCTyxNQUo2QjtBQUFBLE1BSXJCQyxTQUpxQjs7QUFNcEMsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsUUFBdUJDLE9BQXZCLEVBQW1DO0FBQUEsUUFBakND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O0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkosZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFZRTtBQUFBLG9CQUNLaEIsV0FBVyxDQUFDdUIsR0FBWixDQUFnQixVQUFDZixPQUFELEVBQVVnQixHQUFWO0FBQUEsZ0NBQ2I7QUFBSSx1QkFBUyxFQUFDLEtBQWQ7QUFBQSxzQ0FDSTtBQUFBLDBCQUFNaEIsT0FBTyxDQUFDQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFBLDBCQUFNQSxPQUFPLENBQUNDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQUEsdUNBQXFCLHFFQUFDLHVEQUFEO0FBQVEseUJBQU8sRUFBRTtBQUFBLDJCQUFNSixTQUFTLENBQUNHLE9BQUQsQ0FBZjtBQUFBLG1CQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUEseUJBQTRCQSxPQUFPLENBQUNpQixXQUFSLENBQW9CQyxJQUFoRCxjQUF3REYsR0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEYTtBQUFBLFdBQWhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKZjtBQUFBLGtCQURKO0FBeUNIOztHQXRGdUI3QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM3Y2MyNzFhNjc0OTkwMWQ1OWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWN0aXZlQ291bnRyeSBmcm9tICcuLi9BY3RpdmVDb3VudHJ5J1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlcidcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHtpc01vYmlsZX0pe1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbZGlzcGxheURhdGEsIHNldERpc3BsYXlEYXRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgZmlsdGVyID0gKHtjb3VudHJ5LCBjb250aW5lbnR9LCBmaWx0ZXJzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50cnkgPT0gZmlsdGVycy5jb3VudHJ5XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ291bnRyeSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6IGtleSxcclxuICAgICAgICAgICAgY29udGluZW50OiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihrZXkgIT0nJylcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YS5maWx0ZXIoY291bnRyeSA9PiBmaWx0ZXIoY291bnRyeSwgbmV3RmlsdGVycykpKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvbnRpbmVudCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIGNvbnN0IG5ld0ZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgIGNvdW50cnk6ICcnLFxyXG4gICAgICAgICAgICBjb250aW5lbnQ6IGtleVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihrZXkgIT0nJylcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YS5maWx0ZXIoY291bnRyeSA9PiBmaWx0ZXIoY291bnRyeSwgbmV3RmlsdGVycykpKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9jb3JvbmEubG1hby5uaW5qYS92Mi9jb3VudHJpZXMnXHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdFVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHsgIFxyXG4gICAgICAgICAgICBzZXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSkgXHJcbiAgICAgICAgICAgIHNldEFjdGl2ZShkYXRhWzIxNF0pXHJcbiAgICAgICAgICAgIHNldERpc3BsYXlEYXRhKGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nLz59XHJcblxyXG4gICAgICAgIHshaXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSAmJiA8QWN0aXZlQ291bnRyeSBhY3RpdmVDb3VudHJ5PXthY3RpdmV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7KDxkaXYgY2xhc3NOYW1lPSd0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS1oZWFkZXInPkxJU1QgT0YgQ09VTlRSSUVTIE9GIFRIRSBXT1JMRDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPkNPVU5UUllcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNvdW50cnl9IHBsYWNlaG9sZGVyPVwiRW50ZXIgY291bnRyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPkNPTVRJTkVOVFNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNvbnRpbmVudH0gcGxhY2Vob2xkZXI9XCJFbnRlciBjb250aW5lbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5JTkZPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5RGF0YS5tYXAoKGNvdW50cnksIGlkeCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncm93JyBrZXk9e2Ake2NvdW50cnkuY291bnRyeUluZm8uaXNvM30tJHtpZHh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvdW50cnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2NvdW50cnkuY29udGluZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuJz48QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShjb3VudHJ5KX0+RGV0YWlsczwvQnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9