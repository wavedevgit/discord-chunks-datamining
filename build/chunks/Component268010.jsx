/** Chunk was on web.js **/
/** chunk id: 268010, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let I = (e, t, n) => {
    let r = v.t.LHF6D9,
      i = u.ZP.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n),
      a = e.extra.media_title;
    return v.intl.formatToMarkdownString(r, {
      mediaTitle: a,
      userName: i,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  S = (e, t) => v.intl.formatToPlainString(v.t.kCbfbN, {
    username: t.username,
    activity: e.extra.media_title
  }),
  T = e => {
    let {
      channel: t,
      entry: n,
      onReaction: u,
      onVoiceChannelPreview: T
    } = e, A = (0, a.e7)([l.default], () => l.default.getUser(n.author_id)), {
      largeImage: C
    } = (0, f.rv)({
      entry: n
    }), {
      primaryColor: N,
      secondaryColor: R
    } = (0, m.Z)(null == C ? true : C.src), P = (0, a.e7)([s.default], () => s.default.locale), w = (0, h.Z)(O.ABu.CRUNCHYROLL), D = (0, _.ap)(n.extra.media_assets_large_text), x = i.useCallback(e => {
      if (null != A && (null == C ? true : C.src) != null) return (0, p.B)({
        entry: n,
        mediaImageSrc: null == C ? true : C.src,
        avatarSrc: A.getAvatarURL(null == t ? true : t.guild_id, 128),
        description: I(n, t, A),
        timestamp: (0, _.yh)(n, P),
        episodeDescription: D,
        colors: [N, R],
        channelId: e
      })
    }, [t, n, D, P, null == C ? true : C.src, N, R, A]), L = () => {
      if (null == n.extra.url) return;
      let e = d.Z.safeParseWithQuery(n.extra.url);
      null != e && null != e.protocol && null != e.hostname && (0, c.q)({
        href: d.Z.format(e),
        trusted: false
      })
    };
    return null == A ? null : (0, r.jsxs)(b.yR, {
      children: [(0, r.jsx)(b.wG, {
        channel: t,
        entry: n,
        userDescription: (0, _.kr)(n) ? v.t["LH+Z3y"] : v.t.YuKgml,
        title: n.extra.media_title,
        subtitle: n.extra.media_subtitle,
        headerIcons: (0, r.jsx)(y.Z, {
          onClick: w,
          Icon: o.omf,
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
          user: A,
          channel: t,
          generateReactionImage: x,
          reactionImageAltText: S(n, A),
          entry: n
        })
      })]
    })
  }