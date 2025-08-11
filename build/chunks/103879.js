/** Chunk was on 3940 **/
/** chunk id: 103879, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  FN: () => c,
  NA: () => S,
  _w: () => U,
  uR: () => T,
  yq: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk406432 = require("./406432.js"),
  Chunk314897 = require("./314897.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk800530 = require("./800530.js"),
  Chunk981631 = require("./981631.js");
async function o() {
  Chunk570140.Z.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let t = Chunk314897.default.getSuspendedUserToken(),
    e = null != module ? Chunk981631.ANM.SAFETY_HUB_SUSPENDED : Chunk981631.ANM.SAFETY_HUB,
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
  await require.then(t => {
    let {
      body: e
    } = t, {
      classifications: n,
      guild_classifications: i,
      account_standing: _,
      is_dsa_eligible: l,
      username: A,
      is_appeal_eligible: a,
      appeal_eligibility: r
    } = e, u = n.map(t => (s(t), t));
    E.Z.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: u.concat(null != i ? i : []),
      accountStanding: _,
      isDsaEligible: l,
      username: A,
      isAppealEligible: a,
      appealEligibility: null != r ? r : []
    })
  }).catch(t => {
    var e, n;
    E.Z.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null != (n = null == t || null == (e = t.body) ? true : e.message) ? n : "Unknown error"
    })
  })
}
async function S(t) {
  E.Z.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: t
  });
  let e = l.default.getSuspendedUserToken(),
    n = null != e ? u.ANM.SAFETY_HUB_SUSPENDED : u.ANM.SAFETY_HUB,
    _ = null != e ? i.tn.post({
      url: n,
      body: {
        token: e
      },
      rejectWithError: false
    }) : i.tn.get({
      url: n,
      rejectWithError: false
    });
  await _.then(e => {
    let {
      body: n
    } = e, {
      classifications: i,
      account_standing: _,
      is_dsa_eligible: l,
      username: A,
      is_appeal_eligible: a
    } = n, r = i.find(e => e.id === t);
    null != r ? (s(r), E.Z.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: r,
      accountStanding: _,
      isDsaEligible: l,
      username: A,
      isAppealEligible: a
    })) : E.Z.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: t
    })
  }).catch(e => {
    var n, i;
    E.Z.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null != (i = null == e || null == (n = e.body) ? true : n.message) ? i : "Unknown error",
      classificationId: t
    })
  })
}

function s(t) {
  if (null != t.flagged_content && t.flagged_content.length > 0) {
    let e = t.flagged_content[0];
    e.attachments = e.attachments.filter(t => {
      let {
        filename: e
      } = t;
      return (0, _.CO)(e) || (0, _.NU)(e)
    }), t.flagged_content = (0, a.Vt)(e) ? [] : [e]
  }
}
async function T(t, e, n) {
  let _ = l.default.getSuspendedUserToken(),
    A = null != _ ? u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : u.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
    a = null != _ ? i.tn.put({
      url: A,
      body: {
        signal: e,
        user_input: n,
        token: _
      },
      rejectWithError: false
    }) : i.tn.put({
      url: A,
      body: {
        signal: e,
        user_input: n
      },
      rejectWithError: false
    });
  E.Z.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await a.then(() => {
    E.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: t
    })
  }).catch(t => {
    var e, n;
    throw E.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null != (n = null == t || null == (e = t.body) ? true : e.message) ? n : "Unknown error"
    }), t
  })
}
async function c(t) {
  E.Z.dispatch({
    type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START"
  });
  let e = l.default.getSuspendedUserToken(),
    n = u.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
    _ = i.tn.post({
      url: n,
      body: {
        token: e,
        from_classification_id: t
      },
      rejectWithError: false
    });
  await _.then(t => {
    let {
      body: e
    } = t, {
      verification_request_id: n,
      verification_webview_url: i
    } = e;
    E.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
      verificationRequestId: n,
      verificationWebviewUrl: i
    })
  }).catch(t => {
    var e, n;
    E.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
      error: null != (n = null == t || null == (e = t.body) ? true : e.message) ? n : "Unknown error"
    })
  })
}
async function U() {
  Chunk570140.Z.dispatch({
    type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START"
  });
  let t = Chunk314897.default.getSuspendedUserToken(),
    e = Chunk236289.Z.getAgeCheckAttempts(),
    n = Chunk981631.ANM.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
    _ = Chunk544891.tn.post({
      url: require,
      body: {
        token: module
      },
      rejectWithError: false
    });
  await Chunk406432.then(t => {
    let {
      body: n
    } = t, {
      success: i
    } = n;
    !i && e < r.o6 && setTimeout(() => U(), r.Cp), E.Z.dispatch({
      type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
      success: i
    })
  }).catch(t => {
    var e, n;
    E.Z.dispatch({
      type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
      error: null != (n = null == t || null == (e = t.body) ? true : e.message) ? n : "Unknown error"
    })
  })
}