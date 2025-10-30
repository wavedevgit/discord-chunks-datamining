/** Chunk was on web.js **/
/** chunk id: 840475, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, a, Chunk848120 = require("./848120.js"),
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
  I = Chunk199838.enforce,
  S = Chunk199838.get,
  T = Chunk127849.Int8Array,
  A = T && T.prototype,
  C = Chunk127849.Uint8ClampedArray,
  N = C && C.prototype,
  R = T && Chunk961050(T),
  P = A && Chunk961050(A),
  w = Object.prototype,
  D = Chunk127849.TypeError,
  L = Chunk751736("toStringTag"),
  x = Chunk744569("TYPED_ARRAY_TAG"),
  M = "TypedArrayConstructor",
  k = Chunk848120 && !!Chunk769827 && "Opera" !== Chunk214027(Chunk127849.opera),
  j = false,
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
  B = function(e) {
    if (!u(e)) returnfalse;
    var t = f(e);
    return "DataView" === t || d(U, t) || d(G, t)
  },
  Z = function(e) {
    var t = E(e);
    if (u(t)) {
      var n = S(t);
      return n && d(n, M) ? n[M] : Z(t)
    }
  },
  F = function(e) {
    if (!u(e)) returnfalse;
    var t = f(e);
    return d(U, t) || d(G, t)
  },
  V = function(e) {
    if (F(e)) return e;
    throw new D("Target is not a typed array")
  },
  H = function(e) {
    if (c(e) && (!b || g(R, e))) return e;
    throw new D(_(e) + " is not a typed array constructor")
  },
  Y = function(e, t, n, r) {
    if (s) {
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
        }(!P[e] || n) && h(P, e, n ? t : k && A[e] || t, r)
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
        if (R[e] && !n) return;
        try {
          return h(R, e, n ? t : k && R[e] || t)
        } catch (e) {}
      }
      for (r in U)(i = l[r]) && (!i[e] || n) && h(i, e, t)
    }
  };
for (r in U)(a = (i = Chunk127849[r]) && i.prototype) ? I(a)[M] = i : k = false;
for (r in G)(a = (i = Chunk127849[r]) && i.prototype) && (I(a)[M] = i);
if ((!k || !Chunk880181(R) || R === Function.prototype) && (R = function() {
    throw new D("Incorrect invocation")
  }, k))
  for (r in U) Chunk127849[r] && Chunk769827(Chunk127849[r], R);
if ((!k || !P || P === w) && (P = R.prototype, k))
  for (r in U) Chunk127849[r] && Chunk769827(Chunk127849[r].prototype, P);
if (k && Chunk961050(N) !== P && Chunk769827(N, P), Chunk507604 && !Chunk77025(P, L))
  for (r in j = true, Chunk573078(P, L, {
      configurable: true,
      get: function() {
        return Chunk434431(this) ? this[x] : true
      }
    }), U) Chunk127849[r] && Chunk436207(Chunk127849[r], x, r);
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: k,
  TYPED_ARRAY_TAG: j && x,
  aTypedArray: V,
  aTypedArrayConstructor: H,
  exportTypedArrayMethod: Y,
  exportTypedArrayStaticMethod: W,
  getTypedArrayConstructor: Z,
  isView: B,
  isTypedArray: F,
  TypedArray: R,
  TypedArrayPrototype: P
}