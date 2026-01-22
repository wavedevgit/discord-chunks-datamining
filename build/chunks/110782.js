/** Chunk was on web.js **/
/** chunk id: 110782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cd: () => c,
  Wp: () => u,
  Yq: () => l
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk319317 = require("./319317.js"),
  Chunk371794 = require("./371794.js"),
  Chunk652215 = require("./652215.js");
async function l() {
  try {
    let e = await (0, s.aP)({
      url: o.Rsh.LIBRARY,
      oldFormErrors: true,
      rejectWithError: false
    }, false);
    i.h.dispatch({
      type: "LIBRARY_FETCH_SUCCESS",
      libraryApplications: e.body
    })
  } catch (e) {
    i.h.dispatch({
      type: "LIBRARY_FETCH_FAIL",
      error: e
    })
  }
}
async function c(e) {
  let t = e.primarySkuId;
  if (null == t) return;
  let n = (await r.Bo.get({
    url: o.Rsh.APPLICATION_BRANCH_LIST(e.id),
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => e.body)).map(n => a.A.createForTestMode({
    id: e.id,
    skuId: t,
    branch: n
  }));
  i.h.dispatch({
    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
    libraryApplications: n
  })
}

function u(e, t, n) {
  i.h.dispatch({
    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
    applicationId: e,
    branchId: t,
    launchOptionId: n
  })
}