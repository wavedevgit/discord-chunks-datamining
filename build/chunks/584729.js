/** Chunk was on 73726 **/
/** chunk id: 584729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk271383 = require("./271383.js"),
  Chunk5192 = require("./5192.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, n) {
  var o, s;
  if (t.type === l.fO.ACTIVITY) return null != (s = null == n ? true : n.name) ? s : null;
  let c = r.ZP.isGuestOrLurker(e.guild_id, null == (o = t.user) ? true : o.id);
  return i.ZP.getName(e.getGuildId(), e.id, t.user) + (c ? " ".concat(a.intl.string(a.t["pFO/Ph"])) : "")
}