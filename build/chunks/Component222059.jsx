/** Chunk was on 81985 **/
/** chunk id: 222059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk339149 = require("./339149.jsx"),
  Chunk864682 = require("./864682.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk550385 = require("./550385.js"),
  Chunk899740 = require("./899740.js"),
  Chunk849862 = require("./849862.js"),
  Chunk460181 = require("./460181.js"),
  Chunk155409 = require("./155409.jsx"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk431 = require("./431.js"),
  Chunk774343 = require("./774343.js"),
  Chunk417363 = require("./417363.js"),
  Chunk941128 = require("./941128.js"),
  Chunk780570 = require("./780570.js"),
  Chunk278464 = require("./278464.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk674552 = require("./674552.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk871465 = require("./871465.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk992397 = require("./992397.js");
let R = {
  origin: {
    x: false,
    y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
    x: 0,
    y: 0
  }
};

function D(e) {
  var t, n;
  let {
    selected: a,
    user: d,
    badge: f,
    link: h,
    showProgressBadge: b
  } = e, [y, v] = i.useState(false), [O, j] = i.useState(false), [x, C] = i.useState(null), [E, N] = i.useState(0), D = (0, l.Ie)("home"), M = (0, p.oq)().activePanel === p.wh.APP_ICON, k = () => {
    C(null), N(0), clearTimeout(x)
  };
  if (null == d) return null;
  let L = A.intl.string(A.t.YUU0RF);
  O && (L = o.K.get(Z.wli) ? A.intl.string(A.t["nkq1l+"]) : A.intl.string(A.t.Be8Q5E));
  let U = null;
  !a && b && (U = (0, r.jsx)(c.Z, {
    className: w.downloadProgress,
    determineOwnVisibility: false
  }));
  let G = a || y || M,
    B = (0, r.jsx)(s.aRk, {
      selected: true,
      lowerBadge: f > 0 ? (0, P.Ne)(f) : null,
      upperBadge: U,
      lowerBadgeSize: {
        width: (0, s.OVM)(f)
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
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        onMouseEnter: () => v(true),
        onMouseLeave: () => v(false),
        onClick: () => {
          if (!__OVERLAY__ && (null != x && clearTimeout(x), C(setTimeout(k, 500)), N(E + 1), 15 === E)) {
            k();
            let e = !o.K.get(Z.wli);
            o.K.set(Z.wli, e), e && o.K.set(T.O, true), e ? (0, g.GN)("discodo") : (0, g.GN)("user_leave"), j(true), setTimeout(() => {
              j(false)
            }, 1e3)
          }
        },
        selected: G,
        ariaLabel: A.intl.string(A.t.YUU0RF),
        "aria-owns": "guild-list-unread-dms",
        "aria-selected": a
      }, D), n = n = {
        to: {
          pathname: h,
          state: {
            analyticsSource: {
              page: Z.ZY5.GUILD_CHANNEL,
              section: Z.jXE.NAVIGATION,
              object: Z.qAy.BUTTON_HOME
            }
          }
        },
        children: (0, r.jsx)(u.Z, {})
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
    className: w.tutorialContainer,
    children: (0, r.jsx)(m.Z, {
      inlineSpecs: R,
      tutorialId: "friends-list",
      position: "right",
      children: (0, r.jsxs)(_.H, {
        children: [(0, r.jsx)(S.Z, {
          selected: a,
          hovered: y,
          className: w.pill
        }), (0, r.jsx)(I.Z, {
          hideOnClick: true,
          text: L,
          selected: a,
          children: B
        })]
      })
    })
  })
}

function M() {
  let e = (0, E.n)(),
    t = (0, a.e7)([x.Z, j.Z], () => {
      let e = (0, c.E)(x.Z.activeItems, j.Z),
        {
          total: t,
          progress: n
        } = C.lK(e),
        r = C.xI(n, t);
      return r > 0 && r < 100
    }),
    n = (0, h.If)(),
    i = Object.keys(N.nG),
    l = (0, d.Z)(),
    {
      unviewedTrialCount: o,
      unviewedDiscountCount: s
    } = (0, a.cj)([v.Z], () => ({
      unviewedTrialCount: v.Z.getUnacknowledgedOffers(i).length,
      unviewedDiscountCount: v.Z.getUnacknowledgedDiscountOffers().length
    })),
    u = l.fractionalState === N.a$.NONE ? o + s : 0,
    p = (0, a.e7)([y.default], () => y.default.getCurrentUser()),
    g = (0, f.q)(),
    m = n + u + g,
    S = m === u && u > 0 && n + g === 0,
    _ = O.Z.getHomeLink();
  return S && (_ = Z.Z5c.APPLICATION_STORE), (0, r.jsx)(D, {
    selected: e,
    user: p,
    selectedChannelId: b.Z.getChannelId(Z.ME),
    badge: m,
    link: _,
    showProgressBadge: t
  })
}