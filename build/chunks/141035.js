/** Chunk was on 31748 **/
/** chunk id: 141035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk696451 = require("./696451.js"),
  Chunk562153 = require("./562153.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t, n) {
  var s, o;
  if (t.type === i.lp.ACTIVITY) return null != (o = null == n ? true : n.name) ? o : null;
  let c = l.Ay.isGuestOrLurker(e.guild_id, null == (s = t.user) ? true : s.id);
  return r.Ay.getName(e.getGuildId(), e.id, t.user) + (c ? " ".concat(a.intl.string(a.t["pFO/Ph"])) : "")
}