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
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
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
  Chunk642909 = require("./642909.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk887353 = require("./887353.js"),
  Chunk345213 = require("./345213.js");
let M = e => {
    let {
      children: t,
      shouldAddEventListener: n,
      onClose: r
    } = e, i = (0, c.f9)();
    return l.useEffect(() => {
      if (!n || i) return;
      let e = e => {
        e.key === w.mR.Escape && r()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [n, i, r]), t
  },
  F = function(e) {
    let {
      tab: t = R.AW.HOME
    } = e;
    (0, h.z)(f.f), (0, j.f)();
    let n = (0, g.Z)((0, a.Z)()),
      i = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
      {
        userProfile: c,
        wishlistId: w
      } = (0, o.cj)([C.Z], () => ({
        userProfile: null != i ? C.Z.getUserProfile(i.id) : null,
        wishlistId: null != i ? C.Z.getFirstWishlistId(i.id) : null
      }), [i]);
    l.useEffect(() => {
      null != i && null == c && (0, _.Z)(i.id, i.getAvatarURL(null, 80))
    }, [i, c]), (0, m.kZ)(w, null == i ? true : i.id);
    let F = (0, N.G)("CollectiblesShop"),
      {
        onClose: W
      } = (0, P.Db)(),
      {
        currentTab: V,
        hasFilters: U
      } = (0, T.S)(),
      z = l.useMemo(() => t === R.AW.HOME && V && U() ? V : t, [t, V, U]),
      {
        categories: G,
        refreshCategories: K
      } = (0, S.ZP)({
        logPerf: true
      }, {
        sessionId: n,
        tab: z
      }),
      Y = (0, y.O)(G),
      [q, J] = l.useState(),
      Q = (0, o.e7)([E.Z], () => {
        var e;
        return null == (e = E.Z.getCategory(q)) ? true : e.name
      }),
      [X, $] = l.useState();
    (0, L.Kp)();
    let ee = l.useCallback((e, t) => {
        $(e), J(t)
      }, []),
      {
        selectedTab: et,
        transitionState: en,
        transitionToTab: er
      } = (0, k.B)(z);
    (0, O.q3)(n, et, Q, en, X), (0, O.EB)(et, i);
    let {
      dismissShopButtonDC: el
    } = (0, A.Z)();
    l.useEffect(() => {
      el()
    }, [el]), l.useEffect(() => {
      (0, d.Y)(Z.Z5c.COLLECTIBLES_SHOP)
    }, []);
    let ei = l.useRef(null),
      es = l.useRef(null);
    (0, u.Tbt)(ei), l.useEffect(() => {
      var e;
      null == (e = es.current) || e.focus()
    }, []);
    let {
      analyticsLocations: ea
    } = (0, O.MV)(et);
    return (0, r.jsx)(p.Gt, {
      value: ea,
      children: (0, r.jsx)(v.k0, {
        newValue: {
          sessionId: n,
          pageCategory: Q,
          pageSize: R.kN
        },
        children: (0, r.jsx)(x.ni, {
          tab: et,
          children: (0, r.jsx)(M, {
            onClose: W,
            shouldAddEventListener: false,
            children: (0, r.jsxs)("div", {
              className: s()(H.shop, {
                [D.shopTakeOver]: F
              }),
              ref: es,
              tabIndex: false,
              children: [(0, r.jsx)(B.I, {
                handleTransition: er,
                selectedTab: et
              }), (0, r.jsx)("div", {
                className: s()(H.shopViewWrapper, {
                  [H.visible]: en === R.f7.VISIBLE,
                  [H.in]: en === R.f7.IN,
                  [H.out]: en === R.f7.OUT
                }),
                children: (0, r.jsx)(I.Z, {
                  tab: et,
                  refreshCategories: K,
                  transitionToTab: er,
                  transitionState: en,
                  sortedCategories: Y,
                  updateAnalyticsState: ee
                })
              })]
            })
          })
        })
      })
    })
  }