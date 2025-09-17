/** Chunk was on 76215 **/
/** chunk id: 720449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./781311.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk337953 = require("./337953.js"),
  Chunk875425 = require("./875425.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let {
    text: t,
    emojiInfo: n,
    clearAfter: r,
    analyticsContext: c,
    createdAtMs: d,
    prompt: m,
    analyticsLocations: f
  } = e, p = t.trim();
  if (!(p.length > 0) && null == n) return l.Ok.updateSetting(true);
  {
    let e = l.Ok.updateSetting({
      text: p.length > 0 ? p : "",
      expiresAtMs: null != r && r !== u.FO.DONT_CLEAR ? String(i()().add((0, o.Z)(r), "ms").toDate().getTime()) : "0",
      emojiId: null != n && null != n.id ? n.id : "0",
      emojiName: null != n ? n.name : "",
      createdAtMs: String(null != d ? d : i()().toDate().getTime())
    });
    return a.default.track(s.rMx.CUSTOM_STATUS_UPDATED, {
      location: null != c ? c.location : null,
      emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
      text_len: p.length,
      clear_after: null != r ? "".concat(r) : null,
      prompt_type: null == m ? true : m.value,
      location_stack: f
    }), e
  }
}