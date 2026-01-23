/** Chunk was on web.js **/
/** chunk id: 43105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b,
  h: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk964892 = require("./964892.jsx"),
  Chunk208756 = require("./208756.jsx"),
  Chunk135564 = require("./135564.jsx"),
  Chunk916845 = require("./916845.jsx"),
  Chunk627330 = require("./627330.jsx"),
  Chunk248789 = require("./248789.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function b(e) {
  var t;
  let {
    title: n,
    body: a,
    badge: _,
    graphic: m,
    size: y = "md",
    actions: b,
    textLink: O,
    gradientColor: v,
    onRequestClose: A,
    popoverRef: I,
    position: S,
    caretConfig: T,
    scrollBehavior: C
  } = e, N = E(e, ["title", "body", "badge", "graphic", "size", "actions", "textLink", "gradientColor", "onRequestClose", "popoverRef", "position", "caretConfig", "scrollBehavior"]), R = i.useCallback((e, t) => {
    null == A || A(t)
  }, [A]), w = i.useCallback(() => {
    null == A || A("user:explicit")
  }, [A]), P = h({
    targetElementRef: N.targetElementRef,
    shouldShow: N.shouldShow,
    hasVideo: N.hasVideo,
    position: S,
    caretConfig: T,
    onRequestClose: R,
    gradientColor: v,
    scrollBehavior: C
  }, "edge" === N.alignmentStrategy ? {
    alignmentStrategy: "edge",
    align: N.align
  } : {
    alignmentStrategy: "trigger-center"
  });
  return (0, r.jsx)(l.x, g(h({}, P), {
    children: (0, r.jsxs)("div", {
      ref: I,
      "data-mana-component": "popover",
      children: [(0, r.jsx)(d.q, {
        onClick: w,
        variant: null != v ? "color-mix" : true
      }), null != m && (0, r.jsx)("div", {
        className: s()(p.graphic, {
          [p["graphic--".concat(y)]]: null != y
        }),
        children: (0, r.jsx)(o.vYh, g(h({}, m), {
          aspectRatio: null != (t = m.aspectRatio) ? t : "sm" === y ? "2/1" : "16/9"
        }))
      }), (0, r.jsx)(f.D, {
        title: n,
        body: a,
        badge: _,
        textLink: O
      }), null != b && b.length > 0 ? (0, r.jsx)(c.Z, {
        actions: b
      }) : null, (0, r.jsx)(u.F, {})]
    })
  }))
}
let O = b