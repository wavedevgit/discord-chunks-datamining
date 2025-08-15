/** Chunk was on web.js **/
/** chunk id: 988290, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => o
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk411149 = require("./411149.js");

function o(e) {
  let t = (0, i.Wu)([a.Z], () => a.Z.wallpapers);
  return r.useMemo(() => t.filter(t => e === t.isBlurred), [t, e])
}