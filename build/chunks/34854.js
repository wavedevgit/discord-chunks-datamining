/** Chunk was on 93979 **/
/** chunk id: 34854, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => r
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let r = {
  updateNote(e, n) {
    l.tn.put({
      url: o.ANM.NOTE(e),
      body: {
        note: n
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}