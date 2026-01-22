/** Chunk was on web.js **/
/** chunk id: 56754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => a
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk469778 = require("./469778.js");

function a(e) {
  return (0, r.bG)([i.A], () => {
    let t = i.A.getForSku(e);
    if (null == t) returnfalse;
    let n = 0;
    for (let e of t) {
      var r, a;
      let t = null != (r = null == (a = e.endsAt) ? true : a.getTime()) ? r : 1 / 0;
      t >= n && (n = t)
    }
    return n > new Date().getTime()
  }, [e])
}