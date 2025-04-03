/** Chunk was on 62940 **/
n.d(t, {
  B: () => o
}), n(653041), n(47120);
var r = n(658722),
  i = n.n(r);

function o(e, t, n) {
  if ("" === n) return e;
  let r = n.toLowerCase(),
    o = [];
  for (let l of e) {
    let {
      id: e,
      names: a
    } = t(l);
    if (e === n) return [l];
    a.some(e => i()(r, e.toLowerCase())) && o.push(l)
  }
  return o
}