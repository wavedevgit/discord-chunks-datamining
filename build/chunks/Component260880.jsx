/** Chunk was on 65599 **/
/** chunk id: 260880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk761929 = require("./761929.js"),
  Chunk124070 = require("./124070.js");

function c(e) {
  let {
    resizableNode: t,
    minHeight: n,
    onResize: l
  } = e, r = (0, s.A)({
    minDimension: n,
    resizableDomNodeRef: t,
    onElementResize: l,
    orientation: s.R.VERTICAL_TOP,
    usePointerEvents: true
  });
  return (0, a.jsx)("div", {
    onPointerDown: r,
    className: o.Di
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
    className: o.kL,
    style: {
      minHeight: s,
      height: u
    },
    children: [(0, a.jsx)(c, {
      resizableNode: d,
      minHeight: s,
      onResize: m
    }), (0, a.jsx)("div", {
      className: i()(o.KZ, n),
      children: t
    })]
  })
}