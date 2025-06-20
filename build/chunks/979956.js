/** Chunk was on 94495 **/
n.d(t, {
  BK: () => l,
  Bf: () => s,
  KZ: () => d
}), n(539854);
var a = n(476326),
  i = n(403182),
  o = n(74538),
  r = n(474936),
  c = n(388032);

function l(e, t) {
  let n = i.Ng(i.dg(t));
  return o.ZP.isPremium(e, r.p9.TIER_2) ? c.intl.formatToPlainString(c.t.fxEKdX, {
    maxSize: n
  }) : o.ZP.isPremium(e, r.p9.TIER_1) ? c.intl.formatToPlainString(c.t["Nr+Lsb"], {
    maxSize: n
  }) : c.intl.formatToPlainString(c.t.fxEKdX, {
    maxSize: n
  })
}

function s(e, t) {
  return i.nA(e, t) || i.vY(e)
}

function d(e) {
  return e.reduce((e, t) => (t.item.platform === a.ow.WEB && e.push(t.item.file), e), [])
}