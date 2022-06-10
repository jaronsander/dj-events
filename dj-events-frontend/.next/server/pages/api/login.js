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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
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

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config/index */ \"(api)/./config/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const { identifier , password  } = req.body;\n        const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__.API_URL}/auth/local`, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                identifier,\n                password\n            })\n        });\n        const data = await strapiRes.json();\n        console.log(data);\n        if (strapiRes.ok) {\n            // Set Cookie\n            res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", data.jwt, {\n                httpOnly: true,\n                secure: \"development\" !== \"development\",\n                maxAge: 60 * 60 * 24 * 7,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            res.status(200).json({\n                user: data.user\n            });\n        } else {\n            res.status(data.error.status).json({\n                message: data.error.message\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        res.status(405).json({\n            message: `Method ${req.method} not allowed`\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMyQjtBQUNhO0FBRXhDLGlFQUFlLE9BQU9FLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNLEVBQUVDLFVBQVUsR0FBRUMsUUFBUSxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtRQUV6QyxNQUFNQyxTQUFTLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsRUFBRVIsa0RBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyREcsTUFBTSxFQUFFLE1BQU07WUFDZE0sT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDREgsSUFBSSxFQUFFSSxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFDbkJQLFVBQVU7Z0JBQ1ZDLFFBQVE7YUFDVCxDQUFDO1NBQ0gsQ0FBQztRQUVGLE1BQU1PLElBQUksR0FBRyxNQUFNTCxTQUFTLENBQUNNLElBQUksRUFBRTtRQUNuQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztRQUNqQixJQUFJTCxTQUFTLENBQUNTLEVBQUUsRUFBRTtZQUNoQixhQUFhO1lBQ2JkLEdBQUcsQ0FBQ2UsU0FBUyxDQUNYLFlBQVksRUFDWmxCLHVEQUFnQixDQUFDLE9BQU8sRUFBRWEsSUFBSSxDQUFDTyxHQUFHLEVBQUU7Z0JBQ2xDQyxRQUFRLEVBQUUsSUFBSTtnQkFDZEMsTUFBTSxFQUFFQyxhQTNCTCxLQTJCOEIsYUFBYTtnQkFDOUNDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUN4QkMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCQyxJQUFJLEVBQUUsR0FBRzthQUNWLENBQUMsQ0FDSDtZQUVEdkIsR0FBRyxDQUFDd0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDYixJQUFJLENBQUM7Z0JBQUVjLElBQUksRUFBRWYsSUFBSSxDQUFDZSxJQUFJO2FBQUUsQ0FBQztTQUMxQyxNQUFNO1lBQ0x6QixHQUFHLENBQ0F3QixNQUFNLENBQUNkLElBQUksQ0FBQ2dCLEtBQUssQ0FBQ0YsTUFBTSxDQUFDLENBQ3pCYixJQUFJLENBQUM7Z0JBQUVnQixPQUFPLEVBQUVqQixJQUFJLENBQUNnQixLQUFLLENBQUNDLE9BQU87YUFBRSxDQUFDO1NBQ3pDO0tBQ0YsTUFBTTtRQUNMM0IsR0FBRyxDQUFDZSxTQUFTLENBQUMsT0FBTyxFQUFFO1lBQUMsTUFBTTtTQUFDLENBQUM7UUFDaENmLEdBQUcsQ0FBQ3dCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ2IsSUFBSSxDQUFDO1lBQUVnQixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUU1QixHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUM7U0FBRSxDQUFDO0tBQ3RFO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kai1ldmVudHMtZnJvbnRlbmQvLi9wYWdlcy9hcGkvbG9naW4uanM/YWU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBjb29raWUgZnJvbSAnY29va2llJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJ0AvY29uZmlnL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHsgaWRlbnRpZmllciwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XG5cbiAgICBjb25zdCBzdHJhcGlSZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hdXRoL2xvY2FsYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH0pXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgc3RyYXBpUmVzLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgaWYgKHN0cmFwaVJlcy5vaykge1xuICAgICAgLy8gU2V0IENvb2tpZVxuICAgICAgcmVzLnNldEhlYWRlcihcbiAgICAgICAgJ1NldC1Db29raWUnLFxuICAgICAgICBjb29raWUuc2VyaWFsaXplKCd0b2tlbicsIGRhdGEuand0LCB7XG4gICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyxcbiAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDcsIC8vIDEgd2Vla1xuICAgICAgICAgIHNhbWVTaXRlOiAnc3RyaWN0JyxcbiAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXNlcjogZGF0YS51c2VyIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc1xuICAgICAgICAuc3RhdHVzKGRhdGEuZXJyb3Iuc3RhdHVzKVxuICAgICAgICAuanNvbih7IG1lc3NhZ2U6IGRhdGEuZXJyb3IubWVzc2FnZSB9KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnUE9TVCddKVxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCB9KVxuICB9XG59Il0sIm5hbWVzIjpbImNvb2tpZSIsIkFQSV9VUkwiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpZGVudGlmaWVyIiwicGFzc3dvcmQiLCJib2R5Iiwic3RyYXBpUmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9rIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiand0IiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJwcm9jZXNzIiwibWF4QWdlIiwic2FtZVNpdGUiLCJwYXRoIiwic3RhdHVzIiwidXNlciIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();