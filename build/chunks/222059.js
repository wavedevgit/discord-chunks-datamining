/** Chunk was on 53494 **/
n.d(t, {
  u: () => L
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(91192),
  l = n(442837),
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
  _ = n(774343),
  O = n(417363),
  j = n(941128),
  C = n(780570),
  x = n(278464),
  S = n(276952),
  P = n(682662),
  I = n(662146),
  N = n(674552),
  Z = n(981631),
  w = n(474936),
  E = n(871465),
  T = n(388032),
  A = n(985651);
let D = {
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
  } = e, _ = (0, l.e7)([u.Z], () => u.Z.isEditorOpen), [O, j] = i.useState(!1), [C, x] = i.useState(!1), [w, R] = i.useState(null), [L, k] = i.useState(0), M = (0, o.Ie)("home"), G = (0, p.Q3)("DefaultHomeButton"), B = () => {
    R(null), k(0), clearTimeout(w)
  };
  if (null == f) return null;
  let U = T.NW.string(T.t.YUU0RE);
  C && (U = a.K.get(Z.wli) ? T.NW.string(T.t.nkq1l5) : T.NW.string(T.t.Be8Q5O));
  let W = null;
  !h && y && (W = (0, r.jsx)(c.Z, {
    className: A.downloadProgress,
    determineOwnVisibility: !1
  }));
  let V = h || O || _,
    F = (0, r.jsx)(s.aRk, {
      selected: G || V,
      lowerBadge: b > 0 ? (0, N.Ne)(b) : null,
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
        onMouseEnter: () => j(!0),
        onMouseLeave: () => j(!1),
        onClick: () => {
          if (!__OVERLAY__ && (null != w && clearTimeout(w), R(setTimeout(B, 500)), k(L + 1), 15 === L)) {
            B();
            let e = !a.K.get(Z.wli);
            a.K.set(Z.wli, e), e && a.K.set(E.O5, !0), e ? (0, g.GN)("discodo") : (0, g.GN)("user_leave"), x(!0), setTimeout(() => {
              x(!1)
            }, 1e3)
          }
        },
        selected: V,
        ariaLabel: T.NW.string(T.t.YUU0RE)
      }, M), n = n = {
        to: {
          pathname: v,
          state: {
            analyticsSource: {
              page: Z.ZY5.GUILD_CHANNEL,
              section: Z.jXE.NAVIGATION,
              object: Z.qAy.BUTTON_HOME
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
    className: A.tutorialContainer,
    children: (0, r.jsx)(m.Z, {
      inlineSpecs: D,
      tutorialId: "friends-list",
      position: "right",
      children: (0, r.jsxs)(P.H, {
        children: [(0, r.jsx)(S.Z, {
          selected: h,
          hovered: O,
          className: A.pill
        }), (0, r.jsx)(I.Z, {
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
  let e = (0, x.n)(),
    t = (0, l.e7)([j.Z, O.Z], () => {
      let e = (0, c.E)(j.Z.activeItems, O.Z),
        {
          total: t,
          progress: n
        } = C.lK(e),
        r = C.xI(n, t);
      return r > 0 && r < 100
    }),
    n = (0, f.If)(),
    i = Object.keys(w.nG),
    {
      unviewedTrialCount: o,
      unviewedDiscountCount: a
    } = (0, l.cj)([y.Z], () => ({
      unviewedTrialCount: y.Z.getUnacknowledgedOffers(i).length,
      unviewedDiscountCount: y.Z.getUnacknowledgedDiscountOffers().length
    })),
    s = o + a,
    u = (0, l.e7)([v.default], () => v.default.getCurrentUser()),
    d = (0, h.q)(),
    p = n + s + d,
    g = p === s && s > 0 && n + d === 0,
    m = _.Z.getHomeLink();
  return g && (m = Z.Z5c.APPLICATION_STORE), (0, r.jsx)(R, {
    selected: e,
    user: u,
    selectedChannelId: b.Z.getChannelId(Z.ME),
    badge: p,
    link: m,
    showProgressBadge: t
  })
}