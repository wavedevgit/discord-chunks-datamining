/** Chunk was on web.js **/
/** chunk id: 888420, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk557939 = require("./557939.js"),
  Chunk860511 = require("./860511.js"),
  Chunk446474 = require("./446474.js"),
  Chunk257943 = require("./257943.js"),
  Chunk273802 = require("./273802.js"),
  Chunk739305 = require("./739305.js"),
  Chunk607167 = require("./607167.js"),
  Chunk61132 = require("./61132.js"),
  Chunk231977 = require("./231977.js"),
  Chunk706938 = require("./706938.js"),
  Chunk324794 = require("./324794.js"),
  Chunk370001 = require("./370001.js"),
  Chunk794729 = require("./794729.js"),
  Chunk777718 = require("./777718.js"),
  Chunk590838 = require("./590838.js"),
  Chunk706598 = require("./706598.js"),
  Chunk210140 = require("./210140.js"),
  Chunk324988 = require("./324988.js"),
  Chunk598349 = require("./598349.js"),
  Chunk837082 = require("./837082.js"),
  Chunk482779 = require("./482779.js"),
  Chunk524152 = require("./524152.js"),
  Chunk458680 = require("./458680.js"),
  T = require("./855835.js").f,
  Chunk187294 = require("./187294.js"),
  N = require("./721670.js").forEach,
  Chunk274574 = require("./274574.js"),
  Chunk485155 = require("./485155.js"),
  Chunk4940 = require("./4940.js"),
  Chunk873078 = require("./873078.js"),
  Chunk412405 = require("./412405.js"),
  Chunk883972 = require("./883972.js"),
  Chunk486724 = require("./486724.js"),
  M = Chunk883972.get,
  k = Chunk883972.set,
  U = Chunk883972.enforce,
  G = Chunk4940.f,
  V = Chunk873078.f,
  F = Chunk860511.RangeError,
  B = Chunk607167.ArrayBuffer,
  H = B.prototype,
  Y = Chunk607167.DataView,
  W = Chunk739305.NATIVE_ARRAY_BUFFER_VIEWS,
  K = Chunk739305.TYPED_ARRAY_TAG,
  z = Chunk739305.TypedArray,
  q = Chunk739305.TypedArrayPrototype,
  Z = Chunk739305.isTypedArray,
  X = "BYTES_PER_ELEMENT",
  Q = "Wrong length",
  J = function(e, t) {
    R(e, t, {
      configurable: true,
      get: function() {
        return M(this)[t]
      }
    })
  },
  $ = function(e) {
    var t;
    return I(H, e) || "ArrayBuffer" === (t = b(e)) || "SharedArrayBuffer" === t
  },
  ee = function(e, t) {
    return Z(e) && !v(t) && t in e && p(+t) && t >= 0
  },
  et = function(e, t) {
    return ee(e, t = E(t)) ? d(2, e[t]) : V(e, t)
  },
  en = function(e, t, n) {
    return ee(e, t = E(t)) && O(n) && y(n, "value") && !y(n, "get") && !y(n, "set") && !n.configurable && (!y(n, "writable") || n.writable) && (!y(n, "enumerable") || n.enumerable) ? (e[t] = n.value, e) : G(e, t, n)
  };
Chunk257943 ? (W || (Chunk873078.f = et, Chunk4940.f = en, J(q, "buffer"), J(q, "byteOffset"), J(q, "byteLength"), J(q, "length")), Chunk557939({
  target: "Object",
  stat: true,
  forced: !W
}, {
  getOwnPropertyDescriptor: et,
  defineProperty: en
}), module.exports = function(e, t, n) {
  var s = e.match(/\d+/)[0] / 8,
    l = e + (n ? "Clamped" : "") + "Array",
    c = "get" + e,
    d = "set" + e,
    p = i[l],
    E = p,
    y = E && E.prototype,
    b = {},
    v = function(e, t) {
      var n = M(e);
      return n.view[c](t * s + n.byteOffset, true)
    },
    I = function(e, t, r) {
      var i = M(e);
      i.view[d](t * s + i.byteOffset, n ? g(r) : r, true)
    },
    R = function(e, t) {
      G(e, t, {
        get: function() {
          return v(this, t)
        },
        set: function(e) {
          return I(this, t, e)
        },
        enumerable: true
      })
    };
  W ? o && (E = t(function(e, t, n, r) {
    return u(e, y), j(function() {
      return O(t) ? $(t) ? true !== r ? new p(t, m(n, s), r) : true !== n ? new p(t, m(n, s)) : new p(t) : Z(t) ? x(E, t) : a(C, E, t) : new p(h(t))
    }(), e, E)
  }), S && S(E, z), N(T(p), function(e) {
    e in E || f(E, e, p[e])
  }), E.prototype = y) : (E = t(function(e, t, n, r) {
    u(e, y);
    var i, o, l, c = 0,
      d = 0;
    if (O(t))
      if ($(t)) {
        i = t, d = m(n, s);
        var f = t.byteLength;
        if (true === r) {
          if (f % s || (o = f - d) < 0) throw new F(Q)
        } else if ((o = _(r) * s) + d > f) throw new F(Q);
        l = o / s
      } else if (Z(t)) return x(E, t);
    else return a(C, E, t);
    else i = new B(o = (l = h(t)) * s);
    for (k(e, {
        buffer: i,
        byteOffset: d,
        byteLength: o,
        length: l,
        view: new Y(i)
      }); c < l;) R(e, c++)
  }), S && S(E, z), y = E.prototype = A(q)), y.constructor !== E && f(y, "constructor", E), U(y).TypedArrayConstructor = E, K && f(y, K, l);
  var P = E !== p;
  b[l] = E, r({
    global: true,
    constructor: true,
    forced: P,
    sham: !W
  }, b), X in E || f(E, X, s), X in y || f(y, X, s), w(l)
}) : module.exports = function() {}