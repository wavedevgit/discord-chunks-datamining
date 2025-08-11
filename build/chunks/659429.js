/** Chunk was on 1272 **/
/** chunk id: 659429, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk34756 = require("./34756.js"),
  Chunk981631 = require("./981631.js");
async function o(e) {
  i.Z.dispatch({
    type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_START",
    applicationId: e
  });
  try {
    let t = (await r.tn.get({
      url: a.ANM.APPLICATION_ACTIVITY_STATISTICS(e),
      oldFormErrors: true,
      rejectWithError: false
    })).body;
    return i.Z.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS",
      statistics: t,
      applicationId: e
    }), t
  } catch (t) {
    throw i.Z.dispatch({
      type: "APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL",
      applicationId: e
    }), new l.Z(t)
  }
}