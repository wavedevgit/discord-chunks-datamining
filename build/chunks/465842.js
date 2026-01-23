/** Chunk was on 64676 **/
/** chunk id: 465842, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  K: () => r
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk568004 = require("./568004.js"),
  Chunk652215 = require("./652215.js");
async function r(t, e, s, r) {
  if (a.A.needsToFetchBuildSize(s)) {
    n.h.dispatch({
      type: "APPLICATION_BUILD_SIZE_FETCH_START",
      buildId: s
    });
    try {
      let a = await l.Bo.post({
        url: i.Rsh.APPLICATION_BUILD_SIZE(t, e, s),
        body: {
          manifest_ids: r
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      n.h.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_SUCCESS",
        buildId: s,
        sizeKB: a.body.size_kb
      })
    } catch (t) {
      n.h.dispatch({
        type: "APPLICATION_BUILD_SIZE_FETCH_FAIL",
        buildId: s
      })
    }
  }
}