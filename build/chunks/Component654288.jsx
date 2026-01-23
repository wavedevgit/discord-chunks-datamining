/** Chunk was on web.js **/
/** chunk id: 654288, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk287809 = require("./287809.js"),
  Chunk307600 = require("./307600.js"),
  Chunk562153 = require("./562153.js"),
  Chunk998218 = require("./998218.js"),
  Chunk939341 = require("./939341.js"),
  Chunk583846 = require("./583846.js"),
  Chunk342652 = require("./342652.js"),
  Chunk434200 = require("./434200.js"),
  Chunk176563 = require("./176563.js"),
  Chunk514243 = require("./514243.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk910692 = require("./910692.jsx"),
  Chunk18282 = require("./18282.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let A = (e, t, n) => {
    let r = v.t.LHF6D9,
      i = u.Ay.getName(null == t ? true : t.guild_id, null == t ? true : t.id, n),
      a = e.extra.media_title;
    return v.intl.formatToMarkdownString(r, {
      mediaTitle: a,
      userName: i,
      episodeDescription: e.extra.media_subtitle
    }).replaceAll("*", "")
  },
  I = (e, t) => v.intl.formatToPlainString(v.t.kCbfbN, {
    username: t.username,
    activity: e.extra.media_title
  }),
  S = e => {
    let {
      channel: t,
      entry: n,
      onReaction: u,
      onVoiceChannelPreview: S
    } = e, T = (0, a.bG)([l.default], () => l.default.getUser(n.author_id)), {
      largeImage: C
    } = (0, f.nO)({
      entry: n
    }), {
      primaryColor: N,
      secondaryColor: w
    } = (0, m.A)(null == C ? true : C.src), R = (0, a.bG)([o.default], () => o.default.locale), P = (0, h.A)(O.fg2.CRUNCHYROLL), D = (0, p.kR)(n.extra.media_assets_large_text), x = i.useCallback(e => {
      if (null != T && (null == C ? true : C.src) != null) return (0, _.z)({
        entry: n,
        mediaImageSrc: null == C ? true : C.src,
        avatarSrc: T.getAvatarURL(null == t ? true : t.guild_id, 128),
        description: A(n, t, T),
        timestamp: (0, p.As)(n, R),
        episodeDescription: D,
        colors: [N, w],
        channelId: e
      })
    }, [t, n, D, R, null == C ? true : C.src, N, w, T]), L = () => {
      if (null == n.extra.url) return;
      let e = d.A.safeParseWithQuery(n.extra.url);
      null != e && null != e.protocol && null != e.hostname && (0, c.h)({
        href: d.A.format(e),
        trusted: false
      })
    };
    return null == T ? null : (0, r.jsxs)(y.YN, {
      children: [(0, r.jsx)(y.BC, {
        channel: t,
        entry: n,
        userDescription: (0, p.JM)(n) ? v.t["LH+Z3y"] : v.t.YuKgml,
        title: n.extra.media_title,
        subtitle: n.extra.media_subtitle,
        headerIcons: (0, r.jsx)(b.A, {
          onClick: P,
          Icon: s.kwD,
          "aria-label": v.intl.string(v.t.jdJYXw)
        }),
        badges: (0, r.jsx)(E.mG, {
          location: E.N5.POPOUT,
          children: g.R.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        }),
        onClickTitle: L,
        onClickThumbnail: L
      }), (0, r.jsx)(y.Eh, {
        children: (0, r.jsx)(y.fD, {
          onReaction: u,
          onVoiceChannelPreview: S,
          user: T,
          channel: t,
          generateReactionImage: x,
          reactionImageAltText: I(n, T),
          entry: n
        })
      })]
    })
  }