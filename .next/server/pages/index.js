module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ActiveCountry/index.tsx":
/*!********************************************!*\
  !*** ./components/ActiveCountry/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActiveCountry; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\ActiveCountry\\index.tsx";

function ActiveCountry({
  activeCountry
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: activeCountry && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "active",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "img-header",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: activeCountry.countryInfo.flag
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "6xl",
            children: activeCountry.country
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "3xl",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Population: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 46
            }, this), activeCountry.population]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            fontSize: "3xl",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Continent: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 46
            }, this), activeCountry.continent]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        variant: "simple",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["TableCaption"], {
          children: ["Today in ", activeCountry.country]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Thead"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tr"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Th"], {
              children: "Today cases"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Th"], {
              children: "Today deaths"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Th"], {
              children: "Today recovered"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tbody"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tr"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
              children: activeCountry.todayCases
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
              children: activeCountry.todayDeaths
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
              children: activeCountry.todayRecovered
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
        variant: "simple",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["TableCaption"], {
          children: ["COVID-19 pandemic in ", activeCountry.country]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Thead"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tr"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Th"], {
              children: "Cases"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Th"], {
              children: "Deaths"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Th"], {
              children: "Recovered"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tbody"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tr"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
              children: activeCountry.cases
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
              children: activeCountry.deaths
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Td"], {
              children: activeCountry.recovered
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\Header\\index.tsx";
function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header",
      children: "COVID-19 CORONAVIRUS PANDEMIC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Loading/index.tsx":
/*!**************************************!*\
  !*** ./components/Loading/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\Loading\\index.tsx";
function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Main/index.tsx":
/*!***********************************!*\
  !*** ./components/Main/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActiveCountry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActiveCountry */ "./components/ActiveCountry/index.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header */ "./components/Header/index.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loading */ "./components/Loading/index.tsx");


var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\Main\\index.tsx";





function Main({
  isMobile
}) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const requestUrl = 'https://corona.lmao.ninja/v2/countries';
    fetch(requestUrl).then(response => {
      return response.json();
    }).then(data => {
      setData(data);
      setIsLoading(false);
      setActive(data[214]);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 23
    }, this), !isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "main",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: active && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ActiveCountry__WEBPACK_IMPORTED_MODULE_2__["default"], {
          activeCountry: active
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 44
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "table",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "table-header",
          children: "LIST OF COUNTRIES OF THE WORLD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "COUNTRY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "COMTINENTS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 37
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "INFO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 37
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 33
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: data.map((country, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: country.country
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: country.continent
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 41
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "btn",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                onClick: () => setActive(country),
                children: "Details"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 62
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 41
            }, this)]
          }, `${country.countryInfo.iso3}-${idx}`, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 37
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 33
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 31
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 24
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Mobile/index.tsx":
/*!*************************************!*\
  !*** ./components/Mobile/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mobile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\Mobile\\index.tsx";


function Mobile() {
  const {
    isOpen,
    onOpen,
    onClose
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useDisclosure"])();
  const btnRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
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

/***/ }),

/***/ "./components/Time/index.tsx":
/*!***********************************!*\
  !*** ./components/Time/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Time; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_getToday__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/getToday */ "./helpers/getToday/index.tsx");

var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\components\\Time\\index.tsx";


function Time() {
  const {
    0: today,
    1: setToday
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const t = setInterval(() => {
      setToday(Object(_helpers_getToday__WEBPACK_IMPORTED_MODULE_2__["default"])());
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "time",
    children: today
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./helpers/getToday/index.tsx":
/*!************************************!*\
  !*** ./helpers/getToday/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getToday; });
function getToday() {
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!

  var yyyy = String(date.getFullYear());
  var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const Today = time + '-' + mm + '/' + dd + '/' + yyyy;
  return Today;
}

/***/ }),

/***/ "./helpers/isMobile/index.tsx":
/*!************************************!*\
  !*** ./helpers/isMobile/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isMobile() {
  const {
    0: dimensions,
    1: setDemensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    width: 0,
    height: 0
  });

  const changeWindowSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDemensions({
      width,
      height
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('resize', changeWindowSize);
    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, [dimensions]);
  return dimensions.width && dimensions.width < 786;
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main */ "./components/Main/index.tsx");
/* harmony import */ var _components_Time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Time */ "./components/Time/index.tsx");
/* harmony import */ var _helpers_isMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/isMobile */ "./helpers/isMobile/index.tsx");
/* harmony import */ var _components_Mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Mobile */ "./components/Mobile/index.tsx");


var _jsxFileName = "F:\\FRONTEND\\nextjs\\covid\\pages\\index.tsx";






function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: Object(_helpers_isMobile__WEBPACK_IMPORTED_MODULE_5__["default"])() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Mobile__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Covid-19 Statistics"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "icon",
          href: "/icon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isMobile: _components_Mobile__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Time__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BY3RpdmVDb3VudHJ5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW4vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpbWUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2hlbHBlcnMvZ2V0VG9kYXkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2hlbHBlcnMvaXNNb2JpbGUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFjdGl2ZUNvdW50cnkiLCJhY3RpdmVDb3VudHJ5IiwiY291bnRyeUluZm8iLCJmbGFnIiwiY291bnRyeSIsInBvcHVsYXRpb24iLCJjb250aW5lbnQiLCJ0b2RheUNhc2VzIiwidG9kYXlEZWF0aHMiLCJ0b2RheVJlY292ZXJlZCIsImNhc2VzIiwiZGVhdGhzIiwicmVjb3ZlcmVkIiwiSGVhZGVyIiwiTG9hZGluZyIsIk1haW4iLCJpc01vYmlsZSIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VFZmZlY3QiLCJyZXF1ZXN0VXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibWFwIiwiaWR4IiwiaXNvMyIsIk1vYmlsZSIsImlzT3BlbiIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJ1c2VEaXNjbG9zdXJlIiwiYnRuUmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJUaW1lIiwidG9kYXkiLCJzZXRUb2RheSIsInQiLCJzZXRJbnRlcnZhbCIsImdldFRvZGF5IiwiY2xlYXJJbnRlcnZhbCIsImRhdGUiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXl5eSIsImdldEZ1bGxZZWFyIiwidGltZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJUb2RheSIsImRpbWVuc2lvbnMiLCJzZXREZW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFuZ2VXaW5kb3dTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJIb21lIiwic3R5bGVzIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxhQUFHLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUtBLHFFQUFDLHdEQUFEO0FBQU0sZ0JBQVEsRUFBRTFDLDBEQUFNQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEEsZUFNQSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsbUJBREY7QUFhRCxDOzs7Ozs7Ozs7OztBQ3pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBUYWJsZSwgVGhlYWQsIFRib2R5LCBUciwgVGgsIFRkLCBUYWJsZUNhcHRpb24sIEltYWdlLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aXZlQ291bnRyeSh7YWN0aXZlQ291bnRyeX0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHthY3RpdmVDb3VudHJ5ICYmIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbWctaGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWN0aXZlQ291bnRyeS5jb3VudHJ5SW5mby5mbGFnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCI2eGxcIj57YWN0aXZlQ291bnRyeS5jb3VudHJ5fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIzeGxcIj48Yj5Qb3B1bGF0aW9uOiA8L2I+e2FjdGl2ZUNvdW50cnkucG9wdWxhdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwiM3hsXCI+PGI+Q29udGluZW50OiA8L2I+e2FjdGl2ZUNvdW50cnkuY29udGluZW50fTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSB2YXJpYW50PVwic2ltcGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDYXB0aW9uPlRvZGF5IGluIHthY3RpdmVDb3VudHJ5LmNvdW50cnl9PC9UYWJsZUNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8VGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaD5Ub2RheSBjYXNlczwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoPlRvZGF5IGRlYXRoczwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoPlRvZGF5IHJlY292ZXJlZDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgICAgICAgIDwvVGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQ+e2FjdGl2ZUNvdW50cnkudG9kYXlDYXNlc308L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQ+e2FjdGl2ZUNvdW50cnkudG9kYXlEZWF0aHN9PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkPnthY3RpdmVDb3VudHJ5LnRvZGF5UmVjb3ZlcmVkfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgICAgICAgIDwvVGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSB2YXJpYW50PVwic2ltcGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDYXB0aW9uPkNPVklELTE5IHBhbmRlbWljIGluIHthY3RpdmVDb3VudHJ5LmNvdW50cnl9PC9UYWJsZUNhcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8VGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaD5DYXNlczwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoPkRlYXRoczwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoPlJlY292ZXJlZDwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgICAgICAgIDwvVGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQ+e2FjdGl2ZUNvdW50cnkuY2FzZXN9PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRkPnthY3RpdmVDb3VudHJ5LmRlYXRoc308L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGQ+e2FjdGl2ZUNvdW50cnkucmVjb3ZlcmVkfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgICAgICAgIDwvVGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+Q09WSUQtMTkgQ09ST05BVklSVVMgUEFOREVNSUM8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgIClcclxufSIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBY3RpdmVDb3VudHJ5IGZyb20gJy4uL0FjdGl2ZUNvdW50cnknXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oe2lzTW9iaWxlfSl7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFVybCA9ICdodHRwczovL2Nvcm9uYS5sbWFvLm5pbmphL3YyL2NvdW50cmllcydcclxuICAgICAgICBmZXRjaChyZXF1ZXN0VXJsKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAocmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7ICBcclxuICAgICAgICAgICAgc2V0RGF0YShkYXRhKVxyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpIFxyXG4gICAgICAgICAgICBzZXRBY3RpdmUoZGF0YVsyMTRdKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRpbmcvPn1cclxuXHJcbiAgICAgICAgeyFpc0xvYWRpbmcgJiYgPGRpdiBjbGFzc05hbWU9J21haW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZSAmJiA8QWN0aXZlQ291bnRyeSBhY3RpdmVDb3VudHJ5PXthY3RpdmV9Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyg8ZGl2IGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZS1oZWFkZXInPkxJU1QgT0YgQ09VTlRSSUVTIE9GIFRIRSBXT1JMRDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5DT1VOVFJZPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPkNPTVRJTkVOVFM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+SU5GTzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChjb3VudHJ5LCBpZHgpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdyb3cnIGtleT17YCR7Y291bnRyeS5jb3VudHJ5SW5mby5pc28zfS0ke2lkeH1gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvdW50cnl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntjb3VudHJ5LmNvbnRpbmVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPjxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGNvdW50cnkpfT5EZXRhaWxzPC9CdXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHtcclxuICAgIERyYXdlcixcclxuICAgIERyYXdlckJvZHksXHJcbiAgICBEcmF3ZXJGb290ZXIsXHJcbiAgICBEcmF3ZXJIZWFkZXIsXHJcbiAgICBEcmF3ZXJPdmVybGF5LFxyXG4gICAgRHJhd2VyQ29udGVudCxcclxuICAgIERyYXdlckNsb3NlQnV0dG9uLFxyXG4gICAgQnV0dG9uLFxyXG4gICAgdXNlRGlzY2xvc3VyZSxcclxuICAgIElucHV0XHJcbiAgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2JpbGUoKXtcclxuICAgIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKVxyXG4gIGNvbnN0IGJ0blJlZiA9IFJlYWN0LnVzZVJlZigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QnV0dG9uIHJlZj17YnRuUmVmfSBjb2xvclNjaGVtZT1cInRlYWxcIiBvbkNsaWNrPXtvbk9wZW59PlxyXG4gICAgICAgIE9wZW5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICBpc09wZW49e2lzT3Blbn1cclxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgICBmaW5hbEZvY3VzUmVmPXtidG5SZWZ9XHJcbiAgICAgID5cclxuICAgICAgICA8RHJhd2VyT3ZlcmxheT5cclxuICAgICAgICAgIDxEcmF3ZXJDb250ZW50PlxyXG4gICAgICAgICAgICA8RHJhd2VyQ2xvc2VCdXR0b24gLz5cclxuICAgICAgICAgICAgPERyYXdlckhlYWRlcj5DcmVhdGUgeW91ciBhY2NvdW50PC9EcmF3ZXJIZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8RHJhd2VyQm9keT5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmUuLi5cIiAvPlxyXG4gICAgICAgICAgICA8L0RyYXdlckJvZHk+XHJcblxyXG4gICAgICAgICAgICA8RHJhd2VyRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBtcj17M30gb25DbGljaz17b25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiYmx1ZVwiPlNhdmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9EcmF3ZXJGb290ZXI+XHJcbiAgICAgICAgICA8L0RyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAgPC9EcmF3ZXJPdmVybGF5PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvPlxyXG4gIClcclxufSIsImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBnZXRUb2RheSBmcm9tICcuLi8uLi9oZWxwZXJzL2dldFRvZGF5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZSgpIHtcclxuICAgIGNvbnN0IFt0b2RheSwgc2V0VG9kYXldID0gdXNlU3RhdGUoJycpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUb2RheShnZXRUb2RheSgpKVxyXG4gICAgICAgIH0sMTAwMClcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHQpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lJz57dG9kYXl9PC9kaXY+XHJcbiAgICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUb2RheSgpe1xyXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGRkID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgdmFyIG1tID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7IC8vSmFudWFyeSBpcyAwIVxyXG4gICAgdmFyIHl5eXkgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgIHZhciB0aW1lID0gZGF0ZS5nZXRIb3VycygpICsgXCI6XCIgKyBkYXRlLmdldE1pbnV0ZXMoKSArIFwiOlwiICsgZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICBjb25zdCBUb2RheSA9IHRpbWUgKyAnLScgKyBtbSArICcvJyArIGRkICsgJy8nICsgeXl5eTtcclxuICAgIHJldHVybiBUb2RheVxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2JpbGUoKXtcclxuICAgIGNvbnN0IFtkaW1lbnNpb25zLHNldERlbWVuc2lvbnNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGhlaWdodDogMFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VXaW5kb3dTaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICBzZXREZW1lbnNpb25zKHt3aWR0aCwgaGVpZ2h0fSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VXaW5kb3dTaXplKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGFuZ2VXaW5kb3dTaXplKVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfSxbZGltZW5zaW9uc10pXHJcblxyXG4gICAgcmV0dXJuIGRpbWVuc2lvbnMud2lkdGggJiYgZGltZW5zaW9ucy53aWR0aCA8IDc4NlxyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbidcclxuaW1wb3J0IFRpbWUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGlzTW9iaWxlIGZyb20gJy4uL2hlbHBlcnMvaXNNb2JpbGUnXHJcbmltcG9ydCBNb2JpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2JpbGUnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7aXNNb2JpbGUoKSA/IDxNb2JpbGUvPlxyXG4gICAgOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db3ZpZC0xOSBTdGF0aXN0aWNzPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1haW4gaXNNb2JpbGU9e01vYmlsZX0vPlxyXG4gICAgICA8VGltZS8+XHJcbiAgICA8L2Rpdj59XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==