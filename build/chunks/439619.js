/** Chunk was on web.js **/
/** chunk id: 439619, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk624462 = require("./624462.js"),
  Chunk866307 = require("./866307.js"),
  Chunk216233 = require("./216233.js"),
  Chunk333654 = require("./333654.js"),
  Chunk896758 = require("./896758.js"),
  Chunk870064 = require("./870064.js"),
  Chunk741623 = require("./741623.js"),
  Chunk913789 = require("./913789.js"),
  Chunk603763 = require("./603763.js"),
  Chunk949893 = require("./949893.js"),
  Chunk783277 = require("./783277.js"),
  Chunk658471 = require("./658471.js"),
  Chunk327709 = require("./327709.js"),
  Chunk682587 = require("./682587.js"),
  Chunk138478 = require("./138478.js"),
  b = Function,
  y = function(e) {
    try {
      return b('"use strict"; return (' + e + ").constructor;")()
    } catch (e) {}
  },
  Chunk267768 = require("./267768.js"),
  Chunk969001 = require("./969001.js"),
  v = function() {
    throw new u
  },
  S = Chunk267768 ? function() {
    try {
      return arguments.callee, v
    } catch (e) {
      try {
        return O(arguments, "callee").get
      } catch (e) {
        return v
      }
    }
  }() : v,
  I = require("./912877.js")(),
  Chunk428495 = require("./428495.js"),
  Chunk755311 = require("./755311.js"),
  Chunk521033 = require("./521033.js"),
  Chunk343920 = require("./343920.js"),
  Chunk357522 = require("./357522.js"),
  P = {},
  D = "u" > typeof Uint8Array && Chunk428495 ? Chunk428495(Uint8Array) : r,
  x = {
    __proto__: null,
    "%AggregateError%": "u" < typeof AggregateError ? r : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": "u" < typeof ArrayBuffer ? r : ArrayBuffer,
    "%ArrayIteratorPrototype%": I && Chunk428495 ? Chunk428495([][Symbol.iterator]()) : r,
    "%AsyncFromSyncIteratorPrototype%": r,
    "%AsyncFunction%": P,
    "%AsyncGenerator%": P,
    "%AsyncGeneratorFunction%": P,
    "%AsyncIteratorPrototype%": P,
    "%Atomics%": "u" < typeof Atomics ? r : Atomics,
    "%BigInt%": "u" < typeof BigInt ? r : BigInt,
    "%BigInt64Array%": "u" < typeof BigInt64Array ? r : BigInt64Array,
    "%BigUint64Array%": "u" < typeof BigUint64Array ? r : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": "u" < typeof DataView ? r : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Chunk866307,
    "%eval%": eval,
    "%EvalError%": Chunk216233,
    "%Float16Array%": "u" < typeof Float16Array ? r : Float16Array,
    "%Float32Array%": "u" < typeof Float32Array ? r : Float32Array,
    "%Float64Array%": "u" < typeof Float64Array ? r : Float64Array,
    "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? r : FinalizationRegistry,
    "%Function%": b,
    "%GeneratorFunction%": P,
    "%Int8Array%": "u" < typeof Int8Array ? r : Int8Array,
    "%Int16Array%": "u" < typeof Int16Array ? r : Int16Array,
    "%Int32Array%": "u" < typeof Int32Array ? r : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": I && Chunk428495 ? Chunk428495(Chunk428495([][Symbol.iterator]())) : r,
    "%JSON%": "object" == typeof JSON ? JSON : r,
    "%Map%": "u" < typeof Map ? r : Map,
    "%MapIteratorPrototype%": "u" > typeof Map && I && Chunk428495 ? Chunk428495(new Map()[Symbol.iterator]()) : r,
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Chunk624462,
    "%Object.getOwnPropertyDescriptor%": Chunk267768,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": "u" < typeof Promise ? r : Promise,
    "%Proxy%": "u" < typeof Proxy ? r : Proxy,
    "%RangeError%": Chunk333654,
    "%ReferenceError%": Chunk896758,
    "%Reflect%": "u" < typeof Reflect ? r : Reflect,
    "%RegExp%": RegExp,
    "%Set%": "u" < typeof Set ? r : Set,
    "%SetIteratorPrototype%": "u" > typeof Set && I && Chunk428495 ? Chunk428495(new Set()[Symbol.iterator]()) : r,
    "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? r : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": I && Chunk428495 ? Chunk428495("" [Symbol.iterator]()) : r,
    "%Symbol%": I ? Symbol : r,
    "%SyntaxError%": Chunk870064,
    "%ThrowTypeError%": S,
    "%TypedArray%": D,
    "%TypeError%": Chunk741623,
    "%Uint8Array%": "u" < typeof Uint8Array ? r : Uint8Array,
    "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? r : Uint8ClampedArray,
    "%Uint16Array%": "u" < typeof Uint16Array ? r : Uint16Array,
    "%Uint32Array%": "u" < typeof Uint32Array ? r : Uint32Array,
    "%URIError%": Chunk913789,
    "%WeakMap%": "u" < typeof WeakMap ? r : WeakMap,
    "%WeakRef%": "u" < typeof WeakRef ? r : WeakRef,
    "%WeakSet%": "u" < typeof WeakSet ? r : WeakSet,
    "%Function.prototype.call%": Chunk357522,
    "%Function.prototype.apply%": Chunk343920,
    "%Object.defineProperty%": Chunk969001,
    "%Object.getPrototypeOf%": Chunk755311,
    "%Math.abs%": Chunk603763,
    "%Math.floor%": Chunk949893,
    "%Math.max%": Chunk783277,
    "%Math.min%": Chunk658471,
    "%Math.pow%": Chunk327709,
    "%Math.round%": Chunk682587,
    "%Math.sign%": Chunk138478,
    "%Reflect.getPrototypeOf%": Chunk521033
  };
if (Chunk428495) try {
  null.error
} catch (e) {
  var L = Chunk428495(Chunk428495(module));
  x["%Error.prototype%"] = L
}
var j = function e(t) {
    var n;
    if ("%AsyncFunction%" === t) n = y("async function () {}");
    else if ("%GeneratorFunction%" === t) n = y("function* () {}");
    else if ("%AsyncGeneratorFunction%" === t) n = y("async function* () {}");
    else if ("%AsyncGenerator%" === t) {
      var r = e("%AsyncGeneratorFunction%");
      r && (n = r.prototype)
    } else if ("%AsyncIteratorPrototype%" === t) {
      var i = e("%AsyncGenerator%");
      i && T && (n = T(i.prototype))
    }
    return x[t] = n, n
  },
  M = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  },
  Chunk94867 = require("./94867.js"),
  Chunk353841 = require("./353841.js"),
  G = Chunk94867.call(Chunk357522, Array.prototype.concat),
  V = Chunk94867.call(Chunk343920, Array.prototype.splice),
  F = Chunk94867.call(Chunk357522, String.prototype.replace),
  B = Chunk94867.call(Chunk357522, String.prototype.slice),
  H = Chunk94867.call(Chunk357522, RegExp.prototype.exec),
  Y = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  W = /\\(\\)?/g,
  K = function(e) {
    var t = B(e, 0, 1),
      n = B(e, false);
    if ("%" === t && "%" !== n) throw new c("invalid intrinsic syntax, expected closing `%`");
    if ("%" === n && "%" !== t) throw new c("invalid intrinsic syntax, expected opening `%`");
    var r = [];
    return F(e, Y, function(e, t, n, i) {
      r[r.length] = n ? F(i, W, "$1") : t || e
    }), r
  },
  z = function(e, t) {
    var n, r = e;
    if (U(M, r) && (r = "%" + (n = M[r])[0] + "%"), U(x, r)) {
      var i = x[r];
      if (i === P && (i = j(r)), true === i && !t) throw new u("intrinsic " + e + " exists, but is not available. Please file an issue!");
      return {
        alias: n,
        name: r,
        value: i
      }
    }
    throw new c("intrinsic " + e + " does not exist!")
  };
module.exports = function(e, t) {
  if ("string" != typeof e || 0 === e.length) throw new u("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && "boolean" != typeof t) throw new u('"allowMissing" argument must be a boolean');
  if (null === H(/^%?[^%]*%?$/, e)) throw new c("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = K(e),
    r = n.length > 0 ? n[0] : "",
    i = z("%" + r + "%", t),
    a = i.name,
    s = i.value,
    o = false,
    l = i.alias;
  l && (r = l[0], V(n, G([0, 1], l)));
  for (var d = 1, f = true; d < n.length; d += 1) {
    var p = n[d],
      _ = B(p, 0, 1),
      h = B(p, false);
    if (('"' === _ || "'" === _ || "`" === _ || '"' === h || "'" === h || "`" === h) && _ !== h) throw new c("property names with quotes must have matching quotes");
    if ("constructor" !== p && f || (o = true), r += "." + p, U(x, a = "%" + r + "%")) s = x[a];
    else if (null != s) {
      if (!(p in s)) {
        if (!t) throw new u("base intrinsic for " + e + " exists, but the property is not available.");
        return
      }
      if (O && d + 1 >= n.length) {
        var m = O(s, p);
        s = (f = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : s[p]
      } else f = U(s, p), s = s[p];
      f && !o && (x[a] = s)
    }
  }
  return s
}