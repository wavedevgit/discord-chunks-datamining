/** Chunk was on web.js **/
/** chunk id: 584729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk271383 = require("./271383.js"),
  Chunk5192 = require("./5192.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n) {
  var s, l;
  if (t.type === o.fO.ACTIVITY) return null != (l = null == n ? true : n.name) ? l : null;
  let c = r.ZP.isGuestOrLurker(e.guild_id, null == (s = t.user) ? true : s.id);
  return i.ZP.getName(e.getGuildId(), e.id, t.user) + (c ? " ".concat(a.intl.string(a.t["pFO/Pj"])) : "")
}