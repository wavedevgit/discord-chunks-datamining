/** Chunk was on web.js **/
/** chunk id: 466590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk254477 = require("./254477.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  var t, n, a, h, g, {
      steps: y,
      caretConfig: O = {
        align: "center"
      },
      size: v = "md",
      onStepChange: I,
      onRequestClose: T,
      popoverRef: S,
      shouldShow: A,
      position: C
    } = e,
    N = b(e, ["steps", "caretConfig", "size", "onStepChange", "onRequestClose", "popoverRef", "shouldShow", "position"]);
  let [R, P] = i.useState(0);
  i.useEffect(() => {
    A && P(0)
  }, [A]), i.useEffect(() => {
    null == I || I(R)
  }, [R, I]);
  let D = y[R],
    w = R + 1 === y.length,
    L = i.useCallback(() => {
      var e;
      null == D || null == (e = D.onCta) || e.call(D), w ? null == T || T() : P(e => e + 1)
    }, [D, w, T]),
    x = i.useCallback(() => {
      null == T || T()
    }, [T]),
    M = i.useCallback(() => {
      null == T || T()
    }, [T]);
  if (!A || null == D) return null;
  let j = m({
      text: null != (a = null == (t = D.action) ? true : t.text) ? a : w ? _.intl.string(_.t.i4jeWR) : _.intl.string(_.t.PDTjLN),
      variant: null != (h = null == (n = D.action) ? true : n.variant) ? h : "primary",
      onClick: L
    }, D.action),
    k = m({
      targetElementRef: N.targetElementRef,
      hasVideo: N.hasVideo,
      scrollBehavior: N.scrollBehavior,
      position: C,
      shouldShow: A,
      onRequestClose: x,
      gradientColor: D.gradientColor,
      caretConfig: O
    }, "edge" === N.alignmentStrategy ? {
      alignmentStrategy: "edge",
      align: N.align
    } : {
      alignmentStrategy: "trigger-center"
    });
  return (0, r.jsx)(c.m, E(m({}, k), {
    children: (0, r.jsxs)("div", {
      ref: S,
      children: [(0, r.jsx)(d.u, {
        onClick: M,
        variant: null != D.gradientColor ? "color-mix" : true
      }), null != D.graphic && (0, r.jsx)("div", {
        className: o()(p.graphic, {
          [p["graphic--".concat(v)]]: null != v
        }),
        children: (0, r.jsx)(s.zsu, E(m({}, D.graphic), {
          aspectRatio: null != (g = D.graphic.aspectRatio) ? g : "sm" === v ? "2/1" : "16/9"
        }))
      }), (0, r.jsx)(f.Y, {
        title: D.title,
        body: D.body,
        badge: D.badge,
        textLink: D.textLink
      }), (0, r.jsx)("div", {
        className: p.actionBar,
        children: (0, r.jsxs)("div", {
          className: p.multistepActionLayout,
          children: [(0, r.jsx)(s.xvT, {
            variant: "text-xs/normal",
            className: p.multistepIndicator,
            children: _.intl.formatToPlainString(_.t.rO31eY, {
              count: R + 1,
              totalSteps: y.length
            })
          }), (0, r.jsx)(l.zxk, m({
            size: "sm"
          }, j))]
        })
      }), (0, r.jsx)(u.$, {})]
    })
  }))
}