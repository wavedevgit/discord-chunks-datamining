/** Chunk was on 71512 **/
/** chunk id: 759178, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk198139 = require("./198139.js"),
  Chunk388032 = require("./388032.jsx");
let l = {
  getStatusErrorText: function(e) {
    switch (e) {
      case r.jw.CANCELED:
      case r.jw.DEFERRED:
        return i.intl.string(i.t["0SrNPz"]);
      case r.jw.DEFERRED_INTERNAL:
        return i.intl.string(i.t.OtZ5k5);
      case r.jw.ERROR:
        return i.intl.string(i.t.ninjcX);
      case r.jw.REJECTED:
        return i.intl.string(i.t.TSC809);
      case r.jw.RISK_REVIEW:
        return i.intl.string(i.t.rppxMj)
    }
  }
}