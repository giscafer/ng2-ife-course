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
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding:0;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;\n  background-color: #eee;\n}\n.App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 80px;\n}\n\n.App-header {\n  position: absolute;\n  /*background: linear-gradient(90deg,#1192b9 10%,#a0d7f6 90%);*/\n  background: url(" + __webpack_require__(540) + ") center  center no-repeat;\n  background-size: 100% 100%;\n  height: 210px;\n  padding:20px 0;\n  width: 100%;\n  color: white;\n}\n\n.App-nav {\n  font-size: large;\n  margin-top:1em\n}\n@media screen and(max-width: 479px) {\n  /*.App-header {\n    width: auto;\n  }*/\n}\n\n@-webkit-keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n/**header style**/\n\nheader {\n  background-color: #333;\n  height: 50px;\n  margin-bottom: 0;\n  color: #ddd;\n}\n\n.nav {\n  list-style: none;\n  text-decoration: none;\n  margin-left: 6em;\n}\n\n@media screen and (max-width: 479px) {\n  .nav {\n    margin-left: -1.5em;\n  }\n}\n\n#navbar {\n  margin-bottom: 0\n}\n#logo-nav{\n  position: absolute;\n  width: 18em;\n  left:200px;\n\n}\n#logo {\n  font-size: 1.5em;\n  color: #1d976c\n}\n\n#forgot_password {\n  float: left\n}\n\n#nv-menu {\n  margin-right: 50px;\n  margin-top: 9px\n}\n\na {\n  text-decoration: none;\n}\n\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.navbar-header {\n  display: inline-block;\n  float: left;\n}\n\n.navbar-nav {\n  position: relative;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  height: 45px;\n  line-height: 45px;\n  clear: both;\n}\n\n.navbar-nav:before {\n  display: table;\n  content: \" \";\n}\n\n.navbar-nav:after {\n  display: table;\n  content: \" \";\n}\n\n.navbar-nav li {\n  float: left;\n  margin-left: 20px;\n}\n\n.navbar-nav li span {\n  cursor: pointer;\n}\n\n.navbar-nav li.selected {\n  height: 50px;\n  background-color: #5e5e5e;\n  padding: 0 10px;\n  border-bottom: 2px solid #fff;\n}\n\n.navbar-nav li span:hover {\n  color: #fff;\n}\n\n#bs-navbar span.btn {\n  display: none;\n  margin-left: 12em;\n  width: 200px;\n}\n\n/**\n * 响应式\n */\n@media screen and (max-width: 768px) {\n  #logo-nav {\n    width: 15em;\n    left: -25px;\n  }\n  #logo {\n    font-size: 1.2em;\n    color: #1d976c\n  }\n\n  #bs-navbar .navbar-nav {\n    display: none;\n    position: relative;\n    z-index: 1000;\n    width: 100%;\n  }\n\n  /*#bs-navbar span:hover ~ ul{*/\n  /*display: block;*/\n  /*}*/\n  #bs-navbar .navbar-nav li {\n    clear: both;\n    border-top: 1px solid #ddd;\n    background-color: #2d3e4d;\n    width: 100%;\n    margin: 0;\n  }\n\n  #bs-navbar span.btn {\n    display: inline;\n    line-height: 50px;\n  }\n\n  .menu-btn:hover ~ #bs-navbar .navbar-nav {\n    display: block;\n  }\n\n  #bs-navbar .navbar-nav li.selected {\n    padding: 0;\n    border: none;\n  }\n}\n\n@media screen and  (max-width: 1440px) and (min-width: 800px){\n  #logo-nav {\n    position: relative;\n    left: 0px;\n  }\n  .container {\n    width: 1170px;\n  }\n}\n\n@media screen and  (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n\n/*\n@media screen and  (min-width: 768px) {\n    .container {\n        width: 750px;\n    }\n}*/\n\n\n.main-container {\n  position: absolute;\n  margin:5px auto;\n  margin-bottom: 80px;\n  margin-top:250px;\n}\n@media screen and  (min-width: 1400px) {\n  .main-container {\n    min-width: 1170px;\n  }\n}\n\n@media screen and  (min-width: 1200px) {\n  .main-container {\n    min-width: 1170px;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .main-container {\n    min-width: 970px;\n  }\n}\n.good-column{ /* Safari */\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -moz-justify-content:center;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  /*    flex-direction:column;\n      -webkit-flex-direction:column;\n      -moz-flex-direction:column;*/\n  margin:2em 6em 6em 6em;\n  -ms-flex-wrap:wrap;\n      flex-wrap:wrap;\n  -webkit-flex-wrap:wrap;\n  -moz-flex-wrap:wrap;\n  background-color: #eee\n}\n.good-column .good{\n  position: relative;\n  width: 28em;\n  padding:2em 1em;\n  margin:1em;\n  cursor: pointer;\n  background-color: #fff;\n  box-shadow: 6px 6px 10px #999;\n}\n\n.good-column .good:hover {\n  /*background-color: #eee*/\n}\n\n\n\n.good-column .good .good-price{\n  margin:4px;\n  background-color:#eee;\n  color:red;\n  border-radius: 8px\n}\n.good-column .good .good-name a.detail{\n  background-color:#eee;\n  padding: 3px 8px;\n  border-radius: 3px;\n}\n.good-column .good .good-name a.detail:hover{\n  background-color:green;\n  color: #fff\n}\n.good-column .good .icon{\n  width: 22em;\n  height:13em;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.good-column .good .icon img{\n  width: 22em;\n  height:13em;\n}\n\n.good-column .good .icon img:hover{\n  transform: scale(1.3);\n  -webkit-transition: all 1s ease 0s;\n  transition: all 1s ease 0s;\n  -webkit-transform: scale(1.3);\n  -webkit-transform: all 1s ease 0s;\n}\n\n@media screen and (max-width:479px)  and (min-width: 375px){\n  .good-column{\n    -moz-justify-content:center;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n    margin:1em 0.53em 2em 0.3em;\n\n  }\n  .good-column .good{\n    position: relative;\n    width: 18em;\n    padding:2em 1em;\n    margin:1em;\n    cursor: pointer;\n    background-color: #fff;\n    box-shadow: 6px 6px 10px #999;\n  }\n  .good-column .good .icon{\n    width: 15em;\n    height:9.5em;\n    overflow: hidden;\n  }\n  /*.good-column .good .icon img{\n      width: 4em;\n      height:4em;\n      border-radius: 1em;\n  }\n  .good-column .good .good-price{\n      margin:4px;\n      font-size: 0.9em;\n      background-color:#eee;\n      color:red;\n      border-radius: 8px\n  }*/\n}\n@media screen and (max-width:400px){\n  .good-column{\n    -moz-justify-content:center;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n    margin:1em 0.53em 2em 0.3em;\n\n  }\n  .good-column .good{\n    position: relative;\n    width: 16em;\n    padding:1em 0.5em;\n    margin:1em;\n    cursor: pointer;\n    background-color: #fff;\n    box-shadow: 6px 6px 10px #999;\n  }\n  .good-column .good .icon{\n    width: 13em;\n    height:9.5em;\n    overflow: hidden;\n  }\n\n}\n", ""]);

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