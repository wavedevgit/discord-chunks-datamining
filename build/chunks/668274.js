/** Chunk was on 78662 **/
/** chunk id: 668274, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  N: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function o(e) {
  let t = await n.tn.get({
    url: a.ANM.STORE_EULA(e),
    oldFormErrors: true,
    rejectWithError: false
  });
  l.Z.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: t.body
  })
}