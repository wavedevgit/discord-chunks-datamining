/** Chunk was on 3940 **/
/** chunk id: 236289, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
});
var i, E, Chunk979079 = require("./979079.js"),
  l = require.n(Chunk979079),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk531441 = require("./531441.js"),
  Chunk800530 = require("./800530.js");
let o = {},
  S = {},
  s = {
    state: Chunk531441.Sn.ALL_GOOD
  },
  T = false,
  c = false,
  U = null,
  p = null,
  d = false,
  f = false,
  g = [],
  C = false,
  F = null,
  I = Chunk800530.bK.DIDNT_VIOLATE_POLICY,
  R = "",
  D = "",
  H = "",
  L = 0,
  N = null,
  O = false,
  P = Chunk800530.oE.NONE,
  b = null;

function h(t) {
  let {} = t;
  H = "", N = null, O = false
}
class Y extends(E = Chunk442837.ZP.Store) {
  isFetching() {
    return T
  }
  getClassifications() {
    return Object.values(o)
  }
  getClassification(t) {
    return o[t]
  }
  getAccountStanding() {
    return s
  }
  getFetchError() {
    return U
  }
  isInitialized() {
    return c
  }
  getClassificationRequestState(t) {
    return S[t]
  }
  getAppealClassificationId() {
    return p
  }
  getIsDsaEligible() {
    return d
  }
  getIsAppealEligible() {
    return f
  }
  getAppealEligibility() {
    return g
  }
  getAppealSignal() {
    return I
  }
  getFreeTextAppealReason() {
    return R
  }
  getIsSubmitting() {
    return C
  }
  getSubmitError() {
    return F
  }
  getUsername() {
    return D
  }
  getAgeVerificationWebviewUrl() {
    return H
  }
  getAgeVerificationError() {
    return N
  }
  getIsLoadingAgeVerification() {
    return O
  }
  getAgeCheckStatus() {
    return P
  }
  getAgeCheckError() {
    return b
  }
  getAgeCheckAttempts() {
    return L
  }
}(i = "displayName") in Y ? Object.defineProperty(Y, i, {
  value: "SafetyHubStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : Y[i] = "SafetyHubStore";
let B = new Y(Chunk570140.Z, {
  SAFETY_HUB_FETCH_START: function(t) {
    T = true
  },
  SAFETY_HUB_FETCH_SUCCESS: function(t) {
    let {
      classifications: e,
      accountStanding: n,
      isDsaEligible: i,
      isAppealEligible: E,
      username: _,
      appealEligibility: A
    } = t;
    o = l()(e, "id"), s = n, d = i, f = E, T = false, c = true, U = null, D = _, g = A
  },
  SAFETY_HUB_FETCH_FAILURE: function(t) {
    let {
      error: e
    } = t;
    T = false, c = false, U = e
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
    S[t.classificationId] = r.OY.PENDING, T = true
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
    let {
      classification: e,
      accountStanding: n,
      isDsaEligible: i,
      username: E,
      isAppealEligible: _
    } = t;
    o[e.id] = e, S[e.id] = r.OY.SUCCESS, s = n, T = false, U = null, d = i, f = _, c = true, D = E
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
    let {
      error: e,
      classificationId: n
    } = t;
    T = false, U = e, S[n] = r.OY.FAILED, c = false
  },
  SAFETY_HUB_APPEAL_OPEN: function(t) {
    let {
      classificationId: e
    } = t;
    p = e
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    p = null, I = Chunk800530.bK.DIDNT_VIOLATE_POLICY, R = ""
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(t) {
    let {
      signal: e
    } = t;
    I = e
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function(t) {
    let {
      userInput: e
    } = t;
    R = e
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function(t) {
    let {} = t;
    C = true, F = null
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(t) {
    let {
      classificationId: e
    } = t;
    C = false, F = null, o[e].appeal_status = {
      status: r.hQ.REVIEW_PENDING
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(t) {
    let {
      error: e
    } = t;
    C = false, F = e
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START: function(t) {
    let {} = t;
    H = "", N = null, O = true
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function(t) {
    let {
      verificationWebviewUrl: e
    } = t;
    H = e, N = null, O = false
  },
  SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function(t) {
    let {
      error: e
    } = t;
    H = "", N = e, O = false
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN: h,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE: h,
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS: function(t) {
    let {} = t;
    for (let t in P = u.oE.LOADING, o) o[t].is_coppa && (o[t].appeal_status = {
      status: r.hQ.REVIEW_PENDING
    })
  },
  SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL: function(t) {
    let {} = t;
    P = u.oE.LOADING, b = null
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START: function(t) {
    let {} = t;
    P = u.oE.LOADING, b = null, L += 1
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS: function(t) {
    let {
      success: e
    } = t;
    P = e ? u.oE.SUCCESS : L < u.o6 ? u.oE.LOADING : u.oE.FAILURE, b = null
  },
  SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE: function(t) {
    let {
      error: e
    } = t;
    P = u.oE.ERROR, b = e
  },
  LOGOUT: function() {
    T = false, o = {}, s = {
      state: Chunk531441.Sn.ALL_GOOD
    }, p = null, I = Chunk800530.bK.DIDNT_VIOLATE_POLICY, R = "", g = []
  }
})