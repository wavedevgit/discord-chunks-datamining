/** Chunk was on 74560 **/
/** chunk id: 751648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZO: () => d,
  df: () => u,
  qD: () => m
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk710845 = require("./710845.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let c = new Chunk710845.Z("VirtualCurrencyActionCreators");
async function d() {
  Chunk570140.Z.wait(() => {
    Chunk570140.Z.dispatch({
      type: "VIRTUAL_CURRENCY_BALANCE_FETCH"
    })
  });
  try {
    let e = await Chunk544891.tn.get({
        url: Chunk981631.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
        rejectWithError: false
      }),
      t = module.body.balance;
    return Chunk570140.Z.dispatch({
      type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS",
      balance: exports
    }), module.body
  } catch (t) {
    let e = exports instanceof Chunk881052.HF ? exports : new Chunk881052.HF(exports);
    Chunk570140.Z.dispatch({
      type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL",
      error: module
    })
  }
}
async function u(e) {
  let {
    skuId: t,
    loadId: n,
    onRedeemStart: s,
    onRedeemSucceed: u,
    onRedeemFail: m,
    shouldRefetchBalance: p = true
  } = e;
  a.Z.wait(() => {
    a.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_START",
      skuId: t
    })
  }), null == s || s();
  try {
    let e = (await r.tn.post({
      url: l.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
      body: {
        checkout_session_id: n
      },
      rejectWithError: false
    })).body;
    if (null == e || !Array.isArray(e)) {
      let t = "Could not read entitlements from Virtual Currency redemption response. Response: ",
        n = Error(t, e);
      throw c.error(t, e), o.Z.captureException(n, {
        tags: {
          app_context: "virtual_currency"
        }
      }), n
    }
    return a.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
      skuId: t,
      entitlements: e
    }), p && d(), null == u || u(e), e
  } catch (n) {
    let e = n instanceof i.HF ? n : new i.HF(n);
    a.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
      skuId: t,
      error: e
    }), p && d(), null == m || m(e)
  }
}

function m(e) {
  return a.Z.dispatch({
    type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY",
    balancePillOverlay: e
  })
}