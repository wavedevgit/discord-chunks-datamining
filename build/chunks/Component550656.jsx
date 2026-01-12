/** Chunk was on web.js **/
/** chunk id: 550656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk620389 = require("./620389.js"),
  Chunk762328 = require("./762328.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk682973 = require("./682973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk337363 = require("./337363.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk847310 = require("./847310.js");
let h = 11,
  g = ["left", "center", "right"],
  E = ["top", "center", "bottom"];

function b(e) {
  let {
    isVisible: t,
    isRendered: n = t,
    targetElementRef: a,
    targetElement: b,
    anchorRef: y,
    id: O,
    content: v,
    position: S = "top",
    align: I = "center",
    spacing: T = h,
    caretConfig: C,
    layerContext: A,
    animationStyle: N,
    positionKey: P
  } = e, {
    isRichTooltip: R
  } = (0, p.nr)(), w = (0, u.E)("Tooltip"), D = i.useMemo(() => ("left" === S || "right" === S ? E : g).includes(I) ? I : "center", [S, I]);
  if (!n) return null;
  let x = e => {
    var t, n, i, a;
    let {
      position: l,
      nudge: c
    } = e, u = null != l ? l : S, p = null != (t = null == C ? true : C.align) ? t : null != c && 0 !== c ? "custom" : "center", h = null != (i = null != (n = null == C ? true : C.customOffset) ? n : c) ? i : 0, g = {
      position: null != (a = null == C ? true : C.position) ? a : (0, _.Av)(u),
      align: p,
      customOffset: "custom" === p ? h : true
    }, E = (0, r.jsxs)("div", {
      id: O,
      className: o()(m.tooltip, {
        [m.richTooltip]: R
      }),
      role: "tooltip",
      "data-position": u,
      "data-mana-component": "tooltip",
      children: [(0, r.jsx)(f._, {
        caretConfig: g
      }), (0, r.jsx)("div", {
        className: m.tooltipContent,
        children: "string" == typeof v ? (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          children: v
        }) : v
      })]
    });
    return N ? (0, r.jsx)(s.animated.div, {
      style: N,
      children: E
    }) : E
  };
  if (w) {
    let e = (0, l.a_)(S, I);
    return (0, r.jsx)(l.pS, {
      open: n,
      spacing: T,
      placement: e,
      reference: b,
      renderLayer: e => {
        var t;
        let {
          placement: n,
          shift: r
        } = e, i = -(null != (t = null == r ? true : r.x) ? t : 0);
        return x({
          position: (0, l.C)(n),
          nudge: i
        })
      },
      children: () => null
    })
  }
  let L = (0, r.jsx)(d.jRF, {
    targetRef: null != y ? y : a,
    position: S,
    align: D,
    spacing: T,
    positionKey: P,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    children: x
  });
  return null != A ? (0, r.jsx)(c.mh4, {
    layerContext: A,
    children: L
  }) : L
}