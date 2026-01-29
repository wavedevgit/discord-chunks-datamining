/** Chunk was on 1113 **/
/** chunk id: 587837, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk761929 = require("./761929.js"),
  Chunk423765 = require("./423765.js");

function a(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: a,
    minHeight: o,
    maxHeight: c
  } = e, [u, d] = l.useState(null);
  l.useEffect(() => {
    var e, n;
    d(null != (e = null == (n = t.current) ? true : n.offsetHeight) ? e : null)
  }, [t]);
  let h = (0, i.A)({
    initialElementDimension: u,
    minDimension: o,
    maxDimension: c,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: a,
    orientation: i.R.VERTICAL_BOTTOM
  });
  return (0, r.jsx)("div", {
    onMouseDown: h,
    className: s.D
  })
}