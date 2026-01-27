/** Chunk was on web.js **/
/** chunk id: 295972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DJ: () => d,
  uf: () => l
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk393033 = require("./393033.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js");
async function l(e) {
  let {
    method: t,
    classificationId: n
  } = e;
  return (0, a.qn)() ? await u({
    classificationId: n,
    method: t
  }) : await c(t)
}
async function c(e) {
  return (await r.Bo.post({
    url: s.Rsh.VERIFY_AGE,
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
  return (await r.Bo.post({
    url: s.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
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
  return i.h.dispatch({
    type: "AGE_VERIFICATION_METHODS_LOAD_START"
  }), e = (0, a.qn)() ? p() : f(), await (null == e ? true : e.then(e => {
    i.h.dispatch({
      type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS",
      methods: e.body.methods
    })
  }).catch(() => {
    i.h.dispatch({
      type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE"
    })
  }))
}

function f() {
  return r.Bo.get({
    url: s.Rsh.AGE_VERIFICATION_METHODS,
    rejectWithError: true
  })
}

function p() {
  let e = o.default.getSuspendedUserToken();
  return r.Bo.post({
    url: s.Rsh.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
    rejectWithError: true,
    body: {
      token: e
    }
  })
}