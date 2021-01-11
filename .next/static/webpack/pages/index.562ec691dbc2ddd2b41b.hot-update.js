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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      active = _useState3[0],
      setActive = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    country: '',
    continent: ''
  }),
      filters = _useState4[0],
      setFilters = _useState4[1];

  var filter = function filter(country, filters) {
    return country.country == filters.country || country.continent == filters.continent;
  };

  var handleChangeCountry = function handleChangeCountry(event) {
    setFilters(function (s) {
      return _objectSpread(_objectSpread({}, s), {}, {
        country: event.target.value
      });
    });
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
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ActiveCountry__WEBPACK_IMPORTED_MODULE_3__["default"], {
          activeCountry: active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 44
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "table-header",
          children: "LIST OF COUNTRIES OF THE WORLD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: ["COUNTRY", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              onChange: handleChangeCountry,
              placeholder: "Enter country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: ["COMTINENTS", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              onChange: handleChangeContinent,
              placeholder: "Enter continent"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            children: ["INFO", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__["Input"], {
              placeholder: "Enter country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 41
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
          children: data.filter(function (country) {
            return filter(country, filters);
          }).map(function (country, idx) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                children: country.country
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 45
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                children: country.continent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
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
                  lineNumber: 70,
                  columnNumber: 66
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 45
              }, _this)]
            }, "".concat(country.countryInfo.iso3, "-").concat(idx), true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 41
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 31
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 24
    }, this)]
  }, void 0, true);
}

_s(Main, "fnQ7O5Yu818JSJEnwvk5CbU9BXs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYWluIiwiaXNNb2JpbGUiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY291bnRyeSIsImNvbnRpbmVudCIsImZpbHRlcnMiLCJzZXRGaWx0ZXJzIiwiZmlsdGVyIiwiaGFuZGxlQ2hhbmdlQ291bnRyeSIsImV2ZW50IiwicyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlQ29udGluZW50IiwidXNlRWZmZWN0IiwicmVxdWVzdFVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIm1hcCIsImlkeCIsImNvdW50cnlJbmZvIiwiaXNvMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBVkMsUUFBVSxRQUFWQSxRQUFVOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxtQkFFRkYsc0RBQVEsQ0FBQyxJQUFELENBRk47QUFBQSxNQUU3QkcsU0FGNkI7QUFBQSxNQUVsQkMsWUFGa0I7O0FBQUEsbUJBR1JKLHNEQUFRLENBQUMsS0FBRCxDQUhBO0FBQUEsTUFHN0JLLE1BSDZCO0FBQUEsTUFHckJDLFNBSHFCOztBQUFBLG1CQUlQTixzREFBUSxDQUFDO0FBQ2xDTyxXQUFPLEVBQUUsRUFEeUI7QUFFbENDLGFBQVMsRUFBRTtBQUZ1QixHQUFELENBSkQ7QUFBQSxNQUk3QkMsT0FKNkI7QUFBQSxNQUlyQkMsVUFKcUI7O0FBUXBDLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNKLE9BQUQs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Q0E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSwwQkFBTUEsT0FBTyxDQUFDQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSTtBQUFLLHlCQUFTLEVBQUMsS0FBZjtBQUFBLHVDQUFxQixxRUFBQyx1REFBRDtBQUFRLHlCQUFPLEVBQUU7QUFBQSwyQkFBTUYsU0FBUyxDQUFDQyxPQUFELENBQWY7QUFBQSxtQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISjtBQUFBLHlCQUE0QkEsT0FBTyxDQUFDbUIsV0FBUixDQUFvQkMsSUFBaEQsY0FBd0RGLEdBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRG9EO0FBQUEsV0FBdkQ7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpmO0FBQUEsa0JBREo7QUF5Q0g7O0dBekV1QjNCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTYyZWM2OTFkYmMyZGRkMmI0MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBY3RpdmVDb3VudHJ5IGZyb20gJy4uL0FjdGl2ZUNvdW50cnknXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oe2lzTW9iaWxlfSl7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2ZpbHRlcnMsc2V0RmlsdGVyc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY291bnRyeTogJycsXHJcbiAgICAgICAgY29udGluZW50OiAnJyxcclxuICAgIH0pXHJcbiAgICBjb25zdCBmaWx0ZXIgPSAoY291bnRyeSwgZmlsdGVycykgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb3VudHJ5LmNvdW50cnkgPT0gIGZpbHRlcnMuY291bnRyeSB8fCBjb3VudHJ5LmNvbnRpbmVudCA9PSBmaWx0ZXJzLmNvbnRpbmVudFxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ291bnRyeSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEZpbHRlcnMocyA9PiAoey4uLnMsY291bnRyeTogZXZlbnQudGFyZ2V0LnZhbHVlfSkpXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VDb250aW5lbnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXJzKHMgPT4gKHsuLi5zLGNvbnRpbmVudDogZXZlbnQudGFyZ2V0LnZhbHVlfSkpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0VXJsID0gJ2h0dHBzOi8vY29yb25hLmxtYW8ubmluamEvdjIvY291bnRyaWVzJ1xyXG4gICAgICAgIGZldGNoKHJlcXVlc3RVcmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHsgIFxyXG4gICAgICAgICAgICBzZXREYXRhKGRhdGEpXHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSkgXHJcbiAgICAgICAgICAgIHNldEFjdGl2ZShkYXRhWzIxNF0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nLz59XHJcblxyXG4gICAgICAgIHshaXNMb2FkaW5nICYmIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmUgJiYgPEFjdGl2ZUNvdW50cnkgYWN0aXZlQ291bnRyeT17YWN0aXZlfS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoPGRpdiBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGUtaGVhZGVyJz5MSVNUIE9GIENPVU5UUklFUyBPRiBUSEUgV09STEQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+Q09VTlRSWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb3VudHJ5fSBwbGFjZWhvbGRlcj1cIkVudGVyIGNvdW50cnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+Q09NVElORU5UU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb250aW5lbnR9IHBsYWNlaG9sZGVyPVwiRW50ZXIgY29udGluZW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPklORk9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCAgcGxhY2Vob2xkZXI9XCJFbnRlciBjb3VudHJ5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5maWx0ZXIoKGNvdW50cnkpID0+IGZpbHRlcihjb3VudHJ5LCBmaWx0ZXJzKSkubWFwKChjb3VudHJ5LCBpZHgpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncm93JyBrZXk9e2Ake2NvdW50cnkuY291bnRyeUluZm8uaXNvM30tJHtpZHh9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2NvdW50cnkuY291bnRyeX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvbnRpbmVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuJz48QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShjb3VudHJ5KX0+RGV0YWlsczwvQnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9