/** Chunk was on 70018 **/
/** chunk id: 163172, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  b: () => i
});
var Chunk647438 = require("./647438.js"),
  Chunk379955 = require("./379955.js");

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