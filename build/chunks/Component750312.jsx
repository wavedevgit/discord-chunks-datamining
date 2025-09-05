/** Chunk was on 1267 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
  Chunk546178 = require("./546178.js");

function p(e) {
  let {
    userId: t,
    widget: r,
    children: l,
    disableInteraction: p,
    className: y,
    index: j,
    trailingContent: m,
    headerTitle: v,
    headerSubtitle: x,
    headerActionButtons: h
  } = e, w = (0, s.Dt)(), P = (0, c.e7)([u.default], () => u.default.getId() === t), E = i.useRef(null), S = i.useRef(null), I = P && null != j && !p, {
    isDragging: T
  } = (0, d.q)({
    dropRef: E,
    dragRef: S,
    userId: t,
    widget: r,
    index: j,
    disableInteraction: !I
  }), [D, _] = i.useState(false);
  return (0, n.jsx)(O, {
    ref: E,
    disableInteraction: !I,
    onMouseEnter: () => _(true),
    onMouseLeave: () => _(false),
    children: (0, n.jsxs)("section", {
      className: o()(b.container, y, {
        [b.isDragging]: T
      }),
      "aria-labelledby": w,
      children: [I && (0, n.jsx)(f.Z, {
        buttonRef: S,
        widget: r,
        className: o()(b.dragHandleButton, {
          [b.opacity]: D || T
        })
      }), (0, n.jsx)(g.Z, {
        userId: t,
        headingId: w,
        title: v,
        subtitle: x,
        actionButtons: h,
        widget: r,
        disableInteraction: p
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
    className: b.dragAndDropHitbox,
    onMouseEnter: l,
    onMouseLeave: o,
    children: r
  })
}