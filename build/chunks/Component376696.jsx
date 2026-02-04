/** Chunk was on 44669 **/
/** chunk id: 376696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk80682 = require("./80682.js"),
  Chunk845056 = require("./845056.js"),
  Chunk685399 = require("./685399.js"),
  Chunk643501 = require("./643501.js"),
  Chunk279250 = require("./279250.js"),
  Chunk834757 = require("./834757.js"),
  Chunk727353 = require("./727353.jsx"),
  Chunk636920 = require("./636920.jsx"),
  Chunk565688 = require("./565688.js"),
  Chunk93879 = require("./93879.jsx"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk338234 = require("./338234.js"),
  Chunk667936 = require("./667936.jsx"),
  Chunk188275 = require("./188275.js"),
  Chunk962966 = require("./962966.js");

function I(e) {
  let {
    channel: t,
    user: n,
    onAction: I,
    excludeActivity: N,
    onWatchStream: T,
    hangStatusActivity: P
  } = e, w = l.useMemo(() => ({
    [t.guild_id]: [n.id]
  }), [t.guild_id, n.id]);
  (0, a.E)(w, "VoiceUserActivities");
  let R = (0, c.Ay)(t),
    D = l.useMemo(() => R.filter(e => e.embeddedActivity.userIds.has(n.id)), [R, n.id]),
    L = Array.from((0, c.Rz)(D).values()),
    [M, G] = (0, i.yK)([b.A], () => [b.A.getStreamForUser(n.id, t.getGuildId()), b.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
    [k, U] = (0, i.yK)([_.A, y.A, O.A, u.default], () => (0, d.eo)(t, _.A, y.A, O.A, u.default)),
    V = (0, i.bG)([A.default], () => A.default.getId()),
    B = (0, i.bG)([j.A], () => (0, p.nr)(M, j.A), [M]),
    H = (0, o.m)(n, null != N ? N : B),
    F = (0, i.bG)([x.Ay], () => {
      var e;
      return null != (e = x.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
    }, [t, n.id]),
    Y = l.useMemo(() => null != F ? [F] : [], [F]),
    {
      enableUserHoverActivities: K
    } = (0, v.fC)({
      guildId: t.guild_id,
      location: "VoiceUserActivities"
    }),
    W = (0, f.m)({
      location: "voice_channel_activities"
    }),
    z = null != M,
    q = H.length + L.length > 0,
    X = n.id === A.default.getId(),
    J = null != P;
  return z || q || J ? (0, r.jsxs)(s.HOs, {
    className: S.kL,
    children: [J && null != P ? (0, r.jsx)("div", {
      className: S.Ak,
      children: (0, r.jsx)(g.Z, {
        hangStatusActivity: P,
        channel: t,
        userId: n.id,
        isSelf: X,
        analyticsSource: "VoiceUserActivities",
        onAction: I,
        className: S.AF,
        iconClassName: S.W9,
        textClassName: S.YJ
      })
    }) : null, J && (z || q) && (0, r.jsx)("div", {
      className: S.zN
    }), null == M || null == T ? null : (0, r.jsxs)("div", {
      children: [(0, r.jsx)(h.P, {
        stream: M,
        activeStream: G,
        streamActivity: B,
        user: n,
        currentUserId: V,
        canWatch: k,
        unavailableReason: U,
        onWatchStream: T,
        onAction: I,
        showHeader: K
      }), q && (0, r.jsx)("div", {
        className: S.zN
      })]
    }), L.map((e, n) => {
      var l;
      return (0, r.jsx)(E.A, {
        embeddedApp: e,
        presenceActivity: null != (l = e.presenceActivity) ? l : true,
        channel: t,
        onAction: I,
        enableUserHoverActivities: K
      }, n)
    }), H.map((e, i) => W && null != e.application_id && C.sQ.has(e.application_id) ? (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(E.A, {
        presenceActivity: e,
        channel: t,
        members: Y,
        onAction: I,
        enableUserHoverActivities: K
      }), (0, r.jsx)(m.A, {
        className: S.L,
        applicationId: e.application_id,
        userIds: [n.id],
        location: "voice_channel",
        guildId: t.guild_id,
        channelId: t.id
      })]
    }, "".concat(i, "-with-gifting-breadcrumb")) : (0, r.jsx)(E.A, {
      presenceActivity: e,
      channel: t,
      members: Y,
      onAction: I,
      enableUserHoverActivities: K
    }, i))]
  }) : null
}