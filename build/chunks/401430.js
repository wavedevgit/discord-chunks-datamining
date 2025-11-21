/** Chunk was on web.js **/
/** chunk id: 401430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wt: () => _,
  mc: () => p,
  q$: () => h
}), require("./415506.js"), require("./997841.js"), require("./35282.js");
var Chunk95015 = require("./95015.js"),
  Chunk570140 = require("./570140.js"),
  Chunk566620 = require("./566620.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk550385 = require("./550385.js"),
  Chunk973616 = require("./973616.js"),
  Chunk591759 = require("./591759.js"),
  Chunk978085 = require("./978085.js"),
  Chunk981631 = require("./981631.js");
async function _(e, t) {
  i.Z.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    if (!await (0, a.W5)(e)) throw Error("Do not have access!");
    let n = s.Z.getApplication(e);
    null == n && (n = c.ZP.createFromServer(await o.ZP.fetchApplication(e)));
    let l = (0, r.yE)(n.flags, f.udG.EMBEDDED);
    if (l && (null == t || !u.Z.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return l || d.GR(n), i.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: l ? t : null
    }), n
  } catch (t) {
    return i.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function p() {
  Chunk550385.oq.getState().activePanel === Chunk550385.wh.APPLICATION_TEST_MODE_DEBUG && (0, Chunk550385.Ll)(), Chunk570140.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function h() {
  Chunk550385.oq.getState().activePanel === Chunk550385.wh.APPLICATION_TEST_MODE_DEBUG && (0, Chunk550385.Ll)(), Chunk570140.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}