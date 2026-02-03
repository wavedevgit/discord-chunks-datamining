/** Chunk was on web.js **/
/** chunk id: 717995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => b
}), require("./896048.js");
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

function m(e, t, n) {
  var r, i;
  return null != (r = null != (i = null == e ? true : e.ownerDocument) ? i : null == t ? true : t.ownerDocument) ? r : null == n ? true : n.ownerDocument
}
let g = 11,
  E = ["left", "center", "right"],
  y = ["top", "center", "bottom"];

function b(e) {
  let {
    isVisible: t,
    isRendered: n = t,
    targetElementRef: a,
    targetElement: b,
    anchorRef: O,
    id: v,
    content: A,
    position: I = "top",
    align: S = "center",
    spacing: T = g,
    caretConfig: C,
    layerContext: N,
    animationStyle: w,
    positionKey: R
  } = e, {
    isRichTooltip: P
  } = (0, p.w6)(), D = (0, u.D)("Tooltip"), [L, x] = i.useState(null == b ? true : b.ownerDocument);
  i.useLayoutEffect(() => {
    x(m(null == O ? true : O.current, b, a.current))
  }, [O, b, a]);
  let M = i.useMemo(() => ("left" === I || "right" === I ? y : E).includes(S) ? S : "center", [I, S]);
  if (!n) return null;
  let j = e => {
    var t, n, i, a;
    let {
      position: l,
      nudge: c
    } = e, u = null != l ? l : I, p = null != (t = null == C ? true : C.align) ? t : null != c && 0 !== c ? "custom" : "center", m = null != (n = null != (i = null == C ? true : C.customOffset) ? i : c) ? n : 0, g = {
      position: null != (a = null == C ? true : C.position) ? a : (0, _.l8)(u),
      align: p,
      customOffset: "custom" === p ? m : true
    }, E = (0, r.jsxs)("div", {
      id: v,
      className: o()(h.YL, {
        [h.mj]: P
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
    return w ? (0, r.jsx)(s.animated.div, {
      style: w,
      children: E
    }) : E
  };
  if (D) {
    let e = (0, l.Pv)(I, S),
      t = null != b ? b : a.current;
    return (0, r.jsx)(l.Ow, {
      className: h.BM,
      open: n,
      spacing: T,
      placement: e,
      reference: t,
      ownerDocument: L,
      renderLayer: e => {
        var t;
        let {
          placement: n,
          shift: r
        } = e, i = -(null != (t = null == r ? true : r.x) ? t : 0);
        return j({
          position: (0, l.$Y)(n),
          nudge: i
        })
      },
      children: () => null
    })
  }
  let k = (0, r.jsx)(d.QCO, {
    targetRef: null != O ? O : a,
    position: I,
    align: M,
    spacing: T,
    positionKey: R,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    children: j
  });
  return null != N ? (0, r.jsx)(c.Wdr, {
    layerContext: N,
    children: k
  }) : k
}