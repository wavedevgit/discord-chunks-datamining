/** Chunk was on web.js **/
/** chunk id: 688451, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(e) {
    return "'" + e + "'"
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}

function i(e) {
  return !!e && !!e[Y]
}

function a(e) {
  var t;
  return !!e && (function(e) {
    if (!e || "object" != typeof e) returnfalse;
    var t = Object.getPrototypeOf(e);
    if (null === t) returntrue;
    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object || "function" == typeof n && Function.toString.call(n) === z
  }(e) || Array.isArray(e) || !!e[W] || !!(null == (t = e.constructor) ? true : t[W]) || f(e) || _(e))
}

function o(e, t, n) {
  true === n && (n = false), 0 === s(e) ? (n ? Object.keys : q)(e).forEach(function(r) {
    n && "symbol" == typeof r || t(r, e[r], e)
  }) : e.forEach(function(n, r) {
    return t(r, n, e)
  })
}

function s(e) {
  var t = e[Y];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : f(e) ? 2 : 3 * !!_(e)
}

function l(e, t) {
  return 2 === s(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function c(e, t) {
  return 2 === s(e) ? e.get(t) : e[t]
}

function u(e, t, n) {
  var r = s(e);
  2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
}

function d(e, t) {
  return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
}

function f(e) {
  return Z && e instanceof Map
}

function _(e) {
  return F && e instanceof Set
}

function p(e) {
  return e.o || e.t
}

function h(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = X(e);
  delete t[Y];
  for (var n = q(t), r = 0; r < n.length; r++) {
    var i = n[r],
      a = t[i];
    false === a.writable && (a.writable = true, a.configurable = true), (a.get || a.set) && (t[i] = {
      configurable: true,
      writable: true,
      enumerable: a.enumerable,
      value: e[i]
    })
  }
  return Object.create(Object.getPrototypeOf(e), t)
}

function m(e, t) {
  return true === t && (t = false), E(e) || i(e) || !a(e) || (s(e) > 1 && (e.set = e.add = e.clear = e.delete = g), Object.freeze(e), t && o(e, function(e, t) {
    return m(t, true)
  }, true)), e
}

function g() {
  r(2)
}

function E(e) {
  return null == e || "object" != typeof e || Object.isFrozen(e)
}

function b(e) {
  var t = Q[e];
  return t || r(18, e), t
}

function y(e, t) {
  Q[e] || (Q[e] = t)
}

function O() {
  return G
}

function v(e, t) {
  t && (b("Patches"), e.u = [], e.s = [], e.v = t)
}

function I(e) {
  T(e), e.p.forEach(A), e.p = null
}

function T(e) {
  e === G && (G = e.l)
}

function S(e) {
  return G = {
    p: [],
    l: G,
    h: e,
    m: true,
    _: 0
  }
}

function A(e) {
  var t = e[Y];
  0 === t.i || 1 === t.i ? t.j() : t.g = true
}

function C(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    i = true !== e && e !== n;
  return t.h.O || b("ES5").S(t, e, i), i ? (n[Y].P && (I(t), r(4)), a(e) && (e = N(t, e), t.l || P(t, e)), t.u && b("Patches").M(n[Y].t, e, t.u, t.s)) : e = N(t, n, []), I(t), t.u && t.v(t.u, t.s), e !== H ? e : true
}

function N(e, t, n) {
  if (E(t)) return t;
  var r = t[Y];
  if (!r) return o(t, function(i, a) {
    return R(e, r, t, i, a, n)
  }, true), t;
  if (r.A !== e) return t;
  if (!r.P) return P(e, r.t, true), r.t;
  if (!r.I) {
    r.I = true, r.A._--;
    var i = 4 === r.i || 5 === r.i ? r.o = h(r.k) : r.o,
      a = i,
      s = false;
    3 === r.i && (a = new Set(i), i.clear(), s = true), o(a, function(t, a) {
      return R(e, r, i, t, a, n, s)
    }), P(e, i, false), n && e.u && b("Patches").N(r, n, e.u, e.s)
  }
  return r.o
}

function R(e, t, n, r, o, s, c) {
  if (i(o)) {
    var d = N(e, o, s && t && 3 !== t.i && !l(t.R, r) ? s.concat(r) : true);
    if (u(n, r, d), !i(d)) return;
    e.m = false
  } else c && n.add(o);
  if (a(o) && !E(o)) {
    if (!e.h.D && e._ < 1) return;
    N(e, o), t && t.A.l || P(e, o)
  }
}

function P(e, t, n) {
  true === n && (n = false), !e.l && e.h.D && e.m && m(t, n)
}

function D(e, t) {
  var n = e[Y];
  return (n ? p(n) : e)[t]
}

function w(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n;) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n)
    }
}

function L(e) {
  e.P || (e.P = true, e.l && L(e.l))
}

function x(e) {
  e.o || (e.o = h(e.t))
}

function M(e, t, n) {
  var r = f(t) ? b("MapSet").F(t, n) : _(t) ? b("MapSet").T(t, n) : e.O ? function(e, t) {
    var n = Array.isArray(e),
      r = {
        i: +!!n,
        A: t ? t.A : O(),
        P: false,
        I: false,
        R: {},
        l: t,
        t: e,
        k: null,
        o: null,
        j: null,
        C: false
      },
      i = r,
      a = J;
    n && (i = [r], a = $);
    var o = Proxy.revocable(i, a),
      s = o.revoke,
      l = o.proxy;
    return r.k = l, r.j = s, l
  }(t, n) : b("ES5").J(t, n);
  return (n ? n.A : O()).p.push(r), r
}

function k(e) {
  return i(e) || r(22, e),
    function e(t) {
      if (!a(t)) return t;
      var n, r = t[Y],
        i = s(t);
      if (r) {
        if (!r.P && (r.i < 4 || !b("ES5").K(r))) return r.t;
        r.I = true, n = j(t, i), r.I = false
      } else n = j(t, i);
      return o(n, function(t, i) {
        r && c(r.t, t) === i || u(n, t, e(i))
      }), 3 === i ? new Set(n) : n
    }(e)
}

function j(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e)
  }
  return h(e)
}
require.d(exports, {
  P2: () => en,
  Uy: () => et,
  _x: () => er,
  mv: () => i
});
var U, G, B = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
  Z = "undefined" != typeof Map,
  F = "undefined" != typeof Set,
  V = "undefined" != typeof Proxy && true !== Proxy.revocable && "undefined" != typeof Reflect,
  H = B ? Symbol.for("immer-nothing") : ((U = {})["immer-nothing"] = true, U),
  W = B ? Symbol.for("immer-draftable") : "__$immer_draftable",
  Y = B ? Symbol.for("immer-state") : "__$immer_state",
  K = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator",
  z = "" + Object.prototype.constructor,
  q = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : true !== Object.getOwnPropertySymbols ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
  } : Object.getOwnPropertyNames,
  X = Object.getOwnPropertyDescriptors || function(e) {
    var t = {};
    return q(e).forEach(function(n) {
      t[n] = Object.getOwnPropertyDescriptor(e, n)
    }), t
  },
  Q = {},
  J = {
    get: function(e, t) {
      if (t === Y) return e;
      var n = p(e);
      if (!l(n, t)) return function(e, t, n) {
        var r, i = w(t, n);
        return i ? "value" in i ? i.value : null == (r = i.get) ? true : r.call(e.k) : true
      }(e, n, t);
      var r = n[t];
      return e.I || !a(r) ? r : r === D(e.t, t) ? (x(e), e.o[t] = M(e.A.h, r, e)) : r
    },
    has: function(e, t) {
      return t in p(e)
    },
    ownKeys: function(e) {
      return Reflect.ownKeys(p(e))
    },
    set: function(e, t, n) {
      var r = w(p(e), t);
      if (null == r ? true : r.set) return r.set.call(e.k, n), true;
      if (!e.P) {
        var i = D(p(e), t),
          a = null == i ? true : i[Y];
        if (a && a.t === n) return e.o[t] = n, e.R[t] = false, true;
        if (d(n, i) && (true !== n || l(e.t, t))) returntrue;
        x(e), L(e)
      }
      return e.o[t] === n && (true !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = true), true
    },
    deleteProperty: function(e, t) {
      return true !== D(e.t, t) || t in e.t ? (e.R[t] = false, x(e), L(e)) : delete e.R[t], e.o && delete e.o[t], true
    },
    getOwnPropertyDescriptor: function(e, t) {
      var n = p(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return r ? {
        writable: true,
        configurable: 1 !== e.i || "length" !== t,
        enumerable: r.enumerable,
        value: n[t]
      } : r
    },
    defineProperty: function() {
      r(11)
    },
    getPrototypeOf: function(e) {
      return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function() {
      r(12)
    }
  },
  $ = {};
o(J, function(e, t) {
  $[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments)
  }
}), $.deleteProperty = function(e, t) {
  return $.set.call(this, e, t, true)
}, $.set = function(e, t, n) {
  return J.set.call(this, e[0], t, n, e[0])
};
var ee = new(function() {
    function e(e) {
      var t = this;
      this.O = V, this.D = true, this.produce = function(e, n, i) {
        if ("function" == typeof e && "function" != typeof n) {
          var o, s = n;
          n = e;
          var l = t;
          return function(e) {
            var t = this;
            true === e && (e = s);
            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
            return l.produce(e, function(e) {
              var r;
              return (r = n).call.apply(r, [t, e].concat(i))
            })
          }
        }
        if ("function" != typeof n && r(6), true !== i && "function" != typeof i && r(7), a(e)) {
          var c = S(t),
            u = M(t, e, true),
            d = true;
          try {
            o = n(u), d = false
          } finally {
            d ? I(c) : T(c)
          }
          return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(e) {
            return v(c, i), C(e, c)
          }, function(e) {
            throw I(c), e
          }) : (v(c, i), C(o, c))
        }
        if (!e || "object" != typeof e) {
          if (true === (o = n(e)) && (o = e), o === H && (o = true), t.D && m(o, true), i) {
            var f = [],
              _ = [];
            b("Patches").M(e, o, f, _), i(f, _)
          }
          return o
        }
        r(21, e)
      }, this.produceWithPatches = function(e, n) {
        if ("function" == typeof e) return function(n) {
          for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
          return t.produceWithPatches(n, function(t) {
            return e.apply(true, [t].concat(i))
          })
        };
        var r, i, a = t.produce(e, n, function(e, t) {
          r = e, i = t
        });
        return "undefined" != typeof Promise && a instanceof Promise ? a.then(function(e) {
          return [e, r, i]
        }) : [a, r, i]
      }, "boolean" == typeof(null == e ? true : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? true : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
    }
    var t = module.prototype;
    return exports.createDraft = function(e) {
      a(e) || r(8), i(e) && (e = k(e));
      var t = S(this),
        n = M(this, e, true);
      return n[Y].C = true, T(t), n
    }, exports.finishDraft = function(e, t) {
      var n = (e && e[Y]).A;
      return v(n, t), C(true, n)
    }, exports.setAutoFreeze = function(e) {
      this.D = e
    }, exports.setUseProxies = function(e) {
      e && !V && r(20), this.O = e
    }, exports.applyPatches = function(e, t) {
      for (n = t.length - 1; n >= 0; n--) {
        var n, r = t[n];
        if (0 === r.path.length && "replace" === r.op) {
          e = r.value;
          break
        }
      }
      n > false && (t = t.slice(n + 1));
      var a = b("Patches").$;
      return i(e) ? a(e, t) : this.produce(e, function(e) {
        return a(e, t)
      })
    }, module
  }()),
  et = ee.produce,
  en = (ee.produceWithPatches.bind(ee), ee.setAutoFreeze.bind(ee), ee.setUseProxies.bind(ee), ee.applyPatches.bind(ee), ee.createDraft.bind(ee)),
  er = ee.finishDraft.bind(ee)