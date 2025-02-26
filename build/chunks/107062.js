/** Chunk was on 94458 **/
n.d(t, {
  ZP: () => T
}), n(627494), n(757143), n(301563);
var r = n(200651),
  a = n(192379),
  l = n(442837),
  i = n(481060),
  o = n(620662),
  s = n(841784),
  c = n(429589),
  u = n(499254),
  d = n(827498),
  m = n(541716),
  p = n(706454),
  h = n(823379),
  x = n(5192),
  g = n(379357),
  v = n(192918),
  f = n(561308),
  y = n(907152),
  j = n(206295),
  P = n(297781),
  O = n(591853),
  b = n(797342),
  C = n(981631),
  N = n(388032);
let I = (e, t) => N.NW.formatToPlainString(N.t.tAwI1t, {
    username: t.username,
    activity: e.extra.activity_name
  }),
  w = (e, t, n) => {
    let r = N.t["bES+y8"],
      a = x.ZP.getName(t.guild_id, t.id, n),
      l = e.extra.activity_name;
    return N.NW.formatToMarkdownString(r, {
      gameName: l,
      userName: a
    }).replaceAll("*", "")
  },
  E = e => {
    let {
      entry: t,
      channel: n,
      users: r,
      countOthers: a
    } = e, l = N.t["7j/5mp"];
    return N.NW.formatToMarkdownString(l, {
      gameName: t.extra.activity_name,
      user1: x.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
      user2: x.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
      countOthers: a
    }).replaceAll("*", "")
  },
  T = e => {
    let {
      channel: t,
      entry: n,
      onReaction: x,
      onVoiceChannelPreview: T
    } = e, {
      largeImage: Z
    } = (0, g.rv)({
      entry: n,
      showCoverImage: !1
    }), {
      user: S,
      details: A,
      activity: _,
      embeddedActivity: k
    } = (0, b.n)(n), {
      primaryColor: R,
      secondaryColor: M
    } = (0, j.Z)(null == Z ? void 0 : Z.src), W = (0, l.e7)([p.default], () => p.default.locale), {
      displayParticipants: L,
      participant1: D,
      participant2: z,
      numOtherParticipants: U
    } = (0, v.Z)(n, 3), B = () => {
      u.__(d._b.TEXT, m.Ie.NORMAL, {
        applicationId: n.extra.application_id
      })
    }, H = a.useCallback(e => {
      if ((null == Z ? void 0 : Z.src) == null || null == t || null == S) return;
      let r = U > 0 ? E({
        entry: n,
        channel: t,
        users: [D, z],
        countOthers: U
      }) : w(n, t, S);
      return (0, y.C4)({
        entry: n,
        applicationImageSrc: null == Z ? void 0 : Z.src,
        avatarSrcs: L.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, f.yh)(n, W),
        colors: [R, M],
        channelId: e
      })
    }, [null == Z ? void 0 : Z.src, t, L, n, W, U, D, z, R, M, S]);
    if (null == S) return null;
    let G = (0, r.jsx)(P.PZ, {
        location: P.Gt.POPOUT,
        entry: n
      }),
      F = (0, r.jsx)(O.wG, {
        channel: t,
        userDescription: (0, f.kr)(n) ? N.t.vPg1JS : N.t.rPqqtr,
        title: n.extra.activity_name,
        subtitle: A,
        badges: G,
        entry: n,
        showCoverImage: !1,
        onClickTitle: B,
        onClickSubtitle: B,
        onClickThumbnail: B
      }),
      V = (0, o.Z)(_, C.xjy.JOIN) || (0, s.Z)(_),
      Y = V ? (0, r.jsx)(c.Z, {
        embeddedActivity: k,
        activity: _,
        user: S,
        ButtonComponent: e => (0, r.jsx)(O.Ll, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({
          IconComponent: i.YVR
        }, e))
      }) : null,
      q = (0, r.jsx)(O.Ll, {
        onClick: B,
        IconComponent: i.jje,
        children: N.NW.string(N.t.GDWYR0)
      }),
      J = [V ? Y : q].filter(h.lm);
    return (0, r.jsxs)(O.yR, {
      children: [F, (0, r.jsx)(O.St, {
        children: (0, r.jsx)(O.WT, {
          onReaction: x,
          onVoiceChannelPreview: T,
          user: S,
          channel: t,
          generateReactionImage: H,
          reactionImageAltText: I(n, S),
          entry: n,
          buttons: J
        })
      })]
    })
  }