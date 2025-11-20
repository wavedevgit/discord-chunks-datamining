/** Chunk was on web.js **/
/** chunk id: 401430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Wt: () => f,
  mc: () => _,
  q$: () => p
}), require("./415506.js"), require("./997841.js"), require("./35282.js");
var Chunk95015 = require("./95015.js"),
  Chunk570140 = require("./570140.js"),
  Chunk566620 = require("./566620.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk973616 = require("./973616.js"),
  Chunk591759 = require("./591759.js"),
  Chunk978085 = require("./978085.js"),
  Chunk981631 = require("./981631.js");
async function f(e, t) {
  i.Z.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    if (!await (0, a.W5)(e)) throw Error("Do not have access!");
    let n = s.Z.getApplication(e);
    null == n && (n = l.ZP.createFromServer(await o.ZP.fetchApplication(e)));
    let f = (0, r.yE)(n.flags, d.udG.EMBEDDED);
    if (f && (null == t || !c.Z.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return f || u.GR(n), i.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: f ? t : null
    }), n
  } catch (t) {
    return i.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function _() {
  Chunk570140.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function p() {
  Chunk570140.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}