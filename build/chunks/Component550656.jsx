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
  Chunk467721 = require("./467721.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk337363 = require("./337363.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk495511 = require("./495511.js");
let _ = 11,
  m = ["left", "center", "right"],
  h = ["top", "center", "bottom"];

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
    spacing: v = _,
    caretConfig: S,
    layerContext: I,
    animationStyle: T,
    positionKey: C
  } = e, A = i.useRef(null), {
    isRichTooltip: N
  } = (0, d.nr)(), P = i.useMemo(() => ("left" === y || "right" === y ? h : m).includes(O) ? O : "center", [y, O]);
  if (!n) return null;
  let R = (0, r.jsx)(c.jRF, {
    targetRef: null != g ? g : a,
    position: y,
    align: P,
    spacing: v,
    positionKey: C,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    children: e => {
      var t, n, i, a;
      let {
        position: l,
        nudge: d
      } = e, _ = null != l ? l : y, m = null != (t = null == S ? true : S.align) ? t : null != d && 0 !== d ? "custom" : "center", h = null != (i = null != (n = null == S ? true : S.customOffset) ? n : d) ? i : 0, g = {
        position: null != (a = null == S ? true : S.position) ? a : (0, f.Av)(_),
        align: m,
        customOffset: "custom" === m ? h : true
      }, O = (0, r.jsxs)("div", {
        ref: A,
        id: E,
        className: o()(p.tooltip, {
          [p.richTooltip]: N
        }),
        role: "tooltip",
        "data-position": _,
        "data-mana-component": "tooltip",
        children: [(0, r.jsx)(u._, {
          caretConfig: g
        }), (0, r.jsx)("div", {
          className: p.tooltipContent,
          children: "string" == typeof b ? (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: b
          }) : b
        })]
      });
      return T ? (0, r.jsx)(s.animated.div, {
        style: T,
        children: O
      }) : O
    }
  });
  return null != I ? (0, r.jsx)(l.mh4, {
    layerContext: I,
    children: R
  }) : R
}