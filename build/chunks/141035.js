/** Chunk was on 31748 **/
/** chunk id: 141035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk696451 = require("./696451.js"),
  Chunk562153 = require("./562153.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, n) {
  var o, s;
  if (t.type === i.lp.ACTIVITY) return null != (s = null == n ? true : n.name) ? s : null;
  let c = r.Ay.isGuestOrLurker(e.guild_id, null == (o = t.user) ? true : o.id);
  return l.Ay.getName(e.getGuildId(), e.id, t.user) + (c ? " ".concat(a.intl.string(a.t["pFO/Ph"])) : "")
}