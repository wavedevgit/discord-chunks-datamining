/** Chunk was on 59275 **/
/** chunk id: 919610, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let l = e => {
  let [t, n] = r.useState(1);
  return {
    currentPage: t,
    handlePageChange: r.useCallback(t => {
      var r;
      n(t), null == (r = e.current) || r.scrollTo({
        to: 0
      })
    }, [e, n])
  }
}