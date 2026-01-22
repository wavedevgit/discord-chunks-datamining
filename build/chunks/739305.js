/** Chunk was on web.js **/
/** chunk id: 739305, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, a, Chunk593858 = require("./593858.js"),
  Chunk257943 = require("./257943.js"),
  Chunk860511 = require("./860511.js"),
  Chunk339626 = require("./339626.js"),
  Chunk598349 = require("./598349.js"),
  Chunk210140 = require("./210140.js"),
  Chunk324988 = require("./324988.js"),
  Chunk406208 = require("./406208.js"),
  Chunk706938 = require("./706938.js"),
  Chunk693655 = require("./693655.js"),
  Chunk485155 = require("./485155.js"),
  Chunk524152 = require("./524152.js"),
  Chunk42756 = require("./42756.js"),
  Chunk458680 = require("./458680.js"),
  Chunk380744 = require("./380744.js"),
  Chunk753891 = require("./753891.js"),
  Chunk883972 = require("./883972.js"),
  v = Chunk883972.enforce,
  S = Chunk883972.get,
  I = Chunk860511.Int8Array,
  T = I && I.prototype,
  C = Chunk860511.Uint8ClampedArray,
  N = C && C.prototype,
  R = I && Chunk42756(I),
  w = T && Chunk42756(T),
  P = Object.prototype,
  D = Chunk860511.TypeError,
  x = Chunk380744("toStringTag"),
  L = Chunk753891("TYPED_ARRAY_TAG"),
  j = "TypedArrayConstructor",
  M = Chunk593858 && !!Chunk458680 && "Opera" !== Chunk324988(Chunk860511.opera),
  k = false,
  U = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  },
  G = {
    BigInt64Array: 8,
    BigUint64Array: 8
  },
  V = function(e) {
    if (!u(e)) returnfalse;
    var t = f(e);
    return "DataView" === t || d(U, t) || d(G, t)
  },
  F = function(e) {
    var t = E(e);
    if (u(t)) {
      var n = S(t);
      return n && d(n, j) ? n[j] : F(t)
    }
  },
  B = function(e) {
    if (!u(e)) returnfalse;
    var t = f(e);
    return d(U, t) || d(G, t)
  },
  H = function(e) {
    if (B(e)) return e;
    throw new D("Target is not a typed array")
  },
  Y = function(e) {
    if (c(e) && (!b || g(R, e))) return e;
    throw new D(p(e) + " is not a typed array constructor")
  },
  W = function(e, t, n, r) {
    if (o) {
      if (n)
        for (var i in U) {
          var a = l[i];
          if (a && d(a.prototype, e)) try {
            delete a.prototype[e]
          } catch (n) {
            try {
              a.prototype[e] = t
            } catch (e) {}
          }
        }(!w[e] || n) && h(w, e, n ? t : M && T[e] || t, r)
    }
  },
  K = function(e, t, n) {
    var r, i;
    if (o) {
      if (b) {
        if (n) {
          for (r in U)
            if ((i = l[r]) && d(i, e)) try {
              delete i[e]
            } catch (e) {}
        }
        if (R[e] && !n) return;
        try {
          return h(R, e, n ? t : M && R[e] || t)
        } catch (e) {}
      }
      for (r in U)(i = l[r]) && (!i[e] || n) && h(i, e, t)
    }
  };
for (r in U)(a = (i = Chunk860511[r]) && i.prototype) ? v(a)[j] = i : M = false;
for (r in G)(a = (i = Chunk860511[r]) && i.prototype) && (v(a)[j] = i);
if ((!M || !Chunk339626(R) || R === Function.prototype) && (R = function() {
    throw new D("Incorrect invocation")
  }, M))
  for (r in U) Chunk860511[r] && Chunk458680(Chunk860511[r], R);
if ((!M || !w || w === P) && (w = R.prototype, M))
  for (r in U) Chunk860511[r] && Chunk458680(Chunk860511[r].prototype, w);
if (M && Chunk42756(N) !== w && Chunk458680(N, w), Chunk257943 && !Chunk210140(w, x))
  for (r in k = true, Chunk485155(w, x, {
      configurable: true,
      get: function() {
        return u(this) ? this[L] : true
      }
    }), U) Chunk860511[r] && Chunk706938(Chunk860511[r], L, r);
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: M,
  TYPED_ARRAY_TAG: k && L,
  aTypedArray: H,
  aTypedArrayConstructor: Y,
  exportTypedArrayMethod: W,
  exportTypedArrayStaticMethod: K,
  getTypedArrayConstructor: F,
  isView: V,
  isTypedArray: B,
  TypedArray: R,
  TypedArrayPrototype: w
}