/** Chunk was on 41091 **/
/** chunk id: 57990, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./733351.js");
var Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk253932 = require("./253932.js"),
  Chunk954571 = require("./954571.js"),
  Chunk815484 = require("./815484.js"),
  Chunk403918 = require("./403918.js"),
  Chunk652215 = require("./652215.js");

function c(t) {
  let {
    text: e,
    emojiInfo: n,
    clearAfter: l,
    analyticsContext: c,
    createdAtMs: d,
    prompt: m,
    analyticsLocations: f
  } = t, g = e.trim();
  if (!(g.length > 0) && null == n) return r.G2.updateSetting(true);
  {
    let t = r.G2.updateSetting({
      text: g.length > 0 ? g : "",
      expiresAtMs: null != l && l !== s.yt.DONT_CLEAR ? String(a()().add((0, o.A)(l), "ms").toDate().getTime()) : "0",
      emojiId: null != n && null != n.id ? n.id : "0",
      emojiName: null != n ? n.name : "",
      createdAtMs: String(null != d ? d : a()().toDate().getTime())
    });
    return i.default.track(u.HAw.CUSTOM_STATUS_UPDATED, {
      location: null != c ? c.location : null,
      emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
      text_len: g.length,
      clear_after: null != l ? "".concat(l) : null,
      prompt_type: null == m ? true : m.value,
      location_stack: f
    }), t
  }
}