/** Chunk was on 82008 **/
/** chunk id: 34854, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let o = {
  updateNote(e, n) {
    r.tn.put({
      url: l.ANM.NOTE(e),
      body: {
        note: n
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}