/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* { 
    margin: 0;
    font-size: 1.25rem;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* border: 1px solid red; */
}

/* Body */
body {
    height: 100%;
    min-height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
}

/* Header */
.header-container {
    background-color: rgb(238, 240, 243);
    text-align: center;
    padding: 10px;
    border-bottom: 2px solid darkblue;
}

.header-container h1 {
    margin: 0;
    font-size: 2rem;
}

/* Main Container */
.main-container {
    flex: 1;
    display: flex;
    height: 100%;
}

/* Sidebar */
.sidebar {
    flex: 1;
    background-color: white;
}

.project, .sidebar form {
    margin: 20px;
    padding: 5px;
    border-radius: 4px;
}

.sidebar, form {
    width: 50%;
}

.add-project-button {
    margin: 20px;
    margin-top: 0;
    padding: 5px;
    border-radius: 4px;
    width: calc(100% - 40px);
    text-align: left;
    background-color: white;
    border: none;
}

.project:hover, .add-project-button:hover {
    background-color: rgb(231, 231, 231);
}

.active {
    background-color: rgba(0, 0, 139, 0.55);
    border-left: 3px solid darkblue;
}

.active:hover {
    background-color: rgba(0, 0, 139, 0.65);
}

/* Main Body */
.project-body {
    flex: 3.5;
    background-color: rgb(231, 231, 231);
    padding: 20px;
    padding-top: 5px;
}

.project-body form {
    margin: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 7px;
    width: calc(100% - 60px);
}

.project-body h1 {
    font-size: 1.75rem;
    padding: 20px;
    margin: 20px;
    color: rgb(247, 244, 244);
    background-color: darkblue;
    border-radius: 7px;
}

.task-div {
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 10px;
    border: 1px solid gray;
    background-color: white;
    border-radius: 3px;
}

.task-div-top {
    display: flex;
    gap: 10px;
}

.completion-checkbox {
    transform: scale(1.5);
}

.Low {
    border-left: 7px solid green;
}

.Medium {
    border-left: 7px solid orange;
}

.High {
    border-left: 7px solid red;
}

#task-due-date {
    margin-left: auto;
    color: gray;
}

#task-description {
    font-size: 1rem;
}

#edit-icon {
    margin-right: 0;
}

#bin-icon {
    margin-right: 0;
}

.add-task-button {
    margin: 10px 20px;
    padding: 0px;
}

#title-input, #description-input, #date-input {
    width: calc(100% - 10px);
    padding: 1px 2px;
}

#priority-select {
    width: calc(100%);
    padding: 2px;
}

/* Footer */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,kBAAkB;IAClB,2DAA2D;IAC3D,2BAA2B;AAC/B;;AAEA,SAAS;AACT;IACI,YAAY;IACZ,iBAAiB;IACjB,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;;AAEA,WAAW;AACX;IACI,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,OAAO;IACP,aAAa;IACb,YAAY;AAChB;;AAEA,YAAY;AACZ;IACI,OAAO;IACP,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;IACxB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,uCAAuC;IACvC,+BAA+B;AACnC;;AAEA;IACI,uCAAuC;AAC3C;;AAEA,cAAc;AACd;IACI,SAAS;IACT,oCAAoC;IACpC,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA,WAAW","sourcesContent":["* { \n    margin: 0;\n    font-size: 1.25rem;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    /* border: 1px solid red; */\n}\n\n/* Body */\nbody {\n    height: 100%;\n    min-height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\n.header-container {\n    background-color: rgb(238, 240, 243);\n    text-align: center;\n    padding: 10px;\n    border-bottom: 2px solid darkblue;\n}\n\n.header-container h1 {\n    margin: 0;\n    font-size: 2rem;\n}\n\n/* Main Container */\n.main-container {\n    flex: 1;\n    display: flex;\n    height: 100%;\n}\n\n/* Sidebar */\n.sidebar {\n    flex: 1;\n    background-color: white;\n}\n\n.project, .sidebar form {\n    margin: 20px;\n    padding: 5px;\n    border-radius: 4px;\n}\n\n.sidebar, form {\n    width: 50%;\n}\n\n.add-project-button {\n    margin: 20px;\n    margin-top: 0;\n    padding: 5px;\n    border-radius: 4px;\n    width: calc(100% - 40px);\n    text-align: left;\n    background-color: white;\n    border: none;\n}\n\n.project:hover, .add-project-button:hover {\n    background-color: rgb(231, 231, 231);\n}\n\n.active {\n    background-color: rgba(0, 0, 139, 0.55);\n    border-left: 3px solid darkblue;\n}\n\n.active:hover {\n    background-color: rgba(0, 0, 139, 0.65);\n}\n\n/* Main Body */\n.project-body {\n    flex: 3.5;\n    background-color: rgb(231, 231, 231);\n    padding: 20px;\n    padding-top: 5px;\n}\n\n.project-body form {\n    margin: 20px;\n    background-color: white;\n    padding: 10px;\n    border-radius: 7px;\n    width: calc(100% - 60px);\n}\n\n.project-body h1 {\n    font-size: 1.75rem;\n    padding: 20px;\n    margin: 20px;\n    color: rgb(247, 244, 244);\n    background-color: darkblue;\n    border-radius: 7px;\n}\n\n.task-div {\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n    padding: 10px;\n    border: 1px solid gray;\n    background-color: white;\n    border-radius: 3px;\n}\n\n.task-div-top {\n    display: flex;\n    gap: 10px;\n}\n\n.completion-checkbox {\n    transform: scale(1.5);\n}\n\n.Low {\n    border-left: 7px solid green;\n}\n\n.Medium {\n    border-left: 7px solid orange;\n}\n\n.High {\n    border-left: 7px solid red;\n}\n\n#task-due-date {\n    margin-left: auto;\n    color: gray;\n}\n\n#task-description {\n    font-size: 1rem;\n}\n\n#edit-icon {\n    margin-right: 0;\n}\n\n#bin-icon {\n    margin-right: 0;\n}\n\n.add-task-button {\n    margin: 10px 20px;\n    padding: 0px;\n}\n\n#title-input, #description-input, #date-input {\n    width: calc(100% - 10px);\n    padding: 1px 2px;\n}\n\n#priority-select {\n    width: calc(100%);\n    padding: 2px;\n}\n\n/* Footer */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomManager)
/* harmony export */ });
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



class DomManager {
  constructor() {
    this.activeProject = ''
    this.todoList = new _todolist__WEBPACK_IMPORTED_MODULE_0__["default"]()
  }

  findActiveProjectIndex () {
    return this.todoList.projects.indexOf(this.activeProject)
  }

  renderAllTasksTab(homeProjectsDiv, projectBody) {
    const tabDiv = this.createHomeTaskTab('All Tasks')

    // this.handleProjectTabClick(tabDiv, projectBody, 
    //                           this.todoList.getAllTasks(), "All Tasks")
    tabDiv.addEventListener('click', () => {
      this.renderTasks(projectBody, this.todoList.getAllTasks(), 'All Tasks')
    })
    homeProjectsDiv.appendChild(tabDiv)
    this.highlightLatestProject(tabDiv)
    tabDiv.classList.add('active')
  }
  
  createHomeTaskTab(name) {
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('project')
    const tabParagraph = document.createElement('p')
    tabParagraph.textContent = name
    tabDiv.appendChild(tabParagraph)
    return tabDiv
  }

  renderProjectTabs(allProjectsDiv, projectBody) {
    this.todoList.projects.forEach((project) => {
      const projectDiv = document.createElement('div')
      projectDiv.classList.add('project')
      const projectParagraph = document.createElement('p')
      projectParagraph.textContent = project.name
      // Event listener on project
      this.handleProjectTabClick(projectDiv, projectBody, 
                                project.tasks, project.name)

      projectDiv.appendChild(projectParagraph)
      allProjectsDiv.appendChild(projectDiv)
    })
  }

  handleProjectTabClick(projectTabDiv, projectBody, tasks, projectName) {
    this.highlightLatestProject(projectTabDiv)
    projectTabDiv.addEventListener('click', () => {
      this.renderTasks(projectBody, tasks, projectName)
      this.activeProject = this.todoList.projects.find(
                            project => project.name === projectName)
    })
  }

  highlightLatestProject(projectTabDiv) {
    projectTabDiv.addEventListener('click', () => {
      const allProjectTabs = document.querySelectorAll('.project')
      allProjectTabs.forEach(tab => tab.classList.remove('active'))
      projectTabDiv.classList.add('active')
    })
  }

  renderTasks(projectBody, tasks, projectName) {
    projectBody.textContent = ''
    const projectNameTitle = document.createElement('h1')
    projectNameTitle.textContent = projectName
    projectBody.appendChild(projectNameTitle)
    const sortedTasks = this.sortTasksByDate(tasks)
    sortedTasks.forEach((task, index) => {
      if (task.completed === false) {
        const taskDiv = document.createElement('div')
        projectBody.appendChild(taskDiv)
        taskDiv.classList.add('task-div')
        const taskDivTop = document.createElement('div')
        taskDiv.appendChild(taskDivTop)
        taskDivTop.classList.add('task-div-top')
        const completionCheckbox = document.createElement('input')
        taskDivTop.appendChild(completionCheckbox)
        completionCheckbox.type = 'checkbox'
        completionCheckbox.classList.add('completion-checkbox')
        completionCheckbox.id = index
        this.handleCompletionCheckboxClick(completionCheckbox, task, taskDiv)
        const taskTitleParagraph = document.createElement('p')
        taskDivTop.appendChild(taskTitleParagraph)
        taskTitleParagraph.textContent = task.title
        taskTitleParagraph.id = 'task-title'
        const taskDescriptionParagraph = document.createElement('p')
        taskDiv.appendChild(taskDescriptionParagraph)
        taskDescriptionParagraph.textContent = task.description
        taskDescriptionParagraph.id = 'task-description'
        const taskDueDateParagraph = document.createElement('p')
        taskDivTop.appendChild(taskDueDateParagraph)
        taskDueDateParagraph.id = 'task-due-date'
        const dueDate = new Date(task.dueDate.replace(/-/g, '\/'))
        const options = { 
          weekday: 'short', 
          month: '2-digit', 
          day: '2-digit', 
          year: 'numeric' 
        };
        const formattedDueDate = dueDate.toLocaleDateString('en-US', options).replace(',', '')
        taskDueDateParagraph.textContent = 'Due: ' + formattedDueDate
        taskDiv.classList.add(task.priority)
      }
    })
    if (projectName !== "All Tasks")
    this.createAddTaskButton(projectBody)
  }

  sortTasksByDate(taskArray) {
    return taskArray.sort((a, b) => a.dueDate.replace(/-/g, '') - b.dueDate.replace(/-/g, ''))
  }

  createAddProjectButton(sidebar, allProjectsDiv, projectBody) {
    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-project-button')
    addProjectButton.textContent = 'Add Project'
    sidebar.appendChild(addProjectButton)
    addProjectButton.addEventListener('click', () => {
      this.createAddProjectForm(allProjectsDiv, projectBody, sidebar)
      addProjectButton.remove()
    })
  }

  createAddProjectForm(allProjectsDiv, projectBody, sidebar) {
    const addProjectForm = document.createElement('form')
    allProjectsDiv.appendChild(addProjectForm)
    const addProjectInput = document.createElement('input')
    addProjectInput.type = 'text'
    addProjectInput.id = 'projectNameInput'
    addProjectInput.required = true
    addProjectForm.appendChild(addProjectInput)
    const addProjectSubmit = document.createElement('button')
    addProjectSubmit.textContent = 'Add Project'
    addProjectSubmit.type = 'submit'
    addProjectForm.appendChild(addProjectSubmit)
    addProjectSubmit.addEventListener('click', (e) => {
      if (addProjectInput.value.trim() !== '') {
      e.preventDefault()
      this.appendProject(addProjectInput.value, allProjectsDiv, projectBody)
      addProjectForm.remove()
      this.createAddProjectButton(sidebar, allProjectsDiv, projectBody)
      }
    })
  }

  appendProject(name, allProjectsDiv, projectBody) {
    this.todoList.createProject(name)
    this.renderLatestProjectTab(allProjectsDiv, projectBody)
  }

  renderLatestProjectTab(allProjectsDiv, projectBody) {
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    const projectParagraph = document.createElement('p')
    const lastProjectIndex = this.todoList.projects.length - 1
    projectParagraph.textContent = this.todoList.projects[lastProjectIndex].name
    projectDiv.appendChild(projectParagraph)
    allProjectsDiv.appendChild(projectDiv)
    this.handleProjectTabClick(projectDiv, projectBody, 
      this.todoList.projects[lastProjectIndex].tasks, 
      this.todoList.projects[lastProjectIndex].name)
  }

  createAddTaskButton(projectBody) {
    const addTaskButton = document.createElement('button')
    projectBody.appendChild(addTaskButton)
    addTaskButton.textContent = 'Add Task'
    addTaskButton.classList.add('add-task-button')
    this.handleAddTaskButtonClick(addTaskButton, projectBody)
  }

  handleAddTaskButtonClick(addTaskButton, projectBody) {
    addTaskButton.addEventListener('click', () => {
      this.createAddTaskForm(projectBody)
    })
  }

  createAddTaskForm(projectBody) {
    const addTaskForm = document.createElement('form')
    const lastChild = projectBody.lastElementChild
    projectBody.insertBefore(addTaskForm, lastChild)

    const addTaskTitleLabel = document.createElement('label')
    addTaskTitleLabel.setAttribute('for', 'title-input')
    addTaskForm.appendChild(addTaskTitleLabel)
    addTaskTitleLabel.textContent = "Title: "
    const addTaskTitleInput = document.createElement('input')
    addTaskForm.appendChild(addTaskTitleInput)
    addTaskTitleInput.type = 'text'
    addTaskTitleInput.id = 'title-input'
    addTaskTitleInput.placeholder = 'What to do?'
    addTaskTitleInput.required = true

    const addTaskDescriptionLabel = document.createElement('label')
    addTaskDescriptionLabel.setAttribute('for', 'description-input')
    addTaskForm.appendChild(addTaskDescriptionLabel)
    addTaskDescriptionLabel.textContent = "Description: "
    const addTaskDescriptionInput = document.createElement('textarea')
    addTaskForm.appendChild(addTaskDescriptionInput)
    addTaskDescriptionInput.id = 'description-input'
    addTaskDescriptionInput.placeholder = 'Any extra details?'

    const addTaskDueDateLabel = document.createElement('label')
    addTaskDueDateLabel.setAttribute('for', 'date-input')
    addTaskForm.appendChild(addTaskDueDateLabel)
    addTaskDueDateLabel.textContent = 'Due Date: '
    const addTaskDueDateInput = document.createElement('input')
    addTaskForm.appendChild(addTaskDueDateInput)
    addTaskDueDateInput.type = 'date'
    addTaskDueDateInput.id = 'date-input'
    addTaskDueDateInput.required = true

    const addTaskPriorityLabel = document.createElement('label')
    addTaskPriorityLabel.setAttribute('for', 'priority-select')
    addTaskForm.appendChild(addTaskPriorityLabel)
    addTaskPriorityLabel.textContent = 'Priority'
    const addTaskPrioritySelect = document.createElement('select')
    addTaskPrioritySelect.id = 'priority-select'
    addTaskForm.appendChild(addTaskPrioritySelect)
    const addPriorityLow = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityLow)
    addPriorityLow.value = 'Low'
    addPriorityLow.textContent = 'Low'
    const addPriorityMedium = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityMedium)
    addPriorityMedium.value = 'Medium'
    addPriorityMedium.textContent = 'Medium'
    const addPriorityhigh = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityhigh)
    addPriorityhigh.value = 'High'
    addPriorityhigh.textContent = 'High'

    const addTaskSubmitButton = document.createElement('button')
    addTaskForm.appendChild(addTaskSubmitButton)
    addTaskSubmitButton.type = 'Submit'
    addTaskSubmitButton.textContent = 'Submit'

    addTaskSubmitButton.addEventListener('click', (e) => {
      if (addTaskTitleInput.value.trim() !== '' && addTaskDueDateInput.value !== '') {
        e.preventDefault()
        this.appendTask(addTaskTitleInput.value, addTaskDescriptionInput.value, 
                  addTaskDueDateInput.value, addTaskPrioritySelect.value, 
                  projectBody)

        addTaskForm.remove()
     }
    })
  }

  appendTask(title, description, duedate, priority, projectBody) {
    this.todoList.createTask(this.findActiveProjectIndex(), {
      title: title,
      description: description,
      dueDate: duedate,
      priority: priority
    })
    this.renderTasks(projectBody, this.activeProject.tasks, 
                    this.activeProject.name)
  }

  handleCompletionCheckboxClick(completionCheckbox, task, taskDiv) {
    completionCheckbox.addEventListener('click', (event) => {
      if (!completionCheckbox.checked) {
        event.preventDefault(); // Prevent the default behavior of unchecking the checkbox
      }
      task.completed = true
      taskDiv.style.transition = 'opacity 2s';
      taskDiv.style.opacity = '0';
      setTimeout(() => {
        taskDiv.style.display = 'none'
      }, 2020);
    })
  }

// Rendering function
  renderAll() {
    // Creating temporary test projects/classes
    this.todoList.createProject('Project 1')
    this.todoList.createProject('Project 2')
    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });
    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });
    
    // Creating and sorting the divs
    const body = document.querySelector('body')
    const headerContainer = document.createElement('div')
    body.appendChild(headerContainer)
    headerContainer.classList = 'header-container'

    const mainContainer = document.createElement('div')
    mainContainer.className = 'main-container'
    body.appendChild(mainContainer)

    const sidebar = document.createElement('div')
    sidebar.className = 'sidebar'
    mainContainer.appendChild(sidebar)

    const homeProjectsDiv = document.createElement('div')
    sidebar.appendChild(homeProjectsDiv)

    const allProjectsDiv = document.createElement('div')
    sidebar.appendChild(allProjectsDiv)

    const projectBody = document.createElement('div')
    projectBody.className = 'project-body'
    mainContainer.appendChild(projectBody)

    // Header Container
    const headerParagraph = document.createElement('h1')
    headerParagraph.textContent = 'My Awesome To-Do List App'
    headerContainer.appendChild(headerParagraph)

    // Displays the special sidebar filters
    // All tasks
    this.renderAllTasksTab(homeProjectsDiv, projectBody)
    this.renderTasks(projectBody, this.todoList.getAllTasks(), "All Tasks")

    // Displaying the projects in the sidebar
    this.renderProjectTabs(allProjectsDiv, projectBody)

    // Add Project Button
    this.createAddProjectButton(sidebar, allProjectsDiv, projectBody)
  }
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


class Project {
  constructor(name) {
    this.name = name
    this.tasks = []
  }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
  setCompleted() {
    this.completed = true
  }
}

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



class TodoList {
  constructor() {
    this.projects = []
  }
  createProject(name) {
    const project = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](name)
    this.projects.push(project)
  }
  createTask(projectIndex, taskDetails) {
    const project = this.projects[projectIndex]
    if (project) {
      const task = new _task__WEBPACK_IMPORTED_MODULE_0__["default"](taskDetails.title, taskDetails.description, taskDetails.dueDate, taskDetails.priority)
      project.tasks.push(task)
    }
    else {
      console.log("That project doesn't seem to exist")
    }
  }
  getAllTasks() {
    return this.projects.flatMap(project => project.tasks)
  }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const domManager = new _dom__WEBPACK_IMPORTED_MODULE_0__["default"]()
domManager.renderAll()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0M7QUFDUjs7QUFFWDtBQUNmO0FBQ0E7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssTUFBTTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxNQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE1BQU07QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssTUFBTTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxNQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE1BQU07QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssTUFBTTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxNQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE1BQU07QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssTUFBTTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxNQUFNO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLE1BQU07QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlZMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1gwQjtBQUNNOztBQUVqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNWOztBQUVwQix1QkFBdUIsNENBQVU7QUFDakMsc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHsgXG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi8qIEJvZHkgKi9cbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBIZWFkZXIgKi9cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyNDAsIDI0Myk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGRhcmtibHVlO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLyogTWFpbiBDb250YWluZXIgKi9cbi5tYWluLWNvbnRhaW5lciB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLyogU2lkZWJhciAqL1xuLnNpZGViYXIge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LCAuc2lkZWJhciBmb3JtIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNpZGViYXIsIGZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5hZGQtcHJvamVjdC1idXR0b24ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJvamVjdDpob3ZlciwgLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDEzOSwgMC41NSk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBkYXJrYmx1ZTtcbn1cblxuLmFjdGl2ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAxMzksIDAuNjUpO1xufVxuXG4vKiBNYWluIEJvZHkgKi9cbi5wcm9qZWN0LWJvZHkge1xuICAgIGZsZXg6IDMuNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ucHJvamVjdC1ib2R5IGZvcm0ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG59XG5cbi5wcm9qZWN0LWJvZHkgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBjb2xvcjogcmdiKDI0NywgMjQ0LCAyNDQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnRhc2stZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi50YXNrLWRpdi10b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uY29tcGxldGlvbi1jaGVja2JveCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4uTG93IHtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIGdyZWVuO1xufVxuXG4uTWVkaXVtIHtcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIG9yYW5nZTtcbn1cblxuLkhpZ2gge1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgcmVkO1xufVxuXG4jdGFzay1kdWUtZGF0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbiN0YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbiNlZGl0LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuI2Jpbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5hZGQtdGFzay1idXR0b24ge1xuICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuI3RpdGxlLWlucHV0LCAjZGVzY3JpcHRpb24taW5wdXQsICNkYXRlLWlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgcGFkZGluZzogMXB4IDJweDtcbn1cblxuI3ByaW9yaXR5LXNlbGVjdCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgcGFkZGluZzogMnB4O1xufVxuXG4vKiBGb290ZXIgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCwyQkFBMkI7QUFDL0I7O0FBRUEsU0FBUztBQUNUO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQSxtQkFBbUI7QUFDbkI7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksT0FBTztJQUNQLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBLGNBQWM7QUFDZDtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUEsV0FBV1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHsgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyNDAsIDI0Myk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGRhcmtibHVlO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4vKiBNYWluIENvbnRhaW5lciAqL1xcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LCAuc2lkZWJhciBmb3JtIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnNpZGViYXIsIGZvcm0ge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciwgLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMTM5LCAwLjU1KTtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBkYXJrYmx1ZTtcXG59XFxuXFxuLmFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMTM5LCAwLjY1KTtcXG59XFxuXFxuLyogTWFpbiBCb2R5ICovXFxuLnByb2plY3QtYm9keSB7XFxuICAgIGZsZXg6IDMuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1ib2R5IGZvcm0ge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG59XFxuXFxuLnByb2plY3QtYm9keSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDI0NywgMjQ0LCAyNDQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4udGFzay1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi50YXNrLWRpdi10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb21wbGV0aW9uLWNoZWNrYm94IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbn1cXG5cXG4uTG93IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLk1lZGl1bSB7XFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgb3JhbmdlO1xcbn1cXG5cXG4uSGlnaCB7XFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgcmVkO1xcbn1cXG5cXG4jdGFzay1kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNlZGl0LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbiNiaW4taWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbiN0aXRsZS1pbnB1dCwgI2Rlc2NyaXB0aW9uLWlucHV0LCAjZGF0ZS1pbnB1dCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcXG4gICAgcGFkZGluZzogMXB4IDJweDtcXG59XFxuXFxuI3ByaW9yaXR5LXNlbGVjdCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi8qIEZvb3RlciAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb2xpc3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWN0aXZlUHJvamVjdCA9ICcnXG4gICAgdGhpcy50b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpXG4gIH1cblxuICBmaW5kQWN0aXZlUHJvamVjdEluZGV4ICgpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvTGlzdC5wcm9qZWN0cy5pbmRleE9mKHRoaXMuYWN0aXZlUHJvamVjdClcbiAgfVxuXG4gIHJlbmRlckFsbFRhc2tzVGFiKGhvbWVQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpIHtcbiAgICBjb25zdCB0YWJEaXYgPSB0aGlzLmNyZWF0ZUhvbWVUYXNrVGFiKCdBbGwgVGFza3MnKVxuXG4gICAgLy8gdGhpcy5oYW5kbGVQcm9qZWN0VGFiQ2xpY2sodGFiRGl2LCBwcm9qZWN0Qm9keSwgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9MaXN0LmdldEFsbFRhc2tzKCksIFwiQWxsIFRhc2tzXCIpXG4gICAgdGFiRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJUYXNrcyhwcm9qZWN0Qm9keSwgdGhpcy50b2RvTGlzdC5nZXRBbGxUYXNrcygpLCAnQWxsIFRhc2tzJylcbiAgICB9KVxuICAgIGhvbWVQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZCh0YWJEaXYpXG4gICAgdGhpcy5oaWdobGlnaHRMYXRlc3RQcm9qZWN0KHRhYkRpdilcbiAgICB0YWJEaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgfVxuICBcbiAgY3JlYXRlSG9tZVRhc2tUYWIobmFtZSkge1xuICAgIGNvbnN0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgIGNvbnN0IHRhYlBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRhYlBhcmFncmFwaC50ZXh0Q29udGVudCA9IG5hbWVcbiAgICB0YWJEaXYuYXBwZW5kQ2hpbGQodGFiUGFyYWdyYXBoKVxuICAgIHJldHVybiB0YWJEaXZcbiAgfVxuXG4gIHJlbmRlclByb2plY3RUYWJzKGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSkge1xuICAgIHRoaXMudG9kb0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgcHJvamVjdFBhcmFncmFwaC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZVxuICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgb24gcHJvamVjdFxuICAgICAgdGhpcy5oYW5kbGVQcm9qZWN0VGFiQ2xpY2socHJvamVjdERpdiwgcHJvamVjdEJvZHksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzLCBwcm9qZWN0Lm5hbWUpXG5cbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFBhcmFncmFwaClcbiAgICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVByb2plY3RUYWJDbGljayhwcm9qZWN0VGFiRGl2LCBwcm9qZWN0Qm9keSwgdGFza3MsIHByb2plY3ROYW1lKSB7XG4gICAgdGhpcy5oaWdobGlnaHRMYXRlc3RQcm9qZWN0KHByb2plY3RUYWJEaXYpXG4gICAgcHJvamVjdFRhYkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVGFza3MocHJvamVjdEJvZHksIHRhc2tzLCBwcm9qZWN0TmFtZSlcbiAgICAgIHRoaXMuYWN0aXZlUHJvamVjdCA9IHRoaXMudG9kb0xpc3QucHJvamVjdHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpXG4gICAgfSlcbiAgfVxuXG4gIGhpZ2hsaWdodExhdGVzdFByb2plY3QocHJvamVjdFRhYkRpdikge1xuICAgIHByb2plY3RUYWJEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxQcm9qZWN0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICAgIGFsbFByb2plY3RUYWJzLmZvckVhY2godGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSlcbiAgICAgIHByb2plY3RUYWJEaXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyVGFza3MocHJvamVjdEJvZHksIHRhc2tzLCBwcm9qZWN0TmFtZSkge1xuICAgIHByb2plY3RCb2R5LnRleHRDb250ZW50ID0gJydcbiAgICBjb25zdCBwcm9qZWN0TmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHByb2plY3ROYW1lVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZVxuICAgIHByb2plY3RCb2R5LmFwcGVuZENoaWxkKHByb2plY3ROYW1lVGl0bGUpXG4gICAgY29uc3Qgc29ydGVkVGFza3MgPSB0aGlzLnNvcnRUYXNrc0J5RGF0ZSh0YXNrcylcbiAgICBzb3J0ZWRUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHRhc2suY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdEJvZHkuYXBwZW5kQ2hpbGQodGFza0RpdilcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdicpXG4gICAgICAgIGNvbnN0IHRhc2tEaXZUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEaXZUb3ApXG4gICAgICAgIHRhc2tEaXZUb3AuY2xhc3NMaXN0LmFkZCgndGFzay1kaXYtdG9wJylcbiAgICAgICAgY29uc3QgY29tcGxldGlvbkNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICB0YXNrRGl2VG9wLmFwcGVuZENoaWxkKGNvbXBsZXRpb25DaGVja2JveClcbiAgICAgICAgY29tcGxldGlvbkNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnXG4gICAgICAgIGNvbXBsZXRpb25DaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0aW9uLWNoZWNrYm94JylcbiAgICAgICAgY29tcGxldGlvbkNoZWNrYm94LmlkID0gaW5kZXhcbiAgICAgICAgdGhpcy5oYW5kbGVDb21wbGV0aW9uQ2hlY2tib3hDbGljayhjb21wbGV0aW9uQ2hlY2tib3gsIHRhc2ssIHRhc2tEaXYpXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0YXNrRGl2VG9wLmFwcGVuZENoaWxkKHRhc2tUaXRsZVBhcmFncmFwaClcbiAgICAgICAgdGFza1RpdGxlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGFzay50aXRsZVxuICAgICAgICB0YXNrVGl0bGVQYXJhZ3JhcGguaWQgPSAndGFzay10aXRsZSdcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uUGFyYWdyYXBoKVxuICAgICAgICB0YXNrRGVzY3JpcHRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvblBhcmFncmFwaC5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uJ1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0YXNrRGl2VG9wLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlUGFyYWdyYXBoKVxuICAgICAgICB0YXNrRHVlRGF0ZVBhcmFncmFwaC5pZCA9ICd0YXNrLWR1ZS1kYXRlJ1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlLnJlcGxhY2UoLy0vZywgJ1xcLycpKVxuICAgICAgICBjb25zdCBvcHRpb25zID0geyBcbiAgICAgICAgICB3ZWVrZGF5OiAnc2hvcnQnLCBcbiAgICAgICAgICBtb250aDogJzItZGlnaXQnLCBcbiAgICAgICAgICBkYXk6ICcyLWRpZ2l0JywgXG4gICAgICAgICAgeWVhcjogJ251bWVyaWMnIFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWREdWVEYXRlID0gZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucykucmVwbGFjZSgnLCcsICcnKVxuICAgICAgICB0YXNrRHVlRGF0ZVBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdEdWU6ICcgKyBmb3JtYXR0ZWREdWVEYXRlXG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCh0YXNrLnByaW9yaXR5KVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHByb2plY3ROYW1lICE9PSBcIkFsbCBUYXNrc1wiKVxuICAgIHRoaXMuY3JlYXRlQWRkVGFza0J1dHRvbihwcm9qZWN0Qm9keSlcbiAgfVxuXG4gIHNvcnRUYXNrc0J5RGF0ZSh0YXNrQXJyYXkpIHtcbiAgICByZXR1cm4gdGFza0FycmF5LnNvcnQoKGEsIGIpID0+IGEuZHVlRGF0ZS5yZXBsYWNlKC8tL2csICcnKSAtIGIuZHVlRGF0ZS5yZXBsYWNlKC8tL2csICcnKSlcbiAgfVxuXG4gIGNyZWF0ZUFkZFByb2plY3RCdXR0b24oc2lkZWJhciwgYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idXR0b24nKVxuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKVxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUFkZFByb2plY3RGb3JtKGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSwgc2lkZWJhcilcbiAgICAgIGFkZFByb2plY3RCdXR0b24ucmVtb3ZlKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlQWRkUHJvamVjdEZvcm0oYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5LCBzaWRlYmFyKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSlcbiAgICBjb25zdCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYWRkUHJvamVjdElucHV0LnR5cGUgPSAndGV4dCdcbiAgICBhZGRQcm9qZWN0SW5wdXQuaWQgPSAncHJvamVjdE5hbWVJbnB1dCdcbiAgICBhZGRQcm9qZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlXG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdElucHV0KVxuICAgIGNvbnN0IGFkZFByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZFByb2plY3RTdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXG4gICAgYWRkUHJvamVjdFN1Ym1pdC50eXBlID0gJ3N1Ym1pdCdcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0U3VibWl0KVxuICAgIGFkZFByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgaWYgKGFkZFByb2plY3RJbnB1dC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuYXBwZW5kUHJvamVjdChhZGRQcm9qZWN0SW5wdXQudmFsdWUsIGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSlcbiAgICAgIGFkZFByb2plY3RGb3JtLnJlbW92ZSgpXG4gICAgICB0aGlzLmNyZWF0ZUFkZFByb2plY3RCdXR0b24oc2lkZWJhciwgYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBhcHBlbmRQcm9qZWN0KG5hbWUsIGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSkge1xuICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlUHJvamVjdChuYW1lKVxuICAgIHRoaXMucmVuZGVyTGF0ZXN0UHJvamVjdFRhYihhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpXG4gIH1cblxuICByZW5kZXJMYXRlc3RQcm9qZWN0VGFiKGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGxhc3RQcm9qZWN0SW5kZXggPSB0aGlzLnRvZG9MaXN0LnByb2plY3RzLmxlbmd0aCAtIDFcbiAgICBwcm9qZWN0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGhpcy50b2RvTGlzdC5wcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS5uYW1lXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0UGFyYWdyYXBoKVxuICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpXG4gICAgdGhpcy5oYW5kbGVQcm9qZWN0VGFiQ2xpY2socHJvamVjdERpdiwgcHJvamVjdEJvZHksIFxuICAgICAgdGhpcy50b2RvTGlzdC5wcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS50YXNrcywgXG4gICAgICB0aGlzLnRvZG9MaXN0LnByb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLm5hbWUpXG4gIH1cblxuICBjcmVhdGVBZGRUYXNrQnV0dG9uKHByb2plY3RCb2R5KSB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcHJvamVjdEJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbilcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJ1xuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnV0dG9uJylcbiAgICB0aGlzLmhhbmRsZUFkZFRhc2tCdXR0b25DbGljayhhZGRUYXNrQnV0dG9uLCBwcm9qZWN0Qm9keSlcbiAgfVxuXG4gIGhhbmRsZUFkZFRhc2tCdXR0b25DbGljayhhZGRUYXNrQnV0dG9uLCBwcm9qZWN0Qm9keSkge1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tGb3JtKHByb2plY3RCb2R5KVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVBZGRUYXNrRm9ybShwcm9qZWN0Qm9keSkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgbGFzdENoaWxkID0gcHJvamVjdEJvZHkubGFzdEVsZW1lbnRDaGlsZFxuICAgIHByb2plY3RCb2R5Lmluc2VydEJlZm9yZShhZGRUYXNrRm9ybSwgbGFzdENoaWxkKVxuXG4gICAgY29uc3QgYWRkVGFza1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgYWRkVGFza1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUtaW5wdXQnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tUaXRsZUxhYmVsKVxuICAgIGFkZFRhc2tUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCJcbiAgICBjb25zdCBhZGRUYXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrVGl0bGVJbnB1dClcbiAgICBhZGRUYXNrVGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgYWRkVGFza1RpdGxlSW5wdXQuaWQgPSAndGl0bGUtaW5wdXQnXG4gICAgYWRkVGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnV2hhdCB0byBkbz8nXG4gICAgYWRkVGFza1RpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlXG5cbiAgICBjb25zdCBhZGRUYXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBhZGRUYXNrRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbi1pbnB1dCcpXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0Rlc2NyaXB0aW9uTGFiZWwpXG4gICAgYWRkVGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIlxuICAgIGNvbnN0IGFkZFRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tEZXNjcmlwdGlvbklucHV0KVxuICAgIGFkZFRhc2tEZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uLWlucHV0J1xuICAgIGFkZFRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0FueSBleHRyYSBkZXRhaWxzPydcblxuICAgIGNvbnN0IGFkZFRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgYWRkVGFza0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlLWlucHV0JylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrRHVlRGF0ZUxhYmVsKVxuICAgIGFkZFRhc2tEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICdcbiAgICBjb25zdCBhZGRUYXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tEdWVEYXRlSW5wdXQpXG4gICAgYWRkVGFza0R1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnXG4gICAgYWRkVGFza0R1ZURhdGVJbnB1dC5pZCA9ICdkYXRlLWlucHV0J1xuICAgIGFkZFRhc2tEdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlXG5cbiAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBhZGRUYXNrUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1zZWxlY3QnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eUxhYmVsKVxuICAgIGFkZFRhc2tQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5J1xuICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgYWRkVGFza1ByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5LXNlbGVjdCdcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlTZWxlY3QpXG4gICAgY29uc3QgYWRkUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGFkZFRhc2tQcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChhZGRQcmlvcml0eUxvdylcbiAgICBhZGRQcmlvcml0eUxvdy52YWx1ZSA9ICdMb3cnXG4gICAgYWRkUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSAnTG93J1xuICAgIGNvbnN0IGFkZFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBhZGRUYXNrUHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoYWRkUHJpb3JpdHlNZWRpdW0pXG4gICAgYWRkUHJpb3JpdHlNZWRpdW0udmFsdWUgPSAnTWVkaXVtJ1xuICAgIGFkZFByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSdcbiAgICBjb25zdCBhZGRQcmlvcml0eWhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGFkZFRhc2tQcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChhZGRQcmlvcml0eWhpZ2gpXG4gICAgYWRkUHJpb3JpdHloaWdoLnZhbHVlID0gJ0hpZ2gnXG4gICAgYWRkUHJpb3JpdHloaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnXG5cbiAgICBjb25zdCBhZGRUYXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrU3VibWl0QnV0dG9uKVxuICAgIGFkZFRhc2tTdWJtaXRCdXR0b24udHlwZSA9ICdTdWJtaXQnXG4gICAgYWRkVGFza1N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXG5cbiAgICBhZGRUYXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChhZGRUYXNrVGl0bGVJbnB1dC52YWx1ZS50cmltKCkgIT09ICcnICYmIGFkZFRhc2tEdWVEYXRlSW5wdXQudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLmFwcGVuZFRhc2soYWRkVGFza1RpdGxlSW5wdXQudmFsdWUsIGFkZFRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICAgIGFkZFRhc2tEdWVEYXRlSW5wdXQudmFsdWUsIGFkZFRhc2tQcmlvcml0eVNlbGVjdC52YWx1ZSwgXG4gICAgICAgICAgICAgICAgICBwcm9qZWN0Qm9keSlcblxuICAgICAgICBhZGRUYXNrRm9ybS5yZW1vdmUoKVxuICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFwcGVuZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgcHJvamVjdEJvZHkpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2sodGhpcy5maW5kQWN0aXZlUHJvamVjdEluZGV4KCksIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IGR1ZWRhdGUsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHlcbiAgICB9KVxuICAgIHRoaXMucmVuZGVyVGFza3MocHJvamVjdEJvZHksIHRoaXMuYWN0aXZlUHJvamVjdC50YXNrcywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdC5uYW1lKVxuICB9XG5cbiAgaGFuZGxlQ29tcGxldGlvbkNoZWNrYm94Q2xpY2soY29tcGxldGlvbkNoZWNrYm94LCB0YXNrLCB0YXNrRGl2KSB7XG4gICAgY29tcGxldGlvbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWNvbXBsZXRpb25DaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgdW5jaGVja2luZyB0aGUgY2hlY2tib3hcbiAgICAgIH1cbiAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZVxuICAgICAgdGFza0Rpdi5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMnMnO1xuICAgICAgdGFza0Rpdi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfSwgMjAyMCk7XG4gICAgfSlcbiAgfVxuXG4vLyBSZW5kZXJpbmcgZnVuY3Rpb25cbiAgcmVuZGVyQWxsKCkge1xuICAgIC8vIENyZWF0aW5nIHRlbXBvcmFyeSB0ZXN0IHByb2plY3RzL2NsYXNzZXNcbiAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVByb2plY3QoJ1Byb2plY3QgMScpXG4gICAgdGhpcy50b2RvTGlzdC5jcmVhdGVQcm9qZWN0KCdQcm9qZWN0IDInKVxuICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlVGFzaygwLCB7XG4gICAgICB0aXRsZTogXCJUaGlzIGlzIG15IHRhc2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB2ZXJ5IGRldGFpbGVkIGFuZCB3ZWxsIHRob3VnaHQgb3V0IGRlc2NyaXB0aW9uIG9mIG15IHRhc2sgaWYgaSB3YW50IHRvIGluY2x1ZGUgaXRcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyNC0wMy0xMFwiLCAvLyBNYWtlIHN1cmUgdG8gcGFzcyBhIHZhbGlkIGRhdGUgZm9ybWF0XG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIlxuICAgIH0pO1xuICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlVGFzaygwLCB7XG4gICAgICB0aXRsZTogXCJUaGlzIGlzIG15IHRhc2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB2ZXJ5IGRldGFpbGVkIGFuZCB3ZWxsIHRob3VnaHQgb3V0IGRlc2NyaXB0aW9uIG9mIG15IHRhc2sgaWYgaSB3YW50IHRvIGluY2x1ZGUgaXRcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyNC0wMy0xMFwiLCAvLyBNYWtlIHN1cmUgdG8gcGFzcyBhIHZhbGlkIGRhdGUgZm9ybWF0XG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIlxuICAgIH0pOyAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2soMCwge1xuICAgICAgdGl0bGU6IFwiVGhpcyBpcyBteSB0YXNrXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgdmVyeSBkZXRhaWxlZCBhbmQgd2VsbCB0aG91Z2h0IG91dCBkZXNjcmlwdGlvbiBvZiBteSB0YXNrIGlmIGkgd2FudCB0byBpbmNsdWRlIGl0XCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjQtMDMtMTBcIiwgLy8gTWFrZSBzdXJlIHRvIHBhc3MgYSB2YWxpZCBkYXRlIGZvcm1hdFxuICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCJcbiAgICB9KTsgICAgdGhpcy50b2RvTGlzdC5jcmVhdGVUYXNrKDAsIHtcbiAgICAgIHRpdGxlOiBcIlRoaXMgaXMgbXkgdGFza1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHZlcnkgZGV0YWlsZWQgYW5kIHdlbGwgdGhvdWdodCBvdXQgZGVzY3JpcHRpb24gb2YgbXkgdGFzayBpZiBpIHdhbnQgdG8gaW5jbHVkZSBpdFwiLFxuICAgICAgZHVlRGF0ZTogXCIyMDI0LTAzLTEwXCIsIC8vIE1ha2Ugc3VyZSB0byBwYXNzIGEgdmFsaWQgZGF0ZSBmb3JtYXRcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiXG4gICAgfSk7ICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlVGFzaygwLCB7XG4gICAgICB0aXRsZTogXCJUaGlzIGlzIG15IHRhc2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB2ZXJ5IGRldGFpbGVkIGFuZCB3ZWxsIHRob3VnaHQgb3V0IGRlc2NyaXB0aW9uIG9mIG15IHRhc2sgaWYgaSB3YW50IHRvIGluY2x1ZGUgaXRcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyNC0wMy0xMFwiLCAvLyBNYWtlIHN1cmUgdG8gcGFzcyBhIHZhbGlkIGRhdGUgZm9ybWF0XG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIlxuICAgIH0pOyAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2soMCwge1xuICAgICAgdGl0bGU6IFwiVGhpcyBpcyBteSB0YXNrXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgdmVyeSBkZXRhaWxlZCBhbmQgd2VsbCB0aG91Z2h0IG91dCBkZXNjcmlwdGlvbiBvZiBteSB0YXNrIGlmIGkgd2FudCB0byBpbmNsdWRlIGl0XCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjQtMDMtMTBcIiwgLy8gTWFrZSBzdXJlIHRvIHBhc3MgYSB2YWxpZCBkYXRlIGZvcm1hdFxuICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCJcbiAgICB9KTsgICAgdGhpcy50b2RvTGlzdC5jcmVhdGVUYXNrKDAsIHtcbiAgICAgIHRpdGxlOiBcIlRoaXMgaXMgbXkgdGFza1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHZlcnkgZGV0YWlsZWQgYW5kIHdlbGwgdGhvdWdodCBvdXQgZGVzY3JpcHRpb24gb2YgbXkgdGFzayBpZiBpIHdhbnQgdG8gaW5jbHVkZSBpdFwiLFxuICAgICAgZHVlRGF0ZTogXCIyMDI0LTAzLTEwXCIsIC8vIE1ha2Ugc3VyZSB0byBwYXNzIGEgdmFsaWQgZGF0ZSBmb3JtYXRcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiXG4gICAgfSk7ICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlVGFzaygwLCB7XG4gICAgICB0aXRsZTogXCJUaGlzIGlzIG15IHRhc2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB2ZXJ5IGRldGFpbGVkIGFuZCB3ZWxsIHRob3VnaHQgb3V0IGRlc2NyaXB0aW9uIG9mIG15IHRhc2sgaWYgaSB3YW50IHRvIGluY2x1ZGUgaXRcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyNC0wMy0xMFwiLCAvLyBNYWtlIHN1cmUgdG8gcGFzcyBhIHZhbGlkIGRhdGUgZm9ybWF0XG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIlxuICAgIH0pOyAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2soMCwge1xuICAgICAgdGl0bGU6IFwiVGhpcyBpcyBteSB0YXNrXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgdmVyeSBkZXRhaWxlZCBhbmQgd2VsbCB0aG91Z2h0IG91dCBkZXNjcmlwdGlvbiBvZiBteSB0YXNrIGlmIGkgd2FudCB0byBpbmNsdWRlIGl0XCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjQtMDMtMTBcIiwgLy8gTWFrZSBzdXJlIHRvIHBhc3MgYSB2YWxpZCBkYXRlIGZvcm1hdFxuICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCJcbiAgICB9KTsgICAgdGhpcy50b2RvTGlzdC5jcmVhdGVUYXNrKDAsIHtcbiAgICAgIHRpdGxlOiBcIlRoaXMgaXMgbXkgdGFza1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHZlcnkgZGV0YWlsZWQgYW5kIHdlbGwgdGhvdWdodCBvdXQgZGVzY3JpcHRpb24gb2YgbXkgdGFzayBpZiBpIHdhbnQgdG8gaW5jbHVkZSBpdFwiLFxuICAgICAgZHVlRGF0ZTogXCIyMDI0LTAzLTEwXCIsIC8vIE1ha2Ugc3VyZSB0byBwYXNzIGEgdmFsaWQgZGF0ZSBmb3JtYXRcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiXG4gICAgfSk7ICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlVGFzaygwLCB7XG4gICAgICB0aXRsZTogXCJUaGlzIGlzIG15IHRhc2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB2ZXJ5IGRldGFpbGVkIGFuZCB3ZWxsIHRob3VnaHQgb3V0IGRlc2NyaXB0aW9uIG9mIG15IHRhc2sgaWYgaSB3YW50IHRvIGluY2x1ZGUgaXRcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyNC0wMy0xMFwiLCAvLyBNYWtlIHN1cmUgdG8gcGFzcyBhIHZhbGlkIGRhdGUgZm9ybWF0XG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIlxuICAgIH0pOyAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2soMCwge1xuICAgICAgdGl0bGU6IFwiVGhpcyBpcyBteSB0YXNrXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgdmVyeSBkZXRhaWxlZCBhbmQgd2VsbCB0aG91Z2h0IG91dCBkZXNjcmlwdGlvbiBvZiBteSB0YXNrIGlmIGkgd2FudCB0byBpbmNsdWRlIGl0XCIsXG4gICAgICBkdWVEYXRlOiBcIjIwMjQtMDMtMTBcIiwgLy8gTWFrZSBzdXJlIHRvIHBhc3MgYSB2YWxpZCBkYXRlIGZvcm1hdFxuICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCJcbiAgICB9KTsgICAgdGhpcy50b2RvTGlzdC5jcmVhdGVUYXNrKDAsIHtcbiAgICAgIHRpdGxlOiBcIlRoaXMgaXMgbXkgdGFza1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHZlcnkgZGV0YWlsZWQgYW5kIHdlbGwgdGhvdWdodCBvdXQgZGVzY3JpcHRpb24gb2YgbXkgdGFzayBpZiBpIHdhbnQgdG8gaW5jbHVkZSBpdFwiLFxuICAgICAgZHVlRGF0ZTogXCIyMDI0LTAzLTEwXCIsIC8vIE1ha2Ugc3VyZSB0byBwYXNzIGEgdmFsaWQgZGF0ZSBmb3JtYXRcbiAgICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiXG4gICAgfSk7ICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlVGFzaygwLCB7XG4gICAgICB0aXRsZTogXCJUaGlzIGlzIG15IHRhc2tcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSB2ZXJ5IGRldGFpbGVkIGFuZCB3ZWxsIHRob3VnaHQgb3V0IGRlc2NyaXB0aW9uIG9mIG15IHRhc2sgaWYgaSB3YW50IHRvIGluY2x1ZGUgaXRcIixcbiAgICAgIGR1ZURhdGU6IFwiMjAyNC0wMy0xMFwiLCAvLyBNYWtlIHN1cmUgdG8gcGFzcyBhIHZhbGlkIGRhdGUgZm9ybWF0XG4gICAgICBwcmlvcml0eTogXCJNZWRpdW1cIlxuICAgIH0pO1xuICAgIFxuICAgIC8vIENyZWF0aW5nIGFuZCBzb3J0aW5nIHRoZSBkaXZzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpXG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdoZWFkZXItY29udGFpbmVyJ1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFpbi1jb250YWluZXInXG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKVxuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZWJhci5jbGFzc05hbWUgPSAnc2lkZWJhcidcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpXG5cbiAgICBjb25zdCBob21lUHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaG9tZVByb2plY3RzRGl2KVxuXG4gICAgY29uc3QgYWxsUHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWxsUHJvamVjdHNEaXYpXG5cbiAgICBjb25zdCBwcm9qZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdEJvZHkuY2xhc3NOYW1lID0gJ3Byb2plY3QtYm9keSdcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCb2R5KVxuXG4gICAgLy8gSGVhZGVyIENvbnRhaW5lclxuICAgIGNvbnN0IGhlYWRlclBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoZWFkZXJQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTXkgQXdlc29tZSBUby1EbyBMaXN0IEFwcCdcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUGFyYWdyYXBoKVxuXG4gICAgLy8gRGlzcGxheXMgdGhlIHNwZWNpYWwgc2lkZWJhciBmaWx0ZXJzXG4gICAgLy8gQWxsIHRhc2tzXG4gICAgdGhpcy5yZW5kZXJBbGxUYXNrc1RhYihob21lUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuICAgIHRoaXMucmVuZGVyVGFza3MocHJvamVjdEJvZHksIHRoaXMudG9kb0xpc3QuZ2V0QWxsVGFza3MoKSwgXCJBbGwgVGFza3NcIilcblxuICAgIC8vIERpc3BsYXlpbmcgdGhlIHByb2plY3RzIGluIHRoZSBzaWRlYmFyXG4gICAgdGhpcy5yZW5kZXJQcm9qZWN0VGFicyhhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpXG5cbiAgICAvLyBBZGQgUHJvamVjdCBCdXR0b25cbiAgICB0aGlzLmNyZWF0ZUFkZFByb2plY3RCdXR0b24oc2lkZWJhciwgYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuICB9XG59IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRhc2tzID0gW11cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG4gIHNldENvbXBsZXRlZCgpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWVcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cbiAgfVxuICBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcbiAgfVxuICBjcmVhdGVUYXNrKHByb2plY3RJbmRleCwgdGFza0RldGFpbHMpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrRGV0YWlscy50aXRsZSwgdGFza0RldGFpbHMuZGVzY3JpcHRpb24sIHRhc2tEZXRhaWxzLmR1ZURhdGUsIHRhc2tEZXRhaWxzLnByaW9yaXR5KVxuICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJUaGF0IHByb2plY3QgZG9lc24ndCBzZWVtIHRvIGV4aXN0XCIpXG4gICAgfVxuICB9XG4gIGdldEFsbFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZsYXRNYXAocHJvamVjdCA9PiBwcm9qZWN0LnRhc2tzKVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IERvbU1hbmFnZXIgZnJvbSAnLi9kb20nXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jb25zdCBkb21NYW5hZ2VyID0gbmV3IERvbU1hbmFnZXIoKVxuZG9tTWFuYWdlci5yZW5kZXJBbGwoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==