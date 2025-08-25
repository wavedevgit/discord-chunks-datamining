/** Chunk was on web.js **/
/** chunk id: 421673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cK: () => C
}), require("./642613.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk954955 = require("./954955.js"),
  a = require.n(Chunk954955),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk626135 = require("./626135.js"),
  Chunk242291 = require("./242291.js"),
  Chunk981631 = require("./981631.js");
let f = 100,
  _ = 8,
  p = 7,
  h = 6,
  m = 5,
  g = 4,
  E = 3,
  b = 2,
  y = 1,
  O = 350,
  v = a()(T, O),
  I = a()(S, O);

function T(e, t) {
  c.default.track(d.rMx.SEARCH_STARTED, {
    channel_id: t,
    search_type: d.aib.SOUNDBOARD,
    location_stack: e
  })
}

function S(e, t, n, r) {
  c.default.track(d.rMx.SEARCH_RESULT_VIEWED, {
    search_type: d.aib.SOUNDBOARD,
    channel_id: n,
    query: r,
    total_results: e.length,
    location_stack: t
  })
}

function A(e, t, n, r) {
  var o;
  let a = 0,
    c = t.name.toLocaleLowerCase(),
    d = null != t.emojiId ? s.ZP.getCustomEmojiById(t.emojiId) : null,
    O = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, false) : null,
    v = null != O ? l.ZP.getByName(O) : null,
    I = null != d ? [d.name] : null != (o = null == v ? true : v.names) ? o : [];
  return e === c && (a += _), I.includes(e) && (a += p), c.startsWith(e) && (a += h), I.some(t => t.startsWith(e)) && (a += m), c.endsWith(e) && (a += g), I.some(t => t.endsWith(e)) && (a += E), i()(e, t.name.toLocaleLowerCase()) && (a += b), I.some(t => i()(e, t)) && (a += y), a > 0 && (0, u.Nq)(n, t, r) && (a += f), a
}

function C(e, t, n, r, i) {
  let o = t.reduce((t, o) => (v(i, null == r ? true : r.id), t[o.soundId] = A(e.toLocaleLowerCase(), o, n, r), t), {}),
    a = t.filter(e => o[e.soundId] > 0).sort((e, t) => o[t.soundId] - o[e.soundId]);
  return I(a, i, null == r ? true : r.id, e), a
}