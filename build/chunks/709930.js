/** Chunk was on web.js **/
/** chunk id: 709930, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk626800 = require("./626800.js"),
  Chunk133491 = require("./133491.js"),
  Chunk356681 = require("./356681.js"),
  Chunk634587 = require("./634587.js");

function s(e) {
  return e.call.bind(e)
}
var l = "u" > typeof BigInt,
  c = "u" > typeof Symbol,
  u = s(Object.prototype.toString),
  d = s(Number.prototype.valueOf),
  f = s(String.prototype.valueOf),
  p = s(Boolean.prototype.valueOf);
if (l) var _ = s(BigInt.prototype.valueOf);
if (c) var h = s(Symbol.prototype.valueOf);

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

function y(e) {
  return "[object WeakMap]" === u(e)
}

function b(e) {
  return "[object WeakSet]" === u(e)
}

function O(e) {
  return "[object ArrayBuffer]" === u(e)
}

function v(e) {
  return !("u" < typeof ArrayBuffer) && (O.working ? O(e) : e instanceof ArrayBuffer)
}

function A(e) {
  return "[object DataView]" === u(e)
}

function I(e) {
  return !("u" < typeof DataView) && (A.working ? A(e) : e instanceof DataView)
}
exports.isArgumentsObject = Chunk626800, exports.isGeneratorFunction = Chunk133491, exports.isTypedArray = Chunk634587, exports.isPromise = function(e) {
  return "u" > typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
}, exports.isArrayBufferView = function(e) {
  return "u" > typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : o(e) || I(e)
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
}, y.working = "u" > typeof WeakMap && y(new WeakMap), exports.isWeakMap = function(e) {
  return !("u" < typeof WeakMap) && (y.working ? y(e) : e instanceof WeakMap)
}, b.working = "u" > typeof WeakSet && b(new WeakSet), exports.isWeakSet = function(e) {
  return b(e)
}, O.working = "u" > typeof ArrayBuffer && O(new ArrayBuffer), exports.isArrayBuffer = v, A.working = "u" > typeof ArrayBuffer && "u" > typeof DataView && A(new DataView(new ArrayBuffer(1), 0, 1)), exports.isDataView = I;
var S = "u" > typeof SharedArrayBuffer ? SharedArrayBuffer : true;

function T(e) {
  return "[object SharedArrayBuffer]" === u(e)
}

function C(e) {
  return true !== S && (true === T.working && (T.working = T(new S)), T.working ? T(e) : e instanceof S)
}

function N(e) {
  return m(e, d)
}

function w(e) {
  return m(e, f)
}

function R(e) {
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
}, exports.isNumberObject = N, exports.isStringObject = w, exports.isBooleanObject = R, exports.isBigIntObject = P, exports.isSymbolObject = D, exports.isBoxedPrimitive = function(e) {
  return N(e) || w(e) || R(e) || P(e) || D(e)
}, exports.isAnyArrayBuffer = function(e) {
  return "u" > typeof Uint8Array && (v(e) || C(e))
}, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
  Object.defineProperty(t, e, {
    enumerable: false,
    value: function() {
      throw Error(e + " is not supported in userland")
    }
  })
})