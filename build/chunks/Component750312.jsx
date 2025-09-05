/** Chunk was on 1267 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk403239 = require("./403239.js"),
  Chunk982072 = require("./982072.js"),
  Chunk781040 = require("./781040.jsx"),
  Chunk840367 = require("./840367.jsx"),
  Chunk415734 = require("./415734.js");

function y(e) {
  let {
    userId: t,
    widget: r,
    children: l,
    disableInteraction: y,
    className: m,
    index: v,
    trailingContent: x,
    headerTitle: h,
    headerSubtitle: w,
    headerActionButtons: P
  } = e, E = (0, s.Dt)(), S = (0, c.e7)([u.default], () => u.default.getId() === t), I = i.useRef(null), T = i.useRef(null), {
    trackUserProfileAction: D
  } = (0, d.KZ)(), _ = (0, g.Z)({
    widgetType: r.type,
    onAction: D
  }), N = S && null != v && !y, {
    isDragging: k
  } = (0, f.q)({
    dropRef: I,
    dragRef: T,
    userId: t,
    widget: r,
    index: v,
    disableInteraction: !N
  }), [Z, A] = i.useState(false);
  return (0, n.jsx)(j, {
    ref: I,
    disableInteraction: !N,
    onMouseEnter: () => A(true),
    onMouseLeave: () => A(false),
    children: (0, n.jsxs)("section", {
      ref: _,
      className: o()(O.container, m, {
        [O.isDragging]: k
      }),
      "aria-labelledby": E,
      children: [N && (0, n.jsx)(b.Z, {
        buttonRef: T,
        widget: r,
        className: o()(O.dragHandleButton, {
          [O.opacity]: Z || k
        })
      }), (0, n.jsx)(p.Z, {
        userId: t,
        headingId: E,
        title: h,
        subtitle: w,
        actionButtons: P,
        widget: r,
        disableInteraction: y
      }), (0, n.jsxs)(a.y5, {
        children: [l, x]
      })]
    })
  })
}
let j = e => {
  let {
    ref: t,
    children: r,
    disableInteraction: i,
    onMouseEnter: l,
    onMouseLeave: o
  } = e;
  return i ? r : (0, n.jsx)("div", {
    ref: t,
    className: O.dragAndDropHitbox,
    onMouseEnter: l,
    onMouseLeave: o,
    children: r
  })
}