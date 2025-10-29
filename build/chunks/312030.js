/** Chunk was on 45620 **/
/** chunk id: 312030, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js");
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