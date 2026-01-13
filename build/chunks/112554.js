/** Chunk was on 37220 **/
/** chunk id: 112554, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c,
  v: () => s
});
var Chunk399606 = require("./399606.js"),
  Chunk375954 = require("./375954.js"),
  Chunk991621 = require("./991621.js"),
  Chunk629710 = require("./629710.js"),
  Chunk262777 = require("./262777.js");
let s = (e, t, n) => {
    var s, c;
    let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
      d = (0, a.v)(u);
    if (null == u) return [];
    let f = true !== n ? e => e.url === n || e.id === n : e => (0, o.g4)({
      type: l.l.Attachment,
      media: e
    }, d);
    return null != (c = null == u || null == (s = u.attachments) ? true : s.filter(f)) ? c : []
  },
  c = (e, t, n) => {
    var s, c;
    let u = (0, r.e7)([i.Z], () => i.Z.getMessage(e, t)),
      d = (0, a.v)(u);
    if (null == u) return [];
    let f = true !== n ? e => e.id === n : e => (0, o.g4)({
      type: l.l.Embed,
      media: e
    }, d);
    return null != (c = null == u || null == (s = u.embeds) ? true : s.filter(f)) ? c : []
  }