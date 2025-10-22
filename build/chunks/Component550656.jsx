/** Chunk was on web.js **/
/** chunk id: 550656, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk337363 = require("./337363.jsx"),
  Chunk725027 = require("./725027.jsx"),
  Chunk464281 = require("./464281.js"),
  Chunk220104 = require("./220104.js");
let p = 11,
  h = ["left", "center", "right"],
  m = ["top", "center", "bottom"];

function g(e) {
  let {
    isVisible: t,
    isRendered: n = t,
    targetElementRef: a,
    id: g,
    content: E,
    position: b = "top",
    align: y = "center",
    spacing: O = p,
    caretConfig: v,
    layerContext: I,
    animationStyle: T,
    positionKey: S
  } = e, A = i.useRef(null), {
    isRichTooltip: C
  } = (0, d.nr)(), N = i.useMemo(() => ("left" === b || "right" === b ? m : h).includes(y) ? y : "center", [b, y]);
  if (!n) return null;
  let R = (0, r.jsx)(c.jRF, {
    targetRef: a,
    position: b,
    align: N,
    spacing: O,
    positionKey: S,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    children: e => {
      var t, n, i, a;
      let {
        position: l,
        nudge: d
      } = e, p = null != l ? l : b, h = null != (t = null == v ? true : v.align) ? t : null != d && 0 !== d ? "custom" : "center", m = null != (i = null != (n = null == v ? true : v.customOffset) ? n : d) ? i : 0, y = {
        position: null != (a = null == v ? true : v.position) ? a : (0, f.Av)(p),
        align: h,
        customOffset: "custom" === h ? m : true
      }, O = (0, r.jsxs)("div", {
        ref: A,
        id: g,
        className: o()(_.tooltip, {
          [_.richTooltip]: C
        }),
        role: "tooltip",
        "data-position": p,
        "data-mana-component": "tooltip",
        children: [(0, r.jsx)(u._, {
          caretConfig: y
        }), (0, r.jsx)("div", {
          className: _.tooltipContent,
          children: "string" == typeof E ? (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            children: E
          }) : E
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