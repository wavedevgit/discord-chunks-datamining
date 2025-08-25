/** Chunk was on web.js **/
/** chunk id: 267236, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => l,
  a: () => s
});
var Chunk441349 = require("./441349.js"),
  Chunk529883 = require("./529883.js"),
  Chunk692764 = require("./692764.js");
let a = {
  1: Chunk529883.Z.getByteAt,
  2: Chunk529883.Z.getAsciiAt,
  3: Chunk529883.Z.getShortAt,
  4: Chunk529883.Z.getLongAt,
  5: Chunk529883.Z.getRationalAt,
  7: Chunk529883.Z.getUndefinedAt,
  9: Chunk529883.Z.getSlongAt,
  10: Chunk529883.Z.getSrationalAt,
  13: Chunk529883.Z.getIfdPointerAt
};

function s(e, t, n) {
  return t + i.Z.getLongAt(e, t + 4, n)
}

function l(e, t, n, a, s, d) {
  let f = i.Z.getTypeSize("SHORT"),
    _ = 12,
    p = {},
    h = c(e, a, s);
  a += f;
  for (let r = 0; r < h && !(a + _ > e.byteLength); r++) {
    let r = u(e, t, n, a, s, d);
    true !== r && (p[r.name] = {
      id: r.id,
      value: r.value,
      description: r.description
    }, ("MakerNote" === r.name || t === o.eG && "LevelInfo" === r.name) && (p[r.name].__offset = r.__offset)), a += _
  }
  if (r.Z.USE_THUMBNAIL && a < e.byteLength - i.Z.getTypeSize("LONG")) {
    let r = i.Z.getLongAt(e, a, s);
    0 !== r && t === o.n1 && (p.Thumbnail = l(e, o.yJ, n, n + r, s, d))
  }
  return p
}

function c(e, t, n) {
  return t + i.Z.getTypeSize("SHORT") <= e.byteLength ? i.Z.getShortAt(e, t, n) : 0
}

function u(e, t, n, r, a, s) {
  let l, c, u = 33723,
    g = i.Z.getTypeSize("SHORT"),
    E = g + i.Z.getTypeSize("SHORT"),
    b = E + i.Z.getTypeSize("LONG"),
    y = i.Z.getShortAt(e, r, a),
    O = i.Z.getShortAt(e, r + g, a),
    v = i.Z.getLongAt(e, r + E, a);
  if (true === i.Z.typeSizes[O] || !s && true === o.ZP[t][y]) return;
  d(O, v) ? l = f(e, c = r + b, O, v, a) : (c = i.Z.getLongAt(e, r + b, a), l = _(e, n, c, O, v) ? f(e, n + c, O, v, a, y === u) : "<faulty value>"), O === i.Z.tagTypes.ASCII && (l = h(l = p(l)));
  let I = `undefined-${y}`,
    T = l;
  if (true !== o.ZP[t][y])
    if (true !== o.ZP[t][y].name && true !== o.ZP[t][y].description) {
      I = o.ZP[t][y].name;
      try {
        T = o.ZP[t][y].description(l)
      } catch (e) {
        T = m(l)
      }
    } else O === i.Z.tagTypes.RATIONAL || O === i.Z.tagTypes.SRATIONAL ? (I = o.ZP[t][y], T = "" + l[0] / l[1]) : (I = o.ZP[t][y], T = m(l));
  return {
    id: y,
    name: I,
    value: l,
    description: T,
    __offset: c
  }
}

function d(e, t) {
  return i.Z.typeSizes[e] * t <= i.Z.getTypeSize("LONG")
}

function f(e, t, n, r, o, s = false) {
  let l = [];
  s && (r *= i.Z.typeSizes[n], n = i.Z.tagTypes.BYTE);
  for (let s = 0; s < r; s++) l.push(a[n](e, t, o)), t += i.Z.typeSizes[n];
  return n === i.Z.tagTypes.ASCII ? l = i.Z.getAsciiValue(l) : 1 === l.length && (l = l[0]), l
}

function _(e, t, n, r, o) {
  return t + n + i.Z.typeSizes[r] * o <= e.byteLength
}

function p(e) {
  let t = [],
    n = 0;
  for (let r = 0; r < e.length; r++) {
    if ("\0" === e[r]) {
      n++;
      continue
    }
    true === t[n] && (t[n] = ""), t[n] += e[r]
  }
  return t
}

function h(e) {
  try {
    return e.map(e => decodeURIComponent(escape(e)))
  } catch (t) {
    return e
  }
}

function m(e) {
  return e instanceof Array ? e.join(", ") : e
}