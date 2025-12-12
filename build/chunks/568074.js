/** Chunk was on 384 **/
/** chunk id: 568074, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => i
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk944537 = require("./944537.js");

function i(e) {
  let t = (0, r.n)(t => t.editStateIdsForGroup[e]),
    n = (0, r.n)(e => e.listings);
  if (null == t) returnfalse;
  let i = Object.keys(n),
    l = t.every(e => i.includes(e)),
    s = Object.entries(n).filter(e => {
      let [n] = e;
      return null == t ? true : t.includes(n)
    }).flatMap(e => null == e[1] || Object.values(e[1]).every(e => null == e || "" === e));
  return !l || s.includes(true)
}