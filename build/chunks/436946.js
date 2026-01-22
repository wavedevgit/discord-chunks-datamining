/** Chunk was on 21738 **/
/** chunk id: 436946, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk178253 = require("./178253.js"),
  Chunk652215 = require("./652215.js");
async function s(e) {
  i.h.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let t = (await r.Bo.get({
      url: a.Rsh.APPLICATION_ACTIVITY_STATISTICS(e),
      oldFormErrors: true,
      rejectWithError: false
    })).body;
    return i.h.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: t,
      applicationId: e
    }), t
  } catch (t) {
    throw i.h.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
      applicationId: e
    }), new l.A(t)
  }
}