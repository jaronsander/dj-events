"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_URL\": () => (/* binding */ API_URL),\n/* harmony export */   \"NEXT_URL\": () => (/* binding */ NEXT_URL)\n/* harmony export */ });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || \"http://0.0.0.0:1337/api\";\nconst NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || \"http://localhost:3000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUIsSUFBSSx5QkFBeUI7QUFFNUUsTUFBTUMsUUFBUSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csd0JBQXdCLElBQUksdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGotZXZlbnRzLWZyb250ZW5kLy4vY29uZmlnL2luZGV4LmpzP2ExYmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vMC4wLjAuMDoxMzM3L2FwaSdcblxuZXhwb3J0IGNvbnN0IE5FWFRfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIk5FWFRfVVJMIiwiTkVYVF9QVUJMSUNfRlJPTlRFTkRfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/index.js\n");

/***/ }),

/***/ "(api)/./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ \"(api)/./config/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"GET\") {\n        if (!req.headers.cookie) {\n            res.status(403).json({\n                message: \"Not Authorized\"\n            });\n            return;\n        }\n        const { token  } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie);\n        const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/users/me`, {\n            method: \"GET\",\n            headers: {\n                Authorization: `Bearer ${token}`\n            }\n        });\n        const user = await strapiRes.json();\n        if (strapiRes.ok) {\n            res.status(200).json({\n                user\n            });\n        } else {\n            res.status(403).json({\n                message: \"User forbidden\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        res.status(405).json({\n            message: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJCO0FBQ2E7QUFFeEMsaUVBQWUsT0FBT0UsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxPQUFPLENBQUNMLE1BQU0sRUFBRTtZQUN2QkcsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLGdCQUFnQjthQUFFLENBQUM7WUFDbkQsT0FBTTtTQUNQO1FBRUQsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR1QsbURBQVksQ0FBQ0UsR0FBRyxDQUFDRyxPQUFPLENBQUNMLE1BQU0sQ0FBQztRQUVsRCxNQUFNVyxTQUFTLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsRUFBRVgsa0RBQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNuREcsTUFBTSxFQUFFLEtBQUs7WUFDYkMsT0FBTyxFQUFFO2dCQUNQUSxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUVKLEtBQUssQ0FBQyxDQUFDO2FBQ2pDO1NBQ0YsQ0FBQztRQUVGLE1BQU1LLElBQUksR0FBRyxNQUFNSCxTQUFTLENBQUNKLElBQUksRUFBRTtRQUVuQyxJQUFJSSxTQUFTLENBQUNJLEVBQUUsRUFBRTtZQUNoQlosR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRU8sSUFBSTthQUFFLENBQUM7U0FDL0IsTUFBTTtZQUNMWCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsZ0JBQWdCO2FBQUUsQ0FBQztTQUNwRDtLQUNGLE1BQU07UUFDTEwsR0FBRyxDQUFDYSxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQUMsS0FBSztTQUFDLENBQUM7UUFDL0JiLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFTixHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FBRSxDQUFDO0tBQ3RFO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9wYWdlcy9hcGkvdXNlci5qcz84YTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ05vdCBBdXRob3JpemVkJyB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gY29va2llLnBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSlcblxuICAgIGNvbnN0IHN0cmFwaVJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L3VzZXJzL21lYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICB9LFxuICAgIH0pXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgc3RyYXBpUmVzLmpzb24oKVxuXG4gICAgaWYgKHN0cmFwaVJlcy5vaykge1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgZm9yYmlkZGVuJyB9KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gbm90IGFsbG93ZWRgIH0pXG4gIH1cbn0iXSwibmFtZXMiOlsiY29va2llIiwiQVBJX1VSTCIsInJlcSIsInJlcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInRva2VuIiwicGFyc2UiLCJzdHJhcGlSZXMiLCJmZXRjaCIsIkF1dGhvcml6YXRpb24iLCJ1c2VyIiwib2siLCJzZXRIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user.js"));
module.exports = __webpack_exports__;

})();