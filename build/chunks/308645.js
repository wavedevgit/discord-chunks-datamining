/** Chunk was on web.js **/
/** chunk id: 308645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gf: () => _,
  Yn: () => d,
  d: () => m,
  hH: () => f,
  k9: () => h
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk77350 = require("./77350.js"),
  Chunk961350 = require("./961350.js"),
  Chunk207913 = require("./207913.js"),
  Chunk393033 = require("./393033.js"),
  Chunk239093 = require("./239093.js"),
  Chunk652215 = require("./652215.js");
async function d() {
  i.h.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let e = s.default.getSuspendedUserToken(),
    t = null != e ? u.Rsh.SAFETY_HUB_SUSPENDED : u.Rsh.SAFETY_HUB,
    n = null != e ? r.Bo.post({
      url: t,
      body: {
        token: e
      },
      rejectWithError: false
    }) : r.Bo.get({
      url: t,
      rejectWithError: false
    });
  await n.then(e => {
    let {
      body: t
    } = e, {
      classifications: n,
      guild_classifications: r,
      account_standing: a,
      is_dsa_eligible: s,
      username: o,
      is_appeal_eligible: l,
      appeal_eligibility: c
    } = t, u = n.map(e => (p(e), e));
    i.h.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: u.concat(null != r ? r : []),
      accountStanding: a,
      isDsaEligible: s,
      username: o,
      isAppealEligible: l,
      appealEligibility: null != c ? c : []
    })
  }).catch(e => {
    var t, n;
    i.h.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null != (t = null == e || null == (n = e.body) ? true : n.message) ? t : "Unknown error"
    })
  })
}
async function f(e) {
  i.h.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: e
  });
  let t = s.default.getSuspendedUserToken(),
    n = null != t ? u.Rsh.SAFETY_HUB_SUSPENDED : u.Rsh.SAFETY_HUB,
    a = null != t ? r.Bo.post({
      url: n,
      body: {
        token: t
      },
      rejectWithError: false
    }) : r.Bo.get({
      url: n,
      rejectWithError: false
    });
  await a.then(t => {
    let {
      body: n
    } = t, {
      classifications: r,
      account_standing: a,
      is_dsa_eligible: s,
      username: o,
      is_appeal_eligible: l
    } = n, c = r.find(t => t.id === e);
    null != c ? (p(c), i.h.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: c,
      accountStanding: a,
      isDsaEligible: s,
      username: o,
      isAppealEligible: l
    })) : i.h.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: e
    })
  }).catch(t => {
    var n, r;
    i.h.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null != (n = null == t || null == (r = t.body) ? true : r.message) ? n : "Unknown error",
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
      return (0, a.u)(t) || (0, a.AE)(t)
    }), e.flagged_content = (0, l.Jn)(t) ? [] : [t]
  }
}
async function _(e, t, n) {
  let a = s.default.getSuspendedUserToken(),
    o = null != a ? u.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : u.Rsh.SAFETY_HUB_REQUEST_REVIEW(e),
    l = null != a ? r.Bo.put({
      url: o,
      body: {
        signal: t,
        user_input: n,
        token: a
      },
      rejectWithError: false
    }) : r.Bo.put({
      url: o,
      body: {
        signal: t,
        user_input: n
      },
      rejectWithError: false
    });
  i.h.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await l.then(() => {
    i.h.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: e
    })
  }).catch(e => {
    var t, n;
    throw i.h.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null != (t = null == e || null == (n = e.body) ? true : n.message) ? t : "Unknown error"
    }), e
  })
}
async function h(e) {
  i.h.dispatch({
    type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START"
  });
  let t = s.default.getSuspendedUserToken(),
    n = u.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
    a = r.Bo.post({
      url: n,
      body: {
        token: t,
        from_classification_id: e
      },
      rejectWithError: false
    });
  await a.then(e => {
    let {
      body: t
    } = e, {
      verification_request_id: n,
      verification_webview_url: r
    } = t;
    i.h.dispatch({
      type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
      verificationRequestId: n,
      verificationWebviewUrl: r
    })
  }).catch(e => {
    var t, n;
    i.h.dispatch({
      type: "SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
      error: null != (t = null == e || null == (n = e.body) ? true : n.message) ? t : "Unknown error"
    })
  })
}
async function m() {
  i.h.dispatch({
    type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START"
  });
  let e = s.default.getSuspendedUserToken(),
    t = o.A.getAgeCheckAttempts(),
    n = u.Rsh.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION,
    a = r.Bo.post({
      url: n,
      body: {
        token: e
      },
      rejectWithError: false
    });
  await a.then(e => {
    let {
      body: n
    } = e, {
      success: r
    } = n;
    !r && t < c.ti && setTimeout(() => m(), c.Eb), i.h.dispatch({
      type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS",
      success: r
    })
  }).catch(e => {
    var t, n;
    i.h.dispatch({
      type: "SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE",
      error: null != (t = null == e || null == (n = e.body) ? true : n.message) ? t : "Unknown error"
    })
  })
}