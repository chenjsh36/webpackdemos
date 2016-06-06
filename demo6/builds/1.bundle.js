webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jquery = __webpack_require__(9);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _Button = __webpack_require__(10);\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _mustache = __webpack_require__(11);\n\nvar _mustache2 = _interopRequireDefault(_mustache);\n\n__webpack_require__(12);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Button = function () {\n\tfunction Button(link) {\n\t\t_classCallCheck(this, Button);\n\n\t\tthis.link = link;\n\t}\n\n\t_createClass(Button, [{\n\t\tkey: 'onClick',\n\t\tvalue: function onClick(event) {\n\t\t\tevent.preventDefault();\n\t\t\talert(this.link);\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render(node) {\n\t\t\tvar text = (0, _jquery2.default)(node).text();\n\n\t\t\t(0, _jquery2.default)(node).html(_mustache2.default.render(_Button2.default, { text: text }));\n\n\t\t\t(0, _jquery2.default)('.button').click(this.onClick.bind(this));\n\t\t}\n\t}]);\n\n\treturn Button;\n}();\n\nexports.default = Button;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Components/Button.js\n ** module id = 8\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/Components/Button.js?");

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	eval("module.exports = \"<a href=\\\"{{link}}\\\" class=\\\"button\\\">{{text}}</a>\\r\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Components/Button.html\n ** module id = 10\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/Components/Button.html?");

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(13);\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(5)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Button.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Button.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/Components/Button.scss\n ** module id = 12\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/Components/Button.scss?");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("exports = module.exports = __webpack_require__(3)();\n// imports\n\n\n// module\nexports.push([module.id, \".button {\\n  background: tomato;\\n  color: white; }\\n\", \"\"]);\n\n// exports\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/css-loader!./~/sass-loader!./src/Components/Button.scss\n ** module id = 13\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./src/Components/Button.scss?./~/css-loader!./~/sass-loader");

/***/ }
]);