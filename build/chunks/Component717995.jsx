/** Chunk was on web.js **/
/** chunk id: 717995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
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

function b(e) {
  let {
    isVisible: t,
    isRendered: n = t,
    targetElementRef: a,
    targetElement: b,
    anchorRef: y,
    id: O,
    content: A,
    position: v = "top",
    align: S = "center",
    spacing: I = m,
    caretConfig: T,
    layerContext: C,
    animationStyle: N,
    positionKey: R
  } = e, {
    isRichTooltip: w
  } = (0, p.w6)(), P = (0, u.D)("Tooltip"), D = i.useMemo(() => ("left" === v || "right" === v ? E : g).includes(S) ? S : "center", [v, S]);
  if (!n) return null;
  let x = e => {
    var t, n, i, a;
    let {
      position: l,
      nudge: c
    } = e, u = null != l ? l : v, p = null != (t = null == T ? true : T.align) ? t : null != c && 0 !== c ? "custom" : "center", m = null != (n = null != (i = null == T ? true : T.customOffset) ? i : c) ? n : 0, g = {
      position: null != (a = null == T ? true : T.position) ? a : (0, _.l8)(u),
      align: p,
      customOffset: "custom" === p ? m : true
    }, E = (0, r.jsxs)("div", {
      id: O,
      className: s()(h.YL, {
        [h.mj]: w
      }),
      role: "tooltip",
      "data-position": u,
      "data-mana-component": "tooltip",
      children: [(0, r.jsx)(f.z, {
        caretConfig: g
      }), (0, r.jsx)("div", {
        className: h.rv,
        children: "string" == typeof A ? (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          children: A
        }) : A
      })]
    });
    return N ? (0, r.jsx)(o.animated.div, {
      style: N,
      children: E
    }) : E
  };
  if (P) {
    let e = (0, l.Pv)(v, S),
      t = null != b ? b : a.current;
    return (0, r.jsx)(l.Ow, {
      className: h.BM,
      open: n,
      spacing: I,
      placement: e,
      reference: t,
      renderLayer: e => {
        var t;
        let {
          placement: n,
          shift: r
        } = e, i = -(null != (t = null == r ? true : r.x) ? t : 0);
        return x({
          position: (0, l.$Y)(n),
          nudge: i
        })
      },
      children: () => null
    })
  }
  let L = (0, r.jsx)(d.QCO, {
    targetRef: null != y ? y : a,
    position: v,
    align: D,
    spacing: I,
    positionKey: R,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    children: x
  });
  return null != C ? (0, r.jsx)(c.Wdr, {
    layerContext: C,
    children: L
  }) : L
}