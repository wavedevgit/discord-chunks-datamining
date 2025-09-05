/** Chunk was on 45620 **/
/** chunk id: 838819, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => F
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
  Chunk654664 = require("./654664.js"),
  Chunk391447 = require("./391447.js");
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
  F = function(e) {
    let {
      isFullScreen: t = true,
      tab: n = B.AW.HOME
    } = e;
    (0, m.z)(f.f), (0, x.f)();
    let a = (0, g.Z)((0, i.Z)()),
      c = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
      A = (0, N.G)("CollectiblesShop"),
      {
        onClose: F
      } = (0, k.Db)(),
      {
        currentTab: D,
        hasFilters: M
      } = (0, y.S)(),
      H = l.useMemo(() => n === B.AW.HOME && D && M() ? D : n, [n, D, M]),
      {
        categories: W,
        refreshCategories: U
      } = (0, S.ZP)({
        logPerf: true
      }, {
        sessionId: a,
        tab: H,
        isFullScreen: t
      }),
      V = (0, O.O)(W),
      [z, G] = l.useState(),
      q = (0, o.e7)([b.Z], () => {
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
      } = (0, v.B)(H, t);
    (0, E.q3)(a, Q, q, J, K), (0, E.EB)(Q, c);
    let {
      dismissShopButtonDC: ee
    } = (0, I.Z)();
    l.useEffect(() => {
      ee()
    }, [ee]), l.useEffect(() => {
      t || (0, d.Y)(P.Z5c.COLLECTIBLES_SHOP)
    }, [t]);
    let et = (0, o.e7)([_.Z], () => _.Z.getLayers().includes(P.S9g.COLLECTIBLES_SHOP)),
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
      analyticsLocations: es
    } = (0, E.MV)(Q);
    return ea && !t ? null : (0, r.jsx)(p.Gt, {
      value: es,
      children: (0, r.jsx)(C.k0, {
        newValue: {
          sessionId: a,
          pageCategory: q,
          pageSize: B.kN
        },
        children: (0, r.jsx)(w, {
          onClose: F,
          shouldAddEventListener: t && !et,
          children: (0, r.jsxs)("div", {
            className: s()(R.shop, {
              [Z.shopTakeOver]: A
            }),
            ref: t ? en : er,
            tabIndex: false,
            children: [(0, r.jsx)(j.I, {
              isFullScreen: t,
              isLayer: et,
              onClose: F,
              handleTransition: $,
              selectedTab: Q
            }), (0, r.jsx)("div", {
              className: s()(R.shopViewWrapper, {
                [R.visible]: J === B.f7.VISIBLE,
                [R.in]: J === B.f7.IN,
                [R.out]: J === B.f7.OUT
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