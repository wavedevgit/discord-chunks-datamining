/** Chunk was on 78528 **/
/** chunk id: 228098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk311907 = require("./311907.js"),
  Chunk473529 = require("./473529.js"),
  Chunk543465 = require("./543465.js"),
  Chunk395504 = require("./395504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function c(e) {
  var t;
  let n = (0, s.jN)((null == e ? true : e.getGuildId()) != null ? e.guild_id : a.eGj),
    c = (0, r.bG)([i.Ay], () => null != e && i.Ay.isChannelRecordOrParentOptedIn(e)),
    u = (0, l.d)(null != (t = null == e ? true : e.guild_id) ? t : a.eGj);
  if (null == e) returnfalse;
  let d = u && e.hasFlag(o.lx.IS_GUILD_RESOURCE_CHANNEL);
  return n && !d && !c && !e.isThread()
}