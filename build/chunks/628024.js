/** Chunk was on web.js **/
/** chunk id: 628024, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s
});
var Chunk89494 = require("./89494.js"),
  Chunk64700 = require("./64700.js"),
  Chunk297987 = require("./297987.js"),
  Chunk241827 = require("./241827.js");

function s(e) {
  let {
    isDisabled: t,
    onFocus: n,
    onBlur: s,
    onFocusChange: l
  } = e, c = (0, i.useCallback)(e => {
    if (e.target === e.currentTarget) return s && s(e), l && l(false), true
  }, [s, l]), u = (0, r.yB)(c), d = (0, i.useCallback)(e => {
    let t = (0, a.TW)(e.target),
      r = t ? (0, o.bq)(t) : (0, o.bq)();
    e.target === e.currentTarget && r === (0, o.wt)(e.nativeEvent) && (n && n(e), l && l(true), u(e))
  }, [l, n, u]);
  return {
    focusProps: {
      onFocus: !t && (n || l || s) ? d : true,
      onBlur: !t && (s || l) ? c : true
    }
  }
}