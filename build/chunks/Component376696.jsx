/** Chunk was on 47995 **/
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
    onWatchStream: w,
    previewIsOpen: C,
    hangStatusActivity: L
  } = e, D = l.useMemo(() => ({
    [t.guild_id]: [n.id]
  }), [t.guild_id, n.id]);
  (0, c.E)(D, "VoiceUserActivities");
  let k = (0, d.Ay)(t),
    R = l.useMemo(() => k.filter(e => e.embeddedActivity.userIds.has(n.id)), [k, n.id]),
    V = Array.from((0, d.Rz)(R).values()),
    [M, U] = (0, s.yK)([A.A], () => [A.A.getStreamForUser(n.id, t.getGuildId()), A.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
    [G, W] = (0, s.yK)([j.A, v.A, O.A, p.default], () => (0, f.eo)(t, j.A, v.A, O.A, p.default)),
    z = (0, s.bG)([h.default], () => h.default.getId()),
    F = (0, s.bG)([S.A], () => (0, m.nr)(M, S.A), [M]),
    H = (0, m.AO)(M),
    K = (0, u.m)(n, null != N ? N : F),
    Y = (0, s.bG)([x.Ay], () => {
      var e;
      return null != (e = x.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
    }, [t, n.id]),
    B = l.useMemo(() => null != Y ? [Y] : [], [Y]),
    {
      enableUserHoverActivities: J
    } = (0, I.fC)({
      guildId: t.guild_id,
      location: "VoiceUserActivities"
    }),
    Z = (0, b.m)({
      location: "voice_channel_activities"
    }),
    X = null != M,
    q = K.length + V.length > 0,
    $ = n.id === h.default.getId(),
    Q = null != L;
  return X || q || Q ? (0, r.jsxs)(o.HOs, {
    className: T.kL,
    children: [Q && null != L ? (0, r.jsx)("div", {
      className: T.Ak,
      children: (0, r.jsx)(y.Z, {
        hangStatusActivity: L,
        channel: t,
        userId: n.id,
        isSelf: $,
        analyticsSource: "VoiceUserActivities",
        onAction: i,
        className: T.AF,
        iconClassName: T.W9,
        textClassName: T.YJ
      })
    }) : null, Q && (X || q) && (0, r.jsx)("div", {
      className: T.zN
    }), null == M || null == w ? null : (0, r.jsxs)("div", {
      className: a()(T.yt, {
        [T.P0]: C
      }),
      children: [(0, r.jsx)(g.Z, {
        stream: M,
        activeStream: U,
        streamActivity: F,
        streamApplication: H,
        user: n,
        currentUserId: z,
        canWatch: G,
        unavailableReason: W,
        onWatchStream: w,
        onAction: i,
        showHeader: J,
        skipContainer: true
      }), q && (0, r.jsx)("div", {
        className: T.zN
      })]
    }), V.map((e, n) => {
      var l;
      return (0, r.jsx)(P.A, {
        embeddedApp: e,
        presenceActivity: null != (l = e.presenceActivity) ? l : true,
        channel: t,
        onAction: i
      }, n)
    }), K.map((e, a) => Z && null != e.application_id && E.sQ.has(e.application_id) ? (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(P.A, {
        presenceActivity: e,
        channel: t,
        members: B,
        onAction: i
      }), (0, r.jsx)(_.A, {
        className: T.L,
        applicationId: e.application_id,
        userIds: [n.id],
        location: "voice_channel",
        guildId: t.guild_id,
        channelId: t.id
      })]
    }, "".concat(a, "-with-gifting-breadcrumb")) : (0, r.jsx)(P.A, {
      presenceActivity: e,
      channel: t,
      members: B,
      onAction: i
    }, a))]
  }) : null
}