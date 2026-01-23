/** Chunk was on web.js **/
/** chunk id: 247807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk56121 = require("./56121.js"),
  Chunk205327 = require("./205327.js"),
  Chunk311907 = require("./311907.js"),
  Chunk210528 = require("./210528.js"),
  Chunk287809 = require("./287809.js"),
  Chunk121090 = require("./121090.jsx"),
  Chunk403362 = require("./403362.js"),
  Chunk562153 = require("./562153.js"),
  Chunk583846 = require("./583846.js"),
  Chunk405310 = require("./405310.js"),
  Chunk434200 = require("./434200.js"),
  Chunk176563 = require("./176563.js"),
  Chunk620708 = require("./620708.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk910692 = require("./910692.jsx"),
  Chunk18282 = require("./18282.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk272984 = require("./272984.js"),
  Chunk985018 = require("./985018.jsx");

function I(e) {
  if (e === a.j.WEEK) return A.t.SjOZfm
}
let S = (e, t, n, r) => {
    let i = I(r),
      a = f.Ay.getName(t.guild_id, t.id, n),
      s = e.extra.artist.name;
    return A.intl.formatToMarkdownString(i, {
      artist: s,
      userName: a
    }).replaceAll("*", "")
  },
  T = (e, t) => A.intl.formatToPlainString(A.t.Osmpr9, {
    username: t.username,
    artist: e.extra.artist.name
  }),
  C = e => {
    let {
      channel: t,
      entry: n,
      onReaction: a,
      onVoiceChannelPreview: f
    } = e, {
      parent_title: I,
      provider: C,
      image_url: N
    } = n.extra.media, R = n.extra.artist.name, w = (0, o.bG)([c.default], () => c.default.getUser(n.author_id)), {
      primaryColor: P,
      secondaryColor: D
    } = (0, m.A)(N), x = (0, p.TQ)(n), L = i.useCallback(() => {
      if (null == t || null == w || !(0, d.S1)(x, g.wE)) return;
      let e = S(n, t, w, x);
      return (0, _.Lu)({
        user: w,
        channel: t,
        mediaImageSrc: N,
        artist: R,
        description: e,
        colors: [P, D],
        badges: (0, _.KR)(n)
      })
    }, [N, R, t, n, P, x, D, w]), j = (0, h.A)(O.fg2.SPOTIFY);
    if (null == w || !(0, d.S1)(x, g.wE)) return null;
    let M = () => {
        let e = v.M0.ALBUM,
          t = l.A.isProtocolRegistered() ? v.RQ.PLAYER_OPEN(e, n.extra.media.external_parent_id) : v.RQ.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t)
      },
      k = () => {
        let e = v.M0.ARTIST,
          t = l.A.isProtocolRegistered() ? v.RQ.PLAYER_OPEN(e, n.extra.artist.external_id) : v.RQ.WEB_OPEN(e, n.extra.artist.external_id);
        window.open(t)
      };
    return (0, r.jsxs)(y.YN, {
      children: [(0, r.jsx)(y.BC, {
        onClickTitle: M,
        onClickSubtitle: k,
        onClickThumbnail: M,
        channel: t,
        entry: n,
        headerIcons: C === s.X.SPOTIFY ? (0, r.jsx)(b.A, {
          onClick: j,
          Icon: u.A,
          "aria-label": A.intl.string(A.t["0ZB/XE"])
        }) : null,
        userDescription: A.t.CcVI1T,
        title: I,
        subtitle: R,
        badges: (0, r.jsx)(E.mG, {
          location: E.N5.POPOUT,
          children: g.$u.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        })
      }), (0, r.jsx)(y.Eh, {
        children: (0, r.jsx)(y.fD, {
          onReaction: a,
          onVoiceChannelPreview: f,
          user: w,
          channel: t,
          generateReactionImage: L,
          reactionImageAltText: T(n, w),
          entry: n
        })
      })]
    })
  }