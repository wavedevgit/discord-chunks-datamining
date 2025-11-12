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
let o = {
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

function l(e, t, n, o, s, d) {
  let f = i.Z.getTypeSize("SHORT"),
    _ = 12,
    p = {},
    h = c(e, o, s);
  o += f;
  for (let r = 0; r < h && !(o + _ > e.byteLength); r++) {
    let r = u(e, t, n, o, s, d);
    true !== r && (p[r.name] = {
      id: r.id,
      value: r.value,
      description: r.description
    }, ("MakerNote" === r.name || t === a.eG && "LevelInfo" === r.name) && (p[r.name].__offset = r.__offset)), o += _
  }
  if (r.Z.USE_THUMBNAIL && o < e.byteLength - i.Z.getTypeSize("LONG")) {
    let r = i.Z.getLongAt(e, o, s);
    0 !== r && t === a.n1 && (p.Thumbnail = l(e, a.yJ, n, n + r, s, d))
  }
  return p
}

function c(e, t, n) {
  return t + i.Z.getTypeSize("SHORT") <= e.byteLength ? i.Z.getShortAt(e, t, n) : 0
}

function u(e, t, n, r, o, s) {
  let l, c, u = 33723,
    g = i.Z.getTypeSize("SHORT"),
    E = g + i.Z.getTypeSize("SHORT"),
    b = E + i.Z.getTypeSize("LONG"),
    y = i.Z.getShortAt(e, r, o),
    O = i.Z.getShortAt(e, r + g, o),
    v = i.Z.getLongAt(e, r + E, o);
  if (true === i.Z.typeSizes[O] || !s && true === a.ZP[t][y]) return;
  d(O, v) ? l = f(e, c = r + b, O, v, o) : (c = i.Z.getLongAt(e, r + b, o), l = _(e, n, c, O, v) ? f(e, n + c, O, v, o, y === u) : "<faulty value>"), O === i.Z.tagTypes.ASCII && (l = h(l = p(l)));
  let I = `undefined-${y}`,
    T = l;
  if (true !== a.ZP[t][y])
    if (true !== a.ZP[t][y].name && true !== a.ZP[t][y].description) {
      I = a.ZP[t][y].name;
      try {
        T = a.ZP[t][y].description(l)
      } catch (e) {
        T = m(l)
      }
    } else O === i.Z.tagTypes.RATIONAL || O === i.Z.tagTypes.SRATIONAL ? (I = a.ZP[t][y], T = "" + l[0] / l[1]) : (I = a.ZP[t][y], T = m(l));
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

function f(e, t, n, r, a, s = false) {
  let l = [];
  s && (r *= i.Z.typeSizes[n], n = i.Z.tagTypes.BYTE);
  for (let s = 0; s < r; s++) l.push(o[n](e, t, a)), t += i.Z.typeSizes[n];
  return n === i.Z.tagTypes.ASCII ? l = i.Z.getAsciiValue(l) : 1 === l.length && (l = l[0]), l
}

function _(e, t, n, r, a) {
  return t + n + i.Z.typeSizes[r] * a <= e.byteLength
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