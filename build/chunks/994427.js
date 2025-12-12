/** Chunk was on web.js **/
/** chunk id: 994427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js");

function a(e) {
  let [t, n] = r.useState(o.A.WAITING);
  return r.useEffect(() => {
    null != e && e !== i.h8.REVIEW && t !== o.A.WAITING && t !== o.A.COMPLETED && n(o.A.WAITING)
  }, [e, t, n]), [t, n]
}