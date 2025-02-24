/** Chunk was on 56650 **/
n.d(t, {
  U9: () => d,
  ZO: () => o,
  df: () => s,
  hF: () => c,
  j2: () => u,
  jM: () => f,
  l: () => E
});
var l = n(544891),
  r = n(570140),
  i = n(881052),
  a = n(981631);
async function o() {
  r.Z.wait(() => {
    r.Z.dispatch({
      type: "VIRTUAL_CURRENCY_BALANCE_FETCH"
    })
  });
  try {
    let e = await l.tn.get({
        url: a.ANM.VIRTUAL_CURRENCY_USER_BALANCE,
        rejectWithError: !1
      }),
      t = e.body.balance;
    return r.Z.dispatch({
      type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS",
      balance: t
    }), e.body
  } catch (t) {
    let e = t instanceof i.HF ? t : new i.HF(t);
    r.Z.dispatch({
      type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL",
      error: e
    })
  }
}
async function s(e) {
  let {
    skuId: t,
    onRedeemStart: n,
    onRedeemSucceed: s,
    onRedeemFail: c,
    shouldRefetchBalance: u = !0
  } = e;
  r.Z.wait(() => {
    r.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_START",
      skuId: t
    })
  }), null == n || n();
  try {
    let e = (await l.tn.post({
      url: a.ANM.VIRTUAL_CURRENCY_SKU_REDEEM(t),
      rejectWithError: !1
    })).body;
    return r.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS",
      skuId: t,
      entitlements: e
    }), u && o(), null == s || s(e), e
  } catch (n) {
    let e = n instanceof i.HF ? n : new i.HF(n);
    r.Z.dispatch({
      type: "VIRTUAL_CURRENCY_REDEEM_FAIL",
      skuId: t,
      error: e
    }), u && o(), null == c || c(e)
  }
}

function c(e) {
  let {
    earnedOrbsQuantity: t,
    dedupeKey: n
  } = e;
  return r.Z.dispatch({
    type: "VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN",
    earnedOrbsQuantity: t,
    dedupeKey: n
  })
}

function u() {
  return r.Z.dispatch({
    type: "VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE"
  })
}

function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  return r.Z.dispatch({
    type: "VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_OPEN",
    onboardingCoachmarkTypes: e
  })
}

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  return r.Z.dispatch({
    type: "VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_CLOSE",
    onboardingCoachmarkTypes: e
  })
}

function f() {
  return r.Z.dispatch({
    type: "VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_SKIP"
  })
}