/** Chunk was on web.js **/
/** chunk id: 273198, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk56121 = require("./56121.js"),
  Chunk927813 = require("./927813.js"),
  Chunk562153 = require("./562153.js"),
  Chunk939341 = require("./939341.js"),
  Chunk583846 = require("./583846.js"),
  Chunk821988 = require("./821988.js"),
  Chunk176563 = require("./176563.js"),
  Chunk636202 = require("./636202.jsx"),
  Chunk977001 = require("./977001.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk910692 = require("./910692.jsx"),
  Chunk18282 = require("./18282.jsx"),
  Chunk299846 = require("./299846.js"),
  Chunk985018 = require("./985018.jsx");

function y(e) {
  if (e === a.j.WEEK) return E.t["7TXfc6"]
}
let b = (e, t, n, r) => {
    let i = y(r),
      a = o.Ay.getName(t.guild_id, t.id, n),
      s = e.extra.game_name;
    return E.intl.formatToMarkdownString(i, {
      gameName: s,
      userName: a
    }).replaceAll("*", "")
  },
  O = (e, t) => E.intl.formatToPlainString(E.t.tAwI1k, {
    username: t.username,
    activity: e.extra.game_name
  }),
  v = e => {
    let {
      channel: t,
      entry: n,
      disableGameProfileLinks: a,
      onReaction: o,
      onVoiceChannelPreview: y
    } = e, {
      largeImage: v
    } = (0, l.nO)({
      entry: n
    }), {
      user: A,
      details: I,
      appName: S
    } = (0, g.u)(n), {
      primaryColor: T,
      secondaryColor: C
    } = (0, d.A)(null == v ? true : v.src), N = (0, c.ty)(n), w = (0, c.TQ)(n), R = i.useCallback(e => {
      if (null != t && null != A && null != N && null != w && (0, p._E)(w)) return (0, u.p6)({
        entry: n,
        applicationImageSrc: null == v ? true : v.src,
        avatarSrcs: [A.getAvatarURL(null == t ? true : t.guild_id, 128)],
        description: b(n, t, A, w),
        timestamp: E.intl.formatToPlainString(E.t.YL7UE3, {
          hours: Math.round(N / s.A.Seconds.HOUR)
        }),
        colors: [T, C],
        channelId: e
      })
    }, [null == v ? true : v.src, t, N, n, T, w, C, A]);
    if (null == A || null == N || null == w || !(0, p._E)(w)) return null;
    let P = null != n.extra.platform ? f.n[n.extra.platform] : null;
    return (0, r.jsxs)(h.YN, {
      children: [(0, r.jsx)(h.BC, {
        channel: t,
        headerIcons: null == P ? null : (0, r.jsx)(m.A, {
          Icon: P,
          "aria-label": E.intl.string(E.t.YR4cHH)
        }),
        entry: n,
        userDescription: E.t.rPqqts,
        title: S,
        subtitle: I,
        badges: (0, r.jsx)(_.mG, {
          location: _.N5.POPOUT,
          children: p.ac.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        }),
        disableGameProfileLinks: a
      }), (0, r.jsx)(h.Eh, {
        children: (0, r.jsx)(h.fD, {
          onReaction: o,
          onVoiceChannelPreview: y,
          user: A,
          channel: t,
          generateReactionImage: R,
          reactionImageAltText: O(n, A),
          entry: n
        })
      })]
    })
  }