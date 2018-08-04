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
eval("\n\nvar canvas = document.getElementById('canvas');\nvar options = document.getElementById('options');\nvar option1 = options.option1,\n    option2 = options.option2,\n    option3 = options.option3,\n    option4 = options.option4;\n\n\nvar ctx = canvas.getContext('2d');\n\nvar t = 0;\nvar radius = 100;\nvar xCenter = 250;\nvar yCenter = 250;\nvar n = 400;\n\nfunction path(t) {\n\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  ctx.beginPath();\n\n  for (var i = 0; i < n; i++) {\n    var x = xCenter + (radius + option3.value * Math.sin(t / 500 + 26 * i * Math.PI / n)) * Math.sin(i * option1.value * Math.PI / n);\n    var y = yCenter + (radius + option3.value * Math.sin(t / 500 + 26 * i * Math.PI / n)) * Math.cos(i * option1.value * Math.PI / n);\n\n    ctx.lineTo(x, y);\n  }\n\n  ctx.closePath();\n  ctx.lineWidth = 2;\n  ctx.strokeStyle = '#00ff7f';\n  ctx.stroke();\n\n  ctx.beginPath();\n\n  for (var i = 0; i < n; i++) {\n    var x = xCenter + (radius / 2 + option4.value * Math.sin(t / 500 + 26 * i * Math.PI / n)) * Math.sin(i * option2.value * Math.PI / n);\n    var y = yCenter + (radius / 2 + option4.value * Math.sin(t / 500 + 26 * i * Math.PI / n)) * Math.cos(i * option2.value * Math.PI / n);\n\n    ctx.lineTo(x, y);\n  }\n\n  ctx.closePath();\n  ctx.strokeStyle = '#FF1493';\n  ctx.stroke();\n\n  window.requestAnimationFrame(path);\n}\n\npath(t);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYW5pbWF0aW9uLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9saWIvYW5pbWF0aW9uLmpzPzY3NGYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbnZhciBvcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMnKTtcbnZhciB7b3B0aW9uMSxvcHRpb24yLCBvcHRpb24zLCBvcHRpb240fSA9IG9wdGlvbnM7XG5cbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIHQgPSAwO1xudmFyIHJhZGl1cyA9IDEwMDtcbnZhciB4Q2VudGVyID0gMjUwO1xudmFyIHlDZW50ZXIgPSAyNTA7XG52YXIgbiA9IDQwMDtcblxuZnVuY3Rpb24gcGF0aCh0KSB7XG5cbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGN0eC5iZWdpblBhdGgoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaTxuOyBpKyspIHtcbiAgICB2YXIgeCA9IHhDZW50ZXIgKyAocmFkaXVzICsgb3B0aW9uMy52YWx1ZSpNYXRoLnNpbih0LzUwMCArIDI2KmkqTWF0aC5QSS9uKSkqTWF0aC5zaW4oaSpvcHRpb24xLnZhbHVlKk1hdGguUEkvbik7XG4gICAgdmFyIHkgPSB5Q2VudGVyICsgKHJhZGl1cyArIG9wdGlvbjMudmFsdWUqTWF0aC5zaW4odC81MDAgKyAyNippKk1hdGguUEkvbikpKk1hdGguY29zKGkqb3B0aW9uMS52YWx1ZSpNYXRoLlBJL24pO1xuICAgIFxuICAgIGN0eC5saW5lVG8oeCx5KTsgXG4gIH1cblxuICBjdHguY2xvc2VQYXRoKCk7IFxuICBjdHgubGluZVdpZHRoID0gMjtcbiAgY3R4LnN0cm9rZVN0eWxlPSAnIzAwZmY3Zic7XG4gIGN0eC5zdHJva2UoKTtcbiAgXG5cbiAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpPG47IGkrKykge1xuICAgIHZhciB4ID0geENlbnRlciArIChyYWRpdXMvMiArIG9wdGlvbjQudmFsdWUqTWF0aC5zaW4odC81MDAgKyAyNippKk1hdGguUEkvbikpKk1hdGguc2luKGkqb3B0aW9uMi52YWx1ZSpNYXRoLlBJL24pO1xuICAgIHZhciB5ID0geUNlbnRlciArIChyYWRpdXMvMiArIG9wdGlvbjQudmFsdWUqTWF0aC5zaW4odC81MDAgKyAyNippKk1hdGguUEkvbikpKk1hdGguY29zKGkqb3B0aW9uMi52YWx1ZSpNYXRoLlBJL24pOyBcblxuICAgIGN0eC5saW5lVG8oeCx5KTtcblxuICB9XG5cbiAgY3R4LmNsb3NlUGF0aCgpOyBcbiAgY3R4LnN0cm9rZVN0eWxlPSAnI0ZGMTQ5Myc7XG4gIGN0eC5zdHJva2UoKTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHBhdGgpO1xuXG59XG5cbnBhdGgodCk7XG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/animation.js\n");

/***/ })

/******/ });