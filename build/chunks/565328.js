/** Chunk was on web.js **/
/** chunk id: 565328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => s
});
var Chunk123463 = require("./123463.js"),
  Chunk647438 = require("./647438.js"),
  Chunk560365 = require("./560365.js"),
  Chunk763809 = require("./763809.js");

function s(e) {
  let {
    isDisabled: t,
    onFocus: n,
    onBlur: s,
    onFocusChange: l
  } = e, c = (0, i.useCallback)(e => {
    if (e.target === e.currentTarget) return s && s(e), l && l(false), true
  }, [s, l]), u = (0, r.d0)(c), d = (0, i.useCallback)(e => {
    let t = (0, a.r3)(e.target),
      r = t ? (0, o.vY)(t) : (0, o.vY)();
    e.target === e.currentTarget && r === (0, o.NI)(e.nativeEvent) && (n && n(e), l && l(true), u(e))
  }, [l, n, u]);
  return {
    focusProps: {
      onFocus: !t && (n || l || s) ? d : true,
      onBlur: !t && (s || l) ? c : true
    }
  }
}