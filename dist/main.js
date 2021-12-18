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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/second */ \"./src/modules/second.js\");\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_second__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://ozonjs/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n    const btnCart = document.querySelector(\"#cart\");\r\n    const cartModal = document.querySelector(\".cart\");\r\n    const cartCloseBtn = document.querySelector(\".cart-close\");\r\n\r\n    const openCart = () => {\r\n        cartModal.style.display = 'flex'; //Что будет если тут будет группа селекторов?\r\n    };\r\n\r\n    const closeCart = () => {\r\n        cartModal.style.display = '';\r\n    };\r\n\r\n    btnCart.addEventListener(\"click\", openCart);\r\n    cartCloseBtn.addEventListener(\"click\", closeCart);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozonjs/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/second.js":
/*!*******************************!*\
  !*** ./src/modules/second.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _server_goodsActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/goodsActions */ \"./src/modules/server/goodsActions.js\");\n\r\n\r\nconst second = () => {\r\n    _server_goodsActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllRecords().then((data) => console.log(data));\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\n\n//# sourceURL=webpack://ozonjs/./src/modules/second.js?");

/***/ }),

/***/ "./src/modules/server/dbActions.js":
/*!*****************************************!*\
  !*** ./src/modules/server/dbActions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst dbActions = Object.freeze({\r\n    //Постфикс для firebase\r\n    urlPostFix: \".json\",\r\n\r\n    //Общие функции для обращения к серверу\r\n    get(baseUrl, id) {\r\n        if (id === undefined) {\r\n            id = \"\";\r\n        } else {\r\n            addLastSlash(baseUrl);\r\n        }\r\n\r\n        return fetch(`${baseUrl}${id}${this.urlPostFix}`)\r\n            .then((response) => response.json());\r\n    },\r\n\r\n    add(url, obj) {\r\n        return fetch(url + this.urlPostFix, {\r\n            method: \"POST\",\r\n            body: JSON.stringify(obj),\r\n            headers: {\r\n                'Content-type': 'application/json; charset=UTF-8'\r\n            }\r\n        }).then((response) => response.json());\r\n    },\r\n\r\n    delete(baseUrl, id) {\r\n        addLastSlash(baseUrl);\r\n        return fetch(`${baseUrl}${id}${this.urlPostFix}`, {\r\n            method: 'DELETE',\r\n        }).then((response) => response.json());\r\n    },\r\n\r\n    edit(baseUrl, id, data) {\r\n        addLastSlash(baseUrl);\r\n        return fetch(`${baseUrl}${id}${this.urlPostFix}`, {\r\n            method: 'PATCH',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                'Content-type': 'application/json; charset=UTF-8',\r\n            },\r\n        }).then((response) => response.json());\r\n    },\r\n});\r\n\r\n/**\r\n * Добавление \"/\" в конце {baseUrl}\r\n * @param {string} baseUrl \r\n * @returns изменённые baseUrl\r\n */\r\nfunction addLastSlash(baseUrl) {\r\n    return baseUrl.charAt(baseUrl.length - 1) !== \"/\" ? baseUrl + \"/\" : baseUrl;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbActions);\n\n//# sourceURL=webpack://ozonjs/./src/modules/server/dbActions.js?");

/***/ }),

/***/ "./src/modules/server/goodsActions.js":
/*!********************************************!*\
  !*** ./src/modules/server/goodsActions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dbActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dbActions */ \"./src/modules/server/dbActions.js\");\n\r\n\r\nconst goodsActions = Object.freeze({\r\n    baseUrl: \"https://o-zoneproject-default-rtdb.europe-west1.firebasedatabase.app/goods\",\r\n\r\n    //Получение всех записей\r\n    getAllRecords() {\r\n        return _dbActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(this.baseUrl);\r\n    },\r\n\r\n    //Получение одной записи по id\r\n    getRecord(id) {\r\n        return _dbActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(this.baseUrl, id);\r\n    },\r\n\r\n    //Добавление новой записи\r\n    addRecord(newRecord) {\r\n        return _dbActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(this.baseUrl, newRecord);\r\n    },\r\n\r\n    //Изменение существующей записи\r\n    patchRecord(id, data) {\r\n        return _dbActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].edit(this.baseUrl, id, data);\r\n    },\r\n\r\n    //Удаление существующей записи\r\n    deleteRecord(id) {\r\n        return _dbActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](this.baseUrl, id);\r\n    },\r\n\r\n    createLocalRecord(title, price, sale, img, hoverImg, category) {\r\n        return {\r\n            \"title\": title,\r\n            \"price\": price,\r\n            \"sale\": sale,\r\n            \"img\": img,\r\n            \"hoverImg\": hoverImg,\r\n            \"category\": category\r\n        };\r\n    }\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goodsActions);\n\n//# sourceURL=webpack://ozonjs/./src/modules/server/goodsActions.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;