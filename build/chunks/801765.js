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
    y = E + i.A.getTypeSize("LONG"),
    b = i.A.getShortAt(e, r, s),
    O = i.A.getShortAt(e, r + g, s),
    v = i.A.getLongAt(e, r + E, s);
  if (true === i.A.typeSizes[O] || !o && true === a.Ay[t][b]) return;
  d(O, v) ? l = f(e, c = r + y, O, v, s) : (c = i.A.getLongAt(e, r + y, s), l = p(e, n, c, O, v) ? f(e, n + c, O, v, s, b === u) : "<faulty value>"), O === i.A.tagTypes.ASCII && (l = h(l = _(l)));
  let A = `undefined-${b}`,
    I = l;
  if (true !== a.Ay[t][b])
    if (true !== a.Ay[t][b].name && true !== a.Ay[t][b].description) {
      A = a.Ay[t][b].name;
      try {
        I = a.Ay[t][b].description(l)
      } catch (e) {
        I = m(l)
      }
    } else O === i.A.tagTypes.RATIONAL || O === i.A.tagTypes.SRATIONAL ? (A = a.Ay[t][b], I = "" + l[0] / l[1]) : (A = a.Ay[t][b], I = m(l));
  return {
    id: b,
    name: A,
    value: l,
    description: I,
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