/** Chunk was on web.js **/
/** chunk id: 930155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s
}), require("./388685.js"), require("./415506.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk821849 = require("./821849.js"),
  Chunk509545 = require("./509545.js");

function s(e) {
  let [t, n] = r.useState(false), s = (0, i.Wu)([a.Z], () => a.Z.getForSKU(e), [e]), l = (0, i.e7)([a.Z], () => a.Z.isFetchingForSKU(e), [e]);
  return r.useEffect(() => {
    a.Z.isFetchingForSKU(e) || (n(false), (0, o.GZ)(e).then(() => {
      n(false)
    }).catch(() => {
      n(true)
    }))
  }, [e]), {
    data: s,
    isLoading: l,
    error: t ? Error("SubscriptionPlans failed to fetch") : true
  }
}