/** Chunk was on 88282 **/
/** chunk id: 232867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => m
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk544891 = require("./544891.js"),
  Chunk959546 = require("./959546.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let o = async () => (await Chunk544891.tn.get({
  url: Chunk981631.ANM.ENTITLEMENTS_FOR_APPLICATION(Chunk474936.CL),
  oldFormErrors: true,
  query: {
    exclude_consumed: true,
    exclude_ended: true
  },
  rejectWithError: true
})).body.map(e => r.Z.createFromServer(e)), c = async e => {
  await l.tn.post({
    url: "/debug/entitlements/fractional-premium",
    body: {
      count: 1,
      sku_id: e
    },
    rejectWithError: false
  })
}, d = async e => {
  let t = "/debug/entitlements/fractional-premium";
  null != e && (t = "".concat(t, "/").concat(e)), await l.tn.del({
    url: t,
    rejectWithError: true
  })
}, u = async () => {
  await Chunk544891.tn.post({
    url: "/debug/entitlements/fulfillment",
    rejectWithError: false
  })
}, m = () => {
  let [e, t] = Chunk473749.useState([]), [n, l] = Chunk473749.useState(false), r = (0, Chunk473749.useCallback)(async () => {
    try {
      Chunk544891(true);
      let e = await o();
      exports(module)
    } finally {
      Chunk544891(false)
    }
  }, []), i = (0, Chunk473749.useCallback)(async e => {
    await c(e), await r()
  }, [Chunk959546]);
  return {
    grantFractionalPremium: Chunk981631,
    deleteFractionalPremium: (0, Chunk473749.useCallback)(async e => {
      await d(e), await r()
    }, [Chunk959546]),
    triggerNextEntitlementFulfillment: (0, Chunk473749.useCallback)(async () => {
      await u(), await Chunk959546()
    }, [Chunk959546]),
    refreshEntitlementList: Chunk959546,
    entitlements: module,
    loading: require
  }
}