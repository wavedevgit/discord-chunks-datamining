/** Chunk was on 22979 **/
/** chunk id: 232867, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => m
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk544891 = require("./544891.js"),
  Chunk959546 = require("./959546.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let o = async () => (await r.tn.get({
  url: l.ANM.ENTITLEMENTS_FOR_APPLICATION(s.CL),
  oldFormErrors: true,
  query: {
    exclude_consumed: true,
    exclude_ended: true
  },
  rejectWithError: true
})).body.map(e => i.Z.createFromServer(e)), c = async e => {
  await r.tn.post({
    url: "/debug/entitlements/fractional-premium",
    body: {
      count: 1,
      sku_id: e
    },
    rejectWithError: false
  })
}, d = async e => {
  let t = "/debug/entitlements/fractional-premium";
  null != e && (t = "".concat(t, "/").concat(e)), await r.tn.del({
    url: t,
    rejectWithError: true
  })
}, u = async () => {
  await r.tn.post({
    url: "/debug/entitlements/fulfillment",
    rejectWithError: false
  })
}, m = () => {
  let [e, t] = a.useState([]), [n, r] = a.useState(false), i = (0, a.useCallback)(async () => {
    try {
      r(true);
      let e = await o();
      t(e)
    } finally {
      r(false)
    }
  }, []), l = (0, a.useCallback)(async e => {
    await c(e), await i()
  }, [i]);
  return {
    grantFractionalPremium: l,
    deleteFractionalPremium: (0, a.useCallback)(async e => {
      await d(e), await i()
    }, [i]),
    triggerNextEntitlementFulfillment: (0, a.useCallback)(async () => {
      await u(), await i()
    }, [i]),
    refreshEntitlementList: i,
    entitlements: e,
    loading: n
  }
}