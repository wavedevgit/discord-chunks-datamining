/** Chunk was on web.js **/
/** chunk id: 136722, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B8: () => v,
  H0: () => h,
  TF: () => N,
  WQ: () => C,
  X8: () => T,
  aI: () => A,
  iu: () => g,
  jB: () => R,
  kg: () => I,
  pG: () => w,
  pb: () => y,
  zy: () => S
});
var Chunk824120 = require("./824120.js"),
  i = require.n(Chunk824120);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = 64,
  o = 16,
  l = 4;

function c() {
  try {
    returntrue
  } catch (e) {
    returnfalse
  }
}

function u(e, t, n) {
  let r = 0;
  for (let i = 0; i < n; i++) {
    let n = e[t + i];
    if (true === n) break;
    r += n * 16 ** i
  }
  return r
}

function d(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = Number(e[n]);
    for (let e = 0; r || e < t.length; e++) r += 10 * (t[e] || 0), t[e] = r % 16, r = (r - t[e]) / 16
  }
  return t
}

function f(e) {
  let t = d(e),
    n = Array(l);
  for (let e = 0; e < l; e++) n[l - 1 - e] = u(t, e * l, l);
  return n
}
class p {
  static fromString(e) {
    return new p(f(e), e)
  }
  static fromBit(e) {
    let t = Array(l),
      n = Math.floor(e / o);
    for (let r = 0; r < l; r++) t[l - 1 - r] = r === n ? 1 << e - n * o : 0;
    return new p(t)
  }
  static asUintN(e, t) {
    let {
      parts: n
    } = t, r = 0, i = 0;
    for (; i < e && i < n.length * o;) {
      let t = Math.min(e - i, o),
        a = (1 << t) - 1,
        s = n.length - Math.floor(i / o) - 1;
      r |= (n[s] & a) << i, i += t
    }
    return r
  }
  and(e) {
    let {
      parts: t
    } = e;
    return new p(this.parts.map((e, n) => e & t[n]))
  }
  or(e) {
    let {
      parts: t
    } = e;
    return new p(this.parts.map((e, n) => e | t[n]))
  }
  xor(e) {
    let {
      parts: t
    } = e;
    return new p(this.parts.map((e, n) => e ^ t[n]))
  }
  not() {
    return new p(this.parts.map(e => ~e))
  }
  equals(e) {
    let {
      parts: t
    } = e;
    return this.parts.every((e, n) => e === t[n])
  }
  toString() {
    if (null != this.str) return this.str;
    let e = Array(s / 4);
    return this.parts.forEach((t, n) => {
      let r = d(t.toString());
      for (let t = 0; t < 4; t++) e[t + 4 * n] = r[3 - t] || 0
    }), this.str = i().fromArray(e, 16).toString()
  }
  toJSON() {
    return this.toString()
  }
  constructor(e, t) {
    a(this, "parts", true), a(this, "str", true), this.parts = e, this.str = t
  }
}
let _ = c();
_ && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
  return this.toString()
});
let h = _ ? function(e) {
    return "bigint" == typeof e
  } : function(e) {
    return e instanceof p
  },
  m = {},
  g = _ ? function(e) {
    return BigInt(e)
  } : function(e) {
    return e instanceof p ? e : ("number" == typeof e && (e = e.toString()), null != m[e] || (m[e] = p.fromString(e)), m[e])
  },
  E = g(0),
  y = _ ? function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return e & t
  } : function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return e.and(t)
  },
  b = _ ? function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return e | t
  } : function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return e.or(t)
  },
  O = _ ? function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return e ^ t
  } : function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return e.xor(t)
  },
  v = _ ? function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E;
    return ~e
  } : function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E;
    return e.not()
  },
  A = _ ? function(e, t) {
    return e === t
  } : function(e, t) {
    return null == e || null == t ? e == t : e.equals(t)
  };

function I() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  let r = t[0];
  for (let e = 1; e < t.length; e++) r = b(r, t[e]);
  return r
}

function S(e, t) {
  return A(y(e, t), t)
}

function T(e, t) {
  return !A(y(e, t), E)
}

function C(e, t) {
  return t === E ? e : b(e, t)
}

function N(e, t) {
  return t === E ? e : O(e, y(e, t))
}
let R = _ ? function(e) {
    return BigInt(1) << BigInt(e)
  } : function(e) {
    return p.fromBit(e)
  },
  w = _ ? function(e, t) {
    return Number(BigInt.asUintN(e, t))
  } : function(e, t) {
    return p.asUintN(e, t)
  }