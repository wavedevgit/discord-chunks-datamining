/** Chunk was on 94458 **/
n.d(t, {
  Z: () => k,
  v: () => _
});
var r = n(200651),
  a = n(192379),
  l = n(758713),
  i = n(442837),
  o = n(481060),
  s = n(620662),
  c = n(841784),
  u = n(420660),
  d = n(429589),
  m = n(757182),
  p = n(706454),
  h = n(374129),
  x = n(639351),
  g = n(823379),
  v = n(379357),
  f = n(192918),
  y = n(22211),
  j = n(561308),
  P = n(919394),
  O = n(438226),
  b = n(31074),
  C = n(206295),
  N = n(91140),
  I = n(297781),
  w = n(591853),
  E = n(410441),
  T = n(797342),
  Z = n(981631),
  S = n(388032);

function A(e) {
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
}
let _ = {
    [l.z.DESKTOP]: null,
    [l.z.LINUX]: null,
    [l.z.MACOS]: null,
    [l.z.NINTENDO]: null,
    [l.z.IOS]: null,
    [l.z.ANDROID]: null,
    [l.z.XBOX]: x.Z,
    [l.z.PLAYSTATION]: h.Z
  },
  k = e => {
    let {
      channel: t,
      entry: n,
      disableGameProfileLinks: h,
      onReaction: x,
      onVoiceChannelPreview: k,
      onUserPopoutClosed: R,
      trackRankingItemInteraction: M
    } = e, {
      largeImage: W
    } = (0, v.rv)({
      entry: n
    }), {
      user: L,
      details: D,
      appName: z,
      activity: U
    } = (0, T.n)(n), {
      primaryColor: B,
      secondaryColor: H
    } = (0, C.Z)(null == W ? void 0 : W.src), G = (0, i.e7)([p.default], () => p.default.locale), {
      streamPreviewUrl: F,
      stream: V
    } = (0, y.Z)(n), {
      displayParticipants: Y,
      participant1: q,
      participant2: J,
      numOtherParticipants: X
    } = (0, f.Z)(n, 3), K = n.extra.platform, $ = null != K ? _[K] : null, Q = K === l.z.XBOX ? Z.ABu.XBOX : K === l.z.PLAYSTATION ? Z.ABu.PLAYSTATION : void 0, ee = (0, b.Z)(Q), et = a.useCallback(e => {
      if ((null == W ? void 0 : W.src) == null || null == t || null == L) return;
      let r = X > 0 ? (0, O.VY)({
        entry: n,
        channel: t,
        users: [q, J],
        countOthers: X
      }) : (0, O.HV)(n, t, L);
      return (0, P.SO)({
        entry: n,
        applicationImageSrc: null == W ? void 0 : W.src,
        avatarSrcs: Y.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, j.yh)(n, G),
        colors: [B, H],
        channelId: e
      })
    }, [null == W ? void 0 : W.src, t, Y, n, G, X, q, J, B, H, L]);
    if (null == L) return null;
    let en = (0, r.jsx)(I.Gk, {
        location: null == F ? I.Gt.POPOUT : I.Gt.STREAMING_POPOUT,
        children: N.W.map((e, t) => (0, r.jsx)(e, {
          entry: n
        }, t))
      }),
      er = null == V ? (0, r.jsx)(w.wG, {
        channel: t,
        headerIcons: null == $ ? null : (0, r.jsx)(E.Z, {
          onClick: ee,
          Icon: $,
          "aria-label": S.NW.string(S.t.YR4cHB)
        }),
        userDescription: (0, j.kr)(n) ? S.t.vPg1JS : S.t.rPqqtr,
        title: z,
        subtitle: D,
        badges: en,
        entry: n,
        disableGameProfileLinks: h,
        onUserPopoutClosed: R,
        trackRankingItemInteraction: M
      }) : (0, r.jsx)(w.jL, {
        channel: t,
        title: n.extra.game_name,
        subtitle: D,
        badges: en,
        userDescription: S.t["6oWFUF"],
        entry: n,
        stream: V,
        onUserPopoutClosed: R,
        trackRankingItemInteraction: M
      }),
      ea = [(0, s.Z)(U, Z.xjy.JOIN) || (0, c.Z)(U) ? (0, r.jsx)(d.Z, {
        activity: U,
        user: L,
        ButtonComponent: e => (0, r.jsx)(w.Ll, A({
          IconComponent: o.iWm
        }, e))
      }) : null, (0, u.Z)(U) ? (0, r.jsx)(m.Z, {
        activity: U,
        ButtonComponent: e => (0, r.jsx)(w.Ll, A({
          IconComponent: o.tEF
        }, e))
      }) : null].filter(g.lm);
    return (0, r.jsxs)(w.yR, {
      children: [er, (0, r.jsx)(w.St, {
        children: (0, r.jsx)(w.WT, {
          onReaction: x,
          onVoiceChannelPreview: k,
          user: L,
          channel: t,
          generateReactionImage: et,
          reactionImageAltText: (0, O.IS)(n, L),
          entry: n,
          buttons: ea
        })
      })]
    })
  }