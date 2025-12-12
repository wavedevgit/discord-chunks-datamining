/** Chunk was on web.js **/
/** chunk id: 882069, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => a
});
var Chunk473749 = require("./473749.js"),
  Chunk386239 = require("./386239.js");

function a(e) {
  let [t, n] = (0, i.z)(e.isExpanded, e.defaultExpanded || false, e.onExpandedChange), a = (0, r.useCallback)(() => {
    n(true)
  }, [n]), o = (0, r.useCallback)(() => {
    n(false)
  }, [n]), s = (0, r.useCallback)(() => {
    n(!t)
  }, [n, t]);
  return {
    isExpanded: t,
    setExpanded: n,
    expand: a,
    collapse: o,
    toggle: s
  }
}