/** Chunk was on 3940 **/
/** chunk id: 236289, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var i, E, _, Chunk979079 = require("./979079.js"),
  A = require.n(Chunk979079),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk531441 = require("./531441.js"),
  Chunk800530 = require("./800530.js");
let S = {},
  s = {},
  T = {
    state: Chunk531441.Sn.ALL_GOOD
  },
  c = false,
  U = false,
  p = null,
  d = null,
  f = false,
  g = false,
  C = [],
  F = false,
  I = null,
  R = Chunk800530.bK.DIDNT_VIOLATE_POLICY,
  D = "",
  H = "",
  L = "",
  N = 0,
  O = null,
  P = false,
  h = Chunk800530.oE.NONE,
  Y = null;

function b(t) {
  let {} = t;
  L = "", O = null, P = false
}
class B extends(_ = Chunk442837.ZP.Store) {
  isFetching() {
    return c
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
    return p
  }
  isInitialized() {
    return U
  }
  getClassificationRequestState(t) {
    return s[t]
  }
  getAppealClassificationId() {
    return d
  }
  getIsDsaEligible() {
    return f
  }
  getIsAppealEligible() {
    return g
  }
  getAppealEligibility() {
    return C
  }
  getAppealSignal() {
    return R
  }
  getFreeTextAppealReason() {
    return D
  }
  getIsSubmitting() {
    return F
  }
  getSubmitError() {
    return I
  }
  getUsername() {
    return H
  }
  getAgeVerificationWebviewUrl() {
    return L
  }
  getAgeVerificationError() {
    return O
  }
  getIsLoadingAgeVerification() {
    return P
  }
  getAgeCheckStatus() {
    return h
  }
  getAgeCheckError() {
    return Y
  }
  getAgeCheckAttempts() {
    return N
  }
}
E = "SafetyHubStore", (i = "displayName") in B ? Object.defineProperty(B, i, {
  value: E,
  enumerable: true,
  configurable: true,
  writable: true
}) : B[i] = E;
let y = new B(Chunk570140.Z, {
  SAFETY_HUB_FETCH_START: function(t) {
    c = true
  },
  SAFETY_HUB_FETCH_SUCCESS: function(t) {
    let {
      classifications: e,
      accountStanding: n,
      isDsaEligible: i,
      isAppealEligible: E,
      username: _,
      appealEligibility: l
    } = t;
    S = A()(e, "id"), T = n, f = i, g = E, c = false, U = true, p = null, H = _, C = l
  },
  SAFETY_HUB_FETCH_FAILURE: function(t) {
    let {
      error: e
    } = t;
    c = false, U = false, p = e
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
    s[t.classificationId] = u.OY.PENDING, c = true
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
    let {
      classification: e,
      accountStanding: n,
      isDsaEligible: i,
      username: E,
      isAppealEligible: _
    } = t;
    S[e.id] = e, s[e.id] = u.OY.SUCCESS, T = n, c = false, p = null, f = i, g = _, U = true, H = E
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
    let {
      error: e,
      classificationId: n
    } = t;
    c = false, p = e, s[n] = u.OY.FAILED, U = false
  },
  SAFETY_HUB_APPEAL_OPEN: function(t) {
    let {
      classificationId: e
    } = t;
    d = e
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    d = null, R = Chunk800530.bK.DIDNT_VIOLATE_POLICY, D = ""
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
    D = e
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
      status: u.hQ.REVIEW_PENDING
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
    L = "", O = null, P = true
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function(t) {
    let {
      verificationWebviewUrl: e
    } = t;
    L = e, O = null, P = false
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function(t) {
    let {
      error: e
    } = t;
    L = "", O = e, P = false
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: b,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: b,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function(t) {
    let {} = t;
    for (let t in h = o.oE.LOADING, S) S[t].is_coppa && (S[t].appeal_status = {
      status: u.hQ.REVIEW_PENDING
    })
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function(t) {
    let {} = t;
    h = o.oE.LOADING, Y = null
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function(t) {
    let {} = t;
    h = o.oE.LOADING, Y = null, N += 1
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function(t) {
    let {
      success: e
    } = t;
    h = e ? o.oE.SUCCESS : N < o.o6 ? o.oE.LOADING : o.oE.FAILURE, Y = null
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function(t) {
    let {
      error: e
    } = t;
    h = o.oE.ERROR, Y = e
  },
  LOGOUT: function() {
    c = false, S = {}, T = {
      state: Chunk531441.Sn.ALL_GOOD
    }, d = null, R = Chunk800530.bK.DIDNT_VIOLATE_POLICY, D = "", C = []
  }
})