/** Chunk was on 65354 **/
/** chunk id: 222059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk815141 = require("./815141.js");
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
    selected: o,
    user: d,
    badge: f,
    link: g,
    showProgressBadge: _
  } = e, [y, O] = i.useState(false), [v, j] = i.useState(false), [x, C] = i.useState(null), [E, w] = i.useState(0), L = (0, l.Ie)("home"), M = (0, p.oq)().activePanel === p.wh.APP_ICON, k = () => {
    C(null), w(0), clearTimeout(x)
  }, G = h.o.useConfig({
    location: "home button"
  }).dmsTab;
  if (null == d) return null;
  let U = G ? A.intl.string(A.t.Ym2Ri6) : A.intl.string(A.t.YUU0RF);
  v && (U = a.K.get(Z.wli) ? A.intl.string(A.t["nkq1l+"]) : A.intl.string(A.t.Be8Q5E));
  let B = null;
  !o && _ && (B = (0, r.jsx)(c.Z, {
    className: R.downloadProgress,
    determineOwnVisibility: false
  }));
  let F = o || y || M,
    V = (0, r.jsx)(s.aRk, {
      selected: true,
      lowerBadge: f > 0 ? (0, N.Ne)(f) : null,
      upperBadge: B,
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
        onMouseEnter: () => O(true),
        onMouseLeave: () => O(false),
        onClick: () => {
          if (!__OVERLAY__ && (null != x && clearTimeout(x), C(setTimeout(k, 500)), w(E + 1), 15 === E)) {
            k();
            let e = !a.K.get(Z.wli);
            a.K.set(Z.wli, e), e && a.K.set(T.O, true), e ? (0, m.GN)("discodo") : (0, m.GN)("user_leave"), j(true), setTimeout(() => {
              j(false)
            }, 1e3)
          }
        },
        selected: F,
        ariaLabel: A.intl.string(A.t.YUU0RF),
        "aria-owns": "guild-list-unread-dms",
        "aria-selected": o
      }, L), n = n = {
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
    children: (0, r.jsx)(b.Z, {
      inlineSpecs: D,
      tutorialId: "friends-list",
      position: "right",
      children: (0, r.jsxs)(I.H, {
        children: [(0, r.jsx)(S.Z, {
          selected: o,
          hovered: y,
          className: R.pill
        }), (0, r.jsx)(P.Z, {
          color: s.aML.Colors.PRIMARY,
          hideOnClick: true,
          text: U,
          selected: o,
          children: V
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
      return Chunk951288 > 0 && Chunk951288 < 100
    }),
    n = (0, Chunk849862.If)(),
    i = Object.keys(Chunk474936.nG),
    l = (0, Chunk975298.Z)(),
    {
      unviewedTrialCount: a,
      unviewedDiscountCount: s
    } = (0, Chunk442837.cj)([Chunk431.Z], () => ({
      unviewedTrialCount: Chunk431.Z.getUnacknowledgedOffers(Chunk647438).length,
      unviewedDiscountCount: Chunk431.Z.getUnacknowledgedDiscountOffers().length
    })),
    u = Chunk91192.fractionalState === Chunk474936.a$.NONE ? Chunk433517 + Chunk481060 : 0,
    p = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    h = (0, Chunk899740.q)(),
    m = require + Chunk864682 + Chunk365113,
    b = Chunk460181 === Chunk864682 && Chunk864682 > 0 && require + Chunk365113 === 0,
    S = Chunk774343.Z.getHomeLink();
  return Chunk155409 && (S = Chunk981631.Z5c.APPLICATION_STORE), (0, Chunk951288.jsx)(L, {
    selected: module,
    user: Chunk550385,
    selectedChannelId: Chunk944486.Z.getChannelId(Chunk981631.ME),
    badge: Chunk460181,
    link: Chunk276952,
    showProgressBadge: exports
  })
}