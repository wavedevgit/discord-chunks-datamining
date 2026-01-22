/** Chunk was on 35641 **/
/** chunk id: 888940, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
async function s(e) {
  let t = await a.Bo.get({
    url: r.Rsh.STORE_EULA(e),
    oldFormErrors: true,
    rejectWithError: false
  });
  i.h.dispatch({
    type: "EULA_FETCH_SUCCESS",
    eula: t.body
  })
}