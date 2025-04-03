/** Chunk was on 10451 **/
n.d(t, {
  h: () => d,
  p: () => u
}), n(47120), n(230036);
var r = n(192379),
  i = n(913527),
  s = n.n(i),
  a = n(442837),
  o = n(314897),
  l = n(673096),
  c = n(388032);

function d() {
  let e = (0, a.cj)([l.Z], () => l.Z.getSessions());
  return r.useMemo(() => {
    let t = [...e],
      n = null,
      r = o.default.getAuthSessionIdHash();
    if (null != r) {
      let e = t.findIndex(e => e.id_hash === r);
      e >= 0 && (n = t.splice(e, 1)[0])
    }
    return t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()), {
      currentSession: n,
      otherSessions: t
    }
  }, [e])
}

function u(e) {
  return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? c.NW.string(c.t.TXCmfH) : s()(e).fromNow()
}