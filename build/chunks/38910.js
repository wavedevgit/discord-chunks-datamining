/** Chunk was on 75052 **/
/** chunk id: 38910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let o = {
  async fetch() {
    try {
      let e = await r.Bo.get({
        url: i.Rsh.FRIEND_SUGGESTIONS,
        rejectWithError: true
      });
      s.h.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
        suggestions: e.body
      })
    } catch (e) {
      s.h.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
      })
    }
  },
  ignore(e) {
    r.Bo.del({
      url: i.Rsh.FRIEND_SUGGESTION(e),
      rejectWithError: true
    })
  }
}