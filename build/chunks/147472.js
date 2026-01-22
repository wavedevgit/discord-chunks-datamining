/** Chunk was on web.js **/
/** chunk id: 147472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  lG: () => C
}), require("./638769.js");
var Chunk91871 = require("./91871.js"),
  i = require.n(Chunk91871),
  Chunk111956 = require("./111956.js"),
  s = require.n(Chunk111956),
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
  b = 2,
  y = 1,
  O = 350,
  A = s()(S, O),
  v = s()(I, O);

function S(e, t) {
  c.default.track(d.HAw.SEARCH_STARTED, {
    channel_id: t,
    search_type: d.I4_.SOUNDBOARD,
    location_stack: e
  })
}

function I(e, t, n, r) {
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
  let s = 0,
    c = t.name.toLocaleLowerCase(),
    d = null != t.emojiId ? o.Ay.getCustomEmojiById(t.emojiId) : null,
    O = null != t.emojiName ? l.Ay.convertSurrogateToName(t.emojiName, false) : null,
    A = null != O ? l.Ay.getByName(O) : null,
    v = null != d ? [d.name] : null != (a = null == A ? true : A.names) ? a : [];
  return e === c && (s += p), v.includes(e) && (s += _), c.startsWith(e) && (s += h), v.some(t => t.startsWith(e)) && (s += m), c.endsWith(e) && (s += g), v.some(t => t.endsWith(e)) && (s += E), i()(e, t.name.toLocaleLowerCase()) && (s += b), v.some(t => i()(e, t)) && (s += y), s > 0 && (0, u.Ir)(n, t, r) && (s += f), s
}

function C(e, t, n, r, i) {
  let a = t.reduce((t, a) => (A(i, null == r ? true : r.id), t[a.soundId] = T(e.toLocaleLowerCase(), a, n, r), t), {}),
    s = t.filter(e => a[e.soundId] > 0).sort((e, t) => a[t.soundId] - a[e.soundId]);
  return v(s, i, null == r ? true : r.id, e), s
}