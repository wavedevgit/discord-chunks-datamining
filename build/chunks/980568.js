/** Chunk was on 46653 **/
/** chunk id: 980568, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk570140 = require("./570140.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
let o = {
  dismissForApplicationId(t) {
    n.Z.dispatch({
      type: "ACTIVITY_INVITE_EDUCATION_DISMISS",
      key: t,
      value: true
    }), r.default.track(s.rMx.CLOSE_TUTORIAL, {
      tutorial: "activity-invite-nux-inline",
      application_id: t,
      acknowledged: true
    })
  }
}