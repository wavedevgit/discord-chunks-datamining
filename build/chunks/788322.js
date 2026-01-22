/** Chunk was on 35270 **/
/** chunk id: 788322, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => s,
  L: () => E
});
var Chunk417597 = require("./417597.js"),
  Chunk320501 = require("./320501.js"),
  Chunk930125 = require("./930125.js"),
  Chunk282108 = require("./282108.js"),
  Chunk33358 = require("./33358.js");
let E = (t, e, n) => {
    var E, s;
    let _ = (0, r.bG)([i.A], () => i.A.getMessage(t, e)),
      I = (0, a.P)(_);
    if (null == _) return [];
    let c = true !== n ? t => t.url === n || t.id === n : t => (0, o.qo)({
      type: l.D.Attachment,
      media: t
    }, I);
    return null != (E = null == _ || null == (s = _.attachments) ? true : s.filter(c)) ? E : []
  },
  s = (t, e, n) => {
    var E, s;
    let _ = (0, r.bG)([i.A], () => i.A.getMessage(t, e)),
      I = (0, a.P)(_);
    if (null == _) return [];
    let c = true !== n ? t => t.id === n : t => (0, o.qo)({
      type: l.D.Embed,
      media: t
    }, I);
    return null != (E = null == _ || null == (s = _.embeds) ? true : s.filter(c)) ? E : []
  }