/** Chunk was on 13859 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    children: o,
    disableInteraction: m,
    className: y,
    index: x,
    trailingContent: h,
    headerTitle: v,
    headerSubtitle: _,
    headerActionButtons: w,
    dragHandleAdditionalMenuItems: P
  } = e, E = (0, s.Dt)(), I = (0, c.e7)([u.default], () => u.default.getId() === t), S = i.useRef(null), T = i.useRef(null), {
    trackUserProfileAction: D
  } = (0, d.KZ)(), N = (0, g.Z)({
    widgetType: r.type,
    onAction: D
  }), k = I && null != x && !m, {
    isDragging: C,
    dragSourcePosition: Z
  } = (0, f.q)({
    dropRef: S,
    dragRef: T,
    userId: t,
    widget: r,
    index: x,
    disableInteraction: !k
  }), [A, R] = i.useState(false);
  return (0, n.jsx)(j, {
    ref: S,
    disableInteraction: !k,
    onMouseEnter: () => R(true),
    onMouseLeave: () => R(false),
    dragSourcePosition: Z,
    index: null != x ? x : 0,
    children: (0, n.jsxs)("section", {
      ref: N,
      className: a()(O.container, y, {
        [O.isDragging]: C
      }),
      "aria-labelledby": E,
      children: [k && (0, n.jsx)(p.Z, {
        buttonRef: T,
        widget: r,
        className: a()(O.dragHandleButton, {
          [O.opacity]: A || C
        }),
        additionalMenuItems: P
      }), (0, n.jsx)(b.Z, {
        userId: t,
        headingId: E,
        title: v,
        subtitle: _,
        actionButtons: w,
        widget: r,
        disableInteraction: m
      }), (0, n.jsxs)(l.y5t, {
        children: [o, h]
      })]
    })
  })
}
let j = e => {
  let {
    ref: t,
    children: r,
    disableInteraction: i,
    onMouseEnter: o,
    onMouseLeave: l,
    dragSourcePosition: c,
    index: s
  } = e, u = null != c, d = u && s < c, f = u && s > c;
  return i ? r : (0, n.jsx)("div", {
    ref: t,
    className: a()(O.dragAndDropHitbox, {
      [O.dropIndicatorBefore]: d,
      [O.dropIndicatorAfter]: f
    }),
    onMouseEnter: o,
    onMouseLeave: l,
    "aria-label": m.intl.formatToPlainString(m.t.YLczh4, {
      positionNumber: s + 1
    }),
    children: r
  })
}