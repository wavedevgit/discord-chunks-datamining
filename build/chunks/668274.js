/** Chunk was on 78662 **/
/** chunk id: 668274, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  N: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
async function s(n) {
  let e = await a.tn.get({
    url: r.ANM.STORE_EULA(n),
    oldFormErrors: true,
    rejectWithError: false
  });
  i.Z.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: e.body
  })
}