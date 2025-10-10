/** Chunk was on 45620 **/
/** chunk id: 312030, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => o
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk884697 = require("./884697.js"),
  Chunk215023 = require("./215023.js");
let o = e => {
  let {
    scrollerRef: t,
    sortedCategories: n
  } = e, [o, s] = r.useState(1), a = r.useCallback(e => {
    let t = n.findIndex(t => t.skuId === e);
    return false === t ? 1 : Math.floor(t / i.kN) + 1
  }, [n]), c = r.useCallback(e => {
    if (null != e && !(0, l.$2)(e)) {
      let t = a(e);
      t !== o && s(t)
    }
  }, [a, o, s]);
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