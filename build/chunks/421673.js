/** Chunk was on web.js **/
/** chunk id: 421673, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cK: () => A
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
  p = 8,
  _ = 7,
  m = 6,
  h = 5,
  g = 4,
  E = 3,
  b = 2,
  y = 1,
  O = 350,
  v = a()(I, O),
  S = a()(T, O);

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
  var o;
  let a = 0,
    c = t.name.toLocaleLowerCase(),
    d = null != t.emojiId ? s.ZP.getCustomEmojiById(t.emojiId) : null,
    O = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, false) : null,
    v = null != O ? l.ZP.getByName(O) : null,
    S = null != d ? [d.name] : null != (o = null == v ? true : v.names) ? o : [];
  return e === c && (a += p), S.includes(e) && (a += _), c.startsWith(e) && (a += m), S.some(t => t.startsWith(e)) && (a += h), c.endsWith(e) && (a += g), S.some(t => t.endsWith(e)) && (a += E), i()(e, t.name.toLocaleLowerCase()) && (a += b), S.some(t => i()(e, t)) && (a += y), a > 0 && (0, u.Nq)(n, t, r) && (a += f), a
}

function A(e, t, n, r, i) {
  let o = t.reduce((t, o) => (v(i, null == r ? true : r.id), t[o.soundId] = C(e.toLocaleLowerCase(), o, n, r), t), {}),
    a = t.filter(e => o[e.soundId] > 0).sort((e, t) => o[t.soundId] - o[e.soundId]);
  return S(a, i, null == r ? true : r.id, e), a
}