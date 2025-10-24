/** Chunk was on 3091 **/
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
  Chunk34335 = require("./34335.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk415734 = require("./415734.js");

function v(e) {
  let {
    userId: t,
    widget: n,
    children: a,
    disableInteraction: h,
    className: v,
    index: O,
    trailingContent: x,
    headerTitle: _,
    headerSubtitle: P,
    headerActionButtons: I,
    dragHandleAdditionalMenuItems: w
  } = e, S = (0, s.Dt)(), E = (0, c.e7)([u.default], () => u.default.getId() === t), T = i.useRef(null), {
    registerManageWidgetButtonRef: C,
    manageFocusOnReorder: D
  } = (0, b.j)(), N = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = C(n.type);
    return e(N.current), () => e(null)
  }, [C, n.type]);
  let {
    trackUserProfileAction: A
  } = (0, d.KZ)(), k = (0, g.Z)({
    widgetType: n.type,
    onAction: A
  }), Z = E && null != O && !h, {
    isDragging: R,
    dragSourcePosition: L
  } = (0, f.q)({
    dropRef: T,
    dragRef: N,
    userId: t,
    widget: n,
    index: O,
    disableInteraction: !Z,
    onReorder: () => D(n.type)
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
      className: l()(y.container, v, {
        [y.isDragging]: R
      }),
      "aria-labelledby": S,
      children: [Z && (0, r.jsx)(p.Z, {
        buttonRef: N,
        widget: n,
        className: l()(y.dragHandleButton, {
          [y.opacity]: G || R
        }),
        additionalMenuItems: w
      }), (0, r.jsx)(m.Z, {
        userId: t,
        headingId: S,
        title: _,
        subtitle: P,
        actionButtons: I,
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
    dragSourcePosition: c,
    index: s
  } = e, u = null != c, d = u && s < c, f = u && s > c;
  return i ? n : (0, r.jsx)("div", {
    ref: t,
    className: l()(y.dragAndDropHitbox, {
      [y.dropIndicatorBefore]: d,
      [y.dropIndicatorAfter]: f
    }),
    onMouseEnter: a,
    onMouseLeave: o,
    "aria-label": h.intl.formatToPlainString(h.t.YLczh4, {
      positionNumber: s + 1
    }),
    children: n
  })
}