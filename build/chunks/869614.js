/** Chunk was on 79839 **/
/** chunk id: 869614, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
let l = new Set(["nvidia"]);

function o(e) {
  for (let t of Object.keys(e)) {
    let r = e[t];
    if (null != r && null == r.error && l.has(t)) returntrue
  }
  returnfalse
}