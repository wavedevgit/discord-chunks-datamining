/** Chunk was on 74891 **/
/** chunk id: 930155, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  H: () => a
}), require("./388685.js"), require("./415506.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk821849 = require("./821849.js"),
  Chunk509545 = require("./509545.js");

function a(t) {
  let [e, n] = i.useState(false), a = (0, r.Wu)([o.Z], () => o.Z.getForSKU(t), [t]), u = (0, r.e7)([o.Z], () => o.Z.isFetchingForSKU(t), [t]);
  return i.useEffect(() => {
    o.Z.isFetchingForSKU(t) || (n(false), (0, l.GZ)(t).then(() => {
      n(false)
    }).catch(() => {
      n(true)
    }))
  }, [t]), {
    data: a,
    isLoading: u,
    error: e ? Error("SubscriptionPlans failed to fetch") : true
  }
}