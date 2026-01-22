/** Chunk was on web.js **/
/** chunk id: 966598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js");

function i(e) {
  let t = null == e ? true : e.getBoundingClientRect(),
    n = null == t ? true : t.left,
    i = null == t ? true : t.top;
  return (0, r.useMemo)(() => null != n && null != i ? {
    x: n,
    y: i
  } : null, [n, i])
}