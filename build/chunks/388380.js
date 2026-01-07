/** Chunk was on 29709 **/
/** chunk id: 388380, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let s = {
  async fetch() {
    try {
      let e = await r.tn.get({
        url: l.ANM.FRIEND_SUGGESTIONS,
        rejectWithError: true
      });
      i.Z.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
        suggestions: e.body
      })
    } catch (e) {
      i.Z.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
      })
    }
  },
  ignore(e) {
    r.tn.del({
      url: l.ANM.FRIEND_SUGGESTION(e),
      rejectWithError: true
    })
  }
}