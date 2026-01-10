/** Chunk was on 81985 **/
/** chunk id: 648501, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
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
  Chunk388032 = require("./388032.jsx");

function P(e) {
  var t;
  let {
    channel: n,
    isChannelSelected: P,
    isChannelCollapsed: Z,
    voiceStates: N,
    enableConnectedUserLimit: T,
    enableActivities: A,
    isSubscriptionGated: w,
    needSubscriptionToAccess: R,
    isNewChannel: D,
    muted: M,
    resolvedUnreadSetting: k
  } = e, L = (0, i.e7)([m.ZP], () => m.ZP.getMentionCount(n.id)), U = (0, i.e7)([m.ZP], () => m.ZP.getIsMentionLowImportance(n.id)), G = (0, o.ZP)(n), B = (0, i.e7)([g.Z], () => !g.Z.can(S.Plq.CONNECT, n)), F = (0, s.P)(n), H = (0, i.e7)([b.Z], () => b.Z.hasVideo(n.id)), V = (0, p.PK)(n.id) && n.isGuildStageVoice(), z = (0, j.ZP)({
    channel: n,
    locked: B,
    video: (H || V) && null == F,
    selected: P
  }), W = (0, i.e7)([f.Z], () => f.Z.getNewThreadCount(n.guild_id, n.id)), K = (0, u.n2)(n.guild_id, n.id), Y = (0, i.e7)([h.Z], () => {
    var e, t;
    return null != (t = null == (e = h.Z.getGuild(n.guild_id)) ? true : e.features.has(S.GuildFeatures.COMMUNITY)) && t
  });
  if ((0, O.Z)(L)) return (0, r.jsx)(E.Z, {
    mentionsCount: L,
    isMentionLowImportance: U
  });
  if ((0, d.O)(w)) return (0, r.jsx)(d.Z, {
    locked: R
  });
  if (D) return (0, r.jsx)(a.IGR, {
    text: I.intl.string(I.t.y2b7CA),
    color: l.Z.colors.BADGE_BACKGROUND_BRAND.css
  });
  if (!M && k === _.i.ALL_MESSAGES && n.isForumLikeChannel() && null != W && W > 0) return (0, r.jsx)(a.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: I.intl.format(I.t.GkAbqY, {
      count: (0, a.NGo)(W)
    })
  });
  if (!M && n.isForumLikeChannel() && null != K && K > 0) return (0, r.jsx)(a.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, a.NGo)(K)
  });
  let q = null != (t = null == N ? true : N.length) ? t : 0;
  return null != T && T && z ? (0, r.jsx)(C.Z, {
    userCount: q,
    video: H || V,
    channel: n
  }) : Z && (0, y.a)(N) && Y ? (0, r.jsx)(a.IGR, {
    text: I.intl.string(I.t.dI3q4h),
    color: l.Z.unsafe_rawColors.RED_400.css
  }) : null != F ? (0, r.jsx)(c.x, {
    textColor: "text-feedback-positive",
    entry: {
      start: F
    }
  }) : null != A && A && (0, v.u)(G) ? (0, r.jsx)(x.Z, {
    embeddedApps: G,
    muted: M
  }) : null
}