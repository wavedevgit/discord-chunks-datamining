/** Chunk was on web.js **/
/** chunk id: 550656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
    targetElementRef: o,
    id: E,
    content: b,
    position: y = "top",
    align: O = "center",
    spacing: v = h,
    caretConfig: I,
    layerContext: T,
    animationStyle: S
  } = e, A = i.useRef(null), {
    isRichTooltip: N
  } = (0, f.nr)(), C = i.useMemo(() => ("left" === y || "right" === y ? g : m).includes(O) ? O : "center", [y, O]);
  if (!n) return null;
  let R = (0, r.jsx)(c.j, {
    targetRef: o,
    position: y,
    align: C,
    spacing: v,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    children: e => {
      var t, n, i, o;
      let {
        position: l,
        nudge: c
      } = e, f = null != l ? l : y, h = null != (t = null == I ? true : I.align) ? t : null != c && 0 !== c ? "custom" : "center", m = null != (i = null != (n = null == I ? true : I.customOffset) ? n : c) ? i : 0, g = {
        position: null != (o = null == I ? true : I.position) ? o : (0, _.Av)(f),
        align: h,
        customOffset: "custom" === h ? m : true
      }, O = (0, r.jsxs)("div", {
        ref: A,
        id: E,
        className: a()(p.tooltip, {
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
    children: R
  }) : R
}