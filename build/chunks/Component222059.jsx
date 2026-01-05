/** Chunk was on 67000 **/
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
    badge: h,
    link: p,
    showProgressBadge: m
  } = e, [y, O] = i.useState(false), [v, j] = i.useState(false), [C, x] = i.useState(null), [E, Z] = i.useState(0), D = (0, l.Ie)("home"), M = (0, f.oq)().activePanel === f.wh.APP_ICON, L = () => {
    x(null), Z(0), clearTimeout(C)
  };
  if (null == d) return null;
  let k = T.intl.string(T.t.YUU0RF);
  v && (k = o.K.get(N.wli) ? T.intl.string(T.t["nkq1l+"]) : T.intl.string(T.t.Be8Q5E));
  let G = null;
  !a && m && (G = (0, r.jsx)(c.Z, {
    className: A.downloadProgress,
    determineOwnVisibility: false
  }));
  let U = a || y || M,
    B = (0, r.jsx)(s.aRk, {
      selected: true,
      lowerBadge: h > 0 ? (0, P.Ne)(h) : null,
      upperBadge: G,
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
        onMouseEnter: () => O(true),
        onMouseLeave: () => O(false),
        onClick: () => {
          if (!__OVERLAY__ && (null != C && clearTimeout(C), x(setTimeout(L, 500)), Z(E + 1), 15 === E)) {
            L();
            let e = !o.K.get(N.wli);
            o.K.set(N.wli, e), e && o.K.set(w.O, true), e ? (0, g.GN)("discodo") : (0, g.GN)("user_leave"), j(true), setTimeout(() => {
              j(false)
            }, 1e3)
          }
        },
        selected: U,
        ariaLabel: T.intl.string(T.t.YUU0RF),
        "aria-owns": "guild-list-unread-dms",
        "aria-selected": a
      }, D), n = n = {
        to: {
          pathname: p,
          state: {
            analyticsSource: {
              page: N.ZY5.GUILD_CHANNEL,
              section: N.jXE.NAVIGATION,
              object: N.qAy.BUTTON_HOME
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
    className: A.tutorialContainer,
    children: (0, r.jsx)(b.Z, {
      inlineSpecs: R,
      tutorialId: "friends-list",
      position: "right",
      children: (0, r.jsxs)(_.H, {
        children: [(0, r.jsx)(S.Z, {
          selected: a,
          hovered: y,
          className: A.pill
        }), (0, r.jsx)(I.Z, {
          hideOnClick: true,
          text: k,
          selected: a,
          children: B
        })]
      })
    })
  })
}

function M() {
  let e = (0, Chunk278464.n)(),
    t = (0, Chunk442837.e7)([Chunk941128.Z, Chunk417363.Z], () => {
      let e = (0, Chunk339149.E)(Chunk941128.Z.activeItems, Chunk417363.Z),
        {
          total: t,
          progress: n
        } = Chunk780570.lK(module),
        r = Chunk780570.xI(require, exports);
      return Chunk54381 > 0 && Chunk54381 < 100
    }),
    n = (0, Chunk849862.If)(),
    i = Object.keys(Chunk474936.nG),
    l = (0, Chunk975298.Z)(),
    {
      unviewedTrialCount: o,
      unviewedDiscountCount: s
    } = (0, Chunk442837.cj)([Chunk431.Z], () => ({
      unviewedTrialCount: Chunk431.Z.getUnacknowledgedOffers(Chunk473749).length,
      unviewedDiscountCount: Chunk431.Z.getUnacknowledgedDiscountOffers().length
    })),
    u = Chunk91192.fractionalState === Chunk474936.a$.NONE ? Chunk433517 + Chunk481060 : 0,
    f = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    g = (0, Chunk899740.q)(),
    b = require + Chunk864682 + Chunk460181,
    S = Chunk155409 === Chunk864682 && Chunk864682 > 0 && require + Chunk460181 === 0,
    _ = Chunk774343.Z.getHomeLink();
  return Chunk276952 && (_ = Chunk981631.Z5c.APPLICATION_STORE), (0, Chunk54381.jsx)(D, {
    selected: module,
    user: Chunk550385,
    selectedChannelId: Chunk944486.Z.getChannelId(Chunk981631.ME),
    badge: Chunk155409,
    link: Chunk682662,
    showProgressBadge: exports
  })
}