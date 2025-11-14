/** Chunk was on 45620 **/
/** chunk id: 838819, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk399606 = require("./399606.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk150063 = require("./150063.js"),
  Chunk211266 = require("./211266.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk977395 = require("./977395.js"),
  Chunk214852 = require("./214852.js"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk780475 = require("./780475.js"),
  Chunk223143 = require("./223143.js"),
  Chunk298228 = require("./298228.js"),
  Chunk908430 = require("./908430.js"),
  Chunk99767 = require("./99767.js"),
  Chunk501431 = require("./501431.js"),
  Chunk98535 = require("./98535.jsx"),
  Chunk426171 = require("./426171.js"),
  Chunk963102 = require("./963102.jsx"),
  Chunk508498 = require("./508498.js"),
  Chunk681435 = require("./681435.js"),
  Chunk811847 = require("./811847.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk887353 = require("./887353.js"),
  Chunk219588 = require("./219588.js");
let H = e => {
    let {
      children: t,
      shouldAddEventListener: n,
      onClose: r
    } = e, i = (0, c.f9)();
    return l.useEffect(() => {
      if (!n || i) return;
      let e = e => {
        e.key === R.mR.Escape && r()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [n, i, r]), t
  },
  M = function(e) {
    let {
      tab: t = N.AW.HOME
    } = e;
    (0, h.z)(f.f), (0, O.f)();
    let n = (0, p.Z)((0, o.Z)()),
      i = (0, s.e7)([m.default], () => m.default.getCurrentUser());
    (0, C.p2)();
    let c = (0, P.B)("CollectiblesShop"),
      {
        onClose: R
      } = (0, L.Db)(),
      {
        currentTab: M,
        hasFilters: D
      } = (0, j.S)(),
      F = l.useMemo(() => t === N.AW.HOME && M && D() ? M : t, [t, M, D]),
      {
        categories: W,
        refreshCategories: V
      } = (0, E.ZP)({
        logPerf: true
      }, {
        sessionId: n,
        tab: F
      }),
      U = (0, S.O)(W),
      [z, G] = l.useState(),
      K = (0, s.e7)([b.Z], () => {
        var e;
        return null == (e = b.Z.getCategory(z)) ? true : e.name
      }),
      [Y, q] = l.useState();
    (0, I.Kp)();
    let J = l.useCallback((e, t) => {
        q(e), G(t)
      }, []),
      {
        selectedTab: Q,
        transitionState: X,
        transitionToTab: $
      } = (0, y.B)(F);
    (0, x.q3)(n, Q, K, X, Y), (0, x.EB)(Q, i);
    let {
      dismissShopButtonDC: ee
    } = (0, B.Z)();
    l.useEffect(() => {
      ee()
    }, [ee]), l.useEffect(() => {
      (0, d.Y)(A.Z5c.COLLECTIBLES_SHOP)
    }, []);
    let et = l.useRef(null),
      en = l.useRef(null);
    (0, u.Tbt)(et), l.useEffect(() => {
      var e;
      null == (e = en.current) || e.focus()
    }, []);
    let {
      analyticsLocations: er
    } = (0, x.MV)(Q);
    return (0, r.jsx)(g.Gt, {
      value: er,
      children: (0, r.jsx)(_.k0, {
        newValue: {
          sessionId: n,
          pageCategory: K,
          pageSize: N.kN
        },
        children: (0, r.jsx)(v.ni, {
          tab: Q,
          children: (0, r.jsx)(H, {
            onClose: R,
            shouldAddEventListener: false,
            children: (0, r.jsxs)("div", {
              className: a()(Z.shop, {
                [w.customCursors]: c
              }),
              ref: en,
              tabIndex: false,
              children: [(0, r.jsx)(T.I, {
                handleTransition: $,
                selectedTab: Q
              }), (0, r.jsx)("div", {
                className: a()(Z.shopViewWrapper, {
                  [Z.visible]: X === N.f7.VISIBLE,
                  [Z.in]: X === N.f7.IN,
                  [Z.out]: X === N.f7.OUT
                }),
                children: (0, r.jsx)(k.Z, {
                  tab: Q,
                  refreshCategories: V,
                  transitionToTab: $,
                  transitionState: X,
                  sortedCategories: U,
                  updateAnalyticsState: J
                })
              })]
            })
          })
        })
      })
    })
  }