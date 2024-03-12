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

/* Footer */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,kBAAkB;IAClB,2DAA2D;IAC3D,2BAA2B;AAC/B;;AAEA,SAAS;AACT;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,sBAAsB;AAC1B;;AAEA,WAAW;AACX;IACI,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,eAAe;AACnB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,YAAY;AAChB;;AAEA,YAAY;AACZ;IACI,OAAO;IACP;6BACyB;IACzB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;IACd,wBAAwB;IACxB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA,cAAc;AACd;IACI,SAAS;IACT,oCAAoC;IACpC,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,YAAY;AAChB;;AAEA,WAAW","sourcesContent":["* { \n    margin: 0;\n    font-size: 1.25rem;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    /* border: 1px solid red; */\n}\n\n/* Body */\nbody {\n    height: 100vh;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\n.header-container {\n    background-color: rgb(238, 240, 243);\n    text-align: center;\n    padding: 10px;\n    border-bottom: 2px solid darkblue;\n}\n\n.header-container h1 {\n    margin: 0;\n    font-size: 2rem;\n}\n\n/* Main Container */\n.main-container {\n    display: flex;\n    height: 100%;\n}\n\n/* Sidebar */\n.sidebar {\n    flex: 1;\n    /* display: flex;\n    flex-direction: column; */\n    background-color: white;\n}\n\n.project, .add-project-button, .sidebar form {\n    margin: 20px;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n.sidebar, form {\n    width: 50%;\n}\n\n.add-project-button {\n    margin: 0 20px;\n    width: calc(100% - 40px);\n    text-align: left;\n    background-color: white;\n    border: none;\n}\n\n.project:hover, .add-project-button:hover {\n    background-color: rgb(231, 231, 231);\n}\n\n/* Main Body */\n.project-body {\n    flex: 3.5;\n    background-color: rgb(231, 231, 231);\n    padding: 10px;\n    padding-top: 5px;\n}\n\n.project-body div {\n    margin: 20px;\n    border: 1px solid gray;\n}\n\n.project-body form {\n    margin: 20px;\n    background-color: white;\n    padding: 10px;\n    border-radius: 7px;\n    width: calc(100% - 60px);\n}\n\n.project-body h1 {\n    font-size: 1.75rem;\n    padding: 20px;\n    margin: 20px;\n    color: rgb(247, 244, 244);\n    background-color: darkblue;\n    border-radius: 7px;\n}\n\n.add-task-button {\n    margin: 10px 20px;\n    padding: 0px;\n}\n\n#title-input, #description-input, #date-input {\n    width: calc(100% - 10px);\n    padding: 1px 2px;\n}\n\n#priority-select {\n    width: calc(100%);\n    padding: 2px;\n}\n\n/* Footer */"],"sourceRoot":""}]);
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
      this.renderTasks(projectBody, this.todoList.getAllTasks(), 'All Tasks')
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
      this.activeProject = this.todoList.projects.find(
                            project => project.name === projectName)
      console.log(this.activeProject)
    })
  }

  renderTasks(projectBody, tasks, projectName) {
    projectBody.textContent = ''
    const projectNameTitle = document.createElement('h1')
    projectNameTitle.textContent = projectName
    projectBody.appendChild(projectNameTitle)
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div')
      projectBody.appendChild(taskDiv)
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

// Rendering function
  renderAll() {
    // Creating temporary test projects/classes
    this.todoList.createProject('Project 1')
    this.todoList.createProject('Project 2')
    // this.todoList.createTask(0, {
    //   title: 'lets go',
    //   description: 'be great',
    //   dueDate: 'today',
    //   priority: 'essential'
    // });

    // this.todoList.createTask(1, {
    //   title: 'another leggo',
    //   description: 'be great',
    //   dueDate: 'today',
    //   priority: 'essential'
    // });
    // this.todoList.createTask(1, {
    //   title: 'ANOTHA leggo',
    //   description: 'be great',
    //   dueDate: 'today',
    //   priority: 'essential'
    // });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxrQ0FBa0MsZ0JBQWdCLHlCQUF5QixrRUFBa0UsZ0NBQWdDLEtBQUssc0JBQXNCLG9CQUFvQixnQkFBZ0Isb0JBQW9CLDZCQUE2QixHQUFHLHFDQUFxQywyQ0FBMkMseUJBQXlCLG9CQUFvQix3Q0FBd0MsR0FBRywwQkFBMEIsZ0JBQWdCLHNCQUFzQixHQUFHLDJDQUEyQyxvQkFBb0IsbUJBQW1CLEdBQUcsNkJBQTZCLGNBQWMsdUJBQXVCLDhCQUE4QixnQ0FBZ0MsR0FBRyxrREFBa0QsbUJBQW1CLG1CQUFtQix5QkFBeUIsR0FBRyxvQkFBb0IsaUJBQWlCLEdBQUcseUJBQXlCLHFCQUFxQiwrQkFBK0IsdUJBQXVCLDhCQUE4QixtQkFBbUIsR0FBRywrQ0FBK0MsMkNBQTJDLEdBQUcsb0NBQW9DLGdCQUFnQiwyQ0FBMkMsb0JBQW9CLHVCQUF1QixHQUFHLHVCQUF1QixtQkFBbUIsNkJBQTZCLEdBQUcsd0JBQXdCLG1CQUFtQiw4QkFBOEIsb0JBQW9CLHlCQUF5QiwrQkFBK0IsR0FBRyxzQkFBc0IseUJBQXlCLG9CQUFvQixtQkFBbUIsZ0NBQWdDLGlDQUFpQyx5QkFBeUIsR0FBRyxzQkFBc0Isd0JBQXdCLG1CQUFtQixHQUFHLG1EQUFtRCwrQkFBK0IsdUJBQXVCLEdBQUcsc0JBQXNCLHdCQUF3QixtQkFBbUIsR0FBRyxtQ0FBbUM7QUFDNTFGO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDcEgxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYmtDOztBQUVuQjtBQUNmO0FBQ0E7QUFDQSx3QkFBd0IsaURBQVE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbFMwQjs7QUFFWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1AwQjtBQUNNOztBQUVqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNWOztBQUVwQix1QkFBdUIsNENBQVU7QUFDakMsc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHsgXG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi8qIEJvZHkgKi9cbmJvZHkge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyogSGVhZGVyICovXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjQwLCAyNDMpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrYmx1ZTtcbn1cblxuLmhlYWRlci1jb250YWluZXIgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi8qIE1haW4gQ29udGFpbmVyICovXG4ubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBTaWRlYmFyICovXG4uc2lkZWJhciB7XG4gICAgZmxleDogMTtcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LCAuYWRkLXByb2plY3QtYnV0dG9uLCAuc2lkZWJhciBmb3JtIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnNpZGViYXIsIGZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5hZGQtcHJvamVjdC1idXR0b24ge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2plY3Q6aG92ZXIsIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcbn1cblxuLyogTWFpbiBCb2R5ICovXG4ucHJvamVjdC1ib2R5IHtcbiAgICBmbGV4OiAzLjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnByb2plY3QtYm9keSBkaXYge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4ucHJvamVjdC1ib2R5IGZvcm0ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG59XG5cbi5wcm9qZWN0LWJvZHkgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBjb2xvcjogcmdiKDI0NywgMjQ0LCAyNDQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmFkZC10YXNrLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4jdGl0bGUtaW5wdXQsICNkZXNjcmlwdGlvbi1pbnB1dCwgI2RhdGUtaW5wdXQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICBwYWRkaW5nOiAxcHggMnB4O1xufVxuXG4jcHJpb3JpdHktc2VsZWN0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlKTtcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbi8qIEZvb3RlciAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsMkRBQTJEO0lBQzNELDJCQUEyQjtBQUMvQjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUEsWUFBWTtBQUNaO0lBQ0ksT0FBTztJQUNQOzZCQUN5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBLGNBQWM7QUFDZDtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQSxXQUFXXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiogeyBcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OidTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi8qIEJvZHkgKi9cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDI0MCwgMjQzKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZGFya2JsdWU7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qIE1haW4gQ29udGFpbmVyICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuLnNpZGViYXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QsIC5hZGQtcHJvamVjdC1idXR0b24sIC5zaWRlYmFyIGZvcm0ge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4uc2lkZWJhciwgZm9ybSB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICBtYXJnaW46IDAgMjBweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciwgLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKTtcXG59XFxuXFxuLyogTWFpbiBCb2R5ICovXFxuLnByb2plY3QtYm9keSB7XFxuICAgIGZsZXg6IDMuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1ib2R5IGRpdiB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG59XFxuXFxuLnByb2plY3QtYm9keSBmb3JtIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxufVxcblxcbi5wcm9qZWN0LWJvZHkgaDEge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgY29sb3I6IHJnYigyNDcsIDI0NCwgMjQ0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbiN0aXRsZS1pbnB1dCwgI2Rlc2NyaXB0aW9uLWlucHV0LCAjZGF0ZS1pbnB1dCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcXG4gICAgcGFkZGluZzogMXB4IDJweDtcXG59XFxuXFxuI3ByaW9yaXR5LXNlbGVjdCB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUpO1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi8qIEZvb3RlciAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWN0aXZlUHJvamVjdCA9ICcnXG4gICAgdGhpcy50b2RvTGlzdCA9IG5ldyBUb2RvTGlzdCgpXG4gIH1cblxuICBmaW5kQWN0aXZlUHJvamVjdEluZGV4ICgpIHtcbiAgICByZXR1cm4gdGhpcy50b2RvTGlzdC5wcm9qZWN0cy5pbmRleE9mKHRoaXMuYWN0aXZlUHJvamVjdClcbiAgfVxuXG4gIHJlbmRlckFsbFRhc2tzVGFiKGhvbWVQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpIHtcbiAgICBjb25zdCB0YWJEaXYgPSB0aGlzLmNyZWF0ZUhvbWVUYXNrVGFiKCdBbGwgVGFza3MnKVxuXG4gICAgLy8gdGhpcy5oYW5kbGVQcm9qZWN0VGFiQ2xpY2sodGFiRGl2LCBwcm9qZWN0Qm9keSwgXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9MaXN0LmdldEFsbFRhc2tzKCksIFwiQWxsIFRhc2tzXCIpXG4gICAgdGFiRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJUYXNrcyhwcm9qZWN0Qm9keSwgdGhpcy50b2RvTGlzdC5nZXRBbGxUYXNrcygpLCAnQWxsIFRhc2tzJylcbiAgICB9KVxuICAgIGhvbWVQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZCh0YWJEaXYpXG4gIH1cbiAgXG4gIGNyZWF0ZUhvbWVUYXNrVGFiKG5hbWUpIHtcbiAgICBjb25zdCB0YWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkRpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICBjb25zdCB0YWJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0YWJQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBuYW1lXG4gICAgdGFiRGl2LmFwcGVuZENoaWxkKHRhYlBhcmFncmFwaClcbiAgICByZXR1cm4gdGFiRGl2XG4gIH1cblxuICByZW5kZXJQcm9qZWN0VGFicyhhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpIHtcbiAgICB0aGlzLnRvZG9MaXN0LnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICAgIGNvbnN0IHByb2plY3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHByb2plY3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcbiAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIG9uIHByb2plY3RcbiAgICAgIHRoaXMuaGFuZGxlUHJvamVjdFRhYkNsaWNrKHByb2plY3REaXYsIHByb2plY3RCb2R5LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC50YXNrcywgcHJvamVjdC5uYW1lKVxuXG4gICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RQYXJhZ3JhcGgpXG4gICAgICBhbGxQcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVQcm9qZWN0VGFiQ2xpY2socHJvamVjdFRhYkRpdiwgcHJvamVjdEJvZHksIHRhc2tzLCBwcm9qZWN0TmFtZSkge1xuICAgIHByb2plY3RUYWJEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlclRhc2tzKHByb2plY3RCb2R5LCB0YXNrcywgcHJvamVjdE5hbWUpXG4gICAgICB0aGlzLmFjdGl2ZVByb2plY3QgPSB0aGlzLnRvZG9MaXN0LnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKVxuICAgICAgY29uc29sZS5sb2codGhpcy5hY3RpdmVQcm9qZWN0KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJUYXNrcyhwcm9qZWN0Qm9keSwgdGFza3MsIHByb2plY3ROYW1lKSB7XG4gICAgcHJvamVjdEJvZHkudGV4dENvbnRlbnQgPSAnJ1xuICAgIGNvbnN0IHByb2plY3ROYW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgcHJvamVjdE5hbWVUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lXG4gICAgcHJvamVjdEJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVUaXRsZSlcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHByb2plY3RCb2R5LmFwcGVuZENoaWxkKHRhc2tEaXYpXG4gICAgICBjb25zdCB0YXNrVGl0bGVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlUGFyYWdyYXBoKVxuICAgICAgdGFza1RpdGxlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGFzay50aXRsZVxuICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvblBhcmFncmFwaClcbiAgICAgIHRhc2tEZXNjcmlwdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb25cbiAgICAgIGNvbnN0IHRhc2tEdWVEYXRlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlUGFyYWdyYXBoKVxuICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZS5yZXBsYWNlKC8tL2csICdcXC8nKSlcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycgfVxuICAgICAgY29uc3QgZm9ybWF0dGVkRHVlRGF0ZSA9IGR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpXG4gICAgICB0YXNrRHVlRGF0ZVBhcmFncmFwaC50ZXh0Q29udGVudCA9IGZvcm1hdHRlZER1ZURhdGVcbiAgICAgIGNvbnN0IHRhc2tQcmlvcml0eVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHlQYXJhZ3JhcGgpXG4gICAgICB0YXNrUHJpb3JpdHlQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5XG4gICAgfSlcbiAgICBpZiAocHJvamVjdE5hbWUgIT09IFwiQWxsIFRhc2tzXCIpXG4gICAgdGhpcy5jcmVhdGVBZGRUYXNrQnV0dG9uKHByb2plY3RCb2R5KVxuICB9XG5cbiAgY3JlYXRlQWRkUHJvamVjdEJ1dHRvbihzaWRlYmFyLCBhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCdcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlQWRkUHJvamVjdEZvcm0oYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5LCBzaWRlYmFyKVxuICAgICAgYWRkUHJvamVjdEJ1dHRvbi5yZW1vdmUoKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVBZGRQcm9qZWN0Rm9ybShhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHksIHNpZGViYXIpIHtcbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKVxuICAgIGNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBhZGRQcm9qZWN0SW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIGFkZFByb2plY3RJbnB1dC5pZCA9ICdwcm9qZWN0TmFtZUlucHV0J1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RJbnB1dClcbiAgICBjb25zdCBhZGRQcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRQcm9qZWN0U3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0J1xuICAgIGFkZFByb2plY3RTdWJtaXQudHlwZSA9ICdzdWJtaXQnXG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFN1Ym1pdClcbiAgICBhZGRQcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5hcHBlbmRQcm9qZWN0KGFkZFByb2plY3RJbnB1dC52YWx1ZSwgYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuICAgICAgYWRkUHJvamVjdEZvcm0ucmVtb3ZlKClcbiAgICAgIHRoaXMuY3JlYXRlQWRkUHJvamVjdEJ1dHRvbihzaWRlYmFyLCBhbGxQcm9qZWN0c0RpdiwgcHJvamVjdEJvZHkpXG4gICAgfSlcbiAgfVxuXG4gIGFwcGVuZFByb2plY3QobmFtZSwgYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KSB7XG4gICAgdGhpcy50b2RvTGlzdC5jcmVhdGVQcm9qZWN0KG5hbWUpXG4gICAgdGhpcy5yZW5kZXJMYXRlc3RQcm9qZWN0VGFiKGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSlcbiAgfVxuXG4gIHJlbmRlckxhdGVzdFByb2plY3RUYWIoYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICBjb25zdCBwcm9qZWN0UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgbGFzdFByb2plY3RJbmRleCA9IHRoaXMudG9kb0xpc3QucHJvamVjdHMubGVuZ3RoIC0gMVxuICAgIHByb2plY3RQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0aGlzLnRvZG9MaXN0LnByb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLm5hbWVcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RQYXJhZ3JhcGgpXG4gICAgYWxsUHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcbiAgICB0aGlzLmhhbmRsZVByb2plY3RUYWJDbGljayhwcm9qZWN0RGl2LCBwcm9qZWN0Qm9keSwgXG4gICAgICB0aGlzLnRvZG9MaXN0LnByb2plY3RzW2xhc3RQcm9qZWN0SW5kZXhdLnRhc2tzLCBcbiAgICAgIHRoaXMudG9kb0xpc3QucHJvamVjdHNbbGFzdFByb2plY3RJbmRleF0ubmFtZSlcbiAgfVxuXG4gIGNyZWF0ZUFkZFRhc2tCdXR0b24ocHJvamVjdEJvZHkpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBwcm9qZWN0Qm9keS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKVxuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idXR0b24nKVxuICAgIHRoaXMuaGFuZGxlQWRkVGFza0J1dHRvbkNsaWNrKGFkZFRhc2tCdXR0b24sIHByb2plY3RCb2R5KVxuICB9XG5cbiAgaGFuZGxlQWRkVGFza0J1dHRvbkNsaWNrKGFkZFRhc2tCdXR0b24sIHByb2plY3RCb2R5KSB7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlQWRkVGFza0Zvcm0ocHJvamVjdEJvZHkpXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZUFkZFRhc2tGb3JtKHByb2plY3RCb2R5KSB7XG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb25zdCBsYXN0Q2hpbGQgPSBwcm9qZWN0Qm9keS5sYXN0RWxlbWVudENoaWxkXG4gICAgcHJvamVjdEJvZHkuaW5zZXJ0QmVmb3JlKGFkZFRhc2tGb3JtLCBsYXN0Q2hpbGQpXG5cbiAgICBjb25zdCBhZGRUYXNrVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBhZGRUYXNrVGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZS1pbnB1dCcpXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza1RpdGxlTGFiZWwpXG4gICAgYWRkVGFza1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOiBcIlxuICAgIGNvbnN0IGFkZFRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tUaXRsZUlucHV0KVxuICAgIGFkZFRhc2tUaXRsZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBhZGRUYXNrVGl0bGVJbnB1dC5pZCA9ICd0aXRsZS1pbnB1dCdcbiAgICBhZGRUYXNrVGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdXaGF0IHRvIGRvPydcblxuICAgIGNvbnN0IGFkZFRhc2tEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGFkZFRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uLWlucHV0JylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrRGVzY3JpcHRpb25MYWJlbClcbiAgICBhZGRUYXNrRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiXG4gICAgY29uc3QgYWRkVGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0Rlc2NyaXB0aW9uSW5wdXQpXG4gICAgYWRkVGFza0Rlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24taW5wdXQnXG4gICAgYWRkVGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSAnQW55IGV4dHJhIGRldGFpbHM/J1xuXG4gICAgY29uc3QgYWRkVGFza0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBhZGRUYXNrRHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUtaW5wdXQnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tEdWVEYXRlTGFiZWwpXG4gICAgYWRkVGFza0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTogJ1xuICAgIGNvbnN0IGFkZFRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0R1ZURhdGVJbnB1dClcbiAgICBhZGRUYXNrRHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSdcbiAgICBhZGRUYXNrRHVlRGF0ZUlucHV0LmlkID0gJ2RhdGUtaW5wdXQnXG5cbiAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBhZGRUYXNrUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eS1zZWxlY3QnKVxuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tQcmlvcml0eUxhYmVsKVxuICAgIGFkZFRhc2tQcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5J1xuICAgIGNvbnN0IGFkZFRhc2tQcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgYWRkVGFza1ByaW9yaXR5U2VsZWN0LmlkID0gJ3ByaW9yaXR5LXNlbGVjdCdcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrUHJpb3JpdHlTZWxlY3QpXG4gICAgY29uc3QgYWRkUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGFkZFRhc2tQcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChhZGRQcmlvcml0eUxvdylcbiAgICBhZGRQcmlvcml0eUxvdy52YWx1ZSA9ICdMb3cnXG4gICAgYWRkUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSAnTG93J1xuICAgIGNvbnN0IGFkZFByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICBhZGRUYXNrUHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoYWRkUHJpb3JpdHlNZWRpdW0pXG4gICAgYWRkUHJpb3JpdHlNZWRpdW0udmFsdWUgPSAnTWVkaXVtJ1xuICAgIGFkZFByaW9yaXR5TWVkaXVtLnRleHRDb250ZW50ID0gJ01lZGl1bSdcbiAgICBjb25zdCBhZGRQcmlvcml0eWhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgIGFkZFRhc2tQcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChhZGRQcmlvcml0eWhpZ2gpXG4gICAgYWRkUHJpb3JpdHloaWdoLnZhbHVlID0gJ0hpZ2gnXG4gICAgYWRkUHJpb3JpdHloaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnXG5cbiAgICBjb25zdCBhZGRUYXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrU3VibWl0QnV0dG9uKVxuICAgIGFkZFRhc2tTdWJtaXRCdXR0b24udHlwZSA9ICdTdWJtaXQnXG4gICAgYWRkVGFza1N1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXG5cbiAgICBhZGRUYXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5hcHBlbmRUYXNrKGFkZFRhc2tUaXRsZUlucHV0LnZhbHVlLCBhZGRUYXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgXG4gICAgICAgICAgICAgICAgYWRkVGFza0R1ZURhdGVJbnB1dC52YWx1ZSwgYWRkVGFza1ByaW9yaXR5U2VsZWN0LnZhbHVlLCBcbiAgICAgICAgICAgICAgICBwcm9qZWN0Qm9keSlcblxuICAgICAgYWRkVGFza0Zvcm0ucmVtb3ZlKClcbiAgICB9KVxuICB9XG5cbiAgYXBwZW5kVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBwcm9qZWN0Qm9keSkge1xuICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlVGFzayh0aGlzLmZpbmRBY3RpdmVQcm9qZWN0SW5kZXgoKSwge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgZHVlRGF0ZTogZHVlZGF0ZSxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eVxuICAgIH0pXG4gICAgdGhpcy5yZW5kZXJUYXNrcyhwcm9qZWN0Qm9keSwgdGhpcy5hY3RpdmVQcm9qZWN0LnRhc2tzLCBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qZWN0Lm5hbWUpXG4gIH1cblxuLy8gUmVuZGVyaW5nIGZ1bmN0aW9uXG4gIHJlbmRlckFsbCgpIHtcbiAgICAvLyBDcmVhdGluZyB0ZW1wb3JhcnkgdGVzdCBwcm9qZWN0cy9jbGFzc2VzXG4gICAgdGhpcy50b2RvTGlzdC5jcmVhdGVQcm9qZWN0KCdQcm9qZWN0IDEnKVxuICAgIHRoaXMudG9kb0xpc3QuY3JlYXRlUHJvamVjdCgnUHJvamVjdCAyJylcbiAgICAvLyB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2soMCwge1xuICAgIC8vICAgdGl0bGU6ICdsZXRzIGdvJyxcbiAgICAvLyAgIGRlc2NyaXB0aW9uOiAnYmUgZ3JlYXQnLFxuICAgIC8vICAgZHVlRGF0ZTogJ3RvZGF5JyxcbiAgICAvLyAgIHByaW9yaXR5OiAnZXNzZW50aWFsJ1xuICAgIC8vIH0pO1xuXG4gICAgLy8gdGhpcy50b2RvTGlzdC5jcmVhdGVUYXNrKDEsIHtcbiAgICAvLyAgIHRpdGxlOiAnYW5vdGhlciBsZWdnbycsXG4gICAgLy8gICBkZXNjcmlwdGlvbjogJ2JlIGdyZWF0JyxcbiAgICAvLyAgIGR1ZURhdGU6ICd0b2RheScsXG4gICAgLy8gICBwcmlvcml0eTogJ2Vzc2VudGlhbCdcbiAgICAvLyB9KTtcbiAgICAvLyB0aGlzLnRvZG9MaXN0LmNyZWF0ZVRhc2soMSwge1xuICAgIC8vICAgdGl0bGU6ICdBTk9USEEgbGVnZ28nLFxuICAgIC8vICAgZGVzY3JpcHRpb246ICdiZSBncmVhdCcsXG4gICAgLy8gICBkdWVEYXRlOiAndG9kYXknLFxuICAgIC8vICAgcHJpb3JpdHk6ICdlc3NlbnRpYWwnXG4gICAgLy8gfSk7XG5cbiAgICAvLyBDcmVhdGluZyBhbmQgc29ydGluZyB0aGUgZGl2c1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGFpbmVyKVxuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QgPSAnaGVhZGVyLWNvbnRhaW5lcidcblxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5Db250YWluZXIuY2xhc3NOYW1lID0gJ21haW4tY29udGFpbmVyJ1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcilcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKVxuXG4gICAgY29uc3QgaG9tZVByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGhvbWVQcm9qZWN0c0RpdilcblxuICAgIGNvbnN0IGFsbFByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFsbFByb2plY3RzRGl2KVxuXG4gICAgY29uc3QgcHJvamVjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHByb2plY3RCb2R5LmNsYXNzTmFtZSA9ICdwcm9qZWN0LWJvZHknXG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Qm9keSlcblxuICAgIC8vIEhlYWRlciBDb250YWluZXJcbiAgICBjb25zdCBoZWFkZXJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgaGVhZGVyUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ015IEF3ZXNvbWUgVG8tRG8gTGlzdCBBcHAnXG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclBhcmFncmFwaClcblxuICAgIC8vIERpc3BsYXlzIHRoZSBzcGVjaWFsIHNpZGViYXIgZmlsdGVyc1xuICAgIC8vIEFsbCB0YXNrc1xuICAgIHRoaXMucmVuZGVyQWxsVGFza3NUYWIoaG9tZVByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSlcbiAgICB0aGlzLnJlbmRlclRhc2tzKHByb2plY3RCb2R5LCB0aGlzLnRvZG9MaXN0LmdldEFsbFRhc2tzKCksIFwiQWxsIFRhc2tzXCIpXG5cbiAgICAvLyBEaXNwbGF5aW5nIHRoZSBwcm9qZWN0cyBpbiB0aGUgc2lkZWJhclxuICAgIHRoaXMucmVuZGVyUHJvamVjdFRhYnMoYWxsUHJvamVjdHNEaXYsIHByb2plY3RCb2R5KVxuXG4gICAgLy8gQWRkIFByb2plY3QgQnV0dG9uXG4gICAgdGhpcy5jcmVhdGVBZGRQcm9qZWN0QnV0dG9uKHNpZGViYXIsIGFsbFByb2plY3RzRGl2LCBwcm9qZWN0Qm9keSlcbiAgfVxufSIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy50YXNrcyA9IFtdXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cbn0iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdXG4gIH1cbiAgY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpXG4gIH1cbiAgY3JlYXRlVGFzayhwcm9qZWN0SW5kZXgsIHRhc2tEZXRhaWxzKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHNbcHJvamVjdEluZGV4XVxuICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza0RldGFpbHMudGl0bGUsIHRhc2tEZXRhaWxzLmRlc2NyaXB0aW9uLCB0YXNrRGV0YWlscy5kdWVEYXRlLCB0YXNrRGV0YWlscy5wcmlvcml0eSlcbiAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhhdCBwcm9qZWN0IGRvZXNuJ3Qgc2VlbSB0byBleGlzdFwiKVxuICAgIH1cbiAgfVxuICBnZXRBbGxUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5mbGF0TWFwKHByb2plY3QgPT4gcHJvamVjdC50YXNrcylcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBEb21NYW5hZ2VyIGZyb20gJy4vZG9tJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuY29uc3QgZG9tTWFuYWdlciA9IG5ldyBEb21NYW5hZ2VyKClcbmRvbU1hbmFnZXIucmVuZGVyQWxsKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=