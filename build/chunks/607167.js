/** Chunk was on web.js **/
/** chunk id: 607167, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  Chunk410323 = require("./410323.js"),
  Chunk257943 = require("./257943.js"),
  Chunk593858 = require("./593858.js"),
  Chunk814113 = require("./814113.js"),
  Chunk706938 = require("./706938.js"),
  Chunk485155 = require("./485155.js"),
  Chunk673570 = require("./673570.js"),
  Chunk503628 = require("./503628.js"),
  Chunk61132 = require("./61132.js"),
  Chunk120394 = require("./120394.js"),
  Chunk370001 = require("./370001.js"),
  Chunk794729 = require("./794729.js"),
  Chunk46430 = require("./46430.js"),
  Chunk204357 = require("./204357.js"),
  Chunk42756 = require("./42756.js"),
  Chunk458680 = require("./458680.js"),
  Chunk380296 = require("./380296.js"),
  Chunk192819 = require("./192819.js"),
  Chunk486724 = require("./486724.js"),
  Chunk517771 = require("./517771.js"),
  Chunk174168 = require("./174168.js"),
  Chunk883972 = require("./883972.js"),
  T = Chunk814113.PROPER,
  C = Chunk814113.CONFIGURABLE,
  N = "ArrayBuffer",
  R = "DataView",
  w = "prototype",
  P = "Wrong length",
  D = "Wrong index",
  x = Chunk883972.getterFor(N),
  L = Chunk883972.getterFor(R),
  j = Chunk883972.set,
  M = Chunk860511[N],
  k = M,
  U = k && k[w],
  G = Chunk860511[R],
  V = G && G[w],
  F = Object.prototype,
  B = Chunk860511.Array,
  H = Chunk860511.RangeError,
  Y = Chunk410323(Chunk380296),
  W = Chunk410323([].reverse),
  K = Chunk204357.pack,
  z = Chunk204357.unpack,
  q = function(e) {
    return [255 & e]
  },
  X = function(e) {
    return [255 & e, e >> 8 & 255]
  },
  Z = function(e) {
    return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
  },
  Q = function(e) {
    return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
  },
  $ = function(e) {
    return K(m(e), 23, 4)
  },
  J = function(e) {
    return K(e, 52, 8)
  },
  ee = function(e, t, n) {
    c(e[w], t, {
      configurable: true,
      get: function() {
        return n(this)[t]
      }
    })
  },
  et = function(e, t, n, r) {
    var i = L(e),
      a = h(n),
      s = !!r;
    if (a + t > i.byteLength) throw new H(D);
    var o = i.bytes,
      l = a + i.byteOffset,
      c = O(o, l, l + t);
    return s ? c : W(c)
  },
  en = function(e, t, n, r, i, a) {
    var s = L(e),
      o = h(n),
      l = r(+i),
      c = !!a;
    if (o + t > s.byteLength) throw new H(D);
    for (var u = s.bytes, d = o + s.byteOffset, f = 0; f < t; f++) u[d + f] = l[c ? f : t - f - 1]
  };
if (Chunk593858) {
  var er = T && M.name !== N;
  !Chunk503628(function() {
    M(1)
  }) || !Chunk503628(function() {
    new M(false)
  }) || Chunk503628(function() {
    return new M, new M(1.5), new M(NaN), 1 !== M.length || er && !C
  }) ? ((k = function(e) {
    return f(this, U), A(new M(h(e)), this, k)
  })[w] = U, U.constructor = k, Chunk517771(k, M)) : er && C && Chunk706938(M, "name", N), Chunk458680 && Chunk42756(V) !== F && Chunk458680(V, F);
  var ei = new G(new k(2)),
    ea = Chunk410323(V.setInt8);
  ei.setInt8(0, 0x80000000), ei.setInt8(1, 0x80000001), (ei.getInt8(0) || !ei.getInt8(1)) && Chunk673570(V, {
    setInt8: function(e, t) {
      ea(this, e, t << 24 >> 24)
    },
    setUint8: function(e, t) {
      ea(this, e, t << 24 >> 24)
    }
  }, {
    unsafe: true
  })
} else U = (k = function(e) {
  f(this, U);
  var t = h(e);
  j(this, {
    type: N,
    bytes: Y(B(t), 0),
    byteLength: t
  }), a || (this.byteLength = t, this.detached = false)
})[w], V = (G = function(e, t, n) {
  f(this, V), f(e, U);
  var r = x(e),
    i = r.byteLength,
    s = p(t);
  if (s < 0 || s > i) throw new H("Wrong offset");
  if (n = true === n ? i - s : _(n), s + n > i) throw new H(P);
  j(this, {
    type: R,
    buffer: e,
    byteLength: n,
    byteOffset: s,
    bytes: r.bytes
  }), a || (this.buffer = e, this.byteLength = n, this.byteOffset = s)
})[w], Chunk257943 && (ee(k, "byteLength", x), ee(G, "buffer", L), ee(G, "byteLength", L), ee(G, "byteOffset", L)), Chunk673570(V, {
  getInt8: function(e) {
    return et(this, 1, e)[0] << 24 >> 24
  },
  getUint8: function(e) {
    return et(this, 1, e)[0]
  },
  getInt16: function(e) {
    var t = et(this, 2, e, arguments.length > 1 && arguments[1]);
    return (t[1] << 8 | t[0]) << 16 >> 16
  },
  getUint16: function(e) {
    var t = et(this, 2, e, arguments.length > 1 && arguments[1]);
    return t[1] << 8 | t[0]
  },
  getInt32: function(e) {
    return Q(et(this, 4, e, arguments.length > 1 && arguments[1]))
  },
  getUint32: function(e) {
    return Q(et(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0
  },
  getFloat32: function(e) {
    return z(et(this, 4, e, arguments.length > 1 && arguments[1]), 23)
  },
  getFloat64: function(e) {
    return z(et(this, 8, e, arguments.length > 1 && arguments[1]), 52)
  },
  setInt8: function(e, t) {
    en(this, 1, e, q, t)
  },
  setUint8: function(e, t) {
    en(this, 1, e, q, t)
  },
  setInt16: function(e, t) {
    en(this, 2, e, X, t, arguments.length > 2 && arguments[2])
  },
  setUint16: function(e, t) {
    en(this, 2, e, X, t, arguments.length > 2 && arguments[2])
  },
  setInt32: function(e, t) {
    en(this, 4, e, Z, t, arguments.length > 2 && arguments[2])
  },
  setUint32: function(e, t) {
    en(this, 4, e, Z, t, arguments.length > 2 && arguments[2])
  },
  setFloat32: function(e, t) {
    en(this, 4, e, $, t, arguments.length > 2 && arguments[2])
  },
  setFloat64: function(e, t) {
    en(this, 8, e, J, t, arguments.length > 2 && arguments[2])
  }
});
Chunk174168(k, N), Chunk174168(G, R), module.exports = {
  ArrayBuffer: k,
  DataView: G
}