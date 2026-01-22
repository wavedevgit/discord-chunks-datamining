/** Chunk was on web.js **/
/** chunk id: 628024, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => o
});
var Chunk89494 = require("./89494.js"),
  Chunk64700 = require("./64700.js"),
  Chunk297987 = require("./297987.js"),
  Chunk241827 = require("./241827.js");

function o(e) {
  let {
    isDisabled: t,
    onFocus: n,
    onBlur: o,
    onFocusChange: l
  } = e, c = (0, i.useCallback)(e => {
    if (e.target === e.currentTarget) return o && o(e), l && l(false), true
  }, [o, l]), u = (0, r.yB)(c), d = (0, i.useCallback)(e => {
    let t = (0, a.TW)(e.target),
      r = t ? (0, s.bq)(t) : (0, s.bq)();
    e.target === e.currentTarget && r === (0, s.wt)(e.nativeEvent) && (n && n(e), l && l(true), u(e))
  }, [l, n, u]);
  return {
    focusProps: {
      onFocus: !t && (n || l || o) ? d : true,
      onBlur: !t && (o || l) ? c : true
    }
  }
}