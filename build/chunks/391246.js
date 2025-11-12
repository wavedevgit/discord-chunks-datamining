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
  R = "DataView",
  P = "prototype",
  D = "Wrong length",
  w = "Wrong index",
  x = Chunk199838.getterFor(N),
  L = Chunk199838.getterFor(R),
  M = Chunk199838.set,
  j = Chunk127849[N],
  k = j,
  U = k && k[P],
  G = Chunk127849[R],
  B = G && G[P],
  Z = Object.prototype,
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
    return W(m(e), 23, 4)
  },
  $ = function(e) {
    return W(e, 52, 8)
  },
  ee = function(e, t, n) {
    c(e[P], t, {
      configurable: true,
      get: function() {
        return n(this)[t]
      }
    })
  },
  et = function(e, t, n, r) {
    var i = L(e),
      a = h(n),
      o = !!r;
    if (a + t > i.byteLength) throw new V(w);
    var s = i.bytes,
      l = a + i.byteOffset,
      c = O(s, l, l + t);
    return o ? c : Y(c)
  },
  en = function(e, t, n, r, i, a) {
    var o = L(e),
      s = h(n),
      l = r(+i),
      c = !!a;
    if (s + t > o.byteLength) throw new V(w);
    for (var u = o.bytes, d = s + o.byteOffset, f = 0; f < t; f++) u[d + f] = l[c ? f : t - f - 1]
  };
if (Chunk848120) {
  var er = A && j.name !== N;
  !Chunk621523(function() {
    j(1)
  }) || !Chunk621523(function() {
    new j(false)
  }) || Chunk621523(function() {
    return new j, new j(1.5), new j(NaN), 1 !== j.length || er && !C
  }) ? ((k = function(e) {
    return f(this, U), v(new j(h(e)), this, k)
  })[P] = U, U.constructor = k, Chunk190289(k, j)) : er && C && Chunk436207(j, "name", N), Chunk769827 && Chunk961050(B) !== Z && Chunk769827(B, Z);
  var ei = new G(new k(2)),
    ea = Chunk46015(B.setInt8);
  ei.setInt8(0, 0x80000000), ei.setInt8(1, 0x80000001), (ei.getInt8(0) || !ei.getInt8(1)) && Chunk477732(B, {
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
  M(this, {
    type: N,
    bytes: H(F(t), 0),
    byteLength: t
  }), a || (this.byteLength = t, this.detached = false)
})[P], B = (G = function(e, t, n) {
  f(this, B), f(e, U);
  var r = x(e),
    i = r.byteLength,
    o = _(t);
  if (o < 0 || o > i) throw new V("Wrong offset");
  if (n = true === n ? i - o : p(n), o + n > i) throw new V(D);
  M(this, {
    type: R,
    buffer: e,
    byteLength: n,
    byteOffset: o,
    bytes: r.bytes
  }), a || (this.buffer = e, this.byteLength = n, this.byteOffset = o)
})[P], Chunk507604 && (ee(k, "byteLength", x), ee(G, "buffer", L), ee(G, "byteLength", L), ee(G, "byteOffset", L)), Chunk477732(B, {
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
Chunk25124(k, N), Chunk25124(G, R), module.exports = {
  ArrayBuffer: k,
  DataView: G
}