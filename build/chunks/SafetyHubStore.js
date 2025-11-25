/** Chunk was on web.js **/
/** chunk id: 236289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => en
});
var r, Chunk979079 = require("./979079.js"),
  a = require.n(Chunk979079),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk531441 = require("./531441.js"),
  Chunk800530 = require("./800530.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = {},
  f = {},
  _ = {
    state: Chunk531441.Sn.ALL_GOOD
  },
  p = false,
  h = false,
  m = null,
  g = null,
  E = false,
  b = false,
  y = [],
  O = false,
  v = null,
  I = Chunk800530.bK.DIDNT_VIOLATE_POLICY,
  T = "",
  S = "",
  A = "",
  C = 0,
  N = null,
  R = false,
  P = Chunk800530.oE.NONE,
  D = null;

function w(e) {
  p = true
}

function L(e) {
  let {
    classifications: t,
    accountStanding: n,
    isDsaEligible: r,
    isAppealEligible: i,
    username: o,
    appealEligibility: s
  } = e;
  d = a()(t, "id"), _ = n, E = r, b = i, p = false, h = true, m = null, S = o, y = s
}

function x(e) {
  let {
    error: t
  } = e;
  p = false, h = false, m = t
}

function M(e) {
  f[e.classificationId] = l.OY.PENDING, p = true
}

function k(e) {
  let {
    classification: t,
    accountStanding: n,
    isDsaEligible: r,
    username: i,
    isAppealEligible: a
  } = e;
  d[t.id] = t, f[t.id] = l.OY.SUCCESS, _ = n, p = false, m = null, E = r, b = a, h = true, S = i
}

function j(e) {
  let {
    error: t,
    classificationId: n
  } = e;
  p = false, m = t, f[n] = l.OY.FAILED, h = false
}

function U(e) {
  let {
    classificationId: t
  } = e;
  g = t
}

function G() {
  g = null, I = Chunk800530.bK.DIDNT_VIOLATE_POLICY, T = ""
}

function B(e) {
  let {
    signal: t
  } = e;
  I = t
}

function Z(e) {
  let {
    userInput: t
  } = e;
  T = t
}

function F(e) {
  let {} = e;
  O = true, v = null
}

function V(e) {
  let {
    classificationId: t
  } = e;
  O = false, v = null, d[t].appeal_status = {
    status: l.hQ.REVIEW_PENDING
  }
}

function H(e) {
  let {
    error: t
  } = e;
  O = false, v = t
}

function W(e) {
  let {} = e;
  A = "", N = null, R = true
}

function Y(e) {
  let {
    verificationWebviewUrl: t
  } = e;
  A = t, N = null, R = false
}

function K(e) {
  let {
    error: t
  } = e;
  A = "", N = t, R = false
}

function z(e) {
  let {} = e;
  A = "", N = null, R = false
}

function q(e) {
  let {} = e;
  for (let e in P = c.oE.LOADING, d) d[e].is_coppa && (d[e].appeal_status = {
    status: l.hQ.REVIEW_PENDING
  })
}

function X(e) {
  let {} = e;
  P = c.oE.LOADING, D = null
}

function Q(e) {
  let {} = e;
  P = c.oE.LOADING, D = null, C += 1
}

function J(e) {
  let {
    success: t
  } = e;
  P = t ? c.oE.SUCCESS : C < c.o6 ? c.oE.LOADING : c.oE.FAILURE, D = null
}

function $(e) {
  let {
    error: t
  } = e;
  P = c.oE.ERROR, D = t
}

function ee() {
  p = false, d = {}, _ = {
    state: Chunk531441.Sn.ALL_GOOD
  }, g = null, I = Chunk800530.bK.DIDNT_VIOLATE_POLICY, T = "", y = []
}
class et extends(r = Chunk442837.ZP.Store) {
  isFetching() {
    return p
  }
  getClassifications() {
    return Object.values(d)
  }
  getClassification(e) {
    return d[e]
  }
  getAccountStanding() {
    return _
  }
  getFetchError() {
    return m
  }
  isInitialized() {
    return h
  }
  getClassificationRequestState(e) {
    return f[e]
  }
  getAppealClassificationId() {
    return g
  }
  getIsDsaEligible() {
    return E
  }
  getIsAppealEligible() {
    return b
  }
  getAppealEligibility() {
    return y
  }
  getAppealSignal() {
    return I
  }
  getFreeTextAppealReason() {
    return T
  }
  getIsSubmitting() {
    return O
  }
  getSubmitError() {
    return v
  }
  getUsername() {
    return S
  }
  getAgeVerificationWebviewUrl() {
    return A
  }
  getAgeVerificationError() {
    return N
  }
  getIsLoadingAgeVerification() {
    return R
  }
  getAgeCheckStatus() {
    return P
  }
  getAgeCheckError() {
    return D
  }
  getAgeCheckAttempts() {
    return C
  }
}
u(et, "displayName", "SafetyHubStore");
let en = new et(Chunk570140.Z, {
  SAFETY_HUB_FETCH_START: w,
  SAFETY_HUB_FETCH_SUCCESS: L,
  SAFETY_HUB_FETCH_FAILURE: x,
  SAFETY_HUB_FETCH_CLASSIFICATION_START: M,
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: k,
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: j,
  SAFETY_HUB_APPEAL_OPEN: U,
  SAFETY_HUB_APPEAL_CLOSE: G,
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: B,
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: Z,
  SAFETY_HUB_REQUEST_REVIEW_START: F,
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: V,
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: H,
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: W,
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: Y,
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: K,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: z,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: z,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: q,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: X,
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: Q,
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: J,
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: $,
  LOGOUT: ee
})