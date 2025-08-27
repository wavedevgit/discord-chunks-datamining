/** Chunk was on 31649 **/
/** chunk id: 720449, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./781311.js");
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk381499 = require("./381499.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk337953 = require("./337953.js"),
  Chunk875425 = require("./875425.js"),
  Chunk981631 = require("./981631.js");

function d(t) {
  let {
    text: e,
    emojiInfo: n,
    clearAfter: a,
    analyticsContext: d,
    createdAtMs: m,
    prompt: f,
    customStatusLabel: p,
    analyticsLocations: h
  } = t, b = e.trim();
  if (!(b.length > 0) && null == n) return i.Ok.updateSetting(true);
  {
    let t = i.Ok.updateSetting({
      text: b.length > 0 ? b : "",
      expiresAtMs: null != a && a !== u.FO.DONT_CLEAR ? String(l()().add((0, s.Z)(a), "ms").toDate().getTime()) : "0",
      emojiId: null != n && null != n.id ? n.id : "0",
      emojiName: null != n ? n.name : "",
      createdAtMs: String(null != m ? m : l()().toDate().getTime()),
      label: null != p ? r.Gm.create({
        value: p
      }) : true
    });
    return o.default.track(c.rMx.CUSTOM_STATUS_UPDATED, {
      location: null != d ? d.location : null,
      emoji_type: null == n ? null : null != n.id ? "custom" : "unicode",
      text_len: b.length,
      clear_after: null != a ? "".concat(a) : null,
      prompt_type: null == f ? true : f.value,
      label: null != p ? p : null,
      location_stack: h
    }), t
  }
}