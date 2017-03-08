webpackJsonp([2,4],{

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(512);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(539)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n* {\r\n  margin: 0;\r\n  padding:0;\r\n}\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;\r\n  background-color: #eee;\r\n}\r\n.App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  -webkit-animation: App-logo-spin infinite 20s linear;\r\n          animation: App-logo-spin infinite 20s linear;\r\n  height: 80px;\r\n}\r\n\r\n.App-header {\r\n  position: absolute;\r\n  /*background: linear-gradient(90deg,#1192b9 10%,#a0d7f6 90%);*/\r\n  background: url(" + __webpack_require__(540) + ") center  center no-repeat;\r\n  background-size: 100% 100%;\r\n  height: 210px;\r\n  padding:20px 0;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.App-nav {\r\n  font-size: large;\r\n  margin-top:1em\r\n}\r\n@media screen and(max-width: 479px) {\r\n  /*.App-header {\r\n    width: auto;\r\n  }*/\r\n}\r\n\r\n@-webkit-keyframes App-logo-spin {\r\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n/**header style**/\r\n\r\nheader {\r\n  background-color: #333;\r\n  height: 50px;\r\n  margin-bottom: 0;\r\n  color: #ddd;\r\n}\r\n\r\n.nav {\r\n  list-style: none;\r\n  text-decoration: none;\r\n  margin-left: 6em;\r\n}\r\n\r\n@media screen and (max-width: 479px) {\r\n  .nav {\r\n    margin-left: -1.5em;\r\n  }\r\n}\r\n\r\n#navbar {\r\n  margin-bottom: 0\r\n}\r\n#logo-nav{\r\n  position: absolute;\r\n  width: 18em;\r\n  left:200px;\r\n\r\n}\r\n#logo {\r\n  font-size: 1.5em;\r\n  color: #1d976c\r\n}\r\n\r\n#forgot_password {\r\n  float: left\r\n}\r\n\r\n#nv-menu {\r\n  margin-right: 50px;\r\n  margin-top: 9px\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-header {\r\n  display: inline-block;\r\n  float: left;\r\n}\r\n\r\n.navbar-nav {\r\n  position: relative;\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n  height: 45px;\r\n  line-height: 45px;\r\n  clear: both;\r\n}\r\n\r\n.navbar-nav:before {\r\n  display: table;\r\n  content: \" \";\r\n}\r\n\r\n.navbar-nav:after {\r\n  display: table;\r\n  content: \" \";\r\n}\r\n\r\n.navbar-nav li {\r\n  float: left;\r\n  margin-left: 20px;\r\n}\r\n\r\n.navbar-nav li span {\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar-nav li.selected {\r\n  height: 50px;\r\n  background-color: #5e5e5e;\r\n  padding: 0 10px;\r\n  border-bottom: 2px solid #fff;\r\n}\r\n\r\n.navbar-nav li span:hover {\r\n  color: #fff;\r\n}\r\n\r\n#bs-navbar span.btn {\r\n  display: none;\r\n  margin-left: 12em;\r\n  width: 200px;\r\n}\r\n\r\n/**\r\n * 响应式\r\n */\r\n@media screen and (max-width: 768px) {\r\n  #logo-nav {\r\n    width: 15em;\r\n    left: -25px;\r\n  }\r\n  #logo {\r\n    font-size: 1.2em;\r\n    color: #1d976c\r\n  }\r\n\r\n  #bs-navbar .navbar-nav {\r\n    display: none;\r\n    position: relative;\r\n    z-index: 1000;\r\n    width: 100%;\r\n  }\r\n\r\n  /*#bs-navbar span:hover ~ ul{*/\r\n  /*display: block;*/\r\n  /*}*/\r\n  #bs-navbar .navbar-nav li {\r\n    clear: both;\r\n    border-top: 1px solid #ddd;\r\n    background-color: #2d3e4d;\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n\r\n  #bs-navbar span.btn {\r\n    display: inline;\r\n    line-height: 50px;\r\n  }\r\n\r\n  .menu-btn:hover ~ #bs-navbar .navbar-nav {\r\n    display: block;\r\n  }\r\n\r\n  #bs-navbar .navbar-nav li.selected {\r\n    padding: 0;\r\n    border: none;\r\n  }\r\n}\r\n\r\n@media screen and  (max-width: 1440px) and (min-width: 800px){\r\n  #logo-nav {\r\n    position: relative;\r\n    left: 0px;\r\n  }\r\n  .container {\r\n    width: 1170px;\r\n  }\r\n}\r\n\r\n@media screen and  (min-width: 1200px) {\r\n  .container {\r\n    width: 1170px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .container {\r\n    width: 970px;\r\n  }\r\n}\r\n\r\n/*\r\n@media screen and  (min-width: 768px) {\r\n    .container {\r\n        width: 750px;\r\n    }\r\n}*/\r\n\r\n\r\n.main-container {\r\n  position: absolute;\r\n  margin:5px auto;\r\n  margin-bottom: 80px;\r\n  margin-top:250px;\r\n}\r\n@media screen and  (min-width: 1400px) {\r\n  .main-container {\r\n    min-width: 1170px;\r\n  }\r\n}\r\n\r\n@media screen and  (min-width: 1200px) {\r\n  .main-container {\r\n    min-width: 1170px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .main-container {\r\n    min-width: 970px;\r\n  }\r\n}\r\n.good-column{ /* Safari */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -moz-justify-content:center;\r\n  -webkit-box-pack:center;\r\n      -ms-flex-pack:center;\r\n          justify-content:center;\r\n  /*    flex-direction:column;\r\n      -webkit-flex-direction:column;\r\n      -moz-flex-direction:column;*/\r\n  margin:2em 6em 6em 6em;\r\n  -ms-flex-wrap:wrap;\r\n      flex-wrap:wrap;\r\n  -webkit-flex-wrap:wrap;\r\n  -moz-flex-wrap:wrap;\r\n  background-color: #eee\r\n}\r\n.good-column .good{\r\n  position: relative;\r\n  width: 28em;\r\n  padding:2em 1em;\r\n  margin:1em;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  box-shadow: 6px 6px 10px #999;\r\n}\r\n\r\n.good-column .good:hover {\r\n  /*background-color: #eee*/\r\n}\r\n\r\n\r\n\r\n.good-column .good .good-price{\r\n  margin:4px;\r\n  background-color:#eee;\r\n  color:red;\r\n  border-radius: 8px\r\n}\r\n.good-column .good .good-name a.detail{\r\n  background-color:#eee;\r\n  padding: 3px 8px;\r\n  border-radius: 3px;\r\n}\r\n.good-column .good .good-name a.detail:hover{\r\n  background-color:green;\r\n  color: #fff\r\n}\r\n.good-column .good .icon{\r\n  width: 22em;\r\n  height:13em;\r\n  overflow: hidden;\r\n  margin: 0 auto;\r\n}\r\n.good-column .good .icon img{\r\n  width: 22em;\r\n  height:13em;\r\n}\r\n\r\n.good-column .good .icon img:hover{\r\n  transform: scale(1.3);\r\n  -webkit-transition: all 1s ease 0s;\r\n  transition: all 1s ease 0s;\r\n  -webkit-transform: scale(1.3);\r\n  -webkit-transform: all 1s ease 0s;\r\n}\r\n\r\n@media screen and (max-width:479px)  and (min-width: 375px){\r\n  .good-column{\r\n    -moz-justify-content:center;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n    margin:1em 0.53em 2em 0.3em;\r\n\r\n  }\r\n  .good-column .good{\r\n    position: relative;\r\n    width: 18em;\r\n    padding:2em 1em;\r\n    margin:1em;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    box-shadow: 6px 6px 10px #999;\r\n  }\r\n  .good-column .good .icon{\r\n    width: 15em;\r\n    height:9.5em;\r\n    overflow: hidden;\r\n  }\r\n  /*.good-column .good .icon img{\r\n      width: 4em;\r\n      height:4em;\r\n      border-radius: 1em;\r\n  }\r\n  .good-column .good .good-price{\r\n      margin:4px;\r\n      font-size: 0.9em;\r\n      background-color:#eee;\r\n      color:red;\r\n      border-radius: 8px\r\n  }*/\r\n}\r\n@media screen and (max-width:400px){\r\n  .good-column{\r\n    -moz-justify-content:center;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n    margin:1em 0.53em 2em 0.3em;\r\n\r\n  }\r\n  .good-column .good{\r\n    position: relative;\r\n    width: 16em;\r\n    padding:1em 0.5em;\r\n    margin:1em;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    box-shadow: 6px 6px 10px #999;\r\n  }\r\n  .good-column .good .icon{\r\n    width: 13em;\r\n    height:9.5em;\r\n    overflow: hidden;\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 52:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 539:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner.93c4e1ba149fe03e93ae.jpg";

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ })

},[544]);
//# sourceMappingURL=styles.bundle.js.map