/** Chunk was on web.js **/
/** chunk id: 149765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $e: () => S,
  Bw: () => h,
  Db: () => A,
  IH: () => C,
  Od: () => N,
  U_: () => v,
  e$: () => T,
  fS: () => I,
  hX: () => b,
  r0: () => R,
  ug: () => P,
  vB: () => g
}), require("./368063.js");
var Chunk654861 = require("./654861.js"),
  i = require.n(Chunk654861);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = 64,
  s = 16,
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
class _ {
  static fromString(e) {
    return new _(f(e), e)
  }
  static fromBit(e) {
    let t = Array(l),
      n = Math.floor(e / s);
    for (let r = 0; r < l; r++) t[l - 1 - r] = r === n ? 1 << e - n * s : 0;
    return new _(t)
  }
  static asUintN(e, t) {
    let {
      parts: n
    } = t, r = 0, i = 0;
    for (; i < e && i < n.length * s;) {
      let t = Math.min(e - i, s),
        a = (1 << t) - 1,
        o = n.length - Math.floor(i / s) - 1;
      r |= (n[o] & a) << i, i += t
    }
    return r
  }
  and(e) {
    let {
      parts: t
    } = e;
    return new _(this.parts.map((e, n) => e & t[n]))
  }
  or(e) {
    let {
      parts: t
    } = e;
    return new _(this.parts.map((e, n) => e | t[n]))
  }
  xor(e) {
    let {
      parts: t
    } = e;
    return new _(this.parts.map((e, n) => e ^ t[n]))
  }
  not() {
    return new _(this.parts.map(e => ~e))
  }
  equals(e) {
    let {
      parts: t
    } = e;
    return this.parts.every((e, n) => e === t[n])
  }
  toString() {
    if (null != this.str) return this.str;
    let e = Array(o / 4);
    return this.parts.forEach((t, n) => {
      let r = d(t.toString());
      for (let t = 0; t < 4; t++) e[t + 4 * n] = r[3 - t] || 0
    }), this.str = i().fromArray(module, 16).toString()
  }
  toJSON() {
    return this.toString()
  }
  constructor(e, t) {
    a(this, "parts", true), a(this, "str", true), this.parts = e, this.str = t
  }
}
let p = c();
p && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
  return this.toString()
});
let h = p ? function(e) {
    return "bigint" == typeof e
  } : function(e) {
    return e instanceof _
  },
  m = {},
  g = p ? function(e) {
    return BigInt(e)
  } : function(e) {
    return e instanceof _ ? e : ("number" == typeof e && (e = e.toString()), null != m[e] || (m[e] = _.fromString(e)), m[e])
  },
  E = g(0),
  b = p ? function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return module & exports
  } : function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return module.and(exports)
  },
  y = p ? function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return module | exports
  } : function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return module.or(exports)
  },
  O = p ? function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return module ^ exports
  } : function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E,
      t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : E;
    return module.xor(exports)
  },
  v = p ? function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E;
    return ~module
  } : function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : E;
    return module.not()
  },
  I = p ? function(e, t) {
    return e === t
  } : function(e, t) {
    return null == e || null == t ? e == t : e.equals(t)
  };

function S() {
  for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
  let r = exports[0];
  for (let e = 1; module < exports.length; module++) r = y(Chunk654861, exports[module]);
  return Chunk654861
}

function T(e, t) {
  return I(b(e, t), t)
}

function A(e, t) {
  return !I(b(e, t), E)
}

function C(e, t) {
  return t === E ? e : y(e, t)
}

function N(e, t) {
  return t === E ? e : O(e, b(e, t))
}
let R = p ? function(e) {
    return BigInt(1) << BigInt(e)
  } : function(e) {
    return _.fromBit(e)
  },
  P = p ? function(e, t) {
    return Number(BigInt.asUintN(e, t))
  } : function(e, t) {
    return _.asUintN(e, t)
  }