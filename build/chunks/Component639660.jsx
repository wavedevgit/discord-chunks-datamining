/** Chunk was on 44799 **/
/** chunk id: 639660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk232062 = require("./232062.js"),
  Chunk618460 = require("./618460.js"),
  Chunk105529 = require("./105529.jsx"),
  Chunk800869 = require("./800869.jsx"),
  Chunk366751 = require("./366751.jsx"),
  Chunk309945 = require("./309945.jsx"),
  Chunk385902 = require("./385902.js"),
  Chunk234368 = require("./234368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk695124 = require("./695124.js");

function h() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk695124.staffContainer,
    children: (0, Chunk255367.jsx)(Chunk793030.xv, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.string(Chunk93841.default.l9n4QU)
    })
  })
}

function E(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([a.Z], () => {
    var e;
    return (null == (e = a.Z.getGuild(t)) ? true : e.features.has(v.oNc.PREMIUM_TIER_3_OVERRIDE)) === true
  }), E = (0, c.Z)(t), C = E.length > 0, {
    shouldShow: I,
    notificationConfig: O
  } = (0, g._)(t, "GuildPowerupNotificationContainer"), y = [];
  I && y.push(l.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
  let [w, P] = (0, s.ZT)(y, t), N = null != w && null != O, Z = (0, u.W)(t, "GuildPowerupNotificationContainer"), S = [];
  N || C || (S.push(l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK), Z && S.push(l.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL));
  let [T, A] = (0, s.US)(S), R = (e => {
    let n = [];
    return C && n.push((0, r.jsx)(m.Z, {
      guildId: t,
      powerups: E
    }, "expiring-powerups")), N && n.push((0, r.jsx)(f.Z, {
      notificationConfig: O,
      markAsDismissed: e => {
        P(e)
      }
    }, "rollback-notification")), null != e && (e === l.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK ? n.push((0, r.jsx)(p.Z, {
      markAsDismissed: A
    }, "info-card")) : e === l.z.BOOSTER_ENHANCED_ROLE_COLORS_ADMIN_UPSELL && n.push((0, r.jsx)(d.Z, {
      guildId: t,
      perk: x.rm.ENHANCED_ROLE_COLORS,
      markAsDismissed: A
    }, "enhanced-role-colors-upsell"))), n
  })(T);
  return 0 !== R.length || n ? (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsx)(o.xv, {
      variant: "eyebrow",
      color: "text-secondary",
      children: b.intl.string(_.default["3FRira"])
    }), n && (0, r.jsx)(h, {}), R.map(e => e)]
  }) : null
}