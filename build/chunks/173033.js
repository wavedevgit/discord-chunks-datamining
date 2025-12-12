/** Chunk was on 7891 **/
/** chunk id: 173033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk374470 = require("./374470.js");

function r(e, t) {
  let n = e.offsetTop,
    r = e.offsetParent;
  for (; null != r;) {
    var l;
    if (r === t || !(0, i.kK)(r, HTMLElement)) break;
    n += null != (l = r.offsetTop) ? l : 0, r = r.offsetParent
  }
  return n
}