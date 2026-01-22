/** Chunk was on web.js **/
/** chunk id: 844992, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function i(e, t) {
  let [n, i] = (0, r.useState)(false);
  return {
    handleFocus: (0, r.useCallback)(t => {
      (t.target === t.currentTarget || t.currentTarget.contains(document.activeElement)) && i(true), null != e && e(t)
    }, [e]),
    handleBlur: (0, r.useCallback)(e => {
      e.target !== e.currentTarget && e.currentTarget.contains(document.activeElement) || i(false), null != t && t(e)
    }, [t]),
    isFocused: n
  }
}