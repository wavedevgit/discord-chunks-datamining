/** Chunk was on 22325 **/
/** chunk id: 750312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function v(e) {
  let {
    userId: t,
    widget: n,
    children: a,
    disableInteraction: b,
    className: v,
    index: j,
    trailingContent: O,
    headerTitle: x,
    headerSubtitle: _,
    headerActionButtons: I,
    dragHandleAdditionalMenuItems: P
  } = e, w = (0, c.Dt)(), S = (0, s.e7)([u.default], () => u.default.getId() === t), E = i.useRef(null), T = i.useRef(null), {
    trackUserProfileAction: C
  } = (0, d.KZ)(), N = (0, g.Z)({
    widgetType: n.type,
    onAction: C
  }), A = S && null != j && !b, {
    isDragging: D,
    dragSourcePosition: k
  } = (0, f.q)({
    dropRef: E,
    dragRef: T,
    userId: t,
    widget: n,
    index: j,
    disableInteraction: !A
  }), [Z, R] = i.useState(false);
  return (0, r.jsx)(y, {
    ref: E,
    disableInteraction: !A,
    onMouseEnter: () => R(true),
    onMouseLeave: () => R(false),
    dragSourcePosition: k,
    index: null != j ? j : 0,
    children: (0, r.jsxs)("section", {
      ref: N,
      className: l()(h.container, v, {
        [h.isDragging]: D
      }),
      "aria-labelledby": w,
      children: [A && (0, r.jsx)(p.Z, {
        buttonRef: T,
        widget: n,
        className: l()(h.dragHandleButton, {
          [h.opacity]: Z || D
        }),
        additionalMenuItems: P
      }), (0, r.jsx)(m.Z, {
        userId: t,
        headingId: w,
        title: x,
        subtitle: _,
        actionButtons: I,
        widget: n,
        disableInteraction: b
      }), (0, r.jsxs)(o.y5t, {
        children: [a, O]
      })]
    })
  })
}
let y = e => {
  let {
    ref: t,
    children: n,
    disableInteraction: i,
    onMouseEnter: a,
    onMouseLeave: o,
    dragSourcePosition: s,
    index: c
  } = e, u = null != s, d = u && c < s, f = u && c > s;
  return i ? n : (0, r.jsx)("div", {
    ref: t,
    className: l()(h.dragAndDropHitbox, {
      [h.dropIndicatorBefore]: d,
      [h.dropIndicatorAfter]: f
    }),
    onMouseEnter: a,
    onMouseLeave: o,
    "aria-label": b.intl.formatToPlainString(b.t.YLczh4, {
      positionNumber: c + 1
    }),
    children: n
  })
}