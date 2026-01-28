/** Chunk was on 78572 **/
/** chunk id: 376696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => w
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

function w(e) {
  let {
    channel: t,
    user: n,
    onAction: l,
    excludeActivity: w,
    onWatchStream: N,
    previewIsOpen: C,
    hangStatusActivity: D
  } = e, L = i.useMemo(() => ({
    [t.guild_id]: [n.id]
  }), [t.guild_id, n.id]);
  (0, c.E)(L, "VoiceUserActivities");
  let k = (0, d.Ay)(t),
    R = i.useMemo(() => k.filter(e => e.embeddedActivity.userIds.has(n.id)), [k, n.id]),
    M = Array.from((0, d.Rz)(R).values()),
    [V, U] = (0, s.yK)([h.A], () => [h.A.getStreamForUser(n.id, t.getGuildId()), h.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
    [G, W] = (0, s.yK)([j.A, v.A, O.A, p.default], () => (0, f.eo)(t, j.A, v.A, O.A, p.default)),
    z = (0, s.bG)([A.default], () => A.default.getId()),
    H = (0, s.bG)([S.A], () => (0, m.nr)(V, S.A), [V]),
    F = (0, m.AO)(V),
    K = (0, u.m)(n, null != w ? w : H),
    Y = (0, s.bG)([x.Ay], () => {
      var e;
      return null != (e = x.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
    }, [t, n.id]),
    B = i.useMemo(() => null != Y ? [Y] : [], [Y]),
    {
      enableUserHoverActivities: J
    } = (0, I.fC)({
      guildId: t.guild_id,
      location: "VoiceUserActivities"
    }),
    Z = (0, b.m)({
      location: "voice_channel_activities"
    }),
    X = null != V,
    q = K.length + M.length > 0,
    $ = n.id === A.default.getId(),
    Q = null != D;
  return X || q || Q ? (0, r.jsxs)(o.HOs, {
    className: E.kL,
    children: [Q && null != D ? (0, r.jsx)("div", {
      className: E.Ak,
      children: (0, r.jsx)(y.Z, {
        hangStatusActivity: D,
        channel: t,
        userId: n.id,
        isSelf: $,
        analyticsSource: "VoiceUserActivities",
        onAction: l,
        className: E.AF,
        iconClassName: E.W9,
        textClassName: E.YJ
      })
    }) : null, Q && (X || q) && (0, r.jsx)("div", {
      className: E.zN
    }), null == V || null == N ? null : (0, r.jsxs)("div", {
      className: a()(E.yt, {
        [E.P0]: C
      }),
      children: [(0, r.jsx)(g.Z, {
        stream: V,
        activeStream: U,
        streamActivity: H,
        streamApplication: F,
        user: n,
        currentUserId: z,
        canWatch: G,
        unavailableReason: W,
        onWatchStream: N,
        onAction: l,
        showHeader: J,
        skipContainer: true
      }), q && (0, r.jsx)("div", {
        className: E.zN
      })]
    }), M.map((e, n) => {
      var i;
      return (0, r.jsx)(T.A, {
        embeddedApp: e,
        presenceActivity: null != (i = e.presenceActivity) ? i : true,
        channel: t,
        onAction: l
      }, n)
    }), K.map((e, a) => Z && null != e.application_id && P.sQ.has(e.application_id) ? (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(T.A, {
        presenceActivity: e,
        channel: t,
        members: B,
        onAction: l
      }), (0, r.jsx)(_.A, {
        className: E.L,
        applicationId: e.application_id,
        userIds: [n.id],
        location: "voice_channel",
        guildId: t.guild_id,
        channelId: t.id
      })]
    }, "".concat(a, "-with-gifting-breadcrumb")) : (0, r.jsx)(T.A, {
      presenceActivity: e,
      channel: t,
      members: B,
      onAction: l
    }, a))]
  }) : null
}