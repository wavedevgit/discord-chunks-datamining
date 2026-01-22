/** Chunk was on web.js **/
/** chunk id: 709930, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk626800 = require("./626800.js"),
  Chunk133491 = require("./133491.js"),
  Chunk356681 = require("./356681.js"),
  Chunk634587 = require("./634587.js");

function o(e) {
  return e.call.bind(e)
}
var l = "u" > typeof BigInt,
  c = "u" > typeof Symbol,
  u = o(Object.prototype.toString),
  d = o(Number.prototype.valueOf),
  f = o(String.prototype.valueOf),
  p = o(Boolean.prototype.valueOf);
if (l) var _ = o(BigInt.prototype.valueOf);
if (c) var h = o(Symbol.prototype.valueOf);

function m(e, t) {
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

function A(e) {
  return !("u" < typeof ArrayBuffer) && (O.working ? O(e) : e instanceof ArrayBuffer)
}

function v(e) {
  return "[object DataView]" === u(e)
}

function S(e) {
  return !("u" < typeof DataView) && (v.working ? v(e) : e instanceof DataView)
}
exports.isArgumentsObject = Chunk626800, exports.isGeneratorFunction = Chunk133491, exports.isTypedArray = Chunk634587, exports.isPromise = function(e) {
  return "u" > typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
}, exports.isArrayBufferView = function(e) {
  return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : s(e) || S(e)
}, exports.isUint8Array = function(e) {
  return "Uint8Array" === a(e)
}, exports.isUint8ClampedArray = function(e) {
  return "Uint8ClampedArray" === a(e)
}, exports.isUint16Array = function(e) {
  return "Uint16Array" === a(e)
}, exports.isUint32Array = function(e) {
  return "Uint32Array" === a(e)
}, exports.isInt8Array = function(e) {
  return "Int8Array" === a(e)
}, exports.isInt16Array = function(e) {
  return "Int16Array" === a(e)
}, exports.isInt32Array = function(e) {
  return "Int32Array" === a(e)
}, exports.isFloat32Array = function(e) {
  return "Float32Array" === a(e)
}, exports.isFloat64Array = function(e) {
  return "Float64Array" === a(e)
}, exports.isBigInt64Array = function(e) {
  return "BigInt64Array" === a(e)
}, exports.isBigUint64Array = function(e) {
  return "BigUint64Array" === a(e)
}, g.working = "u" > typeof Map && g(new Map), exports.isMap = function(e) {
  return !("u" < typeof Map) && (g.working ? g(e) : e instanceof Map)
}, E.working = "u" > typeof Set && E(new Set), exports.isSet = function(e) {
  return !("u" < typeof Set) && (E.working ? E(e) : e instanceof Set)
}, b.working = "u" > typeof WeakMap && b(new WeakMap), exports.isWeakMap = function(e) {
  return !("u" < typeof WeakMap) && (b.working ? b(e) : e instanceof WeakMap)
}, y.working = "u" > typeof WeakSet && y(new WeakSet), exports.isWeakSet = function(e) {
  return y(e)
}, O.working = "u" > typeof ArrayBuffer && O(new ArrayBuffer), exports.isArrayBuffer = A, v.working = "u" > typeof ArrayBuffer && "u" > typeof DataView && v(new DataView(new ArrayBuffer(1), 0, 1)), exports.isDataView = S;
var I = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : true;

function T(e) {
  return "[object SharedArrayBuffer]" === u(e)
}

function C(e) {
  return true !== I && (true === T.working && (T.working = T(new I)), T.working ? T(e) : e instanceof I)
}

function N(e) {
  return m(e, d)
}

function R(e) {
  return m(e, f)
}

function w(e) {
  return m(e, p)
}

function P(e) {
  return l && m(e, _)
}

function D(e) {
  return c && m(e, h)
}
exports.isSharedArrayBuffer = C, exports.isAsyncFunction = function(e) {
  return "[object AsyncFunction]" === u(e)
}, exports.isMapIterator = function(e) {
  return "[object Map Iterator]" === u(e)
}, exports.isSetIterator = function(e) {
  return "[object Set Iterator]" === u(e)
}, exports.isGeneratorObject = function(e) {
  return "[object Generator]" === u(e)
}, exports.isWebAssemblyCompiledModule = function(e) {
  return "[object WebAssembly.Module]" === u(e)
}, exports.isNumberObject = N, exports.isStringObject = R, exports.isBooleanObject = w, exports.isBigIntObject = P, exports.isSymbolObject = D, exports.isBoxedPrimitive = function(e) {
  return N(e) || R(e) || w(e) || P(e) || D(e)
}, exports.isAnyArrayBuffer = function(e) {
  return "u" > typeof Uint8Array && (A(e) || C(e))
}, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
  Object.defineProperty(t, e, {
    enumerable: false,
    value: function() {
      throw Error(e + " is not supported in userland")
    }
  })
})