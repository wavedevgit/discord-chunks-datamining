/** Chunk was on web.js **/
/** chunk id: 930155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s
});
var Chunk442837 = require("./442837.js"),
  Chunk821849 = require("./821849.js"),
  Chunk509545 = require("./509545.js"),
  Chunk981631 = require("./981631.js");
let s = (0, Chunk442837.Kb)(Chunk509545.Z, {
  getQueryId: Chunk981631.McO.SUBSCRIPTION_PLAN,
  get: e => {
    let t = a.Z.getForSKU(e);
    return 0 === t.length ? null : t
  },
  load: e => (0, i.GZ)(e),
  getIsLoading: e => a.Z.isFetchingForSKU(e)
})