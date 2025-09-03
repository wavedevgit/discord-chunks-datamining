/** Chunk was on 74449 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk403239 = require("./403239.js"),
  Chunk781040 = require("./781040.jsx"),
  Chunk840367 = require("./840367.jsx"),
  Chunk415734 = require("./415734.js");

function p(e) {
  let {
    userId: t,
    widget: r,
    children: l,
    disableInteraction: p,
    className: O,
    index: y,
    trailingContent: j
  } = e, v = (0, s.Dt)(), x = (0, c.e7)([u.default], () => u.default.getId() === t), h = i.useRef(null), w = i.useRef(null), P = x && null != y && !p, {
    isDragging: S
  } = (0, d.q)({
    dropRef: h,
    dragRef: w,
    userId: t,
    widget: r,
    index: y,
    disableInteraction: !P
  }), [E, I] = i.useState(false);
  return (0, n.jsx)(m, {
    ref: h,
    disableInteraction: !P,
    onMouseEnter: () => I(true),
    onMouseLeave: () => I(false),
    children: (0, n.jsxs)("section", {
      className: a()(b.container, O, {
        [b.isDragging]: S
      }),
      "aria-labelledby": v,
      children: [P && (0, n.jsx)(f.Z, {
        buttonRef: w,
        widget: r,
        className: a()(b.dragHandleButton, {
          [b.opacity]: E || S
        })
      }), (0, n.jsx)(g.Z, {
        userId: t,
        headingId: v,
        widget: r,
        disableInteraction: p
      }), (0, n.jsxs)(o.y5, {
        children: [l, j]
      })]
    })
  })
}
let m = e => {
  let {
    ref: t,
    children: r,
    disableInteraction: i,
    onMouseEnter: l,
    onMouseLeave: a
  } = e;
  return i ? r : (0, n.jsx)("div", {
    ref: t,
    className: b.dragAndDropHitbox,
    onMouseEnter: l,
    onMouseLeave: a,
    children: r
  })
}