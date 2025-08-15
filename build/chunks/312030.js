/** Chunk was on 45620 **/
/** chunk id: 312030, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk180650 = require("./180650.js"),
  Chunk215023 = require("./215023.js");
let i = e => {
  let {
    scrollerRef: t,
    sortedCategories: r
  } = e, [i, o] = n.useState(1), s = n.useCallback(e => {
    let t = r.findIndex(t => t.skuId === e);
    return false === t ? 1 : Math.floor(t / a.kN) + 1
  }, [r]), c = n.useCallback(e => {
    if (null != e && e !== l.T.ORB) {
      let t = s(e);
      t !== i && o(t)
    }
  }, [s, i, o]);
  return {
    currentPage: i,
    handlePageChange: n.useCallback(e => {
      var r;
      o(e), null == (r = t.current) || r.scrollTo({
        to: 0
      })
    }, [t, o]),
    scrollToCategory: c
  }
}