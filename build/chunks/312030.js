/** Chunk was on 45620 **/
/** chunk id: 312030, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => i
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk180650 = require("./180650.js"),
  Chunk215023 = require("./215023.js");
let i = e => {
  let {
    scrollerRef: t,
    sortedCategories: n
  } = e, [i, o] = r.useState(1), s = r.useCallback(e => {
    let t = n.findIndex(t => t.skuId === e);
    return false === t ? 1 : Math.floor(t / a.kN) + 1
  }, [n]), c = r.useCallback(e => {
    if (null != e && e !== l.T.ORB) {
      let t = s(e);
      t !== i && o(t)
    }
  }, [s, i, o]);
  return {
    currentPage: i,
    handlePageChange: r.useCallback(e => {
      var n;
      o(e), null == (n = t.current) || n.scrollTo({
        to: 0
      })
    }, [t, o]),
    scrollToCategory: c
  }
}