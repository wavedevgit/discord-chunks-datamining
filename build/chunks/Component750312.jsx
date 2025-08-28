/** Chunk was on 83789 **/
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
  Chunk471892 = require("./471892.jsx"),
  Chunk840367 = require("./840367.jsx"),
  Chunk272289 = require("./272289.jsx"),
  Chunk415734 = require("./415734.js");

function O(e) {
  let {
    userId: t,
    widget: r,
    children: l,
    disableInteraction: O,
    className: y,
    index: x
  } = e, v = (0, s.Dt)(), h = (0, c.e7)([u.default], () => u.default.getId() === t), {
    shouldShowSuggestions: _,
    handleDismissSuggestions: w
  } = (0, d.h)(r), P = h && !O && _, I = i.useRef(null), S = i.useRef(null), {
    isDragging: E
  } = (0, f.q)({
    dropRef: I,
    dragRef: S,
    userId: t,
    widget: r,
    index: x
  }), [T, N] = i.useState(false);
  return (0, n.jsx)(j, {
    ref: I,
    enable: !O,
    onMouseEnter: () => N(true),
    onMouseLeave: () => N(false),
    dragClick: h && (0, n.jsx)("div", {
      ref: S,
      className: a()(m.dragClick, {
        [m.opacity]: T || E
      }),
      children: (0, n.jsx)(g.Z, {
        widget: r
      })
    }),
    children: (0, n.jsxs)("section", {
      className: a()(m.container, y, {
        [m.isDragging]: E
      }),
      "aria-labelledby": v,
      children: [(0, n.jsx)(p.Z, {
        userId: t,
        headingId: v,
        widget: r,
        disableInteraction: O
      }), (0, n.jsxs)(o.y5, {
        children: [l, P && (0, n.jsx)(b.Z, {
          userId: t,
          widgetType: r.type,
          onDismiss: w,
          className: m.suggestedGames
        })]
      })]
    })
  })
}
let j = e => {
  let {
    ref: t,
    children: r,
    enable: i,
    onMouseEnter: l,
    onMouseLeave: a,
    dragClick: o
  } = e;
  return i ? (0, n.jsxs)("div", {
    ref: t,
    className: m.hitbox,
    onMouseEnter: l,
    onMouseLeave: a,
    children: [o, r]
  }) : r
}