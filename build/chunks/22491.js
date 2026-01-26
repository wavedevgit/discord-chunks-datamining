/** Chunk was on 39048 **/
/** chunk id: 22491, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk599941 = require("./599941.js"),
  Chunk386784 = require("./386784.js");

function s(e) {
  let t = (0, i.uP)(e),
    n = (0, l.A)(e);
  return r.useMemo(() => {
    let e = 0;
    for (let r of t) {
      let t = null == r ? true : r.role_id;
      if (null != t) {
        let r = null == n ? true : n[t];
        null != r && (e += r)
      }
    }
    return e
  }, [t, n])
}