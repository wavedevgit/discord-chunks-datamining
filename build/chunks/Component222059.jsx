/** Chunk was on 67000 **/
/** chunk id: 222059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => L
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
  Chunk365113 = require("./365113.js"),
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
    badge: h,
    link: g,
    showProgressBadge: y
  } = e, [O, v] = i.useState(false), [j, C] = i.useState(false), [x, E] = i.useState(null), [S, w] = i.useState(0), M = (0, l.Ie)("home"), L = (0, f.oq)().activePanel === f.wh.APP_ICON, k = () => {
    E(null), w(0), clearTimeout(x)
  }, G = p.o.useConfig({
    location: "home button"
  }).dmsTab;
  if (null == d) return null;
  let U = G ? A.intl.string(A.t.Ym2Ri6) : A.intl.string(A.t.YUU0RF);
  j && (U = o.K.get(Z.wli) ? A.intl.string(A.t["nkq1l+"]) : A.intl.string(A.t.Be8Q5E));
  let B = null;
  !a && y && (B = (0, r.jsx)(c.Z, {
    className: R.downloadProgress,
    determineOwnVisibility: false
  }));
  let F = a || O || L,
    V = (0, r.jsx)(s.aRk, {
      selected: true,
      lowerBadge: h > 0 ? (0, N.Ne)(h) : null,
      upperBadge: B,
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
        onMouseEnter: () => v(true),
        onMouseLeave: () => v(false),
        onClick: () => {
          if (!__OVERLAY__ && (null != x && clearTimeout(x), E(setTimeout(k, 500)), w(S + 1), 15 === S)) {
            k();
            let e = !o.K.get(Z.wli);
            o.K.set(Z.wli, e), e && o.K.set(T.O, true), e ? (0, b.GN)("discodo") : (0, b.GN)("user_leave"), C(true), setTimeout(() => {
              C(false)
            }, 1e3)
          }
        },
        selected: F,
        ariaLabel: A.intl.string(A.t.YUU0RF),
        "aria-owns": "guild-list-unread-dms",
        "aria-selected": a
      }, M), n = n = {
        to: {
          pathname: g,
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
    className: R.tutorialContainer,
    children: (0, r.jsx)(m.Z, {
      inlineSpecs: D,
      tutorialId: "friends-list",
      position: "right",
      children: (0, r.jsxs)(I.H, {
        children: [(0, r.jsx)(_.Z, {
          selected: a,
          hovered: O,
          className: R.pill
        }), (0, r.jsx)(P.Z, {
          hideOnClick: true,
          text: U,
          selected: a,
          children: V
        })]
      })
    })
  })
}

function L() {
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
    p = (0, Chunk899740.q)(),
    b = require + Chunk864682 + Chunk365113,
    m = Chunk460181 === Chunk864682 && Chunk864682 > 0 && require + Chunk365113 === 0,
    _ = Chunk774343.Z.getHomeLink();
  return Chunk155409 && (_ = Chunk981631.Z5c.APPLICATION_STORE), (0, Chunk54381.jsx)(M, {
    selected: module,
    user: Chunk550385,
    selectedChannelId: Chunk944486.Z.getChannelId(Chunk981631.ME),
    badge: Chunk460181,
    link: Chunk276952,
    showProgressBadge: exports
  })
}