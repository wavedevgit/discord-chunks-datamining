/** Chunk was on 76708 **/
/** chunk id: 34854, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let l = {
  updateNote(e, t) {
    r.tn.put({
      url: i.ANM.NOTE(e),
      body: {
        note: t
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  }
}