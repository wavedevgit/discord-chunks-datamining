/** Chunk was on 44799 **/
/** chunk id: 639660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk618460 = require("./618460.js"),
  Chunk800869 = require("./800869.jsx"),
  Chunk366751 = require("./366751.jsx"),
  Chunk309945 = require("./309945.jsx"),
  Chunk385902 = require("./385902.js"),
  Chunk981631 = require("./981631.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk547885 = require("./547885.js");

function _() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk547885.staffContainer,
    children: (0, Chunk951288.jsx)(Chunk793030.xvT, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.string(Chunk989308.default.l9n4QU)
    })
  })
}

function b(e) {
  let {
    guildId: t
  } = e, n = (0, o.e7)([s.Z], () => {
    var e;
    return (null == (e = s.Z.getGuild(t)) ? true : e.features.has(m.oNc.PREMIUM_TIER_3_OVERRIDE)) === true
  }), b = (0, c.Z)(t), h = b.length > 0, {
    shouldShow: j,
    notificationConfig: C
  } = (0, f._)(t, "GuildPowerupNotificationContainer"), I = [];
  j && I.push(l.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
  let [w, E] = (0, a.ZT)(I, t), Z = null != w && null != C, P = [];
  Z || h || P.push(l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
  let [y, T] = (0, a.US)(P), N = (e => {
    let n = [];
    return h && n.push((0, r.jsx)(p.Z, {
      guildId: t,
      powerups: b
    }, "expiring-powerups")), Z && n.push((0, r.jsx)(d.Z, {
      notificationConfig: C,
      markAsDismissed: e => {
        E(e)
      }
    }, "rollback-notification")), null != e && e === l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK && n.push((0, r.jsx)(u.Z, {
      markAsDismissed: T
    }, "info-card")), n
  })(y);
  return 0 !== N.length || n ? (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(i.xvT, {
      variant: "eyebrow",
      color: "text-secondary",
      children: v.intl.string(g.default["3FRira"])
    }), n && (0, r.jsx)(_, {}), N.map(e => e)]
  }) : null
}