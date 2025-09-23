/** Chunk was on 37690 **/
/** chunk id: 750312, original params: e,t,n (module,exports,require) **/
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
  Chunk546178 = require("./546178.js");

function j(e) {
  let {
    userId: t,
    widget: n,
    children: o,
    disableInteraction: s,
    className: O,
    index: j,
    trailingContent: h,
    headerTitle: x,
    headerSubtitle: P,
    headerActionButtons: _
  } = e, w = (0, u.Dt)(), E = (0, c.e7)([d.default], () => d.default.getId() === t), I = i.useRef(null), S = i.useRef(null), {
    trackUserProfileAction: T
  } = (0, f.KZ)(), D = (0, p.Z)({
    widgetType: n.type,
    onAction: T
  }), N = E && null != j && !s, {
    isDragging: A,
    dragSourcePosition: k
  } = (0, g.q)({
    dropRef: I,
    dragRef: S,
    userId: t,
    widget: n,
    index: j,
    disableInteraction: !N
  }), [C, R] = i.useState(false);
  return (0, r.jsx)(v, {
    ref: I,
    disableInteraction: !N,
    onMouseEnter: () => R(true),
    onMouseLeave: () => R(false),
    dragSourcePosition: k,
    index: null != j ? j : 0,
    children: (0, r.jsxs)("section", {
      ref: D,
      className: a()(y.container, O, {
        [y.isDragging]: A
      }),
      "aria-labelledby": w,
      children: [N && (0, r.jsx)(b.Z, {
        buttonRef: S,
        widget: n,
        className: a()(y.dragHandleButton, {
          [y.opacity]: C || A
        })
      }), (0, r.jsx)(m.Z, {
        userId: t,
        headingId: w,
        title: x,
        subtitle: P,
        actionButtons: _,
        widget: n,
        disableInteraction: s
      }), (0, r.jsxs)(l.y5t, {
        children: [o, h]
      })]
    })
  })
}
let v = e => {
  let {
    ref: t,
    children: n,
    disableInteraction: i,
    onMouseEnter: o,
    onMouseLeave: l,
    dragSourcePosition: c,
    index: u
  } = e, d = (0, s.zPA)() && null != c, f = d && u < c, g = d && u > c;
  return i ? n : (0, r.jsx)("div", {
    ref: t,
    className: a()(y.dragAndDropHitbox, {
      [y.dropIndicatorBefore]: f,
      [y.dropIndicatorAfter]: g
    }),
    onMouseEnter: o,
    onMouseLeave: l,
    "aria-label": O.intl.formatToPlainString(O.t.YLczh4, {
      positionNumber: u + 1
    }),
    children: n
  })
}