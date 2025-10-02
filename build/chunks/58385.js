/** Chunk was on web.js **/
/** chunk id: 58385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk821849 = require("./821849.js"),
  Chunk509545 = require("./509545.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let l = (0, Chunk442837.Kb)(Chunk509545.Z, {
  getQueryId: Chunk981631.McO.SUBSCRIPTION_PLANS,
  get: e => {
    if (null == e) return null;
    let t = a.Z.getForSKU(e);
    return 0 === t.length ? null : t
  },
  load: e => (null == e && o.Z.addBreadcrumb({
    message: "Error loading subscription plans: skuId is null"
  }), null != e ? (0, i.GZ)(e) : Promise.reject())
})