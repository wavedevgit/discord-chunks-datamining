/** Chunk was on 45620 **/
/** chunk id: 838819, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => M
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
let D = e => {
    let {
      children: t,
      shouldAddEventListener: n,
      onClose: r
    } = e, a = (0, c.f9)();
    return l.useEffect(() => {
      if (!n || a) return;
      let e = e => {
        e.key === Z.mR.Escape && r()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [n, a, r]), t
  },
  M = function(e) {
    let {
      isFullScreen: t = true,
      tab: n = A.AW.HOME
    } = e;
    (0, m.z)(p.f), (0, T.f)();
    let a = (0, g.Z)((0, i.Z)()),
      c = (0, o.e7)([C.default], () => C.default.getCurrentUser()),
      Z = (0, P.G)("CollectiblesShop"),
      {
        closeIntroToOrbsClaimedCoachmark: M
      } = (0, h.Z)({
        location: "CollectiblesShop"
      });
    l.useEffect(() => () => {
      M()
    }, [a, M]);
    let {
      onClose: H
    } = (0, B.Db)(), {
      currentTab: W,
      hasFilters: U
    } = (0, L.S)(), V = l.useMemo(() => n === A.AW.HOME && W && U() ? W : n, [n, W, U]), {
      categories: z,
      refreshCategories: G
    } = (0, v.ZP)({
      logPerf: true
    }, {
      sessionId: a,
      tab: V,
      isFullScreen: t
    });
    (0, _.D)();
    let q = (0, x.O)(z),
      [K, Y] = l.useState(),
      X = (0, o.e7)([S.Z], () => {
        var e;
        return null == (e = S.Z.getCategory(K)) ? true : e.name
      }),
      [Q, J] = l.useState();
    (0, k.Kp)();
    let $ = l.useCallback((e, t) => {
        J(e), Y(t)
      }, []),
      {
        selectedTab: ee,
        transitionState: et,
        transitionToTab: en
      } = (0, y.B)(V, t);
    (0, O.q3)(a, ee, X, et, Q), (0, O.EB)(ee, c);
    let {
      dismissShopButtonDC: er
    } = (0, N.Z)();
    l.useEffect(() => {
      er()
    }, [er]), l.useEffect(() => {
      t || (0, d.Y)(R.Z5c.COLLECTIBLES_SHOP)
    }, [t]);
    let el = (0, o.e7)([b.Z], () => b.Z.getLayers().includes(R.S9g.COLLECTIBLES_SHOP)),
      ea = l.useRef(null),
      es = l.useRef(null);
    (0, u.Tbt)(ea);
    let {
      setFullScreenOpen: ei,
      fullScreenOpen: eo
    } = (0, L.S)();
    l.useEffect(() => {
      if (t) return ei(true), () => ei(false);
      if (!t) {
        var e;
        null == (e = es.current) || e.focus()
      }
    }, [t, ei]);
    let {
      analyticsLocations: ec
    } = (0, O.MV)(ee);
    return eo && !t ? null : (0, r.jsx)(f.Gt, {
      value: ec,
      children: (0, r.jsx)(E.k0, {
        newValue: {
          sessionId: a,
          pageCategory: X,
          pageSize: A.kN
        },
        children: (0, r.jsx)(D, {
          onClose: H,
          shouldAddEventListener: t && !el,
          children: (0, r.jsxs)("div", {
            className: s()(w.shop, {
              [F.shopTakeOver]: Z
            }),
            ref: t ? ea : es,
            tabIndex: false,
            children: [(0, r.jsx)(I.I, {
              isFullScreen: t,
              isLayer: el,
              onClose: H,
              handleTransition: en,
              selectedTab: ee
            }), (0, r.jsx)("div", {
              className: s()(w.shopViewWrapper, {
                [w.visible]: et === A.f7.VISIBLE,
                [w.in]: et === A.f7.IN,
                [w.out]: et === A.f7.OUT
              }),
              children: (0, r.jsx)(j.Z, {
                tab: ee,
                isFullScreen: t,
                refreshCategories: G,
                transitionToTab: en,
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