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
  Chunk770966 = require("./770966.js");

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
      onStepChange: S,
      onRequestClose: I,
      popoverRef: T,
      shouldShow: C,
      position: A
    } = e,
    N = b(e, ["steps", "caretConfig", "size", "onStepChange", "onRequestClose", "popoverRef", "shouldShow", "position"]);
  let [P, w] = i.useState(0);
  i.useEffect(() => {
    C && w(0)
  }, [C]), i.useEffect(() => {
    null == S || S(P)
  }, [P, S]);
  let R = y[P],
    D = P + 1 === y.length,
    x = i.useCallback(() => {
      var e;
      null == R || null == (e = R.onCta) || e.call(R), D ? null == I || I() : w(e => e + 1)
    }, [R, D, I]),
    L = i.useCallback(() => {
      null == I || I()
    }, [I]),
    j = i.useCallback(() => {
      null == I || I()
    }, [I]);
  if (!C || null == R) return null;
  let M = m({
      text: null != (a = null == (t = R.action) ? true : t.text) ? a : D ? p.intl.string(p.t.i4jeWR) : p.intl.string(p.t.PDTjLN),
      variant: null != (h = null == (n = R.action) ? true : n.variant) ? h : "primary",
      onClick: x
    }, R.action),
    k = m({
      targetElementRef: N.targetElementRef,
      hasVideo: N.hasVideo,
      scrollBehavior: N.scrollBehavior,
      position: A,
      shouldShow: C,
      onRequestClose: L,
      gradientColor: R.gradientColor,
      caretConfig: O
    }, "edge" === N.alignmentStrategy ? {
      alignmentStrategy: "edge",
      align: N.align
    } : {
      alignmentStrategy: "trigger-center"
    });
  return (0, r.jsx)(c.m, E(m({}, k), {
    children: (0, r.jsxs)("div", {
      ref: T,
      children: [(0, r.jsx)(d.u, {
        onClick: j,
        variant: null != R.gradientColor ? "color-mix" : true
      }), null != R.graphic && (0, r.jsx)("div", {
        className: o()(_.graphic, {
          [_["graphic--".concat(v)]]: null != v
        }),
        children: (0, r.jsx)(s.zsu, E(m({}, R.graphic), {
          aspectRatio: null != (g = R.graphic.aspectRatio) ? g : "sm" === v ? "2/1" : "16/9"
        }))
      }), (0, r.jsx)(f.Y, {
        title: R.title,
        body: R.body,
        badge: R.badge,
        textLink: R.textLink
      }), (0, r.jsx)("div", {
        className: _.actionBar,
        children: (0, r.jsxs)("div", {
          className: _.multistepActionLayout,
          children: [(0, r.jsx)(s.xvT, {
            variant: "text-xs/normal",
            className: _.multistepIndicator,
            children: p.intl.formatToPlainString(p.t.rO31eY, {
              count: P + 1,
              totalSteps: y.length
            })
          }), (0, r.jsx)(l.zxk, m({
            size: "sm"
          }, M))]
        })
      }), (0, r.jsx)(u.$, {})]
    })
  }))
}