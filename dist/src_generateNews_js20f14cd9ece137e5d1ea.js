"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["src_generateNews_js"],{

/***/ "./src/displayNews.js":
/*!****************************!*\
  !*** ./src/displayNews.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function displayNews(data) {
  var news = document.getElementById("news");
  data.articles.forEach(function (article) {
    var title = article.title;
    var author = article.author;
    news.innerHTML += "<div class=article><p><a href=".concat(article.url, "> ").concat(title, " </a></p>\n                            <p>").concat(author);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNews);

/***/ }),

/***/ "./src/generateNews.js":
/*!*****************************!*\
  !*** ./src/generateNews.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayNews__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayNews */ "./src/displayNews.js");

function generateNews() {
  var API = "888955e4408b45a7aa5f2fcc638a5ac7";
  fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(API)).then(function (response) {
    return response.json();
  }).then(function (data) {
    (0,_displayNews__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateNews);

/***/ })

}]);
//# sourceMappingURL=src_generateNews_js20f14cd9ece137e5d1ea.js.map