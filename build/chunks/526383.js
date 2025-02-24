/** Chunk was on 1272 (4b1b41bf0e3472e1.js) **/
n.d(t, {
  Z: () => o
}), n(47120);
var r = n(442837),
  i = n(430824),
  l = n(981631);

function o() {
  return (0, r.Wu)([i.Z], () => Object.entries(i.Z.getGuilds()).filter(e => {
    let [t, n] = e;
    return n.hasFeature(l.oNc.HUB)
  }).map(e => {
    let [t, n] = e;
    return n
  }))
}