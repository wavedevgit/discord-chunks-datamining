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
  Chunk160589 = require("./160589.js"),
  Chunk44542 = require("./44542.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk754747 = require("./754747.js");

function _() {
  return (0, Chunk54381.jsx)("div", {
    className: Chunk754747.staffContainer,
    children: (0, Chunk54381.jsx)(Chunk793030.xvT, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.string(Chunk44542.default.l9n4QZ)
    })
  })
}

function C(e) {
  let {
    guildId: t
  } = e, n = (0, a.e7)([c.Z], () => {
    var e;
    return (null == (e = c.Z.getGuild(t)) ? true : e.features.has(v.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === true
  }), C = (0, d.Z)(t), Z = (0, u.Z)(t), w = C.length > 0 || Z.length > 0, {
    shouldShow: I,
    notificationConfig: E
  } = (0, g._)(t, "GuildPowerupNotificationContainer"), P = [];
  I && P.push(o.z.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION);
  let [T, y] = (0, s.ZT)(P, t), N = null != T && null != E, O = [];
  N || w || O.push(o.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK);
  let [S, A] = (0, s.US)(O), k = (e => {
    let n = [];
    if (w) {
      let e = C.some(e => e.skuId === i.A$),
        l = Z.length > 0 ? h.intl.string(x.default["B3OfL/"]) : true,
        a = [];
      e && a.push(h.intl.string(b.default.Sfr0Jw)), Z.length > 0 && a.push(h.intl.string(x.default.wiungr)), n.push((0, r.jsx)(m.Z, {
        guildId: t,
        powerupNames: [...C.map(e => e.title), ...null != l ? [l] : []],
        warnings: a
      }, "expiring-powerups"))
    }
    return N && n.push((0, r.jsx)(p.Z, {
      notificationConfig: E,
      markAsDismissed: e => {
        y(e)
      }
    }, "rollback-notification")), null != e && e === o.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK && n.push((0, r.jsx)(f.Z, {
      markAsDismissed: A
    }, "info-card")), n
  })(S);
  return 0 !== k.length || n ? (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsx)(l.xvT, {
      variant: "eyebrow",
      color: "text-subtle",
      children: h.intl.string(b.default["3FRirU"])
    }), n && (0, r.jsx)(_, {}), k.map(e => e)]
  }) : null
}