/** Chunk was on web.js **/
"use strict";
n.d(t, {
  KQ: () => y,
  ZP: () => I,
  aG: () => O
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(210887),
  u = n(594174),
  d = n(645896),
  f = n(353093),
  _ = n(426964),
  p = n(308083),
  h = n(388032),
  g = n(409435);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = i.memo(function(e) {
    let {
      src: t,
      tag: n,
      className: i,
      size: o = p.NC.SIZE_16
    } = e;
    return null == t ? null : (0, r.jsx)("img", {
      src: t,
      alt: h.NW.formatToPlainString(h.t.PShNVV, {
        tag: n
      }),
      className: a()(g.badge, i),
      width: o,
      height: o
    })
  }),
  O = i.memo(function(e) {
    let {
      guildId: t,
      clanTag: n,
      clanBadge: i,
      className: o,
      textClassName: s,
      badgeClassName: c,
      onClick: u,
      onMouseEnter: d,
      textVariant: _ = "text-xs/semibold",
      textColor: h = "text-normal",
      badgeSize: m = p.NC.SIZE_12,
      inline: E = !0
    } = e;
    return (0, r.jsx)(l.P3F, {
      tag: "span",
      tabIndex: null == u ? -1 : void 0,
      onClick: u,
      onMouseEnter: d,
      className: a()(g.chipletContainerInner, E && g.chipletContainerInline, null != u && g.clickable, o),
      children: (0, r.jsxs)(l.Text, {
        variant: _,
        color: h,
        tag: "span",
        className: a()(g.text, s),
        children: [null != i && "string" == typeof i ? (0, r.jsx)(y, {
          src: (0, f.ky)(t, i, m),
          tag: null == n ? void 0 : n.toString(),
          size: m,
          className: c
        }) : i, (0, r.jsx)("span", {
          className: g.unselectable,
          children: n
        })]
      })
    })
  }),
  S = i.memo(function(e) {
    var t, n;
    let {
      primaryGuild: o,
      userId: f,
      className: p,
      children: h,
      profileViewedAnalytics: m,
      onShowProfile: v
    } = e, y = (0, s.e7)([u.default], () => u.default.getUser(f), [f]), O = null !== (t = null == y ? void 0 : y.primaryGuild) && void 0 !== t ? t : o, [S, I] = (0, d.L_)(null !== (n = null == O ? void 0 : O.identityGuildId) && void 0 !== n ? n : null), T = i.useCallback(() => {
      I()
    }, [I]), N = (0, s.e7)([c.Z], () => c.Z.theme);
    return (0, r.jsx)(l.ze6, {
      theme: N,
      children: (0, r.jsx)(l.yRy, {
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, r.jsx)(_.Z, {
            isLoading: S,
            clan: O,
            onClose: t,
            profileViewedAnalytics: m,
            userId: f
          })
        },
        position: "top",
        animationPosition: "top",
        spacing: 16,
        children: e => (0, r.jsx)(l.P3F, b(E({
          className: a()(g.clickable, p),
          tag: "span"
        }, e), {
          onClick: t => {
            var n;
            null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation(), null == v || v()
          },
          onMouseEnter: () => {
            var t;
            T(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
          },
          children: h
        }))
      })
    })
  }),
  I = i.memo(function(e) {
    var t;
    let {
      primaryGuild: n,
      userId: i,
      contextGuildId: o,
      className: l,
      containerClassName: c,
      textVariant: d,
      textColor: _,
      badgeSize: p,
      disableGuildProfile: h = !1,
      inline: m = !0,
      profileViewedAnalytics: E,
      onShowProfile: v
    } = e, b = (0, s.e7)([u.default], () => u.default.getUser(i), [i]), y = null !== (t = null == b ? void 0 : b.primaryGuild) && void 0 !== t ? t : n, {
      tag: I,
      badge: T,
      guildId: N
    } = (0, f.Pb)(y);
    return (0, f.p0)(i, o) && null != N ? h ? (0, r.jsx)(O, {
      guildId: N,
      clanTag: I,
      clanBadge: T,
      className: a()(g.noTooltip, l),
      textVariant: d,
      textColor: _,
      badgeSize: p,
      inline: m
    }) : (0, r.jsx)(S, {
      primaryGuild: y,
      userId: i,
      profileViewedAnalytics: E,
      className: c,
      onShowProfile: v,
      children: (0, r.jsx)(O, {
        guildId: N,
        clanTag: I,
        clanBadge: T,
        className: l,
        textVariant: d,
        textColor: _,
        badgeSize: p,
        inline: m
      })
    }) : null
  })