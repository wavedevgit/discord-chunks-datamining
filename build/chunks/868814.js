/** Chunk was on 32923 **/
/** chunk id: 868814, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./539854.js"), require("./642613.js");
var Chunk442837 = require("./442837.js"),
  Chunk977258 = require("./977258.js"),
  Chunk958832 = require("./958832.js"),
  Chunk592125 = require("./592125.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return (0, r.Wu)([l.Z, a.Z], () => {
    var t;
    let n = (null != (t = l.Z.getTopChannelIds(e.id)) ? t : []).map(e => a.Z.getChannel(e)).filter(t => null == t || t.id !== e.rulesChannelId),
      r = [],
      o = 0;
    return n.forEach(e => {
      if (e.type === s.d4z.GUILD_ANNOUNCEMENT) {
        if (o >= 2) return;
        o++
      }
      r.length < 5 && !r.includes(e) && r.push(e)
    }), r.sort((t, n) => !!(0, i.s)(e.id, n.id) - !!(0, i.s)(e.id, t.id)), r
  })
}