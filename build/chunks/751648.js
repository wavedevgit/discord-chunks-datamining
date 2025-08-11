/** Chunk was on 66317 **/
/** chunk id: 751648, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  ZO: () => s,
  df: () => d,
  hF: () => b,
  j2: () => f,
  qD: () => h
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk881052 = require("./881052.js"),
  Chunk710845 = require("./710845.js"),
  Chunk960048 = require("./960048.js"),
  Chunk981631 = require("./981631.js");
let c = new Chunk710845.Z("VirtualCurrencyActionCreators");
async function s() {
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
    loadId: r,
    onRedeemStart: i,
    onRedeemSucceed: d,
    onRedeemFail: b,
    shouldRefetchBalance: f = true
  } = e;
  a.Z.wait(() => {
    a.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_START",
      skuId: t
    })
  }), null == i || i();
  try {
    let e = (await n.tn.post({
      url: u.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
      body: {
        checkout_session_id: r
      },
      rejectWithError: false
    })).body;
    if (null == e || !Array.isArray(e)) {
      let t = "Could not read entitlements from Virtual Currency redemption response. Response: ",
        r = Error(t, e);
      throw c.error(t, e), o.Z.captureException(r, {
        tags: {
          app_context: "virtual_currency"
        }
      }), r
    }
    return a.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
      skuId: t,
      entitlements: e
    }), f && s(), null == d || d(e), e
  } catch (r) {
    let e = r instanceof l.HF ? r : new l.HF(r);
    a.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
      skuId: t,
      error: e
    }), f && s(), null == b || b(e)
  }
}

function b(e) {
  let {
    earnedOrbsQuantity: t,
    dedupeKey: r
  } = e;
  return a.Z.dispatch({
    type: "VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN",
    earnedOrbsQuantity: t,
    dedupeKey: r
  })
}

function f() {
  return Chunk570140.Z.dispatch({
    type: "VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE"
  })
}

function h(e) {
  return a.Z.dispatch({
    type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY",
    balancePillOverlay: e
  })
}