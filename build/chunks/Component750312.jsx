/** Chunk was on 18877 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk556045 = require("./556045.js"),
  Chunk403239 = require("./403239.js"),
  Chunk781040 = require("./781040.jsx"),
  Chunk840367 = require("./840367.jsx"),
  Chunk272289 = require("./272289.jsx"),
  Chunk415734 = require("./415734.js");

function O(e) {
  let {
    userId: t,
    widget: r,
    children: l,
    disableInteraction: O,
    className: j,
    index: v
  } = e, x = (0, s.Dt)(), h = (0, c.e7)([u.default], () => u.default.getId() === t), {
    shouldShowSuggestions: w,
    handleDismissSuggestions: P
  } = (0, d.h)(r), S = h && !O && w, E = i.useRef(null), I = i.useRef(null), D = h && null != v && !O, {
    isDragging: k
  } = (0, f.q)({
    dropRef: E,
    dragRef: I,
    userId: t,
    widget: r,
    index: v,
    disableInteraction: !D
  }), [N, Z] = i.useState(false);
  return (0, n.jsx)(y, {
    ref: E,
    disableInteraction: !D,
    onMouseEnter: () => Z(true),
    onMouseLeave: () => Z(false),
    children: (0, n.jsxs)("section", {
      className: a()(m.container, j, {
        [m.isDragging]: k
      }),
      "aria-labelledby": x,
      children: [D && (0, n.jsx)(g.Z, {
        buttonRef: I,
        widget: r,
        className: a()(m.dragHandleButton, {
          [m.opacity]: N || k
        })
      }), (0, n.jsx)(b.Z, {
        userId: t,
        headingId: x,
        widget: r,
        disableInteraction: O
      }), (0, n.jsxs)(o.y5, {
        children: [l, S && (0, n.jsx)(p.Z, {
          userId: t,
          widgetType: r.type,
          onDismiss: P,
          className: m.suggestedGames
        })]
      })]
    })
  })
}
let y = e => {
  let {
    ref: t,
    children: r,
    disableInteraction: i,
    onMouseEnter: l,
    onMouseLeave: a
  } = e;
  return i ? r : (0, n.jsx)("div", {
    ref: t,
    className: m.dragAndDropHitbox,
    onMouseEnter: l,
    onMouseLeave: a,
    children: r
  })
}