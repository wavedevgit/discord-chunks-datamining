/** Chunk was on web.js **/
/** chunk id: 466590, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk751334 = require("./751334.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk254477 = require("./254477.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e) {
  var t, n, a, m, E, {
      steps: O,
      caretConfig: v = {
        position: "bottom",
        align: "center"
      },
      size: I = "md",
      onStepChange: T,
      onRequestClose: S,
      popoverRef: A,
      shouldShow: C
    } = e,
    N = y(e, ["steps", "caretConfig", "size", "onStepChange", "onRequestClose", "popoverRef", "shouldShow"]);
  let [R, P] = i.useState(0);
  i.useEffect(() => {
    C && P(0)
  }, [C]), i.useEffect(() => {
    null == T || T(R)
  }, [R, T]);
  let w = O[R],
    D = R + 1 === O.length,
    x = i.useCallback(() => {
      var e;
      null == w || null == (e = w.onCta) || e.call(w), D ? null == S || S() : P(e => e + 1)
    }, [w, D, S]),
    L = i.useCallback(() => {
      null == S || S()
    }, [S]),
    j = i.useCallback(() => {
      null == S || S()
    }, [S]);
  if (!C || null == w) return null;
  let M = g({
    text: null != (a = null == (t = w.action) ? true : t.text) ? a : D ? p.intl.string(p.t.i4jeWV) : p.intl.string(p.t.PDTjLC),
    variant: null != (m = null == (n = w.action) ? true : n.variant) ? m : "primary",
    onClick: x
  }, w.action);
  return (0, r.jsx)(u.m, b(g({}, N), {
    shouldShow: C,
    onRequestClose: L,
    gradientColor: w.gradientColor,
    children: (0, r.jsxs)("div", {
      ref: A,
      children: [(0, r.jsx)(f.u, {
        onClick: j,
        variant: null != w.gradientColor ? "color-mix" : true
      }), null != w.graphic && (0, r.jsx)("div", {
        className: o()(h.graphic, {
          [h["graphic--".concat(I)]]: null != I
        }),
        children: (0, r.jsx)(l.z, b(g({}, w.graphic), {
          aspectRatio: null != (E = w.graphic.aspectRatio) ? E : "sm" === I ? "2/1" : "16/9"
        }))
      }), (0, r.jsx)(_.Y, {
        title: w.title,
        body: w.body,
        badge: w.badge,
        textLink: w.textLink,
        hasBottomMargin: true
      }), (0, r.jsx)("div", {
        className: h.actionBar,
        children: (0, r.jsxs)("div", {
          className: h.multistepActionLayout,
          children: [(0, r.jsx)(s.xvT, {
            variant: "text-xs/normal",
            className: h.multistepIndicator,
            children: p.intl.formatToPlainString(p.t.rO31eX, {
              count: R + 1,
              totalSteps: O.length
            })
          }), (0, r.jsx)(c.zxk, g({
            size: "sm"
          }, M))]
        })
      }), (0, r.jsx)(d.$, {
        caretConfig: v
      })]
    })
  }))
}