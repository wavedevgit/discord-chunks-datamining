/** Chunk was on 82477 **/
/** chunk id: 648501, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk619915 = require("./619915.js"),
  Chunk172942 = require("./172942.js"),
  Chunk371991 = require("./371991.jsx"),
  Chunk456269 = require("./456269.js"),
  Chunk921711 = require("./921711.jsx"),
  Chunk368442 = require("./368442.js"),
  Chunk601070 = require("./601070.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk979651 = require("./979651.js"),
  Chunk968358 = require("./968358.js"),
  Chunk790901 = require("./790901.js"),
  Chunk714794 = require("./714794.js"),
  Chunk355363 = require("./355363.js"),
  Chunk687352 = require("./687352.jsx"),
  Chunk876548 = require("./876548.jsx"),
  Chunk25601 = require("./25601.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk884874 = require("./884874.js");

function N(e) {
  var t;
  let {
    channel: n,
    isChannelSelected: N,
    isChannelCollapsed: Z,
    voiceStates: w,
    enableConnectedUserLimit: T,
    enableActivities: A,
    isSubscriptionGated: R,
    needSubscriptionToAccess: D,
    isNewChannel: M,
    muted: L,
    resolvedUnreadSetting: k
  } = e, G = (0, i.e7)([b.ZP], () => b.ZP.getMentionCount(n.id)), U = (0, i.e7)([b.ZP], () => b.ZP.getIsMentionLowImportance(n.id)), B = (0, o.ZP)(n), F = (0, i.e7)([g.Z], () => !g.Z.can(S.Plq.CONNECT, n)), V = (0, s.P)(n), H = (0, i.e7)([m.Z], () => m.Z.hasVideo(n.id)), z = (0, f.PK)(n.id) && n.isGuildStageVoice(), W = (0, j.ZP)({
    channel: n,
    locked: F,
    video: (H || z) && null == V,
    selected: N
  }), K = (0, i.e7)([h.Z], () => h.Z.getNewThreadCount(n.guild_id, n.id)), Y = (0, u.n2)(n.guild_id, n.id), q = (0, i.e7)([p.Z], () => {
    var e, t;
    return null != (t = null == (e = p.Z.getGuild(n.guild_id)) ? true : e.features.has(S.GuildFeatures.COMMUNITY)) && t
  });
  if ((0, v.Z)(G)) return (0, r.jsx)(E.Z, {
    mentionsCount: G,
    isMentionLowImportance: U
  });
  if ((0, d.O)(R)) return (0, r.jsx)(d.Z, {
    locked: D
  });
  if (M) return (0, r.jsx)(a.IGR, {
    text: _.intl.string(_.t.y2b7CA),
    color: l.Z.unsafe_rawColors.BRAND_260.css,
    className: P.newChannel
  });
  if (!L && k === I.i.ALL_MESSAGES && n.isForumLikeChannel() && null != K && K > 0) return (0, r.jsx)(a.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: _.intl.format(_.t.GkAbqY, {
      count: (0, a.NGo)(K)
    })
  });
  if (!L && n.isForumLikeChannel() && null != Y && Y > 0) return (0, r.jsx)(a.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, a.NGo)(Y)
  });
  let Q = null != (t = null == w ? true : w.length) ? t : 0;
  return null != T && T && W ? (0, r.jsx)(x.Z, {
    userCount: Q,
    video: H || z,
    channel: n
  }) : Z && (0, y.a)(w) && q ? (0, r.jsx)(a.IGR, {
    text: _.intl.string(_.t.dI3q4h),
    color: l.Z.unsafe_rawColors.RED_400.css
  }) : null != V ? (0, r.jsx)(c.x3, {
    textColor: "text-feedback-positive",
    entry: {
      start: V
    }
  }) : null != A && A && (0, O.u)(B) ? (0, r.jsx)(C.Z, {
    embeddedApps: B,
    muted: L
  }) : null
}