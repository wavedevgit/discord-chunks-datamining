/** Chunk was on 98360 **/
/** chunk id: 34854, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let l = {
  updateNote(e, n) {
    r.tn.put({
      url: o.ANM.NOTE(e),
      body: {
        note: n
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}