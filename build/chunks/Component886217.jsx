/** Chunk was on web.js **/
/** chunk id: 886217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk317261 = require("./317261.js"),
  Chunk423875 = require("./423875.js"),
  Chunk442837 = require("./442837.js"),
  Chunk18323 = require("./18323.js"),
  Chunk594174 = require("./594174.js"),
  Chunk908841 = require("./908841.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk561308 = require("./561308.js"),
  Chunk319604 = require("./319604.js"),
  Chunk31074 = require("./31074.js"),
  Chunk206295 = require("./206295.js"),
  Chunk278399 = require("./278399.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk591853 = require("./591853.jsx"),
  Chunk410441 = require("./410441.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk616922 = require("./616922.js"),
  Chunk388032 = require("./388032.jsx");

function I(e) {
  if (e === o._.WEEK) return S.t.SjOZfm
}
let T = (e, t, n, r) => {
    let i = I(r),
      o = f.ZP.getName(t.guild_id, t.id, n),
      a = e.extra.artist.name;
    return S.intl.formatToMarkdownString(i, {
      artist: a,
      userName: o
    }).replaceAll("*", "")
  },
  C = (e, t) => S.intl.formatToPlainString(S.t.Osmpr9, {
    username: t.username,
    artist: e.extra.artist.name
  }),
  A = e => {
    let {
      channel: t,
      entry: n,
      onReaction: o,
      onVoiceChannelPreview: f
    } = e, {
      parent_title: I,
      provider: A,
      image_url: N
    } = n.extra.media, P = n.extra.artist.name, R = (0, s.e7)([c.default], () => c.default.getUser(n.author_id)), {
      primaryColor: w,
      secondaryColor: D
    } = (0, h.Z)(N), x = (0, p.Nq)(n), L = i.useCallback(() => {
      if (null == t || null == R || !(0, d.Hi)(x, g.y9)) return;
      let e = T(n, t, R, x);
      return (0, _.CR)({
        user: R,
        channel: t,
        mediaImageSrc: N,
        artist: P,
        description: e,
        colors: [w, D],
        badges: (0, _.UU)(n)
      })
    }, [N, P, t, n, w, x, D, R]), j = (0, m.Z)(O.ABu.SPOTIFY);
    if (null == R || !(0, d.Hi)(x, g.y9)) return null;
    let M = () => {
        let e = v.Hw.ALBUM,
          t = l.Z.isProtocolRegistered() ? v.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : v.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
        window.open(t)
      },
      k = () => {
        let e = v.Hw.ARTIST,
          t = l.Z.isProtocolRegistered() ? v.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : v.C7.WEB_OPEN(e, n.extra.artist.external_id);
        window.open(t)
      };
    return (0, r.jsxs)(b.yR, {
      children: [(0, r.jsx)(b.wG, {
        onClickTitle: M,
        onClickSubtitle: k,
        onClickThumbnail: M,
        channel: t,
        entry: n,
        headerIcons: A === a.p.SPOTIFY ? (0, r.jsx)(y.Z, {
          onClick: j,
          Icon: u.Z,
          "aria-label": S.intl.string(S.t["0ZB/XE"])
        }) : null,
        userDescription: S.t.CcVI1T,
        title: I,
        subtitle: P,
        badges: (0, r.jsx)(E.Gk, {
          location: E.Gt.POPOUT,
          children: g.Ho.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        })
      }), (0, r.jsx)(b.St, {
        children: (0, r.jsx)(b.WT, {
          onReaction: o,
          onVoiceChannelPreview: f,
          user: R,
          channel: t,
          generateReactionImage: L,
          reactionImageAltText: C(n, R),
          entry: n
        })
      })]
    })
  }