/** Chunk was on 91394 **/
/** chunk id: 484036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk347469 = require("./347469.js"),
  Chunk340669 = require("./340669.js");

function c(e) {
  let {
    resizableNode: t,
    minHeight: n,
    onResize: l
  } = e, r = (0, s.Z)({
    minDimension: n,
    resizableDomNodeRef: t,
    onElementResize: l,
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
  } = e, d = l.useRef(null), [u, m] = l.useState(r);
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
      className: i()(o.subPanelContent, n),
      children: t
    })]
  })
}