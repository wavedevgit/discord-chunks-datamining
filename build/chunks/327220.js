/** Chunk was on 93594 **/
n.d(t, {
  Z: () => o
}), n(388685);
var r = n(192379),
  l = n(442837),
  i = n(592125),
  u = n(9156);

function o(e) {
  let t = (0, l.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
    n = (0, l.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [t]),
    o = (0, l.e7)([u.ZP], () => u.ZP.getMutedChannels(null)),
    c = r.useMemo(() => {
      let e = new Set;
      for (let t in n) {
        let r = n[t];
        null != r && o.has(r) && e.add(t)
      }
      return e
    }, [n, o]);
  return r.useMemo(() => null == e ? void 0 : e.filter(e => {
    for (let t of e.participants)
      if (c.has(t)) return !1;
    return !0
  }), [e, c])
}