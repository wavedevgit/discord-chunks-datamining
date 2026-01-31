/** Chunk was on 17534 **/
/** chunk id: 850729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => M
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

function L(e) {
  var t, n;
  let {
    selected: s,
    user: d,
    badge: p,
    link: g,
    showProgressBadge: b
  } = e, [A, y] = l.useState(false), [O, _] = l.useState(false), [j, x] = l.useState(null), [v, T] = l.useState(0), L = (0, i.Vd)("home"), M = (0, h.fy)().activePanel === h.HP.APP_ICON, G = () => {
    x(null), T(0), clearTimeout(j)
  };
  if (null == d) return null;
  let k = w.intl.string(w.t.YUU0RF);
  O && (k = a.w.get(N.wqg) ? w.intl.string(w.t["nkq1l+"]) : w.intl.string(w.t.Be8Q5E));
  let U = null;
  !s && b && (U = (0, r.jsx)(c.A, {
    className: R.Cp,
    determineOwnVisibility: false
  }));
  let V = s || A || M,
    B = (0, r.jsx)(o.Qk9, {
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
          if (!__OVERLAY__ && (null != j && clearTimeout(j), x(setTimeout(G, 500)), T(v + 1), 15 === v)) {
            G();
            let e = !a.w.get(N.wqg);
            a.w.set(N.wqg, e), e && a.w.set(P.L, true), e ? (0, f.Ak)("discodo") : (0, f.Ak)("user_leave"), _(true), setTimeout(() => {
              _(false)
            }, 1e3)
          }
        },
        selected: V,
        ariaLabel: w.intl.string(w.t.YUU0RF),
        "aria-owns": "guild-list-unread-dms",
        "aria-selected": s
      }, L), n = n = {
        to: {
          pathname: g,
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
    children: (0, r.jsx)(m.A, {
      inlineSpecs: D,
      tutorialId: "friends-list",
      position: "right",
      children: (0, r.jsxs)(C.c, {
        children: [(0, r.jsx)(E.A, {
          selected: s,
          hovered: A,
          className: R.Io
        }), (0, r.jsx)(S.A, {
          hideOnClick: true,
          text: k,
          selected: s,
          children: B
        })]
      })
    })
  })
}

function M() {
  let e = (0, v.q)(),
    t = (0, s.bG)([j.A, _.A], () => {
      let e = (0, c.v)(j.A.activeItems, _.A),
        {
          total: t,
          progress: n
        } = x.zY(e),
        r = x.uA(n, t);
      return r > 0 && r < 100
    }),
    n = (0, g.kX)(),
    l = Object.keys(T.TP),
    i = (0, d.A)(),
    {
      unviewedTrialCount: a,
      unviewedDiscountCount: o
    } = (0, s.cf)([y.A], () => ({
      unviewedTrialCount: y.A.getUnacknowledgedOffers(l).length,
      unviewedDiscountCount: y.A.getUnacknowledgedDiscountOffers().length
    })),
    u = i.fractionalState === T.xc.NONE ? a + o : 0,
    h = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
    f = (0, p.W)(),
    m = n + u + f,
    E = m === u && u > 0 && n + f === 0,
    C = O.A.getHomeLink();
  return E && (C = N.BVt.APPLICATION_STORE), (0, r.jsx)(L, {
    selected: e,
    user: h,
    selectedChannelId: b.A.getChannelId(N.ME),
    badge: m,
    link: C,
    showProgressBadge: t
  })
}