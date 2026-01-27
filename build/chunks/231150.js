/** Chunk was on 82220 **/
/** chunk id: 231150, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./321073.js"), require("./896048.js");
var Chunk95701 = require("./95701.js");

function i(e) {
  let n = [];
  for (let t = 0; t < e._categories.length; t++) {
    let i = e._categories[t].channel,
      l = e[i.id].map(e => e.channel).filter(e => r.kr.has(e.type));
    if (null != l && 0 !== l.length)
      for (let e of ("null" !== i.id && n.push(i), l)) n.push(e)
  }
  return n
}