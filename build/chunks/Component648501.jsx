/** Chunk was on 51727 **/
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
    isChannelCollapsed: w,
    voiceStates: Z,
    enableConnectedUserLimit: T,
    enableActivities: A,
    isSubscriptionGated: R,
    needSubscriptionToAccess: D,
    isNewChannel: M,
    muted: L,
    resolvedUnreadSetting: k
  } = e, U = (0, i.e7)([m.ZP], () => m.ZP.getMentionCount(n.id)), G = (0, i.e7)([m.ZP], () => m.ZP.getIsMentionLowImportance(n.id)), B = (0, a.ZP)(n), F = (0, i.e7)([g.Z], () => !g.Z.can(E.Plq.CONNECT, n)), V = (0, s.P)(n), H = (0, i.e7)([b.Z], () => b.Z.hasVideo(n.id)), z = (0, p.PK)(n.id) && n.isGuildStageVoice(), W = (0, v.ZP)({
    channel: n,
    locked: F,
    video: (H || z) && null == V,
    selected: N
  }), K = (0, i.e7)([f.Z], () => f.Z.getNewThreadCount(n.guild_id, n.id)), Y = (0, u.n2)(n.guild_id, n.id), q = (0, i.e7)([h.Z], () => {
    var e, t;
    return null != (t = null == (e = h.Z.getGuild(n.guild_id)) ? true : e.features.has(E.oNc.COMMUNITY)) && t
  });
  if ((0, y.Z)(U)) return (0, r.jsx)(C.Z, {
    mentionsCount: U,
    isMentionLowImportance: G
  });
  if ((0, d.O)(R)) return (0, r.jsx)(d.Z, {
    locked: D
  });
  if (M) return (0, r.jsx)(o.IGR, {
    text: P.intl.string(P.t.y2b7CA),
    color: l.Z.unsafe_rawColors.BRAND_260.css,
    className: I.newChannel
  });
  if (!L && k === S.i.ALL_MESSAGES && n.isForumLikeChannel() && null != K && K > 0) return (0, r.jsx)(o.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: P.intl.format(P.t.GkAbqa, {
      count: (0, o.NGo)(K)
    })
  });
  if (!L && n.isForumLikeChannel() && null != Y && Y > 0) return (0, r.jsx)(o.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, o.NGo)(Y)
  });
  let X = null != (t = null == Z ? true : Z.length) ? t : 0;
  return null != T && T && W ? (0, r.jsx)(x.Z, {
    userCount: X,
    video: H || z,
    channel: n
  }) : w && (0, _.a)(Z) && q ? (0, r.jsx)(o.IGR, {
    text: P.intl.string(P.t.dI3q4u),
    color: l.Z.unsafe_rawColors.RED_400.css
  }) : null != V ? (0, r.jsx)(c.x3, {
    textColor: "text-feedback-positive",
    entry: {
      start: V
    }
  }) : null != A && A && (0, O.u)(B) ? (0, r.jsx)(j.Z, {
    embeddedApps: B,
    muted: L
  }) : null
}