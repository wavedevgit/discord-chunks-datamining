/** Chunk was on 21425 **/
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
    onAction: l,
    excludeActivity: N,
    onWatchStream: w,
    previewIsOpen: C,
    hangStatusActivity: D
  } = e, L = i.useMemo(() => ({
    [t.guild_id]: [n.id]
  }), [t.guild_id, n.id]);
  (0, c.E)(L, "VoiceUserActivities");
  let k = (0, d.Ay)(t),
    G = i.useMemo(() => k.filter(e => e.embeddedActivity.userIds.has(n.id)), [k, n.id]),
    R = Array.from((0, d.Rz)(G).values()),
    [M, V] = (0, s.yK)([A.A], () => [A.A.getStreamForUser(n.id, t.getGuildId()), A.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
    [U, W] = (0, s.yK)([S.A, v.A, O.A, p.default], () => (0, f.eo)(t, S.A, v.A, O.A, p.default)),
    F = (0, s.bG)([h.default], () => h.default.getId()),
    K = (0, s.bG)([j.A], () => (0, m.nr)(M, j.A), [M]),
    z = (0, m.AO)(M),
    H = (0, u.m)(n, null != N ? N : K),
    Y = (0, s.bG)([I.Ay], () => {
      var e;
      return null != (e = I.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
    }, [t, n.id]),
    B = i.useMemo(() => null != Y ? [Y] : [], [Y]),
    {
      enableUserHoverActivities: J
    } = (0, x.fC)({
      guildId: t.guild_id,
      location: "VoiceUserActivities"
    }),
    Z = (0, _.m)({
      location: "voice_channel_activities"
    }),
    X = null != M,
    q = H.length + R.length > 0,
    $ = n.id === h.default.getId(),
    Q = null != D;
  return X || q || Q ? (0, r.jsxs)(o.HOs, {
    className: T.kL,
    children: [Q && null != D ? (0, r.jsx)("div", {
      className: T.Ak,
      children: (0, r.jsx)(y.Z, {
        hangStatusActivity: D,
        channel: t,
        userId: n.id,
        isSelf: $,
        analyticsSource: "VoiceUserActivities",
        onAction: l,
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
        activeStream: V,
        streamActivity: K,
        streamApplication: z,
        user: n,
        currentUserId: F,
        canWatch: U,
        unavailableReason: W,
        onWatchStream: w,
        onAction: l,
        showHeader: J,
        skipContainer: true
      }), q && (0, r.jsx)("div", {
        className: T.zN
      })]
    }), R.map((e, n) => {
      var i;
      return (0, r.jsx)(E.A, {
        embeddedApp: e,
        presenceActivity: null != (i = e.presenceActivity) ? i : true,
        channel: t,
        onAction: l
      }, n)
    }), H.map((e, a) => Z && null != e.application_id && P.sQ.has(e.application_id) ? (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(E.A, {
        presenceActivity: e,
        channel: t,
        members: B,
        onAction: l
      }), (0, r.jsx)(b.A, {
        className: T.L,
        applicationId: e.application_id,
        userIds: [n.id],
        location: "voice_channel",
        guildId: t.guild_id,
        channelId: t.id
      })]
    }, "".concat(a, "-with-gifting-breadcrumb")) : (0, r.jsx)(E.A, {
      presenceActivity: e,
      channel: t,
      members: B,
      onAction: l
    }, a))]
  }) : null
}