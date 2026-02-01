/** Chunk was on 12907 **/
/** chunk id: 657299, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk73153 = require("./73153.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");
let o = {
  dismissForApplicationId(e) {
    i.h.dispatch({
      type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
      key: e,
      value: true
    }), r.default.track(l.HAw.CLOSE_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: e,
      acknowledged: true
    })
  }
}