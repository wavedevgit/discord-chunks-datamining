/** Chunk was on 36073 **/
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
  Chunk388032 = require("./388032.jsx"),
  Chunk415734 = require("./415734.js");

function y(e) {
  let {
    userId: t,
    widget: r,
    children: a,
    disableInteraction: m,
    className: y,
    index: x,
    trailingContent: h,
    headerTitle: v,
    headerSubtitle: _,
    headerActionButtons: w,
    dragHandleAdditionalMenuItems: P
  } = e, I = (0, s.Dt)(), S = (0, c.e7)([u.default], () => u.default.getId() === t), E = i.useRef(null), T = i.useRef(null), {
    trackUserProfileAction: D
  } = (0, d.KZ)(), k = (0, f.Z)({
    widgetType: r.type,
    onAction: D
  }), N = S && null != x && !m, {
    isDragging: C,
    dragSourcePosition: A
  } = (0, g.q)({
    dropRef: E,
    dragRef: T,
    userId: t,
    widget: r,
    index: x,
    disableInteraction: !N
  }), [Z, R] = i.useState(false);
  return (0, n.jsx)(j, {
    ref: E,
    disableInteraction: !N,
    onMouseEnter: () => R(true),
    onMouseLeave: () => R(false),
    dragSourcePosition: A,
    index: null != x ? x : 0,
    children: (0, n.jsxs)("section", {
      ref: k,
      className: o()(O.container, y, {
        [O.isDragging]: C
      }),
      "aria-labelledby": I,
      children: [N && (0, n.jsx)(p.Z, {
        buttonRef: T,
        widget: r,
        className: o()(O.dragHandleButton, {
          [O.opacity]: Z || C
        }),
        additionalMenuItems: P
      }), (0, n.jsx)(b.Z, {
        userId: t,
        headingId: I,
        title: v,
        subtitle: _,
        actionButtons: w,
        widget: r,
        disableInteraction: m
      }), (0, n.jsxs)(l.y5t, {
        children: [a, h]
      })]
    })
  })
}
let j = e => {
  let {
    ref: t,
    children: r,
    disableInteraction: i,
    onMouseEnter: a,
    onMouseLeave: l,
    dragSourcePosition: c,
    index: s
  } = e, u = null != c, d = u && s < c, g = u && s > c;
  return i ? r : (0, n.jsx)("div", {
    ref: t,
    className: o()(O.dragAndDropHitbox, {
      [O.dropIndicatorBefore]: d,
      [O.dropIndicatorAfter]: g
    }),
    onMouseEnter: a,
    onMouseLeave: l,
    "aria-label": m.intl.formatToPlainString(m.t.YLczh4, {
      positionNumber: s + 1
    }),
    children: r
  })
}