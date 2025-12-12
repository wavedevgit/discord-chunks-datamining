/** Chunk was on web.js **/
/** chunk id: 114206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => s
});
var Chunk990415 = require("./990415.js"),
  Chunk473749 = require("./473749.js"),
  Chunk477232 = require("./477232.js"),
  Chunk297808 = require("./297808.js");

function s(e) {
  let {
    isDisabled: t,
    onFocus: n,
    onBlur: s,
    onFocusChange: l
  } = e, c = (0, i.useCallback)(e => {
    if (e.target === e.currentTarget) return s && s(e), l && l(false), true
  }, [s, l]), u = (0, r.d0)(c), d = (0, i.useCallback)(e => {
    let t = (0, o.r3)(e.target),
      r = t ? (0, a.vY)(t) : (0, a.vY)();
    e.target === e.currentTarget && r === (0, a.NI)(e.nativeEvent) && (n && n(e), l && l(true), u(e))
  }, [l, n, u]);
  return {
    focusProps: {
      onFocus: !t && (n || l || s) ? d : true,
      onBlur: !t && (s || l) ? c : true
    }
  }
}