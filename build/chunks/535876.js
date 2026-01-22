/** Chunk was on 47841 **/
/** chunk id: 535876, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => i
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk846922 = require("./846922.js");

function i(e) {
  let t = (0, r.y)(t => t.editStateIdsForGroup[e]),
    n = (0, r.y)(e => e.listings);
  if (null == t) returnfalse;
  let i = Object.keys(n),
    l = t.every(e => i.includes(e)),
    s = Object.entries(n).filter(e => {
      let [n] = e;
      return null == t ? true : t.includes(n)
    }).flatMap(e => null == e[1] || Object.values(e[1]).every(e => null == e || "" === e));
  return !l || s.includes(true)
}