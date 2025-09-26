/** Chunk was on 73696 **/
/** chunk id: 750312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk415734 = require("./415734.js");

function j(e) {
  let {
    userId: t,
    widget: n,
    children: a,
    disableInteraction: s,
    className: O,
    index: j,
    trailingContent: v,
    headerTitle: x,
    headerSubtitle: _,
    headerActionButtons: P,
    dragHandleAdditionalMenuItems: w
  } = e, I = (0, u.Dt)(), E = (0, c.e7)([d.default], () => d.default.getId() === t), S = i.useRef(null), T = i.useRef(null), {
    trackUserProfileAction: D
  } = (0, f.KZ)(), N = (0, p.Z)({
    widgetType: n.type,
    onAction: D
  }), A = E && null != j && !s, {
    isDragging: k,
    dragSourcePosition: C
  } = (0, g.q)({
    dropRef: S,
    dragRef: T,
    userId: t,
    widget: n,
    index: j,
    disableInteraction: !A
  }), [R, Z] = i.useState(false);
  return (0, r.jsx)(h, {
    ref: S,
    disableInteraction: !A,
    onMouseEnter: () => Z(true),
    onMouseLeave: () => Z(false),
    dragSourcePosition: C,
    index: null != j ? j : 0,
    children: (0, r.jsxs)("section", {
      ref: N,
      className: o()(y.container, O, {
        [y.isDragging]: k
      }),
      "aria-labelledby": I,
      children: [A && (0, r.jsx)(b.Z, {
        buttonRef: T,
        widget: n,
        className: o()(y.dragHandleButton, {
          [y.opacity]: R || k
        }),
        additionalMenuItems: w
      }), (0, r.jsx)(m.Z, {
        userId: t,
        headingId: I,
        title: x,
        subtitle: _,
        actionButtons: P,
        widget: n,
        disableInteraction: s
      }), (0, r.jsxs)(l.y5t, {
        children: [a, v]
      })]
    })
  })
}
let h = e => {
  let {
    ref: t,
    children: n,
    disableInteraction: i,
    onMouseEnter: a,
    onMouseLeave: l,
    dragSourcePosition: c,
    index: u
  } = e, d = (0, s.zPA)() && null != c, f = d && u < c, g = d && u > c;
  return i ? n : (0, r.jsx)("div", {
    ref: t,
    className: o()(y.dragAndDropHitbox, {
      [y.dropIndicatorBefore]: f,
      [y.dropIndicatorAfter]: g
    }),
    onMouseEnter: a,
    onMouseLeave: l,
    "aria-label": O.intl.formatToPlainString(O.t.YLczh4, {
      positionNumber: u + 1
    }),
    children: n
  })
}