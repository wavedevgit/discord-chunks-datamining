/** Chunk was on 75962 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk415734 = require("./415734.js");

function j(e) {
  let {
    userId: t,
    widget: r,
    children: o,
    disableInteraction: s,
    className: m,
    index: j,
    trailingContent: h,
    headerTitle: x,
    headerSubtitle: _,
    headerActionButtons: w,
    dragHandleAdditionalMenuItems: P
  } = e, E = (0, u.Dt)(), I = (0, c.e7)([d.default], () => d.default.getId() === t), S = i.useRef(null), T = i.useRef(null), {
    trackUserProfileAction: D
  } = (0, f.KZ)(), k = (0, p.Z)({
    widgetType: r.type,
    onAction: D
  }), N = I && null != j && !s, {
    isDragging: C,
    dragSourcePosition: A
  } = (0, g.q)({
    dropRef: S,
    dragRef: T,
    userId: t,
    widget: r,
    index: j,
    disableInteraction: !N
  }), [Z, R] = i.useState(false);
  return (0, n.jsx)(v, {
    ref: S,
    disableInteraction: !N,
    onMouseEnter: () => R(true),
    onMouseLeave: () => R(false),
    dragSourcePosition: A,
    index: null != j ? j : 0,
    children: (0, n.jsxs)("section", {
      ref: k,
      className: a()(y.container, m, {
        [y.isDragging]: C
      }),
      "aria-labelledby": E,
      children: [N && (0, n.jsx)(b.Z, {
        buttonRef: T,
        widget: r,
        className: a()(y.dragHandleButton, {
          [y.opacity]: Z || C
        }),
        additionalMenuItems: P
      }), (0, n.jsx)(O.Z, {
        userId: t,
        headingId: E,
        title: x,
        subtitle: _,
        actionButtons: w,
        widget: r,
        disableInteraction: s
      }), (0, n.jsxs)(l.y5t, {
        children: [o, h]
      })]
    })
  })
}
let v = e => {
  let {
    ref: t,
    children: r,
    disableInteraction: i,
    onMouseEnter: o,
    onMouseLeave: l,
    dragSourcePosition: c,
    index: u
  } = e, d = (0, s.zPA)() && null != c, f = d && u < c, g = d && u > c;
  return i ? r : (0, n.jsx)("div", {
    ref: t,
    className: a()(y.dragAndDropHitbox, {
      [y.dropIndicatorBefore]: f,
      [y.dropIndicatorAfter]: g
    }),
    onMouseEnter: o,
    onMouseLeave: l,
    "aria-label": m.intl.formatToPlainString(m.t.YLczh4, {
      positionNumber: u + 1
    }),
    children: r
  })
}