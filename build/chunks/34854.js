/** Chunk was on 28883 **/
/** chunk id: 34854, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let r = {
  updateNote(e, n) {
    o.tn.put({
      url: l.ANM.NOTE(e),
      body: {
        note: n
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}