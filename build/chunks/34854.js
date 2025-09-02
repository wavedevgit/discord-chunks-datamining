/** Chunk was on 31553 **/
/** chunk id: 34854, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let i = {
  updateNote(e, n) {
    l.tn.put({
      url: r.ANM.NOTE(e),
      body: {
        note: n
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}