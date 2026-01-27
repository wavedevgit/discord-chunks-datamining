/** Chunk was on web.js **/
/** chunk id: 981737, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return function(t, n) {
    var r;
    if ("formatting" === (null != n && n.context ? String(n.context) : "standalone") && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        a = null != n && n.width ? String(n.width) : i;
      r = e.formattingValues[a] || e.formattingValues[i]
    } else {
      var o = e.defaultWidth,
        s = null != n && n.width ? String(n.width) : e.defaultWidth;
      r = e.values[s] || e.values[o]
    }
    return r[e.argumentCallback ? e.argumentCallback(t) : t]
  }
}
require.d(exports, {
  A: () => r
})