/** Chunk was on web.js **/
/** chunk id: 146248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => s
});
var Chunk81063 = require("./81063.js"),
  Chunk921948 = require("./921948.js"),
  Chunk890280 = require("./890280.js"),
  Chunk139212 = require("./139212.js");
let s = e => {
  var t, n, s, l;
  let {
    messageId: c,
    presenceActivity: u,
    application: d
  } = e, f = o.Z.getCoverImageURL({
    messageId: c
  });
  if (null === f) return null;
  let _ = 600 * (0, i.Z)(),
    p = null != (l = null != (s = null != (n = (null == u || null == (t = u.assets) ? true : t.invite_cover_image) != null ? (0, r.xF)(u.application_id, u.assets.invite_cover_image, _) : null) ? n : f) ? s : d.getCoverImageURL(_)) ? l : null;
  return f !== p && a.s({
    messageId: c,
    coverImageURL: p
  }), p
}