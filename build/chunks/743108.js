/** Chunk was on web.js **/
/** chunk id: 743108, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk810498 = require("./810498.js");

function a(e) {
  return r.useMemo(() => {
    var t;
    if (null == e) return;
    let n = e.colors;
    if (null != n && !(n.length < 2)) return (0, i.K5)({
      gradient: n,
      angle: null != (t = e.angle) ? t : true
    })
  }, [e])
}