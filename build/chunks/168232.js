/** Chunk was on web.js **/
/** chunk id: 168232, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => f,
  QI: () => u,
  VR: () => d,
  dU: () => c,
  jX: () => l
}), require("./997841.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk95015 = require("./95015.js"),
  Chunk48541 = require("./48541.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  e || true === t || i()(n === t, "Premium type should not change for non-staff users")
}

function c(e) {
  return "production" === a.C.TEST && null != e ? e : "production"
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : true;
  return c(t) === a.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === a.C.STAGING || null != e && (e.isStaff() || e.isStaffPersonal())
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : true;
  return c(t) === a.C.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === a.C.STAGING || null != e && (!!(null != e.flags && (0, o.yE)(e.flags, s.xW$.STAFF)) || null != e.personal_connection_id)
}

function f(e) {
  return true !== e && e === s.WND ? null : e
}