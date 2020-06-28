"use weex:vue";
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************************!*\
  !*** E:/work/gjtool-app/main.js?{"page":"pages%2Fvideo%2FsubNvue%2Fvideo"} ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_video_subNvue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/video/subNvue/video.nvue?mpType=page */ 4);\n\n        \n        \n        \n        _pages_video_subNvue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_video_subNvue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/video/subNvue/video'\n        _pages_video_subNvue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_video_subNvue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQXNFO0FBQ3RFLFFBQVEsbUZBQUc7QUFDWCxRQUFRLG1GQUFHO0FBQ1gsUUFBUSxtRkFBRztBQUNYLGdCQUFnQixtRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy92aWRlby9zdWJOdnVlL3ZpZGVvLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3ZpZGVvL3N1Yk52dWUvdmlkZW8nXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************************!*\
  !*** E:/work/gjtool-app/main.js?{"type":"appStyle"} ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************************************************!*\
  !*** E:/work/gjtool-app/App.vue?vue&type=style&index=0&lang=scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/gjtool-app/App.vue?vue&type=style&index=0&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-slider-handle": {
    "width": 0,
    "height": 0,
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "uni-slider-thumb": {
    "width": 0,
    "height": 0,
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "uni-slider-track": {
    "backgroundColor": "#999999"
  }
}

/***/ }),
/* 4 */
/*!*********************************************************************!*\
  !*** E:/work/gjtool-app/pages/video/subNvue/video.nvue?mpType=page ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_17ae07e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=17ae07e7&mpType=page */ 5);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_17ae07e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_17ae07e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"557f7e69\",\n  false,\n  _video_nvue_vue_type_template_id_17ae07e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/video/subNvue/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3YWUwN2U3Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjU1N2Y3ZTY5XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3ZpZGVvL3N1Yk52dWUvdmlkZW8ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************************************************************************************!*\
  !*** E:/work/gjtool-app/pages/video/subNvue/video.nvue?vue&type=template&id=17ae07e7&mpType=page ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_17ae07e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=17ae07e7&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_17ae07e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_17ae07e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_17ae07e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_17ae07e7_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/gjtool-app/pages/video/subNvue/video.nvue?vue&type=template&id=17ae07e7&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var recyclableRender = false
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("div", { staticClass: ["fullscreen"] })])
  }
]
render._withStripped = true



/***/ }),
/* 7 */
/*!*********************************************************************************************!*\
  !*** E:/work/gjtool-app/pages/video/subNvue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRkLENBQWdCLHFnQkFBRyxFQUFDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/gjtool-app/pages/video/subNvue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      num: 0,\n      loading: true,\n      detailData: {},\n      list: [],\n      obj: {},\n      name: '',\n      videoContext: null,\n      video_mask: null,\n      video_content: null,\n      videoshow: false,\n      webviewStyles: {\n        top: '64px',\n        height: '350upx',\n        backgroundColor: '#000000',\n        progress: {\n          color: 'green' } },\n\n\n      title: '影视详情',\n      buttons: null, //返回按钮图片\n      show: true,\n      // src:'',\n      webview: null,\n      webviewShow: true,\n      fanhui: null, //返回按钮\n      full: null, //满屏幕点击处理\n      statusBarHeight: 0,\n      screenWidth: 0,\n      screenHeight: 0,\n      time: '00:00',\n      titleShow: false,\n      boxHeight: '350px',\n      scrollHeight: '394upx',\n      scrollTop: '394upx',\n      pageTitle: null, //原生标题栏\n      timer: null,\n      titleButtonShowFlag: false,\n      pageIndex: 1,\n      h450: 0,\n      ipad: false,\n      isFullScreen: false,\n      isControllShow: true,\n      suo1: null,\n      suo2: null,\n      jiesuo: true,\n      full2: null,\n      suo1show: false, //锁定false\n      suo2show: false,\n      playTimer: null,\n      first: true,\n      currentWebview: null };\n\n  },\n  beforeCreate: function beforeCreate() {},\n  mounted: function mounted() {var _this = this;\n    var _t = this;\n    var resObj = uni.getSystemInfoSync();\n    this.statusBarHeight = resObj.statusBarHeight;\n    this.screenWidth = resObj.screenWidth;\n    this.screenHeight = resObj.screenHeight;\n    this.h450 = uni.upx2px(450);\n    if (this.screenWidth >= 768) {\n      this.ipad = true;\n      if (this.h450 != 460) {\n        this.h450 = 460;\n      }\n    } else {\n      if (this.h450 != 225) {\n        this.h450 = 225;\n      }\n    }\n    this.getTIme();\n\n    this.boxHeight = this.h450 + 'px';\n    // this.scrollHeight = 'calc(100% - ' + (44 + uni.getSystemInfoSync().statusBarHeight + this.h450) + 'px)';\n    // this.scrollTop = 44 + uni.getSystemInfoSync().statusBarHeight + this.h450 + 'px';\n\n    this.scrollHeight = 'calc(100% - ' + this.h450 + 'px)';\n    this.scrollTop = this.h450 + 'px';\n\n    var first = true;\n    // this.webview = currentWebview.children()[0];\n    //预加载本地文件\n    // this.webview.appendJsFile('../../static/js/uni.webview.1.5.2.js');\n\n    uni.showLoading({\n      title: '加载中…',\n      mask: true });\n\n\n    var currentWebview = plus.webview.currentWebview(); //获取当前页面的webview对象\n    this.currentWebview = currentWebview;\n    this.webview = plus.webview.create('/hybrid/html/index1.html', 'custom-webview', {\n      top: 0, //放置在titleNView下方。如果还想在webview上方加个地址栏的什么的，可以继续降低TOP值\n      cachemode: \"cacheElseNetwork\", //只要存在缓存（即使过期）数据则使用，否则从网络获取\n      hardwareAccelerated: true, //开启硬件加速\n      kernel: \"WKWebview\", //使用WKWebview内核\n      popGesture: 'none' });\n\n    this.currentWebview.append(this.webview);\n    this.webview.addEventListener('error', function () {\n      if (first) {\n        first = false;\n      }\n    });\n    this.webview.addEventListener(\n    'loaded',\n    function () {\n      uni.$emit('videoButtomShow');\n      _this.controllShow();\n    },\n    false);\n\n    uni.$on('videoLoad', function (data) {\n      __f__(\"log\", data, \" at pages/video/subNvue/video.nvue:123\");\n      setTimeout(function () {\n        _this.playNext(data);\n      }, 3000);\n    });\n    uni.$on('controllShow', function () {\n      _this.controllShow();\n    });\n    uni.$on('controllHide', function () {\n      _this.controllHide();\n    });\n    uni.$on('videoPlayNext', function (url) {\n      _this.playNext(url);\n    });\n    uni.$on('videoPlay', function (url) {\n      _this.videoPlay();\n    });\n    uni.$on('videoPause', function (url) {\n      _this.videoPause();\n    });\n    uni.$on('videoToggle', function (url) {\n      _this.videoToggle();\n    });\n    uni.$on('videomargin', function (url) {\n      // setTimeout(()=>{\n      // \tthis.webview.evalJS(`\n      // \t\t$(\"#a1\").find(\".dplayer-play-icon\").css({\n      // \t\t\t\"margin-right\":\"0px\"\n      // \t\t})\n      // \t`)\n      // },500)\n    });\n    // player.video.duration\n    // player.video.currentTime\n    uni.$on('videoPlaySeek', function (t) {\n      // this.webview.evalJS(`\n      // \tvar num = player.video.currentTime;\n      // \tvar num2 = parseInt(num)+parseInt(`+t+`);\n      // \tvar total = player.video.duration;\n      // \tif(num2>=total){\n      // \t\tnum2=total\n      // \t}else if(num2<=0){\n      // \t\tnum2=0\n      // \t}\n      // \tplayer.seek(num2)\n      // `)\n    });\n    uni.$on('videoPlayVol', function (t) {\n      // console.log(t)\n      // this.webview.evalJS(`\n      // \tplayer.volume(`+t+`, true, false);\n      // `)\n    });\n    uni.$on('webviewPause', function () {\n      // this.webview.pause()\n    });\n    uni.$on('webviewResume', function () {\n      // this.webview.resume()\n    });\n    uni.$on('videoFull', function () {\n      _this.webview.evalJS(\"\\n\\t\\t\\tvar playcontrol =  document.querySelector(\\\".video-js .vjs-play-control\\\");\\n\\t\\t\\tvar fullscreencontrol =  document.querySelector(\\\".video-js .vjs-fullscreen-control\\\");\\n\\t\\t\\tif(playcontrol){\\n\\t\\t\\t\\tplaycontrol.style.marginLeft = \\\"4em\\\";\\n\\t\\t\\t}\\n\\t\\t\\tif(fullscreencontrol){\\n\\t\\t\\t\\tfullscreencontrol.style.marginLeft = \\\"6em\\\";\\n\\t\\t\\t\\tfullscreencontrol.style.marginRight = \\\"5em\\\";\\n\\t\\t\\t}\\n\\t\\t\\t\");\n\n\n\n\n\n\n\n\n\n\n\n\n    });\n    uni.$on('videoNoFull', function () {\n      _this.webview.evalJS(\"\\n\\t\\t\\t\\tvar playcontrol =  document.querySelector(\\\".video-js .vjs-play-control\\\");\\n\\t\\t\\t\\tvar fullscreencontrol =  document.querySelector(\\\".video-js .vjs-fullscreen-control\\\");\\n\\t\\t\\t\\tif(playcontrol){\\n\\t\\t\\t\\t\\tplaycontrol.style.marginLeft = \\\"1em\\\";\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tif(fullscreencontrol){\\n\\t\\t\\t\\t\\tfullscreencontrol.style.marginLeft = \\\"0em\\\";\\n\\t\\t\\t\\t\\tfullscreencontrol.style.marginRight = \\\"1em\\\";\\n\\t\\t\\t\\t}\\n\\t\\t\\t\");\n\n\n\n\n\n\n\n\n\n\n\n\n    });\n    uni.$on('videoNoList', function () {\n      _this.webview.evalJS(\"\\n\\t\\t\\t\\tvar playcontrol =  document.querySelector(\\\".video-js .vjs-play-control\\\");\\n\\t\\t\\t\\tvar fullscreencontrol =  document.querySelector(\\\".video-js .vjs-fullscreen-control\\\");\\n\\t\\t\\t\\tif(playcontrol){\\n\\t\\t\\t\\t\\tplaycontrol.style.marginLeft = \\\"4em\\\";\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\tif(fullscreencontrol){\\n\\t\\t\\t\\t\\tfullscreencontrol.style.marginLeft = \\\"0em\\\";\\n\\t\\t\\t\\t\\tfullscreencontrol.style.marginRight = \\\"5em\\\";\\n\\t\\t\\t\\t}\\n\\t\\t\\t\");\n\n\n\n\n\n\n\n\n\n\n\n\n    });\n  },\n  destroyed: function destroyed() {\n    plus.screen.lockOrientation('portrait-primary');\n    clearInterval(this.timer);\n    clearInterval(this.playTimer);\n    uni.$off('controllShow');\n    uni.$off('controllHide');\n    uni.$off('videoPlay');\n    uni.$off('videoPause');\n    uni.$off('videoPlayNext');\n    uni.$off('videoToggle');\n    uni.$off('videomargin');\n    uni.$off('videoPlaySeek');\n    uni.$off('videoPlayVol');\n    uni.$off('webviewPause');\n    uni.$off('webviewResume');\n    uni.$off('videoLoad');\n    uni.$off('videoFull');\n    uni.$off('videoNoFull');\n    uni.$off('videoNoList');\n  },\n  methods: {\n    playNext: function playNext(url) {\n      uni.hideLoading();\n      this.webview.evalJS(\n      \"\\n\\t\\t\\t\\tplayer.src(\\\"\" +\n      url + \"\\\");\\n\\t\\t\\t\\tplayer.load(\\\"\" +\n      url + \"\\\")\\n\\t\\t\\t\\tplayer.play();\\n\\t\\t\\t\");\n\n\n\n    },\n    videoPlay: function videoPlay() {\n      this.webview.evalJS(\"\\n\\t\\t\\t\\tplayer.play();\\n\\t\\t\\t\");\n\n\n    },\n    videoPause: function videoPause() {\n      this.webview.evalJS(\"\\n\\t\\t\\t\\tplayer.pause()\\n\\t\\t\\t\");\n\n\n    },\n    videoToggle: function videoToggle() {\n      this.webview.evalJS('document.querySelector(\".video-js .vjs-play-control\").click()');\n    },\n    getSrc: function getSrc() {\n      var num = this.num;\n      num = parseFloat(num);\n      if (this.list.length == 0) {\n        return '';\n      }\n      var item = this.list[num];\n      var url = '';\n\n\n\n\n      url = item.m3u8url;\n\n      url = item.onlineurl;\n      // console.log(url);\n      return url;\n    },\n    getTIme: function getTIme() {\n      var date = new Date();\n      var hour = date.getHours();\n      var minute = date.getMinutes();\n      hour = hour <= 9 ? '0' + hour : hour;\n      minute = minute <= 9 ? '0' + minute : minute;\n      this.time = hour + ':' + minute;\n    },\n    parseH: function parseH(num) {\n      return uni.upx2px(num);\n    },\n    back: function back() {\n      uni.switchTab({\n        url: '/pages/home/home' });\n\n    },\n    imgError: function imgError(item) {\n      item.cover = '/static/404.jpg';\n    },\n    //视频控制栏显示\n    controllShow: function controllShow() {\n      this.isControllShow = true;\n      this.webview.evalJS(\"\\n\\t\\t\\t\\tvar controller =  document.querySelector(\\\".vjs-has-started .vjs-control-bar\\\");\\n\\t\\t\\t\\tif(controller){\\n\\t\\t\\t\\t\\tcontroller.style.opacity = 1;\\n\\t\\t\\t\\t\\tcontroller.style.visibility = \\\"visible\\\";\\n\\t\\t\\t\\t\\tcontroller.style.transform = \\\"visibility 0s,opacity 0s\\\";\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t\");\n\n\n\n\n\n\n\n    },\n    //视频控制栏隐藏\n    controllHide: function controllHide() {\n      this.isControllShow = false;\n      this.webview.evalJS(\"\\n\\t\\t\\t\\tvar controller =  document.querySelector(\\\".vjs-has-started .vjs-control-bar\\\");\\n\\t\\t\\t\\tif(controller){\\n\\t\\t\\t\\t\\tcontroller.style.opacity = 0;\\n\\t\\t\\t\\t\\tcontroller.style.visibility = \\\"visible\\\";\\n\\t\\t\\t\\t\\tcontroller.style.transform = \\\"visibility 0s,opacity 0s\\\";\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\t\");\n\n\n\n\n\n\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW8vc3ViTnZ1ZS92aWRlby5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxZQURBO0FBRUEsbUJBRkE7QUFHQSxvQkFIQTtBQUlBLGNBSkE7QUFLQSxhQUxBO0FBTUEsY0FOQTtBQU9BLHdCQVBBO0FBUUEsc0JBUkE7QUFTQSx5QkFUQTtBQVVBLHNCQVZBO0FBV0E7QUFDQSxtQkFEQTtBQUVBLHdCQUZBO0FBR0Esa0NBSEE7QUFJQTtBQUNBLHdCQURBLEVBSkEsRUFYQTs7O0FBbUJBLG1CQW5CQTtBQW9CQSxtQkFwQkEsRUFvQkE7QUFDQSxnQkFyQkE7QUFzQkE7QUFDQSxtQkF2QkE7QUF3QkEsdUJBeEJBO0FBeUJBLGtCQXpCQSxFQXlCQTtBQUNBLGdCQTFCQSxFQTBCQTtBQUNBLHdCQTNCQTtBQTRCQSxvQkE1QkE7QUE2QkEscUJBN0JBO0FBOEJBLG1CQTlCQTtBQStCQSxzQkEvQkE7QUFnQ0Esd0JBaENBO0FBaUNBLDRCQWpDQTtBQWtDQSx5QkFsQ0E7QUFtQ0EscUJBbkNBLEVBbUNBO0FBQ0EsaUJBcENBO0FBcUNBLGdDQXJDQTtBQXNDQSxrQkF0Q0E7QUF1Q0EsYUF2Q0E7QUF3Q0EsaUJBeENBO0FBeUNBLHlCQXpDQTtBQTBDQSwwQkExQ0E7QUEyQ0EsZ0JBM0NBO0FBNENBLGdCQTVDQTtBQTZDQSxrQkE3Q0E7QUE4Q0EsaUJBOUNBO0FBK0NBLHFCQS9DQSxFQStDQTtBQUNBLHFCQWhEQTtBQWlEQSxxQkFqREE7QUFrREEsaUJBbERBO0FBbURBLDBCQW5EQTs7QUFxREEsR0F2REE7QUF3REEsY0F4REEsMEJBd0RBLEVBeERBO0FBeURBLFNBekRBLHFCQXlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBREE7QUFFQSxnQkFGQTs7O0FBS0EsdURBcENBLENBb0NBO0FBQ0E7QUFDQTtBQUNBLFlBREEsRUFDQTtBQUNBLG1DQUZBLEVBRUE7QUFDQSwrQkFIQSxFQUdBO0FBQ0EseUJBSkEsRUFJQTtBQUNBLHdCQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBS0E7QUFDQSxZQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FMQTtBQU1BLFNBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsSUFGQTtBQUdBLEtBTEE7QUFNQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFNQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBLEtBZEE7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUEsS0FkQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQWRBO0FBZUEsR0E3TkE7QUE4TkEsV0E5TkEsdUJBOE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FqUEE7QUFrUEE7QUFDQSxZQURBLG9CQUNBLEdBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBREE7QUFFQSxTQUZBLHdDQURBOzs7O0FBT0EsS0FWQTtBQVdBLGFBWEEsdUJBV0E7QUFDQTs7O0FBR0EsS0FmQTtBQWdCQSxjQWhCQSx3QkFnQkE7QUFDQTs7O0FBR0EsS0FwQkE7QUFxQkEsZUFyQkEseUJBcUJBO0FBQ0E7QUFDQSxLQXZCQTtBQXdCQSxVQXhCQSxvQkF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXpDQTtBQTBDQSxXQTFDQSxxQkEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWpEQTtBQWtEQSxVQWxEQSxrQkFrREEsR0FsREEsRUFrREE7QUFDQTtBQUNBLEtBcERBO0FBcURBLFFBckRBLGtCQXFEQTtBQUNBO0FBQ0EsK0JBREE7O0FBR0EsS0F6REE7QUEwREEsWUExREEsb0JBMERBLElBMURBLEVBMERBO0FBQ0E7QUFDQSxLQTVEQTtBQTZEQTtBQUNBLGdCQTlEQSwwQkE4REE7QUFDQTtBQUNBOzs7Ozs7OztBQVFBLEtBeEVBO0FBeUVBO0FBQ0EsZ0JBMUVBLDBCQTBFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUEsS0FwRkEsRUFsUEEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PjxkaXYgY2xhc3M9XCJmdWxsc2NyZWVuXCI+PC9kaXY+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRudW06IDAsXG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZGV0YWlsRGF0YToge30sXG5cdFx0XHRsaXN0OiBbXSxcblx0XHRcdG9iajoge30sXG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdHZpZGVvQ29udGV4dDogbnVsbCxcblx0XHRcdHZpZGVvX21hc2s6IG51bGwsXG5cdFx0XHR2aWRlb19jb250ZW50OiBudWxsLFxuXHRcdFx0dmlkZW9zaG93OiBmYWxzZSxcblx0XHRcdHdlYnZpZXdTdHlsZXM6IHtcblx0XHRcdFx0dG9wOiAnNjRweCcsXG5cdFx0XHRcdGhlaWdodDogJzM1MHVweCcsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxuXHRcdFx0XHRwcm9ncmVzczoge1xuXHRcdFx0XHRcdGNvbG9yOiAnZ3JlZW4nXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0aXRsZTogJ+W9seinhuivpuaDhScsXG5cdFx0XHRidXR0b25zOiBudWxsLCAvL+i/lOWbnuaMiemSruWbvueJh1xuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdC8vIHNyYzonJyxcblx0XHRcdHdlYnZpZXc6IG51bGwsXG5cdFx0XHR3ZWJ2aWV3U2hvdzogdHJ1ZSxcblx0XHRcdGZhbmh1aTogbnVsbCwgLy/ov5Tlm57mjInpkq5cblx0XHRcdGZ1bGw6IG51bGwsIC8v5ruh5bGP5bmV54K55Ye75aSE55CGXG5cdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsXG5cdFx0XHRzY3JlZW5XaWR0aDogMCxcblx0XHRcdHNjcmVlbkhlaWdodDogMCxcblx0XHRcdHRpbWU6ICcwMDowMCcsXG5cdFx0XHR0aXRsZVNob3c6IGZhbHNlLFxuXHRcdFx0Ym94SGVpZ2h0OiAnMzUwcHgnLFxuXHRcdFx0c2Nyb2xsSGVpZ2h0OiAnMzk0dXB4Jyxcblx0XHRcdHNjcm9sbFRvcDogJzM5NHVweCcsXG5cdFx0XHRwYWdlVGl0bGU6IG51bGwsIC8v5Y6f55Sf5qCH6aKY5qCPXG5cdFx0XHR0aW1lcjogbnVsbCxcblx0XHRcdHRpdGxlQnV0dG9uU2hvd0ZsYWc6IGZhbHNlLFxuXHRcdFx0cGFnZUluZGV4OiAxLFxuXHRcdFx0aDQ1MDogMCxcblx0XHRcdGlwYWQ6IGZhbHNlLFxuXHRcdFx0aXNGdWxsU2NyZWVuOiBmYWxzZSxcblx0XHRcdGlzQ29udHJvbGxTaG93OiB0cnVlLFxuXHRcdFx0c3VvMTogbnVsbCxcblx0XHRcdHN1bzI6IG51bGwsXG5cdFx0XHRqaWVzdW86IHRydWUsXG5cdFx0XHRmdWxsMjogbnVsbCxcblx0XHRcdHN1bzFzaG93OiBmYWxzZSwgLy/plIHlrppmYWxzZVxuXHRcdFx0c3VvMnNob3c6IGZhbHNlLFxuXHRcdFx0cGxheVRpbWVyOiBudWxsLFxuXHRcdFx0Zmlyc3Q6IHRydWUsXG5cdFx0XHRjdXJyZW50V2VidmlldzogbnVsbFxuXHRcdH07XG5cdH0sXG5cdGJlZm9yZUNyZWF0ZSgpIHt9LFxuXHRtb3VudGVkKCkge1xuXHRcdGxldCBfdCA9IHRoaXM7XG5cdFx0bGV0IHJlc09iaiA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuXHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcmVzT2JqLnN0YXR1c0JhckhlaWdodDtcblx0XHR0aGlzLnNjcmVlbldpZHRoID0gcmVzT2JqLnNjcmVlbldpZHRoO1xuXHRcdHRoaXMuc2NyZWVuSGVpZ2h0ID0gcmVzT2JqLnNjcmVlbkhlaWdodDtcblx0XHR0aGlzLmg0NTAgPSB1bmkudXB4MnB4KDQ1MCk7XG5cdFx0aWYgKHRoaXMuc2NyZWVuV2lkdGggPj0gNzY4KSB7XG5cdFx0XHR0aGlzLmlwYWQgPSB0cnVlO1xuXHRcdFx0aWYgKHRoaXMuaDQ1MCAhPSA0NjApIHtcblx0XHRcdFx0dGhpcy5oNDUwID0gNDYwO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5oNDUwICE9IDIyNSkge1xuXHRcdFx0XHR0aGlzLmg0NTAgPSAyMjU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuZ2V0VEltZSgpO1xuXG5cdFx0dGhpcy5ib3hIZWlnaHQgPSB0aGlzLmg0NTAgKyAncHgnO1xuXHRcdC8vIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gJ2NhbGMoMTAwJSAtICcgKyAoNDQgKyB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQgKyB0aGlzLmg0NTApICsgJ3B4KSc7XG5cdFx0Ly8gdGhpcy5zY3JvbGxUb3AgPSA0NCArIHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodCArIHRoaXMuaDQ1MCArICdweCc7XG5cblx0XHR0aGlzLnNjcm9sbEhlaWdodCA9ICdjYWxjKDEwMCUgLSAnICsgdGhpcy5oNDUwICsgJ3B4KSc7XG5cdFx0dGhpcy5zY3JvbGxUb3AgPSB0aGlzLmg0NTAgKyAncHgnO1xuXG5cdFx0bGV0IGZpcnN0ID0gdHJ1ZTtcblx0XHQvLyB0aGlzLndlYnZpZXcgPSBjdXJyZW50V2Vidmlldy5jaGlsZHJlbigpWzBdO1xuXHRcdC8v6aKE5Yqg6L295pys5Zyw5paH5Lu2XG5cdFx0Ly8gdGhpcy53ZWJ2aWV3LmFwcGVuZEpzRmlsZSgnLi4vLi4vc3RhdGljL2pzL3VuaS53ZWJ2aWV3LjEuNS4yLmpzJyk7XG5cblx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0dGl0bGU6ICfliqDovb3kuK3igKYnLFxuXHRcdFx0bWFzazogdHJ1ZVxuXHRcdH0pO1xuXG5cdFx0bGV0IGN1cnJlbnRXZWJ2aWV3ID0gcGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCk7IC8v6I635Y+W5b2T5YmN6aG16Z2i55qEd2Vidmlld+WvueixoVxuXHRcdHRoaXMuY3VycmVudFdlYnZpZXcgPSBjdXJyZW50V2Vidmlldztcblx0XHR0aGlzLndlYnZpZXcgPSBwbHVzLndlYnZpZXcuY3JlYXRlKCcvaHlicmlkL2h0bWwvaW5kZXgxLmh0bWwnLCAnY3VzdG9tLXdlYnZpZXcnLCB7XG5cdFx0XHR0b3A6IDAsIC8v5pS+572u5ZyodGl0bGVOVmlld+S4i+aWueOAguWmguaenOi/mOaDs+WcqHdlYnZpZXfkuIrmlrnliqDkuKrlnLDlnYDmoI/nmoTku4DkuYjnmoTvvIzlj6/ku6Xnu6fnu63pmY3kvY5UT1DlgLxcblx0XHRcdGNhY2hlbW9kZTpcImNhY2hlRWxzZU5ldHdvcmtcIiwvL+WPquimgeWtmOWcqOe8k+WtmO+8iOWNs+S9v+i/h+acn++8ieaVsOaNruWImeS9v+eUqO+8jOWQpuWImeS7jue9kee7nOiOt+WPllxuXHRcdFx0aGFyZHdhcmVBY2NlbGVyYXRlZDp0cnVlLC8v5byA5ZCv56Gs5Lu25Yqg6YCfXG5cdFx0XHRrZXJuZWw6XCJXS1dlYnZpZXdcIiwvL+S9v+eUqFdLV2Vidmlld+WGheaguFxuXHRcdFx0cG9wR2VzdHVyZTogJ25vbmUnXG5cdFx0fSk7XG5cdFx0dGhpcy5jdXJyZW50V2Vidmlldy5hcHBlbmQodGhpcy53ZWJ2aWV3KTtcblx0XHR0aGlzLndlYnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG5cdFx0XHRpZiAoZmlyc3QpIHtcblx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLndlYnZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdsb2FkZWQnLFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHR1bmkuJGVtaXQoJ3ZpZGVvQnV0dG9tU2hvdycpO1xuXHRcdFx0XHR0aGlzLmNvbnRyb2xsU2hvdygpO1xuXHRcdFx0fSxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0XHR1bmkuJG9uKCd2aWRlb0xvYWQnLCBkYXRhID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXG5cdFx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdHRoaXMucGxheU5leHQoZGF0YSk7XG5cdFx0XHR9LDMwMDApXG5cdFx0fSk7XG5cdFx0dW5pLiRvbignY29udHJvbGxTaG93JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5jb250cm9sbFNob3coKTtcblx0XHR9KTtcblx0XHR1bmkuJG9uKCdjb250cm9sbEhpZGUnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNvbnRyb2xsSGlkZSgpO1xuXHRcdH0pO1xuXHRcdHVuaS4kb24oJ3ZpZGVvUGxheU5leHQnLCB1cmwgPT4ge1xuXHRcdFx0dGhpcy5wbGF5TmV4dCh1cmwpO1xuXHRcdH0pO1xuXHRcdHVuaS4kb24oJ3ZpZGVvUGxheScsIHVybCA9PiB7XG5cdFx0XHR0aGlzLnZpZGVvUGxheSgpO1xuXHRcdH0pO1xuXHRcdHVuaS4kb24oJ3ZpZGVvUGF1c2UnLCB1cmwgPT4ge1xuXHRcdFx0dGhpcy52aWRlb1BhdXNlKCk7XG5cdFx0fSk7XG5cdFx0dW5pLiRvbigndmlkZW9Ub2dnbGUnLCB1cmwgPT4ge1xuXHRcdFx0dGhpcy52aWRlb1RvZ2dsZSgpO1xuXHRcdH0pO1xuXHRcdHVuaS4kb24oJ3ZpZGVvbWFyZ2luJywgdXJsID0+IHtcblx0XHRcdC8vIHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdC8vIFx0dGhpcy53ZWJ2aWV3LmV2YWxKUyhgXG5cdFx0XHQvLyBcdFx0JChcIiNhMVwiKS5maW5kKFwiLmRwbGF5ZXItcGxheS1pY29uXCIpLmNzcyh7XG5cdFx0XHQvLyBcdFx0XHRcIm1hcmdpbi1yaWdodFwiOlwiMHB4XCJcblx0XHRcdC8vIFx0XHR9KVxuXHRcdFx0Ly8gXHRgKVxuXHRcdFx0Ly8gfSw1MDApXG5cdFx0fSk7XG5cdFx0Ly8gcGxheWVyLnZpZGVvLmR1cmF0aW9uXG5cdFx0Ly8gcGxheWVyLnZpZGVvLmN1cnJlbnRUaW1lXG5cdFx0dW5pLiRvbigndmlkZW9QbGF5U2VlaycsIHQgPT4ge1xuXHRcdFx0Ly8gdGhpcy53ZWJ2aWV3LmV2YWxKUyhgXG5cdFx0XHQvLyBcdHZhciBudW0gPSBwbGF5ZXIudmlkZW8uY3VycmVudFRpbWU7XG5cdFx0XHQvLyBcdHZhciBudW0yID0gcGFyc2VJbnQobnVtKStwYXJzZUludChgK3QrYCk7XG5cdFx0XHQvLyBcdHZhciB0b3RhbCA9IHBsYXllci52aWRlby5kdXJhdGlvbjtcblx0XHRcdC8vIFx0aWYobnVtMj49dG90YWwpe1xuXHRcdFx0Ly8gXHRcdG51bTI9dG90YWxcblx0XHRcdC8vIFx0fWVsc2UgaWYobnVtMjw9MCl7XG5cdFx0XHQvLyBcdFx0bnVtMj0wXG5cdFx0XHQvLyBcdH1cblx0XHRcdC8vIFx0cGxheWVyLnNlZWsobnVtMilcblx0XHRcdC8vIGApXG5cdFx0fSk7XG5cdFx0dW5pLiRvbigndmlkZW9QbGF5Vm9sJywgdCA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0KVxuXHRcdFx0Ly8gdGhpcy53ZWJ2aWV3LmV2YWxKUyhgXG5cdFx0XHQvLyBcdHBsYXllci52b2x1bWUoYCt0K2AsIHRydWUsIGZhbHNlKTtcblx0XHRcdC8vIGApXG5cdFx0fSk7XG5cdFx0dW5pLiRvbignd2Vidmlld1BhdXNlJywgKCkgPT4ge1xuXHRcdFx0Ly8gdGhpcy53ZWJ2aWV3LnBhdXNlKClcblx0XHR9KTtcblx0XHR1bmkuJG9uKCd3ZWJ2aWV3UmVzdW1lJywgKCkgPT4ge1xuXHRcdFx0Ly8gdGhpcy53ZWJ2aWV3LnJlc3VtZSgpXG5cdFx0fSk7XG5cdFx0dW5pLiRvbigndmlkZW9GdWxsJywgKCkgPT4ge1xuXHRcdFx0dGhpcy53ZWJ2aWV3LmV2YWxKUyhcblx0XHRcdFx0YFxuXHRcdFx0dmFyIHBsYXljb250cm9sID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tanMgLnZqcy1wbGF5LWNvbnRyb2xcIik7XG5cdFx0XHR2YXIgZnVsbHNjcmVlbmNvbnRyb2wgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1qcyAudmpzLWZ1bGxzY3JlZW4tY29udHJvbFwiKTtcblx0XHRcdGlmKHBsYXljb250cm9sKXtcblx0XHRcdFx0cGxheWNvbnRyb2wuc3R5bGUubWFyZ2luTGVmdCA9IFwiNGVtXCI7XG5cdFx0XHR9XG5cdFx0XHRpZihmdWxsc2NyZWVuY29udHJvbCl7XG5cdFx0XHRcdGZ1bGxzY3JlZW5jb250cm9sLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjZlbVwiO1xuXHRcdFx0XHRmdWxsc2NyZWVuY29udHJvbC5zdHlsZS5tYXJnaW5SaWdodCA9IFwiNWVtXCI7XG5cdFx0XHR9XG5cdFx0XHRgXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdHVuaS4kb24oJ3ZpZGVvTm9GdWxsJywgKCkgPT4ge1xuXHRcdFx0dGhpcy53ZWJ2aWV3LmV2YWxKUyhcblx0XHRcdFx0YFxuXHRcdFx0XHR2YXIgcGxheWNvbnRyb2wgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1qcyAudmpzLXBsYXktY29udHJvbFwiKTtcblx0XHRcdFx0dmFyIGZ1bGxzY3JlZW5jb250cm9sID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tanMgLnZqcy1mdWxsc2NyZWVuLWNvbnRyb2xcIik7XG5cdFx0XHRcdGlmKHBsYXljb250cm9sKXtcblx0XHRcdFx0XHRwbGF5Y29udHJvbC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxZW1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihmdWxsc2NyZWVuY29udHJvbCl7XG5cdFx0XHRcdFx0ZnVsbHNjcmVlbmNvbnRyb2wuc3R5bGUubWFyZ2luTGVmdCA9IFwiMGVtXCI7XG5cdFx0XHRcdFx0ZnVsbHNjcmVlbmNvbnRyb2wuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjFlbVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRgXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHRcdHVuaS4kb24oJ3ZpZGVvTm9MaXN0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy53ZWJ2aWV3LmV2YWxKUyhcblx0XHRcdFx0YFxuXHRcdFx0XHR2YXIgcGxheWNvbnRyb2wgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlby1qcyAudmpzLXBsYXktY29udHJvbFwiKTtcblx0XHRcdFx0dmFyIGZ1bGxzY3JlZW5jb250cm9sID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tanMgLnZqcy1mdWxsc2NyZWVuLWNvbnRyb2xcIik7XG5cdFx0XHRcdGlmKHBsYXljb250cm9sKXtcblx0XHRcdFx0XHRwbGF5Y29udHJvbC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI0ZW1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZihmdWxsc2NyZWVuY29udHJvbCl7XG5cdFx0XHRcdFx0ZnVsbHNjcmVlbmNvbnRyb2wuc3R5bGUubWFyZ2luTGVmdCA9IFwiMGVtXCI7XG5cdFx0XHRcdFx0ZnVsbHNjcmVlbmNvbnRyb2wuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjVlbVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRgXG5cdFx0XHQpO1xuXHRcdH0pO1xuXHR9LFxuXHRkZXN0cm95ZWQoKSB7XG5cdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdwb3J0cmFpdC1wcmltYXJ5Jyk7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcblx0XHRjbGVhckludGVydmFsKHRoaXMucGxheVRpbWVyKTtcblx0XHR1bmkuJG9mZignY29udHJvbGxTaG93Jyk7XG5cdFx0dW5pLiRvZmYoJ2NvbnRyb2xsSGlkZScpO1xuXHRcdHVuaS4kb2ZmKCd2aWRlb1BsYXknKTtcblx0XHR1bmkuJG9mZigndmlkZW9QYXVzZScpO1xuXHRcdHVuaS4kb2ZmKCd2aWRlb1BsYXlOZXh0Jyk7XG5cdFx0dW5pLiRvZmYoJ3ZpZGVvVG9nZ2xlJyk7XG5cdFx0dW5pLiRvZmYoJ3ZpZGVvbWFyZ2luJyk7XG5cdFx0dW5pLiRvZmYoJ3ZpZGVvUGxheVNlZWsnKTtcblx0XHR1bmkuJG9mZigndmlkZW9QbGF5Vm9sJyk7XG5cdFx0dW5pLiRvZmYoJ3dlYnZpZXdQYXVzZScpO1xuXHRcdHVuaS4kb2ZmKCd3ZWJ2aWV3UmVzdW1lJyk7XG5cdFx0dW5pLiRvZmYoJ3ZpZGVvTG9hZCcpO1xuXHRcdHVuaS4kb2ZmKCd2aWRlb0Z1bGwnKTtcblx0XHR1bmkuJG9mZigndmlkZW9Ob0Z1bGwnKTtcblx0XHR1bmkuJG9mZigndmlkZW9Ob0xpc3QnKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdHBsYXlOZXh0KHVybCkge1xuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHR0aGlzLndlYnZpZXcuZXZhbEpTKFxuXHRcdFx0XHRgXG5cdFx0XHRcdHBsYXllci5zcmMoXCJgK3VybCtgXCIpO1xuXHRcdFx0XHRwbGF5ZXIubG9hZChcImArdXJsK2BcIilcblx0XHRcdFx0cGxheWVyLnBsYXkoKTtcblx0XHRcdGBcblx0XHRcdCk7XG5cdFx0fSxcblx0XHR2aWRlb1BsYXkoKSB7XG5cdFx0XHR0aGlzLndlYnZpZXcuZXZhbEpTKGBcblx0XHRcdFx0cGxheWVyLnBsYXkoKTtcblx0XHRcdGApO1xuXHRcdH0sXG5cdFx0dmlkZW9QYXVzZSgpIHtcblx0XHRcdHRoaXMud2Vidmlldy5ldmFsSlMoYFxuXHRcdFx0XHRwbGF5ZXIucGF1c2UoKVxuXHRcdFx0YCk7XG5cdFx0fSxcblx0XHR2aWRlb1RvZ2dsZSgpIHtcblx0XHRcdHRoaXMud2Vidmlldy5ldmFsSlMoJ2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tanMgLnZqcy1wbGF5LWNvbnRyb2xcIikuY2xpY2soKScpO1xuXHRcdH0sXG5cdFx0Z2V0U3JjKCkge1xuXHRcdFx0bGV0IG51bSA9IHRoaXMubnVtO1xuXHRcdFx0bnVtID0gcGFyc2VGbG9hdChudW0pO1xuXHRcdFx0aWYgKHRoaXMubGlzdC5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0XHRsZXQgaXRlbSA9IHRoaXMubGlzdFtudW1dO1xuXHRcdFx0bGV0IHVybCA9ICcnO1xuXHRcdFx0Ly8gI2lmZGVmIEg1XG5cdFx0XHR1cmwgPSBpdGVtLmRvd25sb2FkO1xuXHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcblx0XHRcdHVybCA9IGl0ZW0ubTN1OHVybDtcblx0XHRcdC8vICNlbmRpZlxuXHRcdFx0dXJsID0gaXRlbS5vbmxpbmV1cmw7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyh1cmwpO1xuXHRcdFx0cmV0dXJuIHVybDtcblx0XHR9LFxuXHRcdGdldFRJbWUoKSB7XG5cdFx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcblx0XHRcdGxldCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKTtcblx0XHRcdGhvdXIgPSBob3VyIDw9IDkgPyAnMCcgKyBob3VyIDogaG91cjtcblx0XHRcdG1pbnV0ZSA9IG1pbnV0ZSA8PSA5ID8gJzAnICsgbWludXRlIDogbWludXRlO1xuXHRcdFx0dGhpcy50aW1lID0gaG91ciArICc6JyArIG1pbnV0ZTtcblx0XHR9LFxuXHRcdHBhcnNlSChudW0pIHtcblx0XHRcdHJldHVybiB1bmkudXB4MnB4KG51bSk7XG5cdFx0fSxcblx0XHRiYWNrKCkge1xuXHRcdFx0dW5pLnN3aXRjaFRhYih7XG5cdFx0XHRcdHVybDogJy9wYWdlcy9ob21lL2hvbWUnXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGltZ0Vycm9yKGl0ZW0pIHtcblx0XHRcdGl0ZW0uY292ZXIgPSAnL3N0YXRpYy80MDQuanBnJztcblx0XHR9LFxuXHRcdC8v6KeG6aKR5o6n5Yi25qCP5pi+56S6XG5cdFx0Y29udHJvbGxTaG93KCkge1xuXHRcdFx0dGhpcy5pc0NvbnRyb2xsU2hvdyA9IHRydWU7XG5cdFx0XHR0aGlzLndlYnZpZXcuZXZhbEpTKGBcblx0XHRcdFx0dmFyIGNvbnRyb2xsZXIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52anMtaGFzLXN0YXJ0ZWQgLnZqcy1jb250cm9sLWJhclwiKTtcblx0XHRcdFx0aWYoY29udHJvbGxlcil7XG5cdFx0XHRcdFx0Y29udHJvbGxlci5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHRcdFx0XHRjb250cm9sbGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblx0XHRcdFx0XHRjb250cm9sbGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidmlzaWJpbGl0eSAwcyxvcGFjaXR5IDBzXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0YCk7XG5cdFx0fSxcblx0XHQvL+inhumikeaOp+WItuagj+makOiXj1xuXHRcdGNvbnRyb2xsSGlkZSgpIHtcblx0XHRcdHRoaXMuaXNDb250cm9sbFNob3cgPSBmYWxzZTtcblx0XHRcdHRoaXMud2Vidmlldy5ldmFsSlMoYFxuXHRcdFx0XHR2YXIgY29udHJvbGxlciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZqcy1oYXMtc3RhcnRlZCAudmpzLWNvbnRyb2wtYmFyXCIpO1xuXHRcdFx0XHRpZihjb250cm9sbGVyKXtcblx0XHRcdFx0XHRjb250cm9sbGVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuXHRcdFx0XHRcdGNvbnRyb2xsZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXHRcdFx0XHRcdGNvbnRyb2xsZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ2aXNpYmlsaXR5IDBzLG9wYWNpdHkgMHNcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRgKTtcblx0XHR9XG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLndlYi12aWV3IHtcblx0dG9wOiAwcHg7XG5cdGxlZnQ6IDBweDtcblx0d2lkdGg6IDc1MHVweDtcblx0aGVpZ2h0OiAyMjVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbi5mdWxsc2NyZWVuIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiA3NTB1cHg7XG5cdGhlaWdodDogMjI1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!*****************************************************************************************************!*\
  !*** E:/work/gjtool-app/pages/video/subNvue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/gjtool-app/pages/video/subNvue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "web-view": {
    "top": "0",
    "left": "0",
    "width": "750upx",
    "height": "225",
    "backgroundColor": "#000000"
  },
  "fullscreen": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "width": "750upx",
    "height": "225",
    "backgroundColor": "rgba(0,0,0,0.5)"
  }
}

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);