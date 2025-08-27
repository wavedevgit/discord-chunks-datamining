/** Chunk was on web.js **/
/** chunk id: 628309, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => o
}), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk411149 = require("./411149.js");

function o() {
  let e = (0, Chunk442837.Wu)([Chunk411149.Z], () => Chunk411149.Z.wallpapers);
  return Chunk647438.useMemo(() => module.reduce((e, t) => {
    var n, r, i;
    return null != (i = (n = e)[r = t.designGroupId]) || (n[r] = []), e[t.designGroupId].push(t), e
  }, {}), [module])
}