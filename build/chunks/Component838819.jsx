/** Chunk was on 45620 **/
/** chunk id: 838819, original params: e,t,r (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => F
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
let M = e => {
    let {
      children: t,
      shouldAddEventListener: r,
      onClose: n
    } = e, a = (0, c.f9)();
    return l.useEffect(() => {
      if (!r || a) return;
      let e = e => {
        e.key === R.mR.Escape && n()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [r, a, n]), t
  },
  F = function(e) {
    let {
      isFullScreen: t = true,
      tab: r = w.AW.HOME
    } = e;
    (0, m.z)(f.f), (0, j.f)();
    let a = (0, p.Z)((0, o.Z)()),
      c = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
      R = (0, A.G)("CollectiblesShop"),
      {
        closeIntroToOrbsClaimedCoachmark: F
      } = (0, h.Z)({
        location: "CollectiblesShop"
      });
    l.useEffect(() => () => {
      F()
    }, [a, F]);
    let {
      onClose: H
    } = (0, I.Db)(), {
      currentTab: W,
      hasFilters: U
    } = (0, T.S)(), V = l.useMemo(() => r === w.AW.HOME && W && U() ? W : r, [r, W, U]), {
      categories: z,
      refreshCategories: G
    } = (0, y.ZP)({
      logPerf: true
    }, {
      sessionId: a,
      tab: V,
      isFullScreen: t
    });
    (0, b.D)();
    let q = (0, S.O)(z),
      [K, Y] = l.useState(),
      X = (0, s.e7)([C.Z], () => {
        var e;
        return null == (e = C.Z.getCategory(K)) ? true : e.name
      }),
      [Q, J] = l.useState();
    (0, L.Kp)();
    let $ = l.useCallback((e, t) => {
        J(e), Y(t)
      }, []),
      {
        selectedTab: ee,
        transitionState: et,
        transitionToTab: er
      } = (0, x.B)(V, t);
    (0, E.q3)(a, ee, X, et, Q), (0, E.EB)(ee, c);
    let {
      dismissShopButtonDC: en
    } = (0, N.Z)();
    l.useEffect(() => {
      en()
    }, [en]), l.useEffect(() => {
      t || (0, d.Y)(B.Z5c.COLLECTIBLES_SHOP)
    }, [t]);
    let el = (0, s.e7)([_.Z], () => _.Z.getLayers().includes(B.S9g.COLLECTIBLES_SHOP)),
      ea = l.useRef(null),
      ei = l.useRef(null);
    (0, u.Tbt)(ea);
    let {
      setFullScreenOpen: eo,
      fullScreenOpen: es
    } = (0, T.S)();
    l.useEffect(() => {
      if (t) return eo(true), () => eo(false);
      if (!t) {
        var e;
        null == (e = ei.current) || e.focus()
      }
    }, [t, eo]);
    let {
      analyticsLocations: ec
    } = (0, E.MV)(ee);
    return es && !t ? null : (0, n.jsx)(g.Gt, {
      value: ec,
      children: (0, n.jsx)(O.k0, {
        newValue: {
          sessionId: a,
          pageCategory: X,
          pageSize: w.kN
        },
        children: (0, n.jsx)(M, {
          onClose: H,
          shouldAddEventListener: t && !el,
          children: (0, n.jsxs)("div", {
            className: i()(Z.shop, {
              [D.shopTakeOver]: R
            }),
            ref: t ? ea : ei,
            tabIndex: false,
            children: [(0, n.jsx)(k.I, {
              isFullScreen: t,
              isLayer: el,
              onClose: H,
              handleTransition: er,
              selectedTab: ee
            }), (0, n.jsx)("div", {
              className: i()(Z.shopViewWrapper, {
                [Z.visible]: et === w.f7.VISIBLE,
                [Z.in]: et === w.f7.IN,
                [Z.out]: et === w.f7.OUT
              }),
              children: (0, n.jsx)(P.Z, {
                tab: ee,
                isFullScreen: t,
                refreshCategories: G,
                transitionToTab: er,
                transitionState: et,
                sortedCategories: q,
                updateAnalyticsState: $
              })
            })]
          })
        })
      })
    })
  }