/** Chunk was on 71611 (f97ce343811d4d7d.js) **/
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