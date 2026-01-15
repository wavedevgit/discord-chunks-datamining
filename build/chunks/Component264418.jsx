/** Chunk was on web.js **/
/** chunk id: 264418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => y,
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk770966 = require("./770966.js");

function _(e, t, n) {
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
      _(e, t, n[t])
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
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function y(e) {
  var t, {
      title: n,
      body: a,
      badge: _,
      graphic: m,
      size: b = "md",
      actions: y,
      textLink: O,
      gradientColor: v,
      onRequestClose: S,
      popoverRef: I,
      position: T,
      caretConfig: C,
      scrollBehavior: A
    } = e,
    N = E(e, ["title", "body", "badge", "graphic", "size", "actions", "textLink", "gradientColor", "onRequestClose", "popoverRef", "position", "caretConfig", "scrollBehavior"]);
  let P = i.useCallback((e, t) => {
      null == S || S(t)
    }, [S]),
    w = i.useCallback(() => {
      null == S || S("user:explicit")
    }, [S]),
    R = h({
      targetElementRef: N.targetElementRef,
      shouldShow: N.shouldShow,
      hasVideo: N.hasVideo,
      position: T,
      caretConfig: C,
      onRequestClose: P,
      gradientColor: v,
      scrollBehavior: A
    }, "edge" === N.alignmentStrategy ? {
      alignmentStrategy: "edge",
      align: N.align
    } : {
      alignmentStrategy: "trigger-center"
    });
  return (0, r.jsx)(l.m, g(h({}, R), {
    children: (0, r.jsxs)("div", {
      ref: I,
      "data-mana-component": "popover",
      children: [(0, r.jsx)(d.u, {
        onClick: w,
        variant: null != v ? "color-mix" : true
      }), null != m && (0, r.jsx)("div", {
        className: o()(p.graphic, {
          [p["graphic--".concat(b)]]: null != b
        }),
        children: (0, r.jsx)(s.zsu, g(h({}, m), {
          aspectRatio: null != (t = m.aspectRatio) ? t : "sm" === b ? "2/1" : "16/9"
        }))
      }), (0, r.jsx)(f.Y, {
        title: n,
        body: a,
        badge: _,
        textLink: O
      }), null != y && y.length > 0 ? (0, r.jsx)(c.k, {
        actions: y
      }) : null, (0, r.jsx)(u.$, {})]
    })
  }))
}
let O = y