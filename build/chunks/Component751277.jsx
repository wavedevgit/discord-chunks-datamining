/** Chunk was on 41753 **/
/** chunk id: 751277, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk114858 = require("./114858.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893607 = require("./893607.js"),
  Chunk701190 = require("./701190.js"),
  Chunk411198 = require("./411198.js"),
  Chunk836040 = require("./836040.jsx"),
  Chunk603592 = require("./603592.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  var t;
  let {
    isOnHubVerificationRoute: n
  } = e, f = (0, i.LX)(null != (t = window.location.pathname) ? t : "", {
    path: h.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(s.Hw.guildId(), ":inviteCode")
  }), g = (0, l.e7)([a.Z], () => {
    if (null == f) return null;
    let {
      inviteCode: e
    } = f.params;
    return null != e ? a.Z.getInvite(e) : null
  }), m = (null == g ? true : g.guild) != null ? (0, c.Qs)(null == g ? true : g.guild) : null;
  return n ? null != m && null != g ? (0, r.jsx)(u.Z, {
    guild: m,
    invite: g
  }) : (0, r.jsx)(d.Z, {
    tooltip: p.intl.string(p.t.rn9HIS),
    id: "guild-hub-button",
    icon: o.aVH
  }) : null
}