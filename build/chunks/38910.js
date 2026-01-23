/** Chunk was on 75052 **/
/** chunk id: 38910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let s = {
  async fetch() {
    try {
      let e = await r.Bo.get({
        url: o.Rsh.FRIEND_SUGGESTIONS,
        rejectWithError: true
      });
      i.h.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
        suggestions: e.body
      })
    } catch (e) {
      i.h.dispatch({
        type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
      })
    }
  },
  ignore(e) {
    r.Bo.del({
      url: o.Rsh.FRIEND_SUGGESTION(e),
      rejectWithError: true
    })
  }
}