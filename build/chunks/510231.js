/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  h: () => d
}), n(978209);
var r = n(192379),
  i = n(392711),
  s = n.n(i),
  a = n(442837),
  l = n(189451),
  o = n(77498),
  c = n(570911);

function A(e) {
  var t;
  return null !== (t = c.gQ.get(e)) && void 0 !== t ? t : 0
}

function d() {
  let e = (0, a.e7)([o.Z], () => o.Z.games),
    t = r.useMemo(() => s()(e).filter(e => !((null == e ? void 0 : e.themes) != null && e.themes.includes(l.u.EROTIC))).map(e => ({
      value: e.id,
      label: e.name
    })).sortBy(e => {
      let {
        value: t
      } = e;
      return A(t)
    }).reverse().value(), [e]),
    n = r.useCallback((e, t) => A(t.item.value) - A(e.item.value), []);
  return {
    options: t,
    matchSorterOptions: r.useMemo(() => ({
      baseSort: n,
      keys: ["label"]
    }), [n])
  }
}