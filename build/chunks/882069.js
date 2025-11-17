/** Chunk was on 70363 **/
/** chunk id: 882069, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  b: () => i
});
var Chunk473749 = require("./473749.js"),
  Chunk386239 = require("./386239.js");

function i(e) {
  let [t, n] = (0, r.z)(e.isExpanded, e.defaultExpanded || false, e.onExpandedChange), i = (0, u.useCallback)(() => {
    n(true)
  }, [n]), o = (0, u.useCallback)(() => {
    n(false)
  }, [n]), a = (0, u.useCallback)(() => {
    n(!t)
  }, [n, t]);
  return {
    isExpanded: t,
    setExpanded: n,
    expand: i,
    collapse: o,
    toggle: a
  }
}