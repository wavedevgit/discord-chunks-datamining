/** Chunk was on web.js **/
/** chunk id: 550656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk302901 = require("./302901.jsx"),
  Chunk539907 = require("./539907.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk337363 = require("./337363.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk495511 = require("./495511.js");
let h = 11,
  m = ["left", "center", "right"],
  g = ["top", "center", "bottom"];

function E(e) {
  let {
    isVisible: t,
    isRendered: n = t,
    targetElementRef: a,
    id: E,
    content: b,
    position: y = "top",
    align: O = "center",
    spacing: v = h,
    caretConfig: I,
    layerContext: T,
    animationStyle: S,
    positionKey: A
  } = e, C = i.useRef(null), {
    isRichTooltip: N
  } = (0, f.nr)(), R = i.useMemo(() => ("left" === y || "right" === y ? g : m).includes(O) ? O : "center", [y, O]);
  if (!n) return null;
  let P = (0, r.jsx)(c.j, {
    targetRef: a,
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
        nudge: c
      } = e, f = null != l ? l : y, h = null != (t = null == I ? true : I.align) ? t : null != c && 0 !== c ? "custom" : "center", m = null != (i = null != (n = null == I ? true : I.customOffset) ? n : c) ? i : 0, g = {
        position: null != (a = null == I ? true : I.position) ? a : (0, _.Av)(f),
        align: h,
        customOffset: "custom" === h ? m : true
      }, O = (0, r.jsxs)("div", {
        ref: C,
        id: E,
        className: o()(p.tooltip, {
          [p.richTooltip]: N
        }),
        role: "tooltip",
        "data-position": f,
        children: [(0, r.jsx)(d._, {
          caretConfig: g
        }), (0, r.jsx)("div", {
          className: p.tooltipContent,
          children: "string" == typeof b ? (0, r.jsx)(u.Text, {
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
  return null != T ? (0, r.jsx)(l.mh, {
    layerContext: T,
    children: P
  }) : P
}