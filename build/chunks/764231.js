/** Chunk was on web.js **/
/** chunk id: 764231, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a
}), require("./439174.js"), require("./112848.js");
var Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let a = (e, t) => {
  switch (e) {
    case r.Ac.PREMIUM_TENURE_1_MONTH:
    case r.Ac.PREMIUM_TENURE_3_MONTH:
    case r.Ac.PREMIUM_TENURE_6_MONTH:
      return i.intl.formatToPlainString(i.t.erUSmA, {
        months: t
      });
    case r.Ac.PREMIUM_TENURE_12_MONTH:
    case r.Ac.PREMIUM_TENURE_24_MONTH:
    case r.Ac.PREMIUM_TENURE_36_MONTH:
    case r.Ac.PREMIUM_TENURE_60_MONTH:
    case r.Ac.PREMIUM_TENURE_72_MONTH:
      return i.intl.formatToPlainString(i.t.qOdyDe, {
        years: t / 12
      });
    default:
      return null
  }
}