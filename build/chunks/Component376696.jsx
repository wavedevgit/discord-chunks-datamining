/** Chunk was on web.js **/
/** chunk id: 376696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function R(e) {
  let {
    channel: t,
    user: n,
    onAction: a,
    excludeActivity: R,
    onWatchStream: P,
    previewIsOpen: D,
    hangStatusActivity: x
  } = e, L = i.useMemo(() => ({
    [t.guild_id]: [n.id]
  }), [t.guild_id, n.id]);
  (0, c.E)(L, "VoiceUserActivities");
  let j = (0, d.Ay)(t),
    M = i.useMemo(() => j.filter(e => e.embeddedActivity.userIds.has(n.id)), [j, n.id]),
    k = Array.from((0, d.Rz)(M).values()),
    [U, G] = (0, o.yK)([y.A], () => [y.A.getStreamForUser(n.id, t.getGuildId()), y.A.getActiveStreamForUser(n.id, t.getGuildId())], [t, n.id]),
    [V, F] = (0, o.yK)([I.A, O.A, v.A, f.default], () => (0, p.eo)(t, I.A, O.A, v.A, f.default)),
    B = (0, o.bG)([b.default], () => b.default.getId()),
    H = (0, o.bG)([A.A], () => (0, _.nr)(U, A.A), [U]),
    Y = (0, _.AO)(U),
    W = null != R ? R : H,
    K = (0, u.m)(n, W),
    z = (0, o.bG)([S.Ay], () => {
      var e;
      return null != (e = S.Ay.getVoiceStatesForChannel(t).find(e => e.user.id === n.id)) ? e : null
    }, [t, n.id]),
    q = i.useMemo(() => null != z ? [z] : [], [z]),
    {
      enableUserHoverActivities: Z
    } = (0, T.fC)({
      guildId: t.guild_id,
      location: "VoiceUserActivities"
    }),
    X = (0, g.m)({
      location: "voice_channel_activities"
    }),
    Q = null != U,
    J = K.length + k.length > 0,
    $ = null != x,
    ee = n.id === b.default.getId(),
    et = $;
  if (!Q && !J && !et) return null;
  let en = () => null == U || null == P ? null : (0, r.jsxs)("div", {
      className: s()(w.yt, {
        [w.P0]: D
      }),
      children: [(0, r.jsx)(h.Z, {
        stream: U,
        activeStream: G,
        streamActivity: H,
        streamApplication: Y,
        user: n,
        currentUserId: B,
        canWatch: V,
        unavailableReason: F,
        onWatchStream: P,
        onAction: a,
        showHeader: Z,
        skipContainer: true
      }), J && (0, r.jsx)("div", {
        className: w.zN
      })]
    }),
    er = () => et && null != x ? (0, r.jsx)("div", {
      className: w.Ak,
      children: (0, r.jsx)(m.Z, {
        hangStatusActivity: x,
        channel: t,
        userId: n.id,
        isSelf: ee,
        analyticsSource: "VoiceUserActivities",
        onAction: a,
        className: w.AF,
        iconClassName: w.W9,
        textClassName: w.YJ
      })
    }) : null;
  return (0, r.jsxs)(l.HOs, {
    className: w.kL,
    children: [er(), et && (Q || J) && (0, r.jsx)("div", {
      className: w.zN
    }), en(), k.map((e, n) => {
      var i;
      return (0, r.jsx)(C.A, {
        embeddedApp: e,
        presenceActivity: null != (i = e.presenceActivity) ? i : true,
        channel: t,
        onAction: a
      }, n)
    }), K.map((e, s) => X && null != e.application_id && N.sQ.has(e.application_id) ? (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(C.A, {
        presenceActivity: e,
        channel: t,
        members: q,
        onAction: a
      }), (0, r.jsx)(E.A, {
        className: w.L,
        applicationId: e.application_id,
        userIds: [n.id],
        location: "voice_channel",
        guildId: t.guild_id,
        channelId: t.id
      })]
    }, "".concat(s, "-with-gifting-breadcrumb")) : (0, r.jsx)(C.A, {
      presenceActivity: e,
      channel: t,
      members: q,
      onAction: a
    }, s))]
  })
}