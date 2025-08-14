/** Chunk was on 93886 **/
/** chunk id: 484036, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk347469 = require("./347469.js"),
  Chunk340669 = require("./340669.js");

function c(e) {
  let {
    resizableNode: t,
    minHeight: a,
    onResize: r
  } = e, l = (0, s.Z)({
    minDimension: a,
    resizableDomNodeRef: t,
    onElementResize: r,
    orientation: s.y.VERTICAL_TOP,
    usePointerEvents: true
  });
  return (0, n.jsx)("div", {
    onPointerDown: l,
    className: o.resizeHandle
  })
}

function d(e) {
  let {
    children: t,
    className: a,
    initialHeight: l,
    minHeight: s
  } = e, d = r.useRef(null), [u, m] = r.useState(l);
  return (0, n.jsxs)("div", {
    ref: d,
    className: o.container,
    style: {
      minHeight: s,
      height: u
    },
    children: [(0, n.jsx)(c, {
      resizableNode: d,
      minHeight: s,
      onResize: m
    }), (0, n.jsx)("div", {
      className: i()(o.subPanelContent, a),
      children: t
    })]
  })
}