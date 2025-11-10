/** Chunk was on 77678 **/
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
  Chunk546178 = require("./546178.js");

function v(e) {
  let {
    userId: t,
    widget: n,
    children: a,
    disableInteraction: h,
    className: v,
    index: j,
    trailingContent: x,
    headerTitle: _,
    headerSubtitle: P,
    headerActionButtons: I,
    dragHandleAdditionalMenuItems: w
  } = e, S = (0, s.Dt)(), E = (0, c.e7)([u.default], () => u.default.getId() === t), T = i.useRef(null), {
    registerManageWidgetButtonRef: C,
    manageFocusOnReorder: D
  } = (0, b.j)(), k = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = C(n.type);
    return e(k.current), () => e(null)
  }, [C, n.type]);
  let {
    trackUserProfileAction: N
  } = (0, d.KZ)(), A = (0, f.Z)({
    widgetType: n.type,
    onAction: N
  }), Z = E && null != j && !h, {
    isDragging: R,
    dragSourcePosition: G
  } = (0, g.q)({
    dropRef: T,
    dragRef: k,
    userId: t,
    widget: n,
    index: j,
    disableInteraction: !Z,
    onReorder: () => D(n.type)
  }), [L, B] = i.useState(false);
  return (0, r.jsx)(O, {
    ref: T,
    disableInteraction: !Z,
    onMouseEnter: () => B(true),
    onMouseLeave: () => B(false),
    dragSourcePosition: G,
    index: null != j ? j : 0,
    children: (0, r.jsxs)("section", {
      ref: A,
      className: l()(y.container, v, {
        [y.isDragging]: R
      }),
      "aria-labelledby": S,
      children: [Z && (0, r.jsx)(p.Z, {
        buttonRef: k,
        widget: n,
        className: l()(y.dragHandleButton, {
          [y.opacity]: L || R
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
let O = e => {
  let {
    ref: t,
    children: n,
    disableInteraction: i,
    onMouseEnter: a,
    onMouseLeave: o,
    dragSourcePosition: c,
    index: s
  } = e, u = null != c, d = u && s < c, g = u && s > c;
  return i ? n : (0, r.jsx)("div", {
    ref: t,
    className: l()(y.dragAndDropHitbox, {
      [y.dropIndicatorBefore]: d,
      [y.dropIndicatorAfter]: g
    }),
    onMouseEnter: a,
    onMouseLeave: o,
    "aria-label": h.intl.formatToPlainString(h.t.YLczh4, {
      positionNumber: s + 1
    }),
    children: n
  })
}