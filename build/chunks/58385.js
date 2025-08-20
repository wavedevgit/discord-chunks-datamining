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
  queryId: e => s.McO.SUBSCRIPTION_PLANS(e),
  get: e => null != e ? a.Z.getForSKU(e) : [],
  load: (e, t) => (null == t && o.Z.addBreadcrumb({
    message: "Error loading subscription plans: skuId is null"
  }), null != t ? (0, i.GZ)(t) : Promise.reject()),
  useStateHook: Chunk442837.Wu
})