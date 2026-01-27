/** Chunk was on 77641 **/
/** chunk id: 764231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => i
}), require("./439174.js"), require("./112848.js");
var Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let i = (e, t) => {
  switch (e) {
    case r.Ac.PREMIUM_TENURE_1_MONTH:
    case r.Ac.PREMIUM_TENURE_3_MONTH:
    case r.Ac.PREMIUM_TENURE_6_MONTH:
      return a.intl.formatToPlainString(a.t.erUSmA, {
        months: t
      });
    case r.Ac.PREMIUM_TENURE_12_MONTH:
    case r.Ac.PREMIUM_TENURE_24_MONTH:
    case r.Ac.PREMIUM_TENURE_36_MONTH:
    case r.Ac.PREMIUM_TENURE_60_MONTH:
    case r.Ac.PREMIUM_TENURE_72_MONTH:
      return a.intl.formatToPlainString(a.t.qOdyDe, {
        years: t / 12
      });
    default:
      return null
  }
}