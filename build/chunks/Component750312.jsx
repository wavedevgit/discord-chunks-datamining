/** Chunk was on 8188 **/
/** chunk id: 750312, original params: e,t,n (module,exports,require) **/
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
    widget: n,
    children: l,
    disableInteraction: O,
    className: y,
    index: x
  } = e, v = (0, s.Dt)(), h = (0, c.e7)([u.default], () => u.default.getId() === t), {
    shouldShowSuggestions: _,
    handleDismissSuggestions: P
  } = (0, d.h)(n), w = h && !O && _, I = i.useRef(null), S = i.useRef(null), E = h && null != x && !O, {
    isDragging: T
  } = (0, f.q)({
    dropRef: I,
    dragRef: S,
    userId: t,
    widget: n,
    index: x,
    disableInteraction: !E
  }), [N, C] = i.useState(false);
  return (0, r.jsx)(j, {
    ref: I,
    disableInteraction: !E,
    onMouseEnter: () => C(true),
    onMouseLeave: () => C(false),
    children: (0, r.jsxs)("section", {
      className: a()(m.container, y, {
        [m.isDragging]: T
      }),
      "aria-labelledby": v,
      children: [E && (0, r.jsx)(g.Z, {
        buttonRef: S,
        widget: n,
        className: a()(m.dragHandleButton, {
          [m.opacity]: N || T
        })
      }), (0, r.jsx)(b.Z, {
        userId: t,
        headingId: v,
        widget: n,
        disableInteraction: O
      }), (0, r.jsxs)(o.y5, {
        children: [l, w && (0, r.jsx)(p.Z, {
          userId: t,
          widgetType: n.type,
          onDismiss: P,
          className: m.suggestedGames
        })]
      })]
    })
  })
}
let j = e => {
  let {
    ref: t,
    children: n,
    disableInteraction: i,
    onMouseEnter: l,
    onMouseLeave: a
  } = e;
  return i ? n : (0, r.jsx)("div", {
    ref: t,
    className: m.dragAndDropHitbox,
    onMouseEnter: l,
    onMouseLeave: a,
    children: n
  })
}