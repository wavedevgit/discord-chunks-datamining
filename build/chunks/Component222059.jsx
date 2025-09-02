/** Chunk was on 11160 **/
/** chunk id: 222059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk339149 = require("./339149.jsx"),
  Chunk864682 = require("./864682.jsx"),
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
  Chunk815141 = require("./815141.js");
let A = {
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

function R(e) {
  var t, n;
  let {
    selected: o,
    user: p,
    badge: h,
    link: m,
    showProgressBadge: b
  } = e, [O, y] = i.useState(false), [_, v] = i.useState(false), [j, x] = i.useState(null), [N, R] = i.useState(0), D = (0, l.Ie)("home"), M = (0, d.oq)().activePanel === d.wh.APP_ICON, L = () => {
    x(null), R(0), clearTimeout(j)
  };
  if (null == p) return null;
  let k = w.intl.string(w.t.YUU0RE);
  _ && (k = a.K.get(I.wli) ? w.intl.string(w.t.nkq1l5) : w.intl.string(w.t.Be8Q5O));
  let U = null;
  !o && b && (U = (0, r.jsx)(c.Z, {
    className: T.downloadProgress,
    determineOwnVisibility: false
  }));
  let G = o || O || M,
    B = (0, r.jsx)(s.aRk, {
      selected: true,
      lowerBadge: h > 0 ? (0, P.Ne)(h) : null,
      upperBadge: U,
      lowerBadgeSize: {
        width: (0, s.OVM)(h)
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
        onMouseEnter: () => y(true),
        onMouseLeave: () => y(false),
        onClick: () => {
          if (!__OVERLAY__ && (null != j && clearTimeout(j), x(setTimeout(L, 500)), R(N + 1), 15 === N)) {
            L();
            let e = !a.K.get(I.wli);
            a.K.set(I.wli, e), e && a.K.set(Z.O5, true), e ? (0, f.GN)("discodo") : (0, f.GN)("user_leave"), v(true), setTimeout(() => {
              v(false)
            }, 1e3)
          }
        },
        selected: G,
        ariaLabel: w.intl.string(w.t.YUU0RE),
        "aria-owns": "guild-list-unread-dms",
        "aria-selected": o
      }, D), n = n = {
        to: {
          pathname: m,
          state: {
            analyticsSource: {
              page: I.ZY5.GUILD_CHANNEL,
              section: I.jXE.NAVIGATION,
              object: I.qAy.BUTTON_HOME
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
    className: T.tutorialContainer,
    children: (0, r.jsx)(g.Z, {
      inlineSpecs: A,
      tutorialId: "friends-list",
      position: "right",
      children: (0, r.jsxs)(E.H, {
        children: [(0, r.jsx)(C.Z, {
          selected: o,
          hovered: O,
          className: T.pill
        }), (0, r.jsx)(S.Z, {
          color: s.ua7.Colors.PRIMARY,
          hideOnClick: true,
          text: k,
          selected: o,
          children: B
        })]
      })
    })
  })
}

function D() {
  let e = (0, Chunk278464.n)(),
    t = (0, Chunk442837.e7)([Chunk941128.Z, Chunk417363.Z], () => {
      let e = (0, Chunk339149.E)(Chunk941128.Z.activeItems, Chunk417363.Z),
        {
          total: t,
          progress: n
        } = Chunk780570.lK(module),
        r = Chunk780570.xI(require, exports);
      return Chunk951288 > 0 && Chunk951288 < 100
    }),
    n = (0, Chunk849862.If)(),
    i = Object.keys(Chunk474936.nG),
    {
      unviewedTrialCount: l,
      unviewedDiscountCount: a
    } = (0, Chunk442837.cj)([Chunk431.Z], () => ({
      unviewedTrialCount: Chunk431.Z.getUnacknowledgedOffers(Chunk647438).length,
      unviewedDiscountCount: Chunk431.Z.getUnacknowledgedDiscountOffers().length
    })),
    s = Chunk91192 + Chunk433517,
    u = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    d = (0, Chunk899740.q)(),
    f = require + Chunk481060 + Chunk550385,
    g = Chunk460181 === Chunk481060 && Chunk481060 > 0 && require + Chunk550385 === 0,
    C = Chunk774343.Z.getHomeLink();
  return Chunk155409 && (C = Chunk981631.Z5c.APPLICATION_STORE), (0, Chunk951288.jsx)(R, {
    selected: module,
    user: Chunk864682,
    selectedChannelId: Chunk944486.Z.getChannelId(Chunk981631.ME),
    badge: Chunk460181,
    link: Chunk276952,
    showProgressBadge: exports
  })
}