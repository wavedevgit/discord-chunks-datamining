/** Chunk was on 83518 **/
/** chunk id: 207913, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => Y
});
var E, i, Chunk784041 = require("./784041.js"),
  l = require.n(Chunk784041),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk739010 = require("./739010.js"),
  Chunk239093 = require("./239093.js");
let S = {},
  s = {},
  T = {
    state: Chunk739010.PN.ALL_GOOD
  },
  o = false,
  U = false,
  c = null,
  p = null,
  d = false,
  C = false,
  g = [],
  F = false,
  I = null,
  R = Chunk239093.Iv.DIDNT_VIOLATE_POLICY,
  f = "",
  h = "",
  H = "",
  D = 0,
  L = null,
  N = false,
  P = Chunk239093.qN.NONE,
  B = null;

function O(t) {
  let {} = t;
  H = "", L = null, N = false
}
class b extends(i = Chunk311907.Ay.Store) {
  isFetching() {
    return o
  }
  getClassifications() {
    return Object.values(S)
  }
  getClassification(t) {
    return S[t]
  }
  getAccountStanding() {
    return T
  }
  getFetchError() {
    return c
  }
  isInitialized() {
    return U
  }
  getClassificationRequestState(t) {
    return s[t]
  }
  getAppealClassificationId() {
    return p
  }
  getIsDsaEligible() {
    return d
  }
  getIsAppealEligible() {
    return C
  }
  getAppealEligibility() {
    return g
  }
  getAppealSignal() {
    return R
  }
  getFreeTextAppealReason() {
    return f
  }
  getIsSubmitting() {
    return F
  }
  getSubmitError() {
    return I
  }
  getUsername() {
    return h
  }
  getAgeVerificationWebviewUrl() {
    return H
  }
  getAgeVerificationError() {
    return L
  }
  getIsLoadingAgeVerification() {
    return N
  }
  getAgeCheckStatus() {
    return P
  }
  getAgeCheckError() {
    return B
  }
  getAgeCheckAttempts() {
    return D
  }
}(E = "displayName") in b ? Object.defineProperty(b, E, {
  value: "SafetyHubStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : b[E] = "SafetyHubStore";
let Y = new b(Chunk73153.h, {
  SAFETY_HUB_FETCH_START: function(t) {
    o = true
  },
  SAFETY_HUB_FETCH_SUCCESS: function(t) {
    let {
      classifications: e,
      accountStanding: n,
      isDsaEligible: E,
      isAppealEligible: i,
      username: _,
      appealEligibility: A
    } = t;
    S = l()(e, "id"), T = n, d = E, C = i, o = false, U = true, c = null, h = _, g = A
  },
  SAFETY_HUB_FETCH_FAILURE: function(t) {
    let {
      error: e
    } = t;
    o = false, U = false, c = e
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
    s[t.classificationId] = a.nU.PENDING, o = true
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
    let {
      classification: e,
      accountStanding: n,
      isDsaEligible: E,
      username: i,
      isAppealEligible: _
    } = t;
    S[e.id] = e, s[e.id] = a.nU.SUCCESS, T = n, o = false, c = null, d = E, C = _, U = true, h = i
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
    let {
      error: e,
      classificationId: n
    } = t;
    o = false, c = e, s[n] = a.nU.FAILED, U = false
  },
  SAFETY_HUB_APPEAL_OPEN: function(t) {
    let {
      classificationId: e
    } = t;
    p = e
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    p = null, R = u.Iv.DIDNT_VIOLATE_POLICY, f = ""
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(t) {
    let {
      signal: e
    } = t;
    R = e
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function(t) {
    let {
      userInput: e
    } = t;
    f = e
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function(t) {
    let {} = t;
    F = true, I = null
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(t) {
    let {
      classificationId: e
    } = t;
    F = false, I = null, S[e].appeal_status = {
      status: a.Wi.REVIEW_PENDING
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(t) {
    let {
      error: e
    } = t;
    F = false, I = e
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function(t) {
    let {} = t;
    H = "", L = null, N = true
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function(t) {
    let {
      verificationWebviewUrl: e
    } = t;
    H = e, L = null, N = false
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function(t) {
    let {
      error: e
    } = t;
    H = "", L = e, N = false
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: O,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: O,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function(t) {
    let {} = t;
    for (let t in P = u.qN.LOADING, S) S[t].is_coppa && (S[t].appeal_status = {
      status: a.Wi.REVIEW_PENDING
    })
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function(t) {
    let {} = t;
    P = u.qN.LOADING, B = null
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function(t) {
    let {} = t;
    P = u.qN.LOADING, B = null, D += 1
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function(t) {
    let {
      success: e
    } = t;
    P = e ? u.qN.SUCCESS : D < u.ti ? u.qN.LOADING : u.qN.FAILURE, B = null
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function(t) {
    let {
      error: e
    } = t;
    P = u.qN.ERROR, B = e
  },
  LOGOUT: function() {
    o = false, S = {}, T = {
      state: a.PN.ALL_GOOD
    }, p = null, R = u.Iv.DIDNT_VIOLATE_POLICY, f = "", g = []
  }
})