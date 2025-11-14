/** Chunk was on 99904 **/
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
    onResize: r
  } = e, i = (0, o.Z)({
    minDimension: n,
    resizableDomNodeRef: t,
    onElementResize: r,
    orientation: o.y.VERTICAL_TOP,
    usePointerEvents: true
  });
  return (0, a.jsx)("div", {
    onPointerDown: i,
    className: s.resizeHandle
  })
}

function d(e) {
  let {
    children: t,
    className: n,
    initialHeight: i,
    minHeight: o
  } = e, d = r.useRef(null), [u, m] = r.useState(i);
  return (0, a.jsxs)("div", {
    ref: d,
    className: s.container,
    style: {
      minHeight: o,
      height: u
    },
    children: [(0, a.jsx)(c, {
      resizableNode: d,
      minHeight: o,
      onResize: m
    }), (0, a.jsx)("div", {
      className: l()(s.subPanelContent, n),
      children: t
    })]
  })
}