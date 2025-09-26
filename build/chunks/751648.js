/** Chunk was on 74560 **/
/** chunk id: 751648, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZO: () => d,
  df: () => u,
  qD: () => _
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk710845 = require("./710845.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let o = new Chunk710845.Z("VirtualCurrencyActionCreators");
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
      n = module.body.balance;
    return Chunk570140.Z.dispatch({
      type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS",
      balance: exports
    }), module.body
  } catch (n) {
    let e = exports instanceof Chunk881052.HF ? exports : new Chunk881052.HF(exports);
    Chunk570140.Z.dispatch({
      type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL",
      error: module
    })
  }
}
async function u(e) {
  let {
    skuId: n,
    loadId: t,
    onRedeemStart: l,
    onRedeemSucceed: u,
    onRedeemFail: _,
    shouldRefetchBalance: h = true
  } = e;
  r.Z.wait(() => {
    r.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_START",
      skuId: n
    })
  }), null == l || l();
  try {
    let e = (await a.tn.post({
      url: c.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(n),
      body: {
        checkout_session_id: t
      },
      rejectWithError: false
    })).body;
    if (null == e || !Array.isArray(e)) {
      let n = "Could not read entitlements from Virtual Currency redemption response. Response: ",
        t = Error(n, e);
      throw o.error(n, e), s.Z.captureException(t, {
        tags: {
          app_context: "virtual_currency"
        }
      }), t
    }
    return r.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
      skuId: n,
      entitlements: e
    }), h && d(), null == u || u(e), e
  } catch (t) {
    let e = t instanceof i.HF ? t : new i.HF(t);
    r.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
      skuId: n,
      error: e
    }), h && d(), null == _ || _(e)
  }
}

function _(e) {
  return r.Z.dispatch({
    type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY",
    balancePillOverlay: e
  })
}