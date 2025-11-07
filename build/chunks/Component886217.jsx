/** Chunk was on web.js **/
/** chunk id: 886217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function S(e) {
  if (e === a._.WEEK) return I.t.SjOZfm
}
let T = (e, t, n, r) => {
    let i = S(r),
      a = f.ZP.getName(t.guild_id, t.id, n),
      o = e.extra.artist.name;
    return I.intl.formatToMarkdownString(i, {
      artist: o,
      userName: a
    }).replaceAll("*", "")
  },
  A = (e, t) => I.intl.formatToPlainString(I.t.Osmpr9, {
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
      parent_title: S,
      provider: C,
      image_url: N
    } = n.extra.media, R = n.extra.artist.name, P = (0, s.e7)([c.default], () => c.default.getUser(n.author_id)), {
      primaryColor: w,
      secondaryColor: D
    } = (0, m.Z)(N), x = (0, _.Nq)(n), L = i.useCallback(() => {
      if (null == t || null == P || !(0, d.Hi)(x, g.y9)) return;
      let e = T(n, t, P, x);
      return (0, p.CR)({
        user: P,
        channel: t,
        mediaImageSrc: N,
        artist: R,
        description: e,
        colors: [w, D],
        badges: (0, p.UU)(n)
      })
    }, [N, R, t, n, w, x, D, P]), M = (0, h.Z)(O.ABu.SPOTIFY);
    if (null == P || !(0, d.Hi)(x, g.y9)) return null;
    let j = () => {
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
        onClickTitle: j,
        onClickSubtitle: k,
        onClickThumbnail: j,
        channel: t,
        entry: n,
        headerIcons: C === o.p.SPOTIFY ? (0, r.jsx)(y.Z, {
          onClick: M,
          Icon: u.Z,
          "aria-label": I.intl.string(I.t["0ZB/XE"])
        }) : null,
        userDescription: I.t.CcVI1T,
        title: S,
        subtitle: R,
        badges: (0, r.jsx)(E.Gk, {
          location: E.Gt.POPOUT,
          children: g.Ho.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        })
      }), (0, r.jsx)(b.St, {
        children: (0, r.jsx)(b.WT, {
          onReaction: a,
          onVoiceChannelPreview: f,
          user: P,
          channel: t,
          generateReactionImage: L,
          reactionImageAltText: A(n, P),
          entry: n
        })
      })]
    })
  }