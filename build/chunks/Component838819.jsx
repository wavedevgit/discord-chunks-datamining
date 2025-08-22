/** Chunk was on 45620 **/
/** chunk id: 838819, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk399606 = require("./399606.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk150063 = require("./150063.js"),
  Chunk211266 = require("./211266.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk977395 = require("./977395.js"),
  Chunk214852 = require("./214852.js"),
  Chunk511050 = require("./511050.js"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk780475 = require("./780475.js"),
  Chunk223143 = require("./223143.js"),
  Chunk298228 = require("./298228.js"),
  Chunk309956 = require("./309956.js"),
  Chunk908430 = require("./908430.js"),
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
let F = e => {
    let {
      children: t,
      shouldAddEventListener: n,
      onClose: r
    } = e, a = (0, c.f9)();
    return l.useEffect(() => {
      if (!n || a) return;
      let e = e => {
        e.key === R.mR.Escape && r()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [n, a, r]), t
  },
  D = function(e) {
    let {
      isFullScreen: t = true,
      tab: n = P.AW.HOME
    } = e;
    (0, m.z)(f.f), (0, y.f)();
    let a = (0, g.Z)((0, i.Z)()),
      c = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
      R = (0, N.G)("CollectiblesShop"),
      {
        closeIntroToOrbsClaimedCoachmark: D
      } = (0, _.Z)({
        location: "CollectiblesShop"
      });
    l.useEffect(() => () => {
      D()
    }, [a, D]);
    let {
      onClose: M
    } = (0, I.Db)(), {
      currentTab: H,
      hasFilters: W
    } = (0, T.S)(), U = l.useMemo(() => n === P.AW.HOME && H && W() ? H : n, [n, H, W]), {
      categories: V,
      refreshCategories: z
    } = (0, O.ZP)({
      logPerf: true
    }, {
      sessionId: a,
      tab: U,
      isFullScreen: t
    }), G = (0, v.O)(V), [q, K] = l.useState(), Y = (0, o.e7)([E.Z], () => {
      var e;
      return null == (e = E.Z.getCategory(q)) ? true : e.name
    }), [X, Q] = l.useState();
    (0, j.Kp)();
    let J = l.useCallback((e, t) => {
        Q(e), K(t)
      }, []),
      {
        selectedTab: $,
        transitionState: ee,
        transitionToTab: et
      } = (0, x.B)(U, t);
    (0, S.q3)(a, $, Y, ee, X), (0, S.EB)($, c);
    let {
      dismissShopButtonDC: en
    } = (0, B.Z)();
    l.useEffect(() => {
      en()
    }, [en]), l.useEffect(() => {
      t || (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP)
    }, [t]);
    let er = (0, o.e7)([h.Z], () => h.Z.getLayers().includes(A.S9g.COLLECTIBLES_SHOP)),
      el = l.useRef(null),
      ea = l.useRef(null);
    (0, u.Tbt)(el);
    let {
      setFullScreenOpen: es,
      fullScreenOpen: ei
    } = (0, T.S)();
    l.useEffect(() => {
      if (t) return es(true), () => es(false);
      if (!t) {
        var e;
        null == (e = ea.current) || e.focus()
      }
    }, [t, es]);
    let {
      analyticsLocations: eo
    } = (0, S.MV)($);
    return ei && !t ? null : (0, r.jsx)(p.Gt, {
      value: eo,
      children: (0, r.jsx)(C.k0, {
        newValue: {
          sessionId: a,
          pageCategory: Y,
          pageSize: P.kN
        },
        children: (0, r.jsx)(F, {
          onClose: M,
          shouldAddEventListener: t && !er,
          children: (0, r.jsxs)("div", {
            className: s()(Z.shop, {
              [w.shopTakeOver]: R
            }),
            ref: t ? el : ea,
            tabIndex: false,
            children: [(0, r.jsx)(k.I, {
              isFullScreen: t,
              isLayer: er,
              onClose: M,
              handleTransition: et,
              selectedTab: $
            }), (0, r.jsx)("div", {
              className: s()(Z.shopViewWrapper, {
                [Z.visible]: ee === P.f7.VISIBLE,
                [Z.in]: ee === P.f7.IN,
                [Z.out]: ee === P.f7.OUT
              }),
              children: (0, r.jsx)(L.Z, {
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