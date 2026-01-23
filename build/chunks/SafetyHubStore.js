/** Chunk was on web.js **/
/** chunk id: 207913, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => en
});
var r, Chunk784041 = require("./784041.js"),
  a = require.n(Chunk784041),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk739010 = require("./739010.js"),
  Chunk239093 = require("./239093.js");

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
    state: Chunk739010.PN.ALL_GOOD
  },
  _ = false,
  h = false,
  m = null,
  g = null,
  E = false,
  y = false,
  b = [],
  O = false,
  v = null,
  A = Chunk239093.Iv.DIDNT_VIOLATE_POLICY,
  I = "",
  S = "",
  T = "",
  C = 0,
  N = null,
  R = false,
  w = Chunk239093.qN.NONE,
  P = null;

function D(e) {
  _ = true
}

function x(e) {
  let {
    classifications: t,
    accountStanding: n,
    isDsaEligible: r,
    isAppealEligible: i,
    username: s,
    appealEligibility: o
  } = e;
  d = a()(t, "id"), p = n, E = r, y = i, _ = false, h = true, m = null, S = s, b = o
}

function L(e) {
  let {
    error: t
  } = e;
  _ = false, h = false, m = t
}

function j(e) {
  f[e.classificationId] = l.nU.PENDING, _ = true
}

function M(e) {
  let {
    classification: t,
    accountStanding: n,
    isDsaEligible: r,
    username: i,
    isAppealEligible: a
  } = e;
  d[t.id] = t, f[t.id] = l.nU.SUCCESS, p = n, _ = false, m = null, E = r, y = a, h = true, S = i
}

function k(e) {
  let {
    error: t,
    classificationId: n
  } = e;
  _ = false, m = t, f[n] = l.nU.FAILED, h = false
}

function U(e) {
  let {
    classificationId: t
  } = e;
  g = t
}

function G() {
  g = null, A = c.Iv.DIDNT_VIOLATE_POLICY, I = ""
}

function V(e) {
  let {
    signal: t
  } = e;
  A = t
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

function H(e) {
  let {
    classificationId: t
  } = e;
  O = false, v = null, d[t].appeal_status = {
    status: l.Wi.REVIEW_PENDING
  }
}

function Y(e) {
  let {
    error: t
  } = e;
  O = false, v = t
}

function W(e) {
  let {} = e;
  T = "", N = null, R = true
}

function K(e) {
  let {
    verificationWebviewUrl: t
  } = e;
  T = t, N = null, R = false
}

function z(e) {
  let {
    error: t
  } = e;
  T = "", N = t, R = false
}

function q(e) {
  let {} = e;
  T = "", N = null, R = false
}

function X(e) {
  let {} = e;
  for (let e in w = c.qN.LOADING, d) d[e].is_coppa && (d[e].appeal_status = {
    status: l.Wi.REVIEW_PENDING
  })
}

function Z(e) {
  let {} = e;
  w = c.qN.LOADING, P = null
}

function Q(e) {
  let {} = e;
  w = c.qN.LOADING, P = null, C += 1
}

function $(e) {
  let {
    success: t
  } = e;
  w = t ? c.qN.SUCCESS : C < c.ti ? c.qN.LOADING : c.qN.FAILURE, P = null
}

function J(e) {
  let {
    error: t
  } = e;
  w = c.qN.ERROR, P = t
}

function ee() {
  _ = false, d = {}, p = {
    state: l.PN.ALL_GOOD
  }, g = null, A = c.Iv.DIDNT_VIOLATE_POLICY, I = "", b = []
}
class et extends(r = Chunk311907.Ay.Store) {
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
    return y
  }
  getAppealEligibility() {
    return b
  }
  getAppealSignal() {
    return A
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
    return S
  }
  getAgeVerificationWebviewUrl() {
    return T
  }
  getAgeVerificationError() {
    return N
  }
  getIsLoadingAgeVerification() {
    return R
  }
  getAgeCheckStatus() {
    return w
  }
  getAgeCheckError() {
    return P
  }
  getAgeCheckAttempts() {
    return C
  }
}
u(et, "displayName", "SafetyHubStore");
let en = new et(Chunk73153.h, {
  SAFETY_HUB_FETCH_START: D,
  SAFETY_HUB_FETCH_SUCCESS: x,
  SAFETY_HUB_FETCH_FAILURE: L,
  SAFETY_HUB_FETCH_CLASSIFICATION_START: j,
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: M,
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: k,
  SAFETY_HUB_APPEAL_OPEN: U,
  SAFETY_HUB_APPEAL_CLOSE: G,
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: V,
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: F,
  SAFETY_HUB_REQUEST_REVIEW_START: B,
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: H,
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: Y,
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: W,
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: K,
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: z,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: q,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: q,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: X,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: Z,
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: Q,
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: $,
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: J,
  LOGOUT: ee
})