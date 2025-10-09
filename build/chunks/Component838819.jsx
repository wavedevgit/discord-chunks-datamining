/** Chunk was on 45620 **/
/** chunk id: 838819, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => W
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
  Chunk621853 = require("./621853.js"),
  Chunk484459 = require("./484459.js"),
  Chunk602733 = require("./602733.js"),
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
  Chunk887353 = require("./887353.js"),
  Chunk345213 = require("./345213.js");
let M = e => {
    let {
      children: t,
      shouldAddEventListener: n,
      onClose: r
    } = e, s = (0, c.f9)();
    return l.useEffect(() => {
      if (!n || s) return;
      let e = e => {
        e.key === H.mR.Escape && r()
      };
      return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [n, s, r]), t
  },
  W = function(e) {
    let {
      isFullScreen: t = true,
      tab: n = Z.AW.HOME
    } = e;
    (0, C.z)(p.f), (0, L.f)();
    let s = (0, g.Z)((0, i.Z)()),
      c = (0, o.e7)([E.default], () => E.default.getCurrentUser()),
      {
        userProfile: H,
        wishlistId: W
      } = (0, o.cj)([h.Z], () => ({
        userProfile: null != c ? h.Z.getUserProfile(c.id) : null,
        wishlistId: null != c ? h.Z.getFirstWishlistId(c.id) : null
      }), [c]);
    l.useEffect(() => {
      null != c && null == H && (0, _.Z)(c.id, c.getAvatarURL(null, 80))
    }, [c, H]), (0, m.k)(W, null == c ? true : c.id);
    let U = (0, R.G)("CollectiblesShop"),
      {
        onClose: V
      } = (0, B.Db)(),
      {
        currentTab: z,
        hasFilters: G
      } = (0, k.S)(),
      K = l.useMemo(() => n === Z.AW.HOME && z && G() ? z : n, [n, z, G]),
      {
        categories: q,
        refreshCategories: Y
      } = (0, y.ZP)({
        logPerf: true
      }, {
        sessionId: s,
        tab: K,
        isFullScreen: t
      }),
      Q = (0, T.O)(q),
      [X, J] = l.useState(),
      $ = (0, o.e7)([v.Z], () => {
        var e;
        return null == (e = v.Z.getCategory(X)) ? true : e.name
      }),
      [ee, et] = l.useState();
    (0, P.Kp)();
    let en = l.useCallback((e, t) => {
        et(e), J(t)
      }, []),
      {
        selectedTab: er,
        transitionState: el,
        transitionToTab: es
      } = (0, j.B)(K, t);
    (0, O.q3)(s, er, $, el, ee), (0, O.EB)(er, c);
    let {
      dismissShopButtonDC: ea
    } = (0, A.Z)();
    l.useEffect(() => {
      ea()
    }, [ea]), l.useEffect(() => {
      t || (0, d.Y)(w.Z5c.COLLECTIBLES_SHOP)
    }, [t]);
    let ei = (0, o.e7)([b.Z], () => b.Z.getLayers().includes(w.S9g.COLLECTIBLES_SHOP)),
      eo = l.useRef(null),
      ec = l.useRef(null);
    (0, u.Tbt)(eo);
    let {
      setFullScreenOpen: eu,
      fullScreenOpen: ed
    } = (0, k.S)();
    l.useEffect(() => {
      if (t) return eu(true), () => eu(false);
      if (!t) {
        var e;
        null == (e = ec.current) || e.focus()
      }
    }, [t, eu]);
    let {
      analyticsLocations: eg
    } = (0, O.MV)(er);
    return ed && !t ? null : (0, r.jsx)(f.Gt, {
      value: eg,
      children: (0, r.jsx)(S.k0, {
        newValue: {
          sessionId: s,
          pageCategory: $,
          pageSize: Z.kN
        },
        children: (0, r.jsx)(x.ni, {
          tab: er,
          children: (0, r.jsx)(M, {
            onClose: V,
            shouldAddEventListener: t && !ei,
            children: (0, r.jsxs)("div", {
              className: a()(F.shop, {
                [D.shopTakeOver]: U
              }),
              ref: t ? eo : ec,
              tabIndex: false,
              children: [(0, r.jsx)(N.I, {
                isFullScreen: t,
                isLayer: ei,
                onClose: V,
                handleTransition: es,
                selectedTab: er
              }), (0, r.jsx)("div", {
                className: a()(F.shopViewWrapper, {
                  [F.visible]: el === Z.f7.VISIBLE,
                  [F.in]: el === Z.f7.IN,
                  [F.out]: el === Z.f7.OUT
                }),
                children: (0, r.jsx)(I.Z, {
                  tab: er,
                  isFullScreen: t,
                  refreshCategories: Y,
                  transitionToTab: es,
                  transitionState: el,
                  sortedCategories: Q,
                  updateAnalyticsState: en
                })
              })]
            })
          })
        })
      })
    })
  }