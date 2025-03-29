/** Chunk was on 12416 **/
n.d(t, {
  Z: () => l
}), n(47120);
var r = n(442837),
  i = n(674503);

function l(e) {
  let t = e.id;
  return (0, r.e7)([i.Z], () => {
    for (let e of i.Z.getActiveErrors().values())
      if ("streamKey" in e && "streamError" in e && e.streamKey === t) return e.streamError
  }, [t])
}