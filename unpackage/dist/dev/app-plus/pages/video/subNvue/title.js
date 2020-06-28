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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
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


/***/ }),
/* 13 */
/*!*****************************************************************************!*\
  !*** E:/work/gjtool-app/main.js?{"page":"pages%2Fvideo%2FsubNvue%2Ftitle"} ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_video_subNvue_title_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/video/subNvue/title.nvue?mpType=page */ 14);\n\n        \n        \n        \n        _pages_video_subNvue_title_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_video_subNvue_title_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/video/subNvue/title'\n        _pages_video_subNvue_title_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_video_subNvue_title_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQXNFO0FBQ3RFLFFBQVEsbUZBQUc7QUFDWCxRQUFRLG1GQUFHO0FBQ1gsUUFBUSxtRkFBRztBQUNYLGdCQUFnQixtRkFBRyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdmlkZW8vc3ViTnZ1ZS90aXRsZS5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy92aWRlby9zdWJOdnVlL3RpdGxlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*********************************************************************!*\
  !*** E:/work/gjtool-app/pages/video/subNvue/title.nvue?mpType=page ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _title_nvue_vue_type_template_id_76b5cfaa_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.nvue?vue&type=template&id=76b5cfaa&mpType=page */ 15);\n/* harmony import */ var _title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.nvue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./title.nvue?vue&type=style&index=0&lang=css&mpType=page */ 19).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./title.nvue?vue&type=style&index=0&lang=css&mpType=page */ 19).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _title_nvue_vue_type_template_id_76b5cfaa_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _title_nvue_vue_type_template_id_76b5cfaa_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"96f173a8\",\n  false,\n  _title_nvue_vue_type_template_id_76b5cfaa_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/video/subNvue/title.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdGl0bGUubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NmI1Y2ZhYSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGl0bGUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi90aXRsZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi90aXRsZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdGl0bGUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI5NmYxNzNhOFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy92aWRlby9zdWJOdnVlL3RpdGxlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!***************************************************************************************************!*\
  !*** E:/work/gjtool-app/pages/video/subNvue/title.nvue?vue&type=template&id=76b5cfaa&mpType=page ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_template_id_76b5cfaa_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./title.nvue?vue&type=template&id=76b5cfaa&mpType=page */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_template_id_76b5cfaa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_template_id_76b5cfaa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_template_id_76b5cfaa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_template_id_76b5cfaa_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/gjtool-app/pages/video/subNvue/title.nvue?vue&type=template&id=76b5cfaa&mpType=page ***!
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
  return _c("div", { ref: "controlsTop", staticClass: ["controls-top"] }, [
    _c("div", { staticClass: ["title"] }, [
      _c("u-text", { staticClass: ["text"] }, [_vm._v(_vm._s(_vm.title))])
    ]),
    _c("div", { staticClass: ["fanhui"], on: { click: _vm.back } }, [
      _c("u-text", { staticClass: ["ios-icon"] }, [_vm._v("")])
    ]),
    _c("div", { staticClass: ["top-right1"] }, [
      _c("div", { staticClass: ["power-view"] }, [
        _c("div", { staticClass: ["power-box"] }, [
          _c("div", { staticClass: ["power-header"] }),
          _c("div", { staticClass: ["power-body"] }, [
            _c("div", {
              staticClass: ["power-level"],
              style: {
                width: (_vm.level / 100) * 20 + "px",
                backgroundColor: "#fff"
              }
            })
          ])
        ])
      ])
    ]),
    _c("div", { staticClass: ["top-right2"] }, [
      _c("u-text", { staticClass: ["ios-sm-title"] }, [
        _vm._v(_vm._s(_vm.time))
      ])
    ])
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!*********************************************************************************************!*\
  !*** E:/work/gjtool-app/pages/video/subNvue/title.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./title.nvue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRkLENBQWdCLHFnQkFBRyxFQUFDIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RpdGxlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNC0wIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RpdGxlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/gjtool-app/pages/video/subNvue/title.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');\nvar modal = weex.requireModule('modal');var _default =\n{\n  data: function data() {\n    return {\n      level: 0,\n      time: \"00:00\",\n      title: '',\n      timer: null,\n      platform: null,\n      main: null,\n      Intent: null,\n      IntentFilter: null,\n      UIDevice: null };\n\n  },\n  beforeCreate: function beforeCreate() {\n\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      fontFamily: 'texticons',\n      src: \"url('../../../static/text-icon.ttf')\" });\n\n\n  },\n  created: function created() {var _this2 = this;\n    uni.getSystemInfo({\n      success: function success(e) {\n\n        _this2.platform = e.platform;\n        if (_this2.platform == 'android') {\n          _this2.main = plus.android.runtimeMainActivity();\n          _this2.Intent = plus.android.importClass('android.content.Intent');\n          _this2.IntentFilter = plus.android.importClass('android.content.IntentFilter');\n        } else if (_this2.platform == 'ios') {\n          _this2.UIDevice = plus.ios.import(\"UIDevice\");\n        }\n\n      } });\n\n  },\n  mounted: function mounted() {var _this3 = this;\n    var _this = this;\n    this.timer = setInterval(function () {\n      _this3.getBattery();\n    }, 1000);\n    uni.$on(\"videoTitileShow\", function () {\n      _this3.animateControls(0, _this3.$refs.controlsTop);\n    });\n    uni.$on(\"videoTitileHide\", function () {\n      _this3.animateControls(-60, _this3.$refs.controlsTop);\n    });\n    uni.$on(\"videoTitileChange\", function (title) {\n      _this3.title = title;\n    });\n    switch (uni.getSystemInfoSync().platform) {\n      case 'android':\n\n        //注意，安卓需要配置下manifest.json文件，打开后，进入模块权限配置，\n        //在右侧的Android权限设置里勾选上android.permission.BATTERY_STATS\n        _this.main = plus.android.runtimeMainActivity();\n        _this.Intent = plus.android.importClass('android.content.Intent');\n        _this.IntentFilter = plus.android.importClass('android.content.IntentFilter');\n        _this.getBattery();\n\n        break;\n      case 'ios':\n\n        _this.UIDevice = plus.ios.import('UIDevice');\n        _this.getBattery();\n\n        break;\n      default:\n        _this.battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;var\n\n        updateBatteryStatus = function updateBatteryStatus(info) {\n          _this.level = _this.battery.level * 100;\n          _this.getTIme();\n        };\n        if (_this.battery) {\n          _this.battery.addEventListener('levelchange', updateBatteryStatus);\n        } else {\n          navigator.getBattery().then(function (battery) {\n            _this.battery = battery;\n            _this.battery.addEventListener('levelchange', updateBatteryStatus);\n          });\n        }\n        break;}\n\n  },\n  destroyed: function destroyed() {\n    uni.$off(\"videoTitileShow\");\n    uni.$off(\"videoTitileHide\");\n    uni.$off(\"videoTitileChange\");\n    clearInterval(this.timer);\n  },\n  methods: {\n    getBattery: function getBattery() {\n      var _this = this;\n      _this.getTIme();\n\n      if (this.platform == \"ios\") {\n        var dev = _this.UIDevice.currentDevice();\n        if (!dev.isBatteryMonitoringEnabled()) {\n          dev.setBatteryMonitoringEnabled(true);\n        }\n        var level = dev.batteryLevel();\n        if (level <= 1 && level >= 0) {\n          _this.level = Math.round(level * 100);\n        } else {\n          _this.level = Math.round(level);\n        }\n      } else {\n        var recevier = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {\n          onReceive: function onReceive(context, intent) {\n            var action = intent.getAction();\n            if (action == _this.Intent.ACTION_BATTERY_CHANGED) {\n              var _level = intent.getIntExtra('level', 0); //电量\n              if (_level <= 1 && _level >= 0) {\n                _this.level = Math.round(_level) * 100;\n              } else {\n                _this.level = Math.round(_level);\n              }\n              // console.log(_this.level)\n            }\n          } });\n\n        var filter = new _this.IntentFilter(_this.Intent.ACTION_BATTERY_CHANGED);\n        _this.main.registerReceiver(recevier, filter);\n      }\n\n    },\n    getTIme: function getTIme() {\n      var date = new Date();\n      var hour = date.getHours();\n      var minute = date.getMinutes();\n      hour = hour <= 9 ? '0' + hour : hour;\n      minute = minute <= 9 ? '0' + minute : minute;\n      this.time = hour + ':' + minute;\n    },\n    back: function back() {\n      this.animateControls(-40, this.$refs.controlsTop);\n      uni.$emit(\"exitFullscreen\");\n    },\n    animateControls: function animateControls(distance, el) {\n      animation.transition(el, {\n        styles: {\n          transform: \"translate(0px, \".concat(distance, \"px)\") },\n\n        duration: 350, //ms\n        timingFunction: 'ease',\n        delay: 0 //ms\n      }, function () {\n\n      });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW8vc3ViTnZ1ZS90aXRsZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQSx3QztBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLG1CQUZBO0FBR0EsZUFIQTtBQUlBLGlCQUpBO0FBS0Esb0JBTEE7QUFNQSxnQkFOQTtBQU9BLGtCQVBBO0FBUUEsd0JBUkE7QUFTQSxvQkFUQTs7QUFXQSxHQWJBO0FBY0EsY0FkQSwwQkFjQTs7QUFFQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSxpREFGQTs7O0FBS0EsR0F0QkE7QUF1QkEsU0F2QkEscUJBdUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQSxNQUlBO0FBQ0E7QUFDQTs7QUFFQSxPQVpBOztBQWNBLEdBdENBO0FBdUNBLFNBdkNBLHFCQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBRkEsRUFFQSxJQUZBO0FBR0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2RkFEQTs7QUFHQSwyQkFIQSxHQUdBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7QUFPQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FIQTtBQUlBO0FBQ0EsY0FoQ0E7O0FBa0NBLEdBdkZBO0FBd0ZBLFdBeEZBLHVCQXdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0E3RkE7QUE4RkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLE9BWEEsTUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQSxlQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBWkE7O0FBY0E7QUFDQTtBQUNBOztBQUVBLEtBbkNBO0FBb0NBLFdBcENBLHFCQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0NBO0FBNENBLFFBNUNBLGtCQTRDQTtBQUNBO0FBQ0E7QUFDQSxLQS9DQTtBQWdEQSxtQkFoREEsMkJBZ0RBLFFBaERBLEVBZ0RBLEVBaERBLEVBZ0RBO0FBQ0E7QUFDQTtBQUNBLDhEQURBLEVBREE7O0FBSUEscUJBSkEsRUFJQTtBQUNBLDhCQUxBO0FBTUEsZ0JBTkEsQ0FNQTtBQU5BLFNBT0E7O0FBRUEsT0FUQTs7QUFXQSxLQTVEQSxFQTlGQSxFIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJjb250cm9scy10b3BcIiByZWY9XCJjb250cm9sc1RvcFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cInRpdGxlXCI+PHRleHQgY2xhc3M9XCJ0ZXh0XCI+e3t0aXRsZX19PC90ZXh0PjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImZhbmh1aVwiIEB0YXA9XCJiYWNrXCI+PHRleHQgY2xhc3M9XCJpb3MtaWNvblwiPiYjeGU2MGE7PC90ZXh0PjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cInRvcC1yaWdodDFcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3dlci12aWV3XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3dlci1ib3hcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3dlci1oZWFkZXJcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3dlci1ib2R5XCI+PGRpdiBjbGFzcz1cInBvd2VyLWxldmVsXCIgOnN0eWxlPVwieyB3aWR0aDogKGxldmVsLzEwMCkqMjArJ3B4JywgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicgfVwiPjwvZGl2PjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJ0b3AtcmlnaHQyXCI+XG5cdFx0XHQ8dGV4dCBjbGFzcz1cImlvcy1zbS10aXRsZVwiPnt7dGltZX19PC90ZXh0PlxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuY29uc3QgYW5pbWF0aW9uID0gd2VleC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKTtcclxuY29uc3QgbW9kYWwgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ21vZGFsJyk7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcblx0XHRcdGxldmVsOjAsXG5cdFx0XHR0aW1lOlwiMDA6MDBcIixcblx0XHRcdHRpdGxlOicnLFxuXHRcdFx0dGltZXI6bnVsbCxcblx0XHRcdHBsYXRmb3JtOm51bGwsXG5cdFx0XHRtYWluOm51bGwsXG5cdFx0XHRJbnRlbnQ6bnVsbCxcblx0XHRcdEludGVudEZpbHRlcjpudWxsLFxuXHRcdFx0VUlEZXZpY2U6bnVsbFxuXHRcdH1cclxuXHR9LFxyXG5cdGJlZm9yZUNyZWF0ZSgpIHtcclxuXHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHR2YXIgZG9tTW9kdWxlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRcdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdFx0Zm9udEZhbWlseTogJ3RleHRpY29ucycsXHJcblx0XHRcdHNyYzogXCJ1cmwoJy4uLy4uLy4uL3N0YXRpYy90ZXh0LWljb24udHRmJylcIlxyXG5cdFx0fSk7XHJcblx0XHQvLyAjZW5kaWZcclxuXHR9LFxuXHRjcmVhdGVkKCl7XG5cdFx0dW5pLmdldFN5c3RlbUluZm8oe1xuXHRcdFx0c3VjY2VzczogKGUpID0+IHtcblx0XHRcdFx0Ly8gI2lmbmRlZiBNUFxuXHRcdFx0XHR0aGlzLnBsYXRmb3JtID0gZS5wbGF0Zm9ybVxuXHRcdFx0XHRpZih0aGlzLnBsYXRmb3JtID09ICdhbmRyb2lkJyl7XG5cdFx0XHRcdFx0dGhpcy5tYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcblx0XHRcdFx0XHR0aGlzLkludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5jb250ZW50LkludGVudCcpO1xuXHRcdFx0XHRcdHRoaXMuSW50ZW50RmlsdGVyID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLmNvbnRlbnQuSW50ZW50RmlsdGVyJyk7IFxuXHRcdFx0XHR9ZWxzZSBpZih0aGlzLnBsYXRmb3JtID09ICdpb3MnKXtcblx0XHRcdFx0XHR0aGlzLlVJRGV2aWNlID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlEZXZpY2VcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcclxuXHRtb3VudGVkKCkge1xuXHRcdGxldCBfdGhpcyA9IHRoaXNcblx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCk9Pntcblx0XHRcdHRoaXMuZ2V0QmF0dGVyeSgpXG5cdFx0fSwxMDAwKVxuXHRcdHVuaS4kb24oXCJ2aWRlb1RpdGlsZVNob3dcIiwoKT0+e1xuXHRcdFx0dGhpcy5hbmltYXRlQ29udHJvbHMoMCx0aGlzLiRyZWZzLmNvbnRyb2xzVG9wKVxuXHRcdH0pXG5cdFx0dW5pLiRvbihcInZpZGVvVGl0aWxlSGlkZVwiLCgpPT57XG5cdFx0XHR0aGlzLmFuaW1hdGVDb250cm9scygtNjAsdGhpcy4kcmVmcy5jb250cm9sc1RvcClcblx0XHR9KVxuXHRcdHVuaS4kb24oXCJ2aWRlb1RpdGlsZUNoYW5nZVwiLCh0aXRsZSk9Pntcblx0XHRcdHRoaXMudGl0bGUgPSB0aXRsZVxuXHRcdH0pXG5cdFx0c3dpdGNoICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSkge1xuXHRcdFx0Y2FzZSAnYW5kcm9pZCc6XG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xuXHRcdFx0XHQvL+azqOaEj++8jOWuieWNk+mcgOimgemFjee9ruS4i21hbmlmZXN0Lmpzb27mlofku7bvvIzmiZPlvIDlkI7vvIzov5vlhaXmqKHlnZfmnYPpmZDphY3nva7vvIxcblx0XHRcdFx0Ly/lnKjlj7PkvqfnmoRBbmRyb2lk5p2D6ZmQ6K6+572u6YeM5Yu+6YCJ5LiKYW5kcm9pZC5wZXJtaXNzaW9uLkJBVFRFUllfU1RBVFNcblx0XHRcdFx0X3RoaXMubWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XG5cdFx0XHRcdF90aGlzLkludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5jb250ZW50LkludGVudCcpO1xuXHRcdFx0XHRfdGhpcy5JbnRlbnRGaWx0ZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnRGaWx0ZXInKTtcblx0XHRcdFx0X3RoaXMuZ2V0QmF0dGVyeSgpO1xuXHRcdFx0XHQvLyAjZW5kaWZcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpb3MnOlxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcblx0XHRcdFx0X3RoaXMuVUlEZXZpY2UgPSBwbHVzLmlvcy5pbXBvcnQoJ1VJRGV2aWNlJyk7XG5cdFx0XHRcdF90aGlzLmdldEJhdHRlcnkoKTtcblx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0X3RoaXMuYmF0dGVyeSA9IG5hdmlnYXRvci5iYXR0ZXJ5IHx8IG5hdmlnYXRvci5tb3pCYXR0ZXJ5IHx8IG5hdmlnYXRvci53ZWJraXRCYXR0ZXJ5O1xuXHRcdFxuXHRcdFx0XHRmdW5jdGlvbiB1cGRhdGVCYXR0ZXJ5U3RhdHVzKGluZm8pIHtcblx0XHRcdFx0XHRfdGhpcy5sZXZlbCA9IF90aGlzLmJhdHRlcnkubGV2ZWwgKiAxMDA7XG5cdFx0XHRcdFx0X3RoaXMuZ2V0VEltZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChfdGhpcy5iYXR0ZXJ5KSB7XG5cdFx0XHRcdFx0X3RoaXMuYmF0dGVyeS5hZGRFdmVudExpc3RlbmVyKCdsZXZlbGNoYW5nZScsIHVwZGF0ZUJhdHRlcnlTdGF0dXMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5hdmlnYXRvci5nZXRCYXR0ZXJ5KCkudGhlbihmdW5jdGlvbihiYXR0ZXJ5KSB7XG5cdFx0XHRcdFx0XHRfdGhpcy5iYXR0ZXJ5ID0gYmF0dGVyeTtcblx0XHRcdFx0XHRcdF90aGlzLmJhdHRlcnkuYWRkRXZlbnRMaXN0ZW5lcignbGV2ZWxjaGFuZ2UnLCB1cGRhdGVCYXR0ZXJ5U3RhdHVzKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0sXHJcblx0ZGVzdHJveWVkKCkge1xuXHRcdHVuaS4kb2ZmKFwidmlkZW9UaXRpbGVTaG93XCIpXG5cdFx0dW5pLiRvZmYoXCJ2aWRlb1RpdGlsZUhpZGVcIilcblx0XHR1bmkuJG9mZihcInZpZGVvVGl0aWxlQ2hhbmdlXCIpXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcblx0XHRnZXRCYXR0ZXJ5KCkge1xuXHRcdFx0bGV0IF90aGlzID0gdGhpcztcblx0XHRcdF90aGlzLmdldFRJbWUoKTtcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xuXHRcdFx0aWYodGhpcy5wbGF0Zm9ybSA9PSBcImlvc1wiKXtcblx0XHRcdFx0bGV0IGRldiA9IF90aGlzLlVJRGV2aWNlLmN1cnJlbnREZXZpY2UoKTtcblx0XHRcdFx0aWYgKCFkZXYuaXNCYXR0ZXJ5TW9uaXRvcmluZ0VuYWJsZWQoKSkge1xuXHRcdFx0XHRcdGRldi5zZXRCYXR0ZXJ5TW9uaXRvcmluZ0VuYWJsZWQodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGxldmVsID0gZGV2LmJhdHRlcnlMZXZlbCgpO1xuXHRcdFx0XHRpZiAobGV2ZWwgPD0gMSAmJiBsZXZlbCA+PSAwKSB7XG5cdFx0XHRcdFx0X3RoaXMubGV2ZWwgPSBNYXRoLnJvdW5kKGxldmVsICogMTAwKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfdGhpcy5sZXZlbCA9IE1hdGgucm91bmQobGV2ZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0bGV0IHJlY2V2aWVyID0gcGx1cy5hbmRyb2lkLmltcGxlbWVudHMoJ2lvLmRjbG91ZC5mZWF0dXJlLmludGVybmFsLnJlZmxlY3QuQnJvYWRjYXN0UmVjZWl2ZXInLCB7XG5cdFx0XHRcdFx0b25SZWNlaXZlOiBmdW5jdGlvbihjb250ZXh0LCBpbnRlbnQpIHtcblx0XHRcdFx0XHRcdGxldCBhY3Rpb24gPSBpbnRlbnQuZ2V0QWN0aW9uKCk7XG5cdFx0XHRcdFx0XHRpZiAoYWN0aW9uID09IF90aGlzLkludGVudC5BQ1RJT05fQkFUVEVSWV9DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBsZXZlbCA9IGludGVudC5nZXRJbnRFeHRyYSgnbGV2ZWwnLCAwKTsgLy/nlLXph49cblx0XHRcdFx0XHRcdFx0aWYgKGxldmVsIDw9IDEgJiYgbGV2ZWwgPj0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdF90aGlzLmxldmVsID0gTWF0aC5yb3VuZChsZXZlbCkgKiAxMDA7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0X3RoaXMubGV2ZWwgPSBNYXRoLnJvdW5kKGxldmVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhfdGhpcy5sZXZlbClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsZXQgZmlsdGVyID0gbmV3IF90aGlzLkludGVudEZpbHRlcihfdGhpcy5JbnRlbnQuQUNUSU9OX0JBVFRFUllfQ0hBTkdFRCk7XG5cdFx0XHRcdF90aGlzLm1haW4ucmVnaXN0ZXJSZWNlaXZlcihyZWNldmllciwgZmlsdGVyKTtcblx0XHRcdH1cblx0XHRcdC8vICNlbmRpZlxuXHRcdH0sXG5cdFx0Z2V0VEltZSgpIHtcblx0XHRcdGxldCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuXHRcdFx0bGV0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xuXHRcdFx0aG91ciA9IGhvdXIgPD0gOSA/ICcwJyArIGhvdXIgOiBob3VyO1xuXHRcdFx0bWludXRlID0gbWludXRlIDw9IDkgPyAnMCcgKyBtaW51dGUgOiBtaW51dGU7XG5cdFx0XHR0aGlzLnRpbWUgPSBob3VyICsgJzonICsgbWludXRlO1xuXHRcdH0sXG5cdFx0YmFjaygpe1xuXHRcdFx0dGhpcy5hbmltYXRlQ29udHJvbHMoLTQwLHRoaXMuJHJlZnMuY29udHJvbHNUb3ApXG5cdFx0XHR1bmkuJGVtaXQoXCJleGl0RnVsbHNjcmVlblwiKVxuXHRcdH0sXG5cdFx0YW5pbWF0ZUNvbnRyb2xzKGRpc3RhbmNlLGVsKXtcblx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLCB7XG5cdFx0XHRcdHN0eWxlczoge1xuXHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgwcHgsICR7ZGlzdGFuY2V9cHgpYCxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZHVyYXRpb246IDM1MCwgLy9tc1xuXHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxuXHRcdFx0XHRkZWxheTogMCAvL21zXG5cdFx0XHRcdH0sICgpID0+IHtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdH1cblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLmNvbnRyb2xzLXRvcCB7XHJcblx0Lyogd2lkdGg6IDc1MHVweDsgKi9cclxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNCkpO1xyXG5cdGhlaWdodDogNjBweDtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwcHgpO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0cGFkZGluZzogMCA0MHB4IDAgNDBweDtcbn1cbi5pb3MtaWNvbiB7XHJcblx0Zm9udC1zaXplOiAyMnB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiB0ZXh0aWNvbnM7XHJcbn1cclxuLnRpdGxlIHtcclxuXHQvKiB3aWR0aDogNzUwdXB4OyAqL1xyXG5cdGhlaWdodDogNDBweDtcclxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA5MHB4O1xyXG5cdHJpZ2h0OiAxMjBweDtcclxuXHR0b3A6IDIwcHg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWZmOyAqL1xyXG5cdHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbn1cclxuLnRleHQge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uZmFuaHVpIHtcclxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdHdpZHRoOiA0MHB4O1xyXG5cdGhlaWdodDogNDBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAyMHB4O1xyXG5cdGxlZnQ6IDQwcHg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udG9wLXJpZ2h0MSB7XHJcblx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQvKiAjZW5kaWYgKi9cclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y29sb3I6ICNmZmY7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAzNHB4O1xuXHRyaWdodDogNjJweDtcblx0d2lkdGg6IDQwcHg7XHJcbn1cbi50b3AtcmlnaHQyIHtcclxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC8qICNlbmRpZiAqL1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRjb2xvcjogI2ZmZjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDMycHg7XG5cdHJpZ2h0OjEwOHB4O1xuXHR3aWR0aDogNDBweDtcclxufVxyXG4ucG93ZXItdmlldyB7XG5cdC8qICNpZm5kZWYgQVBQLVBMVVMtTlZVRSAqL1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQvKiAjZW5kaWYgKi9cclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxyXG4ucG93ZXItYm94IHtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnBvd2VyLWhlYWRlciB7XHJcblx0aGVpZ2h0OiA0cHg7XHJcblx0d2lkdGg6IDJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5wb3dlci1ib2R5IHtcclxuXHRoZWlnaHQ6IDEycHg7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZmZmO1xyXG5cdHBhZGRpbmc6IDFweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLnBvd2VyLWxldmVsIHtcclxuXHRoZWlnaHQ6IDhweDtcclxufVxuLmlvcy1zbS10aXRsZXtcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*****************************************************************************************************!*\
  !*** E:/work/gjtool-app/pages/video/subNvue/title.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./title.nvue?vue&type=style&index=0&lang=css&mpType=page */ 20);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_title_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/work/gjtool-app/pages/video/subNvue/title.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "controls-top": {
    "position": "relative",
    "backgroundImage": "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))",
    "height": "60",
    "transform": "translateY(-60px)",
    "alignItems": "center",
    "justifyContent": "space-between",
    "textAlign": "left",
    "paddingTop": 0,
    "paddingRight": "40",
    "paddingBottom": 0,
    "paddingLeft": "40"
  },
  "ios-icon": {
    "fontSize": "22",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "title": {
    "height": "40",
    "position": "absolute",
    "left": "90",
    "right": "120",
    "top": "20",
    "justifyContent": "center",
    "textAlign": "left",
    "alignItems": "flex-start",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10"
  },
  "text": {
    "color": "#ffffff",
    "fontSize": "18"
  },
  "fanhui": {
    "width": "40",
    "height": "40",
    "position": "absolute",
    "top": "20",
    "left": "40",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "top-right1": {
    "alignItems": "center",
    "fontSize": "14",
    "color": "#ffffff",
    "position": "absolute",
    "top": "34",
    "right": "62",
    "width": "40"
  },
  "top-right2": {
    "alignItems": "center",
    "fontSize": "12",
    "color": "#ffffff",
    "position": "absolute",
    "top": "32",
    "right": "108",
    "width": "40"
  },
  "power-view": {
    "alignItems": "center"
  },
  "power-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "power-header": {
    "height": "4",
    "width": "2",
    "backgroundColor": "#ffffff"
  },
  "power-body": {
    "height": "12",
    "width": "24",
    "borderWidth": "1",
    "borderColor": "#ffffff",
    "paddingTop": "1",
    "paddingRight": "1",
    "paddingBottom": "1",
    "paddingLeft": "1",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  "power-level": {
    "height": "8"
  },
  "ios-sm-title": {
    "fontSize": "14",
    "color": "#ffffff"
  }
}

/***/ })
/******/ ]);