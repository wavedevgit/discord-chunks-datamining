/** Chunk was on 11010 **/
/** chunk id: 584729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk271383 = require("./271383.js"),
  Chunk5192 = require("./5192.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, n) {
  var o, c;
  if (t.type === l.fO.ACTIVITY) return null != (c = null == n ? true : n.name) ? c : null;
  let s = r.ZP.isGuestOrLurker(e.guild_id, null == (o = t.user) ? true : o.id);
  return i.ZP.getName(e.getGuildId(), e.id, t.user) + (s ? " ".concat(a.intl.string(a.t["pFO/Ph"])) : "")
}