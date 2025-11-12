/** Chunk was on web.js **/
/** chunk id: 614277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C3: () => b,
  O3: () => y,
  ZP: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk603113 = require("./603113.js"),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk474936 = require("./474936.js"),
  Chunk490684 = require("./490684.js");

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    header: t,
    isLargeModal: n
  } = e;
  return {
    header: t,
    isLargeModal: n,
    stepProps: h(e, ["header", "isLargeModal"])
  }
}

function E(e) {
  var t, n, a, s, c, h;
  let m, {
      header: E,
      isLargeModal: b,
      stepProps: y
    } = g(e),
    {
      step: O,
      stepConfigs: v,
      setBodyNode: I,
      setFooterNode: T,
      setModalOverlayNode: S,
      setReadySlideId: A,
      premiumBrandRefreshBackgroundClassName: C,
      selectedSkuId: N,
      isDisplayingWowMomentConfirmation: R,
      isGift: P
    } = (0, d.JL)(),
    D = null != N && N in _.y7,
    w = v.find(e => e.key === O);
  i.useEffect(() => {
    S(null)
  }, [O, S]), l()(null != w, "Unknown step for current payment flow.");
  let x = null != (c = null == w || null == (t = w.options) ? true : t.hideSlider) && c,
    L = null == w || null == (n = w.options) ? true : n.bodyClassName,
    M = null == w || null == (a = w.options) ? true : a.sliderBodyClassName;
  switch (true !== b && b && (M = p.sliderBodyLarge), O) {
    case f.h8.ADD_PAYMENT_STEPS:
      m = 408;
      break;
    case f.h8.REVIEW:
      m = 392;
      break;
    case f.h8.PLAN_SELECT:
      D && !P && (m = "100%")
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [null == (h = null == w || null == (s = w.options) ? true : s.renderHeader) || h ? E : null, w.renderStep(y), null == O || x ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.hzk, {
        "data-migration-pending": true,
        className: o()(L, p.body, C, {
          [p.reviewStep]: O === f.h8.REVIEW,
          [p.addPaymentStepForPremium]: O === f.h8.ADD_PAYMENT_STEPS && D
        }),
        children: (0, r.jsx)(u.MyZ, {
          activeSlide: O,
          centered: false,
          onSlideReady: e => A(e),
          width: m,
          overflow: R ? "visible" : true,
          shouldUseMediaQueriesForSizing: true,
          children: v.filter(e => null != e.key).map(e => (0, r.jsx)(u.Mi4, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: o()(p.sliderBody, M),
              ref: e => {
                I(e)
              },
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, r.jsx)("div", {
        ref: e => T(e)
      }), (0, r.jsx)("div", {
        ref: e => {
          S(e)
        }
      })]
    })]
  })
}

function b(e) {
  let {
    children: t
  } = e, {
    bodyNode: n
  } = (0, d.JL)();
  return null == n ? null : c.createPortal(t, n)
}

function y(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, d.JL)();
  return null == n ? null : c.createPortal(t, n)
}