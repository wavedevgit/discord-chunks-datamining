/** Chunk was on web.js **/
/** chunk id: 482132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => O,
  UX: () => A,
  dZ: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk340287 = require("./340287.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk608805 = require("./608805.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk788868 = require("./788868.js"),
  Chunk804686 = require("./804686.js");

function g(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function y(e) {
  let {
    header: t,
    isLargeModal: n
  } = e;
  return {
    header: t,
    isLargeModal: n,
    stepProps: g(e, ["header", "isLargeModal"])
  }
}
let b = e => {
  let {
    shouldUseUnifiedCheckoutModal: t,
    legacyModalClassName: n,
    children: i
  } = e, a = t ? u.cwr : d.$mQ;
  return (0, r.jsx)(a, {
    "data-migration-pending": true,
    className: n,
    children: i
  })
};

function O(e) {
  var t, n, a, s, c, u;
  let g, {
      header: E,
      isLargeModal: O,
      stepProps: v
    } = y(e),
    {
      step: A,
      stepConfigs: I,
      setBodyNode: S,
      setFooterNode: T,
      setModalOverlayNode: C,
      setReadySlideId: N,
      premiumBrandRefreshBackgroundClassName: w,
      selectedSkuId: R,
      isDisplayingWowMomentConfirmation: P,
      isGift: D
    } = (0, p.P5)(),
    L = null != R && R in h.WN,
    x = I.find(e => e.key === A);
  i.useEffect(() => {
    C(null)
  }, [A, C]), l()(null != x, "Unknown step for current payment flow.");
  let M = null != (t = null == x || null == (a = x.options) ? true : a.hideSlider) && t,
    j = null == x || null == (s = x.options) ? true : s.bodyClassName,
    k = null == x || null == (c = x.options) ? true : c.sliderBodyClassName;
  true !== O && O && (k = m.nS);
  let {
    enabled: U
  } = (0, f.T0)({
    location: "PaymentModalStep"
  }), G = U && A === _.pn.REVIEW;
  switch (A) {
    case _.pn.ADD_PAYMENT_STEPS:
      g = 408;
      break;
    case _.pn.REVIEW:
      g = 392;
      break;
    case _.pn.PLAN_SELECT:
      L && !D && (g = "100%")
  }
  return G && (g = "100%"), (0, r.jsxs)(r.Fragment, {
    children: [null == (n = null == x || null == (u = x.options) ? true : u.renderHeader) || n ? E : null, x.renderStep(v), null == A || M ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(b, {
        shouldUseUnifiedCheckoutModal: G,
        legacyModalClassName: o()(j, m.rf, w, {
          [m.VR]: A === _.pn.REVIEW,
          [m.qO]: A === _.pn.ADD_PAYMENT_STEPS && L
        }),
        children: (0, r.jsx)(d.tN_, {
          activeSlide: A,
          centered: false,
          onSlideReady: e => N(e),
          width: g,
          overflow: P ? "visible" : true,
          shouldUseMediaQueriesForSizing: true,
          children: I.filter(e => null != e.key).map(e => (0, r.jsx)(d.q7S, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: o()(m.OO, k),
              ref: e => {
                S(e)
              },
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, r.jsx)("div", {
        ref: e => T(e)
      }), (0, r.jsx)("div", {
        ref: e => {
          C(e)
        }
      })]
    })]
  })
}

function v(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, p.P5)();
  return null == n ? null : c.createPortal(t, n)
}

function A(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, p.P5)();
  return null == n ? null : c.createPortal(t, n)
}