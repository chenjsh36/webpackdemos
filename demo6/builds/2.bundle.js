webpackJsonp([2],{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jquery = __webpack_require__(9);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _mustache = __webpack_require__(10);\n\nvar _mustache2 = _interopRequireDefault(_mustache);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* injects from baggage-loader */\nvar template = __webpack_require__(15);\n__webpack_require__(16);\n\n// import template from './Header.html'\n// import './Header.scss'\n\nvar Header = function () {\n\tfunction Header() {\n\t\t_classCallCheck(this, Header);\n\t}\n\n\t_createClass(Header, [{\n\t\tkey: 'render',\n\t\tvalue: function render(node) {\n\t\t\tvar text = (0, _jquery2.default)(node).text();\n\t\t\t(0, _jquery2.default)(node).html(_mustache2.default.render(template, { text: text }));\n\t\t}\n\t}]);\n\n\treturn Header;\n}();\n\nexports.default = Header;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Components/Header.js\n ** module id = 14\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/Components/Header.js?");

/***/ },

/***/ 15:
/***/ function(module, exports) {

	eval("module.exports = \"<header class=\\\"header\\\">{{text}}</header>\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Components/Header.html\n ** module id = 15\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/Components/Header.html?");

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(17);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Header.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Header.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Components/Header.scss\n ** module id = 16\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/Components/Header.scss?");

/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(3)();\n// imports\n\n\n// module\nexports.push([module.id, \".header {\\n  font-size: 3rem; }\\n\", \"\"]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/sass-loader!./src/Components/Header.scss\n ** module id = 17\n ** module chunks = 2\n **/\n//# sourceURL=webpack:///./src/Components/Header.scss?./~/css-loader!./~/sass-loader");

/***/ }

});