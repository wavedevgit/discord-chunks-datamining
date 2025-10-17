/** Chunk was on 45620 **/
/** chunk id: 312030, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk884697 = require("./884697.js"),
  Chunk215023 = require("./215023.js");
let a = e => {
  let {
    scrollerRef: t,
    sortedCategories: n
  } = e, [a, o] = r.useState(1), s = r.useCallback(e => {
    let t = n.findIndex(t => t.skuId === e);
    return false === t ? 1 : Math.floor(t / i.kN) + 1
  }, [n]), c = r.useCallback(e => {
    if (null != e && !(0, l.$2)(e)) {
      let t = s(e);
      t !== a && o(t)
    }
  }, [s, a, o]);
  return {
    currentPage: a,
    handlePageChange: r.useCallback(e => {
      var n;
      o(e), null == (n = t.current) || n.scrollTo({
        to: 0
      })
    }, [t, o]),
    scrollToCategory: c
  }
}