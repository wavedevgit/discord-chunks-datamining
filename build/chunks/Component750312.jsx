/** Chunk was on 1267 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk403239 = require("./403239.js"),
  Chunk982072 = require("./982072.js"),
  Chunk781040 = require("./781040.jsx"),
  Chunk840367 = require("./840367.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546178 = require("./546178.js");

function m(e) {
  let {
    userId: t,
    widget: r,
    children: l,
    disableInteraction: s,
    className: y,
    index: m,
    trailingContent: x,
    headerTitle: h,
    headerSubtitle: w,
    headerActionButtons: P
  } = e, E = (0, u.Dt)(), S = (0, c.e7)([d.default], () => d.default.getId() === t), I = i.useRef(null), D = i.useRef(null), {
    trackUserProfileAction: T
  } = (0, f.KZ)(), N = (0, b.Z)({
    widgetType: r.type,
    onAction: T
  }), k = S && null != m && !s, {
    isDragging: _,
    dragSourcePosition: Z
  } = (0, g.q)({
    dropRef: I,
    dragRef: D,
    userId: t,
    widget: r,
    index: m,
    disableInteraction: !k
  }), [A, C] = i.useState(false);
  return (0, n.jsx)(v, {
    ref: I,
    disableInteraction: !k,
    onMouseEnter: () => C(true),
    onMouseLeave: () => C(false),
    dragSourcePosition: Z,
    index: null != m ? m : 0,
    children: (0, n.jsxs)("section", {
      ref: N,
      className: o()(j.container, y, {
        [j.isDragging]: _
      }),
      "aria-labelledby": E,
      children: [k && (0, n.jsx)(p.Z, {
        buttonRef: D,
        widget: r,
        className: o()(j.dragHandleButton, {
          [j.opacity]: A || _
        })
      }), (0, n.jsx)(O.Z, {
        userId: t,
        headingId: E,
        title: h,
        subtitle: w,
        actionButtons: P,
        widget: r,
        disableInteraction: s
      }), (0, n.jsxs)(a.y5t, {
        children: [l, x]
      })]
    })
  })
}
let v = e => {
  let {
    ref: t,
    children: r,
    disableInteraction: i,
    onMouseEnter: l,
    onMouseLeave: a,
    dragSourcePosition: c,
    index: u
  } = e, d = (0, s.zPA)() && null != c, f = d && u < c, g = d && u > c;
  return i ? r : (0, n.jsx)("div", {
    ref: t,
    className: o()(j.dragAndDropHitbox, {
      [j.dropIndicatorBefore]: f,
      [j.dropIndicatorAfter]: g
    }),
    onMouseEnter: l,
    onMouseLeave: a,
    "aria-label": y.intl.formatToPlainString(y.t.YLczh4, {
      positionNumber: u + 1
    }),
    children: r
  })
}