/** Chunk was on 33721 **/
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
      let e = await Chunk544891.tn.get({
        url: Chunk981631.ANM.FRIEND_SUGGESTIONS,
        rejectWithError: true
      });
      Chunk570140.Z.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
        suggestions: module.body
      })
    } catch (e) {
      Chunk570140.Z.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
      })
    }
  },
  ignore(e) {
    r.tn.del({
      url: o.ANM.FRIEND_SUGGESTION(e),
      rejectWithError: true
    })
  }
}