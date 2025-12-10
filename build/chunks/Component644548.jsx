/** Chunk was on web.js **/
/** chunk id: 644548, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk317261 = require("./317261.js"),
  Chunk70956 = require("./70956.js"),
  Chunk5192 = require("./5192.js"),
  Chunk379357 = require("./379357.js"),
  Chunk561308 = require("./561308.js"),
  Chunk919394 = require("./919394.js"),
  Chunk206295 = require("./206295.js"),
  Chunk227172 = require("./227172.jsx"),
  Chunk555672 = require("./555672.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk591853 = require("./591853.jsx"),
  Chunk410441 = require("./410441.jsx"),
  Chunk797342 = require("./797342.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  if (e === a._.WEEK) return E.t["7TXfc6"]
}
let y = (e, t, n, r) => {
    let i = b(r),
      a = s.ZP.getName(t.guild_id, t.id, n),
      o = e.extra.game_name;
    return E.intl.formatToMarkdownString(i, {
      gameName: o,
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
      onReaction: s,
      onVoiceChannelPreview: b
    } = e, {
      largeImage: v
    } = (0, l.rv)({
      entry: n
    }), {
      user: S,
      details: I,
      appName: T
    } = (0, g.n)(n), {
      primaryColor: C,
      secondaryColor: A
    } = (0, d.Z)(null == v ? true : v.src), N = (0, c.yA)(n), P = (0, c.Nq)(n), R = i.useCallback(e => {
      if (null != t && null != S && null != N && null != P && (0, p.qy)(P)) return (0, u.SO)({
        entry: n,
        applicationImageSrc: null == v ? true : v.src,
        avatarSrcs: [S.getAvatarURL(null == t ? true : t.guild_id, 128)],
        description: y(n, t, S, P),
        timestamp: E.intl.formatToPlainString(E.t.YL7UE3, {
          hours: Math.round(N / o.Z.Seconds.HOUR)
        }),
        colors: [C, A],
        channelId: e
      })
    }, [null == v ? true : v.src, t, N, n, C, P, A, S]);
    if (null == S || null == N || null == P || !(0, p.qy)(P)) return null;
    let D = null != n.extra.platform ? f.v[n.extra.platform] : null;
    return (0, r.jsxs)(m.yR, {
      children: [(0, r.jsx)(m.wG, {
        channel: t,
        headerIcons: null == D ? null : (0, r.jsx)(h.Z, {
          Icon: D,
          "aria-label": E.intl.string(E.t.YR4cHH)
        }),
        entry: n,
        userDescription: E.t.rPqqts,
        title: T,
        subtitle: I,
        badges: (0, r.jsx)(_.Gk, {
          location: _.Gt.POPOUT,
          children: p.Hs.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        }),
        disableGameProfileLinks: a
      }), (0, r.jsx)(m.St, {
        children: (0, r.jsx)(m.WT, {
          onReaction: s,
          onVoiceChannelPreview: b,
          user: S,
          channel: t,
          generateReactionImage: R,
          reactionImageAltText: O(n, S),
          entry: n
        })
      })]
    })
  }