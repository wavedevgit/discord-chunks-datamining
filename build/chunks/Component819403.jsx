/** Chunk was on 98783 **/
/** chunk id: 819403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function p(e) {
  var t;
  let n = (0, Z.Z)(),
    p = null == n ? true : n.id,
    O = null == n ? true : n.guild_id,
    h = (0, l.e7)([s.Z], () => s.Z.getGuild(O), [O]),
    _ = (0, l.e7)([d.Z], () => null != p ? d.Z.getVoiceStateForChannel(p, e.id) : null, [p, e.id]),
    j = (null == (t = u.default.getCurrentUser()) ? true : t.id) === e.id,
    x = (0, b.Z)(),
    N = (0, l.e7)([f.ZP], () => f.ZP.getPermissionsForUser(e.id, p), [p, e.id]),
    y = (0, g.B)(p),
    I = (0, m.sP)();
  if (null == n || null == h || null == _ || N.speaker) return null;
  let E = () => {
    if (j) {
      if ((0, m.u1)()) return void a.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.STAGE_CHANNEL_RAISE_HAND
      });
      (0, c.RK)(n, false)
    } else(0, c._0)(n, e.id)
  };
  return j && I ? null : y ? (0, i.jsx)(r.sNh, {
    id: "invite-speaker",
    label: j ? v.intl.string(v.t["W6c/Vf"]) : v.intl.string(v.t.VUCWcO),
    action: E
  }) : x && j ? (0, i.jsx)(r.sNh, {
    id: "invite-speaker",
    label: v.intl.string(v.t["W6c/Vf"]),
    action: E
  }) : null
}