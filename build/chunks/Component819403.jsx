/** Chunk was on 75454 **/
/** chunk id: 819403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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

function v(e) {
  var t;
  let n = (0, f.Z)(),
    v = null == n ? true : n.id,
    C = null == n ? true : n.guild_id,
    M = (0, l.e7)([d.Z], () => d.Z.getGuild(C), [C]),
    O = (0, l.e7)([c.Z], () => null != v ? c.Z.getVoiceStateForChannel(v, e.id) : null, [v, e.id]),
    I = (null == (t = o.default.getCurrentUser()) ? true : t.id) === e.id,
    b = (0, A.Z)(),
    Z = (0, l.e7)([E.ZP], () => E.ZP.getPermissionsForUser(e.id, v), [v, e.id]),
    N = (0, s.B)(v),
    T = (0, g.sP)();
  if (null == n || null == M || null == O || Z.speaker) return null;
  let h = () => {
    if (I) {
      if ((0, g.u1)()) return void u.Z.showAgeVerificationGetStartedModal({
        entryPoint: a.cU.STAGE_CHANNEL_RAISE_HAND
      });
      (0, _.RK)(n, false)
    } else(0, _._0)(n, e.id)
  };
  return I && T ? null : N ? (0, i.jsx)(r.sNh, {
    id: "invite-speaker",
    label: I ? S.intl.string(S.t["W6c/Vf"]) : S.intl.string(S.t.VUCWcO),
    action: h
  }) : b && I ? (0, i.jsx)(r.sNh, {
    id: "invite-speaker",
    label: S.intl.string(S.t["W6c/Vf"]),
    action: h
  }) : null
}