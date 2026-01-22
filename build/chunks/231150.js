/** Chunk was on 82220 **/
/** chunk id: 231150, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./321073.js"), require("./896048.js");
var Chunk95701 = require("./95701.js");

function a(e) {
  let t = [];
  for (let n = 0; n < e._categories.length; n++) {
    let a = e._categories[n].channel,
      r = e[a.id].map(e => e.channel).filter(e => i.kr.has(e.type));
    if (null != r && 0 !== r.length)
      for (let e of ("null" !== a.id && t.push(a), r)) t.push(e)
  }
  return t
}