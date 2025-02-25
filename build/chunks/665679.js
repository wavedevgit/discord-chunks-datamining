/** Chunk was on web.js **/
"use strict";
var r, i = SyntaxError,
  o = Function,
  a = TypeError,
  s = function(e) {
    try {
      return o('"use strict"; return (' + e + ").constructor;")()
    } catch (e) {}
  },
  l = Object.getOwnPropertyDescriptor;
if (l) try {
  l({}, "")
} catch (e) {
  l = null
}
var c = function() {
    throw new a
  },
  u = l ? function() {
    try {
      return arguments.callee, c
    } catch (e) {
      try {
        return l(arguments, "callee").get
      } catch (e) {
        return c
      }
    }
  }() : c,
  d = n(322499)(),
  f = n(429804)(),
  p = Object.getPrototypeOf || (f ? function(e) {
    return e.__proto__
  } : null),
  _ = {},
  h = "undefined" != typeof Uint8Array && p ? p(Uint8Array) : r,
  m = {
    "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
    "%ArrayIteratorPrototype%": d && p ? p([][Symbol.iterator]()) : r,
    "%AsyncFromSyncIteratorPrototype%": r,
    "%AsyncFunction%": _,
    "%AsyncGenerator%": _,
    "%AsyncGeneratorFunction%": _,
    "%AsyncIteratorPrototype%": _,
    "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
    "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
    "%BigInt64Array%": "undefined" == typeof BigInt64Array ? r : BigInt64Array,
    "%BigUint64Array%": "undefined" == typeof BigUint64Array ? r : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": "undefined" == typeof DataView ? r : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
    "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
    "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
    "%Function%": o,
    "%GeneratorFunction%": _,
    "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
    "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
    "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": d && p ? p(p([][Symbol.iterator]())) : r,
    "%JSON%": "object" == typeof JSON ? JSON : r,
    "%Map%": "undefined" == typeof Map ? r : Map,
    "%MapIteratorPrototype%": "undefined" != typeof Map && d && p ? p(new Map()[Symbol.iterator]()) : r,
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": "undefined" == typeof Promise ? r : Promise,
    "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
    "%RegExp%": RegExp,
    "%Set%": "undefined" == typeof Set ? r : Set,
    "%SetIteratorPrototype%": "undefined" != typeof Set && d && p ? p(new Set()[Symbol.iterator]()) : r,
    "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": d && p ? p("" [Symbol.iterator]()) : r,
    "%Symbol%": d ? Symbol : r,
    "%SyntaxError%": i,
    "%ThrowTypeError%": u,
    "%TypedArray%": h,
    "%TypeError%": a,
    "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
    "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
    "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
    "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
    "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
    "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
  };
if (p) try {
  null.error
} catch (e) {
  var g = p(p(e));
  m["%Error.prototype%"] = g
}
var E = function e(t) {
    var n;
    if ("%AsyncFunction%" === t) n = s("async function () {}");
    else if ("%GeneratorFunction%" === t) n = s("function* () {}");
    else if ("%AsyncGeneratorFunction%" === t) n = s("async function* () {}");
    else if ("%AsyncGenerator%" === t) {
      var r = e("%AsyncGeneratorFunction%");
      r && (n = r.prototype)
    } else if ("%AsyncIteratorPrototype%" === t) {
      var i = e("%AsyncGenerator%");
      i && p && (n = p(i.prototype))
    }
    return m[t] = n, n
  },
  v = {
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
  b = n(390976),
  y = n(643494),
  O = b.call(Function.call, Array.prototype.concat),
  S = b.call(Function.apply, Array.prototype.splice),
  I = b.call(Function.call, String.prototype.replace),
  T = b.call(Function.call, String.prototype.slice),
  N = b.call(Function.call, RegExp.prototype.exec),
  A = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  C = /\\(\\)?/g,
  R = function(e) {
    var t = T(e, 0, 1),
      n = T(e, -1);
    if ("%" === t && "%" !== n) throw new i("invalid intrinsic syntax, expected closing `%`");
    if ("%" === n && "%" !== t) throw new i("invalid intrinsic syntax, expected opening `%`");
    var r = [];
    return I(e, A, function(e, t, n, i) {
      r[r.length] = n ? I(i, C, "$1") : t || e
    }), r
  },
  P = function(e, t) {
    var n, r = e;
    if (y(v, r) && (r = "%" + (n = v[r])[0] + "%"), y(m, r)) {
      var o = m[r];
      if (o === _ && (o = E(r)), void 0 === o && !t) throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
      return {
        alias: n,
        name: r,
        value: o
      }
    }
    throw new i("intrinsic " + e + " does not exist!")
  };
e.exports = function(e, t) {
  if ("string" != typeof e || 0 === e.length) throw new a("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && "boolean" != typeof t) throw new a('"allowMissing" argument must be a boolean');
  if (null === N(/^%?[^%]*%?$/, e)) throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = R(e),
    r = n.length > 0 ? n[0] : "",
    o = P("%" + r + "%", t),
    s = o.name,
    c = o.value,
    u = !1,
    d = o.alias;
  d && (r = d[0], S(n, O([0, 1], d)));
  for (var f = 1, p = !0; f < n.length; f += 1) {
    var _ = n[f],
      h = T(_, 0, 1),
      g = T(_, -1);
    if (('"' === h || "'" === h || "`" === h || '"' === g || "'" === g || "`" === g) && h !== g) throw new i("property names with quotes must have matching quotes");
    if ("constructor" !== _ && p || (u = !0), r += "." + _, y(m, s = "%" + r + "%")) c = m[s];
    else if (null != c) {
      if (!(_ in c)) {
        if (!t) throw new a("base intrinsic for " + e + " exists, but the property is not available.");
        return
      }
      if (l && f + 1 >= n.length) {
        var E = l(c, _);
        c = (p = !!E) && "get" in E && !("originalValue" in E.get) ? E.get : c[_]
      } else p = y(c, _), c = c[_];
      p && !u && (m[s] = c)
    }
  }
  return c
}