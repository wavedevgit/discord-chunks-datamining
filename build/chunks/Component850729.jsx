/** Chunk was on 97492 **/
/** chunk id: 850729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => L
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk509963 = require("./509963.jsx"),
  Chunk704761 = require("./704761.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk793943 = require("./793943.js"),
  Chunk411976 = require("./411976.js"),
  Chunk912309 = require("./912309.js"),
  Chunk400492 = require("./400492.js"),
  Chunk728321 = require("./728321.jsx"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk816733 = require("./816733.js"),
  Chunk619921 = require("./619921.js"),
  Chunk194871 = require("./194871.js"),
  Chunk966846 = require("./966846.js"),
  Chunk674378 = require("./674378.js"),
  Chunk87941 = require("./87941.js"),
  Chunk941971 = require("./941971.jsx"),
  Chunk900848 = require("./900848.jsx"),
  Chunk550591 = require("./550591.jsx"),
  Chunk65611 = require("./65611.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk235079 = require("./235079.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk623773 = require("./623773.js");
let D = {
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

function M(e) {
  var t, n;
  let {
    selected: a,
    user: d,
    badge: p,
    link: h,
    showProgressBadge: m
  } = e, [A, y] = l.useState(false), [O, j] = l.useState(false), [v, x] = l.useState(null), [E, T] = l.useState(0), M = (0, i.Vd)("home"), L = (0, f.fy)().activePanel === f.HP.APP_ICON, G = () => {
    x(null), T(0), clearTimeout(v)
  };
  if (null == d) return null;
  let k = w.intl.string(w.t.YUU0RF);
  O && (k = s.w.get(N.wqg) ? w.intl.string(w.t["nkq1l+"]) : w.intl.string(w.t.Be8Q5E));
  let U = null;
  !a && m && (U = (0, r.jsx)(c.A, {
    className: R.Cp,
    determineOwnVisibility: false
  }));
  let V = a || A || L,
    F = (0, r.jsx)(o.Qk9, {
      selected: true,
      lowerBadge: p > 0 ? (0, I.wN)(p) : null,
      upperBadge: U,
      lowerBadgeSize: {
        width: (0, o.o6S)(p)
      },
      children: (0, r.jsx)(o.jlP, (t = function(e) {
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
        onMouseEnter: () => y(true),
        onMouseLeave: () => y(false),
        onClick: () => {
          if (!__OVERLAY__ && (null != v && clearTimeout(v), x(setTimeout(G, 500)), T(E + 1), 15 === E)) {
            G();
            let e = !s.w.get(N.wqg);
            s.w.set(N.wqg, e), e && s.w.set(P.L, true), e ? (0, b.Ak)("discodo") : (0, b.Ak)("user_leave"), j(true), setTimeout(() => {
              j(false)
            }, 1e3)
          }
        },
        selected: V,
        ariaLabel: w.intl.string(w.t.YUU0RF),
        "aria-owns": "guild-list-unread-dms",
        "aria-selected": a
      }, M), n = n = {
        to: {
          pathname: h,
          state: {
            analyticsSource: {
              page: N.liQ.GUILD_CHANNEL,
              section: N.JJy.NAVIGATION,
              object: N.ZSU.BUTTON_HOME
            }
          }
        },
        children: (0, r.jsx)(u.A, {})
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
    className: R.Uq,
    children: (0, r.jsx)(g.A, {
      inlineSpecs: D,
      tutorialId: "friends-list",
      position: "right",
      children: (0, r.jsxs)(C.c, {
        children: [(0, r.jsx)(_.A, {
          selected: a,
          hovered: A,
          className: R.Io
        }), (0, r.jsx)(S.A, {
          hideOnClick: true,
          text: k,
          selected: a,
          children: F
        })]
      })
    })
  })
}

function L() {
  let e = (0, E.q)(),
    t = (0, a.bG)([v.A, j.A], () => {
      let e = (0, c.v)(v.A.activeItems, j.A),
        {
          total: t,
          progress: n
        } = x.zY(e),
        r = x.uA(n, t);
      return r > 0 && r < 100
    }),
    n = (0, h.kX)(),
    l = Object.keys(T.TP),
    i = (0, d.A)(),
    {
      unviewedTrialCount: s,
      unviewedDiscountCount: o
    } = (0, a.cf)([y.A], () => ({
      unviewedTrialCount: y.A.getUnacknowledgedOffers(l).length,
      unviewedDiscountCount: y.A.getUnacknowledgedDiscountOffers().length
    })),
    u = i.fractionalState === T.xc.NONE ? s + o : 0,
    f = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
    b = (0, p.W)(),
    g = n + u + b,
    _ = g === u && u > 0 && n + b === 0,
    C = O.A.getHomeLink();
  return _ && (C = N.BVt.APPLICATION_STORE), (0, r.jsx)(M, {
    selected: e,
    user: f,
    selectedChannelId: m.A.getChannelId(N.ME),
    badge: g,
    link: C,
    showProgressBadge: t
  })
}