/** Chunk was on 79839 **/
/** chunk id: 869614, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js");
let n = new Set(["nvidia"]);

function l(e) {
  for (let t of Object.keys(e)) {
    let r = e[t];
    if (null != r && null == r.error && n.has(t)) returntrue
  }
  returnfalse
}