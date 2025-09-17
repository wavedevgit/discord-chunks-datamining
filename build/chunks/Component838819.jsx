/** Chunk was on 45620 **/
/** chunk id: 838819, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk887353 = require("./887353.js"),
  Chunk345213 = require("./345213.js");
let w = e => {
    let {
      children: t,
      shouldAddEventListener: n,
      onClose: r
    } = e, a = (0, c.f9)();
    return l.useEffect(() => {
      if (!n || a) return;
      let e = e => {
        e.key === A.mR.Escape && r()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [n, a, r]), t
  },
  M = function(e) {
    let {
      isFullScreen: t = true,
      tab: n = N.AW.HOME
    } = e;
    (0, h.z)(p.f), (0, v.f)();
    let a = (0, g.Z)((0, s.Z)()),
      c = (0, i.e7)([_.default], () => _.default.getCurrentUser()),
      A = (0, I.G)("CollectiblesShop"),
      {
        onClose: M
      } = (0, k.Db)(),
      {
        currentTab: F,
        hasFilters: H
      } = (0, y.S)(),
      D = l.useMemo(() => n === N.AW.HOME && F && H() ? F : n, [n, F, H]),
      {
        categories: W,
        refreshCategories: U
      } = (0, S.ZP)({
        logPerf: true
      }, {
        sessionId: a,
        tab: D,
        isFullScreen: t
      }),
      V = (0, O.O)(W),
      [z, G] = l.useState(),
      q = (0, i.e7)([b.Z], () => {
        var e;
        return null == (e = b.Z.getCategory(z)) ? true : e.name
      }),
      [K, Y] = l.useState();
    (0, L.Kp)();
    let X = l.useCallback((e, t) => {
        Y(e), G(t)
      }, []),
      {
        selectedTab: Q,
        transitionState: J,
        transitionToTab: $
      } = (0, x.B)(D, t);
    (0, E.q3)(a, Q, q, J, K), (0, E.EB)(Q, c);
    let {
      dismissShopButtonDC: ee
    } = (0, B.Z)();
    l.useEffect(() => {
      ee()
    }, [ee]), l.useEffect(() => {
      t || (0, d.Y)(P.Z5c.COLLECTIBLES_SHOP)
    }, [t]);
    let et = (0, i.e7)([m.Z], () => m.Z.getLayers().includes(P.S9g.COLLECTIBLES_SHOP)),
      en = l.useRef(null),
      er = l.useRef(null);
    (0, u.Tbt)(en);
    let {
      setFullScreenOpen: el,
      fullScreenOpen: ea
    } = (0, y.S)();
    l.useEffect(() => {
      if (t) return el(true), () => el(false);
      if (!t) {
        var e;
        null == (e = er.current) || e.focus()
      }
    }, [t, el]);
    let {
      analyticsLocations: eo
    } = (0, E.MV)(Q);
    return ea && !t ? null : (0, r.jsx)(f.Gt, {
      value: eo,
      children: (0, r.jsx)(C.k0, {
        newValue: {
          sessionId: a,
          pageCategory: q,
          pageSize: N.kN
        },
        children: (0, r.jsx)(w, {
          onClose: M,
          shouldAddEventListener: t && !et,
          children: (0, r.jsxs)("div", {
            className: o()(R.shop, {
              [Z.shopTakeOver]: A
            }),
            ref: t ? en : er,
            tabIndex: false,
            children: [(0, r.jsx)(j.I, {
              isFullScreen: t,
              isLayer: et,
              onClose: M,
              handleTransition: $,
              selectedTab: Q
            }), (0, r.jsx)("div", {
              className: o()(R.shopViewWrapper, {
                [R.visible]: J === N.f7.VISIBLE,
                [R.in]: J === N.f7.IN,
                [R.out]: J === N.f7.OUT
              }),
              children: (0, r.jsx)(T.Z, {
                tab: Q,
                isFullScreen: t,
                refreshCategories: U,
                transitionToTab: $,
                transitionState: J,
                sortedCategories: V,
                updateAnalyticsState: X
              })
            })]
          })
        })
      })
    })
  }