/** Chunk was on web.js **/
"use strict";
var r = n(147018),
  i = n(161581),
  o = n(926515),
  a = n(325008),
  s = n(22092),
  l = n(192291),
  c = n(476579),
  u = n(603528),
  d = n(879),
  f = n(251069),
  _ = n(907533),
  p = n(552028),
  h = n(646328),
  g = n(18316),
  m = n(712560),
  E = n(966606),
  v = n(740362),
  b = n(974971),
  y = n(622281),
  O = n(323979),
  S = n(803938),
  I = n(838957),
  T = n(276321),
  N = n(537443).f,
  A = n(12367),
  C = n(335225).forEach,
  R = n(930990),
  P = n(4340),
  D = n(97131),
  w = n(347722),
  L = n(644659),
  x = n(95948),
  M = L.get,
  j = L.set,
  k = L.enforce,
  U = D.f,
  G = w.f,
  B = i.RangeError,
  F = c.ArrayBuffer,
  V = F.prototype,
  Z = c.DataView,
  H = l.NATIVE_ARRAY_BUFFER_VIEWS,
  W = l.TYPED_ARRAY_TAG,
  Y = l.TypedArray,
  K = l.TypedArrayPrototype,
  z = l.aTypedArrayConstructor,
  q = l.isTypedArray,
  Q = "BYTES_PER_ELEMENT",
  X = "Wrong length",
  J = function(e, t) {
    z(e);
    for (var n = 0, r = t.length, i = new e(r); r > n;) i[n] = t[n++];
    return i
  },
  $ = function(e, t) {
    P(e, t, {
      configurable: !0,
      get: function() {
        return M(this)[t]
      }
    })
  },
  ee = function(e) {
    var t;
    return I(V, e) || "ArrayBuffer" === (t = b(e)) || "SharedArrayBuffer" === t
  },
  et = function(e, t) {
    return q(e) && !O(t) && t in e && _(+t) && t >= 0
  },
  en = function(e, t) {
    return et(e, t = E(t)) ? d(2, e[t]) : G(e, t)
  },
  er = function(e, t, n) {
    return et(e, t = E(t)) && y(n) && v(n, "value") && !v(n, "get") && !v(n, "set") && !n.configurable && (!v(n, "writable") || n.writable) && (!v(n, "enumerable") || n.enumerable) ? (e[t] = n.value, e) : U(e, t, n)
  };
a ? (H || (w.f = en, D.f = er, $(K, "buffer"), $(K, "byteOffset"), $(K, "byteLength"), $(K, "length")), r({
  target: "Object",
  stat: !0,
  forced: !H
}, {
  getOwnPropertyDescriptor: en,
  defineProperty: er
}), e.exports = function(e, t, n) {
  var a = e.match(/\d+/)[0] / 8,
    l = e + (n ? "Clamped" : "") + "Array",
    c = "get" + e,
    d = "set" + e,
    _ = i[l],
    E = _,
    v = E && E.prototype,
    b = {},
    O = function(e, t) {
      var n = M(e);
      return n.view[c](t * a + n.byteOffset, !0)
    },
    I = function(e, t, r) {
      var i = M(e);
      i.view[d](t * a + i.byteOffset, n ? m(r) : r, !0)
    },
    P = function(e, t) {
      U(e, t, {
        get: function() {
          return O(this, t)
        },
        set: function(e) {
          return I(this, t, e)
        },
        enumerable: !0
      })
    };
  H ? s && (E = t(function(e, t, n, r) {
    return u(e, v), x(function() {
      return y(t) ? ee(t) ? void 0 !== r ? new _(t, g(n, a), r) : void 0 !== n ? new _(t, g(n, a)) : new _(t) : q(t) ? J(E, t) : o(A, E, t) : new _(h(t))
    }(), e, E)
  }), T && T(E, Y), C(N(_), function(e) {
    e in E || f(E, e, _[e])
  }), E.prototype = v) : (E = t(function(e, t, n, r) {
    u(e, v);
    var i, s, l, c = 0,
      d = 0;
    if (y(t)) {
      if (ee(t)) {
        i = t, d = g(n, a);
        var f = t.byteLength;
        if (void 0 === r) {
          if (f % a || (s = f - d) < 0) throw B(X)
        } else if ((s = p(r) * a) + d > f) throw B(X);
        l = s / a
      } else if (q(t)) return J(E, t);
      else return o(A, E, t)
    } else i = new F(s = (l = h(t)) * a);
    for (j(e, {
        buffer: i,
        byteOffset: d,
        byteLength: s,
        length: l,
        view: new Z(i)
      }); c < l;) P(e, c++)
  }), T && T(E, Y), v = E.prototype = S(K)), v.constructor !== E && f(v, "constructor", E), k(v).TypedArrayConstructor = E, W && f(v, W, l);
  var D = E !== _;
  b[l] = E, r({
    global: !0,
    constructor: !0,
    forced: D,
    sham: !H
  }, b), Q in E || f(E, Q, a), Q in v || f(v, Q, a), R(l)
}) : e.exports = function() {}