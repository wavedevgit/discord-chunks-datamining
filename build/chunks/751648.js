/** Chunk was on web.js **/
/** chunk id: 751648, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZO: () => u,
  df: () => d
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk710845 = require("./710845.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let c = new Chunk710845.Z("VirtualCurrencyActionCreators");
async function u() {
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
async function d(e) {
  let {
    skuId: t,
    loadId: n,
    onRedeemStart: o,
    onRedeemSucceed: d,
    onRedeemFail: f,
    shouldRefetchBalance: p = true,
    isRental: _ = false
  } = e;
  i.Z.wait(() => {
    i.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_START",
      skuId: t
    })
  }), null == o || o();
  try {
    let e = {
        checkout_session_id: n,
        is_rental: _
      },
      a = (await r.tn.post({
        url: l.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
        body: e,
        rejectWithError: false
      })).body;
    if (null == a || !Array.isArray(a)) {
      let e = "Could not read entitlements from Virtual Currency redemption response. Response: ",
        t = Error(e, a);
      throw c.error(e, a), s.Z.captureException(t, {
        tags: {
          app_context: "virtual_currency"
        }
      }), t
    }
    return i.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
      skuId: t,
      entitlements: a
    }), p && u(), null == d || d(a), a
  } catch (n) {
    let e = n instanceof a.HF ? n : new a.HF(n);
    i.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
      skuId: t,
      error: e
    }), p && u(), null == f || f(e)
  }
}