/** Chunk was on web.js **/
/** chunk id: 112554, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c,
  v: () => l
});
var Chunk399606 = require("./399606.js"),
  Chunk375954 = require("./375954.js"),
  Chunk991621 = require("./991621.js"),
  Chunk629710 = require("./629710.js"),
  Chunk262777 = require("./262777.js");
let l = (e, t, n) => {
    var l, c;
    let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
      d = (0, s.v)(u);
    if (null == u) return [];
    let f = true !== n ? e => e.url === n || e.id === n : e => (0, a.g4)({
      type: o.l.Attachment,
      media: e
    }, d);
    return null != (c = null == u || null == (l = u.attachments) ? true : l.filter(f)) ? c : []
  },
  c = (e, t, n) => {
    var l, c;
    let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
      d = (0, s.v)(u);
    if (null == u) return [];
    let f = true !== n ? e => e.id === n : e => (0, a.g4)({
      type: o.l.Embed,
      media: e
    }, d);
    return null != (c = null == u || null == (l = u.embeds) ? true : l.filter(f)) ? c : []
  }