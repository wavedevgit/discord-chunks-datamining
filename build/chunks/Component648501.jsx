/** Chunk was on 85362 **/
/** chunk id: 648501, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk619915 = require("./619915.js"),
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
  Chunk885525 = require("./885525.js");

function I(e) {
  var t;
  let {
    channel: n,
    isChannelSelected: I,
    isChannelCollapsed: P,
    voiceStates: N,
    enableConnectedUserLimit: w,
    enableActivities: Z,
    isSubscriptionGated: T,
    needSubscriptionToAccess: A,
    isNewChannel: R,
    muted: D,
    resolvedUnreadSetting: L
  } = e, M = (0, i.e7)([h.ZP], () => h.ZP.getMentionCount(n.id)), k = (0, i.e7)([h.ZP], () => h.ZP.getIsMentionLowImportance(n.id)), U = (0, a.ZP)(n), G = (0, i.e7)([f.Z], () => !f.Z.can(C.Plq.CONNECT, n)), B = (0, i.e7)([g.Z], () => g.Z.hasVideo(n.id)), V = (0, u.PK)(n.id) && n.isGuildStageVoice(), H = (0, O.ZP)({
    channel: n,
    locked: G,
    video: B || V,
    selected: I
  }), F = (0, i.e7)([d.Z], () => d.Z.getNewThreadCount(n.guild_id, n.id)), z = (0, s.n2)(n.guild_id, n.id), W = (0, i.e7)([p.Z], () => {
    var e, t;
    return null != (t = null == (e = p.Z.getGuild(n.guild_id)) ? true : e.features.has(C.oNc.COMMUNITY)) && t
  });
  if ((0, _.Z)(M)) return (0, r.jsx)(j.Z, {
    mentionsCount: M,
    isMentionLowImportance: k
  });
  if ((0, c.O)(T)) return (0, r.jsx)(c.Z, {
    locked: A
  });
  if (R) return (0, r.jsx)(o.IGR, {
    text: x.intl.string(x.t.y2b7CA),
    color: l.Z.unsafe_rawColors.BRAND_260.css,
    className: S.newChannel
  });
  if (!D && L === E.i.ALL_MESSAGES && n.isForumLikeChannel() && null != F && F > 0) return (0, r.jsx)(o.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: x.intl.format(x.t.GkAbqa, {
      count: (0, o.NGo)(F)
    })
  });
  if (!D && n.isForumLikeChannel() && null != z && z > 0) return (0, r.jsx)(o.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, o.NGo)(z)
  });
  let K = null != (t = null == N ? true : N.length) ? t : 0;
  return null != w && w && H ? (0, r.jsx)(v.Z, {
    userCount: K,
    video: B || V,
    channel: n
  }) : P && (0, m.a)(N) && W ? (0, r.jsx)(o.IGR, {
    text: x.intl.string(x.t.dI3q4u),
    color: l.Z.unsafe_rawColors.RED_400.css
  }) : null != Z && Z && (0, b.u)(U) ? (0, r.jsx)(y.Z, {
    embeddedApps: U,
    muted: D
  }) : null
}