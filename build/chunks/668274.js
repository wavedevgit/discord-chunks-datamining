/** Chunk was on 78662 **/
/** chunk id: 668274, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  N: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function s(e) {
  let n = await r.tn.get({
    url: a.ANM.STORE_EULA(e),
    oldFormErrors: true,
    rejectWithError: false
  });
  i.Z.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: n.body
  })
}