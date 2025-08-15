/** Chunk was on 31253 **/
/** chunk id: 401430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Wt: () => d,
  mc: () => E,
  q$: () => I
}), require("./415506.js"), require("./997841.js"), require("./35282.js");
var Chunk570140 = require("./570140.js"),
  Chunk566620 = require("./566620.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk973616 = require("./973616.js"),
  Chunk630388 = require("./630388.js"),
  Chunk591759 = require("./591759.js"),
  Chunk978085 = require("./978085.js"),
  Chunk981631 = require("./981631.js");
async function d(e, t) {
  r.Z.dispatch({
    applicationId: e,
    type: "DEVELOPER_TEST_MODE_AUTHORIZATION_START"
  });
  try {
    if (!await (0, i.W5)(e)) throw Error("Do not have access!");
    let n = o.Z.getApplication(e);
    null == n && (n = a.ZP.createFromServer(await l.ZP.fetchApplication(e)));
    let d = (0, c.yE)(n.flags, _.udG.EMBEDDED);
    if (d && (null == t || !s.Z.URL_REGEX.test(t))) throw Error("Invalid Origin URL for embedded application");
    return d || u.GR(n), r.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS",
      applicationId: e,
      originURL: d ? t : null
    }), n
  } catch (t) {
    return r.Z.dispatch({
      type: "DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL",
      applicationId: e,
      error: t.message
    }), null
  }
}

function E() {
  Chunk570140.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET"
  })
}

function I() {
  Chunk570140.Z.dispatch({
    type: "DEVELOPER_TEST_MODE_RESET_ERROR"
  })
}