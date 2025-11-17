/** Chunk was on web.js **/
/** chunk id: 994427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk409813 = require("./409813.js"),
  Chunk45572 = require("./45572.js");

function o(e) {
  let [t, n] = r.useState(a.A.WAITING);
  return r.useEffect(() => {
    null != e && e !== i.h8.REVIEW && t !== a.A.WAITING && t !== a.A.COMPLETED && n(a.A.WAITING)
  }, [e, t, n]), [t, n]
}