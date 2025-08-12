/** Chunk was on web.js **/
/** chunk id: 900211, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk347469 = require("./347469.js"),
  Chunk400258 = require("./400258.js");

function s(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: s,
    minHeight: l,
    maxHeight: c
  } = e, [u, d] = i.useState(null);
  i.useEffect(() => {
    var e, n;
    d(null != (n = null == (e = t.current) ? true : e.offsetHeight) ? n : null)
  }, [t]);
  let f = (0, o.Z)({
    initialElementDimension: u,
    minDimension: l,
    maxDimension: c,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: s,
    orientation: o.y.VERTICAL_BOTTOM
  });
  return (0, r.jsx)("div", {
    onMouseDown: f,
    className: a.resizeHandle
  })
}