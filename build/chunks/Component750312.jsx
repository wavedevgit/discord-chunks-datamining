/** Chunk was on 30397 **/
/** chunk id: 750312, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function O(e) {
  let {
    userId: t,
    widget: r,
    children: o,
    disableInteraction: O,
    className: j,
    index: v
  } = e, x = (0, s.Dt)(), h = (0, c.e7)([u.default], () => u.default.getId() === t), {
    shouldShowSuggestions: w,
    handleDismissSuggestions: P
  } = (0, d.h)(r), _ = h && !O && w, S = a.useRef(null), I = a.useRef(null), k = h && null != v && !O, {
    isDragging: C
  } = (0, f.q)({
    dropRef: S,
    dragRef: I,
    userId: t,
    widget: r,
    index: v,
    disableInteraction: !k
  }), [E, N] = a.useState(false);
  return (0, n.jsx)(y, {
    ref: S,
    disableInteraction: !k,
    onMouseEnter: () => N(true),
    onMouseLeave: () => N(false),
    children: (0, n.jsxs)("section", {
      className: i()(m.container, j, {
        [m.isDragging]: C
      }),
      "aria-labelledby": x,
      children: [k && (0, n.jsx)(b.Z, {
        buttonRef: I,
        widget: r,
        className: i()(m.dragHandleButton, {
          [m.opacity]: E || C
        })
      }), (0, n.jsx)(g.Z, {
        userId: t,
        headingId: x,
        widget: r,
        disableInteraction: O
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
let y = e => {
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