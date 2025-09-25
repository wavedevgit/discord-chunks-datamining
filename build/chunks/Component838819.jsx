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
  Chunk819640 = require("./819640.js"),
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
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk654664 = require("./654664.js"),
  Chunk391447 = require("./391447.js");
let F = e => {
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
      isFullScreen: t = true,
      tab: n = A.AW.HOME
    } = e;
    (0, h.z)(f.f), (0, O.f)();
    let i = (0, g.Z)((0, s.Z)()),
      c = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
      R = (0, N.G)("CollectiblesShop"),
      {
        onClose: M
      } = (0, I.Db)(),
      {
        currentTab: H,
        hasFilters: D
      } = (0, y.S)(),
      W = l.useMemo(() => n === A.AW.HOME && H && D() ? H : n, [n, H, D]),
      {
        categories: U,
        refreshCategories: V
      } = (0, v.ZP)({
        logPerf: true
      }, {
        sessionId: i,
        tab: W,
        isFullScreen: t
      }),
      z = (0, x.O)(U),
      [G, q] = l.useState(),
      K = (0, o.e7)([b.Z], () => {
        var e;
        return null == (e = b.Z.getCategory(G)) ? true : e.name
      }),
      [Y, X] = l.useState();
    (0, j.Kp)();
    let Q = l.useCallback((e, t) => {
        X(e), q(t)
      }, []),
      {
        selectedTab: J,
        transitionState: $,
        transitionToTab: ee
      } = (0, T.B)(W, t);
    (0, S.q3)(i, J, K, $, Y), (0, S.EB)(J, c);
    let {
      dismissShopButtonDC: et
    } = (0, P.Z)();
    l.useEffect(() => {
      et()
    }, [et]), l.useEffect(() => {
      t || (0, d.Y)(B.Z5c.COLLECTIBLES_SHOP)
    }, [t]);
    let en = (0, o.e7)([C.Z], () => C.Z.getLayers().includes(B.S9g.COLLECTIBLES_SHOP)),
      er = l.useRef(null),
      el = l.useRef(null);
    (0, u.Tbt)(er);
    let {
      setFullScreenOpen: ei,
      fullScreenOpen: ea
    } = (0, y.S)();
    l.useEffect(() => {
      if (t) return ei(true), () => ei(false);
      if (!t) {
        var e;
        null == (e = el.current) || e.focus()
      }
    }, [t, ei]);
    let {
      analyticsLocations: es
    } = (0, S.MV)(J);
    return ea && !t ? null : (0, r.jsx)(p.Gt, {
      value: es,
      children: (0, r.jsx)(m.k0, {
        newValue: {
          sessionId: i,
          pageCategory: K,
          pageSize: A.kN
        },
        children: (0, r.jsx)(E.ni, {
          tab: J,
          children: (0, r.jsx)(F, {
            onClose: M,
            shouldAddEventListener: t && !en,
            children: (0, r.jsxs)("div", {
              className: a()(Z.shop, {
                [w.shopTakeOver]: R
              }),
              ref: t ? er : el,
              tabIndex: false,
              children: [(0, r.jsx)(k.I, {
                isFullScreen: t,
                isLayer: en,
                onClose: M,
                handleTransition: ee,
                selectedTab: J
              }), (0, r.jsx)("div", {
                className: a()(Z.shopViewWrapper, {
                  [Z.visible]: $ === A.f7.VISIBLE,
                  [Z.in]: $ === A.f7.IN,
                  [Z.out]: $ === A.f7.OUT
                }),
                children: (0, r.jsx)(L.Z, {
                  tab: J,
                  isFullScreen: t,
                  refreshCategories: V,
                  transitionToTab: ee,
                  transitionState: $,
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