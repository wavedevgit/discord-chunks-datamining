/** Chunk was on 89839 **/
/** chunk id: 553896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => r
}), require("./291175.js"), require("./848572.js");
var Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
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