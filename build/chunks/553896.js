/** Chunk was on 89839 **/
/** chunk id: 553896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => a
}), require("./291175.js"), require("./848572.js");
var Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
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