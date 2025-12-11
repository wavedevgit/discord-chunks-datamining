/** Chunk was on web.js **/
/** chunk id: 614277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C3: () => b,
  O3: () => y,
  ZP: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk24156 = require("./24156.js"),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk474936 = require("./474936.js"),
  Chunk573909 = require("./573909.js");

function m(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
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
    stepProps: m(e, ["header", "isLargeModal"])
  }
}

function E(e) {
  var t, n, a, s, c, m;
  let h, {
      header: E,
      isLargeModal: b,
      stepProps: y
    } = g(e),
    {
      step: O,
      stepConfigs: v,
      setBodyNode: S,
      setFooterNode: I,
      setModalOverlayNode: T,
      setReadySlideId: C,
      premiumBrandRefreshBackgroundClassName: A,
      selectedSkuId: N,
      isDisplayingWowMomentConfirmation: P,
      isGift: R
    } = (0, d.JL)(),
    w = null != N && N in p.y7,
    D = v.find(e => e.key === O);
  i.useEffect(() => {
    T(null)
  }, [O, T]), l()(null != D, "Unknown step for current payment flow.");
  let x = null != (c = null == D || null == (t = D.options) ? true : t.hideSlider) && c,
    L = null == D || null == (n = D.options) ? true : n.bodyClassName,
    j = null == D || null == (a = D.options) ? true : a.sliderBodyClassName;
  switch (true !== b && b && (j = _.sliderBodyLarge), O) {
    case f.h8.ADD_PAYMENT_STEPS:
      h = 408;
      break;
    case f.h8.REVIEW:
      h = 392;
      break;
    case f.h8.PLAN_SELECT:
      w && !R && (h = "100%")
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [null == (m = null == D || null == (s = D.options) ? true : s.renderHeader) || m ? E : null, D.renderStep(y), null == O || x ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.hzk, {
        "data-migration-pending": true,
        className: o()(L, _.body, A, {
          [_.reviewStep]: O === f.h8.REVIEW,
          [_.addPaymentStepForPremium]: O === f.h8.ADD_PAYMENT_STEPS && w
        }),
        children: (0, r.jsx)(u.MyZ, {
          activeSlide: O,
          centered: false,
          onSlideReady: e => C(e),
          width: h,
          overflow: P ? "visible" : true,
          shouldUseMediaQueriesForSizing: true,
          children: v.filter(e => null != e.key).map(e => (0, r.jsx)(u.Mi4, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: o()(_.sliderBody, j),
              ref: e => {
                S(e)
              },
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, r.jsx)("div", {
        ref: e => I(e)
      }), (0, r.jsx)("div", {
        ref: e => {
          T(e)
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