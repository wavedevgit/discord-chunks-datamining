/** Chunk was on 34712 **/
/** chunk id: 34854, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let l = {
  updateNote(e, n) {
    o.tn.put({
      url: r.ANM.NOTE(e),
      body: {
        note: n
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}