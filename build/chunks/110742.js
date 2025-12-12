/** Chunk was on web.js **/
/** chunk id: 110742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk580130 = require("./580130.js");

function o(e) {
  return (0, r.e7)([i.Z], () => {
    let t = i.Z.getForSku(e);
    if (null == t) returnfalse;
    let n = 0;
    for (let e of t) {
      var r, o;
      let t = null != (o = null == (r = e.endsAt) ? true : r.getTime()) ? o : 1 / 0;
      t >= n && (n = t)
    }
    return n > new Date().getTime()
  }, [e])
}