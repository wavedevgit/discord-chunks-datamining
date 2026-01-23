/** Chunk was on web.js **/
/** chunk id: 246692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk732955 = require("./732955.js"),
  Chunk964892 = require("./964892.jsx"),
  Chunk135564 = require("./135564.jsx"),
  Chunk916845 = require("./916845.jsx"),
  Chunk627330 = require("./627330.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk248789 = require("./248789.js");

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

function y(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function O(e) {
  var t, n, a, h, g;
  let {
    steps: b,
    caretConfig: O = {
      align: "center"
    },
    size: v = "md",
    onStepChange: A,
    onRequestClose: I,
    popoverRef: S,
    shouldShow: T,
    position: C
  } = e, N = y(e, ["steps", "caretConfig", "size", "onStepChange", "onRequestClose", "popoverRef", "shouldShow", "position"]), [R, w] = i.useState(0);
  i.useEffect(() => {
    T && w(0)
  }, [T]), i.useEffect(() => {
    null == A || A(R)
  }, [R, A]);
  let P = b[R],
    D = R + 1 === b.length,
    x = i.useCallback(() => {
      var e;
      null == P || null == (e = P.onCta) || e.call(P), D ? null == I || I() : w(e => e + 1)
    }, [P, D, I]),
    L = i.useCallback(() => {
      null == I || I()
    }, [I]),
    j = i.useCallback(() => {
      null == I || I()
    }, [I]);
  if (!T || null == P) return null;
  let M = m({
      text: null != (t = null == (h = P.action) ? true : h.text) ? t : D ? p.intl.string(p.t.i4jeWR) : p.intl.string(p.t.PDTjLN),
      variant: null != (n = null == (g = P.action) ? true : g.variant) ? n : "primary",
      onClick: x
    }, P.action),
    k = m({
      targetElementRef: N.targetElementRef,
      hasVideo: N.hasVideo,
      scrollBehavior: N.scrollBehavior,
      position: C,
      shouldShow: T,
      onRequestClose: L,
      gradientColor: P.gradientColor,
      caretConfig: O
    }, "edge" === N.alignmentStrategy ? {
      alignmentStrategy: "edge",
      align: N.align
    } : {
      alignmentStrategy: "trigger-center"
    });
  return (0, r.jsx)(c.x, E(m({}, k), {
    children: (0, r.jsxs)("div", {
      ref: S,
      children: [(0, r.jsx)(d.q, {
        onClick: j,
        variant: null != P.gradientColor ? "color-mix" : true
      }), null != P.graphic && (0, r.jsx)("div", {
        className: s()(_.graphic, {
          [_["graphic--".concat(v)]]: null != v
        }),
        children: (0, r.jsx)(o.vYh, E(m({}, P.graphic), {
          aspectRatio: null != (a = P.graphic.aspectRatio) ? a : "sm" === v ? "2/1" : "16/9"
        }))
      }), (0, r.jsx)(f.D, {
        title: P.title,
        body: P.body,
        badge: P.badge,
        textLink: P.textLink
      }), (0, r.jsx)("div", {
        className: _.actionBar,
        children: (0, r.jsxs)("div", {
          className: _.multistepActionLayout,
          children: [(0, r.jsx)(o.EYj, {
            variant: "text-xs/normal",
            className: _.multistepIndicator,
            children: p.intl.formatToPlainString(p.t.rO31eY, {
              count: R + 1,
              totalSteps: b.length
            })
          }), (0, r.jsx)(l.$nd, m({
            size: "sm"
          }, M))]
        })
      }), (0, r.jsx)(u.F, {})]
    })
  }))
}