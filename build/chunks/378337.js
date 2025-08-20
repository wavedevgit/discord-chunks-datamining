/** Chunk was on 95257 **/
/** chunk id: 378337, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./539854.js"), require("./388685.js");
var Chunk131704 = require("./131704.js");

function a(e) {
  let n = [];
  for (let t = 0; t < e._categories.length; t++) {
    let a = e._categories[t].channel,
      i = e[a.id].map(e => e.channel).filter(e => l.iR.has(e.type));
    if (null != i && 0 !== i.length)
      for (let e of ("null" !== a.id && n.push(a), i)) n.push(e)
  }
  return n
}