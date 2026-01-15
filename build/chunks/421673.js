/** Chunk was on web.js **/
/** chunk id: 421673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cK: () => A
}), require("./642613.js");
var Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk954955 = require("./954955.js"),
  o = require.n(Chunk954955),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk626135 = require("./626135.js"),
  Chunk242291 = require("./242291.js"),
  Chunk981631 = require("./981631.js");
let f = 100,
  p = 8,
  _ = 7,
  h = 6,
  m = 5,
  g = 4,
  E = 3,
  b = 2,
  y = 1,
  O = 350,
  v = o()(I, O),
  S = o()(T, O);

function I(e, t) {
  c.default.track(d.rMx.SEARCH_STARTED, {
    channel_id: t,
    search_type: d.aib.SOUNDBOARD,
    location_stack: e
  })
}

function T(e, t, n, r) {
  c.default.track(d.rMx.SEARCH_RESULT_VIEWED, {
    search_type: d.aib.SOUNDBOARD,
    channel_id: n,
    query: r,
    total_results: e.length,
    location_stack: t
  })
}

function C(e, t, n, r) {
  var a;
  let o = 0,
    c = t.name.toLocaleLowerCase(),
    d = null != t.emojiId ? s.ZP.getCustomEmojiById(t.emojiId) : null,
    O = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, false) : null,
    v = null != O ? l.ZP.getByName(O) : null,
    S = null != d ? [d.name] : null != (a = null == v ? true : v.names) ? a : [];
  return e === c && (o += p), S.includes(e) && (o += _), c.startsWith(e) && (o += h), S.some(t => t.startsWith(e)) && (o += m), c.endsWith(e) && (o += g), S.some(t => t.endsWith(e)) && (o += E), i()(e, t.name.toLocaleLowerCase()) && (o += b), S.some(t => i()(e, t)) && (o += y), o > 0 && (0, u.Nq)(n, t, r) && (o += f), o
}

function A(e, t, n, r, i) {
  let a = t.reduce((t, a) => (v(i, null == r ? true : r.id), t[a.soundId] = C(e.toLocaleLowerCase(), a, n, r), t), {}),
    o = t.filter(e => a[e.soundId] > 0).sort((e, t) => a[t.soundId] - a[e.soundId]);
  return S(o, i, null == r ? true : r.id, e), o
}