/** Chunk was on 22477 **/
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
  url: r.Rsh.ENTITLEMENTS_FOR_APPLICATION(s.tv),
  oldFormErrors: true,
  query: {
    exclude_consumed: true,
    exclude_ended: true
  },
  rejectWithError: true
})).body.map(e => i.A.createFromServer(e)), c = async e => {
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
  let [e, t] = a.useState([]), [n, l] = a.useState(false), i = (0, a.useCallback)(async () => {
    try {
      l(true);
      let e = await o();
      t(e)
    } finally {
      l(false)
    }
  }, []), r = (0, a.useCallback)(async e => {
    await c(e), await i()
  }, [i]);
  return {
    grantFractionalPremium: r,
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