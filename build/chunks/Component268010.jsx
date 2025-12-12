/** Chunk was on web.js **/
/** chunk id: 268010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk594174 = require("./594174.js"),
  Chunk49012 = require("./49012.js"),
  Chunk5192 = require("./5192.js"),
  Chunk591759 = require("./591759.js"),
  Chunk379357 = require("./379357.js"),
  Chunk561308 = require("./561308.js"),
  Chunk685270 = require("./685270.js"),
  Chunk31074 = require("./31074.js"),
  Chunk206295 = require("./206295.js"),
  Chunk335326 = require("./335326.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk591853 = require("./591853.jsx"),
  Chunk410441 = require("./410441.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let S = (e, t, n) => {
    let r = v.t.LHF6D9,
      i = u.ZP.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n),
      o = e.extra.media_title;
    return v.intl.formatToMarkdownString(r, {
      mediaTitle: o,
      userName: i,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  I = (e, t) => v.intl.formatToPlainString(v.t.kCbfbN, {
    username: t.username,
    activity: e.extra.media_title
  }),
  T = e => {
    let {
      channel: t,
      entry: n,
      onReaction: u,
      onVoiceChannelPreview: T
    } = e, C = (0, o.e7)([l.default], () => l.default.getUser(n.author_id)), {
      largeImage: A
    } = (0, f.rv)({
      entry: n
    }), {
      primaryColor: N,
      secondaryColor: P
    } = (0, h.Z)(null == A ? true : A.src), R = (0, o.e7)([s.default], () => s.default.locale), w = (0, m.Z)(O.ABu.CRUNCHYROLL), D = (0, p.ap)(n.extra.media_assets_large_text), x = i.useCallback(e => {
      if (null != C && (null == A ? true : A.src) != null) return (0, _.B)({
        entry: n,
        mediaImageSrc: null == A ? true : A.src,
        avatarSrc: C.getAvatarURL(null == t ? true : t.guild_id, 128),
        description: S(n, t, C),
        timestamp: (0, p.yh)(n, R),
        episodeDescription: D,
        colors: [N, P],
        channelId: e
      })
    }, [t, n, D, R, null == A ? true : A.src, N, P, C]), L = () => {
      if (null == n.extra.url) return;
      let e = d.Z.safeParseWithQuery(n.extra.url);
      null != e && null != e.protocol && null != e.hostname && (0, c.q)({
        href: d.Z.format(e),
        trusted: false
      })
    };
    return null == C ? null : (0, r.jsxs)(b.yR, {
      children: [(0, r.jsx)(b.wG, {
        channel: t,
        entry: n,
        userDescription: (0, p.kr)(n) ? v.t["LH+Z3y"] : v.t.YuKgml,
        title: n.extra.media_title,
        subtitle: n.extra.media_subtitle,
        headerIcons: (0, r.jsx)(y.Z, {
          onClick: w,
          Icon: a.omf,
          "aria-label": v.intl.string(v.t.jdJYXw)
        }),
        badges: (0, r.jsx)(E.Gk, {
          location: E.Gt.POPOUT,
          children: g.t.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        }),
        onClickTitle: L,
        onClickThumbnail: L
      }), (0, r.jsx)(b.St, {
        children: (0, r.jsx)(b.WT, {
          onReaction: u,
          onVoiceChannelPreview: T,
          user: C,
          channel: t,
          generateReactionImage: x,
          reactionImageAltText: I(n, C),
          entry: n
        })
      })]
    })
  }