/** Chunk was on web.js **/
/** chunk id: 454399, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => I
}), require("./35282.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function I(e) {
  let t;
  var {
    children: n,
    title: a,
    body: g,
    asset: b,
    asContainer: v = false,
    element: I = "span",
    position: T = "top",
    align: S = "center",
    spacing: A,
    caretConfig: C,
    layerContext: N,
    targetElementRef: R,
    anchorRef: P,
    positionKey: D,
    ariaHidden: w = false
  } = e, x = O(e, ["children", "title", "body", "asset", "asContainer", "element", "position", "align", "spacing", "caretConfig", "layerContext", "targetElementRef", "anchorRef", "positionKey", "ariaHidden"]);
  let L = (0, h.c)(R),
    M = i.useId(),
    k = w ? true : M,
    j = null != a && ("string" != typeof a || "" !== a),
    U = i.useMemo(() => (0, r.jsxs)("div", {
      className: o()(m.richTooltipContent, {
        [m.noAsset]: null == b
      }),
      children: [null != b && (0, r.jsx)("div", {
        className: m.assetContainer,
        children: b
      }), (0, r.jsxs)("div", {
        className: m.textContent,
        children: [j && (0, r.jsx)(l.Text, {
          variant: "text-sm/bold",
          children: a
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: j ? "text-secondary" : "text-default",
          children: g
        })]
      })]
    }), [b, a, g, j]),
    {
      isVisible: G,
      triggerProps: B
    } = (0, _.l)(E({
      targetElementRef: L.targetElementRef
    }, x)),
    Z = null != D ? D : "".concat((0, f.Sw)(null != a ? a : ""), "|").concat((0, f.Sw)(g)),
    F = (0, p.Q)({
      shouldShow: G
    });
  if (v) {
    let e = w ? B : y(E({}, B), {
      onFocus: (0, f.tS)(B.onFocus, e => {
        let t = e.target;
        if (null != t) {
          var n;
          let e = (0, f.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : true, M);
          t.setAttribute("aria-describedby", e)
        }
      }),
      onBlur: (0, f.tS)(B.onBlur, e => {
        let t = e.target;
        if (null != t) {
          let e = t.getAttribute("aria-describedby");
          if (null != e) {
            let n = e.split(" ").filter(e => e !== M);
            n.length > 0 ? t.setAttribute("aria-describedby", n.join(" ")) : t.removeAttribute("aria-describedby")
          }
        }
      })
    });
    t = (0, f.FX)({
      tag: I,
      children: n,
      triggerHandlers: e,
      triggerRef: L.triggerRef
    })
  } else {
    if (!i.isValidElement(n)) return null;
    t = (0, f.C9)(n, B, k, L.triggerRef)
  }
  let V = F((e, t) => t ? (0, r.jsx)(d.pn, {
    isRichTooltip: true,
    children: (0, r.jsx)(u.N, {
      isVisible: G,
      isRendered: true,
      targetElementRef: L.targetElementRef,
      anchorRef: P,
      id: M,
      content: U,
      position: T,
      align: S,
      spacing: A,
      caretConfig: C,
      layerContext: null != N ? N : c.nz,
      animationStyle: e,
      positionKey: Z,
      "data-mana-component": "rich-tooltip"
    })
  }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [t, w || null == U ? null : (0, r.jsx)(s.n, {
      id: M,
      children: U
    }), V]
  })
}