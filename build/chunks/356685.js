/** Chunk was on 61 **/
/** chunk id: 356685, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => i
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
async function i(e, t, n) {
  return (await r.tn.get({
    url: l.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
    query: {
      type: t,
      entity_id: n
    },
    rejectWithError: false
  })).body
}