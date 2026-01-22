/** Chunk was on web.js **/
/** chunk id: 801765, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => o,
  y: () => l
});
var Chunk761799 = require("./761799.js"),
  Chunk668459 = require("./668459.js"),
  Chunk105423 = require("./105423.js");
let s = {
  1: Chunk668459.A.getByteAt,
  2: Chunk668459.A.getAsciiAt,
  3: Chunk668459.A.getShortAt,
  4: Chunk668459.A.getLongAt,
  5: Chunk668459.A.getRationalAt,
  7: Chunk668459.A.getUndefinedAt,
  9: Chunk668459.A.getSlongAt,
  10: Chunk668459.A.getSrationalAt,
  13: Chunk668459.A.getIfdPointerAt
};

function o(e, t, n) {
  return t + i.A.getLongAt(e, t + 4, n)
}

function l(e, t, n, s, o, d) {
  let f = i.A.getTypeSize("SHORT"),
    p = 12,
    _ = {},
    h = c(e, s, o);
  s += f;
  for (let r = 0; r < h && !(s + p > e.byteLength); r++) {
    let r = u(e, t, n, s, o, d);
    true !== r && (_[r.name] = {
      id: r.id,
      value: r.value,
      description: r.description
    }, ("MakerNote" === r.name || t === a.SI && "LevelInfo" === r.name) && (_[r.name].__offset = r.__offset)), s += p
  }
  if (r.A.USE_THUMBNAIL && s < e.byteLength - i.A.getTypeSize("LONG")) {
    let r = i.A.getLongAt(e, s, o);
    0 !== r && t === a.eY && (_.Thumbnail = l(e, a.Qb, n, n + r, o, d))
  }
  return _
}

function c(e, t, n) {
  return t + i.A.getTypeSize("SHORT") <= e.byteLength ? i.A.getShortAt(e, t, n) : 0
}

function u(e, t, n, r, s, o) {
  let l, c, u = 33723,
    g = i.A.getTypeSize("SHORT"),
    E = g + i.A.getTypeSize("SHORT"),
    b = E + i.A.getTypeSize("LONG"),
    y = i.A.getShortAt(e, r, s),
    O = i.A.getShortAt(e, r + g, s),
    A = i.A.getLongAt(e, r + E, s);
  if (true === i.A.typeSizes[O] || !o && true === a.Ay[t][y]) return;
  d(O, A) ? l = f(e, c = r + b, O, A, s) : (c = i.A.getLongAt(e, r + b, s), l = p(e, n, c, O, A) ? f(e, n + c, O, A, s, y === u) : "<faulty value>"), O === i.A.tagTypes.ASCII && (l = h(l = _(l)));
  let v = `undefined-${y}`,
    S = l;
  if (true !== a.Ay[t][y])
    if (true !== a.Ay[t][y].name && true !== a.Ay[t][y].description) {
      v = a.Ay[t][y].name;
      try {
        S = a.Ay[t][y].description(l)
      } catch (e) {
        S = m(l)
      }
    } else O === i.A.tagTypes.RATIONAL || O === i.A.tagTypes.SRATIONAL ? (v = a.Ay[t][y], S = "" + l[0] / l[1]) : (v = a.Ay[t][y], S = m(l));
  return {
    id: y,
    name: v,
    value: l,
    description: S,
    __offset: c
  }
}

function d(e, t) {
  return i.A.typeSizes[e] * t <= i.A.getTypeSize("LONG")
}

function f(e, t, n, r, a, o = false) {
  let l = [];
  o && (r *= i.A.typeSizes[n], n = i.A.tagTypes.BYTE);
  for (let o = 0; o < r; o++) l.push(s[n](e, t, a)), t += i.A.typeSizes[n];
  return n === i.A.tagTypes.ASCII ? l = i.A.getAsciiValue(l) : 1 === l.length && (l = l[0]), l
}

function p(e, t, n, r, a) {
  return t + n + i.A.typeSizes[r] * a <= e.byteLength
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