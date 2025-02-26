/** Chunk was on 14093 **/
n.d(t, {
  Z: () => I
}), n(627494), n(757143), n(301563);
var r = n(200651),
  l = n(192379),
  a = n(317261),
  i = n(423875),
  o = n(442837),
  s = n(18323),
  c = n(594174),
  u = n(908841),
  d = n(823379),
  m = n(5192),
  p = n(561308),
  h = n(319604),
  f = n(31074),
  g = n(206295),
  x = n(278399),
  v = n(297781),
  y = n(591853),
  j = n(410441),
  P = n(981631),
  O = n(616922),
  b = n(388032);
let C = (e, t, n, r) => {
    let l = function(e) {
        if (e === a._.WEEK) return b.t.SjOZfn
      }(r),
      i = m.ZP.getName(t.guild_id, t.id, n),
      o = e.extra.artist.name;
    return b.NW.formatToMarkdownString(l, {
      artist: o,
      userName: i
    }).replaceAll("*", "")
  },
  N = (e, t) => b.NW.formatToPlainString(b.t.Osmpr6, {
    username: t.username,
    artist: e.extra.artist.name
  }),
  I = e => {
    let {
      channel: t,
      entry: n,
      onReaction: a,
      onVoiceChannelPreview: m
    } = e, {
      parent_title: I,
      provider: w,
      image_url: E
    } = n.extra.media, Z = n.extra.artist.name, S = (0, o.e7)([c.default], () => c.default.getUser(n.author_id)), {
      primaryColor: T,
      secondaryColor: A
    } = (0, g.Z)(E), _ = (0, p.Nq)(n), k = l.useCallback(() => {
      if (null == t || null == S || !(0, d.Hi)(_, x.y9)) return;
      let e = C(n, t, S, _);
      return (0, h.CR)({
        user: S,
        channel: t,
        mediaImageSrc: E,
        artist: Z,
        description: e,
        colors: [T, A],
        badges: (0, h.UU)(n)
      })
    }, [E, Z, t, n, T, _, A, S]), R = (0, f.Z)(P.ABu.SPOTIFY);
    if (null == S || !(0, d.Hi)(_, x.y9)) return null;
    let D = () => {
      let e = O.Hw.ALBUM,
        t = s.Z.isProtocolRegistered() ? O.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : O.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
      window.open(t)
    };
    return (0, r.jsxs)(y.yR, {
      children: [(0, r.jsx)(y.wG, {
        onClickTitle: D,
        onClickSubtitle: () => {
          let e = O.Hw.ARTIST,
            t = s.Z.isProtocolRegistered() ? O.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : O.C7.WEB_OPEN(e, n.extra.artist.external_id);
          window.open(t)
        },
        onClickThumbnail: D,
        channel: t,
        entry: n,
        headerIcons: w === i.p.SPOTIFY ? (0, r.jsx)(j.Z, {
          onClick: R,
          Icon: u.Z,
          "aria-label": b.NW.string(b.t["0ZB/XF"])
        }) : null,
        userDescription: b.t.CcVI1d,
        title: I,
        subtitle: Z,
        badges: (0, r.jsx)(v.Gk, {
          location: v.Gt.POPOUT,
          children: x.Ho.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        })
      }), (0, r.jsx)(y.St, {
        children: (0, r.jsx)(y.WT, {
          onReaction: a,
          onVoiceChannelPreview: m,
          user: S,
          channel: t,
          generateReactionImage: k,
          reactionImageAltText: N(n, S),
          entry: n
        })
      })]
    })
  }