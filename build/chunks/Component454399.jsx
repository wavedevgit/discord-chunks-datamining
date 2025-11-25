/** Chunk was on web.js **/
/** chunk id: 454399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => T
}), require("./35282.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk635041 = require("./635041.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk550656 = require("./550656.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk102725 = require("./102725.js"),
  Chunk342134 = require("./342134.js"),
  Chunk966327 = require("./966327.js"),
  Chunk890955 = require("./890955.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function T(e) {
  let t;
  var {
    children: n,
    title: a,
    body: E,
    asset: y,
    assetSize: I = 48,
    asContainer: T = false,
    element: S = "span",
    position: A = "top",
    align: C = "center",
    spacing: N,
    caretConfig: R,
    layerContext: P,
    targetElementRef: D,
    anchorRef: w,
    positionKey: L,
    ariaHidden: x = false
  } = e, M = v(e, ["children", "title", "body", "asset", "assetSize", "asContainer", "element", "position", "align", "spacing", "caretConfig", "layerContext", "targetElementRef", "anchorRef", "positionKey", "ariaHidden"]);
  let k = (0, m.c)(D),
    j = i.useId(),
    U = x ? true : j,
    G = null != a && ("string" != typeof a || "" !== a),
    B = null != y && !i.isValidElement(y),
    Z = i.useMemo(() => (0, r.jsxs)("div", {
      className: o()(g.richTooltipContent, {
        [g.noAsset]: null == y
      }),
      children: [null != y && (0, r.jsx)("div", {
        className: g.assetContainer,
        style: {
          width: I
        },
        children: B ? (0, r.jsx)(l.zsu, b({}, y)) : y
      }), (0, r.jsxs)("div", {
        className: g.textContent,
        children: [G && (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: a
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: G ? "text-secondary" : "text-default",
          children: E
        })]
      })]
    }), [y, I, a, E, G, B]),
    {
      isVisible: F,
      triggerProps: V
    } = (0, p.l)(b({
      targetElementRef: k.targetElementRef
    }, M)),
    H = null != L ? L : "".concat((0, _.Sw)(null != a ? a : ""), "|").concat((0, _.Sw)(E)),
    Y = (0, h.Q)({
      shouldShow: F
    });
  if (T) {
    let e = x ? V : O(b({}, V), {
      onFocus: (0, _.tS)(V.onFocus, e => {
        let t = e.target;
        if (null != t) {
          var n;
          let e = (0, _.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : true, j);
          t.setAttribute("aria-describedby", e)
        }
      }),
      onBlur: (0, _.tS)(V.onBlur, e => {
        let t = e.target;
        if (null != t) {
          let e = t.getAttribute("aria-describedby");
          if (null != e) {
            let n = e.split(" ").filter(e => e !== j);
            n.length > 0 ? t.setAttribute("aria-describedby", n.join(" ")) : t.removeAttribute("aria-describedby")
          }
        }
      })
    });
    t = (0, _.FX)({
      tag: S,
      children: n,
      triggerHandlers: e,
      triggerRef: k.triggerRef
    })
  } else {
    if (!i.isValidElement(n)) return null;
    t = (0, _.C9)(n, V, U, k.triggerRef)
  }
  let W = Y((e, t) => t ? (0, r.jsx)(f.pn, {
    isRichTooltip: true,
    children: (0, r.jsx)(d.N, {
      isVisible: F,
      isRendered: true,
      targetElementRef: k.targetElementRef,
      anchorRef: w,
      id: j,
      content: Z,
      position: A,
      align: C,
      spacing: N,
      caretConfig: R,
      layerContext: null != P ? P : u.nz,
      animationStyle: e,
      positionKey: H,
      "data-mana-component": "rich-tooltip"
    })
  }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [t, x || null == Z ? null : (0, r.jsx)(s.n, {
      id: j,
      children: Z
    }), W]
  })
}