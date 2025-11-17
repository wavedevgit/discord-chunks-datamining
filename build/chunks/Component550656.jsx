/** Chunk was on web.js **/
/** chunk id: 550656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk878342 = require("./878342.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk337363 = require("./337363.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk495511 = require("./495511.js");
let p = 11,
  h = ["left", "center", "right"],
  m = ["top", "center", "bottom"];

function g(e) {
  let {
    isVisible: t,
    isRendered: n = t,
    targetElementRef: a,
    anchorRef: g,
    id: E,
    content: b,
    position: y = "top",
    align: O = "center",
    spacing: v = p,
    caretConfig: I,
    layerContext: T,
    animationStyle: S,
    positionKey: A
  } = e, C = i.useRef(null), {
    isRichTooltip: N
  } = (0, d.nr)(), R = i.useMemo(() => ("left" === y || "right" === y ? m : h).includes(O) ? O : "center", [y, O]);
  if (!n) return null;
  let P = (0, r.jsx)(c.jRF, {
    targetRef: null != g ? g : a,
    position: y,
    align: R,
    spacing: v,
    positionKey: A,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    children: e => {
      var t, n, i, a;
      let {
        position: l,
        nudge: d
      } = e, p = null != l ? l : y, h = null != (t = null == I ? true : I.align) ? t : null != d && 0 !== d ? "custom" : "center", m = null != (i = null != (n = null == I ? true : I.customOffset) ? n : d) ? i : 0, g = {
        position: null != (a = null == I ? true : I.position) ? a : (0, f.Av)(p),
        align: h,
        customOffset: "custom" === h ? m : true
      }, O = (0, r.jsxs)("div", {
        ref: C,
        id: E,
        className: o()(_.tooltip, {
          [_.richTooltip]: N
        }),
        role: "tooltip",
        "data-position": p,
        "data-mana-component": "tooltip",
        children: [(0, r.jsx)(u._, {
          caretConfig: g
        }), (0, r.jsx)("div", {
          className: _.tooltipContent,
          children: "string" == typeof b ? (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: b
          }) : b
        })]
      });
      return S ? (0, r.jsx)(s.animated.div, {
        style: S,
        children: O
      }) : O
    }
  });
  return null != T ? (0, r.jsx)(l.mh4, {
    layerContext: T,
    children: P
  }) : P
}