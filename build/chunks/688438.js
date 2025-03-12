/** Chunk was on 53494 **/
n.d(t, {
  t: () => s
});
var r = n(442837),
  i = n(273387),
  o = n(975984),
  l = n(306680),
  a = n(709054);

function s(e) {
  return (0, r.e7)([i.Z, l.ZP], () => {
    var t;
    if (null == e) return 0;
    let n = l.ZP.ackMessageId(e.id);
    if (null == n) return 0;
    let r = Object.values(null !== (t = i.Z.getDirectoryEntries(e.id)) && void 0 !== t ? t : {}).filter(e => new Date(e.createdAt).getTime() > a.default.extractTimestamp(n));
    return Math.min(o._N, r.length)
  }, [e])
}