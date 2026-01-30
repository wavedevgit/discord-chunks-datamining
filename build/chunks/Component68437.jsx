/** Chunk was on 1113 **/
/** chunk id: 68437, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk685399 = require("./685399.js"),
  Chunk475889 = require("./475889.js"),
  Chunk693879 = require("./693879.jsx"),
  Chunk435470 = require("./435470.js"),
  Chunk84052 = require("./84052.jsx"),
  Chunk96566 = require("./96566.js"),
  Chunk863005 = require("./863005.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk977997 = require("./977997.js"),
  Chunk669715 = require("./669715.js"),
  Chunk893943 = require("./893943.js"),
  Chunk892896 = require("./892896.js"),
  Chunk246084 = require("./246084.js"),
  Chunk436133 = require("./436133.jsx"),
  Chunk884415 = require("./884415.jsx"),
  Chunk775946 = require("./775946.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk790782 = require("./790782.js"),
  Chunk985018 = require("./985018.jsx");

function I(e) {
  var t;
  let {
    channel: n,
    isChannelSelected: I,
    isChannelCollapsed: N,
    voiceStates: T,
    enableConnectedUserLimit: P,
    enableActivities: w,
    isSubscriptionGated: R,
    needSubscriptionToAccess: D,
    isNewChannel: L,
    muted: M,
    resolvedUnreadSetting: G
  } = e, k = (0, l.bG)([m.Ay], () => m.Ay.getMentionCount(n.id)), U = (0, l.bG)([m.Ay], () => m.Ay.getIsMentionLowImportance(n.id)), V = (0, a.Ay)(n), B = (0, l.bG)([f.A], () => !f.A.can(E.xBc.CONNECT, n)), H = (0, o.H)(n), F = (0, l.bG)([b.A], () => b.A.hasVideo(n.id)), K = (0, h.qT)(n.id) && n.isGuildStageVoice(), Y = (0, _.Ay)({
    channel: n,
    locked: B,
    video: (F || K) && null == H,
    selected: I
  }), W = (0, l.bG)([p.A], () => p.A.getNewThreadCount(n.guild_id, n.id)), z = (0, u.ed)(n.guild_id, n.id), q = (0, l.bG)([g.A], () => {
    var e, t;
    return null != (e = null == (t = g.A.getGuild(n.guild_id)) ? true : t.features.has(E.GuildFeatures.COMMUNITY)) && e
  });
  if ((0, O.A)(k)) return (0, r.jsx)(v.A, {
    mentionsCount: k,
    isMentionLowImportance: U
  });
  if ((0, d.v)(R)) return (0, r.jsx)(d.A, {
    locked: D
  });
  if (L) return (0, r.jsx)(s.LpS, {
    text: S.intl.string(S.t.y2b7CA),
    color: i.A.colors.BADGE_BACKGROUND_BRAND.css
  });
  if (!M && G === C.e.ALL_MESSAGES && n.isForumLikeChannel() && null != W && W > 0) return (0, r.jsx)(s.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: S.intl.format(S.t.GkAbqY, {
      count: (0, s.Gub)(W)
    })
  });
  if (!M && n.isForumLikeChannel() && null != z && z > 0) return (0, r.jsx)(s.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, s.Gub)(z)
  });
  let X = null != (t = null == T ? true : T.length) ? t : 0;
  return null != P && P && Y ? (0, r.jsx)(x.A, {
    userCount: X,
    video: F || K,
    channel: n
  }) : N && (0, A.t)(T) && q ? (0, r.jsx)(s.LpS, {
    text: S.intl.string(S.t.dI3q4h),
    color: i.A.unsafe_rawColors.RED_400.css
  }) : null != H ? (0, r.jsx)(c.z, {
    textColor: "text-feedback-positive",
    entry: {
      start: H
    }
  }) : null != w && w && (0, y.X)(V) ? (0, r.jsx)(j.A, {
    embeddedApps: V,
    muted: M
  }) : null
}