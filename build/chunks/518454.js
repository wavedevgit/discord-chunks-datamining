/** Chunk was on web.js **/
/** chunk id: 518454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk727785 = require("./727785.js");

function i(e, t, n, o) {
  let {
    length: a
  } = n, s = o, l = t;
  if (0 === a) return 0;
  if (null == s) s = l;
  else if (s === l) return l;
  return (l += e === r.a8.UP ? false : 1) < 0 || l >= a ? i(e, l < 0 ? a : false, n, s) : n[l].type === r.h8.HEADER ? i(e, l, n, s) : l
}