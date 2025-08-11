/** Chunk was on web.js **/
/** chunk id: 644548, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  if (e === o._.WEEK) return E.t["7TXfc3"]
}
let y = (e, t, n, r) => {
    let i = b(r),
      o = s.ZP.getName(t.guild_id, t.id, n),
      a = e.extra.game_name;
    return E.intl.formatToMarkdownString(i, {
      gameName: a,
      userName: o
    }).replaceAll("*", "")
  },
  O = (e, t) => E.intl.formatToPlainString(E.t.tAwI1t, {
    username: t.username,
    activity: e.extra.game_name
  }),
  v = e => {
    let {
      channel: t,
      entry: n,
      disableGameProfileLinks: o,
      onReaction: s,
      onVoiceChannelPreview: b
    } = e, {
      largeImage: v
    } = (0, l.rv)({
      entry: n
    }), {
      user: I,
      details: T,
      appName: S
    } = (0, g.n)(n), {
      primaryColor: A,
      secondaryColor: N
    } = (0, d.Z)(null == v ? true : v.src), C = (0, c.yA)(n), R = (0, c.Nq)(n), P = i.useCallback(e => {
      if (null != t && null != I && null != C && null != R && (0, _.qy)(R)) return (0, u.SO)({
        entry: n,
        applicationImageSrc: null == v ? true : v.src,
        avatarSrcs: [I.getAvatarURL(null == t ? true : t.guild_id, 128)],
        description: y(n, t, I, R),
        timestamp: E.intl.formatToPlainString(E.t.YL7UEx, {
          hours: Math.round(C / a.Z.Seconds.HOUR)
        }),
        colors: [A, N],
        channelId: e
      })
    }, [null == v ? true : v.src, t, C, n, A, R, N, I]);
    if (null == I || null == C || null == R || !(0, _.qy)(R)) return null;
    let w = null != n.extra.platform ? f.v[n.extra.platform] : null;
    return <h.yR>{<h.wG channel={t} headerIcons={null == w ? null : (0, r.jsx)(m.Z, {
          Icon: w,
          "aria-label": E.intl.string(E.t.YR4cHB)
        })} entry={n} userDescription={E.t.rPqqtr} title={S} subtitle={T} badges={(0, r.jsx)(p.Gk, {
          location: p.Gt.POPOUT,
          children: _.Hs.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        })} disableGameProfileLinks={o} />}{<h.St><h.WT onReaction={s} onVoiceChannelPreview={b} user={I} channel={t} generateReactionImage={P} reactionImageAltText={O(n, I)} entry={n} /></h.St>}</h.yR>
  }