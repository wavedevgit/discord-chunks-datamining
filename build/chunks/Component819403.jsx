/** Chunk was on 98783 **/
/** chunk id: 819403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk471253 = require("./471253.js"),
  Chunk200498 = require("./200498.js"),
  Chunk88751 = require("./88751.js"),
  Chunk267980 = require("./267980.js"),
  Chunk647767 = require("./647767.js"),
  Chunk623633 = require("./623633.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  var t;
  let n = (0, b.Z)(),
    m = null == n ? true : n.id,
    v = null == n ? true : n.guild_id,
    p = (0, i.e7)([a.Z], () => a.Z.getGuild(v), [v]),
    O = (0, i.e7)([s.Z], () => null != m ? s.Z.getVoiceStateForChannel(m, e.id) : null, [m, e.id]),
    h = (null == (t = o.default.getCurrentUser()) ? true : t.id) === e.id,
    j = (0, g.Z)(),
    x = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, m), [m, e.id]),
    _ = (0, d.B)(m),
    y = (0, f.s)();
  if (null == n || null == p || null == O || x.speaker) return null;
  let I = () => {
    h ? (0, u.RK)(n, false) : (0, u._0)(n, e.id)
  };
  return h && y ? null : _ ? (0, l.jsx)(r.sNh, {
    id: "invite-speaker",
    label: h ? Z.intl.string(Z.t["W6c/Vf"]) : Z.intl.string(Z.t.VUCWcO),
    action: I
  }) : j && h ? (0, l.jsx)(r.sNh, {
    id: "invite-speaker",
    label: Z.intl.string(Z.t["W6c/Vf"]),
    action: I
  }) : null
}