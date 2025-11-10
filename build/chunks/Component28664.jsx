/** Chunk was on web.js **/
/** chunk id: 28664, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => y
}), require("./35282.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk635041 = require("./635041.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550656 = require("./550656.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk102725 = require("./102725.js"),
  Chunk342134 = require("./342134.js"),
  Chunk966327 = require("./966327.js"),
  Chunk495511 = require("./495511.js");

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
  let t;
  var {
    children: n,
    text: p,
    keyboardShortcut: m,
    __unsupportedReactNodeAsText: b,
    asContainer: y = false,
    tag: O = "span",
    position: v = "top",
    align: I = "center",
    spacing: S,
    layerContext: T,
    targetElementRef: A,
    anchorRef: C,
    caretConfig: N,
    positionKey: R
  } = e, P = E(e, ["children", "text", "keyboardShortcut", "__unsupportedReactNodeAsText", "asContainer", "tag", "position", "align", "spacing", "layerContext", "targetElementRef", "anchorRef", "caretConfig", "positionKey"]);
  let w = (0, f.c)(A),
    D = i.useId(),
    {
      isVisible: x,
      triggerProps: L
    } = (0, u.l)(h({
      targetElementRef: w.targetElementRef
    }, P)),
    M = (0, d.Q)({
      shouldShow: x
    }),
    {
      defaultLayerContext: j
    } = (0, o.ZFG)(),
    k = i.useMemo(() => null != b ? b : null == p || "" === p ? null : null != m && "" !== m ? (0, r.jsxs)("div", {
      className: _.tooltipWithShortcut,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: p
      }), (0, r.jsx)(s.M2$, {
        shortcut: m
      })]
    }) : p, [p, m, b]);
  if (null == k || "string" == typeof k && "" === k) return n;
  let U = null != R ? R : (0, c.Sw)(p);
  if (y) {
    let e = g(h({}, L), {
      onFocus: (0, c.tS)(L.onFocus, e => {
        let t = e.target;
        if (null != t) {
          var n;
          let e = (0, c.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : true, D);
          t.setAttribute("aria-describedby", e)
        }
      }),
      onBlur: (0, c.tS)(L.onBlur, e => {
        let t = e.target;
        if (null != t) {
          let e = t.getAttribute("aria-describedby");
          if (null != e) {
            let n = e.split(" ").filter(e => e !== D);
            n.length > 0 ? t.setAttribute("aria-describedby", n.join(" ")) : t.removeAttribute("aria-describedby")
          }
        }
      })
    });
    t = (0, c.FX)({
      tag: O,
      children: n,
      triggerHandlers: e,
      triggerRef: w.triggerRef
    })
  } else {
    if (!i.isValidElement(n)) return null;
    t = (0, c.C9)(n, L, D, w.triggerRef)
  }
  let G = M((e, t) => t ? (0, r.jsx)(l.N, {
    isVisible: x,
    isRendered: true,
    targetElementRef: w.targetElementRef,
    anchorRef: C,
    id: D,
    content: k,
    position: v,
    align: I,
    spacing: S,
    caretConfig: N,
    layerContext: null != T ? T : j,
    animationStyle: e,
    positionKey: U
  }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [t, null != k && "" !== k ? (0, r.jsx)(a.n, {
      id: D,
      children: k
    }) : null, G]
  })
}