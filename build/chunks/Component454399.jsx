/** Chunk was on web.js **/
/** chunk id: 454399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => O
}), require("./35282.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk635041 = require("./635041.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk550656 = require("./550656.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk102725 = require("./102725.js"),
  Chunk342134 = require("./342134.js"),
  Chunk966327 = require("./966327.js"),
  Chunk890955 = require("./890955.js");

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
  let t;
  var {
    children: n,
    title: h,
    body: g,
    asset: y,
    asContainer: O = false,
    element: v = "span",
    position: I = "top",
    align: S = "center",
    spacing: T,
    caretConfig: A,
    layerContext: C,
    targetElementRef: N,
    positionKey: R
  } = e, P = b(e, ["children", "title", "body", "asset", "asContainer", "element", "position", "align", "spacing", "caretConfig", "layerContext", "targetElementRef", "positionKey"]);
  let w = (0, _.c)(N),
    D = i.useId(),
    L = null != h && ("string" != typeof h || "" !== h),
    x = i.useMemo(() => (0, r.jsxs)("div", {
      className: p.richTooltipContent,
      children: [null != y && (0, r.jsx)("div", {
        className: p.assetContainer,
        children: y
      }), (0, r.jsxs)("div", {
        className: p.textContent,
        children: [L && (0, r.jsx)(o.Text, {
          variant: "text-sm/bold",
          children: h
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: L ? "text-secondary" : "text-primary",
          children: g
        })]
      })]
    }), [y, h, g, L]),
    {
      isVisible: M,
      triggerProps: k
    } = (0, d.l)(m({
      targetElementRef: w.targetElementRef
    }, P)),
    j = null != R ? R : "".concat((0, u.Sw)(null != h ? h : ""), "|").concat((0, u.Sw)(g)),
    U = (0, f.Q)({
      shouldShow: M
    });
  if (O) {
    let e = E(m({}, k), {
      onFocus: (0, u.tS)(k.onFocus, e => {
        let t = e.target;
        if (null != t) {
          var n;
          let e = (0, u.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : true, D);
          t.setAttribute("aria-describedby", e)
        }
      }),
      onBlur: (0, u.tS)(k.onBlur, e => {
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
    t = (0, u.FX)({
      tag: v,
      children: n,
      triggerHandlers: e,
      triggerRef: w.triggerRef
    })
  } else {
    if (!i.isValidElement(n)) return null;
    t = (0, u.C9)(n, k, D, w.triggerRef)
  }
  let G = U((e, t) => t ? (0, r.jsx)(c.pn, {
    isRichTooltip: true,
    children: (0, r.jsx)(l.N, {
      isVisible: M,
      isRendered: true,
      targetElementRef: w.targetElementRef,
      id: D,
      content: x,
      position: I,
      align: S,
      spacing: T,
      caretConfig: A,
      layerContext: null != C ? C : s.nz,
      animationStyle: e,
      positionKey: j,
      "data-mana-component": "rich-tooltip"
    })
  }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [t, null != x ? (0, r.jsx)(a.n, {
      id: D,
      children: x
    }) : null, G]
  })
}