/** Chunk was on web.js **/
/** chunk id: 482132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => E,
  UX: () => y,
  dZ: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk340287 = require("./340287.js"),
  Chunk397927 = require("./397927.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk788868 = require("./788868.js"),
  Chunk804686 = require("./804686.js");

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
  var t, n, a, o, c, h;
  let m, {
      header: E,
      isLargeModal: b,
      stepProps: y
    } = g(e),
    {
      step: O,
      stepConfigs: A,
      setBodyNode: v,
      setFooterNode: S,
      setModalOverlayNode: I,
      setReadySlideId: T,
      premiumBrandRefreshBackgroundClassName: C,
      selectedSkuId: N,
      isDisplayingWowMomentConfirmation: R,
      isGift: w
    } = (0, d.P5)(),
    P = null != N && N in p.WN,
    D = A.find(e => e.key === O);
  i.useEffect(() => {
    I(null)
  }, [O, I]), l()(null != D, "Unknown step for current payment flow.");
  let x = null != (t = null == D || null == (a = D.options) ? true : a.hideSlider) && t,
    L = null == D || null == (o = D.options) ? true : o.bodyClassName,
    j = null == D || null == (c = D.options) ? true : c.sliderBodyClassName;
  switch (true !== b && b && (j = _.nS), O) {
    case f.pn.ADD_PAYMENT_STEPS:
      m = 408;
      break;
    case f.pn.REVIEW:
      m = 392;
      break;
    case f.pn.PLAN_SELECT:
      P && !w && (m = "100%")
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [null == (n = null == D || null == (h = D.options) ? true : h.renderHeader) || n ? E : null, D.renderStep(y), null == O || x ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.$mQ, {
        "data-migration-pending": true,
        className: s()(L, _.rf, C, {
          [_.VR]: O === f.pn.REVIEW,
          [_.qO]: O === f.pn.ADD_PAYMENT_STEPS && P
        }),
        children: (0, r.jsx)(u.tN_, {
          activeSlide: O,
          centered: false,
          onSlideReady: e => T(e),
          width: m,
          overflow: R ? "visible" : true,
          shouldUseMediaQueriesForSizing: true,
          children: A.filter(e => null != e.key).map(e => (0, r.jsx)(u.q7S, {
            id: e.key,
            children: (0, r.jsx)("form", {
              className: s()(_.OO, j),
              ref: e => {
                v(e)
              },
              onSubmit: e => e.preventDefault()
            })
          }, e.key))
        })
      }), (0, r.jsx)("div", {
        ref: e => S(e)
      }), (0, r.jsx)("div", {
        ref: e => {
          I(e)
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
  } = (0, d.P5)();
  return null == n ? null : c.createPortal(t, n)
}

function y(e) {
  let {
    children: t
  } = e, {
    footerNode: n
  } = (0, d.P5)();
  return null == n ? null : c.createPortal(t, n)
}