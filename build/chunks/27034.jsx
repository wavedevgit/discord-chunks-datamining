/** Chunk was on web.js **/
/** chunk id: 27034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C3: () => b,
  O3: () => y,
  ZP: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk867309 = require("./867309.js"),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.js"),
  Chunk409813 = require("./409813.js"),
  Chunk474936 = require("./474936.js"),
  Chunk249779 = require("./249779.js");

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
  var t, n, o, s, c, h;
  let {
    header: m,
    isLargeModal: E,
    stepProps: b
  } = g(e), {
    step: y,
    stepConfigs: O,
    setBodyNode: v,
    setFooterNode: I,
    setModalOverlayNode: T,
    setReadySlideId: S,
    premiumBrandRefreshBackgroundClassName: A,
    selectedSkuId: N,
    isDisplayingWowMomentConfirmation: C
  } = (0, d.JL)(), R = null != N && N in _.y7, P = O.find(e => e.key === y);
  i.useEffect(() => {
    T(null)
  }, [y, T]), l()(null != P, "Unknown step for current payment flow.");
  let w = null != (c = null == P || null == (t = P.options) ? true : t.hideSlider) && c,
    D = null == P || null == (n = P.options) ? true : n.bodyClassName,
    L = null == P || null == (o = P.options) ? true : o.sliderBodyClassName;
  return true !== E && E && (L = p.sliderBodyLarge), <r.Fragment>{null == (h = null == P || null == (s = P.options) ? true : s.renderHeader) || h ? m : null}{P.renderStep(b)}{null == y || w ? null : <r.Fragment>{<u.hzk data-migration-pending={true} className={a()(D, p.body, A, {
          [p.reviewStep]: y === f.h8.REVIEW,
          [p.addPaymentStepForPremium]: y === f.h8.ADD_PAYMENT_STEPS && R
        })}><u.MyZ activeSlide={y} centered={false} onSlideReady={e => S(e)} width={y === f.h8.ADD_PAYMENT_STEPS ? 408 : y === f.h8.REVIEW ? 392 : true} overflow={C ? "visible" : true}>{O.filter(e => null != e.key).map(e => (0, r.jsx)(u.Mi4, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: a()(p.sliderBody, L),
              ref: e => {
                v(e)
              },
              onSubmit: e => e.preventDefault()
            })
          }, e.key))}</u.MyZ></u.hzk>}{<div ref={e => I(e)} />}{<div ref={e => {
          T(e)
        }} />}</r.Fragment>}</r.Fragment>
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