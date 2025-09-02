/** Chunk was on 61149 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
    children: a,
    disableInteraction: O,
    className: j,
    index: x
  } = e, v = (0, s.Dt)(), h = (0, c.e7)([u.default], () => u.default.getId() === t), {
    shouldShowSuggestions: _,
    handleDismissSuggestions: P
  } = (0, d.h)(r), w = h && !O && _, I = i.useRef(null), S = i.useRef(null), T = h && null != x && !O, {
    isDragging: E
  } = (0, f.q)({
    dropRef: I,
    dragRef: S,
    userId: t,
    widget: r,
    index: x,
    disableInteraction: !T
  }), [N, k] = i.useState(false);
  return (0, n.jsx)(y, {
    ref: I,
    disableInteraction: !T,
    onMouseEnter: () => k(true),
    onMouseLeave: () => k(false),
    children: (0, n.jsxs)("section", {
      className: o()(m.container, j, {
        [m.isDragging]: E
      }),
      "aria-labelledby": v,
      children: [T && (0, n.jsx)(g.Z, {
        buttonRef: S,
        widget: r,
        className: o()(m.dragHandleButton, {
          [m.opacity]: N || E
        })
      }), (0, n.jsx)(b.Z, {
        userId: t,
        headingId: v,
        widget: r,
        disableInteraction: O
      }), (0, n.jsxs)(l.y5, {
        children: [a, w && (0, n.jsx)(p.Z, {
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
    onMouseEnter: a,
    onMouseLeave: o
  } = e;
  return i ? r : (0, n.jsx)("div", {
    ref: t,
    className: m.dragAndDropHitbox,
    onMouseEnter: a,
    onMouseLeave: o,
    children: r
  })
}