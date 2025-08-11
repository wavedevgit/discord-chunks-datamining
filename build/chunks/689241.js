/** Chunk was on 226 **/
/** chunk id: 689241, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  q: () => r
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk173747 = require("./173747.js"),
  Chunk981631 = require("./981631.js");
async function r(t, e, s, r) {
  if (a.Z.needsToFetchBuildSize(s)) {
    n.Z.dispatch({
      type: "APPLICATION_BUILD_SIZE_FETCH_START",
      buildId: s
    });
    try {
      let a = await l.tn.post({
        url: i.ANM.APPLICATION_BUILD_SIZE(t, e, s),
        body: {
          manifest_ids: r
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      n.Z.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
        buildId: s,
        sizeKB: a.body.size_kb
      })
    } catch (t) {
      n.Z.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
        buildId: s
      })
    }
  }
}