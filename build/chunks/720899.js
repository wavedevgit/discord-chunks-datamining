/** Chunk was on web.js **/
/** chunk id: 720899, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk926140 = require("./926140.js");

function i(e, t, n, a) {
  let {
    length: o
  } = n, s = a, l = t;
  if (0 === o) return 0;
  if (null == s) s = l;
  else if (s === l) return l;
  return (l += e === r.vB.UP ? false : 1) < 0 || l >= o ? i(e, l < 0 ? o : false, n, s) : n[l].type === r.rD.HEADER ? i(e, l, n, s) : l
}