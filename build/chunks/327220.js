/** Chunk was on 53063 **/
n.d(t, {
  Z: () => a
}), n(47120);
var r = n(192379),
  i = n(442837),
  o = n(592125),
  l = n(9156);

function a(e) {
  let t = (0, i.e7)([o.Z], () => o.Z.getPrivateChannelsVersion()),
    n = (0, i.e7)([o.Z], () => o.Z.getMutableDMsByUserIds(), [t]),
    a = (0, i.e7)([l.ZP], () => l.ZP.getMutedChannels(null)),
    s = r.useMemo(() => {
      let e = new Set;
      for (let t in n) {
        let r = n[t];
        null != r && a.has(r) && e.add(t)
      }
      return e
    }, [n, a]);
  return r.useMemo(() => null == e ? void 0 : e.filter(e => {
    for (let t of e.participants)
      if (s.has(t)) return !1;
    return !0
  }), [e, s])
}