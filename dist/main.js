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
    height: 100vh;
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
    display: flex;
    height: 100%;
}

/* Sidebar */
.sidebar {
    flex: 1;
    /* display: flex;
    flex-direction: column; */
    background-color: white;
}

.project, .add-project-button, .sidebar form {
    margin: 20px;
    padding: 5px;
    border-radius: 7px;
}

.sidebar, form {
    width: 50%;
}

.add-project-button {
    margin: 0 20px;
    width: calc(100% - 40px);
    text-align: left;
    background-color: white;
    border: none;
}

.project:hover, .add-project-button:hover {
    background-color: rgb(231, 231, 231);
}

.active {
    background-color: lightskyblue;
}

.active:hover {
    background-color: rgb(117, 155, 179);
}

/* Main Body */
.project-body {
    flex: 3.5;
    background-color: rgb(231, 231, 231);
    padding: 10px;
    padding-top: 5px;
}

.project-body div {
    margin: 20px;
    border: 1px solid gray;
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

/* Footer */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,kBAAkB;IAClB,2DAA2D;IAC3D,2BAA2B;AAC/B;;AAEA,SAAS;AACT;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;;AAEA,WAAW;AACX;IACI,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,YAAY;AACZ;IACI,OAAO;IACP;6BACyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;IACd,wBAAwB;IACxB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,oCAAoC;AACxC;;AAEA,cAAc;AACd;IACI,SAAS;IACT,oCAAoC;IACpC,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA,WAAW","sourcesContent":["* { \n    margin: 0;\n    font-size: 1.25rem;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    /* border: 1px solid red; */\n}\n\n/* Body */\nbody {\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\n.header-container {\n    background-color: rgb(238, 240, 243);\n    text-align: center;\n    padding: 10px;\n    border-bottom: 2px solid darkblue;\n}\n\n.header-container h1 {\n    margin: 0;\n    font-size: 2rem;\n}\n\n/* Main Container */\n.main-container {\n    display: flex;\n    height: 100%;\n}\n\n/* Sidebar */\n.sidebar {\n    flex: 1;\n    /* display: flex;\n    flex-direction: column; */\n    background-color: white;\n}\n\n.project, .add-project-button, .sidebar form {\n    margin: 20px;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n.sidebar, form {\n    width: 50%;\n}\n\n.add-project-button {\n    margin: 0 20px;\n    width: calc(100% - 40px);\n    text-align: left;\n    background-color: white;\n    border: none;\n}\n\n.project:hover, .add-project-button:hover {\n    background-color: rgb(231, 231, 231);\n}\n\n.active {\n    background-color: lightskyblue;\n}\n\n.active:hover {\n    background-color: rgb(117, 155, 179);\n}\n\n/* Main Body */\n.project-body {\n    flex: 3.5;\n    background-color: rgb(231, 231, 231);\n    padding: 10px;\n    padding-top: 5px;\n}\n\n.project-body div {\n    margin: 20px;\n    border: 1px solid gray;\n}\n\n.project-body form {\n    margin: 20px;\n    background-color: white;\n    padding: 10px;\n    border-radius: 7px;\n    width: calc(100% - 60px);\n}\n\n.project-body h1 {\n    font-size: 1.75rem;\n    padding: 20px;\n    margin: 20px;\n    color: rgb(247, 244, 244);\n    background-color: darkblue;\n    border-radius: 7px;\n}\n\n.add-task-button {\n    margin: 10px 20px;\n    padding: 0px;\n}\n\n#title-input, #description-input, #date-input {\n    width: calc(100% - 10px);\n    padding: 1px 2px;\n}\n\n#priority-select {\n    width: calc(100%);\n    padding: 2px;\n}\n\n/* Footer */"],"sourceRoot":""}]);
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
      console.log(this.activeProject)
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
    console.log('rendering!')
    projectBody.textContent = ''
    const projectNameTitle = document.createElement('h1')
    projectNameTitle.textContent = projectName
    projectBody.appendChild(projectNameTitle)
    tasks.forEach((task) => {
      if (task.completed === false) {
        const taskDiv = document.createElement('div')
        projectBody.appendChild(taskDiv)
        const completionCheckbox = document.createElement('input')
        taskDiv.appendChild(completionCheckbox)
        completionCheckbox.type = 'checkbox'
        completionCheckbox.id = 'completion-checkbox'
        this.handleCompletionCheckboxClick(completionCheckbox, task, taskDiv)
        const taskTitleParagraph = document.createElement('p')
        taskDiv.appendChild(taskTitleParagraph)
        taskTitleParagraph.textContent = task.title
        const taskDescriptionParagraph = document.createElement('p')
        taskDiv.appendChild(taskDescriptionParagraph)
        taskDescriptionParagraph.textContent = task.description
        const taskDueDateParagraph = document.createElement('p')
        taskDiv.appendChild(taskDueDateParagraph)
        const dueDate = new Date(task.dueDate.replace(/-/g, '\/'))
        const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }
        const formattedDueDate = dueDate.toLocaleDateString('en-US', options)
        taskDueDateParagraph.textContent = formattedDueDate
        const taskPriorityParagraph = document.createElement('p')
        taskDiv.appendChild(taskPriorityParagraph)
        taskPriorityParagraph.textContent = task.priority
      }
    })
    if (projectName !== "All Tasks")
    this.createAddTaskButton(projectBody)
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
    addProjectForm.appendChild(addProjectInput)
    const addProjectSubmit = document.createElement('button')
    addProjectSubmit.textContent = 'Add Project'
    addProjectSubmit.type = 'submit'
    addProjectForm.appendChild(addProjectSubmit)
    addProjectSubmit.addEventListener('click', (e) => {
      e.preventDefault()
      this.appendProject(addProjectInput.value, allProjectsDiv, projectBody)
      addProjectForm.remove()
      this.createAddProjectButton(sidebar, allProjectsDiv, projectBody)
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
      e.preventDefault()
      this.appendTask(addTaskTitleInput.value, addTaskDescriptionInput.value, 
                addTaskDueDateInput.value, addTaskPrioritySelect.value, 
                projectBody)

      addTaskForm.remove()
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
      taskDiv.style.transition = 'opacity 3s';
      taskDiv.style.opacity = '0';
      setTimeout(() => {
        taskDiv.style.display = 'none'
      }, 3050);
    })
  }

// Rendering function
  renderAll() {
    // Creating temporary test projects/classes
    this.todoList.createProject('Project 1')
    this.todoList.createProject('Project 2')
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pUMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1gwQjtBQUNNOztBQUVqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNWOztBQUVwQix1QkFBdUIsNENBQVU7QUFDakMsc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHsgXG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi8qIEJvZHkgKi9cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogSGVhZGVyICovXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjQwLCAyNDMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrYmx1ZTtcbn1cblxuLmhlYWRlci1jb250YWluZXIgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi8qIE1haW4gQ29udGFpbmVyICovXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTaWRlYmFyICovXG4uc2lkZWJhciB7XG4gICAgZmxleDogMTtcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LCAuYWRkLXByb2plY3QtYnV0dG9uLCAuc2lkZWJhciBmb3JtIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNpZGViYXIsIGZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5hZGQtcHJvamVjdC1idXR0b24ge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2plY3Q6aG92ZXIsIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xufVxuXG4uYWN0aXZlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxNTUsIDE3OSk7XG59XG5cbi8qIE1haW4gQm9keSAqL1xuLnByb2plY3QtYm9keSB7XG4gICAgZmxleDogMy41O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5wcm9qZWN0LWJvZHkgZGl2IHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cblxuLnByb2plY3QtYm9keSBmb3JtIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xufVxuXG4ucHJvamVjdC1ib2R5IGgxIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgY29sb3I6IHJnYigyNDcsIDI0NCwgMjQ0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5hZGQtdGFzay1idXR0b24ge1xuICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuI3RpdGxlLWlucHV0LCAjZGVzY3JpcHRpb24taW5wdXQsICNkYXRlLWlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgcGFkZGluZzogMXB4IDJweDtcbn1cblxuI3ByaW9yaXR5LXNlbGVjdCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgcGFkZGluZzogMnB4O1xufVxuXG4vKiBGb290ZXIgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCwyQkFBMkI7QUFDL0I7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBLFdBQVc7QUFDWDtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBLFlBQVk7QUFDWjtJQUNJLE9BQU87SUFDUDs2QkFDeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUEsV0FBV1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHsgXFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4vKiBCb2R5ICovXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyNDAsIDI0Myk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGRhcmtibHVlO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4vKiBNYWluIENvbnRhaW5lciAqL1xcbi5tYWluLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5zaWRlYmFyIHtcXG4gICAgZmxleDogMTtcXG4gICAgLyogZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LCAuYWRkLXByb2plY3QtYnV0dG9uLCAuc2lkZWJhciBmb3JtIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLnNpZGViYXIsIGZvcm0ge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIDIwcHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIsIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbi5hY3RpdmU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE3LCAxNTUsIDE3OSk7XFxufVxcblxcbi8qIE1haW4gQm9keSAqL1xcbi5wcm9qZWN0LWJvZHkge1xcbiAgICBmbGV4OiAzLjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLnByb2plY3QtYm9keSBkaXYge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5wcm9qZWN0LWJvZHkgZm9ybSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbn1cXG5cXG4ucHJvamVjdC1ib2R5IGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjQ3LCAyNDQsIDI0NCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgICBtYXJnaW46IDEwcHggMjBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4jdGl0bGUtaW5wdXQsICNkZXNjcmlwdGlvbi1pbnB1dCwgI2RhdGUtaW5wdXQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XFxuICAgIHBhZGRpbmc6IDFweCAycHg7XFxufVxcblxcbiNwcmlvcml0eS1zZWxlY3Qge1xcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9saXN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFjdGl2ZVByb2plY3QgPSAnJ1xuICAgIHRoaXMudG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKVxuICB9XG5cbiAgZmluZEFjdGl2ZVByb2plY3RJbmRleCAoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0xpc3QucHJvamVjdHMuaW5kZXhPZih0aGlzLmFjdGl2ZVByb2plY3QpXG4gIH1cblxuICByZW5kZXJBbGxUYXNrc1RhYihob21lUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KSB7XG4gICAgY29uc3QgdGFiRGl2ID0gdGhpcy5jcmVhdGVIb21lVGFza1RhYignQWxsIFRhc2tzJylcblxuICAgIC8vIHRoaXMuaGFuZGxlUHJvamVjdFRhYkNsaWNrKHRhYkRpdiwgcHJvamVjdEJvZHksIFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5nZXRBbGxUYXNrcygpLCBcIkFsbCBUYXNrc1wiKVxuICAgIHRhYkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVGFza3MocHJvamVjdEJvZHksIHRoaXMudG9kb0xpc3QuZ2V0QWxsVGFza3MoKSwgJ0FsbCBUYXNrcycpXG4gICAgfSlcbiAgICBob21lUHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQodGFiRGl2KVxuICAgIHRoaXMuaGlnaGxpZ2h0TGF0ZXN0UHJvamVjdCh0YWJEaXYpXG4gICAgdGFiRGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIH1cbiAgXG4gIGNyZWF0ZUhvbWVUYXNrVGFiKG5hbWUpIHtcbiAgICBjb25zdCB0YWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICBjb25zdCB0YWJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0YWJQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBuYW1lXG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKHRhYlBhcmFncmFwaClcbiAgICByZXR1cm4gdGFiRGl2XG4gIH1cblxuICByZW5kZXJQcm9qZWN0VGFicyhhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpIHtcbiAgICB0aGlzLnRvZG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICAgIGNvbnN0IHByb2plY3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHByb2plY3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcbiAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIG9uIHByb2plY3RcbiAgICAgIHRoaXMuaGFuZGxlUHJvamVjdFRhYkNsaWNrKHByb2plY3REaXYsIHByb2plY3RCb2R5LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcywgcHJvamVjdC5uYW1lKVxuXG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RQYXJhZ3JhcGgpXG4gICAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVQcm9qZWN0VGFiQ2xpY2socHJvamVjdFRhYkRpdiwgcHJvamVjdEJvZHksIHRhc2tzLCBwcm9qZWN0TmFtZSkge1xuICAgIHRoaXMuaGlnaGxpZ2h0TGF0ZXN0UHJvamVjdChwcm9qZWN0VGFiRGl2KVxuICAgIHByb2plY3RUYWJEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRhc2tzKHByb2plY3RCb2R5LCB0YXNrcywgcHJvamVjdE5hbWUpXG4gICAgICB0aGlzLmFjdGl2ZVByb2plY3QgPSB0aGlzLnRvZG9MaXN0LnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKVxuICAgICAgY29uc29sZS5sb2codGhpcy5hY3RpdmVQcm9qZWN0KVxuICAgIH0pXG4gIH1cblxuICBoaWdobGlnaHRMYXRlc3RQcm9qZWN0KHByb2plY3RUYWJEaXYpIHtcbiAgICBwcm9qZWN0VGFiRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsUHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXG4gICAgICBhbGxQcm9qZWN0VGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpXG4gICAgICBwcm9qZWN0VGFiRGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclRhc2tzKHByb2plY3RCb2R5LCB0YXNrcywgcHJvamVjdE5hbWUpIHtcbiAgICBjb25zb2xlLmxvZygncmVuZGVyaW5nIScpXG4gICAgcHJvamVjdEJvZHkudGV4dENvbnRlbnQgPSAnJ1xuICAgIGNvbnN0IHByb2plY3ROYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgcHJvamVjdE5hbWVUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG4gICAgcHJvamVjdEJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVUaXRsZSlcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0Qm9keS5hcHBlbmRDaGlsZCh0YXNrRGl2KVxuICAgICAgICBjb25zdCBjb21wbGV0aW9uQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGlvbkNoZWNrYm94KVxuICAgICAgICBjb21wbGV0aW9uQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgY29tcGxldGlvbkNoZWNrYm94LmlkID0gJ2NvbXBsZXRpb24tY2hlY2tib3gnXG4gICAgICAgIHRoaXMuaGFuZGxlQ29tcGxldGlvbkNoZWNrYm94Q2xpY2soY29tcGxldGlvbkNoZWNrYm94LCB0YXNrLCB0YXNrRGl2KVxuICAgICAgICBjb25zdCB0YXNrVGl0bGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrVGl0bGVQYXJhZ3JhcGgpXG4gICAgICAgIHRhc2tUaXRsZVBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGVcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uUGFyYWdyYXBoKVxuICAgICAgICB0YXNrRGVzY3JpcHRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVQYXJhZ3JhcGgpXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUucmVwbGFjZSgvLS9nLCAnXFwvJykpXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycgfVxuICAgICAgICBjb25zdCBmb3JtYXR0ZWREdWVEYXRlID0gZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucylcbiAgICAgICAgdGFza0R1ZURhdGVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWREdWVEYXRlXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eVBhcmFncmFwaClcbiAgICAgICAgdGFza1ByaW9yaXR5UGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHByb2plY3ROYW1lICE9PSBcIkFsbCBUYXNrc1wiKVxuICAgIHRoaXMuY3JlYXRlQWRkVGFza0J1dHRvbihwcm9qZWN0Qm9keSlcbiAgfVxuXG4gIGNyZWF0ZUFkZFByb2plY3RCdXR0b24oc2lkZWJhciwgYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idXR0b24nKVxuICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKVxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUFkZFByb2plY3RGb3JtKGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSwgc2lkZWJhcilcbiAgICAgIGFkZFByb2plY3RCdXR0b24ucmVtb3ZlKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlQWRkUHJvamVjdEZvcm0oYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5LCBzaWRlYmFyKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSlcbiAgICBjb25zdCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYWRkUHJvamVjdElucHV0LnR5cGUgPSAndGV4dCdcbiAgICBhZGRQcm9qZWN0SW5wdXQuaWQgPSAncHJvamVjdE5hbWVJbnB1dCdcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SW5wdXQpXG4gICAgY29uc3QgYWRkUHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdFN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCdcbiAgICBhZGRQcm9qZWN0U3VibWl0LnR5cGUgPSAnc3VibWl0J1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RTdWJtaXQpXG4gICAgYWRkUHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuYXBwZW5kUHJvamVjdChhZGRQcm9qZWN0SW5wdXQudmFsdWUsIGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSlcbiAgICAgIGFkZFByb2plY3RGb3JtLnJlbW92ZSgpXG4gICAgICB0aGlzLmNyZWF0ZUFkZFByb2plY3RCdXR0b24oc2lkZWJhciwgYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuICAgIH0pXG4gIH1cblxuICBhcHBlbmRQcm9qZWN0KG5hbWUsIGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSkge1xuICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlUHJvamVjdChuYW1lKVxuICAgIHRoaXMucmVuZGVyTGF0ZXN0UHJvamVjdFRhYihhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpXG4gIH1cblxuICByZW5kZXJMYXRlc3RQcm9qZWN0VGFiKGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSkge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IGxhc3RQcm9qZWN0SW5kZXggPSB0aGlzLnRvZG9MaXN0LnByb2plY3RzLmxlbmd0aCAtIDFcbiAgICBwcm9qZWN0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGhpcy50b2RvTGlzdC5wcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS5uYW1lXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0UGFyYWdyYXBoKVxuICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpXG4gICAgdGhpcy5oYW5kbGVQcm9qZWN0VGFiQ2xpY2socHJvamVjdERpdiwgcHJvamVjdEJvZHksIFxuICAgICAgdGhpcy50b2RvTGlzdC5wcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS50YXNrcywgXG4gICAgICB0aGlzLnRvZG9MaXN0LnByb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLm5hbWUpXG4gIH1cblxuICBjcmVhdGVBZGRUYXNrQnV0dG9uKHByb2plY3RCb2R5KSB7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcHJvamVjdEJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbilcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJ1xuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnV0dG9uJylcbiAgICB0aGlzLmhhbmRsZUFkZFRhc2tCdXR0b25DbGljayhhZGRUYXNrQnV0dG9uLCBwcm9qZWN0Qm9keSlcbiAgfVxuXG4gIGhhbmRsZUFkZFRhc2tCdXR0b25DbGljayhhZGRUYXNrQnV0dG9uLCBwcm9qZWN0Qm9keSkge1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUFkZFRhc2tGb3JtKHByb2plY3RCb2R5KVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVBZGRUYXNrRm9ybShwcm9qZWN0Qm9keSkge1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgbGFzdENoaWxkID0gcHJvamVjdEJvZHkubGFzdEVsZW1lbnRDaGlsZFxuICAgIHByb2plY3RCb2R5Lmluc2VydEJlZm9yZShhZGRUYXNrRm9ybSwgbGFzdENoaWxkKVxuXG4gICAgY29uc3QgYWRkVGFza1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgYWRkVGFza1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUtaW5wdXQnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tUaXRsZUxhYmVsKVxuICAgIGFkZFRhc2tUaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTogXCJcbiAgICBjb25zdCBhZGRUYXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrVGl0bGVJbnB1dClcbiAgICBhZGRUYXNrVGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgYWRkVGFza1RpdGxlSW5wdXQuaWQgPSAndGl0bGUtaW5wdXQnXG4gICAgYWRkVGFza1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnV2hhdCB0byBkbz8nXG5cbiAgICBjb25zdCBhZGRUYXNrRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBhZGRUYXNrRGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbi1pbnB1dCcpXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0Rlc2NyaXB0aW9uTGFiZWwpXG4gICAgYWRkVGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIlxuICAgIGNvbnN0IGFkZFRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tEZXNjcmlwdGlvbklucHV0KVxuICAgIGFkZFRhc2tEZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uLWlucHV0J1xuICAgIGFkZFRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0FueSBleHRyYSBkZXRhaWxzPydcblxuICAgIGNvbnN0IGFkZFRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgYWRkVGFza0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkYXRlLWlucHV0JylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrRHVlRGF0ZUxhYmVsKVxuICAgIGFkZFRhc2tEdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6ICdcbiAgICBjb25zdCBhZGRUYXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tEdWVEYXRlSW5wdXQpXG4gICAgYWRkVGFza0R1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnXG4gICAgYWRkVGFza0R1ZURhdGVJbnB1dC5pZCA9ICdkYXRlLWlucHV0J1xuXG4gICAgY29uc3QgYWRkVGFza1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgYWRkVGFza1ByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHktc2VsZWN0JylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlMYWJlbClcbiAgICBhZGRUYXNrUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSdcbiAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgIGFkZFRhc2tQcmlvcml0eVNlbGVjdC5pZCA9ICdwcmlvcml0eS1zZWxlY3QnXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5U2VsZWN0KVxuICAgIGNvbnN0IGFkZFByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBhZGRUYXNrUHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoYWRkUHJpb3JpdHlMb3cpXG4gICAgYWRkUHJpb3JpdHlMb3cudmFsdWUgPSAnTG93J1xuICAgIGFkZFByaW9yaXR5TG93LnRleHRDb250ZW50ID0gJ0xvdydcbiAgICBjb25zdCBhZGRQcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgYWRkVGFza1ByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGFkZFByaW9yaXR5TWVkaXVtKVxuICAgIGFkZFByaW9yaXR5TWVkaXVtLnZhbHVlID0gJ01lZGl1bSdcbiAgICBhZGRQcmlvcml0eU1lZGl1bS50ZXh0Q29udGVudCA9ICdNZWRpdW0nXG4gICAgY29uc3QgYWRkUHJpb3JpdHloaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBhZGRUYXNrUHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoYWRkUHJpb3JpdHloaWdoKVxuICAgIGFkZFByaW9yaXR5aGlnaC52YWx1ZSA9ICdIaWdoJ1xuICAgIGFkZFByaW9yaXR5aGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJ1xuXG4gICAgY29uc3QgYWRkVGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza1N1Ym1pdEJ1dHRvbilcbiAgICBhZGRUYXNrU3VibWl0QnV0dG9uLnR5cGUgPSAnU3VibWl0J1xuICAgIGFkZFRhc2tTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0J1xuXG4gICAgYWRkVGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuYXBwZW5kVGFzayhhZGRUYXNrVGl0bGVJbnB1dC52YWx1ZSwgYWRkVGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUsIFxuICAgICAgICAgICAgICAgIGFkZFRhc2tEdWVEYXRlSW5wdXQudmFsdWUsIGFkZFRhc2tQcmlvcml0eVNlbGVjdC52YWx1ZSwgXG4gICAgICAgICAgICAgICAgcHJvamVjdEJvZHkpXG5cbiAgICAgIGFkZFRhc2tGb3JtLnJlbW92ZSgpXG4gICAgfSlcbiAgfVxuXG4gIGFwcGVuZFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgcHJvamVjdEJvZHkpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2sodGhpcy5maW5kQWN0aXZlUHJvamVjdEluZGV4KCksIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IGR1ZWRhdGUsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHlcbiAgICB9KVxuICAgIHRoaXMucmVuZGVyVGFza3MocHJvamVjdEJvZHksIHRoaXMuYWN0aXZlUHJvamVjdC50YXNrcywgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdC5uYW1lKVxuICB9XG5cbiAgaGFuZGxlQ29tcGxldGlvbkNoZWNrYm94Q2xpY2soY29tcGxldGlvbkNoZWNrYm94LCB0YXNrLCB0YXNrRGl2KSB7XG4gICAgY29tcGxldGlvbkNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWNvbXBsZXRpb25DaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2YgdW5jaGVja2luZyB0aGUgY2hlY2tib3hcbiAgICAgIH1cbiAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZVxuICAgICAgdGFza0Rpdi5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgM3MnO1xuICAgICAgdGFza0Rpdi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfSwgMzA1MCk7XG4gICAgfSlcbiAgfVxuXG4vLyBSZW5kZXJpbmcgZnVuY3Rpb25cbiAgcmVuZGVyQWxsKCkge1xuICAgIC8vIENyZWF0aW5nIHRlbXBvcmFyeSB0ZXN0IHByb2plY3RzL2NsYXNzZXNcbiAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVByb2plY3QoJ1Byb2plY3QgMScpXG4gICAgdGhpcy50b2RvTGlzdC5jcmVhdGVQcm9qZWN0KCdQcm9qZWN0IDInKVxuICAgIFxuICAgIC8vIENyZWF0aW5nIGFuZCBzb3J0aW5nIHRoZSBkaXZzXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXJDb250YWluZXIpXG4gICAgaGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdCA9ICdoZWFkZXItY29udGFpbmVyJ1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFpbi1jb250YWluZXInXG4gICAgYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKVxuXG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZWJhci5jbGFzc05hbWUgPSAnc2lkZWJhcidcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXIpXG5cbiAgICBjb25zdCBob21lUHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaG9tZVByb2plY3RzRGl2KVxuXG4gICAgY29uc3QgYWxsUHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWxsUHJvamVjdHNEaXYpXG5cbiAgICBjb25zdCBwcm9qZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdEJvZHkuY2xhc3NOYW1lID0gJ3Byb2plY3QtYm9keSdcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCb2R5KVxuXG4gICAgLy8gSGVhZGVyIENvbnRhaW5lclxuICAgIGNvbnN0IGhlYWRlclBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBoZWFkZXJQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTXkgQXdlc29tZSBUby1EbyBMaXN0IEFwcCdcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyUGFyYWdyYXBoKVxuXG4gICAgLy8gRGlzcGxheXMgdGhlIHNwZWNpYWwgc2lkZWJhciBmaWx0ZXJzXG4gICAgLy8gQWxsIHRhc2tzXG4gICAgdGhpcy5yZW5kZXJBbGxUYXNrc1RhYihob21lUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuICAgIHRoaXMucmVuZGVyVGFza3MocHJvamVjdEJvZHksIHRoaXMudG9kb0xpc3QuZ2V0QWxsVGFza3MoKSwgXCJBbGwgVGFza3NcIilcblxuICAgIC8vIERpc3BsYXlpbmcgdGhlIHByb2plY3RzIGluIHRoZSBzaWRlYmFyXG4gICAgdGhpcy5yZW5kZXJQcm9qZWN0VGFicyhhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpXG5cbiAgICAvLyBBZGQgUHJvamVjdCBCdXR0b25cbiAgICB0aGlzLmNyZWF0ZUFkZFByb2plY3RCdXR0b24oc2lkZWJhciwgYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuICB9XG59IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLnRhc2tzID0gW11cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG4gIHNldENvbXBsZXRlZCgpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWVcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb2plY3RzID0gW11cbiAgfVxuICBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSlcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcbiAgfVxuICBjcmVhdGVUYXNrKHByb2plY3RJbmRleCwgdGFza0RldGFpbHMpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0c1twcm9qZWN0SW5kZXhdXG4gICAgaWYgKHByb2plY3QpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrRGV0YWlscy50aXRsZSwgdGFza0RldGFpbHMuZGVzY3JpcHRpb24sIHRhc2tEZXRhaWxzLmR1ZURhdGUsIHRhc2tEZXRhaWxzLnByaW9yaXR5KVxuICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJUaGF0IHByb2plY3QgZG9lc24ndCBzZWVtIHRvIGV4aXN0XCIpXG4gICAgfVxuICB9XG4gIGdldEFsbFRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZsYXRNYXAocHJvamVjdCA9PiBwcm9qZWN0LnRhc2tzKVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IERvbU1hbmFnZXIgZnJvbSAnLi9kb20nXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5jb25zdCBkb21NYW5hZ2VyID0gbmV3IERvbU1hbmFnZXIoKVxuZG9tTWFuYWdlci5yZW5kZXJBbGwoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==