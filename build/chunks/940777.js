/** Chunk was on 2928 **/
n.d(t, {
  Z: () => R
}), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(91192),
  s = n(442837),
  c = n(481060),
  u = n(493683),
  d = n(239091),
  p = n(317381),
  h = n(16609),
  f = n(540059),
  g = n(276952),
  m = n(682662),
  b = n(674552),
  y = n(593364),
  v = n(905423),
  O = n(199902),
  j = n(592125),
  _ = n(944486),
  C = n(979651),
  x = n(709054),
  P = n(853856),
  N = n(593214),
  S = n(919755),
  I = n(110977),
  Z = n(603274),
  E = n(981631),
  w = n(388032),
  T = n(497012);

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
let D = {
  analyticsSource: {
    page: E.ZY5.GUILD_CHANNEL,
    section: E.jXE.CHANNEL_LIST,
    object: E.qAy.CHANNEL
  }
};

function R() {
  var e, t;
  let l = (0, a.Ie)("favorites"),
    {
      favoriteAdded: R,
      clearFavoriteAdded: L
    } = (0, N.up)(),
    [M, k] = i.useState(!1),
    {
      favoriteServerMuted: G,
      favoriteChannels: U
    } = (0, s.cj)([P.Z], () => ({
      favoriteChannels: P.Z.getFavoriteChannels(),
      favoriteServerMuted: P.Z.favoriteServerMuted
    })),
    B = (0, s.e7)([_.Z], () => _.Z.getChannelId(E.I_8)),
    W = (0, s.e7)([j.Z], () => j.Z.getChannel(B)),
    V = (0, v.Z)(e => e.guildId) === E.I_8,
    {
      badge: F,
      unread: H
    } = (0, S.Z)(U),
    z = function(e) {
      let t = (0, s.e7)([_.Z], () => _.Z.getVoiceChannelId()),
        n = null != t && null != e[t],
        r = (0, s.e7)([O.Z], () => {
          if (!n) return !1;
          let t = O.Z.getCurrentUserActiveStream();
          return null != t && null != e[t.channelId]
        }),
        i = (0, s.e7)([O.Z], () => O.Z.getAllApplicationStreams().some(t => null != e[t.channelId])),
        l = (0, s.e7)([C.Z], () => n && null != t && C.Z.hasVideo(t), [n, t]),
        o = (0, s.Wu)([p.ZP], () => x.default.keys(e).reduce((e, t) => (e.push(...p.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
        a = (0, s.e7)([p.ZP], () => Array.from(p.ZP.getSelfEmbeddedActivities().values()).some(t => {
          let {
            location: n
          } = t, r = (0, h.pY)(n);
          return null != r && null != e[r]
        })),
        c = o.length > 0,
        u = !1,
        d = !1,
        f = !1,
        g = !1;
      return n ? (u = !l, d = l, f = r, g = a) : (f = i, g = c), (0, b.Or)({
        audio: u,
        video: d,
        screenshare: f,
        liveStage: !1,
        isCurrentUserConnected: n,
        activity: g
      })
    }(U),
    Y = F > 0 ? (0, y.N)(F) : null,
    q = (0, f.Q3)("FavoritesButton"),
    Q = i.useCallback(() => {
      L()
    }, [L]);
  return (0, r.jsxs)(m.H, {
    children: [(0, r.jsx)(g.Z, {
      selected: V,
      hovered: M,
      unread: H && !G,
      className: T.pill
    }), (0, r.jsx)(Z.Z, {
      onShow: Q,
      children: (0, r.jsx)(I.S, {
        children: (0, r.jsx)(c.aRk, {
          selected: q || V || M,
          upperBadge: z,
          lowerBadge: Y,
          children: (0, r.jsx)(c.LYs, (e = A({}, l), t = t = {
            ariaLabel: w.NW.formatToPlainString(w.t["/uzRsr"], {
              guildName: w.NW.string(w.t.wMWycn),
              mentions: F
            }),
            to: {
              pathname: E.Z5c.CHANNEL(E.I_8, B),
              state: D
            },
            selected: V || M,
            onMouseEnter: () => k(!0),
            onMouseLeave: () => k(!1),
            onMouseDown: function() {
              null != W && u.Z.preload(W.guild_id, W.id)
            },
            onContextMenu: function(e) {
              (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("3190").then(n.bind(n, 631981));
                return t => (0, r.jsx)(e, A({}, t))
              })
            },
            children: (0, r.jsx)("div", {
              className: o()(T.ring, {
                [T.ringActive]: R
              }),
              children: (0, r.jsx)(c.r7p, {
                size: "custom",
                color: "currentColor",
                className: T.favoriteIcon,
                width: 20,
                height: 20
              })
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e))
        })
      })
    })]
  })
}