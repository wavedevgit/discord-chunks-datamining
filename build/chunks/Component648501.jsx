/** Chunk was on 83546 **/
/** chunk id: 648501, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk259404 = require("./259404.jsx"),
  Chunk876548 = require("./876548.jsx"),
  Chunk25601 = require("./25601.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk490897 = require("./490897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk885525 = require("./885525.js");

function N(e) {
  var t;
  let {
    channel: n,
    isChannelSelected: N,
    isChannelCollapsed: Z,
    voiceStates: T,
    enableConnectedUserLimit: w,
    enableActivities: A,
    isSubscriptionGated: R,
    needSubscriptionToAccess: D,
    isNewChannel: L,
    muted: M,
    resolvedUnreadSetting: k
  } = e, G = (0, i.e7)([m.ZP], () => m.ZP.getMentionCount(n.id)), U = (0, i.e7)([m.ZP], () => m.ZP.getIsMentionLowImportance(n.id)), B = (0, a.ZP)(n), F = (0, i.e7)([g.Z], () => !g.Z.can(x.Plq.CONNECT, n)), V = (0, s.P)(n), H = (0, i.e7)([b.Z], () => b.Z.hasVideo(n.id)), z = (0, p.PK)(n.id) && n.isGuildStageVoice(), W = (0, v.ZP)({
    channel: n,
    locked: F,
    video: (H || z) && null == V,
    selected: N
  }), K = (0, i.e7)([f.Z], () => f.Z.getNewThreadCount(n.guild_id, n.id)), Y = (0, u.n2)(n.guild_id, n.id), q = (0, i.e7)([h.Z], () => {
    var e, t;
    return null != (t = null == (e = h.Z.getGuild(n.guild_id)) ? true : e.features.has(x.GuildFeatures.COMMUNITY)) && t
  });
  if ((0, y.Z)(G)) return (0, r.jsx)(E.Z, {
    mentionsCount: G,
    isMentionLowImportance: U
  });
  if ((0, d.O)(R)) return (0, r.jsx)(d.Z, {
    locked: D
  });
  if (L) return (0, r.jsx)(o.IGR, {
    text: I.intl.string(I.t.y2b7CA),
    color: l.Z.unsafe_rawColors.BRAND_260.css,
    className: P.newChannel
  });
  if (!M && k === S.i.ALL_MESSAGES && n.isForumLikeChannel() && null != K && K > 0) return (0, r.jsx)(o.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: I.intl.format(I.t.GkAbqY, {
      count: (0, o.NGo)(K)
    })
  });
  if (!M && n.isForumLikeChannel() && null != Y && Y > 0) return (0, r.jsx)(o.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, o.NGo)(Y)
  });
  let X = null != (t = null == T ? true : T.length) ? t : 0;
  return null != w && w && W ? (0, r.jsx)(C.Z, {
    userCount: X,
    video: H || z,
    channel: n
  }) : Z && (0, _.a)(T) && q ? (0, r.jsx)(o.IGR, {
    text: I.intl.string(I.t.dI3q4h),
    color: l.Z.unsafe_rawColors.RED_400.css
  }) : null != V ? (0, r.jsx)(c.x3, {
    textColor: "text-feedback-positive",
    entry: {
      start: V
    }
  }) : null != A && A && (0, O.u)(B) ? (0, r.jsx)(j.Z, {
    embeddedApps: B,
    muted: M
  }) : null
}