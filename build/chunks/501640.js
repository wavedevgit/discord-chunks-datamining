/** Chunk was on 1272 **/
/** chunk id: 501640, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk984933 = require("./984933.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let t = (0, i.e7)([l.ZP], () => {
    var t;
    return null != (t = l.ZP.getChannels(e)[l.sH]) ? t : []
  }, [e]);
  return 0 === t.length ? 0 : t.filter(e => {
    let {
      channel: t
    } = e;
    return a.Z.can(r.$e(o.Plq.SEND_MESSAGES, o.Plq.VIEW_CHANNEL), t)
  }).length
}