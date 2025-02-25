/** Chunk was on 64615 **/
n.d(t, {
  u: () => L
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(91192),
  o = n(442837),
  a = n(433517),
  s = n(481060),
  c = n(339149),
  u = n(327943),
  d = n(864682),
  p = n(540059),
  h = n(899740),
  f = n(849862),
  g = n(460181),
  m = n(155409),
  b = n(944486),
  v = n(594174),
  y = n(431),
  O = n(774343),
  j = n(417363),
  _ = n(941128),
  x = n(780570),
  C = n(278464),
  P = n(276952),
  S = n(682662),
  N = n(662146),
  Z = n(674552),
  I = n(981631),
  w = n(474936),
  E = n(871465),
  T = n(388032),
  D = n(760541);
let A = {
  origin: {
    x: -16,
    y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
    x: 0,
    y: 0
  }
};

function R(e) {
  var t, n;
  let {
    selected: h,
    user: f,
    badge: b,
    link: v,
    showProgressBadge: y
  } = e, O = (0, o.e7)([u.Z], () => u.Z.isEditorOpen), [j, _] = i.useState(!1), [x, C] = i.useState(!1), [w, R] = i.useState(null), [L, M] = i.useState(0), k = (0, l.Ie)("home"), G = (0, p.Q3)("DefaultHomeButton"), B = () => {
    R(null), M(0), clearTimeout(w)
  };
  if (null == f) return null;
  let U = T.NW.string(T.t.YUU0RE);
  x && (U = a.K.get(I.wli) ? T.NW.string(T.t.nkq1l5) : T.NW.string(T.t.Be8Q5O));
  let W = null;
  !h && y && (W = (0, r.jsx)(c.Z, {
    className: D.downloadProgress,
    determineOwnVisibility: !1
  }));
  let V = h || j || O,
    F = (0, r.jsx)(s.aRk, {
      selected: G || V,
      lowerBadge: b > 0 ? (0, Z.Ne)(b) : null,
      upperBadge: W,
      lowerBadgeSize: {
        width: (0, s.OVM)(b)
      },
      children: (0, r.jsx)(s.LYs, (t = function(e) {
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
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        onClick: () => {
          if (!__OVERLAY__ && (null != w && clearTimeout(w), R(setTimeout(B, 500)), M(L + 1), 15 === L)) {
            B();
            let e = !a.K.get(I.wli);
            a.K.set(I.wli, e), e && a.K.set(E.O5, !0), e ? (0, g.GN)("discodo") : (0, g.GN)("user_leave"), C(!0), setTimeout(() => {
              C(!1)
            }, 1e3)
          }
        },
        selected: V,
        ariaLabel: T.NW.string(T.t.YUU0RE)
      }, k), n = n = {
        to: {
          pathname: v,
          state: {
            analyticsSource: {
              page: I.ZY5.GUILD_CHANNEL,
              section: I.jXE.NAVIGATION,
              object: I.qAy.BUTTON_HOME
            }
          }
        },
        children: (0, r.jsx)(d.Z, {})
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    });
  return (0, r.jsx)("div", {
    className: D.tutorialContainer,
    children: (0, r.jsx)(m.Z, {
      inlineSpecs: A,
      tutorialId: "friends-list",
      position: "right",
      children: (0, r.jsxs)(S.H, {
        children: [(0, r.jsx)(P.Z, {
          selected: h,
          hovered: j,
          className: D.pill
        }), (0, r.jsx)(N.Z, {
          color: s.ua7.Colors.PRIMARY,
          hideOnClick: !0,
          text: U,
          selected: h,
          children: F
        })]
      })
    })
  })
}

function L() {
  let e = (0, C.n)(),
    t = (0, o.e7)([_.Z, j.Z], () => {
      let e = (0, c.E)(_.Z.activeItems, j.Z),
        {
          total: t,
          progress: n
        } = x.lK(e),
        r = x.xI(n, t);
      return r > 0 && r < 100
    }),
    n = (0, f.If)(),
    i = Object.keys(w.nG),
    {
      unviewedTrialCount: l,
      unviewedDiscountCount: a
    } = (0, o.cj)([y.Z], () => ({
      unviewedTrialCount: y.Z.getUnacknowledgedOffers(i).length,
      unviewedDiscountCount: y.Z.getUnacknowledgedDiscountOffers().length
    })),
    s = l + a,
    u = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
    d = (0, h.q)(),
    p = n + s + d,
    g = p === s && s > 0 && n + d === 0,
    m = O.Z.getHomeLink();
  return g && (m = I.Z5c.APPLICATION_STORE), (0, r.jsx)(R, {
    selected: e,
    user: u,
    selectedChannelId: b.Z.getChannelId(I.ME),
    badge: p,
    link: m,
    showProgressBadge: t
  })
}