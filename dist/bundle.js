/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --gradient: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);\r\n  --background: #343d4b;\r\n  --primary-clr: #222831;\r\n  --secondary-clr: #ffffff;\r\n  --third-clr: #282f3b;\r\n}\r\n\r\n* {\r\n  font-family: \"Josefin Sans\", sans-serif;\r\n  -webkit-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n}\r\n\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  background-color: var(--background);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  -webkit-transition: all 200ms linear;\r\n  transition: all 200ms linear;\r\n  overflow: hidden auto;\r\n}\r\n\r\nbody.dark {\r\n  --background: #dedddd;\r\n  --primary-clr: #ffffff;\r\n  --secondary-clr: #222831;\r\n  --third-clr: #e2e2e2;\r\n}\r\n\r\n/* Scroll bars */\r\n/* Firefox (uncomment to work in Firefox, although other properties will not work!)  */\r\n/** {\r\n  scrollbar-width: thin;\r\n  scrollbar-color: #222831 #DFE9EB;\r\n}*/\r\n\r\n/* Chrome, Edge and Safari */\r\n*::-webkit-scrollbar {\r\n  height: 8px;\r\n  width: 8px;\r\n}\r\n*::-webkit-scrollbar-track {\r\n  border-radius: 20px;\r\n  background-color: #dfe9eb;\r\n}\r\n\r\n*::-webkit-scrollbar-track:hover {\r\n  background-color: #b8c0c2;\r\n}\r\n\r\n*::-webkit-scrollbar-track:active {\r\n  background-color: #b8c0c2;\r\n}\r\n\r\n*::-webkit-scrollbar-thumb {\r\n  border-radius: 5px;\r\n  background-color: #222831;\r\n}\r\n\r\n*::-webkit-scrollbar-thumb:hover {\r\n  background-color: #282f3b;\r\n}\r\n\r\n*::-webkit-scrollbar-thumb:active {\r\n  background-color: #343d4b;\r\n}\r\n\r\n/* Header  */\r\n\r\nheader {\r\n  padding: 30px;\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: var(--primary-clr);\r\n  width: 100vw;\r\n  height: 100px;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n\r\n.btn-container {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n}\r\n\r\n.btn-color-mode-switch {\r\n  display: inline-block;\r\n  margin: 0px;\r\n  position: relative;\r\n}\r\n\r\n.btn-color-mode-switch > label.btn-color-mode-switch-inner {\r\n  color: var(--secondary-clr);\r\n  border: 1px solid var(--secondary-clr);\r\n  box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.2) inset;\r\n\r\n  margin: 0px;\r\n  width: 140px;\r\n  height: 40px;\r\n  background-color: var(--primary-clr);\r\n  border-radius: 26px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  transition: all 0.3s ease;\r\n  display: block;\r\n}\r\n\r\n.btn-color-mode-switch > label.btn-color-mode-switch-inner:before {\r\n  color: var(--secondary-clr);\r\n  margin-top: 3px;\r\n  content: attr(data-on);\r\n  position: absolute;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  top: 7px;\r\n  right: 20px;\r\n  color: var(--secondary-clr);\r\n}\r\n\r\n.btn-color-mode-switch > label.btn-color-mode-switch-inner:after {\r\n  content: attr(data-off);\r\n  width: 70px;\r\n  height: 25px;\r\n  background: #fff;\r\n  border-radius: 26px;\r\n  position: absolute;\r\n  font-size: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  left: 2px;\r\n  top: 2px;\r\n  text-align: center;\r\n  transition: all 0.3s ease;\r\n  box-shadow: 0px 0px 6px -2px #111;\r\n  padding: 5px 0px;\r\n  padding-top: 7px;\r\n  color: #222831;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-color-mode-switch input[type=\"checkbox\"] {\r\n  cursor: pointer;\r\n  width: 50px;\r\n  height: 25px;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 1;\r\n  margin: 0px;\r\n  text-align: center;\r\n}\r\n\r\n.btn-color-mode-switch\r\n  input[type=\"checkbox\"]:checked\r\n  + label.btn-color-mode-switch-inner {\r\n  background-color: var(--primary-clr);\r\n}\r\n\r\n.btn-color-mode-switch\r\n  input[type=\"checkbox\"]:checked\r\n  + label.btn-color-mode-switch-inner:after {\r\n  content: attr(data-on);\r\n  left: 68px;\r\n}\r\n\r\n.btn-color-mode-switch\r\n  input[type=\"checkbox\"]:checked\r\n  + label.btn-color-mode-switch-inner:before {\r\n  content: attr(data-off);\r\n  right: auto;\r\n  left: 20px;\r\n  color: var(--secondary-clr);\r\n}\r\n\r\n.toggle-switch {\r\n  position: relative;\r\n  width: 100px;\r\n  height: 40px;\r\n  --light: var(--secondary-clr);\r\n  --dark: #28292c;\r\n  --link: rgb(27, 129, 112);\r\n  --link-hover: rgb(24, 94, 82);\r\n}\r\n\r\n.switch-label {\r\n  border: 1px solid var(--secondary-clr);\r\n  box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.2) inset;\r\n\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 40px;\r\n  background-color: var(--primary-clr);\r\n  border-radius: 25px;\r\n  cursor: pointer;\r\n}\r\n\r\n.checkbox {\r\n  position: absolute;\r\n  display: none;\r\n}\r\n\r\n.slider {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 25px;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n\r\n.checkbox:checked ~ .slider {\r\n  background-color: var(--light);\r\n}\r\n\r\n.slider::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 7px;\r\n  left: 10px;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 50%;\r\n  -webkit-box-shadow: inset 12px -4px 0px 0px var(--secondary-clr);\r\n  box-shadow: inset 12px -4px 0px 0px var(--secondary-clr);\r\n  background-color: var(--primary-clr);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n\r\n.checkbox:checked ~ .slider::before {\r\n  -webkit-transform: translateX(50px);\r\n  -ms-transform: translateX(50px);\r\n  transform: translateX(50px);\r\n  background-color: var(--primary-clr);\r\n  -webkit-box-shadow: none;\r\n  box-shadow: none;\r\n}\r\n\r\n/* Weather  */\r\n\r\n.weather-container {\r\n  display: flex;\r\n  width: 575px;\r\n  height: 450px;\r\n  align-self: center;\r\n  margin-top: 17vh;\r\n  border-radius: 25px;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\r\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\r\n}\r\n\r\n.today-weather-gradient {\r\n  box-sizing: border-box;\r\n  background-image: var(--gradient);\r\n  border-radius: 25px;\r\n  opacity: 0.8;\r\n  width: 275px;\r\n  height: 450px;\r\n  border-radius: 25px 0 0 25px;\r\n  /* margin-top: -20px; */\r\n  padding: 30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n}\r\n\r\n.today-weather:hover,\r\n.today-weather-gradient:hover {\r\n  transform: scale(1.01);\r\n}\r\n\r\n.today-weather {\r\n  border-radius: 25px 0 0 25px;\r\n  width: 275px;\r\n  height: 450px;\r\n  background-image: url(\"https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80\");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.today-date {\r\n  color: var(--secondary-clr);\r\n}\r\n\r\n.today-date h3 {\r\n  font-weight: 400;\r\n}\r\n\r\n.today-temp {\r\n  color: var(--secondary-clr);\r\n}\r\n\r\n.today-temp h1 {\r\n  font-size: 60px;\r\n  margin-bottom: -20px;\r\n}\r\n\r\n.info-side {\r\n  box-sizing: border-box;\r\n  border-radius: 0 25px 25px 0;\r\n  background-color: var(--primary-clr);\r\n  width: 300px;\r\n  height: 450px;\r\n  padding: 30px;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.info-sub-class {\r\n  color: var(--secondary-clr);\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.info-sub-class h3,\r\n.info-sub-class h4 {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.info-sub-class h4 {\r\n  font-weight: 400;\r\n}\r\n\r\n.days {\r\n  /* padding: 20px; */\r\n  color: var(--secondary-clr);\r\n  background-color: var(--third-clr);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 40px;\r\n  border-radius: 15px;\r\n  overflow: auto hidden;\r\n}\r\n\r\n.days::-webkit-scrollbar {\r\n  width: 1.5em;\r\n  height: 0.65em;\r\n}\r\n\r\n.days::-webkit-scrollbar-thumb {\r\n  background-color: var(--background);\r\n  border-radius: 100vh;\r\n}\r\n\r\n.days::-webkit-scrollbar-track {\r\n  background-color: var(--third-clr);\r\n  border-radius: 100vh;\r\n  margin-inline: 0.4em;\r\n}\r\n\r\n.days div {\r\n  padding-top: 50px;\r\n  height: 118px;\r\n  width: 40px;\r\n  padding: 10px;\r\n  border-radius: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.days div:hover {\r\n  color: var(--primary-clr);\r\n  background-color: var(--secondary-clr);\r\n  transform: scale(1.075);\r\n}\r\n\r\n.days div h4:nth-of-type(1) {\r\n  font-weight: 400;\r\n}\r\n\r\n.search-bar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.search-bar-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 20px;\r\n}\r\n\r\n.search-bar input {\r\n  height: 30px;\r\n  border: none;\r\n  background-color: transparent;\r\n  border-bottom: 1px solid var(--third-clr);\r\n  color: var(--secondary-clr);\r\n  font-weight: 700;\r\n}\r\n\r\n.search-bar input:focus {\r\n  outline: none;\r\n}\r\n\r\n.search-bar button {\r\n  cursor: pointer;\r\n  color: var(--secondary-clr);\r\n  font-weight: 700;\r\n  height: 25px;\r\n  background-image: var(--gradient);\r\n  border: none;\r\n  border-radius: 30px;\r\n}\r\n\r\n.search-bar button:hover {\r\n  transform: scale(0.97);\r\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\r\n}\r\n\r\n/* Daily forecast container  */\r\n\r\n.daily-forecast {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 75vw;\r\n  background-color: var(--primary-clr);\r\n  border: 10px solid var(--primary-clr);\r\n  margin-top: 7vh;\r\n  margin-bottom: 10vh;\r\n  border-radius: 25px;\r\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,\r\n    rgba(0, 0, 0, 0.22) 0px 10px 10px;\r\n}\r\n\r\n.daily-forecast .d {\r\n  box-sizing: border-box;\r\n  border-bottom: 1px solid var(--third-clr);\r\n  color: var(--secondary-clr);\r\n  font-weight: 800;\r\n  height: 100px;\r\n  border-radius: 15px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.daily-forecast .d:hover {\r\n  color: var(--primary-clr);\r\n  background-color: var(--secondary-clr);\r\n}\r\n\r\n.headers {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 20px;\r\n  text-align: center;\r\n  height: 60px;\r\n  border-bottom: 1px solid var(--third-clr);\r\n}\r\n\r\n.headers h2 {\r\n  color: var(--secondary-clr);\r\n  margin-inline: 30px;\r\n  font-size: 18px;\r\n  font-weight: 300;\r\n  margin-bottom: 20px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.headers h2:nth-of-type(3) {\r\n  margin-right: 30px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/buildPage.js":
/*!**************************!*\
  !*** ./src/buildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildPage: () => (/* binding */ buildPage)\n/* harmony export */ });\n/* harmony import */ var _changeDegree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeDegree */ \"./src/changeDegree.js\");\n\r\n\r\nconst body = document.querySelector(\"body\");\r\n\r\nconst curDay = document.querySelector(\"#today-day\");\r\nconst curDate = document.querySelector(\"#today\");\r\nconst curLocation = document.querySelector(\"#cur-location\");\r\nconst curTemp = document.querySelector(\"#cur-temp\");\r\nconst curCondition = document.querySelector(\"#cur-condition\");\r\n\r\nconst curPrecipitation = document.querySelector(\"#cur-precipitation\");\r\nconst curHumidity = document.querySelector(\"#cur-humidity\");\r\nconst curWind = document.querySelector(\"#cur-wind\");\r\n\r\nconst switchDegree = document.querySelector(\"#color_mode\");\r\nconst switchTheme = document.querySelector(\"#theme-switch\");\r\n\r\nconst hourForecast = document.querySelectorAll(\".hour-forecast\");\r\nconst dailyForecasts = document.querySelectorAll(\".d\");\r\n\r\nlet weekdays = [\r\n  \"Sunday\",\r\n  \"Monday\",\r\n  \"Tuesday\",\r\n  \"Wednesday\",\r\n  \"Thursday\",\r\n  \"Friday\",\r\n  \"Saturday\",\r\n];\r\n\r\nfunction changeTheme() {\r\n  body.classList.toggle(\"dark\");\r\n}\r\n\r\nfunction buildPage(weatherData) {\r\n  if (weatherData != \"\") {\r\n    let [yearNum, monthNum, dayNum] = weatherData.location.localtime.split(\"-\");\r\n    let time = dayNum.split(\" \")[1];\r\n    dayNum = dayNum.split(\" \")[0];\r\n    const today = `${monthNum}/${dayNum}/${yearNum}, ${time} `;\r\n    curDay.textContent = weekdays[new Date().getDay()];\r\n    curDate.textContent = today;\r\n\r\n    let region;\r\n    if (weatherData.location.region == \"\") {\r\n      region = weatherData.location.name;\r\n    } else {\r\n      region = weatherData.location.region;\r\n    }\r\n\r\n    const country = weatherData.location.country;\r\n    curLocation.textContent = `${region}, ${country}`;\r\n\r\n    const tempC = weatherData.current.temp_c;\r\n    const condition = weatherData.current.condition.text;\r\n    curTemp.textContent = `${tempC}°C`;\r\n    curCondition.textContent = condition;\r\n\r\n    const precipitation = weatherData.current.precip_in;\r\n    const humidity = weatherData.current.humidity;\r\n    const windKph = weatherData.current.wind_kph;\r\n\r\n    curPrecipitation.textContent = `${precipitation}mm`;\r\n    curHumidity.textContent = `${humidity}%`;\r\n    curWind.textContent = `${windKph} km/h`;\r\n\r\n    for (const hour of hourForecast) {\r\n      const curHourTemp =\r\n        weatherData.forecast.forecastday[0].hour[hour.dataset.hour].temp_c;\r\n      hour.nextElementSibling.textContent = `${curHourTemp}°C`;\r\n    }\r\n\r\n    for (const [i, d] of dailyForecasts.entries()) {\r\n      const fd_temp = weatherData.forecast.forecastday[i].day.avgtemp_c;\r\n      const fd_humidity = weatherData.forecast.forecastday[i].day.avghumidity;\r\n      const fd_WeatherIcon =\r\n        weatherData.forecast.forecastday[i].day.condition.icon;\r\n      const fd_ChanceOfRain =\r\n        weatherData.forecast.forecastday[i].day.daily_chance_of_rain;\r\n\r\n      const fd_date = weatherData.forecast.forecastday[i].date;\r\n      const day = weekdays[new Date(fd_date).getDay()];\r\n\r\n      dailyForecasts[i].childNodes[1].textContent = day;\r\n      dailyForecasts[\r\n        i\r\n      ].childNodes[3].childNodes[1].src = `https:${fd_WeatherIcon}`;\r\n      dailyForecasts[i].childNodes[5].textContent = `${fd_ChanceOfRain}%`;\r\n      dailyForecasts[i].childNodes[7].textContent = `${fd_humidity}%`;\r\n      dailyForecasts[i].childNodes[9].textContent = `${fd_temp}°C`;\r\n\r\n      d.addEventListener(\"click\", (e) => {\r\n        curDay.textContent = day;\r\n        curTemp.textContent = `${fd_temp}°C`;\r\n        curCondition.textContent =\r\n          weatherData.forecast.forecastday[i].day.condition.text;\r\n\r\n        curPrecipitation.textContent = `${weatherData.forecast.forecastday[i].day.totalprecip_mm}mm`;\r\n        curHumidity.textContent = `${fd_humidity}%`;\r\n        curWind.textContent = `${weatherData.forecast.forecastday[i].day.maxwind_kph} km/h`;\r\n\r\n        let [yearNum, monthNum, dayNum] =\r\n          weatherData.forecast.forecastday[i].date.split(\"-\");\r\n        curDate.textContent = `${monthNum}/${dayNum}/${yearNum}`;\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\nswitchDegree.addEventListener(\"click\", _changeDegree__WEBPACK_IMPORTED_MODULE_0__.changeDegree);\r\n\r\nswitchTheme.addEventListener(\"click\", changeTheme);\r\n\n\n//# sourceURL=webpack://weather-app/./src/buildPage.js?");

/***/ }),

/***/ "./src/changeDegree.js":
/*!*****************************!*\
  !*** ./src/changeDegree.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeDegree: () => (/* binding */ changeDegree)\n/* harmony export */ });\nconst switchDegree = document.querySelector(\"#color_mode\");\r\n\r\nconst curTemp = document.querySelector(\"#cur-temp\");\r\nconst curWind = document.querySelector(\"#cur-wind\");\r\n\r\nconst hourForecast = document.querySelectorAll(\".hour-forecast\");\r\nconst dfTemp = document.querySelectorAll(\".df-temp\");\r\n\r\nfunction toMiles(kms) {\r\n  kms = Number(kms);\r\n  return `${(kms / 1.6093446).toFixed(1)} mph`;\r\n}\r\n\r\nfunction toKilometers(miles) {\r\n  miles = Number(miles);\r\n  return `${(miles * 1.6093446).toFixed(1)} km/h`;\r\n}\r\n\r\nfunction toFahrenheit(celTemp) {\r\n  celTemp = Number(celTemp);\r\n  return `${((celTemp * 9) / 5 + 32).toFixed(1)}°F`;\r\n}\r\n\r\nfunction toCelsius(fahTemp) {\r\n  fahTemp = Number(fahTemp);\r\n  return `${(((fahTemp - 32) * 5) / 9).toFixed(1)}°C`;\r\n}\r\n\r\nfunction changeDegree() {\r\n  if (switchDegree.checked) {\r\n    let temp = curTemp.textContent.slice(0, -2);\r\n    let wind = curWind.textContent.slice(0, -4);\r\n    curWind.textContent = toMiles(wind);\r\n    curTemp.textContent = toFahrenheit(temp);\r\n\r\n    for (const hour of hourForecast) {\r\n      let temp2 = hour.nextElementSibling.textContent.slice(0, -2);\r\n      hour.nextElementSibling.textContent = toFahrenheit(temp2);\r\n    }\r\n\r\n    for (const temp of dfTemp) {\r\n      let temp2 = temp.textContent.slice(0, -2);\r\n      temp.textContent = toFahrenheit(temp2);\r\n    }\r\n  } else if (!switchDegree.checked) {\r\n    let temp = curTemp.textContent.slice(0, -2);\r\n    let wind = curWind.textContent.slice(0, -3);\r\n    curWind.textContent = toKilometers(wind);\r\n    curTemp.textContent = toCelsius(temp);\r\n\r\n    for (const hour of hourForecast) {\r\n      let temp2 = hour.nextElementSibling.textContent.slice(0, -2);\r\n      hour.nextElementSibling.textContent = toCelsius(temp2);\r\n    }\r\n    for (const temp of dfTemp) {\r\n      let temp2 = temp.textContent.slice(0, -2);\r\n      temp.textContent = toCelsius(temp2);\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/changeDegree.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildPage */ \"./src/buildPage.js\");\n\r\n\r\n\r\nconst locationInput = document.querySelector(\"#location\");\r\nconst locationBtn = document.querySelector(\"#submit-location\");\r\n\r\n/// Functions ///\r\nasync function getWeather(location) {\r\n  const response = await fetch(\r\n    `https://api.weatherapi.com/v1/forecast.json?key=2bf105dba24d48bfb9363440241106&q=${location}&days=7&aqi=no&alerts=no`,\r\n    { mode: \"cors\" }\r\n  );\r\n  const data = await response.json();\r\n  return data;\r\n}\r\n\r\nlocationBtn.addEventListener(\"click\", function (e) {\r\n  e.preventDefault();\r\n  let location = locationInput.value;\r\n  locationInput.value = \"\";\r\n\r\n  getWeather(location)\r\n    .then((res) => {\r\n      console.log(res);\r\n      (0,_buildPage__WEBPACK_IMPORTED_MODULE_1__.buildPage)(res);\r\n    })\r\n    .catch((err) => console.log(`Error: ${err}`));\r\n});\r\n\r\ngetWeather(\"Spain\")\r\n  .then((res) => {\r\n    console.log(res);\r\n    (0,_buildPage__WEBPACK_IMPORTED_MODULE_1__.buildPage)(res);\r\n  })\r\n  .catch((err) => console.log(`Error: ${err}`));\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;