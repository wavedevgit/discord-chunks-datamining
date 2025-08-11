/** Chunk was on web.js **/
/** chunk id: 856985, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk633302 = require("./633302.js");
let i = e => {
  let t = new Map;
  for (let i of e) {
    var n;
    if (null != i.id) {
      t.set(i.id, i);
      continue
    }
    let e = null != (n = r.ZP.convertSurrogateToBase(i.surrogates)) ? n : i;
    t.set(e.name, e)
  }
  return t
}