/** Chunk was on web.js **/
/** chunk id: 734298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./539854.js"), require("./388685.js");
var Chunk46973 = require("./46973.js"),
  Chunk198274 = require("./198274.js");

function a(e) {
  let t = false;
  e.on(r.aB.Destroy, () => t = true);
  let n = async () => {
    if (t) return;
    let a = [];
    e.eachConnection(e => a.push({
      connection: e,
      stats: e.emitStats()
    }));
    let o = [];
    for (let e of a) {
      let t = await e.stats;
      null != t && o.push({
        connection: e.connection,
        stats: t
      })
    }
    e.emit(r.aB.ConnectionStats, o), setTimeout(n, i.T)
  };
  setTimeout(n, i.T)
}