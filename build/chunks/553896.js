/** Chunk was on 89839 **/
a.d(t, {
  q: () => i
}), a(291175), a(848572);
var n = a(474936),
  r = a(388032);
let i = (e, t) => {
  switch (e) {
    case n.JN.PREMIUM_TENURE_1_MONTH:
    case n.JN.PREMIUM_TENURE_3_MONTH:
    case n.JN.PREMIUM_TENURE_6_MONTH:
    case n.w7.PREMIUM_TENURE_1_MONTH:
    case n.w7.PREMIUM_TENURE_3_MONTH:
    case n.w7.PREMIUM_TENURE_6_MONTH:
      return r.NW.formatToPlainString(r.t.erUSmJ, {
        months: t
      });
    case n.JN.PREMIUM_TENURE_12_MONTH:
    case n.JN.PREMIUM_TENURE_24_MONTH:
    case n.JN.PREMIUM_TENURE_36_MONTH:
    case n.JN.PREMIUM_TENURE_60_MONTH:
    case n.w7.PREMIUM_TENURE_12_MONTH:
    case n.w7.PREMIUM_TENURE_24_MONTH:
    case n.w7.PREMIUM_TENURE_36_MONTH:
    case n.w7.PREMIUM_TENURE_60_MONTH:
      return r.NW.formatToPlainString(r.t.IfYQVF, {
        years: t / 12
      });
    case n.JN.PREMIUM_TENURE_72_MONTH:
    case n.w7.PREMIUM_TENURE_72_MONTH:
      return r.NW.formatToPlainString(r.t.IfYQVF, {
        years: "6+"
      });
    default:
      return null
  }
}