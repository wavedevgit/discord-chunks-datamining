/** Chunk was on 98783 **/
/** chunk id: 819403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk471253 = require("./471253.js"),
  Chunk200498 = require("./200498.js"),
  Chunk88751 = require("./88751.js"),
  Chunk267980 = require("./267980.js"),
  Chunk623633 = require("./623633.js"),
  Chunk388032 = require("./388032.jsx");

function Z(e) {
  var t;
  let n = (0, f.Z)(),
    Z = null == n ? true : n.id,
    m = null == n ? true : n.guild_id,
    v = (0, i.e7)([a.Z], () => a.Z.getGuild(m), [m]),
    p = (0, i.e7)([s.Z], () => null != Z ? s.Z.getVoiceStateForChannel(Z, e.id) : null, [Z, e.id]),
    O = (null == (t = o.default.getCurrentUser()) ? true : t.id) === e.id,
    h = (0, g.Z)(),
    j = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, Z), [Z, e.id]),
    x = (0, d.B)(Z);
  if (null == n || null == v || null == p || j.speaker) return null;
  let _ = () => {
    O ? (0, u.RK)(n, false) : (0, u._0)(n, e.id)
  };
  return x ? <r.sNh id={"invite-speaker"} label={O ? b.intl.string(b.t["W6c/VV"]) : b.intl.string(b.t.VUCWcH)} action={_} /> : h && O ? <r.sNh id={"invite-speaker"} label={b.intl.string(b.t["W6c/VV"])} action={_} /> : null
}