/** Chunk was on 75283 **/
/** chunk id: 34854, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let i = {
  updateNote(e, t) {
    r.tn.put({
      url: o.ANM.NOTE(e),
      body: {
        note: t
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}