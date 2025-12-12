/** Chunk was on web.js **/
/** chunk id: 103879, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FN: () => m,
  NA: () => f,
  _w: () => h,
  uR: () => _,
  yq: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk406432 = require("./406432.js"),
  Chunk314897 = require("./314897.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js");
async function d() {
  Chunk570140.Z.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let e = Chunk314897.default.getSuspendedUserToken(),
    t = null != module ? Chunk981631.ANM.SAFETY_HUB_SUSPENDED : Chunk981631.ANM.SAFETY_HUB,
    n = null != module ? Chunk544891.tn.post({
      url: exports,
      body: {
        token: module
      },
      rejectWithError: false
    }) : Chunk544891.tn.get({
      url: exports,
      rejectWithError: false
    });
  await require.then(e => {
    let {
      body: t
    } = e, {
      classifications: n,
      guild_classifications: r,
      account_standing: o,
      is_dsa_eligible: a,
      username: s,
      is_appeal_eligible: l,
      appeal_eligibility: c
    } = t, u = n.map(e => (p(e), e));
    i.Z.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: u.concat(null != r ? r : []),
      accountStanding: o,
      isDsaEligible: a,
      username: s,
      isAppealEligible: l,
      appealEligibility: null != c ? c : []
    })
  }).catch(e => {
    var t, n;
    i.Z.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null != (n = null == e || null == (t = e.body) ? true : t.message) ? n : "Unknown error"
    })
  })
}
async function f(e) {
  i.Z.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: e
  });
  let t = a.default.getSuspendedUserToken(),
    n = null != t ? u.ANM.SAFETY_HUB_SUSPENDED : u.ANM.SAFETY_HUB,
    o = null != t ? r.tn.post({
      url: n,
      body: {
        token: t
      },
      rejectWithError: false
    }) : r.tn.get({
      url: n,
      rejectWithError: false
    });
  await o.then(t => {
    let {
      body: n
    } = t, {
      classifications: r,
      account_standing: o,
      is_dsa_eligible: a,
      username: s,
      is_appeal_eligible: l
    } = n, c = r.find(t => t.id === e);
    null != c ? (p(c), i.Z.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: c,
      accountStanding: o,
      isDsaEligible: a,
      username: s,
      isAppealEligible: l
    })) : i.Z.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: e
    })
  }).catch(t => {
    var n, r;
    i.Z.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null != (r = null == t || null == (n = t.body) ? true : n.message) ? r : "Unknown error",
      classificationId: e
    })
  })
}

function p(e) {
  if (null != e.flagged_content && e.flagged_content.length > 0) {
    let t = e.flagged_content[0];
    t.attachments = t.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, o.CO)(t) || (0, o.NU)(t)
    }), e.flagged_content = (0, l.Vt)(t) ? [] : [t]
  }
}
async function _(e, t, n) {
  let o = a.default.getSuspendedUserToken(),
    s = null != o ? u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : u.ANM.SAFETY_HUB_REQUEST_REVIEW(e),
    l = null != o ? r.tn.put({
      url: s,
      body: {
        signal: t,
        user_input: n,
        token: o
      },
      rejectWithError: false
    }) : r.tn.put({
      url: s,
      body: {
        signal: t,
        user_input: n
      },
      rejectWithError: false
    });
  i.Z.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await l.then(() => {
    i.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: e
    })
  }).catch(e => {
    var t, n;
    throw i.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null != (n = null == e || null == (t = e.body) ? true : t.message) ? n : "Unknown error"
    }), e
  })
}
async function m(e) {
  i.Z.dispatch({
    type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START"
  });
  let t = a.default.getSuspendedUserToken(),
    n = u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
    o = r.tn.post({
      url: n,
      body: {
        token: t,
        from_classification_id: e
      },
      rejectWithError: false
    });
  await o.then(e => {
    let {
      body: t
    } = e, {
      verification_request_id: n,
      verification_webview_url: r
    } = t;
    i.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
      verificationRequestId: n,
      verificationWebviewUrl: r
    })
  }).catch(e => {
    var t, n;
    i.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
      error: null != (n = null == e || null == (t = e.body) ? true : t.message) ? n : "Unknown error"
    })
  })
}
async function h() {
  Chunk570140.Z.dispatch({
    type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START"
  });
  let e = Chunk314897.default.getSuspendedUserToken(),
    t = Chunk236289.Z.getAgeCheckAttempts(),
    n = Chunk981631.ANM.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
    o = Chunk544891.tn.post({
      url: require,
      body: {
        token: module
      },
      rejectWithError: false
    });
  await Chunk406432.then(e => {
    let {
      body: n
    } = e, {
      success: r
    } = n;
    !r && t < c.o6 && setTimeout(() => h(), c.Cp), i.Z.dispatch({
      type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
      success: r
    })
  }).catch(e => {
    var t, n;
    i.Z.dispatch({
      type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
      error: null != (n = null == e || null == (t = e.body) ? true : t.message) ? n : "Unknown error"
    })
  })
}