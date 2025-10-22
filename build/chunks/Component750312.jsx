/** Chunk was on 22325 **/
/** chunk id: 750312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  Chunk34335 = require("./34335.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546178 = require("./546178.js");

function y(e) {
  let {
    userId: t,
    widget: n,
    children: a,
    disableInteraction: h,
    className: y,
    index: O,
    trailingContent: x,
    headerTitle: _,
    headerSubtitle: I,
    headerActionButtons: P,
    dragHandleAdditionalMenuItems: w
  } = e, S = (0, c.Dt)(), E = (0, s.e7)([u.default], () => u.default.getId() === t), T = i.useRef(null), {
    registerManageWidgetButtonRef: C,
    manageFocusOnReorder: N
  } = (0, b.j)(), A = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = C(n.type);
    return e(A.current), () => e(null)
  }, [C, n.type]);
  let {
    trackUserProfileAction: D
  } = (0, d.KZ)(), k = (0, g.Z)({
    widgetType: n.type,
    onAction: D
  }), Z = E && null != O && !h, {
    isDragging: R,
    dragSourcePosition: L
  } = (0, f.q)({
    dropRef: T,
    dragRef: A,
    userId: t,
    widget: n,
    index: O,
    disableInteraction: !Z,
    onReorder: () => N(n.type)
  }), [G, B] = i.useState(false);
  return (0, r.jsx)(j, {
    ref: T,
    disableInteraction: !Z,
    onMouseEnter: () => B(true),
    onMouseLeave: () => B(false),
    dragSourcePosition: L,
    index: null != O ? O : 0,
    children: (0, r.jsxs)("section", {
      ref: k,
      className: l()(v.container, y, {
        [v.isDragging]: R
      }),
      "aria-labelledby": S,
      children: [Z && (0, r.jsx)(p.Z, {
        buttonRef: A,
        widget: n,
        className: l()(v.dragHandleButton, {
          [v.opacity]: G || R
        }),
        additionalMenuItems: w
      }), (0, r.jsx)(m.Z, {
        userId: t,
        headingId: S,
        title: _,
        subtitle: I,
        actionButtons: P,
        widget: n,
        disableInteraction: h
      }), (0, r.jsxs)(o.y5t, {
        children: [a, x]
      })]
    })
  })
}
let j = e => {
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
    className: l()(v.dragAndDropHitbox, {
      [v.dropIndicatorBefore]: d,
      [v.dropIndicatorAfter]: f
    }),
    onMouseEnter: a,
    onMouseLeave: o,
    "aria-label": h.intl.formatToPlainString(h.t.YLczh4, {
      positionNumber: c + 1
    }),
    children: n
  })
}