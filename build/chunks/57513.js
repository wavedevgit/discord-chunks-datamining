/** Chunk was on web.js **/
/** chunk id: 57513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => g
});
var Chunk544891 = require("./544891.js"),
  Chunk379649 = require("./379649.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk706454 = require("./706454.js"),
  Chunk283595 = require("./283595.js"),
  Chunk129542 = require("./129542.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js");
let f = 10 * Chunk70956.Z.Millis.MINUTE,
  p = 10 * Chunk70956.Z.Millis.MINUTE,
  _ = +Chunk70956.Z.Millis.MINUTE,
  m = {};

function h(e, t) {
  null == m[t] && (m[t] = new a.V7), m[t].start(f + Math.random() * p, () => {
    null != l.Z.getLibraryApplication(e, t) && g(e, t)
  })
}
async function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    a = s.default.locale;
  return o.Z.dispatch({
    type: "APPLICATION_BUILD_FETCH_START",
    applicationId: e,
    branchId: t,
    locale: a
  }), n && await (0, i._v)(Math.random() * _), r.tn.get({
    url: d.ANM.APPLICATION_LIVE_BUILD(e, t),
    query: {
      platform: (0, c.D)(),
      locale: a
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(n => {
    let r = n.body;
    if (0 === r.manifests.length) return void o.Z.dispatch({
      type: "APPLICATION_BUILD_NOT_FOUND",
      applicationId: e,
      branchId: t
    });
    o.Z.dispatch({
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
    404 === r ? o.Z.dispatch({
      type: "APPLICATION_BUILD_NOT_FOUND",
      applicationId: e,
      branchId: t
    }) : h(e, t)
  })
}