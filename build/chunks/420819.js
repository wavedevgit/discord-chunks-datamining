/** Chunk was on 97492 **/
/** chunk id: 420819, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk621466 = require("./621466.js");

function l(e, t) {
  let n = e.offsetTop,
    l = e.offsetParent;
  for (; null != l;) {
    var i;
    if (l === t || !(0, r.vq)(l, HTMLElement)) break;
    n += null != (i = l.offsetTop) ? i : 0, l = l.offsetParent
  }
  return n
}