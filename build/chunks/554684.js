/** Chunk was on web.js **/
/** chunk id: 554684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => l,
  a: () => s
});
var Chunk791473 = require("./791473.js"),
  Chunk610388 = require("./610388.js"),
  Chunk765859 = require("./765859.js");
let a = {
  1: Chunk610388.Z.getByteAt,
  2: Chunk610388.Z.getAsciiAt,
  3: Chunk610388.Z.getShortAt,
  4: Chunk610388.Z.getLongAt,
  5: Chunk610388.Z.getRationalAt,
  7: Chunk610388.Z.getUndefinedAt,
  9: Chunk610388.Z.getSlongAt,
  10: Chunk610388.Z.getSrationalAt,
  13: Chunk610388.Z.getIfdPointerAt
};

function s(e, t, n) {
  return t + i.Z.getLongAt(e, t + 4, n)
}

function l(e, t, n, a, s, d) {
  let f = i.Z.getTypeSize("SHORT"),
    p = 12,
    _ = {},
    m = c(e, a, s);
  a += f;
  for (let r = 0; r < m && !(a + p > e.byteLength); r++) {
    let r = u(e, t, n, a, s, d);
    true !== r && (_[r.name] = {
      id: r.id,
      value: r.value,
      description: r.description
    }, ("MakerNote" === r.name || t === o.eG && "LevelInfo" === r.name) && (_[r.name].__offset = r.__offset)), a += p
  }
  if (r.Z.USE_THUMBNAIL && a < e.byteLength - i.Z.getTypeSize("LONG")) {
    let r = i.Z.getLongAt(e, a, s);
    0 !== r && t === o.n1 && (_.Thumbnail = l(e, o.yJ, n, n + r, s, d))
  }
  return _
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
  d(O, v) ? l = f(e, c = r + b, O, v, a) : (c = i.Z.getLongAt(e, r + b, a), l = p(e, n, c, O, v) ? f(e, n + c, O, v, a, y === u) : "<faulty value>"), O === i.Z.tagTypes.ASCII && (l = m(l = _(l)));
  let S = `undefined-${y}`,
    I = l;
  if (true !== o.ZP[t][y])
    if (true !== o.ZP[t][y].name && true !== o.ZP[t][y].description) {
      S = o.ZP[t][y].name;
      try {
        I = o.ZP[t][y].description(l)
      } catch (e) {
        I = h(l)
      }
    } else O === i.Z.tagTypes.RATIONAL || O === i.Z.tagTypes.SRATIONAL ? (S = o.ZP[t][y], I = "" + l[0] / l[1]) : (S = o.ZP[t][y], I = h(l));
  return {
    id: y,
    name: S,
    value: l,
    description: I,
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

function p(e, t, n, r, o) {
  return t + n + i.Z.typeSizes[r] * o <= e.byteLength
}

function _(e) {
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

function m(e) {
  try {
    return e.map(e => decodeURIComponent(escape(e)))
  } catch (t) {
    return e
  }
}

function h(e) {
  return e instanceof Array ? e.join(", ") : e
}