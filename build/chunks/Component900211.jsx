/** Chunk was on 81985 **/
/** chunk id: 900211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk347469 = require("./347469.js"),
  Chunk799979 = require("./799979.js");

function o(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: o,
    minHeight: s,
    maxHeight: c
  } = e, [u, d] = i.useState(null);
  i.useEffect(() => {
    var e, n;
    d(null != (n = null == (e = t.current) ? true : e.offsetHeight) ? n : null)
  }, [t]);
  let p = (0, l.Z)({
    initialElementDimension: u,
    minDimension: s,
    maxDimension: c,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: o,
    orientation: l.y.VERTICAL_BOTTOM
  });
  return (0, r.jsx)("div", {
    onMouseDown: p,
    className: a.resizeHandle
  })
}