webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main/index.tsx":
/*!***********************************!*\
  !*** ./components/Main/index.tsx ***!
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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header */ "./components/Header/index.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loading */ "./components/Loading/index.tsx");
/* harmony import */ var _Mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Mobile */ "./components/Mobile/index.tsx");



var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\Main\\index.tsx",
    _s = $RefreshSig$();







function Main(_ref) {
  _s();

  var _this = this;

  var isMobile = _ref.isMobile;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      active = _useState3[0],
      setActive = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var requestUrl = 'https://corona.lmao.ninja/v2/countries';
    fetch(requestUrl).then(function (response) {
      return response.json();
    }).then(function (data) {
      setData(data);
      setIsLoading(false);
      setActive(data[214]);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isMobile: isMobile
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 23
    }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ActiveCountry__WEBPACK_IMPORTED_MODULE_2__["default"], {
          activeCountry: active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 44
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }, this), isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Mobile__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 42
      }, this), !isMobile && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "table-header",
          children: "LIST OF COUNTRIES OF THE WORLD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "COUNTRY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "COMTINENTS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "INFO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: data.map(function (country) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.country
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: country.continent
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "btn",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                  onClick: function onClick() {
                    return setActive(country);
                  },
                  children: "Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 62
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 41
              }, _this)]
            }, country.countryInfo.iso3, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 37
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 43
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 24
    }, this)]
  }, void 0, true);
}

_s(Main, "tVTFj12QQCwuv0FjyYPs3ba6y8k=");

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

/***/ }),

/***/ "./components/Mobile/index.tsx":
/*!*************************************!*\
  !*** ./components/Mobile/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mobile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\Mobile\\index.tsx",
    _s = $RefreshSig$();



function Mobile() {
  _s();

  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useDisclosure"])(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  var btnRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      ref: btnRef,
      colorScheme: "teal",
      onClick: onOpen,
      children: "Open"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
      isOpen: isOpen,
      placement: "right",
      onClose: onClose,
      finalFocusRef: btnRef,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerOverlay"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerContent"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerCloseButton"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerHeader"], {
            children: "Create your account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
              placeholder: "Type here..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["DrawerFooter"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              variant: "outline",
              mr: 3,
              onClick: onClose,
              children: "Cancel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              color: "blue",
              children: "Save"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Mobile, "O6IopkzzssCTT7bqNVIT0GeQ5us=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useDisclosure"]];
});

_c = Mobile;

var _c;

$RefreshReg$(_c, "Mobile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2JpbGUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk1haW4iLCJpc01vYmlsZSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0VXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibWFwIiwiY291bnRyeSIsImNvbnRpbmVudCIsImNvdW50cnlJbmZvIiwiaXNvMyIsIk1vYmlsZSIsInVzZURpc2Nsb3N1cmUiLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwiYnRuUmVmIiwiUmVhY3QiLCJ1c2VSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLElBQVQsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxRQUFVLFFBQVZBLFFBQVU7O0FBQUEsa0JBQ1pDLHNEQUFRLENBQUMsRUFBRCxDQURJO0FBQUEsTUFDN0JDLElBRDZCO0FBQUEsTUFDdkJDLE9BRHVCOztBQUFBLG1CQUVGRixzREFBUSxDQUFDLElBQUQsQ0FGTjtBQUFBLE1BRTdCRyxTQUY2QjtBQUFBLE1BRWxCQyxZQUZrQjs7QUFBQSxtQkFHUkosc0RBQVEsQ0FBQyxLQUFELENBSEE7QUFBQSxNQUc3QkssTUFINkI7QUFBQSxNQUdyQkMsU0FIcUI7O0FBS3BDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxVQUFVLEdBQUcsd0NBQW5CO0FBQ0FDLFNBQUssQ0FBQ0QsVUFBRCxDQUFMLENBQWtCRSxJQUFsQixDQUF1QixVQUFDQyxRQUFELEVBQWM7QUFDckMsYUFBUUEsUUFBUSxDQUFDQyxJQUFULEVBQVI7QUFDQyxL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QTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsdURBQUQ7QUFDRSxZQUFNLEVBQUVELE1BRFY7QUFFRSxlQUFTLEVBQUMsT0FGWjtBQUdFLGFBQU8sRUFBRUUsT0FIWDtBQUlFLG1CQUFhLEVBQUVDLE1BSmpCO0FBQUEsNkJBTUUscUVBQUMsOERBQUQ7QUFBQSwrQkFDRSxxRUFBQyw4REFBRDtBQUFBLGtDQUNFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUlFLHFFQUFDLDJEQUFEO0FBQUEsbUNBQ0UscUVBQUMsc0RBQUQ7QUFBTyx5QkFBVyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBUUUscUVBQUMsNkRBQUQ7QUFBQSxvQ0FDRSxxRUFBQyx1REFBRDtBQUFRLHFCQUFPLEVBQUMsU0FBaEI7QUFBMEIsZ0JBQUUsRUFBRSxDQUE5QjtBQUFpQyxxQkFBTyxFQUFFRCxPQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFLHFFQUFDLHVEQUFEO0FBQVEsbUJBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUErQkQ7O0dBbkN1QkosTTtVQUNnQkMsOEQ7OztLQURoQkQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYmFiOGFkMThlYTM2MWU4MjliMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFjdGl2ZUNvdW50cnkgZnJvbSAnLi4vQWN0aXZlQ291bnRyeSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcclxuaW1wb3J0IE1vYmlsZSBmcm9tICcuLi9Nb2JpbGUnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oe2lzTW9iaWxlfSl7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFVybCA9ICdodHRwczovL2Nvcm9uYS5sbWFvLm5pbmphL3YyL2NvdW50cmllcydcclxuICAgICAgICBmZXRjaChyZXF1ZXN0VXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAocmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7ICBcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhKVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpIFxyXG4gICAgICAgICAgICBzZXRBY3RpdmUoZGF0YVsyMTRdKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIZWFkZXIgaXNNb2JpbGU9e2lzTW9iaWxlfS8+XHJcbiAgICAgICAge2lzTG9hZGluZyAmJiA8TG9hZGluZy8+fVxyXG5cclxuICAgICAgICB7IWlzTG9hZGluZyAmJiA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlICYmIDxBY3RpdmVDb3VudHJ5IGFjdGl2ZUNvdW50cnk9e2FjdGl2ZX0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgJiYgPE1vYmlsZS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc01vYmlsZSAmJiA8ZGl2IGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS1oZWFkZXInPkxJU1QgT0YgQ09VTlRSSUVTIE9GIFRIRSBXT1JMRDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5DT1VOVFJZPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPkNPTVRJTkVOVFM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+SU5GTzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKGNvdW50cnkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3Jvdycga2V5PXtjb3VudHJ5LmNvdW50cnlJbmZvLmlzbzN9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2NvdW50cnkuY291bnRyeX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2NvdW50cnkuY29udGluZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bic+PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoY291bnRyeSl9PkRldGFpbHM8L0J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImltcG9ydCB7XHJcbiAgICBEcmF3ZXIsXHJcbiAgICBEcmF3ZXJCb2R5LFxyXG4gICAgRHJhd2VyRm9vdGVyLFxyXG4gICAgRHJhd2VySGVhZGVyLFxyXG4gICAgRHJhd2VyT3ZlcmxheSxcclxuICAgIERyYXdlckNvbnRlbnQsXHJcbiAgICBEcmF3ZXJDbG9zZUJ1dHRvbixcclxuICAgIEJ1dHRvbixcclxuICAgIHVzZURpc2Nsb3N1cmUsXHJcbiAgICBJbnB1dFxyXG4gIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9iaWxlKCl7XHJcbiAgICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKClcclxuICBjb25zdCBidG5SZWYgPSBSZWFjdC51c2VSZWYoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJ1dHRvbiByZWY9e2J0blJlZn0gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgb25DbGljaz17b25PcGVufT5cclxuICAgICAgICBPcGVuXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XHJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgICAgZmluYWxGb2N1c1JlZj17YnRuUmVmfVxyXG4gICAgICA+XHJcbiAgICAgICAgPERyYXdlck92ZXJsYXk+XHJcbiAgICAgICAgICA8RHJhd2VyQ29udGVudD5cclxuICAgICAgICAgICAgPERyYXdlckNsb3NlQnV0dG9uIC8+XHJcbiAgICAgICAgICAgIDxEcmF3ZXJIZWFkZXI+Q3JlYXRlIHlvdXIgYWNjb3VudDwvRHJhd2VySGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgPERyYXdlckJvZHk+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlLi4uXCIgLz5cclxuICAgICAgICAgICAgPC9EcmF3ZXJCb2R5PlxyXG5cclxuICAgICAgICAgICAgPERyYXdlckZvb3Rlcj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgbXI9ezN9IG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImJsdWVcIj5TYXZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyRm9vdGVyPlxyXG4gICAgICAgICAgPC9EcmF3ZXJDb250ZW50PlxyXG4gICAgICAgIDwvRHJhd2VyT3ZlcmxheT5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9