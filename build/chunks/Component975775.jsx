/** Chunk was on 84249 **/
/** chunk id: 975775, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk347469 = require("./347469.js"),
  Chunk880230 = require("./880230.js");

function c(e) {
  let {
    resizableNode: t,
    minHeight: n,
    onResize: r
  } = e, i = (0, s.Z)({
    minDimension: n,
    resizableDomNodeRef: t,
    onElementResize: r,
    orientation: s.y.VERTICAL_TOP,
    usePointerEvents: true
  });
  return (0, a.jsx)("div", {
    onPointerDown: i,
    className: o.resizeHandle
  })
}

function d(e) {
  let {
    children: t,
    className: n,
    initialHeight: i,
    minHeight: s
  } = e, d = r.useRef(null), [u, m] = r.useState(i);
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