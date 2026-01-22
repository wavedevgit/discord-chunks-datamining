/** Chunk was on 97492 **/
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
    isNewChannel: M,
    muted: L,
    resolvedUnreadSetting: G
  } = e, k = (0, l.bG)([g.Ay], () => g.Ay.getMentionCount(n.id)), U = (0, l.bG)([g.Ay], () => g.Ay.getIsMentionLowImportance(n.id)), V = (0, s.Ay)(n), F = (0, l.bG)([b.A], () => !b.A.can(_.xBc.CONNECT, n)), H = (0, o.H)(n), B = (0, l.bG)([m.A], () => m.A.hasVideo(n.id)), K = (0, f.qT)(n.id) && n.isGuildStageVoice(), W = (0, j.Ay)({
    channel: n,
    locked: F,
    video: (B || K) && null == H,
    selected: I
  }), z = (0, l.bG)([p.A], () => p.A.getNewThreadCount(n.guild_id, n.id)), Y = (0, u.ed)(n.guild_id, n.id), q = (0, l.bG)([h.A], () => {
    var e, t;
    return null != (e = null == (t = h.A.getGuild(n.guild_id)) ? true : t.features.has(_.GuildFeatures.COMMUNITY)) && e
  });
  if ((0, O.A)(k)) return (0, r.jsx)(E.A, {
    mentionsCount: k,
    isMentionLowImportance: U
  });
  if ((0, d.v)(R)) return (0, r.jsx)(d.A, {
    locked: D
  });
  if (M) return (0, r.jsx)(a.LpS, {
    text: S.intl.string(S.t.y2b7CA),
    color: i.A.colors.BADGE_BACKGROUND_BRAND.css
  });
  if (!L && G === C.e.ALL_MESSAGES && n.isForumLikeChannel() && null != z && z > 0) return (0, r.jsx)(a.Text, {
    variant: "text-xs/semibold",
    color: "text-brand",
    children: S.intl.format(S.t.GkAbqY, {
      count: (0, a.Gub)(z)
    })
  });
  if (!L && n.isForumLikeChannel() && null != Y && Y > 0) return (0, r.jsx)(a.Text, {
    variant: "text-xs/semibold",
    color: "text-muted",
    children: (0, a.Gub)(Y)
  });
  let X = null != (t = null == T ? true : T.length) ? t : 0;
  return null != P && P && W ? (0, r.jsx)(x.A, {
    userCount: X,
    video: B || K,
    channel: n
  }) : N && (0, A.t)(T) && q ? (0, r.jsx)(a.LpS, {
    text: S.intl.string(S.t.dI3q4h),
    color: i.A.unsafe_rawColors.RED_400.css
  }) : null != H ? (0, r.jsx)(c.z, {
    textColor: "text-feedback-positive",
    entry: {
      start: H
    }
  }) : null != w && w && (0, y.X)(V) ? (0, r.jsx)(v.A, {
    embeddedApps: V,
    muted: L
  }) : null
}