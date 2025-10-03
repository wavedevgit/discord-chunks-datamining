/** Chunk was on web.js **/
/** chunk id: 365007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L$: () => _,
  Sr: () => p,
  WQ: () => f,
  cT: () => d,
  d$: () => c,
  ef: () => h,
  hL: () => u,
  us: () => l,
  vg: () => m
});
var Chunk525769 = require("./525769.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");
async function l() {
  return (await Chunk544891.tn.post({
    url: Chunk981631.ANM.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
    headers: {
      authorization: ""
    },
    rejectWithError: false
  })).body
}
async function c() {
  let {
    challenge: e,
    ticket: t
  } = (await Chunk544891.tn.post({
    url: Chunk981631.ANM.WEBAUTHN_PASSWORDLESS_CHALLENGE,
    rejectWithError: false
  })).body;
  return {
    challenge: module,
    ticket: exports
  }
}

function u() {
  Chunk544891.tn.get({
    url: Chunk981631.ANM.MFA_WEBAUTHN_CREDENTIALS,
    rejectWithError: true
  }).then(e => {
    a.Z.dispatch({
      type: "MFA_WEBAUTHN_CREDENTIALS_LOADED",
      credentials: e.body
    })
  })
}

function d(e) {
  i.tn.del({
    url: s.ANM.MFA_WEBAUTHN_CREDENTIAL(e.id),
    rejectWithError: true
  }).then(() => {
    a.Z.dispatch({
      type: "AUTHENTICATOR_DELETE",
      credential: e
    })
  })
}
async function f(e, t) {
  let n = await i.tn.patch({
    url: s.ANM.MFA_WEBAUTHN_CREDENTIAL(e),
    body: {
      name: t
    },
    rejectWithError: false
  });
  a.Z.dispatch({
    type: "AUTHENTICATOR_UPDATE",
    credential: n.body
  })
}
async function _() {
  let {
    body: {
      ticket: e,
      challenge: t
    }
  } = await Chunk544891.tn.post({
    url: Chunk981631.ANM.MFA_WEBAUTHN_CREDENTIALS,
    body: {},
    rejectWithError: false
  });
  return {
    ticket: module,
    challenge: exports
  }
}
async function p(e, t, n) {
  let i = await o.Z.post({
    url: s.ANM.MFA_WEBAUTHN_CREDENTIALS,
    body: {
      name: e,
      ticket: t,
      credential: n
    },
    trackedActionData: {
      event: r.a.WEBAUTHN_REGISTER
    },
    rejectWithError: false
  });
  a.Z.dispatch({
    type: "AUTHENTICATOR_CREATE",
    credential: i.body
  }), a.Z.dispatch({
    type: "MFA_ENABLE_SUCCESS",
    codes: i.body.backup_codes
  })
}

function h() {
  Chunk570140.Z.dispatch({
    type: "WEBAUTHN_TRIGGER_REGISTER"
  })
}

function m() {
  Chunk570140.Z.dispatch({
    type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER"
  })
}