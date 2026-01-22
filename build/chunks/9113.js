/** Chunk was on web.js **/
/** chunk id: 9113, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk256311 = require("./256311.js");

function a(e) {
  r.useEffect(() => {
    if (null != e) return i.A.lockChangeLog(e), () => {
      i.A.unlockChangeLog(e)
    }
  }, [e])
}