/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./lib/animation.js */ \"./lib/animation.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9saWIvYW5pbWF0aW9uLmpzJztcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/animation.js":
/*!**************************!*\
  !*** ./lib/animation.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar canvas = document.getElementById('canvas');\nvar options = document.getElementById('options');\nvar option1 = options.option1,\n    option2 = options.option2,\n    option3 = options.option3,\n    option4 = options.option4;\n\n\nvar ctx = canvas.getContext('2d');\n\nvar t = 0;\nvar xCenter = 250;\nvar yCenter = 250;\nvar n = 400;\n\nvar strokeStyle1 = '#00ff7f';\nvar strokeStyle2 = '#FF1493';\n\nfunction figure(val1, val2, radius, strokeStyle, t) {\n\n  ctx.beginPath();\n\n  for (var i = 0; i < n; i++) {\n    var x = xCenter + (radius + val1 * Math.sin(t / 500 + 26 * i * Math.PI / n)) * Math.sin(i * val2 * Math.PI / n);\n    var y = yCenter + (radius + val1 * Math.sin(t / 500 + 26 * i * Math.PI / n)) * Math.cos(i * val2 * Math.PI / n);\n\n    ctx.lineTo(x, y);\n  }\n\n  ctx.closePath();\n  ctx.lineWidth = 2;\n  ctx.strokeStyle = strokeStyle;\n  ctx.stroke();\n}\n\nfunction draw(t) {\n\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  figure(option3.value, option1.value, 100, strokeStyle1, t);\n  figure(option4.value, option2.value, 50, strokeStyle2, t);\n\n  window.requestAnimationFrame(draw);\n}\n\ndraw(t);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYW5pbWF0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9saWIvYW5pbWF0aW9uLmpzPzY3NGYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbnZhciBvcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMnKTtcbnZhciB7b3B0aW9uMSxvcHRpb24yLCBvcHRpb24zLCBvcHRpb240fSA9IG9wdGlvbnM7XG5cbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIHQgPSAwO1xudmFyIHhDZW50ZXIgPSAyNTA7XG52YXIgeUNlbnRlciA9IDI1MDtcbnZhciBuID0gNDAwO1xuXG52YXIgc3Ryb2tlU3R5bGUxPSAnIzAwZmY3Zic7XG52YXIgc3Ryb2tlU3R5bGUyID0gJyNGRjE0OTMnO1xuXG5mdW5jdGlvbiBmaWd1cmUodmFsMSwgdmFsMiwgcmFkaXVzLCBzdHJva2VTdHlsZSx0KSB7XG5cbiAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpPG47IGkrKykge1xuICAgIHZhciB4ID0geENlbnRlciArIChyYWRpdXMgKyB2YWwxKk1hdGguc2luKHQvNTAwICsgMjYqaSpNYXRoLlBJL24pKSpNYXRoLnNpbihpKnZhbDIqTWF0aC5QSS9uKTtcbiAgICB2YXIgeSA9IHlDZW50ZXIgKyAocmFkaXVzICsgdmFsMSpNYXRoLnNpbih0LzUwMCArIDI2KmkqTWF0aC5QSS9uKSkqTWF0aC5jb3MoaSp2YWwyKk1hdGguUEkvbik7XG4gICAgXG4gICAgY3R4LmxpbmVUbyh4LHkpOyBcbiAgICBcbiAgfVxuXG4gIGN0eC5jbG9zZVBhdGgoKTsgXG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBjdHguc3Ryb2tlU3R5bGU9IHN0cm9rZVN0eWxlO1xuICBjdHguc3Ryb2tlKCk7XG5cbn1cblxuZnVuY3Rpb24gZHJhdyh0KSB7XG5cbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGZpZ3VyZShvcHRpb24zLnZhbHVlLCBvcHRpb24xLnZhbHVlLCAxMDAsIHN0cm9rZVN0eWxlMSx0KTtcbiAgZmlndXJlKG9wdGlvbjQudmFsdWUsIG9wdGlvbjIudmFsdWUsIDUwLCBzdHJva2VTdHlsZTIsdCk7XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcblxufVxuXG5kcmF3KHQpO1xuXG5cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/animation.js\n");

/***/ })

/******/ });