/** Chunk was on web.js **/
/** chunk id: 70909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./321073.js"), require("./896048.js");
var Chunk205693 = require("./205693.js");

function i(e) {
  let t = false;
  e.on(r.bg.Destroy, () => t = true);
  let n = async () => {
    if (t) return;
    let i = [];
    e.eachConnection(e => i.push({
      connection: e,
      stats: e.emitStats()
    }));
    let a = [];
    for (let e of i) {
      let t = await e.stats;
      null != t && a.push({
        connection: e.connection,
        stats: t
      })
    }
    e.emit(r.bg.ConnectionStats, a), setTimeout(n, 1e3)
  };
  setTimeout(n, 1e3)
}
require("./618792.js")