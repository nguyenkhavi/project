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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ActiveCountry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ActiveCountry */ "./components/ActiveCountry/index.tsx");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header */ "./components/header/index.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Loading */ "./components/Loading/index.tsx");




var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\main\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Main(_ref) {
  _s();

  var _this = this;

  var isMobile = _ref.isMobile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      displayData = _useState2[0],
      setDisplayData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      active = _useState4[0],
      setActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    country: '',
    continent: ''
  }),
      filters = _useState5[0],
      setFilters = _useState5[1];

  var filter = function filter(country, filters) {
    return country.country == filters.country || country.continent == filters.continent;
  };

  var DataFilter = function DataFilter(data) {};

  var handleChangeCountry = function handleChangeCountry(event) {
    var key = event.target.value;
    console.log(key);

    if (key == '') {
      setDisplayData(data);
      return;
    } //setFilters(s => ({...s,country: event.target.value}))


    var newFiltter = {
      country: key,
      continent: ''
    };
    setDisplayData(data.filter(function (country) {
      return filter(country, newFiltter);
    }));
  };

  var handleChangeContinent = function handleChangeContinent(event) {
    setFilters(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        continent: event.target.value
      });
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ActiveCountry__WEBPACK_IMPORTED_MODULE_3__["default"], {
          activeCountry: active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 44
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "table-header",
          children: "LIST OF COUNTRIES OF THE WORLD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: ["COUNTRY", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              onChange: handleChangeCountry,
              placeholder: "Enter country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: ["COMTINENTS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              onChange: handleChangeContinent,
              placeholder: "Enter continent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: "INFO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
          children: displayData.map(function (country, idx) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                children: country.country
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                children: country.continent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: "btn",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
                  onClick: function onClick() {
                    return setActive(country);
                  },
                  children: "Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 66
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 45
              }, _this)]
            }, "".concat(country.countryInfo.iso3, "-").concat(idx), true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 41
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 31
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 24
    }, this)]
  }, void 0, true);
}

_s(Main, "xp2AHQH3dJTo291GUPfpv8UUrvg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiZGlzcGxheURhdGEiLCJzZXREaXNwbGF5RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNvdW50cnkiLCJjb250aW5lbnQiLCJmaWx0ZXJzIiwic2V0RmlsdGVycyIsImZpbHRlciIsIkRhdGFGaWx0ZXIiLCJoYW5kbGVDaGFuZ2VDb3VudHJ5IiwiZXZlbnQiLCJrZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJuZXdGaWx0dGVyIiwiaGFuZGxlQ2hhbmdlQ29udGluZW50IiwicyIsInVzZUVmZmVjdCIsInJlcXVlc3RVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJtYXAiLCJpZHgiLCJjb3VudHJ5SW5mbyIsImlzbzMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxPQUF5QjtBQUFBOztBQUFBOztBQUFBLE1BQVZDLFFBQVUsUUFBVkEsUUFBVTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUM3QkMsSUFENkI7QUFBQSxNQUN2QkMsT0FEdUI7O0FBQUEsbUJBRUVGLHNEQUFRLENBQUMsRUFBRCxDQUZWO0FBQUEsTUFFN0JHLFdBRjZCO0FBQUEsTUFFaEJDLGNBRmdCOztBQUFBLG1CQUdGSixzREFBUSxDQUFDLElBQUQsQ0FITjtBQUFBLE1BRzdCSyxTQUg2QjtBQUFBLE1BR2xCQyxZQUhrQjs7QUFBQSxtQkFJUk4sc0RBQVEsQ0FBQyxLQUFELENBSkE7QUFBQSxNQUk3Qk8sTUFKNkI7QUFBQSxNQUlyQkMsU0FKcUI7O0FBQUEsbUJBS1BS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QURKLGVBSUk7QUFBQSxrREFDSSxxRUFBQyxzREFBRDtBQUFPLHNCQUFRLEVBQUVRLHFCQUFqQjtBQUF3Qyx5QkFBVyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBWUU7QUFBQSxvQkFDS3BCLFdBQVcsQ0FBQzRCLEdBQVosQ0FBZ0IsVUFBQ3RCLE9BQUQsRUFBVXVCLEdBQVY7QUFBQSxnQ0FDYjtBQUFJLHVCQUFTLEVBQUMsS0FBZDtBQUFBLHNDQUNJO0FBQUEsMEJBQU12QixPQUFPLENBQUNBO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUEsMEJBQU1BLE9BQU8sQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBQSx1Q0FBcUIscUVBQUMsdURBQUQ7QUFBUSx5QkFBTyxFQUFFO0FBQUEsMkJBQU1GLFNBQVMsQ0FBQ0MsT0FBRCxDQUFmO0FBQUEsbUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQSx5QkFBNEJBLE9BQU8sQ0FBQ3dCLFdBQVIsQ0FBb0JDLElBQWhELGNBQXdERixHQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpmO0FBQUEsa0JBREo7QUF3Q0g7O0dBN0Z1QmxDLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmEzN2Q5YTM1ZWY5MGEzNmJlMWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBY3RpdmVDb3VudHJ5IGZyb20gJy4uL0FjdGl2ZUNvdW50cnknXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oe2lzTW9iaWxlfSl7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtkaXNwbGF5RGF0YSwgc2V0RGlzcGxheURhdGFdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtmaWx0ZXJzLHNldEZpbHRlcnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNvdW50cnk6ICcnLFxyXG4gICAgICAgIGNvbnRpbmVudDogJycsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGZpbHRlciA9IChjb3VudHJ5LCBmaWx0ZXJzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50cnkuY291bnRyeSA9PSAgZmlsdGVycy5jb3VudHJ5IHx8IGNvdW50cnkuY29udGluZW50ID09IGZpbHRlcnMuY29udGluZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgRGF0YUZpbHRlciA9IChkYXRhKSA9PiB7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ291bnRyeSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9ZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgY29uc29sZS5sb2coa2V5KVxyXG4gICAgICAgIGlmKGtleSA9PSAnJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldERpc3BsYXlEYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3NldEZpbHRlcnMocyA9PiAoey4uLnMsY291bnRyeTogZXZlbnQudGFyZ2V0LnZhbHVlfSkpXHJcbiAgICAgICAgY29uc3QgbmV3RmlsdHRlciA9e1xyXG4gICAgICAgICAgICBjb3VudHJ5OiBrZXksXHJcbiAgICAgICAgICAgIGNvbnRpbmVudDogJycsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldERpc3BsYXlEYXRhKGRhdGEuZmlsdGVyKChjb3VudHJ5KSA9PiBmaWx0ZXIoY291bnRyeSwgbmV3RmlsdHRlcikpKVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNvbnRpbmVudCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcnMocyA9PiAoey4uLnMsY29udGluZW50OiBldmVudC50YXJnZXQudmFsdWV9KSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RVcmwgPSAnaHR0cHM6Ly9jb3JvbmEubG1hby5uaW5qYS92Mi9jb3VudHJpZXMnXHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdFVybCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gKHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgfSkudGhlbigoZGF0YSkgPT4geyAgXHJcbiAgICAgICAgICAgIHNldERhdGEoZGF0YSlcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKSBcclxuICAgICAgICAgICAgc2V0QWN0aXZlKGRhdGFbMjE0XSlcclxuICAgICAgICAgICAgc2V0RGlzcGxheURhdGEoZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRpbmcvPn1cclxuXHJcbiAgICAgICAgeyFpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9J21haW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSAmJiA8QWN0aXZlQ291bnRyeSBhY3RpdmVDb3VudHJ5PXthY3RpdmV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyg8ZGl2IGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS1oZWFkZXInPkxJU1QgT0YgQ09VTlRSSUVTIE9GIFRIRSBXT1JMRDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5DT1VOVFJZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNvdW50cnl9IHBsYWNlaG9sZGVyPVwiRW50ZXIgY291bnRyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5DT01USU5FTlRTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNvbnRpbmVudH0gcGxhY2Vob2xkZXI9XCJFbnRlciBjb250aW5lbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+SU5GT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5RGF0YS5tYXAoKGNvdW50cnksIGlkeCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdyb3cnIGtleT17YCR7Y291bnRyeS5jb3VudHJ5SW5mby5pc28zfS0ke2lkeH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57Y291bnRyeS5jb3VudHJ5fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2NvdW50cnkuY29udGluZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPjxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGNvdW50cnkpfT5EZXRhaWxzPC9CdXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=