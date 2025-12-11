/** Chunk was on 40184 **/
/** chunk id: 256413, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk931261 = require("./931261.js"),
  Chunk9156 = require("./9156.js"),
  Chunk398758 = require("./398758.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function c(e) {
  var t;
  let n = (0, a.DM)((null == e ? true : e.getGuildId()) != null ? e.guild_id : o.kod),
    c = (0, i.e7)([l.ZP], () => null != e && l.ZP.isChannelRecordOrParentOptedIn(e)),
    u = (0, r.g)(null != (t = null == e ? true : e.guild_id) ? t : o.kod);
  if (null == e) returnfalse;
  let d = u && e.hasFlag(s.zZ.IS_GUILD_RESOURCE_CHANNEL);
  return n && !d && !c && !e.isThread()
}