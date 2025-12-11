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
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk550656 = require("./550656.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk102725 = require("./102725.js"),
  Chunk342134 = require("./342134.js"),
  Chunk966327 = require("./966327.js"),
  Chunk945845 = require("./945845.js");

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
  var n, r, i = S(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function S(e, t) {
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
    body: E,
    asset: y,
    assetSize: S = 48,
    asContainer: I = false,
    element: T = "span",
    position: C = "top",
    align: A = "center",
    spacing: N,
    caretConfig: P,
    layerContext: R,
    targetElementRef: w,
    anchorRef: D,
    positionKey: x,
    ariaHidden: L = false
  } = e, j = v(e, ["children", "title", "body", "asset", "assetSize", "asContainer", "element", "position", "align", "spacing", "caretConfig", "layerContext", "targetElementRef", "anchorRef", "positionKey", "ariaHidden"]);
  let M = (0, h.c)(w),
    k = i.useId(),
    U = L ? true : k,
    G = null != a && ("string" != typeof a || "" !== a),
    Z = null != y && !i.isValidElement(y),
    F = i.useMemo(() => (0, r.jsxs)("div", {
      className: o()(g.richTooltipContent, {
        [g.noAsset]: null == y
      }),
      children: [null != y && (0, r.jsx)("div", {
        className: g.assetContainer,
        style: {
          width: S
        },
        children: Z ? (0, r.jsx)(l.zsu, b({}, y)) : y
      }), (0, r.jsxs)("div", {
        className: g.textContent,
        children: [G && (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: a
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: G ? "text-subtle" : "text-default",
          children: E
        })]
      })]
    }), [y, S, a, E, G, Z]),
    {
      isVisible: B,
      triggerProps: V
    } = (0, _.l)(b({
      targetElementRef: M.targetElementRef
    }, j)),
    H = null != x ? x : "".concat((0, p.Sw)(null != a ? a : ""), "|").concat((0, p.Sw)(E)),
    Y = (0, m.Q)({
      shouldShow: B
    });
  if (I) {
    let e = L ? V : O(b({}, V), {
      onFocus: (0, p.tS)(V.onFocus, e => {
        let t = e.target;
        if (null != t) {
          var n;
          let e = (0, p.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : true, k);
          t.setAttribute("aria-describedby", e)
        }
      }),
      onBlur: (0, p.tS)(V.onBlur, e => {
        let t = e.target;
        if (null != t) {
          let e = t.getAttribute("aria-describedby");
          if (null != e) {
            let n = e.split(" ").filter(e => e !== k);
            n.length > 0 ? t.setAttribute("aria-describedby", n.join(" ")) : t.removeAttribute("aria-describedby")
          }
        }
      })
    });
    t = (0, p.FX)({
      tag: T,
      children: n,
      triggerHandlers: e,
      triggerRef: M.triggerRef
    })
  } else {
    if (!i.isValidElement(n)) return null;
    t = (0, p.C9)(n, V, U, M.triggerRef)
  }
  let W = Y((e, t) => t ? (0, r.jsx)(f.pn, {
    isRichTooltip: true,
    children: (0, r.jsx)(d.N, {
      isVisible: B,
      isRendered: true,
      targetElementRef: M.targetElementRef,
      anchorRef: D,
      id: k,
      content: F,
      position: C,
      align: A,
      spacing: N,
      caretConfig: P,
      layerContext: null != R ? R : u.nz,
      animationStyle: e,
      positionKey: H,
      "data-mana-component": "rich-tooltip"
    })
  }) : null);
  return (0, r.jsxs)(r.Fragment, {
    children: [t, L || null == F ? null : (0, r.jsx)(s.n, {
      id: k,
      children: F
    }), W]
  })
}