/** Chunk was on 28532 **/
/** chunk id: 484036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk347469 = require("./347469.js"),
  Chunk340669 = require("./340669.js");

function c(e) {
  let {
    resizableNode: t,
    minHeight: n,
    onResize: i
  } = e, r = (0, s.Z)({
    minDimension: n,
    resizableDomNodeRef: t,
    onElementResize: i,
    orientation: s.y.VERTICAL_TOP,
    usePointerEvents: true
  });
  return (0, a.jsx)("div", {
    onPointerDown: r,
    className: o.resizeHandle
  })
}

function d(e) {
  let {
    children: t,
    className: n,
    initialHeight: r,
    minHeight: s
  } = e, d = i.useRef(null), [u, m] = i.useState(r);
  return (0, a.jsxs)("div", {
    ref: d,
    className: o.container,
    style: {
      minHeight: s,
      height: u
    },
    children: [(0, a.jsx)(c, {
      resizableNode: d,
      minHeight: s,
      onResize: m
    }), (0, a.jsx)("div", {
      className: l()(o.subPanelContent, n),
      children: t
    })]
  })
}