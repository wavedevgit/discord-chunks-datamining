/** Chunk was on 39048 **/
/** chunk id: 942117, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk311750 = require("./311750.js"),
  Chunk985018 = require("./985018.jsx");
let l = {
  getStatusErrorText: function(e) {
    switch (e) {
      case r.bp.CANCELED:
      case r.bp.DEFERRED:
        return i.intl.string(i.t["0SrNPx"]);
      case r.bp.DEFERRED_INTERNAL:
        return i.intl.string(i.t.OtZ5kz);
      case r.bp.ERROR:
        return i.intl.string(i.t.ninjcc);
      case r.bp.REJECTED:
        return i.intl.string(i.t.TSC803);
      case r.bp.RISK_REVIEW:
        return i.intl.string(i.t.rppxMj)
    }
  }
}