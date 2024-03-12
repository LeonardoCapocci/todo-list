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

/* Main Body */
.project-body {
    flex: 3.5;
    background-color: rgb(231, 231, 231);
    padding: 10px;
    padding-top: 5px;
}

.project-body div {
    margin: 10px;
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

.project-body p {
    margin: 10px;
    border: 1px solid gray;
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

/* Footer */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,kBAAkB;IAClB,2DAA2D;IAC3D,2BAA2B;AAC/B;;AAEA,SAAS;AACT;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;;AAEA,WAAW;AACX;IACI,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,YAAY;AACZ;IACI,OAAO;IACP;6BACyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;IACd,wBAAwB;IACxB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA,cAAc;AACd;IACI,SAAS;IACT,oCAAoC;IACpC,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA,WAAW","sourcesContent":["* { \n    margin: 0;\n    font-size: 1.25rem;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    /* border: 1px solid red; */\n}\n\n/* Body */\nbody {\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\n.header-container {\n    background-color: rgb(238, 240, 243);\n    text-align: center;\n    padding: 10px;\n    border-bottom: 2px solid darkblue;\n}\n\n.header-container h1 {\n    margin: 0;\n    font-size: 2rem;\n}\n\n/* Main Container */\n.main-container {\n    display: flex;\n    height: 100%;\n}\n\n/* Sidebar */\n.sidebar {\n    flex: 1;\n    /* display: flex;\n    flex-direction: column; */\n    background-color: white;\n}\n\n.project, .add-project-button, .sidebar form {\n    margin: 20px;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n.sidebar, form {\n    width: 50%;\n}\n\n.add-project-button {\n    margin: 0 20px;\n    width: calc(100% - 40px);\n    text-align: left;\n    background-color: white;\n    border: none;\n}\n\n.project:hover, .add-project-button:hover {\n    background-color: rgb(231, 231, 231);\n}\n\n/* Main Body */\n.project-body {\n    flex: 3.5;\n    background-color: rgb(231, 231, 231);\n    padding: 10px;\n    padding-top: 5px;\n}\n\n.project-body div {\n    margin: 10px;\n}\n\n.project-body form {\n    margin: 20px;\n    background-color: white;\n    padding: 10px;\n    border-radius: 7px;\n    width: calc(100% - 60px);\n}\n\n.project-body h1 {\n    font-size: 1.75rem;\n    padding: 20px;\n    margin: 20px;\n    color: rgb(247, 244, 244);\n    background-color: darkblue;\n    border-radius: 7px;\n}\n\n.project-body p {\n    margin: 10px;\n    border: 1px solid gray;\n}\n\n.add-task-button {\n    margin: 10px 20px;\n    padding: 0px;\n}\n\n#title-input, #description-input, #date-input {\n    width: calc(100% - 10px);\n    padding: 1px 2px;\n}\n\n#priority-select {\n    width: calc(100%);\n    padding: 2px;\n}\n\n/* Footer */"],"sourceRoot":""}]);
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
      this.renderTasks(projectBody, this.todoList.getAllTasks(), 'allt')
    })
    homeProjectsDiv.appendChild(tabDiv)
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
    projectTabDiv.addEventListener('click', () => {
      this.renderTasks(projectBody, tasks, projectName)
      if (projectName === "All Tasks") {
        this.activeProject = null
      }
      else {
      this.activeProject = this.todoList.projects.find(
                            project => project.name === projectName)
      }
    })
  }

  renderTasks(projectBody, tasks, projectName) {
    projectBody.textContent = ''
    const projectNameTitle = document.createElement('h1')
    projectNameTitle.textContent = projectName
    projectBody.appendChild(projectNameTitle)
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div')
      const taskParagraph = document.createElement('p')
      taskParagraph.textContent = task.title
      taskDiv.appendChild(taskParagraph)
      projectBody.appendChild(taskDiv)
    })
    this.createAddTaskButton(projectBody)
  }

  createAddProjectButton(sidebar, allProjectsDiv, projectBody) {
    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-project-button')
    addProjectButton.textContent = 'Add Project'
    sidebar.appendChild(addProjectButton)
    addProjectButton.addEventListener('click', () => {
      this.createAddProjectForm(allProjectsDiv, projectBody)
    })
  }

  createAddProjectForm(allProjectsDiv, projectBody) {
    const addProjectForm = document.createElement('form')
    allProjectsDiv.appendChild(addProjectForm)
    const addProjectInput = document.createElement('input')
    addProjectInput.type = 'text'
    addProjectInput.id = 'projectNameInput'
    addProjectForm.appendChild(addProjectInput)
    const addProjectSubmit = document.createElement('button')
    addProjectSubmit.textContent = 'Submit'
    addProjectSubmit.type = 'submit'
    addProjectForm.appendChild(addProjectSubmit)
    addProjectSubmit.addEventListener('click', (e) => {
      e.preventDefault()
      this.appendProject(addProjectInput.value, allProjectsDiv, projectBody)
      addProjectForm.remove()
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
    addPriorityLow.value = 'low'
    addPriorityLow.textContent = 'Low'
    const addPriorityMedium = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityMedium)
    addPriorityMedium.value = 'Medium'
    addPriorityMedium.textContent = 'Medium'
    const addPriorityhigh = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityhigh)
    addPriorityhigh.value = 'high'
    addPriorityhigh.textContent = 'High'

    const addTaskSubmitButton = document.createElement('button')
    addTaskForm.appendChild(addTaskSubmitButton)
    addTaskSubmitButton.type = 'Submit'
    addTaskSubmitButton.textContent = 'Submit'

    addTaskSubmitButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.appendTask(addTaskTitleInput.value, addTaskDescriptionLabel.value, 
                addTaskDueDateInput.valueAsDate, addTaskPrioritySelect.value, 
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

// Rendering function
  renderAll() {
    // Creating temporary test projects/classes
    this.todoList.createProject('Project 1');
    this.todoList.createTask(0, {
      title: 'lets go',
      description: 'be great',
      dueDate: 'today',
      priority: 'essential'
    });
    this.todoList.createProject('Project 2');
    this.todoList.createTask(1, {
      title: 'another leggo',
      description: 'be great',
      dueDate: 'today',
      priority: 'essential'
    });
    this.todoList.createTask(1, {
      title: 'ANOTHA leggo',
      description: 'be great',
      dueDate: 'today',
      priority: 'essential'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDclIwQjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1AwQjtBQUNNOztBQUVqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNWOztBQUVwQix1QkFBdUIsNENBQVU7QUFDakMsc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHsgXG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi8qIEJvZHkgKi9cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogSGVhZGVyICovXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjQwLCAyNDMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrYmx1ZTtcbn1cblxuLmhlYWRlci1jb250YWluZXIgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi8qIE1haW4gQ29udGFpbmVyICovXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTaWRlYmFyICovXG4uc2lkZWJhciB7XG4gICAgZmxleDogMTtcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LCAuYWRkLXByb2plY3QtYnV0dG9uLCAuc2lkZWJhciBmb3JtIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNpZGViYXIsIGZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5hZGQtcHJvamVjdC1idXR0b24ge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2plY3Q6aG92ZXIsIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcbn1cblxuLyogTWFpbiBCb2R5ICovXG4ucHJvamVjdC1ib2R5IHtcbiAgICBmbGV4OiAzLjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnByb2plY3QtYm9keSBkaXYge1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLnByb2plY3QtYm9keSBmb3JtIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xufVxuXG4ucHJvamVjdC1ib2R5IGgxIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgY29sb3I6IHJnYigyNDcsIDI0NCwgMjQ0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi5wcm9qZWN0LWJvZHkgcCB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5hZGQtdGFzay1idXR0b24ge1xuICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuI3RpdGxlLWlucHV0LCAjZGVzY3JpcHRpb24taW5wdXQsICNkYXRlLWlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgcGFkZGluZzogMXB4IDJweDtcbn1cblxuI3ByaW9yaXR5LXNlbGVjdCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgcGFkZGluZzogMnB4O1xufVxuXG4vKiBGb290ZXIgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCwyQkFBMkI7QUFDL0I7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBLFdBQVc7QUFDWDtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBLFlBQVk7QUFDWjtJQUNJLE9BQU87SUFDUDs2QkFDeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBLFdBQVdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7IFxcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6J1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLyogQm9keSAqL1xcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjQwLCAyNDMpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrYmx1ZTtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIgaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogTWFpbiBDb250YWluZXIgKi9cXG4ubWFpbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4uc2lkZWJhciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdCwgLmFkZC1wcm9qZWN0LWJ1dHRvbiwgLnNpZGViYXIgZm9ybSB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5zaWRlYmFyLCBmb3JtIHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAyMHB4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyLCAuYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xcbn1cXG5cXG4vKiBNYWluIEJvZHkgKi9cXG4ucHJvamVjdC1ib2R5IHtcXG4gICAgZmxleDogMy41O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWJvZHkgZGl2IHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1ib2R5IGZvcm0ge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG59XFxuXFxuLnByb2plY3QtYm9keSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBjb2xvcjogcmdiKDI0NywgMjQ0LCAyNDQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4ucHJvamVjdC1ib2R5IHAge1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxufVxcblxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgICBtYXJnaW46IDEwcHggMjBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4jdGl0bGUtaW5wdXQsICNkZXNjcmlwdGlvbi1pbnB1dCwgI2RhdGUtaW5wdXQge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XFxuICAgIHBhZGRpbmc6IDFweCAycHg7XFxufVxcblxcbiNwcmlvcml0eS1zZWxlY3Qge1xcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9saXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFjdGl2ZVByb2plY3QgPSAnJ1xuICAgIHRoaXMudG9kb0xpc3QgPSBuZXcgVG9kb0xpc3QoKVxuICB9XG5cbiAgZmluZEFjdGl2ZVByb2plY3RJbmRleCAoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9kb0xpc3QucHJvamVjdHMuaW5kZXhPZih0aGlzLmFjdGl2ZVByb2plY3QpXG4gIH1cblxuICByZW5kZXJBbGxUYXNrc1RhYihob21lUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KSB7XG4gICAgY29uc3QgdGFiRGl2ID0gdGhpcy5jcmVhdGVIb21lVGFza1RhYignQWxsIFRhc2tzJylcblxuICAgIC8vIHRoaXMuaGFuZGxlUHJvamVjdFRhYkNsaWNrKHRhYkRpdiwgcHJvamVjdEJvZHksIFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5nZXRBbGxUYXNrcygpLCBcIkFsbCBUYXNrc1wiKVxuICAgIHRhYkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVGFza3MocHJvamVjdEJvZHksIHRoaXMudG9kb0xpc3QuZ2V0QWxsVGFza3MoKSwgJ2FsbHQnKVxuICAgIH0pXG4gICAgaG9tZVByb2plY3RzRGl2LmFwcGVuZENoaWxkKHRhYkRpdilcbiAgfVxuICBcbiAgY3JlYXRlSG9tZVRhc2tUYWIobmFtZSkge1xuICAgIGNvbnN0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgIGNvbnN0IHRhYlBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRhYlBhcmFncmFwaC50ZXh0Q29udGVudCA9IG5hbWVcbiAgICB0YWJEaXYuYXBwZW5kQ2hpbGQodGFiUGFyYWdyYXBoKVxuICAgIHJldHVybiB0YWJEaXZcbiAgfVxuXG4gIHJlbmRlclByb2plY3RUYWJzKGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSkge1xuICAgIHRoaXMudG9kb0xpc3QucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgY29uc3QgcHJvamVjdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgcHJvamVjdFBhcmFncmFwaC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZVxuICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgb24gcHJvamVjdFxuICAgICAgdGhpcy5oYW5kbGVQcm9qZWN0VGFiQ2xpY2socHJvamVjdERpdiwgcHJvamVjdEJvZHksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzLCBwcm9qZWN0Lm5hbWUpXG5cbiAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFBhcmFncmFwaClcbiAgICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVByb2plY3RUYWJDbGljayhwcm9qZWN0VGFiRGl2LCBwcm9qZWN0Qm9keSwgdGFza3MsIHByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdFRhYkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVGFza3MocHJvamVjdEJvZHksIHRhc2tzLCBwcm9qZWN0TmFtZSlcbiAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gXCJBbGwgVGFza3NcIikge1xuICAgICAgICB0aGlzLmFjdGl2ZVByb2plY3QgPSBudWxsXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlUHJvamVjdCA9IHRoaXMudG9kb0xpc3QucHJvamVjdHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlclRhc2tzKHByb2plY3RCb2R5LCB0YXNrcywgcHJvamVjdE5hbWUpIHtcbiAgICBwcm9qZWN0Qm9keS50ZXh0Q29udGVudCA9ICcnXG4gICAgY29uc3QgcHJvamVjdE5hbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBwcm9qZWN0TmFtZVRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcbiAgICBwcm9qZWN0Qm9keS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZVRpdGxlKVxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgY29uc3QgdGFza1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgdGFza1BhcmFncmFwaC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGVcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1BhcmFncmFwaClcbiAgICAgIHByb2plY3RCb2R5LmFwcGVuZENoaWxkKHRhc2tEaXYpXG4gICAgfSlcbiAgICB0aGlzLmNyZWF0ZUFkZFRhc2tCdXR0b24ocHJvamVjdEJvZHkpXG4gIH1cblxuICBjcmVhdGVBZGRQcm9qZWN0QnV0dG9uKHNpZGViYXIsIGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtYnV0dG9uJylcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0J1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbilcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVBZGRQcm9qZWN0Rm9ybShhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUFkZFByb2plY3RGb3JtKGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSkge1xuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgYWxsUHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pXG4gICAgY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGFkZFByb2plY3RJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgYWRkUHJvamVjdElucHV0LmlkID0gJ3Byb2plY3ROYW1lSW5wdXQnXG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdElucHV0KVxuICAgIGNvbnN0IGFkZFByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZFByb2plY3RTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0J1xuICAgIGFkZFByb2plY3RTdWJtaXQudHlwZSA9ICdzdWJtaXQnXG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFN1Ym1pdClcbiAgICBhZGRQcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5hcHBlbmRQcm9qZWN0KGFkZFByb2plY3RJbnB1dC52YWx1ZSwgYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuICAgICAgYWRkUHJvamVjdEZvcm0ucmVtb3ZlKClcbiAgICB9KVxuICB9XG5cbiAgYXBwZW5kUHJvamVjdChuYW1lLCBhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpIHtcbiAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVByb2plY3QobmFtZSlcbiAgICB0aGlzLnJlbmRlckxhdGVzdFByb2plY3RUYWIoYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuICB9XG5cbiAgcmVuZGVyTGF0ZXN0UHJvamVjdFRhYihhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgIGNvbnN0IHByb2plY3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBsYXN0UHJvamVjdEluZGV4ID0gdGhpcy50b2RvTGlzdC5wcm9qZWN0cy5sZW5ndGggLSAxXG4gICAgcHJvamVjdFBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRoaXMudG9kb0xpc3QucHJvamVjdHNbbGFzdFByb2plY3RJbmRleF0ubmFtZVxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFBhcmFncmFwaClcbiAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgIHRoaXMuaGFuZGxlUHJvamVjdFRhYkNsaWNrKHByb2plY3REaXYsIHByb2plY3RCb2R5LCBcbiAgICAgIHRoaXMudG9kb0xpc3QucHJvamVjdHNbbGFzdFByb2plY3RJbmRleF0udGFza3MsIFxuICAgICAgdGhpcy50b2RvTGlzdC5wcm9qZWN0c1tsYXN0UHJvamVjdEluZGV4XS5uYW1lKVxuICB9XG5cbiAgY3JlYXRlQWRkVGFza0J1dHRvbihwcm9qZWN0Qm9keSkge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2plY3RCb2R5LmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pXG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWJ1dHRvbicpXG4gICAgdGhpcy5oYW5kbGVBZGRUYXNrQnV0dG9uQ2xpY2soYWRkVGFza0J1dHRvbiwgcHJvamVjdEJvZHkpXG4gIH1cblxuICBoYW5kbGVBZGRUYXNrQnV0dG9uQ2xpY2soYWRkVGFza0J1dHRvbiwgcHJvamVjdEJvZHkpIHtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVBZGRUYXNrRm9ybShwcm9qZWN0Qm9keSlcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlQWRkVGFza0Zvcm0ocHJvamVjdEJvZHkpIHtcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGNvbnN0IGxhc3RDaGlsZCA9IHByb2plY3RCb2R5Lmxhc3RFbGVtZW50Q2hpbGRcbiAgICBwcm9qZWN0Qm9keS5pbnNlcnRCZWZvcmUoYWRkVGFza0Zvcm0sIGxhc3RDaGlsZClcblxuICAgIGNvbnN0IGFkZFRhc2tUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGFkZFRhc2tUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlLWlucHV0JylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrVGl0bGVMYWJlbClcbiAgICBhZGRUYXNrVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6IFwiXG4gICAgY29uc3QgYWRkVGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza1RpdGxlSW5wdXQpXG4gICAgYWRkVGFza1RpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIGFkZFRhc2tUaXRsZUlucHV0LmlkID0gJ3RpdGxlLWlucHV0J1xuICAgIGFkZFRhc2tUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1doYXQgdG8gZG8/J1xuXG4gICAgY29uc3QgYWRkVGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgYWRkVGFza0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24taW5wdXQnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tEZXNjcmlwdGlvbkxhYmVsKVxuICAgIGFkZFRhc2tEZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCJcbiAgICBjb25zdCBhZGRUYXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrRGVzY3JpcHRpb25JbnB1dClcbiAgICBhZGRUYXNrRGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbi1pbnB1dCdcbiAgICBhZGRUYXNrRGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdBbnkgZXh0cmEgZGV0YWlscz8nXG5cbiAgICBjb25zdCBhZGRUYXNrRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGFkZFRhc2tEdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZS1pbnB1dCcpXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0R1ZURhdGVMYWJlbClcbiAgICBhZGRUYXNrRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOiAnXG4gICAgY29uc3QgYWRkVGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrRHVlRGF0ZUlucHV0KVxuICAgIGFkZFRhc2tEdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJ1xuICAgIGFkZFRhc2tEdWVEYXRlSW5wdXQuaWQgPSAnZGF0ZS1pbnB1dCdcblxuICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGFkZFRhc2tQcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5LXNlbGVjdCcpXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza1ByaW9yaXR5TGFiZWwpXG4gICAgYWRkVGFza1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknXG4gICAgY29uc3QgYWRkVGFza1ByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICBhZGRUYXNrUHJpb3JpdHlTZWxlY3QuaWQgPSAncHJpb3JpdHktc2VsZWN0J1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eVNlbGVjdClcbiAgICBjb25zdCBhZGRQcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgYWRkVGFza1ByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGFkZFByaW9yaXR5TG93KVxuICAgIGFkZFByaW9yaXR5TG93LnZhbHVlID0gJ2xvdydcbiAgICBhZGRQcmlvcml0eUxvdy50ZXh0Q29udGVudCA9ICdMb3cnXG4gICAgY29uc3QgYWRkUHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGFkZFRhc2tQcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChhZGRQcmlvcml0eU1lZGl1bSlcbiAgICBhZGRQcmlvcml0eU1lZGl1bS52YWx1ZSA9ICdNZWRpdW0nXG4gICAgYWRkUHJpb3JpdHlNZWRpdW0udGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xuICAgIGNvbnN0IGFkZFByaW9yaXR5aGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgYWRkVGFza1ByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGFkZFByaW9yaXR5aGlnaClcbiAgICBhZGRQcmlvcml0eWhpZ2gudmFsdWUgPSAnaGlnaCdcbiAgICBhZGRQcmlvcml0eWhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCdcblxuICAgIGNvbnN0IGFkZFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tTdWJtaXRCdXR0b24pXG4gICAgYWRkVGFza1N1Ym1pdEJ1dHRvbi50eXBlID0gJ1N1Ym1pdCdcbiAgICBhZGRUYXNrU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcblxuICAgIGFkZFRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLmFwcGVuZFRhc2soYWRkVGFza1RpdGxlSW5wdXQudmFsdWUsIGFkZFRhc2tEZXNjcmlwdGlvbkxhYmVsLnZhbHVlLCBcbiAgICAgICAgICAgICAgICBhZGRUYXNrRHVlRGF0ZUlucHV0LnZhbHVlQXNEYXRlLCBhZGRUYXNrUHJpb3JpdHlTZWxlY3QudmFsdWUsIFxuICAgICAgICAgICAgICAgIHByb2plY3RCb2R5KVxuICAgICAgYWRkVGFza0Zvcm0ucmVtb3ZlKClcbiAgICB9KVxuICB9XG5cbiAgYXBwZW5kVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBwcm9qZWN0Qm9keSkge1xuICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlVGFzayh0aGlzLmZpbmRBY3RpdmVQcm9qZWN0SW5kZXgoKSwge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZTogZHVlZGF0ZSxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eVxuICAgIH0pXG4gICAgdGhpcy5yZW5kZXJUYXNrcyhwcm9qZWN0Qm9keSwgdGhpcy5hY3RpdmVQcm9qZWN0LnRhc2tzLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qZWN0Lm5hbWUpXG4gIH1cblxuLy8gUmVuZGVyaW5nIGZ1bmN0aW9uXG4gIHJlbmRlckFsbCgpIHtcbiAgICAvLyBDcmVhdGluZyB0ZW1wb3JhcnkgdGVzdCBwcm9qZWN0cy9jbGFzc2VzXG4gICAgdGhpcy50b2RvTGlzdC5jcmVhdGVQcm9qZWN0KCdQcm9qZWN0IDEnKTtcbiAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2soMCwge1xuICAgICAgdGl0bGU6ICdsZXRzIGdvJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnYmUgZ3JlYXQnLFxuICAgICAgZHVlRGF0ZTogJ3RvZGF5JyxcbiAgICAgIHByaW9yaXR5OiAnZXNzZW50aWFsJ1xuICAgIH0pO1xuICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlUHJvamVjdCgnUHJvamVjdCAyJyk7XG4gICAgdGhpcy50b2RvTGlzdC5jcmVhdGVUYXNrKDEsIHtcbiAgICAgIHRpdGxlOiAnYW5vdGhlciBsZWdnbycsXG4gICAgICBkZXNjcmlwdGlvbjogJ2JlIGdyZWF0JyxcbiAgICAgIGR1ZURhdGU6ICd0b2RheScsXG4gICAgICBwcmlvcml0eTogJ2Vzc2VudGlhbCdcbiAgICB9KTtcbiAgICB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2soMSwge1xuICAgICAgdGl0bGU6ICdBTk9USEEgbGVnZ28nLFxuICAgICAgZGVzY3JpcHRpb246ICdiZSBncmVhdCcsXG4gICAgICBkdWVEYXRlOiAndG9kYXknLFxuICAgICAgcHJpb3JpdHk6ICdlc3NlbnRpYWwnXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGluZyBhbmQgc29ydGluZyB0aGUgZGl2c1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKVxuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QgPSAnaGVhZGVyLWNvbnRhaW5lcidcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250YWluZXIuY2xhc3NOYW1lID0gJ21haW4tY29udGFpbmVyJ1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKVxuXG4gICAgY29uc3QgaG9tZVByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGhvbWVQcm9qZWN0c0RpdilcblxuICAgIGNvbnN0IGFsbFByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFsbFByb2plY3RzRGl2KVxuXG4gICAgY29uc3QgcHJvamVjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RCb2R5LmNsYXNzTmFtZSA9ICdwcm9qZWN0LWJvZHknXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Qm9keSlcblxuICAgIC8vIEhlYWRlciBDb250YWluZXJcbiAgICBjb25zdCBoZWFkZXJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgaGVhZGVyUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ015IEF3ZXNvbWUgVG8tRG8gTGlzdCBBcHAnXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclBhcmFncmFwaClcblxuICAgIC8vIERpc3BsYXlzIHRoZSBzcGVjaWFsIHNpZGViYXIgZmlsdGVyc1xuICAgIC8vIEFsbCB0YXNrc1xuICAgIHRoaXMucmVuZGVyQWxsVGFza3NUYWIoaG9tZVByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSlcbiAgICB0aGlzLnJlbmRlclRhc2tzKHByb2plY3RCb2R5LCB0aGlzLnRvZG9MaXN0LmdldEFsbFRhc2tzKCksIFwiQWxsIFRhc2tzXCIpXG5cbiAgICAvLyBEaXNwbGF5aW5nIHRoZSBwcm9qZWN0cyBpbiB0aGUgc2lkZWJhclxuICAgIHRoaXMucmVuZGVyUHJvamVjdFRhYnMoYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuXG4gICAgLy8gQWRkIFByb2plY3QgQnV0dG9uXG4gICAgdGhpcy5jcmVhdGVBZGRQcm9qZWN0QnV0dG9uKHNpZGViYXIsIGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSlcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy50YXNrcyA9IFtdXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gIH1cbiAgY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gIH1cbiAgY3JlYXRlVGFzayhwcm9qZWN0SW5kZXgsIHRhc2tEZXRhaWxzKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XVxuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0RldGFpbHMudGl0bGUsIHRhc2tEZXRhaWxzLmRlc2NyaXB0aW9uLCB0YXNrRGV0YWlscy5kdWVEYXRlLCB0YXNrRGV0YWlscy5wcmlvcml0eSlcbiAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhhdCBwcm9qZWN0IGRvZXNuJ3Qgc2VlbSB0byBleGlzdFwiKVxuICAgIH1cbiAgfVxuICBnZXRBbGxUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5mbGF0TWFwKHByb2plY3QgPT4gcHJvamVjdC50YXNrcylcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBEb21NYW5hZ2VyIGZyb20gJy4vZG9tJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuY29uc3QgZG9tTWFuYWdlciA9IG5ldyBEb21NYW5hZ2VyKClcbmRvbU1hbmFnZXIucmVuZGVyQWxsKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=