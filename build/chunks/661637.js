/** Chunk was on web.js **/
/** chunk id: 661637, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./539854.js");
var Chunk633302 = require("./633302.js");

function i(e) {
  let t = [];
  return e.forEach(e => {
    let n = r.ZP.getByName(e);
    if (null != n && (t.push({
        src: n.url,
        colorize: false
      }), n.hasDiversity))
      for (let e in n.diversityChildren) {
        let r = n.diversityChildren[e];
        t.push({
          src: r.url,
          colorize: false
        })
      }
  }), t
}