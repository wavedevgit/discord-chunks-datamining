/** Chunk was on 88474 **/
/** chunk id: 376696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function N(e) {
  let {
    channel: t,
    user: n,
    onAction: i,
    excludeActivity: N,
    onWatchStream: T,
    previewIsOpen: w,
    hangStatusActivity: L
  } = e, D = l.useMemo(() => ({
    [t.guild_id]: [n.id]
  }), [t.guild_id, n.id]);
  (0, c.E)(D, "VoiceUserActivities");
  let R = (0, d.Ay)(t),
    k = l.useMemo(() => R.filter(e => e.embeddedActivity.userIds.has(n.id)), [R, n.id]),
    M = Array.from((0, d.Rz)(k).values()),
    [U, G] = (0, s.yK)([h.A], () => [h.A.getStreamForUser(n.id, t.getGuildId()), h.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
    [V, F] = (0, s.yK)([j.A, v.A, O.A, p.default], () => (0, f.eo)(t, j.A, v.A, O.A, p.default)),
    W = (0, s.bG)([A.default], () => A.default.getId()),
    H = (0, s.bG)([S.A], () => (0, m.nr)(U, S.A), [U]),
    z = (0, m.AO)(U),
    K = (0, u.m)(n, null != N ? N : H),
    B = (0, s.bG)([x.Ay], () => {
      var e;
      return null != (e = x.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
    }, [t, n.id]),
    Y = l.useMemo(() => null != B ? [B] : [], [B]),
    {
      enableUserHoverActivities: J
    } = (0, I.fC)({
      guildId: t.guild_id,
      location: "VoiceUserActivities"
    }),
    Z = (0, b.m)({
      location: "voice_channel_activities"
    }),
    X = null != U,
    q = K.length + M.length > 0,
    $ = n.id === A.default.getId(),
    Q = null != L;
  return X || q || Q ? (0, r.jsxs)(o.HOs, {
    className: P.kL,
    children: [Q && null != L ? (0, r.jsx)("div", {
      className: P.Ak,
      children: (0, r.jsx)(y.Z, {
        hangStatusActivity: L,
        channel: t,
        userId: n.id,
        isSelf: $,
        analyticsSource: "VoiceUserActivities",
        onAction: i,
        className: P.AF,
        iconClassName: P.W9,
        textClassName: P.YJ
      })
    }) : null, Q && (X || q) && (0, r.jsx)("div", {
      className: P.zN
    }), null == U || null == T ? null : (0, r.jsxs)("div", {
      className: a()(P.yt, {
        [P.P0]: w
      }),
      children: [(0, r.jsx)(g.Z, {
        stream: U,
        activeStream: G,
        streamActivity: H,
        streamApplication: z,
        user: n,
        currentUserId: W,
        canWatch: V,
        unavailableReason: F,
        onWatchStream: T,
        onAction: i,
        showHeader: J,
        skipContainer: true
      }), q && (0, r.jsx)("div", {
        className: P.zN
      })]
    }), M.map((e, n) => {
      var l;
      return (0, r.jsx)(E.A, {
        embeddedApp: e,
        presenceActivity: null != (l = e.presenceActivity) ? l : true,
        channel: t,
        onAction: i
      }, n)
    }), K.map((e, a) => Z && null != e.application_id && C.sQ.has(e.application_id) ? (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(E.A, {
        presenceActivity: e,
        channel: t,
        members: Y,
        onAction: i
      }), (0, r.jsx)(_.A, {
        className: P.L,
        applicationId: e.application_id,
        userIds: [n.id],
        location: "voice_channel",
        guildId: t.guild_id,
        channelId: t.id
      })]
    }, "".concat(a, "-with-gifting-breadcrumb")) : (0, r.jsx)(E.A, {
      presenceActivity: e,
      channel: t,
      members: Y,
      onAction: i
    }, a))]
  }) : null
}