/** Chunk was on 62940 **/
n.d(t, {
  w: () => d
}), n(47120), n(653041), n(733860);
var r = n(192379),
  i = n(581364),
  o = n(984933),
  l = n(496675),
  a = n(282923),
  s = n(981631),
  c = n(388032);

function d(e) {
  let t = r.useMemo(() => {
      let t = o.ZP.getChannels(e),
        n = [...t[o.sH]];
      n.push(...t[o.Zb].filter(e => e.channel.isGuildVocal()));
      let r = n.map(e => ({
        id: e.channel.id,
        name: e.channel.name,
        canManage: l.Z.can(s.Plq.MANAGE_ROLES, e.channel)
      }));
      return r.unshift({
        id: (0, i.bD)(e),
        name: c.NW.string(c.t["7YqSGx"]),
        canManage: !0
      }), r
    }, [e]),
    [n, d] = r.useState(""),
    p = r.useMemo(() => {
      var e;
      let r = (e = n).startsWith("#") ? e.substr(1) : e;
      return (0, a.B)(t, u, r)
    }, [t, n]);
  return {
    query: n,
    results: p,
    setQuery: d,
    unfilteredCount: t.length
  }
}

function u(e) {
  return {
    id: e.id,
    names: [e.name]
  }
}