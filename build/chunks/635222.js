/** Chunk was on web.js **/
/** chunk id: 635222, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk7584 = require("./7584.js");
let i = e => {
  let t = new Map;
  for (let i of e) {
    var n;
    if (null != i.id) {
      t.set(i.id, i);
      continue
    }
    let e = null != (n = r.Ay.convertSurrogateToBase(i.surrogates)) ? n : i;
    t.set(e.name, e)
  }
  return t
}