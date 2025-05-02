/** Chunk was on 89839 **/
n.d(t, {
  q: () => r
}), n(291175), n(848572);
var a = n(474936),
  i = n(388032);
let r = (e, t) => {
  switch (e) {
    case a.VU.PREMIUM_TENURE_1_MONTH:
    case a.VU.PREMIUM_TENURE_3_MONTH:
    case a.VU.PREMIUM_TENURE_6_MONTH:
      return i.intl.formatToPlainString(i.t.erUSmJ, {
        months: t
      });
    case a.VU.PREMIUM_TENURE_12_MONTH:
    case a.VU.PREMIUM_TENURE_24_MONTH:
    case a.VU.PREMIUM_TENURE_36_MONTH:
    case a.VU.PREMIUM_TENURE_60_MONTH:
      return i.intl.formatToPlainString(i.t.IfYQVF, {
        years: t / 12
      });
    case a.VU.PREMIUM_TENURE_72_MONTH:
      return i.intl.formatToPlainString(i.t.IfYQVF, {
        years: "6+"
      });
    default:
      return null
  }
}