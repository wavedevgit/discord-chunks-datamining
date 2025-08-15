/** Chunk was on 45620 **/
/** chunk id: 838819, original params: e,t,r (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk399606 = require("./399606.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk150063 = require("./150063.js"),
  Chunk211266 = require("./211266.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk977395 = require("./977395.js"),
  Chunk214852 = require("./214852.js"),
  Chunk238359 = require("./238359.js"),
  Chunk511050 = require("./511050.js"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk780475 = require("./780475.js"),
  Chunk223143 = require("./223143.js"),
  Chunk298228 = require("./298228.js"),
  Chunk309956 = require("./309956.js"),
  Chunk501431 = require("./501431.js"),
  Chunk98535 = require("./98535.jsx"),
  Chunk426171 = require("./426171.js"),
  Chunk963102 = require("./963102.jsx"),
  Chunk508498 = require("./508498.js"),
  Chunk681435 = require("./681435.js"),
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk420212 = require("./420212.js"),
  Chunk887353 = require("./887353.js"),
  Chunk345213 = require("./345213.js");
let D = e => {
    let {
      children: t,
      shouldAddEventListener: r,
      onClose: n
    } = e, a = (0, c.f9)();
    return l.useEffect(() => {
      if (!r || a) return;
      let e = e => {
        e.key === B.mR.Escape && n()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [r, a, n]), t
  },
  M = function(e) {
    let {
      isFullScreen: t = true,
      tab: r = w.AW.HOME
    } = e;
    (0, b.z)(f.f);
    let a = (0, p.Z)((0, o.Z)()),
      c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
      B = (0, N.G)("CollectiblesShop"),
      {
        closeIntroToOrbsClaimedCoachmark: M
      } = (0, h.Z)({
        location: "CollectiblesShop"
      });
    l.useEffect(() => () => {
      M()
    }, [a, M]);
    let {
      onClose: F
    } = (0, k.Db)(), {
      currentTab: H,
      hasFilters: W
    } = (0, j.S)(), V = l.useMemo(() => r === w.AW.HOME && H && W() ? H : r, [r, H, W]), {
      categories: U,
      refreshCategories: z
    } = (0, y.ZP)({
      logPerf: true
    }, {
      sessionId: a,
      tab: V,
      isFullScreen: t
    });
    (0, m.D)();
    let G = (0, S.O)(U),
      [q, K] = l.useState(),
      Y = (0, s.e7)([C.Z], () => {
        var e;
        return null == (e = C.Z.getCategory(q)) ? true : e.name
      }),
      [X, Q] = l.useState();
    (0, T.Kp)();
    let J = l.useCallback((e, t) => {
        Q(e), K(t)
      }, []),
      {
        selectedTab: $,
        transitionState: ee,
        transitionToTab: et
      } = (0, x.B)(V, t);
    (0, E.q3)(a, $, Y, ee, X), (0, E.EB)($, c);
    let {
      dismissShopButtonDC: er
    } = (0, I.Z)();
    l.useEffect(() => {
      er()
    }, [er]), l.useEffect(() => {
      t || (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP)
    }, [t]);
    let en = (0, s.e7)([_.Z], () => _.Z.getLayers().includes(A.S9g.COLLECTIBLES_SHOP)),
      el = l.useRef(null),
      ea = l.useRef(null);
    (0, u.Tbt)(el);
    let {
      setFullScreenOpen: ei,
      fullScreenOpen: eo
    } = (0, j.S)();
    l.useEffect(() => {
      if (t) return ei(true), () => ei(false);
      if (!t) {
        var e;
        null == (e = ea.current) || e.focus()
      }
    }, [t, ei]);
    let {
      analyticsLocations: es
    } = (0, E.MV)($);
    return eo && !t ? null : (0, n.jsx)(g.Gt, {
      value: es,
      children: (0, n.jsx)(O.k0, {
        newValue: {
          sessionId: a,
          pageCategory: Y,
          pageSize: w.kN
        },
        children: (0, n.jsx)(D, {
          onClose: F,
          shouldAddEventListener: t && !en,
          children: (0, n.jsxs)("div", {
            className: i()(R.shop, {
              [Z.shopTakeOver]: B
            }),
            ref: t ? el : ea,
            tabIndex: false,
            children: [(0, n.jsx)(L.I, {
              isFullScreen: t,
              isLayer: en,
              onClose: F,
              handleTransition: et,
              selectedTab: $
            }), (0, n.jsx)("div", {
              className: i()(R.shopViewWrapper, {
                [R.visible]: ee === w.f7.VISIBLE,
                [R.in]: ee === w.f7.IN,
                [R.out]: ee === w.f7.OUT
              }),
              children: (0, n.jsx)(P.Z, {
                tab: $,
                isFullScreen: t,
                refreshCategories: z,
                transitionToTab: et,
                transitionState: ee,
                sortedCategories: G,
                updateAnalyticsState: J
              })
            })]
          })
        })
      })
    })
  }