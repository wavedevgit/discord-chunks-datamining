/** Chunk was on 44799 **/
/** chunk id: 639660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk494497 = require("./494497.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk765703 = require("./765703.js"),
  Chunk618460 = require("./618460.js"),
  Chunk800869 = require("./800869.jsx"),
  Chunk366751 = require("./366751.jsx"),
  Chunk309945 = require("./309945.jsx"),
  Chunk385902 = require("./385902.js"),
  Chunk981631 = require("./981631.js"),
  Chunk613275 = require("./613275.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk547885 = require("./547885.js");

function j() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk547885.staffContainer,
    children: (0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.string(Chunk130231.default.l9n4QZ)
    })
  })
}

function C(e) {
  let {
    guildId: t
  } = e, n = (0, l.e7)([c.Z], () => {
    var e;
    return (null == (e = c.Z.getGuild(t)) ? true : e.features.has(v.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true
  }), C = (0, d.Z)(t), w = (0, u.Z)(t), I = C.length > 0 || w.length > 0, {
    shouldShow: E,
    notificationConfig: Z
  } = (0, g._)(t, "GuildPowerupNotificationContainer"), P = [];
  E && P.push(a.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
  let [T, y] = (0, s.ZT)(P, t), N = null != T && null != Z, O = [];
  N || I || O.push(a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
  let [S, A] = (0, s.US)(O), k = (e => {
    let n = [];
    if (I) {
      let e = C.some(e => e.skuId === i.A$),
        o = w.length > 0 ? b.intl.string(x.default["B3OfL/"]) : true,
        l = [];
      e && l.push(b.intl.string(_.default.Sfr0Jw)), w.length > 0 && l.push(b.intl.string(x.default.wiungr)), n.push((0, r.jsx)(m.Z, {
        guildId: t,
        powerupNames: [...C.map(e => e.title), ...null != o ? [o] : []],
        warnings: l
      }, "expiring-powerups"))
    }
    return N && n.push((0, r.jsx)(f.Z, {
      notificationConfig: Z,
      markAsDismissed: e => {
        y(e)
      }
    }, "rollback-notification")), null != e && e === a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK && n.push((0, r.jsx)(p.Z, {
      markAsDismissed: A
    }, "info-card")), n
  })(S);
  return 0 !== k.length || n ? (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(o.xvT, {
      variant: "eyebrow",
      color: "text-secondary",
      children: b.intl.string(_.default["3FRirU"])
    }), n && (0, r.jsx)(j, {}), k.map(e => e)]
  }) : null
}