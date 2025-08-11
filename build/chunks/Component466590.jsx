/** Chunk was on web.js **/
/** chunk id: 466590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk454028 = require("./454028.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk669546 = require("./669546.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e) {
  var t, n, p, m, {
      steps: b,
      caretConfig: y = {
        position: "bottom",
        align: "center"
      },
      size: O = "md",
      onStepChange: v,
      onRequestClose: I,
      popoverRef: T,
      shouldShow: S
    } = e,
    A = E(e, ["steps", "caretConfig", "size", "onStepChange", "onRequestClose", "popoverRef", "shouldShow"]);
  let [N, C] = i.useState(0);
  i.useEffect(() => {
    S && C(0)
  }, [S]), i.useEffect(() => {
    null == v || v(N)
  }, [N, v]);
  let R = b[N],
    P = N + 1 === b.length,
    w = i.useCallback(() => {
      var e;
      null == R || null == (e = R.onCta) || e.call(R), P ? null == I || I() : C(e => e + 1)
    }, [R, P, I]),
    D = i.useCallback(() => {
      null == I || I()
    }, [I]),
    L = i.useCallback(() => {
      null == I || I()
    }, [I]);
  if (!S || null == R) return null;
  let x = h({
    text: null != (p = null == (t = R.action) ? true : t.text) ? p : P ? f.intl.string(f.t.i4jeWV) : f.intl.string(f.t.PDTjLC),
    variant: null != (m = null == (n = R.action) ? true : n.variant) ? m : "primary",
    onClick: w
  }, R.action);
  return (0, r.jsx)(s.m, g(h({}, A), {
    shouldShow: S,
    onRequestClose: D,
    gradientColor: R.gradientColor,
    children: (0, r.jsxs)("div", {
      ref: T,
      children: [(0, r.jsx)(u.u, {
        onClick: L,
        colorMix: null != R.gradientColor
      }), null != R.asset ? (0, r.jsx)(l.V, {
        asset: R.asset,
        size: O
      }) : null, (0, r.jsx)(d.Y, {
        title: R.title,
        body: R.body,
        badge: R.badge,
        textLink: R.textLink,
        hasBottomMargin: true
      }), (0, r.jsx)("div", {
        className: _.actionBar,
        children: (0, r.jsxs)("div", {
          className: _.multistepActionLayout,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            className: _.multistepIndicator,
            children: f.intl.formatToPlainString(f.t.rO31eX, {
              count: N + 1,
              totalSteps: b.length
            })
          }), (0, r.jsx)(o.z, h({
            size: "sm"
          }, x))]
        })
      }), (0, r.jsx)(c.$, {
        caretConfig: y
      })]
    })
  }))
}