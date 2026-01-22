/** Chunk was on web.js **/
/** chunk id: 963342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk73825 = require("./73825.js"),
  Chunk97352 = require("./97352.js"),
  Chunk728458 = require("./728458.js"),
  Chunk652215 = require("./652215.js");
let l = (0, Chunk311907.UT)(Chunk97352.A, {
  getQueryId: Chunk652215.fic.SUBSCRIPTION_PLANS,
  get: e => {
    if (null == e) return null;
    let t = a.A.getForSKU(e);
    return 0 === t.length ? null : t
  },
  load: e => (null == e && s.A.addBreadcrumb({
    message: "Error loading subscription plans: skuId is null"
  }), null != e ? (0, i.ur)(e) : Promise.reject())
})