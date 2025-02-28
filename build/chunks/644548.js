/** Chunk was on 14093 **/
n.d(t, {
  Z: () => P
}), n(627494), n(757143), n(301563);
var r = n(200651),
  l = n(192379),
  a = n(317261),
  i = n(70956),
  o = n(5192),
  s = n(379357),
  c = n(561308),
  u = n(919394),
  d = n(206295),
  m = n(227172),
  p = n(467473),
  h = n(297781),
  f = n(591853),
  g = n(410441),
  v = n(797342),
  x = n(388032);
let y = (e, t, n, r) => {
    let l = function(e) {
        if (e === a._.WEEK) return x.t["7TXfc3"]
      }(r),
      i = o.ZP.getName(t.guild_id, t.id, n),
      s = e.extra.game_name;
    return x.NW.formatToMarkdownString(l, {
      gameName: s,
      userName: i
    }).replaceAll("*", "")
  },
  j = (e, t) => x.NW.formatToPlainString(x.t.tAwI1t, {
    username: t.username,
    activity: e.extra.game_name
  }),
  P = e => {
    let {
      channel: t,
      entry: n,
      disableGameProfileLinks: a,
      onReaction: o,
      onVoiceChannelPreview: P
    } = e, {
      largeImage: O
    } = (0, s.rv)({
      entry: n
    }), {
      user: b,
      details: C,
      appName: N
    } = (0, v.n)(n), {
      primaryColor: I,
      secondaryColor: w
    } = (0, d.Z)(null == O ? void 0 : O.src), E = (0, c.yA)(n), Z = (0, c.Nq)(n), S = l.useCallback(e => {
      if (null != t && null != b && null != E && null != Z && (0, p.qy)(Z)) return (0, u.SO)({
        entry: n,
        applicationImageSrc: null == O ? void 0 : O.src,
        avatarSrcs: [b.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
        description: y(n, t, b, Z),
        timestamp: x.NW.formatToPlainString(x.t.YL7UEx, {
          hours: Math.round(E / i.Z.Seconds.HOUR)
        }),
        colors: [I, w],
        channelId: e
      })
    }, [null == O ? void 0 : O.src, t, E, n, I, Z, w, b]);
    if (null == b || null == E || null == Z || !(0, p.qy)(Z)) return null;
    let T = null != n.extra.platform ? m.v[n.extra.platform] : null;
    return (0, r.jsxs)(f.yR, {
      children: [(0, r.jsx)(f.wG, {
        channel: t,
        headerIcons: null == T ? null : (0, r.jsx)(g.Z, {
          Icon: T,
          "aria-label": x.NW.string(x.t.YR4cHB)
        }),
        entry: n,
        userDescription: x.t.rPqqtr,
        title: N,
        subtitle: C,
        badges: (0, r.jsx)(h.Gk, {
          location: h.Gt.POPOUT,
          children: p.Hs.map((e, t) => (0, r.jsx)(e, {
            entry: n
          }, t))
        }),
        disableGameProfileLinks: a
      }), (0, r.jsx)(f.St, {
        children: (0, r.jsx)(f.WT, {
          onReaction: o,
          onVoiceChannelPreview: P,
          user: b,
          channel: t,
          generateReactionImage: S,
          reactionImageAltText: j(n, b),
          entry: n
        })
      })]
    })
  }