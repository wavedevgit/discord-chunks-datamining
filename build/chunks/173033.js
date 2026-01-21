/** Chunk was on 82124 **/
/** chunk id: 173033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk374470 = require("./374470.js");

function i(e, t) {
  let n = e.offsetTop,
    i = e.offsetParent;
  for (; null != i;) {
    var l;
    if (i === t || !(0, r.kK)(i, HTMLElement)) break;
    n += null != (l = i.offsetTop) ? l : 0, i = i.offsetParent
  }
  return n
}