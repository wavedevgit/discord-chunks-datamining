/** Chunk was on 46923 **/
t.d(a, {
  Z: () => m
}), t(47120);
var n = t(192379),
  l = t(688619),
  s = t.n(l);
t(979590);
var i = t(442837),
  r = t(866442),
  o = t(607070),
  c = t(220082),
  d = t(981631);
let m = e => {
  var a, l, m, u, h, g;
  let x;
  x = t(481060).TVs;
  let v = (0, i.e7)([o.Z], () => o.Z.saturation),
    [N, p] = (0, c.Cf)(e, null !== (g = null == x ? void 0 : null === (h = x.colors) || void 0 === h ? void 0 : null === (u = h.BACKGROUND_FLOATING) || void 0 === u ? void 0 : null === (m = u.resolve) || void 0 === m ? void 0 : null === (l = m.call(u, {
      theme: d.BRd.DARK,
      saturation: v
    })) || void 0 === l ? void 0 : null === (a = l.hex) || void 0 === a ? void 0 : a.call(l)) && void 0 !== g ? g : "#000");
  return n.useMemo(() => {
    let e = (0, r._i)(N),
      a = (0, r._i)(p);
    for (let a = 1; a < 8 && !((0, r.Bd)(e) >= .725); a++) e = s()(e).darken(.5).num();
    for (let e = 1; e < 8 && !((0, r.Bd)(a) >= .725); e++) a = s()(a).darken(.5).num();
    return {
      primaryColor: (0, r.Rf)(e),
      secondaryColor: (0, r.Rf)(a)
    }
  }, [N, p])
}