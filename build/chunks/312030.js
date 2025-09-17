/** Chunk was on 45620 **/
/** chunk id: 312030, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk180650 = require("./180650.js"),
  Chunk215023 = require("./215023.js");
let o = e => {
  let {
    scrollerRef: t,
    sortedCategories: n
  } = e, [o, s] = r.useState(1), i = r.useCallback(e => {
    let t = n.findIndex(t => t.skuId === e);
    return false === t ? 1 : Math.floor(t / a.kN) + 1
  }, [n]), c = r.useCallback(e => {
    if (null != e && e !== l.T.ORB) {
      let t = i(e);
      t !== o && s(t)
    }
  }, [i, o, s]);
  return {
    currentPage: o,
    handlePageChange: r.useCallback(e => {
      var n;
      s(e), null == (n = t.current) || n.scrollTo({
        to: 0
      })
    }, [t, s]),
    scrollToCategory: c
  }
}