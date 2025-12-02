/** Chunk was on web.js **/
/** chunk id: 391246, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk127849 = require("./127849.js"),
  Chunk46015 = require("./46015.js"),
  Chunk507604 = require("./507604.js"),
  Chunk848120 = require("./848120.js"),
  Chunk938373 = require("./938373.js"),
  Chunk436207 = require("./436207.js"),
  Chunk573078 = require("./573078.js"),
  Chunk477732 = require("./477732.js"),
  Chunk621523 = require("./621523.js"),
  Chunk170322 = require("./170322.js"),
  Chunk77826 = require("./77826.js"),
  Chunk554148 = require("./554148.js"),
  Chunk730383 = require("./730383.js"),
  Chunk953010 = require("./953010.js"),
  Chunk125328 = require("./125328.js"),
  Chunk961050 = require("./961050.js"),
  Chunk769827 = require("./769827.js"),
  Chunk760751 = require("./760751.js"),
  Chunk992174 = require("./992174.js"),
  Chunk176682 = require("./176682.js"),
  Chunk190289 = require("./190289.js"),
  Chunk25124 = require("./25124.js"),
  Chunk199838 = require("./199838.js"),
  A = Chunk938373.PROPER,
  C = Chunk938373.CONFIGURABLE,
  N = "ArrayBuffer",
  P = "DataView",
  R = "prototype",
  w = "Wrong length",
  D = "Wrong index",
  x = Chunk199838.getterFor(N),
  L = Chunk199838.getterFor(P),
  j = Chunk199838.set,
  M = Chunk127849[N],
  k = M,
  U = k && k[R],
  G = Chunk127849[P],
  Z = G && G[R],
  B = Object.prototype,
  F = Chunk127849.Array,
  V = Chunk127849.RangeError,
  H = Chunk46015(Chunk760751),
  Y = Chunk46015([].reverse),
  W = Chunk125328.pack,
  K = Chunk125328.unpack,
  z = function(e) {
    return [255 & e]
  },
  q = function(e) {
    return [255 & e, e >> 8 & 255]
  },
  X = function(e) {
    return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
  },
  Q = function(e) {
    return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
  },
  J = function(e) {
    return W(h(e), 23, 4)
  },
  $ = function(e) {
    return W(e, 52, 8)
  },
  ee = function(e, t, n) {
    c(e[R], t, {
      configurable: true,
      get: function() {
        return n(this)[t]
      }
    })
  },
  et = function(e, t, n, r) {
    var i = L(e),
      a = m(n),
      o = !!r;
    if (a + t > i.byteLength) throw new V(D);
    var s = i.bytes,
      l = a + i.byteOffset,
      c = O(s, l, l + t);
    return o ? c : Y(c)
  },
  en = function(e, t, n, r, i, a) {
    var o = L(e),
      s = m(n),
      l = r(+i),
      c = !!a;
    if (s + t > o.byteLength) throw new V(D);
    for (var u = o.bytes, d = s + o.byteOffset, f = 0; f < t; f++) u[d + f] = l[c ? f : t - f - 1]
  };
if (Chunk848120) {
  var er = A && M.name !== N;
  !Chunk621523(function() {
    M(1)
  }) || !Chunk621523(function() {
    new M(false)
  }) || Chunk621523(function() {
    return new M, new M(1.5), new M(NaN), 1 !== M.length || er && !C
  }) ? ((k = function(e) {
    return f(this, U), v(new M(m(e)), this, k)
  })[R] = U, U.constructor = k, Chunk190289(k, M)) : er && C && Chunk436207(M, "name", N), Chunk769827 && Chunk961050(Z) !== B && Chunk769827(Z, B);
  var ei = new G(new k(2)),
    ea = Chunk46015(Z.setInt8);
  ei.setInt8(0, 0x80000000), ei.setInt8(1, 0x80000001), (ei.getInt8(0) || !ei.getInt8(1)) && Chunk477732(Z, {
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
  var t = m(e);
  j(this, {
    type: N,
    bytes: H(F(t), 0),
    byteLength: t
  }), a || (this.byteLength = t, this.detached = false)
})[R], Z = (G = function(e, t, n) {
  f(this, Z), f(e, U);
  var r = x(e),
    i = r.byteLength,
    o = p(t);
  if (o < 0 || o > i) throw new V("Wrong offset");
  if (n = true === n ? i - o : _(n), o + n > i) throw new V(w);
  j(this, {
    type: P,
    buffer: e,
    byteLength: n,
    byteOffset: o,
    bytes: r.bytes
  }), a || (this.buffer = e, this.byteLength = n, this.byteOffset = o)
})[R], Chunk507604 && (ee(k, "byteLength", x), ee(G, "buffer", L), ee(G, "byteLength", L), ee(G, "byteOffset", L)), Chunk477732(Z, {
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
    return K(et(this, 4, e, arguments.length > 1 && arguments[1]), 23)
  },
  getFloat64: function(e) {
    return K(et(this, 8, e, arguments.length > 1 && arguments[1]), 52)
  },
  setInt8: function(e, t) {
    en(this, 1, e, z, t)
  },
  setUint8: function(e, t) {
    en(this, 1, e, z, t)
  },
  setInt16: function(e, t) {
    en(this, 2, e, q, t, arguments.length > 2 && arguments[2])
  },
  setUint16: function(e, t) {
    en(this, 2, e, q, t, arguments.length > 2 && arguments[2])
  },
  setInt32: function(e, t) {
    en(this, 4, e, X, t, arguments.length > 2 && arguments[2])
  },
  setUint32: function(e, t) {
    en(this, 4, e, X, t, arguments.length > 2 && arguments[2])
  },
  setFloat32: function(e, t) {
    en(this, 4, e, J, t, arguments.length > 2 && arguments[2])
  },
  setFloat64: function(e, t) {
    en(this, 8, e, $, t, arguments.length > 2 && arguments[2])
  }
});
Chunk25124(k, N), Chunk25124(G, P), module.exports = {
  ArrayBuffer: k,
  DataView: G
}