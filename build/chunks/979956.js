/** Chunk was on 89129 **/
n.d(t, {
  BK: () => d,
  Bf: () => c,
  KZ: () => _
}), n(539854);
var i = n(476326),
  o = n(403182),
  l = n(74538),
  r = n(474936),
  a = n(388032);

function d(e, t) {
  let n = o.Ng(o.dg(t));
  return l.ZP.isPremium(e, r.p9.TIER_2) ? a.intl.formatToPlainString(a.t.fxEKdX, {
    maxSize: n
  }) : l.ZP.isPremium(e, r.p9.TIER_1) ? a.intl.formatToPlainString(a.t["Nr+Lsb"], {
    maxSize: n
  }) : a.intl.formatToPlainString(a.t.fxEKdX, {
    maxSize: n
  })
}

function c(e, t) {
  return o.nA(e, t) || o.vY(e)
}

function _(e) {
  return e.reduce((e, t) => (t.item.platform === i.ow.WEB && e.push(t.item.file), e), [])
}