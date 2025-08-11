/** Chunk was on web.js **/
/** chunk id: 173033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk374470 = require("./374470.js");

function i(e, t) {
  let n = e.offsetTop,
    i = e.offsetParent;
  for (; null != i;) {
    var o;
    if (i === t || !(0, r.k)(i, HTMLElement)) break;
    n += null != (o = i.offsetTop) ? o : 0, i = i.offsetParent
  }
  return n
}