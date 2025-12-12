/** Chunk was on web.js **/
/** chunk id: 842406, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk670575 = require("./670575.js"),
  Chunk131604 = require("./131604.js"),
  Chunk3843 = require("./3843.js"),
  Chunk837447 = require("./837447.js");

function s(e) {
  return e.call.bind(e)
}
var l = "undefined" != typeof BigInt,
  c = "undefined" != typeof Symbol,
  u = s(Object.prototype.toString),
  d = s(Number.prototype.valueOf),
  f = s(String.prototype.valueOf),
  p = s(Boolean.prototype.valueOf);
if (l) var _ = s(BigInt.prototype.valueOf);
if (c) var m = s(Symbol.prototype.valueOf);

function h(e, t) {
  if ("object" != typeof e) returnfalse;
  try {
    return t(e), true
  } catch (e) {
    returnfalse
  }
}

function g(e) {
  return "[object Map]" === u(e)
}

function E(e) {
  return "[object Set]" === u(e)
}

function b(e) {
  return "[object WeakMap]" === u(e)
}

function y(e) {
  return "[object WeakSet]" === u(e)
}

function O(e) {
  return "[object ArrayBuffer]" === u(e)
}

function v(e) {
  return "undefined" != typeof ArrayBuffer && (O.working ? O(e) : e instanceof ArrayBuffer)
}

function S(e) {
  return "[object DataView]" === u(e)
}

function I(e) {
  return "undefined" != typeof DataView && (S.working ? S(e) : e instanceof DataView)
}
exports.isArgumentsObject = Chunk670575, exports.isGeneratorFunction = Chunk131604, exports.isTypedArray = Chunk837447, exports.isPromise = function(e) {
  return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
}, exports.isArrayBufferView = function(e) {
  return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || I(e)
}, exports.isUint8Array = function(e) {
  return "Uint8Array" === o(e)
}, exports.isUint8ClampedArray = function(e) {
  return "Uint8ClampedArray" === o(e)
}, exports.isUint16Array = function(e) {
  return "Uint16Array" === o(e)
}, exports.isUint32Array = function(e) {
  return "Uint32Array" === o(e)
}, exports.isInt8Array = function(e) {
  return "Int8Array" === o(e)
}, exports.isInt16Array = function(e) {
  return "Int16Array" === o(e)
}, exports.isInt32Array = function(e) {
  return "Int32Array" === o(e)
}, exports.isFloat32Array = function(e) {
  return "Float32Array" === o(e)
}, exports.isFloat64Array = function(e) {
  return "Float64Array" === o(e)
}, exports.isBigInt64Array = function(e) {
  return "BigInt64Array" === o(e)
}, exports.isBigUint64Array = function(e) {
  return "BigUint64Array" === o(e)
}, g.working = "undefined" != typeof Map && g(new Map), exports.isMap = function(e) {
  return "undefined" != typeof Map && (g.working ? g(e) : e instanceof Map)
}, E.working = "undefined" != typeof Set && E(new Set), exports.isSet = function(e) {
  return "undefined" != typeof Set && (E.working ? E(e) : e instanceof Set)
}, b.working = "undefined" != typeof WeakMap && b(new WeakMap), exports.isWeakMap = function(e) {
  return "undefined" != typeof WeakMap && (b.working ? b(e) : e instanceof WeakMap)
}, y.working = "undefined" != typeof WeakSet && y(new WeakSet), exports.isWeakSet = function(e) {
  return y(e)
}, O.working = "undefined" != typeof ArrayBuffer && O(new ArrayBuffer), exports.isArrayBuffer = v, S.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && S(new DataView(new ArrayBuffer(1), 0, 1)), exports.isDataView = I;
var T = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : true;

function C(e) {
  return "[object SharedArrayBuffer]" === u(e)
}

function A(e) {
  return true !== T && (true === C.working && (C.working = C(new T)), C.working ? C(e) : e instanceof T)
}

function N(e) {
  return h(e, d)
}

function P(e) {
  return h(e, f)
}

function R(e) {
  return h(e, p)
}

function w(e) {
  return l && h(e, _)
}

function D(e) {
  return c && h(e, m)
}
exports.isSharedArrayBuffer = A, exports.isAsyncFunction = function(e) {
  return "[object AsyncFunction]" === u(e)
}, exports.isMapIterator = function(e) {
  return "[object Map Iterator]" === u(e)
}, exports.isSetIterator = function(e) {
  return "[object Set Iterator]" === u(e)
}, exports.isGeneratorObject = function(e) {
  return "[object Generator]" === u(e)
}, exports.isWebAssemblyCompiledModule = function(e) {
  return "[object WebAssembly.Module]" === u(e)
}, exports.isNumberObject = N, exports.isStringObject = P, exports.isBooleanObject = R, exports.isBigIntObject = w, exports.isSymbolObject = D, exports.isBoxedPrimitive = function(e) {
  return N(e) || P(e) || R(e) || w(e) || D(e)
}, exports.isAnyArrayBuffer = function(e) {
  return "undefined" != typeof Uint8Array && (v(e) || A(e))
}, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
  Object.defineProperty(t, e, {
    enumerable: false,
    value: function() {
      throw Error(e + " is not supported in userland")
    }
  })
})