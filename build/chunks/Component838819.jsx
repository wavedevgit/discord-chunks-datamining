/** Chunk was on 45620 **/
/** chunk id: 838819, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => H
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk213875 = require("./213875.js"),
  Chunk868090 = require("./868090.js");
let D = e => {
    let {
      children: t,
      shouldAddEventListener: n,
      onClose: r
    } = e, a = (0, c.useHasAnyModalOpen)();
    return l.useEffect(() => {
      if (!n || a) return;
      let e = e => {
        e.key === P.mR.Escape && r()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [n, a, r]), t
  },
  H = function(e) {
    let {
      tab: t = N.AW.HOME
    } = e;
    (0, p.z)(b.f), (0, O.f)();
    let n = (0, f.Z)((0, o.Z)()),
      a = (0, i.e7)([h.default], () => h.default.getCurrentUser());
    (0, m.p2)();
    let c = (0, B.B)("CollectiblesShop"),
      {
        onClose: P
      } = (0, I.Db)(),
      {
        currentTab: H,
        hasFilters: M
      } = (0, k.S)(),
      F = l.useMemo(() => t === N.AW.HOME && H && M() ? H : t, [t, H, M]),
      {
        categories: W,
        refreshCategories: U
      } = (0, _.ZP)({
        logPerf: true
      }, {
        sessionId: n,
        tab: F
      }),
      z = (0, x.O)(W),
      [V, G] = l.useState(),
      K = (0, i.e7)([E.Z], () => {
        var e;
        return null == (e = E.Z.getCategory(V)) ? true : e.name
      }),
      [Y, q] = l.useState();
    (0, j.Kp)();
    let Q = l.useCallback((e, t) => {
        q(e), G(t)
      }, []),
      {
        selectedTab: J,
        transitionState: X,
        transitionToTab: $
      } = (0, y.B)(F);
    (0, S.q3)(n, J, K, X, Y), (0, S.EB)(J, a);
    let {
      dismissShopButtonDC: ee
    } = (0, A.Z)();
    l.useEffect(() => {
      ee()
    }, [ee]), l.useEffect(() => {
      (0, d.Y)(R.Z5c.COLLECTIBLES_SHOP)
    }, []);
    let et = l.useRef(null),
      en = l.useRef(null);
    (0, u.Tbt)(et), l.useEffect(() => {
      var e;
      null == (e = en.current) || e.focus()
    }, []);
    let {
      analyticsLocations: er
    } = (0, S.MV)(J);
    return (0, r.jsx)(g.Gt, {
      value: er,
      children: (0, r.jsx)(C.k0, {
        newValue: {
          sessionId: n,
          pageCategory: K,
          pageSize: N.kN
        },
        children: (0, r.jsx)(v.ni, {
          tab: J,
          children: (0, r.jsx)(D, {
            onClose: P,
            shouldAddEventListener: false,
            children: (0, r.jsxs)("div", {
              className: s()(Z.shop, {
                [w.customCursors]: c
              }),
              ref: en,
              tabIndex: false,
              children: [(0, r.jsx)(L.I, {
                handleTransition: $,
                selectedTab: J
              }), (0, r.jsx)("div", {
                className: s()(Z.shopViewWrapper, {
                  [Z.visible]: X === N.f7.VISIBLE,
                  [Z.in]: X === N.f7.IN,
                  [Z.out]: X === N.f7.OUT
                }),
                children: (0, r.jsx)(T.Z, {
                  tab: J,
                  refreshCategories: U,
                  transitionToTab: $,
                  transitionState: X,
                  sortedCategories: z,
                  updateAnalyticsState: Q
                })
              })]
            })
          })
        })
      })
    })
  }