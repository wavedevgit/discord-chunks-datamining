/** Chunk was on 17869 **/
/** chunk id: 420819, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk621466 = require("./621466.js");

function r(e, t) {
  let n = e.offsetTop,
    r = e.offsetParent;
  for (; null != r;) {
    var i;
    if (r === t || !(0, l.vq)(r, HTMLElement)) break;
    n += null != (i = r.offsetTop) ? i : 0, r = r.offsetParent
  }
  return n
}