/** Chunk was on 59275 **/
/** chunk id: 919610, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => r
}), require("./896048.js");
var Chunk64700 = require("./64700.js");
let r = e => {
  let [t, l] = n.useState(1);
  return {
    currentPage: t,
    handlePageChange: n.useCallback(t => {
      var n;
      l(t), null == (n = e.current) || n.scrollTo({
        to: 0
      })
    }, [e, l])
  }
}