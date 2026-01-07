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
  p = {
    state: Chunk531441.Sn.ALL_GOOD
  },
  _ = false,
  m = false,
  h = null,
  g = null,
  E = false,
  b = false,
  y = [],
  O = false,
  v = null,
  S = Chunk800530.bK.DIDNT_VIOLATE_POLICY,
  I = "",
  T = "",
  C = "",
  A = 0,
  N = null,
  P = false,
  R = Chunk800530.oE.NONE,
  w = null;

function D(e) {
  _ = true
}

function x(e) {
  let {
    classifications: t,
    accountStanding: n,
    isDsaEligible: r,
    isAppealEligible: i,
    username: o,
    appealEligibility: s
  } = e;
  d = a()(t, "id"), p = n, E = r, b = i, _ = false, m = true, h = null, T = o, y = s
}

function L(e) {
  let {
    error: t
  } = e;
  _ = false, m = false, h = t
}

function j(e) {
  f[e.classificationId] = l.OY.PENDING, _ = true
}

function M(e) {
  let {
    classification: t,
    accountStanding: n,
    isDsaEligible: r,
    username: i,
    isAppealEligible: a
  } = e;
  d[t.id] = t, f[t.id] = l.OY.SUCCESS, p = n, _ = false, h = null, E = r, b = a, m = true, T = i
}

function k(e) {
  let {
    error: t,
    classificationId: n
  } = e;
  _ = false, h = t, f[n] = l.OY.FAILED, m = false
}

function U(e) {
  let {
    classificationId: t
  } = e;
  g = t
}

function G() {
  g = null, S = c.bK.DIDNT_VIOLATE_POLICY, I = ""
}

function Z(e) {
  let {
    signal: t
  } = e;
  S = t
}

function F(e) {
  let {
    userInput: t
  } = e;
  I = t
}

function B(e) {
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

function Y(e) {
  let {} = e;
  C = "", N = null, P = true
}

function W(e) {
  let {
    verificationWebviewUrl: t
  } = e;
  C = t, N = null, P = false
}

function K(e) {
  let {
    error: t
  } = e;
  C = "", N = t, P = false
}

function z(e) {
  let {} = e;
  C = "", N = null, P = false
}

function q(e) {
  let {} = e;
  for (let e in R = c.oE.LOADING, d) d[e].is_coppa && (d[e].appeal_status = {
    status: l.hQ.REVIEW_PENDING
  })
}

function Q(e) {
  let {} = e;
  R = c.oE.LOADING, w = null
}

function X(e) {
  let {} = e;
  R = c.oE.LOADING, w = null, A += 1
}

function J(e) {
  let {
    success: t
  } = e;
  R = t ? c.oE.SUCCESS : A < c.o6 ? c.oE.LOADING : c.oE.FAILURE, w = null
}

function $(e) {
  let {
    error: t
  } = e;
  R = c.oE.ERROR, w = t
}

function ee() {
  _ = false, d = {}, p = {
    state: l.Sn.ALL_GOOD
  }, g = null, S = c.bK.DIDNT_VIOLATE_POLICY, I = "", y = []
}
class et extends(r = Chunk442837.ZP.Store) {
  isFetching() {
    return _
  }
  getClassifications() {
    return Object.values(d)
  }
  getClassification(e) {
    return d[e]
  }
  getAccountStanding() {
    return p
  }
  getFetchError() {
    return h
  }
  isInitialized() {
    return m
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
    return S
  }
  getFreeTextAppealReason() {
    return I
  }
  getIsSubmitting() {
    return O
  }
  getSubmitError() {
    return v
  }
  getUsername() {
    return T
  }
  getAgeVerificationWebviewUrl() {
    return C
  }
  getAgeVerificationError() {
    return N
  }
  getIsLoadingAgeVerification() {
    return P
  }
  getAgeCheckStatus() {
    return R
  }
  getAgeCheckError() {
    return w
  }
  getAgeCheckAttempts() {
    return A
  }
}
u(et, "displayName", "SafetyHubStore");
let en = new et(Chunk570140.Z, {
  SAFETY_HUB_FETCH_START: D,
  SAFETY_HUB_FETCH_SUCCESS: x,
  SAFETY_HUB_FETCH_FAILURE: L,
  SAFETY_HUB_FETCH_CLASSIFICATION_START: j,
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: M,
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: k,
  SAFETY_HUB_APPEAL_OPEN: U,
  SAFETY_HUB_APPEAL_CLOSE: G,
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: Z,
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: F,
  SAFETY_HUB_REQUEST_REVIEW_START: B,
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: V,
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: H,
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: Y,
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: W,
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: K,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: z,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: z,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: q,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: Q,
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: X,
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: J,
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: $,
  LOGOUT: ee
})