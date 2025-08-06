/** Chunk was on 89839 **/
n.d(t, {
  q: () => r
}), n(291175), n(848572);
var l = n(474936),
  a = n(388032);
let r = (e, t) => {
  switch (e) {
    case l.VU.PREMIUM_TENURE_1_MONTH:
    case l.VU.PREMIUM_TENURE_3_MONTH:
    case l.VU.PREMIUM_TENURE_6_MONTH:
      return a.intl.formatToPlainString(a.t.erUSmJ, {
        months: t
      });
    case l.VU.PREMIUM_TENURE_12_MONTH:
    case l.VU.PREMIUM_TENURE_24_MONTH:
    case l.VU.PREMIUM_TENURE_36_MONTH:
    case l.VU.PREMIUM_TENURE_60_MONTH:
      return a.intl.formatToPlainString(a.t.IfYQVF, {
        years: t / 12
      });
    case l.VU.PREMIUM_TENURE_72_MONTH:
      return a.intl.formatToPlainString(a.t.IfYQVF, {
        years: "6+"
      });
    default:
      return null
  }
}