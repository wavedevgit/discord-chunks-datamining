/** Chunk was on web.js **/
/** chunk id: 43085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

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