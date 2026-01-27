/** Chunk was on web.js **/
/** chunk id: 717995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk508382 = require("./508382.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk502939 = require("./502939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk129837 = require("./129837.jsx"),
  Chunk112317 = require("./112317.jsx"),
  Chunk348275 = require("./348275.js"),
  Chunk894524 = require("./894524.js");
let m = 11,
  g = ["left", "center", "right"],
  E = ["top", "center", "bottom"];

function y(e) {
  let {
    isVisible: t,
    isRendered: n = t,
    targetElementRef: a,
    targetElement: y,
    anchorRef: b,
    id: O,
    content: v,
    position: A = "top",
    align: I = "center",
    spacing: S = m,
    caretConfig: T,
    layerContext: C,
    animationStyle: N,
    positionKey: w
  } = e, {
    isRichTooltip: R
  } = (0, p.w6)(), P = (0, u.D)("Tooltip"), D = i.useMemo(() => ("left" === A || "right" === A ? E : g).includes(I) ? I : "center", [A, I]);
  if (!n) return null;
  let L = e => {
    var t, n, i, a;
    let {
      position: l,
      nudge: c
    } = e, u = null != l ? l : A, p = null != (t = null == T ? true : T.align) ? t : null != c && 0 !== c ? "custom" : "center", m = null != (n = null != (i = null == T ? true : T.customOffset) ? i : c) ? n : 0, g = {
      position: null != (a = null == T ? true : T.position) ? a : (0, _.l8)(u),
      align: p,
      customOffset: "custom" === p ? m : true
    }, E = (0, r.jsxs)("div", {
      id: O,
      className: o()(h.YL, {
        [h.mj]: R
      }),
      role: "tooltip",
      "data-position": u,
      "data-mana-component": "tooltip",
      children: [(0, r.jsx)(f.z, {
        caretConfig: g
      }), (0, r.jsx)("div", {
        className: h.rv,
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
  if (P) {
    let e = (0, l.Pv)(A, I),
      t = null != y ? y : a.current;
    return (0, r.jsx)(l.Ow, {
      className: h.BM,
      open: n,
      spacing: S,
      placement: e,
      reference: t,
      renderLayer: e => {
        var t;
        let {
          placement: n,
          shift: r
        } = e, i = -(null != (t = null == r ? true : r.x) ? t : 0);
        return L({
          position: (0, l.$Y)(n),
          nudge: i
        })
      },
      children: () => null
    })
  }
  let x = (0, r.jsx)(d.QCO, {
    targetRef: null != b ? b : a,
    position: A,
    align: D,
    spacing: S,
    positionKey: w,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    children: L
  });
  return null != C ? (0, r.jsx)(c.Wdr, {
    layerContext: C,
    children: x
  }) : x
}