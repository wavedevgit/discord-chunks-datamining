/** Chunk was on 39778 **/
/** chunk id: 367130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk349435 = require("./349435.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  return r.Bo.post({
    url: l.Rsh.ADD_SAFETY_WARNING(e),
    body: {
      safety_warning_type: i._j.LIKELY_ATO
    },
    rejectWithError: false
  })
}