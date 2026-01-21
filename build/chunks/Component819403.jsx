/** Chunk was on 69220 **/
/** chunk id: 819403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk471253 = require("./471253.js"),
  Chunk200498 = require("./200498.js"),
  Chunk88751 = require("./88751.js"),
  Chunk267980 = require("./267980.js"),
  Chunk623633 = require("./623633.js"),
  Chunk430104 = require("./430104.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  var t;
  let n = (0, b.Z)(),
    m = null == n ? true : n.id,
    O = null == n ? true : n.guild_id,
    h = (0, l.e7)([u.Z], () => u.Z.getGuild(O), [O]),
    j = (0, l.e7)([s.Z], () => null != m ? s.Z.getVoiceStateForChannel(m, e.id) : null, [m, e.id]),
    y = (null == (t = d.default.getCurrentUser()) ? true : t.id) === e.id,
    P = (0, Z.Z)(),
    x = (0, l.e7)([g.ZP], () => g.ZP.getPermissionsForUser(e.id, m), [m, e.id]),
    S = (0, f.B)(m),
    E = (0, p.sP)();
  if (null == n || null == h || null == j || x.speaker) return null;
  let C = () => {
    if (y) {
      if ((0, p.u1)(n.id)) return void o.Z.showAgeVerificationGetStartedModal({
        entryPoint: a.cU.STAGE_CHANNEL_RAISE_HAND
      });
      (0, c.RK)(n, false)
    } else(0, c._0)(n, e.id)
  };
  return y && E ? null : S ? (0, i.jsx)(r.sNh, {
    id: "invite-speaker",
    label: y ? v.intl.string(v.t["W6c/Vf"]) : v.intl.string(v.t.VUCWcO),
    action: C
  }) : P && y ? (0, i.jsx)(r.sNh, {
    id: "invite-speaker",
    label: v.intl.string(v.t["W6c/Vf"]),
    action: C
  }) : null
}