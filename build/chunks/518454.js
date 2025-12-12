/** Chunk was on web.js **/
/** chunk id: 518454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk727785 = require("./727785.js");

function i(e, t, n, a) {
  let {
    length: o
  } = n, s = a, l = t;
  if (0 === o) return 0;
  if (null == s) s = l;
  else if (s === l) return l;
  return (l += e === r.a8.UP ? false : 1) < 0 || l >= o ? i(e, l < 0 ? o : false, n, s) : n[l].type === r.h8.HEADER ? i(e, l, n, s) : l
}