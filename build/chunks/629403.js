/** Chunk was on 64228 **/
/** chunk id: 629403, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let r = {
  updateNote(e, l) {
    n.Bo.put({
      url: i.Rsh.NOTE(e),
      body: {
        note: l
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}