/** Chunk was on web.js **/
/** chunk id: 840475, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, o, Chunk848120 = require("./848120.js"),
  Chunk507604 = require("./507604.js"),
  Chunk127849 = require("./127849.js"),
  Chunk880181 = require("./880181.js"),
  Chunk434431 = require("./434431.js"),
  Chunk77025 = require("./77025.js"),
  Chunk214027 = require("./214027.js"),
  Chunk449285 = require("./449285.js"),
  Chunk436207 = require("./436207.js"),
  Chunk556585 = require("./556585.js"),
  Chunk573078 = require("./573078.js"),
  Chunk568033 = require("./568033.js"),
  Chunk961050 = require("./961050.js"),
  Chunk769827 = require("./769827.js"),
  Chunk751736 = require("./751736.js"),
  Chunk744569 = require("./744569.js"),
  Chunk199838 = require("./199838.js"),
  S = Chunk199838.enforce,
  I = Chunk199838.get,
  T = Chunk127849.Int8Array,
  C = T && T.prototype,
  A = Chunk127849.Uint8ClampedArray,
  N = A && A.prototype,
  P = T && Chunk961050(T),
  R = C && Chunk961050(C),
  w = Object.prototype,
  D = Chunk127849.TypeError,
  x = Chunk751736("toStringTag"),
  L = Chunk744569("TYPED_ARRAY_TAG"),
  j = "TypedArrayConstructor",
  M = Chunk848120 && !!Chunk769827 && "Opera" !== Chunk214027(Chunk127849.opera),
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
  Z = function(e) {
    if (!u(e)) returnfalse;
    var t = f(e);
    return "DataView" === t || d(U, t) || d(G, t)
  },
  F = function(e) {
    var t = E(e);
    if (u(t)) {
      var n = I(t);
      return n && d(n, j) ? n[j] : F(t)
    }
  },
  B = function(e) {
    if (!u(e)) returnfalse;
    var t = f(e);
    return d(U, t) || d(G, t)
  },
  V = function(e) {
    if (B(e)) return e;
    throw new D("Target is not a typed array")
  },
  H = function(e) {
    if (c(e) && (!b || g(P, e))) return e;
    throw new D(p(e) + " is not a typed array constructor")
  },
  Y = function(e, t, n, r) {
    if (s) {
      if (n)
        for (var i in U) {
          var o = l[i];
          if (o && d(o.prototype, e)) try {
            delete o.prototype[e]
          } catch (n) {
            try {
              o.prototype[e] = t
            } catch (e) {}
          }
        }(!R[e] || n) && m(R, e, n ? t : M && C[e] || t, r)
    }
  },
  W = function(e, t, n) {
    var r, i;
    if (s) {
      if (b) {
        if (n) {
          for (r in U)
            if ((i = l[r]) && d(i, e)) try {
              delete i[e]
            } catch (e) {}
        }
        if (P[e] && !n) return;
        try {
          return m(P, e, n ? t : M && P[e] || t)
        } catch (e) {}
      }
      for (r in U)(i = l[r]) && (!i[e] || n) && m(i, e, t)
    }
  };
for (r in U)(o = (i = Chunk127849[r]) && i.prototype) ? S(o)[j] = i : M = false;
for (r in G)(o = (i = Chunk127849[r]) && i.prototype) && (S(o)[j] = i);
if ((!M || !Chunk880181(P) || P === Function.prototype) && (P = function() {
    throw new D("Incorrect invocation")
  }, M))
  for (r in U) Chunk127849[r] && Chunk769827(Chunk127849[r], P);
if ((!M || !R || R === w) && (R = P.prototype, M))
  for (r in U) Chunk127849[r] && Chunk769827(Chunk127849[r].prototype, R);
if (M && Chunk961050(N) !== R && Chunk769827(N, R), Chunk507604 && !Chunk77025(R, x))
  for (r in k = true, Chunk573078(R, x, {
      configurable: true,
      get: function() {
        return Chunk434431(this) ? this[L] : true
      }
    }), U) Chunk127849[r] && Chunk436207(Chunk127849[r], L, r);
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: M,
  TYPED_ARRAY_TAG: k && L,
  aTypedArray: V,
  aTypedArrayConstructor: H,
  exportTypedArrayMethod: Y,
  exportTypedArrayStaticMethod: W,
  getTypedArrayConstructor: F,
  isView: Z,
  isTypedArray: B,
  TypedArray: P,
  TypedArrayPrototype: R
}