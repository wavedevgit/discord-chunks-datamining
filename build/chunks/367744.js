/** Chunk was on 90228 **/
/** chunk id: 367744, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => m
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk562465 = require("./562465.js"),
  Chunk557009 = require("./557009.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");
let o = async () => (await l.Bo.get({
  url: i.Rsh.ENTITLEMENTS_FOR_APPLICATION(s.tv),
  oldFormErrors: true,
  query: {
    exclude_consumed: true,
    exclude_ended: true
  },
  rejectWithError: true
})).body.map(e => r.A.createFromServer(e)), c = async e => {
  await l.Bo.post({
    url: "/debug/entitlements/fractional-premium",
    body: {
      count: 1,
      sku_id: e
    },
    rejectWithError: false
  })
}, d = async e => {
  let t = "/debug/entitlements/fractional-premium";
  null != e && (t = "".concat(t, "/").concat(e)), await l.Bo.del({
    url: t,
    rejectWithError: true
  })
}, u = async () => {
  await l.Bo.post({
    url: "/debug/entitlements/fulfillment",
    rejectWithError: false
  })
}, m = () => {
  let [e, t] = a.useState([]), [n, l] = a.useState(false), r = (0, a.useCallback)(async () => {
    try {
      l(true);
      let e = await o();
      t(e)
    } finally {
      l(false)
    }
  }, []), i = (0, a.useCallback)(async e => {
    await c(e), await r()
  }, [r]);
  return {
    grantFractionalPremium: i,
    deleteFractionalPremium: (0, a.useCallback)(async e => {
      await d(e), await r()
    }, [r]),
    triggerNextEntitlementFulfillment: (0, a.useCallback)(async () => {
      await u(), await r()
    }, [r]),
    refreshEntitlementList: r,
    entitlements: e,
    loading: n
  }
}