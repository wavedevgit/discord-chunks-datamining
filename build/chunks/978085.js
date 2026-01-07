/** Chunk was on web.js **/
/** chunk id: 978085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GR: () => c,
  b8: () => l,
  ul: () => u
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk85521 = require("./85521.js"),
  Chunk73346 = require("./73346.js"),
  Chunk981631 = require("./981631.js");
async function l() {
  try {
    let e = await (0, o.Kb)({
      url: s.ANM.LIBRARY,
      oldFormErrors: true,
      rejectWithError: false
    }, false);
    i.Z.dispatch({
      type: "LIBRARY_FETCH_SUCCESS",
      libraryApplications: e.body
    })
  } catch (e) {
    i.Z.dispatch({
      type: "LIBRARY_FETCH_FAIL",
      error: e
    })
  }
}
async function c(e) {
  let t = e.primarySkuId;
  if (null == t) return;
  let n = (await r.tn.get({
    url: s.ANM.APPLICATION_BRANCH_LIST(e.id),
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => e.body)).map(n => a.Z.createForTestMode({
    id: e.id,
    skuId: t,
    branch: n
  }));
  i.Z.dispatch({
    type: "LIBRARY_APPLICATIONS_TEST_MODE_ENABLED",
    libraryApplications: n
  })
}

function u(e, t, n) {
  i.Z.dispatch({
    type: "LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE",
    applicationId: e,
    branchId: t,
    launchOptionId: n
  })
}