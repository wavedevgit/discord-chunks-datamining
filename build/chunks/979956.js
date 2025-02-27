/** Chunk was on 78846 **/
n.d(t, {
  BK: () => s,
  Bf: () => c,
  KZ: () => d
}), n(653041);
var a = n(476326),
  i = n(403182),
  r = n(74538),
  o = n(474936),
  l = n(388032);

function s(e, t) {
  let n = i.Ng(i.dg(t));
  return r.ZP.isPremium(e, o.p9.TIER_2) ? l.NW.formatToPlainString(l.t.fxEKdX, {
    maxSize: n
  }) : r.ZP.isPremium(e, o.p9.TIER_1) ? l.NW.formatToPlainString(l.t["Nr+Lsb"], {
    maxSize: n
  }) : l.NW.formatToPlainString(l.t.fxEKdX, {
    maxSize: n
  })
}

function c(e, t) {
  return i.nA(e, t) || i.vY(e)
}

function d(e) {
  return e.reduce((e, t) => (t.item.platform === a.ow.WEB && e.push(t.item.file), e), [])
}