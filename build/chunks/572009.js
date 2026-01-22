/** Chunk was on web.js **/
/** chunk id: 572009, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I9: () => u,
  _$: () => c,
  _D: () => d,
  gX: () => l,
  nq: () => f
}), require("./938796.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk665260 = require("./665260.js"),
  Chunk115093 = require("./115093.js"),
  Chunk652215 = require("./652215.js");

function l(e, t, n) {
  e || true === t || i()(n === t, "Premium type should not change for non-staff users")
}

function c(e) {
  return "production" === s.B.TEST && null != e ? e : "production"
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : true;
  return c(t) === s.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === s.B.STAGING || null != e && (e.isStaff() || e.isStaffPersonal())
}

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : true;
  return c(t) === s.B.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === s.B.STAGING || null != e && (!!(null != e.flags && (0, a.Lt)(e.flags, o.nhx.STAFF)) || null != e.personal_connection_id)
}

function f(e) {
  return true !== e && e === o.oA2 ? null : e
}