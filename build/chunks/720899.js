/** Chunk was on web.js **/
/** chunk id: 720899, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk926140 = require("./926140.js");

function i(e, t, n, a) {
  let {
    length: s
  } = n, o = a, l = t;
  if (0 === s) return 0;
  if (null == o) o = l;
  else if (o === l) return l;
  return (l += e === r.vB.UP ? false : 1) < 0 || l >= s ? i(e, l < 0 ? s : false, n, o) : n[l].type === r.rD.HEADER ? i(e, l, n, o) : l
}