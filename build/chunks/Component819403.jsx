/** Chunk was on 70675 **/
/** chunk id: 819403, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e) {
  var n;
  let t = (0, b.Z)(),
    h = null == t ? true : t.id,
    p = null == t ? true : t.guild_id,
    P = (0, i.e7)([u.Z], () => u.Z.getGuild(p), [p]),
    j = (0, i.e7)([d.Z], () => null != h ? d.Z.getVoiceStateForChannel(h, e.id) : null, [h, e.id]),
    v = (null == (n = s.default.getCurrentUser()) ? true : n.id) === e.id,
    N = (0, f.Z)(),
    y = (0, i.e7)([Z.ZP], () => Z.ZP.getPermissionsForUser(e.id, h), [h, e.id]),
    x = (0, g.B)(h),
    E = (0, O.sP)();
  if (null == t || null == P || null == j || y.speaker) return null;
  let _ = () => {
    if (v) {
      if ((0, O.u1)()) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.STAGE_CHANNEL_RAISE_HAND
      });
      (0, c.RK)(t, false)
    } else(0, c._0)(t, e.id)
  };
  return v && E ? null : x ? (0, l.jsx)(r.sNh, {
    id: "invite-speaker",
    label: v ? m.intl.string(m.t["W6c/Vf"]) : m.intl.string(m.t.VUCWcO),
    action: _
  }) : N && v ? (0, l.jsx)(r.sNh, {
    id: "invite-speaker",
    label: m.intl.string(m.t["W6c/Vf"]),
    action: _
  }) : null
}