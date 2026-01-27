/** Chunk was on web.js **/
/** chunk id: 147472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  lG: () => C
}), require("./638769.js");
var Chunk91871 = require("./91871.js"),
  i = require.n(Chunk91871),
  Chunk111956 = require("./111956.js"),
  o = require.n(Chunk111956),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk954571 = require("./954571.js"),
  Chunk536432 = require("./536432.js"),
  Chunk652215 = require("./652215.js");
let f = 100,
  p = 8,
  _ = 7,
  h = 6,
  m = 5,
  g = 4,
  E = 3,
  y = 2,
  b = 1,
  O = 350,
  v = o()(I, O),
  A = o()(S, O);

function I(e, t) {
  c.default.track(d.HAw.SEARCH_STARTED, {
    channel_id: t,
    search_type: d.I4_.SOUNDBOARD,
    location_stack: e
  })
}

function S(e, t, n, r) {
  c.default.track(d.HAw.SEARCH_RESULT_VIEWED, {
    search_type: d.I4_.SOUNDBOARD,
    channel_id: n,
    query: r,
    total_results: e.length,
    location_stack: t
  })
}

function T(e, t, n, r) {
  var a;
  let o = 0,
    c = t.name.toLocaleLowerCase(),
    d = null != t.emojiId ? s.Ay.getCustomEmojiById(t.emojiId) : null,
    O = null != t.emojiName ? l.Ay.convertSurrogateToName(t.emojiName, false) : null,
    v = null != O ? l.Ay.getByName(O) : null,
    A = null != d ? [d.name] : null != (a = null == v ? true : v.names) ? a : [];
  return e === c && (o += p), A.includes(e) && (o += _), c.startsWith(e) && (o += h), A.some(t => t.startsWith(e)) && (o += m), c.endsWith(e) && (o += g), A.some(t => t.endsWith(e)) && (o += E), i()(e, t.name.toLocaleLowerCase()) && (o += y), A.some(t => i()(e, t)) && (o += b), o > 0 && (0, u.Ir)(n, t, r) && (o += f), o
}

function C(e, t, n, r, i) {
  let a = t.reduce((t, a) => (v(i, null == r ? true : r.id), t[a.soundId] = T(e.toLocaleLowerCase(), a, n, r), t), {}),
    o = t.filter(e => a[e.soundId] > 0).sort((e, t) => a[t.soundId] - a[e.soundId]);
  return A(o, i, null == r ? true : r.id, e), o
}