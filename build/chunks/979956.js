/** Chunk was on 89129 **/
n.d(t, {
  BK: () => a,
  Bf: () => d,
  KZ: () => u
}), n(539854);
var i = n(476326),
  l = n(403182),
  r = n(74538),
  o = n(474936),
  c = n(388032);

function a(e, t) {
  let n = l.Ng(l.dg(t));
  return r.ZP.isPremium(e, o.p9.TIER_2) ? c.intl.formatToPlainString(c.t.fxEKdX, {
    maxSize: n
  }) : r.ZP.isPremium(e, o.p9.TIER_1) ? c.intl.formatToPlainString(c.t["Nr+Lsb"], {
    maxSize: n
  }) : c.intl.formatToPlainString(c.t.fxEKdX, {
    maxSize: n
  })
}

function d(e, t) {
  return l.nA(e, t) || l.vY(e)
}

function u(e) {
  return e.reduce((e, t) => (t.item.platform === i.ow.WEB && e.push(t.item.file), e), [])
}