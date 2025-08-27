/** Chunk was on web.js **/
/** chunk id: 110742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => a
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk580130 = require("./580130.js");

function a(e) {
  return (0, r.e7)([i.Z], () => {
    let t = i.Z.getForSku(e);
    if (null == t) returnfalse;
    let n = 0;
    for (let e of t) {
      var r, a;
      let t = null != (a = null == (r = e.endsAt) ? true : r.getTime()) ? a : 1 / 0;
      t >= n && (n = t)
    }
    return n > new Date().getTime()
  }, [e])
}