/** Chunk was on 89839 **/
n.d(t, {
  q: () => a
}), n(291175), n(848572);
var r = n(474936),
  l = n(388032);
let a = (e, t) => {
  switch (e) {
    case r.VU.PREMIUM_TENURE_1_MONTH:
    case r.VU.PREMIUM_TENURE_3_MONTH:
    case r.VU.PREMIUM_TENURE_6_MONTH:
      return l.intl.formatToPlainString(l.t.erUSmJ, {
        months: t
      });
    case r.VU.PREMIUM_TENURE_12_MONTH:
    case r.VU.PREMIUM_TENURE_24_MONTH:
    case r.VU.PREMIUM_TENURE_36_MONTH:
    case r.VU.PREMIUM_TENURE_60_MONTH:
      return l.intl.formatToPlainString(l.t.IfYQVF, {
        years: t / 12
      });
    case r.VU.PREMIUM_TENURE_72_MONTH:
      return l.intl.formatToPlainString(l.t.IfYQVF, {
        years: "6+"
      });
    default:
      return null
  }
}