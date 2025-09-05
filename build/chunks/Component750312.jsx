/** Chunk was on 74449 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk403239 = require("./403239.js"),
  Chunk781040 = require("./781040.jsx"),
  Chunk840367 = require("./840367.jsx"),
  Chunk415734 = require("./415734.js");

function g(e) {
  let {
    userId: t,
    widget: r,
    children: l,
    disableInteraction: g,
    className: y,
    index: j,
    trailingContent: m,
    headerTitle: v,
    headerSubtitle: h,
    headerActionButtons: x
  } = e, w = (0, s.Dt)(), P = (0, c.e7)([u.default], () => u.default.getId() === t), S = i.useRef(null), E = i.useRef(null), D = P && null != j && !g, {
    isDragging: I
  } = (0, d.q)({
    dropRef: S,
    dragRef: E,
    userId: t,
    widget: r,
    index: j,
    disableInteraction: !D
  }), [k, N] = i.useState(false);
  return (0, n.jsx)(O, {
    ref: S,
    disableInteraction: !D,
    onMouseEnter: () => N(true),
    onMouseLeave: () => N(false),
    children: (0, n.jsxs)("section", {
      className: o()(p.container, y, {
        [p.isDragging]: I
      }),
      "aria-labelledby": w,
      children: [D && (0, n.jsx)(f.Z, {
        buttonRef: E,
        widget: r,
        className: o()(p.dragHandleButton, {
          [p.opacity]: k || I
        })
      }), (0, n.jsx)(b.Z, {
        userId: t,
        headingId: w,
        title: v,
        subtitle: h,
        actionButtons: x,
        widget: r,
        disableInteraction: g
      }), (0, n.jsxs)(a.y5, {
        children: [l, m]
      })]
    })
  })
}
let O = e => {
  let {
    ref: t,
    children: r,
    disableInteraction: i,
    onMouseEnter: l,
    onMouseLeave: o
  } = e;
  return i ? r : (0, n.jsx)("div", {
    ref: t,
    className: p.dragAndDropHitbox,
    onMouseEnter: l,
    onMouseLeave: o,
    children: r
  })
}