/** Chunk was on 61149 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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

function y(e) {
  let {
    userId: t,
    widget: r,
    children: o,
    disableInteraction: y,
    className: j,
    index: v
  } = e, x = (0, s.Dt)(), h = (0, c.e7)([u.default], () => u.default.getId() === t), {
    shouldShowSuggestions: w,
    handleDismissSuggestions: P
  } = (0, d.h)(r), _ = h && !y && w, S = a.useRef(null), I = a.useRef(null), C = h && null != v && !y, {
    isDragging: E
  } = (0, f.q)({
    dropRef: S,
    dragRef: I,
    userId: t,
    widget: r,
    index: v,
    disableInteraction: !C
  }), [k, D] = a.useState(false);
  return (0, n.jsx)(O, {
    ref: S,
    disableInteraction: !C,
    onMouseEnter: () => D(true),
    onMouseLeave: () => D(false),
    children: (0, n.jsxs)("section", {
      className: i()(m.container, j, {
        [m.isDragging]: E
      }),
      "aria-labelledby": x,
      children: [C && (0, n.jsx)(g.Z, {
        buttonRef: I,
        widget: r,
        className: i()(m.dragHandleButton, {
          [m.opacity]: k || E
        })
      }), (0, n.jsx)(b.Z, {
        userId: t,
        headingId: x,
        widget: r,
        disableInteraction: y
      }), (0, n.jsxs)(l.y5, {
        children: [o, _ && (0, n.jsx)(p.Z, {
          userId: t,
          widgetType: r.type,
          onDismiss: P,
          className: m.suggestedGames
        })]
      })]
    })
  })
}
let O = e => {
  let {
    ref: t,
    children: r,
    disableInteraction: a,
    onMouseEnter: o,
    onMouseLeave: i
  } = e;
  return a ? r : (0, n.jsx)("div", {
    ref: t,
    className: m.dragAndDropHitbox,
    onMouseEnter: o,
    onMouseLeave: i,
    children: r
  })
}