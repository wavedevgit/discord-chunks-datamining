/** Chunk was on 89839 **/
t.d(n, {
  q: () => a
}), t(291175), t(848572);
var l = t(474936),
  r = t(388032);
let a = (e, n) => {
  switch (e) {
    case l.VU.PREMIUM_TENURE_1_MONTH:
    case l.VU.PREMIUM_TENURE_3_MONTH:
    case l.VU.PREMIUM_TENURE_6_MONTH:
      return r.intl.formatToPlainString(r.t.erUSmJ, {
        months: n
      });
    case l.VU.PREMIUM_TENURE_12_MONTH:
    case l.VU.PREMIUM_TENURE_24_MONTH:
    case l.VU.PREMIUM_TENURE_36_MONTH:
    case l.VU.PREMIUM_TENURE_60_MONTH:
      return r.intl.formatToPlainString(r.t.IfYQVF, {
        years: n / 12
      });
    case l.VU.PREMIUM_TENURE_72_MONTH:
      return r.intl.formatToPlainString(r.t.IfYQVF, {
        years: "6+"
      });
    default:
      return null
  }
}