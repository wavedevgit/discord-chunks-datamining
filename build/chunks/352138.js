/** Chunk was on web.js **/
/** chunk id: 352138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jh: () => d,
  pU: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk788080 = require("./788080.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js");
async function l(e) {
  let {
    method: t,
    classificationId: n
  } = e;
  return (0, a.yF)() ? await u({
    classificationId: n,
    method: t
  }) : await c(t)
}
async function c(e) {
  return (await r.tn.post({
    url: s.ANM.VERIFY_AGE,
    body: {
      method: e
    },
    rejectWithError: true
  })).body
}
async function u(e) {
  let {
    classificationId: t,
    method: n
  } = e, i = o.default.getSuspendedUserToken();
  return (await r.tn.post({
    url: s.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
    body: {
      token: i,
      from_classification_id: t,
      method: n
    },
    rejectWithError: true
  })).body
}
async function d() {
  let e;
  return i.Z.dispatch({
    type: "AGE_VERIFICATION_METHODS_LOAD_START"
  }), e = (0, a.yF)() ? p() : f(), await (null == e ? true : e.then(e => {
    i.Z.dispatch({
      type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS",
      methods: e.body.methods
    })
  }).catch(() => {
    i.Z.dispatch({
      type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE"
    })
  }))
}

function f() {
  return r.tn.get({
    url: s.ANM.AGE_VERIFICATION_METHODS,
    rejectWithError: true
  })
}

function p() {
  let e = o.default.getSuspendedUserToken();
  return r.tn.post({
    url: s.ANM.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
    rejectWithError: true,
    body: {
      token: e
    }
  })
}