/** Chunk was on 63974 **/
/** chunk id: 629403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
let r = {
  updateNote(e, t) {
    l.Bo.put({
      url: i.Rsh.NOTE(e),
      body: {
        note: t
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}