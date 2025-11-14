/** Chunk was on web.js **/
/** chunk id: 553896, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
      return i.intl.formatToPlainString(i.t.erUSmA, {
        months: t
      });
    case r.VU.PREMIUM_TENURE_12_MONTH:
    case r.VU.PREMIUM_TENURE_24_MONTH:
    case r.VU.PREMIUM_TENURE_36_MONTH:
    case r.VU.PREMIUM_TENURE_60_MONTH:
    case r.VU.PREMIUM_TENURE_72_MONTH:
      return i.intl.formatToPlainString(i.t.qOdyDe, {
        years: t / 12
      });
    default:
      return null
  }
}