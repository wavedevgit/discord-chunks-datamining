/** Chunk was on 83546 **/
/** chunk id: 751277, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893607 = require("./893607.js"),
  Chunk701190 = require("./701190.js"),
  Chunk411198 = require("./411198.js"),
  Chunk836040 = require("./836040.jsx"),
  Chunk603592 = require("./603592.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  var t;
  let {
    isOnHubVerificationRoute: n
  } = e, h = (0, i.LX)(null != (t = window.location.pathname) ? t : "", {
    path: p.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(a.Hw.guildId(), ":inviteCode")
  }), g = (0, l.e7)([s.Z], () => {
    if (null == h) return null;
    let {
      inviteCode: e
    } = h.params;
    return null != e ? s.Z.getInvite(e) : null
  }), m = (null == g ? true : g.guild) != null ? (0, c.Qs)(null == g ? true : g.guild) : null;
  return n ? null != m && null != g ? (0, r.jsx)(u.Z, {
    guild: m,
    invite: g
  }) : (0, r.jsx)(d.Z, {
    tooltip: f.intl.string(f.t.rn9HIc),
    id: "guild-hub-button",
    icon: o.aVH
  }) : null
}