/** Chunk was on 71611 (6f02c158d7813e32.js) **/
n.d(t, {
  Z: () => i
});
var r = n(374470);

function i(e, t) {
  let n = e.offsetTop,
    i = e.offsetParent;
  for (; null != i;) {
    var l;
    if (i === t || !(0, r.k)(i, HTMLElement)) break;
    n += null !== (l = i.offsetTop) && void 0 !== l ? l : 0, i = i.offsetParent
  }
  return n
}