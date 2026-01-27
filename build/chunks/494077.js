/** Chunk was on web.js **/
/** chunk id: 494077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk492313 = require("./492313.js");

function a(e) {
  let [t, n] = (0, i.P)(e.isExpanded, e.defaultExpanded || false, e.onExpandedChange), a = (0, r.useCallback)(() => {
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