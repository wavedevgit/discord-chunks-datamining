/** Chunk was on web.js **/
/** chunk id: 356645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => g
});
var Chunk562465 = require("./562465.js"),
  Chunk499979 = require("./499979.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk773669 = require("./773669.js"),
  Chunk189081 = require("./189081.js"),
  Chunk645243 = require("./645243.js"),
  Chunk927813 = require("./927813.js"),
  Chunk652215 = require("./652215.js");
let f = 10 * Chunk927813.A.Millis.MINUTE,
  p = 10 * Chunk927813.A.Millis.MINUTE,
  _ = +Chunk927813.A.Millis.MINUTE,
  h = {};

function m(e, t) {
  null == h[t] && (h[t] = new a.Ep), h[t].start(f + Math.random() * p, () => {
    null != l.A.getLibraryApplication(e, t) && g(e, t)
  })
}
async function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    a = o.default.locale;
  return s.h.dispatch({
    type: "APPLICATION_BUILD_FETCH_START",
    applicationId: e,
    branchId: t,
    locale: a
  }), n && await (0, i.yy)(Math.random() * _), r.Bo.get({
    url: d.Rsh.APPLICATION_LIVE_BUILD(e, t),
    query: {
      platform: (0, c.O)(),
      locale: a
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(n => {
    let r = n.body;
    0 === r.manifests.length ? s.h.dispatch({
      type: "APPLICATION_BUILD_NOT_FOUND",
      applicationId: e,
      branchId: t
    }) : s.h.dispatch({
      type: "APPLICATION_BUILD_FETCH_SUCCESS",
      applicationId: e,
      branchId: t,
      locale: a,
      build: r
    })
  }, n => {
    let {
      status: r
    } = n;
    404 === r ? s.h.dispatch({
      type: "APPLICATION_BUILD_NOT_FOUND",
      applicationId: e,
      branchId: t
    }) : m(e, t)
  })
}